---
title: kebabCase
kind: function
longname: module:utils/string.kebabCase
description: Converts a string to kebab-case
---

# kebabCase

<Signature code="kebabCase(str: string): string" />

<SourceLink href="/source/docs-site/typedoc-src/utils/string-ts/#L66" label="string.ts:66" />

Converts a string to kebab-case

**Parameters**

- `str` (string) — The input string

**Returns**

- `string` — kebab-cased string

**Example**

```typescript
kebabCase('helloWorld') // 'hello-world'
kebabCase('HelloWorld') // 'hello-world'
kebabCase('hello_world') // 'hello-world'
```
