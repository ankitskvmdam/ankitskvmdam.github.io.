---
title: intersection
kind: function
longname: module:utils/array.intersection
description: Finds the intersection of two arrays
---

# intersection

<Signature code="intersection<T>(a: T[], b: T[]): T[]" />

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L164" label="array.ts:164" />

Finds the intersection of two arrays

**Type Parameters**

- `T` — Array element type

**Parameters**

- `a` (T\[]) — First array
- `b` (T\[]) — Second array

**Returns**

- `T[]` — Array of elements present in both arrays

**Example**

```typescript
intersection([1, 2, 3], [2, 3, 4]) // [2, 3]
```
