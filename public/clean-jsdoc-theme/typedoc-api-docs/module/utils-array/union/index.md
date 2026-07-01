---
title: union
kind: function
longname: module:utils/array.union
description: Finds the union of two arrays
---

# union

<Signature code="union<T>(a: T[], b: T[]): T[]" />

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L204" label="array.ts:204" />

Finds the union of two arrays

**Type Parameters**

- `T` — Array element type

**Parameters**

- `a` (T\[]) — First array
- `b` (T\[]) — Second array

**Returns**

- `T[]` — Array with unique elements from both arrays

**Example**

```typescript
union([1, 2, 3], [2, 3, 4]) // [1, 2, 3, 4]
```
