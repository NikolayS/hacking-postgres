#!/usr/bin/env python3
"""Turn YouTube's rolling auto-caption VTT into timestamped text blocks."""

from __future__ import annotations

import argparse
import html
import re
from pathlib import Path


TIMING = re.compile(r"^(\d\d):(\d\d):(\d\d)\.\d+ -->")
TAGS = re.compile(r"<[^>]+>")


def words(text: str) -> list[str]:
    text = html.unescape(TAGS.sub("", text)).replace("\n", " ")
    return text.split()


def overlap(previous: list[str], current: list[str]) -> int:
    limit = min(len(previous), len(current), 40)
    previous_lower = [word.lower() for word in previous[-limit:]]
    current_lower = [word.lower() for word in current[:limit]]
    for size in range(limit, 0, -1):
        if previous_lower[-size:] == current_lower[:size]:
            return size
    return 0


def compact(source: Path, block_seconds: int) -> str:
    lines = source.read_text(encoding="utf-8").splitlines()
    transcript: list[tuple[int, list[str]]] = []
    emitted: list[str] = []
    index = 0

    while index < len(lines):
        match = TIMING.match(lines[index])
        if not match:
            index += 1
            continue

        timestamp = int(match[1]) * 3600 + int(match[2]) * 60 + int(match[3])
        index += 1
        cue: list[str] = []
        while index < len(lines) and lines[index].strip():
            cue.extend(words(lines[index]))
            index += 1

        skip = overlap(emitted, cue)
        new_words = cue[skip:]
        if new_words:
            transcript.append((timestamp, new_words))
            emitted.extend(new_words)

    blocks: dict[int, list[str]] = {}
    for timestamp, cue_words in transcript:
        block = timestamp // block_seconds * block_seconds
        blocks.setdefault(block, []).extend(cue_words)

    output = []
    for timestamp, block_words in blocks.items():
        hours, remainder = divmod(timestamp, 3600)
        minutes, seconds = divmod(remainder, 60)
        stamp = f"{hours:02d}:{minutes:02d}:{seconds:02d}"
        output.append(f"[{stamp}] {' '.join(block_words)}")
    return "\n".join(output) + "\n"


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("destination", type=Path)
    parser.add_argument("--block-seconds", type=int, default=30)
    args = parser.parse_args()
    args.destination.write_text(compact(args.source, args.block_seconds), encoding="utf-8")


if __name__ == "__main__":
    main()
