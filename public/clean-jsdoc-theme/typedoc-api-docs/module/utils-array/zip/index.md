---
title: zip
kind: function
longname: module:utils/array.zip
description: Zips multiple arrays together
---

# zip

<Signature
  code="zip<
	T extends unknown[][],
>(
	...arrays: T,
): { [K in string | number | symbol]: T[K] extends U[] ? U : never }[]"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L356" label="array.ts:356" />

Zips multiple arrays together

**Type Parameters**

- `T` extends `unknown[][]` — Tuple type of arrays

**Parameters**

- `arrays` (T) — Arrays to zip

**Returns**

- `{ [K in string | number | symbol]: T[K] extends U[] ? U : never }[]` — Array of tuples

**Example**

```typescript
zip([1, 2, 3], ['a', 'b', 'c']) // [[1, 'a'], [2, 'b'], [3, 'c']]
zip([1, 2], ['a', 'b', 'c']) // [[1, 'a'], [2, 'b']]
```
