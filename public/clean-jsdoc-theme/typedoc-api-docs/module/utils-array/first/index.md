---
title: first
kind: function
longname: module:utils/array.first
description: Gets the first element of an array
---

# first

<Signature code="first<T>(array: T[]): T | undefined" />

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L415" label="array.ts:415" />

Gets the first element of an array

**Type Parameters**

- `T` — Array element type

**Parameters**

- `array` (T\[]) — The input array

**Returns**

- `T | undefined` — First element or undefined

**Example**

```typescript
first([1, 2, 3]) // 1
first([]) // undefined
```
