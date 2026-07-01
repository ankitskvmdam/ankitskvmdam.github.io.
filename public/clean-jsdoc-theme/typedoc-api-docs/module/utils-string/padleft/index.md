---
title: padLeft
kind: function
longname: module:utils/string.padLeft
description: Pads a string on the left
---

# padLeft

<Signature code="padLeft(str: string, length: number, char: string): string" />

<SourceLink href="/source/docs-site/typedoc-src/utils/string-ts/#L152" label="string.ts:152" />

Pads a string on the left

**Parameters**

- `str` (string) — The input string
- `length` (number) — Target length
- `char` (string, default: "' '") — Character to pad with

**Returns**

- `string` — Padded string

**Example**

```typescript
padLeft('5', 3, '0') // '005'
padLeft('hello', 10, ' ') // '     hello'
```
