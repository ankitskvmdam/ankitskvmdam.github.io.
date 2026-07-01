---
title: OptionalKeys
kind: typedef
longname: module:types/common.OptionalKeys
description: Makes specific properties of T optional
---

# OptionalKeys

<Signature code="OptionalKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L75" label="common.ts:75" />

Makes specific properties of T optional

**Type Parameters**

- `T` — The base type
- `K` extends `keyof T` — Keys to make optional

**Example**

```typescript
interface User {
  id: string
  name: string
  email: string
}

type CreateUserInput = OptionalKeys<User, 'id'>
// { id?: string; name: string; email: string }
```
