---
title: keyBy
kind: function
longname: module:utils/array.keyBy
description: Creates a lookup object from an array
---

# keyBy

<Signature
  code="keyBy<
	T,
	K extends string | number | symbol,
>(
	array: T[],
	keySelector: (item: T) => K,
): Record<K, T>"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L460" label="array.ts:460" />

Creates a lookup object from an array

**Type Parameters**

- `T` — Array element type
- `K` extends `string | number | symbol` — Key type

**Parameters**

- `array` (T\[]) — The input array
- `keySelector` ((item: T) => K) — Function to extract the key

**Returns**

- `Record<K, T>` — Object mapping keys to elements

**Example**

```typescript
const users = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' }
]

keyBy(users, u => u.id)
// { '1': { id: '1', name: 'Alice' }, '2': { id: '2', name: 'Bob' } }
```
