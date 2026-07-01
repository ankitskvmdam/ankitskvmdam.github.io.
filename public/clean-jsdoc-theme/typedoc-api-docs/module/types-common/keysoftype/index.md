---
title: KeysOfType
kind: typedef
longname: module:types/common.KeysOfType
description: Extracts keys of T that have values assignable to V
---

# KeysOfType

<Signature code="KeysOfType<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T]" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L232" label="common.ts:232" />

Extracts keys of T that have values assignable to V

**Type Parameters**

- `T` — Object type
- `V` — Value type to match

**Example**

```typescript
interface User {
  id: number
  name: string
  email: string
  age: number
}

type StringKeys = KeysOfType<User, string> // 'name' | 'email'
type NumberKeys = KeysOfType<User, number> // 'id' | 'age'
```
