---
title: unique
kind: function
longname: module:utils/array.unique
description: Removes duplicate elements from an array
---

# unique

<Signature code="unique<T>(array: T[], keySelector?: (item: T) => unknown): T[]" />

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L71" label="array.ts:71" />

Removes duplicate elements from an array

**Type Parameters**

- `T` — Array element type

**Parameters**

- `array` (T\[]) — The input array
- `keySelector` ((item: T) => unknown, optional) — Optional function to extract comparison key

**Returns**

- `T[]` — Array with unique elements

**Example**

```typescript
unique([1, 2, 2, 3, 3, 3]) // [1, 2, 3]

unique(
  [{ id: 1, name: 'a' }, { id: 1, name: 'b' }, { id: 2, name: 'c' }],
  item => item.id
)
// [{ id: 1, name: 'a' }, { id: 2, name: 'c' }]
```
