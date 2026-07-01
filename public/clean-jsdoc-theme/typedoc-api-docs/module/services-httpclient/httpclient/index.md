---
title: HttpClient
kind: class
longname: module:services/HttpClient.HttpClient
description: HTTP Client class for making API requests
---

# HttpClient

<SourceLink href="/source/docs-site/typedoc-src/services/httpclient-ts/#L240" label="HttpClient.ts:240" />

HTTP Client class for making API requests

**Remarks**

A comprehensive HTTP client with support for:

- All standard HTTP methods
- Request/response interceptors
- Automatic retries
- Timeout handling
- TypeScript generics for type-safe responses

**Properties**

- `baseUrl` (string) — Base URL for all requests
- `defaultHeaders` (Record\<string, string>, optional) — Default headers for all requests
- `defaultTimeout` (number, optional) — Default timeout in milliseconds

**Example**

````js
Creating and configuring a client:
```typescript
const client = new HttpClient({
  baseUrl: 'https://api.example.com',
  defaultTimeout: 5000,
  defaultHeaders: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  }
})

// Add request interceptor
client.addRequestInterceptor((config) => {
  config.headers = {
    ...config.headers,
    'X-Request-ID': generateRequestId()
  }
  return config
})
```
````

````js
Making requests:
```typescript
// GET request with type safety
const users = await client.get<User[]>('/users')

// POST request with body
const newUser = await client.post<User>('/users', {
  name: 'John',
  email: 'john@example.com'
})

// Request with custom config
const data = await client.get<Data>('/data', {
  timeout: 60000,
  retries: 3
})
```
````

---

## Constructors

<MemberHeading
  id="constructor"
  depth="3"
  name="constructor"
  sig="new HttpClient(
	options: { baseUrl: string; defaultHeaders?: Record<string, string>; defaultTimeout?: number },
): HttpClient"
/>

**Parameters**

- `options` ({ baseUrl: string; defaultHeaders?: Record\<string, string>; defaultTimeout?: number }) — Client configuration options

**Returns**

`HttpClient`

---

## Properties

<MemberHeading id="baseurl" depth="3" name="baseUrl" sig="baseUrl: string" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L245" sourceLabel="HttpClient.ts:245" />

Base URL for all requests

## Methods

<MemberHeading
  id="addrequestinterceptor"
  depth="3"
  name="addRequestInterceptor"
  sig="addRequestInterceptor(
	interceptor: RequestInterceptor,
): () => void"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L302" sourceLabel="HttpClient.ts:302" />

Adds a request interceptor

**Parameters**

- `interceptor` ([RequestInterceptor](/module/services-httpclient/requestinterceptor)) — Interceptor function

**Returns**

- `() => void` — Function to remove the interceptor

**Example**

```typescript
const remove = client.addRequestInterceptor((config) => {
  console.log('Request:', config)
  return config
})

// Later: remove the interceptor
remove()
```

<MemberHeading
  id="addresponseinterceptor"
  depth="3"
  name="addResponseInterceptor"
  sig="addResponseInterceptor<
	T = unknown,
>(
	interceptor: ResponseInterceptor<T>,
): () => void"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L318" sourceLabel="HttpClient.ts:318" />

Adds a response interceptor

**Type Parameters**

- `T` = `unknown`

**Parameters**

- `interceptor` ([ResponseInterceptor](/module/services-httpclient/responseinterceptor)\<T>) — Interceptor function

**Returns**

- `() => void` — Function to remove the interceptor

<MemberHeading
  id="delete"
  depth="3"
  name="delete"
  sig="delete<
	T = unknown,
>(
	path: string,
	config?: RequestConfig,
): Promise<HttpResponse<T>>"
/>

<MemberMeta badges="async" sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L408" sourceLabel="HttpClient.ts:408" />

Performs a DELETE request

**Type Parameters**

- `T` = `unknown` — Expected response data type

**Parameters**

- `path` (string) — Request path
- `config` ([RequestConfig](/module/services-httpclient/requestconfig), optional) — Request configuration

**Returns**

- `Promise<`[`HttpResponse`](/module/services-httpclient/httpresponse)`<T>>` — Promise resolving to the response

<MemberHeading
  id="get"
  depth="3"
  name="get"
  sig="get<
	T = unknown,
>(
	path: string,
	config?: RequestConfig,
): Promise<HttpResponse<T>>"
/>

<MemberMeta badges="async" sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L342" sourceLabel="HttpClient.ts:342" />

Performs a GET request

**Type Parameters**

- `T` = `unknown` — Expected response data type

**Parameters**

- `path` (string) — Request path
- `config` ([RequestConfig](/module/services-httpclient/requestconfig), optional) — Request configuration

**Returns**

- `Promise<`[`HttpResponse`](/module/services-httpclient/httpresponse)`<T>>` — Promise resolving to the response

**Example**

```typescript
const user = await client.get<User>('/users/123')
console.log(user.data.name)
```

<MemberHeading
  id="patch"
  depth="3"
  name="patch"
  sig="patch<
	T = unknown,
	D = unknown,
>(
	path: string,
	data?: D,
	config?: RequestConfig,
): Promise<HttpResponse<T>>"
/>

<MemberMeta badges="async" sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L392" sourceLabel="HttpClient.ts:392" />

Performs a PATCH request

**Type Parameters**

- `T` = `unknown` — Expected response data type
- `D` = `unknown` — Request body data type

**Parameters**

- `path` (string) — Request path
- `data` (D, optional) — Request body data
- `config` ([RequestConfig](/module/services-httpclient/requestconfig), optional) — Request configuration

**Returns**

- `Promise<`[`HttpResponse`](/module/services-httpclient/httpresponse)`<T>>` — Promise resolving to the response

<MemberHeading
  id="post"
  depth="3"
  name="post"
  sig="post<
	T = unknown,
	D = unknown,
>(
	path: string,
	data?: D,
	config?: RequestConfig,
): Promise<HttpResponse<T>>"
/>

<MemberMeta badges="async" sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L356" sourceLabel="HttpClient.ts:356" />

Performs a POST request

**Type Parameters**

- `T` = `unknown` — Expected response data type
- `D` = `unknown` — Request body data type

**Parameters**

- `path` (string) — Request path
- `data` (D, optional) — Request body data
- `config` ([RequestConfig](/module/services-httpclient/requestconfig), optional) — Request configuration

**Returns**

- `Promise<`[`HttpResponse`](/module/services-httpclient/httpresponse)`<T>>` — Promise resolving to the response

<MemberHeading
  id="put"
  depth="3"
  name="put"
  sig="put<
	T = unknown,
	D = unknown,
>(
	path: string,
	data?: D,
	config?: RequestConfig,
): Promise<HttpResponse<T>>"
/>

<MemberMeta badges="async" sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L374" sourceLabel="HttpClient.ts:374" />

Performs a PUT request

**Type Parameters**

- `T` = `unknown` — Expected response data type
- `D` = `unknown` — Request body data type

**Parameters**

- `path` (string) — Request path
- `data` (D, optional) — Request body data
- `config` ([RequestConfig](/module/services-httpclient/requestconfig), optional) — Request configuration

**Returns**

- `Promise<`[`HttpResponse`](/module/services-httpclient/httpresponse)`<T>>` — Promise resolving to the response
