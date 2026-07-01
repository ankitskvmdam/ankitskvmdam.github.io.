---
title: last
kind: function
longname: module:utils/array.last
description: Gets the last element of an array
---

# last

<Signature code="last<T>(array: T[]): T | undefined" />

<SourceLink href="/source/docs-site/typedoc-src/utils/array-ts/#L434" label="array.ts:434" />

Gets the last element of an array

**Type Parameters**

- `T` — Array element type

**Parameters**

- `array` (T\[]) — The input array

**Returns**

- `T | undefined` — Last element or undefined

**Example**

```typescript
last([1, 2, 3]) // 3
last([]) // undefined
```
