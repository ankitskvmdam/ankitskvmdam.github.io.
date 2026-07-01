---
title: isSuccessResponse
kind: function
longname: module:types/api.isSuccessResponse
description: Type guard for success responses
---

# isSuccessResponse

<Signature
  code="isSuccessResponse<
	T,
>(
	response: ApiResponse<T>,
): response is ApiSuccessResponse<T>"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L517" label="api.ts:517" />

Type guard for success responses

**Type Parameters**

- `T` — Data type

**Parameters**

- `response` ([ApiResponse](/module/types-api/apiresponse)\<T>) — API response to check

**Returns**

- [`response`](/module/types-api/apiendpoint#response)`  is  `[`ApiSuccessResponse`](/module/types-api/apisuccessresponse)`<T>` — True if response is successful

**Example**

```typescript
const response = await api.getUser('123')
if (isSuccessResponse(response)) {
  console.log(response.data.name) // TypeScript knows data exists
}
```
