import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import config from '../astro.config.mjs';

const origin = new URL(config.site).origin;
const out = new URL('../dist/', import.meta.url);
const decode = (text) => text.replace(/&#(x[\da-f]+|\d+);/gi, (_, n) => String.fromCodePoint(n[0].toLowerCase() === 'x' ? parseInt(n.slice(1), 16) : Number(n)))
  .replace(/&(quot|apos|lt|gt|amp);/g, (_, n) => ({ quot: '"', apos: "'", lt: '<', gt: '>', amp: '&' })[n]);
const xml = (text) => text.replace(/[<>&"']/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[c]);
const label = (text) => text.replace(/[\[\]\\]/g, '\\$&').replace(/\s+/g, ' ').trim();
const pages = [];
async function scan(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await scan(path);
    else if (entry.name.endsWith('.html') && entry.name !== '404.html') {
      const html = await readFile(path, 'utf8');
      if (/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html)) continue;
      const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
      const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1];
      if (!canonical || !title) throw new Error(`Missing discovery metadata: ${path}`);
      const url = new URL(decode(canonical));
      if (url.origin !== origin || url.search || url.hash) throw new Error(`Invalid canonical: ${url}`);
      pages.push({ url: url.href, path: url.pathname, title: decode(title).replace(/ — Postgres Hacking$/, '') });
    }
  }
}
await scan(out.pathname);
pages.sort((a, b) => a.url.localeCompare(b.url));
if (!pages.length || new Set(pages.map(p => p.url)).size !== pages.length) throw new Error('Empty or duplicate sitemap');
// No fabricated lastmod timestamps or ranking hints: only actual canonical pages.
await writeFile(new URL('sitemap.xml', out), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(p => `  <url><loc>${xml(p.url)}</loc></url>`).join('\n')}\n</urlset>\n`);
await writeFile(new URL('robots.txt', out), `# Public site: search engines and AI crawlers are welcome.\nUser-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
const groups = [
  ['Start here', p => p.path.split('/').filter(Boolean).length <= 1],
  ['Session recordings and summaries', p => p.path.startsWith('/sessions/')],
  ['Projects', p => p.path.startsWith('/projects/')],
  ['People', p => p.path.startsWith('/people/')],
  ['Topics', p => p.path.startsWith('/topics/')],
];
let llms = `# Postgres Hacking\n\n> A public workshop for agentic Postgres development, hosted by PostgresTV: recorded hacking sessions, source-linked summaries, patches, reviews, blockers, and follow-up work.\n\nPostgres Hacking is also called Hacking Postgres or Postgres Agentic Hacking. The community uses AI agents to investigate Postgres problems and develop and review patches; humans verify the results and own submissions. This is a community workbench, not the official PostgreSQL project website.\n\nSession pages link to recordings and supporting sources. Respect each page's provenance: call notes and summaries are not verbatim transcripts, pending timecodes are unavailable, and proposed work is not evidence of a merged patch. Follow linked upstream discussions for current patch status.\n\n`;
const remaining = new Set(pages);
for (const [name, matches] of groups) {
  const group = pages.filter(p => remaining.has(p) && matches(p));
  if (!group.length) continue;
  llms += `## ${name}\n\n` + group.map(p => { remaining.delete(p); return `- [${label(p.title)}](${p.url})`; }).join('\n') + '\n\n';
}
if (remaining.size) throw new Error('Ungrouped pages: update llms.txt categories');
llms += `## Optional\n\n- [PostgresTV](https://www.youtube.com/@PostgresTV): Original video recordings.\n- [Community](https://t.me/postgres_hacking): Public discussion and participation.\n- [Website source](https://github.com/NikolayS/hacking-postgres): Site implementation and content.\n- [XML sitemap](${origin}/sitemap.xml): Complete canonical page inventory.\n`;
await writeFile(new URL('llms.txt', out), llms);
console.log(`Discovery files generated for ${pages.length} canonical pages.`);
