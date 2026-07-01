---
title: partition
kind: function
longname: module:utils/array.partition
description: Partitions an array into two arrays based on a predicate
---

# partition

<Signature
  code="partition<
	T,
>(
	array: T[],
	predicate: (item: T) => boolean,
): [T[], T[]]"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L385" label="array.ts:385" />

Partitions an array into two arrays based on a predicate

**Type Parameters**

- `T` — Array element type

**Parameters**

- `array` (T\[]) — The input array
- `predicate` ((item: T) => boolean) — Function to test elements

**Returns**

- `[T[], T[]]` — Tuple of \[matching, non-matching] elements

**Example**

```typescript
partition([1, 2, 3, 4, 5], n => n % 2 === 0)
// [[2, 4], [1, 3, 5]]
```
