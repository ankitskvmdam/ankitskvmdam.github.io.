---
title: AsyncFn
kind: typedef
longname: module:types/common.AsyncFn
description: Async function type
---

# AsyncFn

<Signature code="AsyncFn<Args extends unknown[] = unknown[], Return = unknown> = (...args: Args) => Promise<Return>" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L192" label="common.ts:192" />

Async function type

**Type Parameters**

- `Args` extends `unknown[]` = `unknown[]` — Tuple of argument types
- `Return` = `unknown` — Return type (will be wrapped in Promise)

**Parameters**

- `args` (Args)

**Returns**

- `Promise<Return>`

**Example**

```typescript
type FetchUser = AsyncFn<[string], User>
const fetchUser: FetchUser = async (id) => { ... }
```
