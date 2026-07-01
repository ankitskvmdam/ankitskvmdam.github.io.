---
title: ApiResponse
kind: typedef
longname: module:types/api.ApiResponse
description: Combined API response type
---

# ApiResponse

<Signature code="ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse" />

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L140" label="api.ts:140" />

Combined API response type

**Type Parameters**

- `T` — Success data type

**Example**

```typescript
async function fetchUser(id: string): Promise<ApiResponse<User>> {
  const response = await api.get(`/users/${id}`)
  if (response.success) {
    console.log(response.data.name)
  } else {
    console.error(response.error.message)
  }
  return response
}
```
