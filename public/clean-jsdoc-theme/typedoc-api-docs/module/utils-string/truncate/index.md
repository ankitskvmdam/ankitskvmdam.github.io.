---
title: truncate
kind: function
longname: module:utils/string.truncate
description: Truncates a string to a specified length
---

# truncate

<Signature code="truncate(str: string, maxLength: number, suffix: string): string" />

<SourceLink href="/source/docs-site/typedoc-src/utils/string-ts/#L131" label="string.ts:131" />

Truncates a string to a specified length

**Parameters**

- `str` (string) — The input string
- `maxLength` (number) — Maximum length of the result
- `suffix` (string, default: "'...'") — Suffix to append if truncated

**Returns**

- `string` — Truncated string

**Example**

```typescript
truncate('Hello World', 5) // 'Hello...'
truncate('Hello World', 5, '…') // 'Hello…'
truncate('Hi', 10) // 'Hi'
```
