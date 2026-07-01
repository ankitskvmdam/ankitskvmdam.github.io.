---
title: createErrorResponse
kind: function
longname: module:types/api.createErrorResponse
description: Creates an error response
---

# createErrorResponse

<Signature
  code="createErrorResponse(
	code: string,
	message: string,
	status?: HttpStatusCode,
	details?: ErrorDetail[],
): ApiErrorResponse"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L483" label="api.ts:483" />

Creates an error response

**Parameters**

- `code` (string) — Error code
- `message` (string) — Error message
- `status` ([HttpStatusCode](/module/types-api/httpstatuscode), optional) — HTTP status code
- `details` ([ErrorDetail](/module/types-api/errordetail)\[], optional) — Optional error details

**Returns**

- [`ApiErrorResponse`](/module/types-api/apierrorresponse) — Error response object

**Example**

```typescript
return createErrorResponse(
  'NOT_FOUND',
  'User not found',
  404
)
```
