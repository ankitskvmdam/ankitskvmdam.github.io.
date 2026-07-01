---
title: Mutable
kind: typedef
longname: module:types/common.Mutable
description: Makes all properties mutable (removes readonly)
---

# Mutable

<Signature code="Mutable<T> = { -readonly [P in keyof T]: T[P] }" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L298" label="common.ts:298" />

Makes all properties mutable (removes readonly)

**Type Parameters**

- `T` — Object type

**Example**

```typescript
interface Config {
  readonly apiKey: string
  readonly endpoint: string
}

type MutableConfig = Mutable<Config>
// { apiKey: string; endpoint: string }
```
