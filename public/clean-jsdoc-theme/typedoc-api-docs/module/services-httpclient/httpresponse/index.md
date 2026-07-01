---
title: HttpResponse
kind: interface
longname: module:services/HttpClient.HttpResponse
description: HTTP response wrapper
---

# HttpResponse

<Signature
  code="interface HttpResponse<T = unknown> {
	config: RequestConfig;
	data: T;
	duration: number;
	headers: Record<string, string>;
	status: number;
	statusText: string;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/services/httpclient-ts/#L76" label="HttpClient.ts:76" />

HTTP response wrapper

**Type Parameters**

- `T` = `unknown` — Response data type

---

## Properties

<MemberHeading id="config" depth="3" name="config" sig="config: RequestConfig" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L86" sourceLabel="HttpClient.ts:86" />

Original request config

<MemberHeading id="data" depth="3" name="data" sig="data: T" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L78" sourceLabel="HttpClient.ts:78" />

Response data

<MemberHeading id="duration" depth="3" name="duration" sig="duration: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L88" sourceLabel="HttpClient.ts:88" />

Request duration in milliseconds

<MemberHeading id="headers" depth="3" name="headers" sig="headers: Record<string, string>" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L84" sourceLabel="HttpClient.ts:84" />

Response headers

<MemberHeading id="status" depth="3" name="status" sig="status: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L80" sourceLabel="HttpClient.ts:80" />

HTTP status code

<MemberHeading id="statustext" depth="3" name="statusText" sig="statusText: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L82" sourceLabel="HttpClient.ts:82" />

Status text
