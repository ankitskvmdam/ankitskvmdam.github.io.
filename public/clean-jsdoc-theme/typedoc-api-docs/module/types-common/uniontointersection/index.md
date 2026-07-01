---
title: UnionToIntersection
kind: typedef
longname: module:types/common.UnionToIntersection
description: Union to intersection type conversion
---

# UnionToIntersection

<Signature code="UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L317" label="common.ts:317" />

Union to intersection type conversion

**Type Parameters**

- `U` — Union type

**Example**

```typescript
type A = { a: string }
type B = { b: number }
type AB = UnionToIntersection<A | B>
// { a: string } & { b: number }
```
