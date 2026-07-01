---
title: Constructor
kind: typedef
longname: module:types/common.Constructor
description: Constructor type
---

# Constructor

<Signature code="Constructor<T = unknown, Args extends unknown[] = unknown[]> = (...args: Args) => T" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L209" label="common.ts:209" />

Constructor type

**Type Parameters**

- `T` = `unknown` — Instance type
- `Args` extends `unknown[]` = `unknown[]` — Constructor argument types

**Parameters**

- `args` (Args)

**Returns**

- `T`

**Example**

```typescript
type UserConstructor = Constructor<User, [string, number]>
```
