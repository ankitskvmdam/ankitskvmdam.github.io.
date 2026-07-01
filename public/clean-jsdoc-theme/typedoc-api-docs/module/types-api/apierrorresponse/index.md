---
title: ApiErrorResponse
kind: interface
longname: module:types/api.ApiErrorResponse
description: API error response wrapper
---

# ApiErrorResponse

<Signature
  code="interface ApiErrorResponse {
	error: ApiError;
	success: false;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L113" label="api.ts:113" />

API error response wrapper

**Example**

```typescript
const error: ApiErrorResponse = {
  success: false,
  error: {
    code: 'VALIDATION_ERROR',
    message: 'Invalid email format',
    details: [{ field: 'email', message: 'Must be a valid email' }]
  }
}
```

---

## Properties

<MemberHeading id="error" depth="3" name="error" sig="error: ApiError" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L117" sourceLabel="api.ts:117" />

Error details

<MemberHeading id="success" depth="3" name="success" sig="success: false" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L115" sourceLabel="api.ts:115" />

Always false for error responses
