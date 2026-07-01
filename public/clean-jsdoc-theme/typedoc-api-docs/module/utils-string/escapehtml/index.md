---
title: escapeHtml
kind: function
longname: module:utils/string.escapeHtml
description: Escapes HTML special characters in a string
---

# escapeHtml

<Signature code="escapeHtml(str: string): string" />

<SourceLink href="/source/docs-site/typedoc-src/utils/string-ts/#L212" label="string.ts:212" />

Escapes HTML special characters in a string

**Parameters**

- `str` (string) — The input string

**Returns**

- `string` — String with HTML characters escaped

**Example**

```typescript
escapeHtml('<script>alert("xss")</script>')
// '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
```
