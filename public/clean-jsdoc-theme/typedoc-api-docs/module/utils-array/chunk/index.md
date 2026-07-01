---
title: chunk
kind: function
longname: module:utils/array.chunk
description: Chunks an array into smaller arrays of a specified size
---

# chunk

<Signature code="chunk<T>(array: T[], size: number): T[][]" />

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L105" label="array.ts:105" />

Chunks an array into smaller arrays of a specified size

**Type Parameters**

- `T` — Array element type

**Parameters**

- `array` (T\[]) — The input array
- `size` (number) — Size of each chunk

**Returns**

- `T[][]` — Array of chunks

**Throws**

- Error If size is less than 1

**Example**

```typescript
chunk([1, 2, 3, 4, 5], 2)
// [[1, 2], [3, 4], [5]]
```
