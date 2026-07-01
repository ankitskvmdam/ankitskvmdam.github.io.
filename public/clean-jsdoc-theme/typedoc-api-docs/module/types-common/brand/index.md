---
title: Brand
kind: typedef
longname: module:types/common.Brand
description: Branded/tagged type for nominal typing
---

# Brand

<Signature code="Brand<T, Brand extends string> = T & { __brand: Brand }" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L368" label="common.ts:368" />

Branded/tagged type for nominal typing

**Type Parameters**

- `T` — Base type
- `Brand` extends `string` — Brand identifier

**Example**

```typescript
type UserId = Brand<string, 'UserId'>
type OrderId = Brand<string, 'OrderId'>

const userId: UserId = 'user-123' as UserId
const orderId: OrderId = 'order-456' as OrderId

// userId = orderId // Error! Types are incompatible
```
