---
title: TupleToUnion
kind: typedef
longname: module:types/common.TupleToUnion
description: Extracts string literal union from const array
---

# TupleToUnion

<Signature code="TupleToUnion<T extends readonly unknown[]> = T[number]" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L383" label="common.ts:383" />

Extracts string literal union from const array

**Type Parameters**

- `T` extends `readonly unknown[]` — Readonly array type

**Example**

```typescript
const colors = ['red', 'green', 'blue'] as const
type Color = TupleToUnion<typeof colors> // 'red' | 'green' | 'blue'
```
