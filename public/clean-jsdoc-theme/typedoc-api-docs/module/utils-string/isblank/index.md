---
title: isBlank
kind: function
longname: module:utils/string.isBlank
description: Checks if a string is empty or contains only whitespace
---

# isBlank

<Signature code="isBlank(str: string): boolean" />

<SourceLink href="/source/docs-site/typedoc-src/utils/string-ts/#L194" label="string.ts:194" />

Checks if a string is empty or contains only whitespace

**Parameters**

- `str` (string) — The input string

**Returns**

- `boolean` — True if string is empty or whitespace only

**Example**

```typescript
isBlank('') // true
isBlank('   ') // true
isBlank('hello') // false
isBlank('  hi  ') // false
```
