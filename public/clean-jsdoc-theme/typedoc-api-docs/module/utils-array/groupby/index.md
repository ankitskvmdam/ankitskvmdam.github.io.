---
title: groupBy
kind: function
longname: module:utils/array.groupBy
description: Groups array elements by a key selector
---

# groupBy

<Signature
  code="groupBy<
	T,
	K extends string | number | symbol,
>(
	array: T[],
	keySelector: (item: T) => K,
): Record<K, T[]>"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L33" label="array.ts:33" />

Groups array elements by a key selector

**Type Parameters**

- `T` — Array element type
- `K` extends `string | number | symbol` — Key type (must be string | number | symbol)

**Parameters**

- `array` (T\[]) — The input array
- `keySelector` ((item: T) => K) — Function to extract the grouping key

**Returns**

- `Record<K, T[]>` — Object with grouped elements

**Example**

```typescript
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
]

groupBy(users, u => u.age)
// { 25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }], 30: [{ name: 'Bob', age: 30 }] }
```
