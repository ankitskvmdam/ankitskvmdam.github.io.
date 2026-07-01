---
title: isErrorResponse
kind: function
longname: module:types/api.isErrorResponse
description: Type guard for error responses
---

# isErrorResponse

<Signature
  code="isErrorResponse<
	T,
>(
	response: ApiResponse<T>,
): response is ApiErrorResponse"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L530" label="api.ts:530" />

Type guard for error responses

**Type Parameters**

- `T` — Data type

**Parameters**

- `response` ([ApiResponse](/module/types-api/apiresponse)\<T>) — API response to check

**Returns**

- [`response`](/module/types-api/apiendpoint#response)`  is  `[`ApiErrorResponse`](/module/types-api/apierrorresponse) — True if response is an error
