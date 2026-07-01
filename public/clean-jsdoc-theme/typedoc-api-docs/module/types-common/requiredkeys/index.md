---
title: RequiredKeys
kind: typedef
longname: module:types/common.RequiredKeys
description: Makes specific properties of T required
---

# RequiredKeys

<Signature code="RequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L53" label="common.ts:53" />

Makes specific properties of T required

**Type Parameters**

- `T` — The base type
- `K` extends `keyof T` — Keys to make required

**Example**

```typescript
interface Config {
  host?: string
  port?: number
  debug?: boolean
}

type RequiredConfig = RequiredKeys<Config, 'host' | 'port'>
// { host: string; port: number; debug?: boolean }
```
