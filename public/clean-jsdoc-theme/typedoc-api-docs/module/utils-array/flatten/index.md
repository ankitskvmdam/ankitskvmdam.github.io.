---
title: flatten
kind: function
longname: module:utils/array.flatten
description: Flattens a nested array to a specified depth
---

# flatten

<Signature code="flatten<T>(array: unknown[], depth: number): T[]" />

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L134" label="array.ts:134" />

Flattens a nested array to a specified depth

**Type Parameters**

- `T` — Base element type

**Parameters**

- `array` (unknown\[]) — The nested array
- `depth` (number, default: "1") — Maximum depth to flatten

**Returns**

- `T[]` — Flattened array

**Example**

```typescript
flatten([1, [2, [3, [4]]]], 1) // [1, 2, [3, [4]]]
flatten([1, [2, [3, [4]]]], 2) // [1, 2, 3, [4]]
flatten([1, [2, [3, [4]]]], Infinity) // [1, 2, 3, 4]
```
