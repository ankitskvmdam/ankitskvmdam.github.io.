---
title: LOG_LEVELS
kind: variable
longname: LOG_LEVELS
description: Severity levels for {@link Logger}, as an object-literal constant.
---

# LOG\_LEVELS

<Signature code="LOG_LEVELS: { DEBUG: 10; ERROR: 40; INFO: 20; WARN: 30 }" />

<SourceLink href="/source/index-ts/#L22" label="index.ts:22" />

Severity levels for [Logger](/logger), as an object-literal constant.

**Remarks**

Each entry keeps its own doc comment, so the page lists every member under "Properties" alongside the pretty-printed shape.

**Properties**

- `DEBUG` (10) — Fine-grained tracing, off in production.
- `ERROR` (40) — A failure that needs attention.
- `INFO` (20) — Normal operational messages.
- `WARN` (30) — Something unexpected, but recoverable.
