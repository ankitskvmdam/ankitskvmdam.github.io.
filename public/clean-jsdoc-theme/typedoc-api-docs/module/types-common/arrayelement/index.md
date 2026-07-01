---
title: ArrayElement
kind: typedef
longname: module:types/common.ArrayElement
description: Extracts the element type from an array type
---

# ArrayElement

<Signature code="ArrayElement<T> = T extends readonly (infer E)[] ? E : never" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L145" label="common.ts:145" />

Extracts the element type from an array type

**Type Parameters**

- `T` — Array type

**Example**

```typescript
type Item = ArrayElement<string[]> // string
type User = ArrayElement<User[]> // User
```
