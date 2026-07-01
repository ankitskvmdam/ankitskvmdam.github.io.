---
title: camelCase
kind: function
longname: module:utils/string.camelCase
description: Converts a string to camelCase
---

# camelCase

<Signature code="camelCase(str: string): string" />

<SourceLink href="/source/docs-site/typedoc-src/utils/string-ts/#L45" label="string.ts:45" />

Converts a string to camelCase

**Parameters**

- `str` (string) — The input string (can be kebab-case, snake\_case, or space-separated)

**Returns**

- `string` — camelCased string

**Example**

```typescript
camelCase('hello-world') // 'helloWorld'
camelCase('hello_world') // 'helloWorld'
camelCase('Hello World') // 'helloWorld'
```
