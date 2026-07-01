---
title: PaginationMeta
kind: interface
longname: module:types/api.PaginationMeta
description: Pagination response metadata
---

# PaginationMeta

<Signature
  code="interface PaginationMeta {
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	limit: number;
	nextCursor?: string;
	page: number;
	previousCursor?: string;
	total: number;
	totalPages: number;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L209" label="api.ts:209" />

Pagination response metadata

---

## Properties

<MemberHeading id="hasnextpage" depth="3" name="hasNextPage" sig="hasNextPage: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L219" sourceLabel="api.ts:219" />

Whether there is a next page

<MemberHeading id="haspreviouspage" depth="3" name="hasPreviousPage" sig="hasPreviousPage: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L221" sourceLabel="api.ts:221" />

Whether there is a previous page

<MemberHeading id="limit" depth="3" name="limit" sig="limit: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L213" sourceLabel="api.ts:213" />

Items per page

<MemberHeading id="nextcursor" depth="3" name="nextCursor" sig="nextCursor: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L223" sourceLabel="api.ts:223" />

Cursor for next page (cursor-based)

<MemberHeading id="page" depth="3" name="page" sig="page: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L211" sourceLabel="api.ts:211" />

Current page number

<MemberHeading id="previouscursor" depth="3" name="previousCursor" sig="previousCursor: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L225" sourceLabel="api.ts:225" />

Cursor for previous page (cursor-based)

<MemberHeading id="total" depth="3" name="total" sig="total: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L215" sourceLabel="api.ts:215" />

Total number of items

<MemberHeading id="totalpages" depth="3" name="totalPages" sig="totalPages: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L217" sourceLabel="api.ts:217" />

Total number of pages
