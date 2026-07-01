---
title: ValueOf
kind: typedef
longname: module:types/common.ValueOf
description: Value type of a record/object
---

# ValueOf

<Signature code="ValueOf<T> = T[keyof T]" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L347" label="common.ts:347" />

Value type of a record/object

**Type Parameters**

- `T` — Object type

**Example**

```typescript
type Config = { port: number; host: string; debug: boolean }
type ConfigValue = ValueOf<Config> // number | string | boolean
```
