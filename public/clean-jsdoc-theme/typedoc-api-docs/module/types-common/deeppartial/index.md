---
title: DeepPartial
kind: typedef
longname: module:types/common.DeepPartial
description: Deep partial - makes all nested properties optional
---

# DeepPartial

<Signature code="DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L100" label="common.ts:100" />

Deep partial - makes all nested properties optional

**Type Parameters**

- `T` — The base type

**Example**

```typescript
interface Config {
  server: {
    host: string
    port: number
  }
  features: {
    enabled: boolean
  }
}

type PartialConfig = DeepPartial<Config>
// All nested properties are optional
```
