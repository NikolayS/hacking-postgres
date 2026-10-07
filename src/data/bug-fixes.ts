// Commit metadata verified against the upstream repository on 2026-10-07.
export const bugFixes = [
  {
    "sha": "e2c812f1475dc75ab6f8a39fb5696d8d32d05fa1",
    "title": "Track RI fast-path FK-check batches per subtransaction",
    "date": "2026-08-22",
    "url": "https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=e2c812f1475dc75ab6f8a39fb5696d8d32d05fa1",
    "credits": [
      "Reported-by: Noah Misch <noah@leadboat.com>",
      "Reported-by: Nikolay Samokhvalov <nik@postgres.ai>"
    ],
    "threads": [
      "https://postgr.es/m/20260705222115.be.noahmisch@microsoft.com"
    ]
  },
  {
    "sha": "16735af3e39eeb6e3a2c2bcc1e4a17eabc74d377",
    "title": "Fix REPACK worker startup and shutdown sequences",
    "date": "2026-09-17",
    "url": "https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=16735af3e39eeb6e3a2c2bcc1e4a17eabc74d377",
    "credits": [
      "Author: Bharath Rupireddy <bharath.rupireddyforpostgres@gmail.com>",
      "Author: Shihao Zhong <zhong950419@gmail.com>",
      "Author: Álvaro Herrera <alvherre@kurilemu.de>",
      "Reviewed-by: Antonin Houska <ah@cybertec.at>",
      "Reviewed-by: Masahiko Sawada <sawada.mshk@gmail.com>",
      "Reviewed-by: Shihao Zhong <zhong950419@gmail.com>",
      "Reported-by: Nathan Bossart <nathandbossart@gmail.com>",
      "Reported-by: Bharath Rupireddy <bharath.rupireddyforpostgres@gmail.com>",
      "Reported-by: Nikolay Samokhvalov <nik@postgres.ai>"
    ],
    "threads": [
      "https://postgr.es/m/CALj2ACVAxA9HxvFe8HSspTJ-UO4Aoz%3DkuQdZBeLrod0gqUxH3g%40mail.gmail.com",
      "https://postgr.es/m/apBpOVZOyqrakEr_@nathan"
    ]
  },
  {
    "sha": "2c45694a240e89c3f7d848d433f78e394521b6d6",
    "title": "Fix RI fast-path permission checks",
    "date": "2026-09-19",
    "url": "https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=2c45694a240e89c3f7d848d433f78e394521b6d6",
    "credits": [
      "Reported-by: Nikolay Samokhvalov <nik@postgres.ai>",
      "Author: Nikolay Samokhvalov <nik@postgres.ai>"
    ],
    "threads": [
      "https://www.postgr.es/m/CAM527d9BgPjeOOYmbCBTd57R145qHCk-dzw9qNq%2BnOrDq1j__A%40mail.gmail.com"
    ]
  },
  {
    "sha": "c62b330912e2095dc8dee2f749adf7e5d94ca611",
    "title": "Invalidate RI fast-path metadata on operator family changes",
    "date": "2026-09-19",
    "url": "https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=c62b330912e2095dc8dee2f749adf7e5d94ca611",
    "credits": [
      "Reported-by: Nikolay Samokhvalov <nik@postgres.ai>",
      "Author: Nikolay Samokhvalov <nik@postgres.ai>"
    ],
    "threads": [
      "https://www.postgr.es/m/CAM527d9PzFzagr67N0%3DEx2ng1p5HzrcAszy3j5OoZKHXQMARXA%40mail.gmail.com"
    ]
  },
  {
    "sha": "dca73f7dd03ddfc89a88019659fc0161e0427a8c",
    "title": "Fix sequence synchronization failure on a concurrent refresh",
    "date": "2026-09-23",
    "url": "https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=dca73f7dd03ddfc89a88019659fc0161e0427a8c",
    "credits": [
      "Reported-by: Nikolay Samokhvalov <nik@postgres.ai>",
      "Author: vignesh C <vignesh21@gmail.com>",
      "Reviewed-by: shveta malik <shveta.malik@gmail.com>",
      "Reviewed-by: Zhijie Hou <houzj.fnst@fujitsu.com>",
      "Reviewed-by: Andrey Borodin <x4mmm@yandex-team.ru>"
    ],
    "threads": [
      "https://postgr.es/m/CAM527d9mL-bOofX-G7Sp441vA3Y_fa_7JBh03m-ZPduikn_XUg@mail.gmail.com"
    ]
  },
  {
    "sha": "1a846a555afb0e5f2008f3aefe8f77acbe6ffba6",
    "title": "Check EXECUTE privilege on functions invoked by the RI fast path",
    "date": "2026-09-26",
    "url": "https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=1a846a555afb0e5f2008f3aefe8f77acbe6ffba6",
    "credits": [
      "Reported-by: Nikolay Samokhvalov <nik@postgres.ai> (offlist)",
      "Reviewed-by: Matheus Alcantara <matheusssilv97@gmail.com>"
    ],
    "threads": [
      "https://postgr.es/m/CA+HiwqGH+b7sXmsH8sT18diujbheSObWs0gWXqLZqRccMKvZAA@mail.gmail.com"
    ]
  },
  {
    "sha": "42e96cf2fe095c822f76bc94669ea875cb1e3351",
    "title": "Refresh autovacuum costs while waiting for parallel workers",
    "date": "2026-10-01",
    "url": "https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=42e96cf2fe095c822f76bc94669ea875cb1e3351",
    "credits": [
      "Reported-by: Nikolay Samokhvalov <nik@postgres.ai>",
      "Author: Bharath Rupireddy <bharath.rupireddyforpostgres@gmail.com>",
      "Reviewed-by: Manu <manuelreyesbravo@gmail.com>",
      "Reviewed-by: Zsolt Parragi <zsolt.parragi@percona.com>",
      "Reviewed-by: Daniel Gustafsson <daniel@yesql.se>",
      "Reviewed-by: Masahiko Sawada <sawada.mshk@gmail.com>"
    ],
    "threads": [
      "https://postgr.es/m/CAM527d-GL=Jp2EJXBSnVBGPK-4XEZwWof5Cv8P0hghS_og6oAg@mail.gmail.com"
    ]
  }
];
