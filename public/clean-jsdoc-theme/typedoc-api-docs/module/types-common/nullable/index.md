---
title: Nullable
kind: typedef
longname: module:types/common.Nullable
description: Makes all properties of T optional and nullable
---

# Nullable

<Signature code="Nullable<T> = { [P in keyof T]?: T[P] | null }" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L29" label="common.ts:29" />

Makes all properties of T optional and nullable

**Type Parameters**

- `T` — The base type

**Example**

```typescript
interface User {
  id: string
  name: string
  age: number
}

type PartialNullableUser = Nullable<User>
// { id?: string | null; name?: string | null; age?: number | null }
```
