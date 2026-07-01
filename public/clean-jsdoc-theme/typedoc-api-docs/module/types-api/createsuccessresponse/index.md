---
title: createSuccessResponse
kind: function
longname: module:types/api.createSuccessResponse
description: Creates a success response
---

# createSuccessResponse

<Signature
  code="createSuccessResponse<
	T,
>(
	data: T,
	meta?: ResponseMeta,
): ApiSuccessResponse<T>"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L455" label="api.ts:455" />

Creates a success response

**Type Parameters**

- `T` — Data type

**Parameters**

- `data` (T) — Response data
- `meta` ([ResponseMeta](/module/types-api/responsemeta), optional) — Optional metadata

**Returns**

- [`ApiSuccessResponse`](/module/types-api/apisuccessresponse)`<T>` — Success response object

**Example**

```typescript
return createSuccessResponse(user, { requestId: 'abc123' })
```
