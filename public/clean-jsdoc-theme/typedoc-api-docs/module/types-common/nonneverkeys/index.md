---
title: NonNeverKeys
kind: typedef
longname: module:types/common.NonNeverKeys
description: Removes keys with never type
---

# NonNeverKeys

<Signature code="NonNeverKeys<T> = { [K in keyof T]: T[K] extends never ? never : K }[keyof T]" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L243" label="common.ts:243" />

Removes keys with never type

**Type Parameters**

- `T` — Object type
