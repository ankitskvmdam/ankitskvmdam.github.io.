---
title: wordWrap
kind: function
longname: module:utils/string.wordWrap
description: Wraps text to a specified width
---

# wordWrap

<Signature code="wordWrap(str: string, options: WordWrapOptions): string" />

<SourceLink href="/source/docs-site/typedoc-src/utils/string-ts/#L311" label="string.ts:311" />

Wraps text to a specified width

**Parameters**

- `str` (string) — The input string
- `options` ([WordWrapOptions](/module/utils-string/wordwrapoptions), default: "{}") — Word wrap options

**Returns**

- `string` — Wrapped string

**Example**

```typescript
wordWrap('This is a long line that needs wrapping', { width: 20 })
// 'This is a long line\nthat needs wrapping'
```
