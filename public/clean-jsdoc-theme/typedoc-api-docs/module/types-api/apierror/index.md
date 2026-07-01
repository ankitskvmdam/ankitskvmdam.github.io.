---
title: ApiError
kind: interface
longname: module:types/api.ApiError
description: API error details
---

# ApiError

<Signature
  code="interface ApiError {
	code: string;
	details?: ErrorDetail[];
	message: string;
	stack?: string;
	status?: HttpStatusCode;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L147" label="api.ts:147" />

API error details

---

## Properties

<MemberHeading id="code" depth="3" name="code" sig="code: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L149" sourceLabel="api.ts:149" />

Error code (machine-readable)

<MemberHeading id="details" depth="3" name="details" sig="details: ErrorDetail[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L155" sourceLabel="api.ts:155" />

Additional error details

<MemberHeading id="message" depth="3" name="message" sig="message: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L151" sourceLabel="api.ts:151" />

Error message (human-readable)

<MemberHeading id="stack" depth="3" name="stack" sig="stack: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L157" sourceLabel="api.ts:157" />

Stack trace (development only)

<MemberHeading id="status" depth="3" name="status" sig="status: HttpStatusCode" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L153" sourceLabel="api.ts:153" />

HTTP status code
