---
title: snakeCase
kind: function
longname: module:utils/string.snakeCase
description: Converts a string to snake_case
---

# snakeCase

<Signature code="snakeCase(str: string): string" />

<SourceLink href="/source/docs-site/typedoc-src/utils/string-ts/#L88" label="string.ts:88" />

Converts a string to snake\_case

**Parameters**

- `str` (string) — The input string

**Returns**

- `string` — snake\_cased string

**Example**

```typescript
snakeCase('helloWorld') // 'hello_world'
snakeCase('HelloWorld') // 'hello_world'
snakeCase('hello-world') // 'hello_world'
```
