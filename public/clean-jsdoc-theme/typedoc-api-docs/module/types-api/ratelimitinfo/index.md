---
title: RateLimitInfo
kind: interface
longname: module:types/api.RateLimitInfo
description: Rate limit information
---

# RateLimitInfo

<Signature
  code="interface RateLimitInfo {
	limit: number;
	remaining: number;
	resetAt: Date;
	resetIn: number;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L429" label="api.ts:429" />

Rate limit information

---

## Properties

<MemberHeading id="limit" depth="3" name="limit" sig="limit: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L431" sourceLabel="api.ts:431" />

Maximum requests allowed

<MemberHeading id="remaining" depth="3" name="remaining" sig="remaining: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L433" sourceLabel="api.ts:433" />

Remaining requests

<MemberHeading id="resetat" depth="3" name="resetAt" sig="resetAt: Date" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L437" sourceLabel="api.ts:437" />

Reset timestamp

<MemberHeading id="resetin" depth="3" name="resetIn" sig="resetIn: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L435" sourceLabel="api.ts:435" />

Time until reset (seconds)
