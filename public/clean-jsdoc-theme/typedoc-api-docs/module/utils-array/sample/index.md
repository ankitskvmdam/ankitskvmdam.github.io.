---
title: sample
kind: function
longname: module:utils/array.sample
description: Picks a random element from an array
---

# sample

<Signature code="sample<T>(array: T[]): T | undefined" />

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L246" label="array.ts:246" />

Picks a random element from an array

**Type Parameters**

- `T` — Array element type

**Parameters**

- `array` (T\[]) — The input array

**Returns**

- `T | undefined` — Random element or undefined if array is empty

**Example**

```typescript
sample([1, 2, 3, 4, 5]) // 3 (random)
sample([]) // undefined
```
