---
title: isDefined
kind: function
longname: module:types/common.isDefined
description: Type guard helper for checking if value is defined
---

# isDefined

<Signature code="isDefined<T>(value: T | null | undefined): value is T" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L425" label="common.ts:425" />

Type guard helper for checking if value is defined

**Type Parameters**

- `T` — Value type

**Parameters**

- `value` (T | null | undefined) — Value to check

**Returns**

- `value is T` — True if value is not null or undefined

**Example**

```typescript
const values = [1, null, 2, undefined, 3]
const defined = values.filter(isDefined) // [1, 2, 3]
```
