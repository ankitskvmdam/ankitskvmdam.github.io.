---
title: DeepReadonly
kind: typedef
longname: module:types/common.DeepReadonly
description: Deep readonly - makes all nested properties readonly
---

# DeepReadonly

<Signature code="DeepReadonly<T> = T extends (infer R)[] ? ReadonlyArray<DeepReadonly<R>> : T extends object ? { readonly [P in keyof T]: DeepReadonly<T[P]> } : T" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L124" label="common.ts:124" />

Deep readonly - makes all nested properties readonly

**Type Parameters**

- `T` — The base type

**Example**

```typescript
interface State {
  user: { name: string }
  items: string[]
}

const state: DeepReadonly<State> = { user: { name: 'Alice' }, items: [] }
// state.user.name = 'Bob' // Error!
```
