---
title: sortBy
kind: function
longname: module:utils/array.sortBy
description: Sorts an array by multiple criteria
---

# sortBy

<Signature
  code="sortBy<
	T,
>(
	array: T[],
	comparators: ((a: T, b: T) => number)[],
): T[]"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L296" label="array.ts:296" />

Sorts an array by multiple criteria

**Type Parameters**

- `T` — Array element type

**Parameters**

- `array` (T\[]) — The input array
- `comparators` (((a: T, b: T) => number)\[]) — Array of comparator functions

**Returns**

- `T[]` — New sorted array

**Example**

```typescript
const users = [
  { name: 'Bob', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Alice', age: 30 }
]

sortBy(users, [
  (a, b) => a.name.localeCompare(b.name),
  (a, b) => a.age - b.age
])
// [{ name: 'Alice', age: 25 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 30 }]
```
