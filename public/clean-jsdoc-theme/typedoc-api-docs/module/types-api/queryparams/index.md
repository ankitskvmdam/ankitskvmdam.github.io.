---
title: QueryParams
kind: interface
longname: module:types/api.QueryParams
description: Query parameters for list endpoints
---

# QueryParams

<Signature
  code="interface QueryParams<T> extends module:types/api.PaginationParams {
	cursor?: string;
	fields?: (keyof T)[];
	filters?: FilterParam<T>[];
	include?: string[];
	limit?: number;
	page?: number;
	search?: string;
	sort?: SortParam<T>[];
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L335" label="api.ts:335" />

Query parameters for list endpoints

**Type Parameters**

- `T` — Item type

**Example**

```typescript
const query: QueryParams<User> = {
  page: 1,
  limit: 20,
  sort: [{ field: 'createdAt', order: 'desc' }],
  filters: [{ field: 'status', operator: 'eq', value: 'active' }],
  search: 'john'
}
```

#### Hierarchy

- [`PaginationParams`](/module/types-api/paginationparams)
- `QueryParams`

---

## Properties

<MemberHeading id="cursor" depth="3" name="cursor" sig="cursor: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L201" sourceLabel="api.ts:201" />

_Inherited from&#x20;_[`cursor`](/module/types-api/paginationparams#cursor)

Cursor for cursor-based pagination

<MemberHeading id="fields" depth="3" name="fields" sig="fields: (keyof T)[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L343" sourceLabel="api.ts:343" />

Fields to include in response

<MemberHeading id="filters" depth="3" name="filters" sig="filters: FilterParam<T>[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L339" sourceLabel="api.ts:339" />

Filter parameters

<MemberHeading id="include" depth="3" name="include" sig="include: string[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L345" sourceLabel="api.ts:345" />

Relations to include

<MemberHeading id="limit" depth="3" name="limit" sig="limit: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L199" sourceLabel="api.ts:199" />

_Inherited from&#x20;_[`limit`](/module/types-api/paginationparams#limit)

Items per page

<MemberHeading id="page" depth="3" name="page" sig="page: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L197" sourceLabel="api.ts:197" />

_Inherited from&#x20;_[`page`](/module/types-api/paginationparams#page)

Page number (1-indexed)

<MemberHeading id="search" depth="3" name="search" sig="search: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L341" sourceLabel="api.ts:341" />

Full-text search query

<MemberHeading id="sort" depth="3" name="sort" sig="sort: SortParam<T>[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L337" sourceLabel="api.ts:337" />

Sort parameters
