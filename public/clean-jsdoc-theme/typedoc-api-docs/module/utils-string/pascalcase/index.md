---
title: pascalCase
kind: function
longname: module:utils/string.pascalCase
description: Converts a string to PascalCase
---

# pascalCase

<Signature code="pascalCase(str: string): string" />

<SourceLink href="/source/docs-site/typedoc-src/utils/string-ts/#L110" label="string.ts:110" />

Converts a string to PascalCase

**Parameters**

- `str` (string) — The input string

**Returns**

- `string` — PascalCased string

**Example**

```typescript
pascalCase('hello-world') // 'HelloWorld'
pascalCase('hello_world') // 'HelloWorld'
pascalCase('helloWorld') // 'HelloWorld'
```
