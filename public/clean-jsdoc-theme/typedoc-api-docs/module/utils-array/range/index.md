---
title: range
kind: function
longname: module:utils/array.range
description: Creates an array of numbers from start to end
---

# range

<Signature code="range(start: number, end: number, step: number): number[]" />

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L323" label="array.ts:323" />

Creates an array of numbers from start to end

**Parameters**

- `start` (number) — Start value (inclusive)
- `end` (number) — End value (exclusive)
- `step` (number, default: "1") — Step value

**Returns**

- `number[]` — Array of numbers

**Example**

```typescript
range(0, 5) // [0, 1, 2, 3, 4]
range(1, 10, 2) // [1, 3, 5, 7, 9]
range(5, 0, -1) // [5, 4, 3, 2, 1]
```
