---
title: StrictUnion
kind: typedef
longname: module:types/common.StrictUnion
description: Strict union type (no extra properties)
---

# StrictUnion

<Signature code="StrictUnion<T> = T extends object ? T & { [K in Exclude<keyof UnionToIntersection<T>, keyof T>]?: never } : T" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L330" label="common.ts:330" />

Strict union type (no extra properties)

**Type Parameters**

- `T` — Union of object types
