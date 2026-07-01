---
title: OmitByType
kind: typedef
longname: module:types/common.OmitByType
description: Omits properties of T that have values assignable to V
---

# OmitByType

<Signature code="OmitByType<T, V> = Omit<T, KeysOfType<T, V>>" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L278" label="common.ts:278" />

Omits properties of T that have values assignable to V

**Type Parameters**

- `T` — Object type
- `V` — Value type to exclude
