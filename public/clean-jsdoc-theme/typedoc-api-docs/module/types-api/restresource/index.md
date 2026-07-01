---
title: RestResource
kind: interface
longname: module:types/api.RestResource
description: REST resource endpoints
---

# RestResource

<Signature
  code="interface RestResource<T, TCreate = Omit<T, 'id'>, TUpdate = Partial<TCreate>> {
	create: ApiEndpoint<TCreate, T, void, void>;
	delete: ApiEndpoint<void, void, { id: string }, void>;
	get: ApiEndpoint<void, T, { id: string }, void>;
	list: ApiEndpoint<void, T[], void, QueryParams<T>>;
	update: ApiEndpoint<TUpdate, T, { id: string }, void>;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L393" label="api.ts:393" />

REST resource endpoints

**Type Parameters**

- `T` — Resource type
- `TCreate` = `Omit<T, "id">` — Create input type
- `TUpdate` = `Partial<TCreate>` — Update input type

---

## Properties

<MemberHeading id="create" depth="3" name="create" sig="create: ApiEndpoint<TCreate, T, void, void>" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L399" sourceLabel="api.ts:399" />

Create resource

<MemberHeading id="delete" depth="3" name="delete" sig="delete: ApiEndpoint<void, void, { id: string }, void>" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L403" sourceLabel="api.ts:403" />

Delete resource

<MemberHeading id="get" depth="3" name="get" sig="get: ApiEndpoint<void, T, { id: string }, void>" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L397" sourceLabel="api.ts:397" />

Get single resource

<MemberHeading id="list" depth="3" name="list" sig="list: ApiEndpoint<void, T[], void, QueryParams<T>>" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L395" sourceLabel="api.ts:395" />

List resources

<MemberHeading id="update" depth="3" name="update" sig="update: ApiEndpoint<TUpdate, T, { id: string }, void>" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L401" sourceLabel="api.ts:401" />

Update resource
