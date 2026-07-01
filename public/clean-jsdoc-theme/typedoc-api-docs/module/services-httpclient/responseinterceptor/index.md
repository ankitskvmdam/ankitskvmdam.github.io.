---
title: ResponseInterceptor
kind: typedef
longname: module:services/HttpClient.ResponseInterceptor
description: Response interceptor function type
---

# ResponseInterceptor

<Signature code="ResponseInterceptor<T = unknown> = (response: HttpResponse<T>) => HttpResponse<T> | Promise<HttpResponse<T>>" />

<SourceLink href="/source/docs-site/typedoc-src/services/httpclient-ts/#L182" label="HttpClient.ts:182" />

Response interceptor function type

**Type Parameters**

- `T` = `unknown` — Response data type

**Parameters**

- `response` ([HttpResponse](/module/services-httpclient/httpresponse)\<T>) — HTTP response

**Returns**

- [`HttpResponse`](/module/services-httpclient/httpresponse)`<T> | Promise<`[`HttpResponse`](/module/services-httpclient/httpresponse)`<T>>`
