---
title: slugify
kind: function
longname: module:utils/string.slugify
description: Generates a slug from a string
---

# slugify

<Signature code="slugify(str: string): string" />

<SourceLink href="/source/docs-site/typedoc-src/utils/string-ts/#L262" label="string.ts:262" />

Generates a slug from a string

**Parameters**

- `str` (string) — The input string

**Returns**

- `string` — URL-safe slug

**Example**

```typescript
slugify('Hello World!') // 'hello-world'
slugify('TypeScript & JavaScript') // 'typescript-and-javascript'
slugify('你好世界') // '' (non-ASCII removed)
```
