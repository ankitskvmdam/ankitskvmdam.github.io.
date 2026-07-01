---
title: padRight
kind: function
longname: module:utils/string.padRight
description: Pads a string on the right
---

# padRight

<Signature code="padRight(str: string, length: number, char: string): string" />

<SourceLink href="/source/docs-site/typedoc-src/utils/string-ts/#L173" label="string.ts:173" />

Pads a string on the right

**Parameters**

- `str` (string) — The input string
- `length` (number) — Target length
- `char` (string, default: "' '") — Character to pad with

**Returns**

- `string` — Padded string

**Example**

```typescript
padRight('5', 3, '0') // '500'
padRight('hello', 10, '.') // 'hello.....'
```
