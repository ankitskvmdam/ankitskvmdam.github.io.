---
title: shuffle
kind: function
longname: module:utils/array.shuffle
description: Shuffles an array using Fisher-Yates algorithm
---

# shuffle

<Signature code="shuffle<T>(array: T[]): T[]" />

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L222" label="array.ts:222" />

Shuffles an array using Fisher-Yates algorithm

**Type Parameters**

- `T` — Array element type

**Parameters**

- `array` (T\[]) — The input array

**Returns**

- `T[]` — New shuffled array (does not modify original)

**Example**

```typescript
shuffle([1, 2, 3, 4, 5]) // [3, 1, 5, 2, 4] (random order)
```
