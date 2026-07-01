---
title: FilterParam
kind: interface
longname: module:types/api.FilterParam
description: Filter parameter
---

# FilterParam

<Signature
  code="interface FilterParam<T> {
	field: keyof T;
	operator: FilterOperator;
	value: unknown;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L308" label="api.ts:308" />

Filter parameter

**Type Parameters**

- `T` — Object type being filtered

---

## Properties

<MemberHeading id="field" depth="3" name="field" sig="field: keyof T" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L310" sourceLabel="api.ts:310" />

Field to filter on

<MemberHeading id="operator" depth="3" name="operator" sig="operator: FilterOperator" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L312" sourceLabel="api.ts:312" />

Filter operator

<MemberHeading id="value" depth="3" name="value" sig="value: unknown" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L314" sourceLabel="api.ts:314" />

Filter value
