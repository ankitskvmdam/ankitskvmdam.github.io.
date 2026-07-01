---
title: sampleSize
kind: function
longname: module:utils/array.sampleSize
description: Picks multiple random elements from an array
---

# sampleSize

<Signature code="sampleSize<T>(array: T[], count: number): T[]" />

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L266" label="array.ts:266" />

Picks multiple random elements from an array

**Type Parameters**

- `T` — Array element type

**Parameters**

- `array` (T\[]) — The input array
- `count` (number) — Number of elements to pick

**Returns**

- `T[]` — Array of random elements

**Example**

```typescript
sampleSize([1, 2, 3, 4, 5], 3) // [2, 4, 1] (random)
```
