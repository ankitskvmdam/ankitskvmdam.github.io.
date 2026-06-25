---
title: createFormatter
kind: function
longname: createFormatter
description: Build a {@link Formatter} that pads the level name to a fixed width.
---

# createFormatter

<SourceLink href="/source/index-ts/#L147" label="index.ts:147" />

Build a [Formatter](/formatter) that pads the level name to a fixed width.

<Signature code="createFormatter(width: number): Formatter" />

**Parameters**

- `width` (number) — Column width for the level label.

**Returns**

- [`Formatter`](/formatter) — A formatter.

<Signature code="createFormatter(template: string): Formatter" />

Build a [Formatter](/formatter) from a template string.

**Parameters**

- `template` (string) — A template containing `{level}` and `{message}` tokens.

**Returns**

- [`Formatter`](/formatter) — A formatter.
