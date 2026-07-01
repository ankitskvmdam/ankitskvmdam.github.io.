---
title: PromiseValue
kind: typedef
longname: module:types/common.PromiseValue
description: Extracts the resolved type from a Promise
---

# PromiseValue

<Signature code="PromiseValue<T> = T extends Promise<infer U> ? PromiseValue<U> : T" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L160" label="common.ts:160" />

Extracts the resolved type from a Promise

**Type Parameters**

- `T` — Promise type

**Example**

```typescript
type Result = Awaited<Promise<string>> // string
type Data = Awaited<Promise<Promise<number>>> // number
```
