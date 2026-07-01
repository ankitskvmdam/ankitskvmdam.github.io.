---
title: SortParam
kind: interface
longname: module:types/api.SortParam
description: Sort parameter
---

# SortParam

<Signature
  code="interface SortParam<T> {
	field: keyof T;
	order: SortOrder;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L276" label="api.ts:276" />

Sort parameter

**Type Parameters**

- `T` — Object type being sorted

---

## Properties

<MemberHeading id="field" depth="3" name="field" sig="field: keyof T" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L278" sourceLabel="api.ts:278" />

Field to sort by

<MemberHeading id="order" depth="3" name="order" sig="order: SortOrder" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L280" sourceLabel="api.ts:280" />

Sort direction
