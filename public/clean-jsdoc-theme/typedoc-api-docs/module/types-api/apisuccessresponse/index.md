---
title: ApiSuccessResponse
kind: interface
longname: module:types/api.ApiSuccessResponse
description: API success response wrapper
---

# ApiSuccessResponse

<Signature
  code="interface ApiSuccessResponse<T> {
	data: T;
	meta?: ResponseMeta;
	success: true;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L87" label="api.ts:87" />

API success response wrapper

**Type Parameters**

- `T` — Data type

**Example**

```typescript
type UserResponse = ApiSuccessResponse<User>
// { success: true; data: User; meta?: ResponseMeta }
```

---

## Properties

<MemberHeading id="data" depth="3" name="data" sig="data: T" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L91" sourceLabel="api.ts:91" />

Response data

<MemberHeading id="meta" depth="3" name="meta" sig="meta: ResponseMeta" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L93" sourceLabel="api.ts:93" />

Optional metadata

<MemberHeading id="success" depth="3" name="success" sig="success: true" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L89" sourceLabel="api.ts:89" />

Always true for success responses
