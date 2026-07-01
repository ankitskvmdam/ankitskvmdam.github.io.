---
title: unescapeHtml
kind: function
longname: module:utils/string.unescapeHtml
description: Unescapes HTML special characters in a string
---

# unescapeHtml

<Signature code="unescapeHtml(str: string): string" />

<SourceLink href="/source/docs-site/typedoc-src/utils/string-ts/#L236" label="string.ts:236" />

Unescapes HTML special characters in a string

**Parameters**

- `str` (string) — The escaped string

**Returns**

- `string` — String with HTML characters unescaped

**Example**

```typescript
unescapeHtml('&lt;div&gt;') // '<div>'
```
