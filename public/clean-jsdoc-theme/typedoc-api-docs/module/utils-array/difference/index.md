---
title: difference
kind: function
longname: module:utils/array.difference
description: Finds the difference between two arrays
---

# difference

<Signature code="difference<T>(a: T[], b: T[]): T[]" />

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L184" label="array.ts:184" />

Finds the difference between two arrays

**Type Parameters**

- `T` — Array element type

**Parameters**

- `a` (T\[]) — First array
- `b` (T\[]) — Second array

**Returns**

- `T[]` — Elements in `a` but not in `b`

**Example**

```typescript
difference([1, 2, 3], [2, 3, 4]) // [1]
```
