---
title: createHttpClient
kind: function
longname: module:services/HttpClient.createHttpClient
description: Creates a pre-configured HTTP client
---

# createHttpClient

<Signature code="createHttpClient(baseUrl: string): HttpClient" />

<SourceLink href="/source/docs-site/typedoc-src/services/httpclient-ts/#L502" label="HttpClient.ts:502" />

Creates a pre-configured HTTP client

**Parameters**

- `baseUrl` (string) — Base URL for the client

**Returns**

- [`HttpClient`](/module/services-httpclient/httpclient) — Configured HttpClient instance

**Example**

```typescript
const api = createHttpClient('https://api.example.com')
const users = await api.get<User[]>('/users')
```
