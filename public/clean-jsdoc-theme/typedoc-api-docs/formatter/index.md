---
title: Formatter
kind: typedef
longname: Formatter
description: Turns a message + level into the final string written to the sink.
---

# Formatter

<Signature code="Formatter = (message: string, level: Level) => string" />

<SourceLink href="/source/index-ts/#L45" label="index.ts:45" />

Turns a message + level into the final string written to the sink.

**Parameters**

- `message` (string) — The raw message.
- `level` ([Level](/level)) — The severity it was logged at.

**Returns**

- `string`
