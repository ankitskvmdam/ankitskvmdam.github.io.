---
title: PaginatedResponse
kind: interface
longname: module:types/api.PaginatedResponse
description: Paginated API response
---

# PaginatedResponse

<Signature
  code="interface PaginatedResponse<T> {
	data: T[];
	meta?: ResponseMeta;
	pagination: PaginationMeta;
	success: true;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L251" label="api.ts:251" />

Paginated API response

**Type Parameters**

- `T` — Item type

**Example**

```typescript
const response: PaginatedResponse<User> = {
  success: true,
  data: [user1, user2, user3],
  pagination: {
    page: 1,
    limit: 10,
    total: 100,
    totalPages: 10,
    hasNextPage: true,
    hasPreviousPage: false
  }
}
```

---

## Properties

<MemberHeading id="data" depth="3" name="data" sig="data: T[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L255" sourceLabel="api.ts:255" />

Array of items

<MemberHeading id="meta" depth="3" name="meta" sig="meta: ResponseMeta" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L259" sourceLabel="api.ts:259" />

Additional metadata

<MemberHeading id="pagination" depth="3" name="pagination" sig="pagination: PaginationMeta" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L257" sourceLabel="api.ts:257" />

Pagination metadata

<MemberHeading id="success" depth="3" name="success" sig="success: true" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L253" sourceLabel="api.ts:253" />

Success flag
