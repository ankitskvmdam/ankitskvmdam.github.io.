---
title: PickByType
kind: typedef
longname: module:types/common.PickByType
description: Picks properties of T that have values assignable to V
---

# PickByType

<Signature code="PickByType<T, V> = Pick<T, KeysOfType<T, V>>" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L268" label="common.ts:268" />

Picks properties of T that have values assignable to V

**Type Parameters**

- `T` — Object type
- `V` — Value type to match

**Example**

```typescript
interface Mixed {
  count: number
  name: string
  active: boolean
  score: number
}

type NumberProps = PickByType<Mixed, number>
// { count: number; score: number }
```
