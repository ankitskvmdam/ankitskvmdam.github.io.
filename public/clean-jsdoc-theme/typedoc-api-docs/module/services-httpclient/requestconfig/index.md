---
title: RequestConfig
kind: interface
longname: module:services/HttpClient.RequestConfig
description: Request configuration options
---

# RequestConfig

<Signature
  code="interface RequestConfig {
	headers?: Record<string, string>;
	params?: Record<string, string | number | boolean>;
	responseType?: 'text' | 'json' | 'blob' | 'arraybuffer';
	retries?: number;
	retryDelay?: number;
	signal?: AbortSignal;
	timeout?: number;
	withCredentials?: boolean;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/services/httpclient-ts/#L23" label="HttpClient.ts:23" />

Request configuration options

---

## Properties

<MemberHeading id="headers" depth="3" name="headers" sig="headers: Record<string, string>" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L27" sourceLabel="HttpClient.ts:27" />

Request headers

<MemberHeading id="params" depth="3" name="params" sig="params: Record<string, string | number | boolean>" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L32" sourceLabel="HttpClient.ts:32" />

Query parameters

<MemberHeading id="responsetype" depth="3" name="responseType" sig="responseType: 'text' | 'json' | 'blob' | 'arraybuffer'" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L62" sourceLabel="HttpClient.ts:62" />

Response type expectation

**Default:** ` ```ts
'json' ``` `

<MemberHeading id="retries" depth="3" name="retries" sig="retries: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L44" sourceLabel="HttpClient.ts:44" />

Number of retry attempts on failure

**Default:** ` ```ts
0 ``` `

<MemberHeading id="retrydelay" depth="3" name="retryDelay" sig="retryDelay: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L50" sourceLabel="HttpClient.ts:50" />

Delay between retries in milliseconds

**Default:** ` ```ts
1000 ``` `

<MemberHeading id="signal" depth="3" name="signal" sig="signal: AbortSignal" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L67" sourceLabel="HttpClient.ts:67" />

Abort signal for cancellation

<MemberHeading id="timeout" depth="3" name="timeout" sig="timeout: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L38" sourceLabel="HttpClient.ts:38" />

Request timeout in milliseconds

**Default:** ` ```ts
30000 ``` `

<MemberHeading id="withcredentials" depth="3" name="withCredentials" sig="withCredentials: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/httpclient-ts/#L56" sourceLabel="HttpClient.ts:56" />

Whether to include credentials

**Default:** ` ```ts
false ``` `
