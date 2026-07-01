---
title: ApiEndpoint
kind: interface
longname: module:types/api.ApiEndpoint
description: API endpoint definition
---

# ApiEndpoint

<Signature
  code="interface ApiEndpoint<TRequest = void, TResponse = void, TParams = void, TQuery = void> {
	params: TParams;
	query: TQuery;
	request: TRequest;
	response: TResponse;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L368" label="api.ts:368" />

API endpoint definition

**Type Parameters**

- `TRequest` = `void` — Request body type
- `TResponse` = `void` — Response data type
- `TParams` = `void` — URL parameters type
- `TQuery` = `void` — Query parameters type

**Example**

```typescript
type GetUserEndpoint = ApiEndpoint<
  void,           // No request body
  User,           // Returns User
  { id: string }, // URL has id param
  void            // No query params
>
```

---

## Properties

<MemberHeading id="params" depth="3" name="params" sig="params: TParams" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L379" sourceLabel="api.ts:379" />

URL parameters type

<MemberHeading id="query" depth="3" name="query" sig="query: TQuery" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L381" sourceLabel="api.ts:381" />

Query parameters type

<MemberHeading id="request" depth="3" name="request" sig="request: TRequest" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L375" sourceLabel="api.ts:375" />

Request body type

<MemberHeading id="response" depth="3" name="response" sig="response: TResponse" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L377" sourceLabel="api.ts:377" />

Response data type
