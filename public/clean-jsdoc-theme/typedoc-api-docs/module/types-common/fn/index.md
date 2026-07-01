---
title: Fn
kind: typedef
longname: module:types/common.Fn
description: Function type with specific argument and return types
---

# Fn

<Signature code="Fn<Args extends unknown[] = unknown[], Return = unknown> = (...args: Args) => Return" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L176" label="common.ts:176" />

Function type with specific argument and return types

**Type Parameters**

- `Args` extends `unknown[]` = `unknown[]` — Tuple of argument types
- `Return` = `unknown` — Return type

**Parameters**

- `args` (Args)

**Returns**

- `Return`

**Example**

```typescript
type AddFn = Fn<[number, number], number>
const add: AddFn = (a, b) => a + b
```
