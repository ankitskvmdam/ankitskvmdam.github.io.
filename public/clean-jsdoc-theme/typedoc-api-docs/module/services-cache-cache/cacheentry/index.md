---
title: CacheEntry
kind: interface
longname: module:services/cache/Cache.CacheEntry
description: Cache entry metadata
---

# CacheEntry

<Signature
  code="interface CacheEntry<T> {
	createdAt: number;
	expiresAt?: number;
	hits: number;
	lastAccessedAt: number;
	size: number;
	value: T;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/services/cache/cache-ts/#L17" label="Cache.ts:17" />

Cache entry metadata

**Type Parameters**

- `T` — Cached value type

---

## Properties

<MemberHeading id="createdat" depth="3" name="createdAt" sig="createdAt: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L21" sourceLabel="Cache.ts:21" />

Creation timestamp

<MemberHeading id="expiresat" depth="3" name="expiresAt" sig="expiresAt: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L25" sourceLabel="Cache.ts:25" />

Expiration timestamp (undefined = no expiry)

<MemberHeading id="hits" depth="3" name="hits" sig="hits: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L27" sourceLabel="Cache.ts:27" />

Number of times accessed

<MemberHeading id="lastaccessedat" depth="3" name="lastAccessedAt" sig="lastAccessedAt: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L23" sourceLabel="Cache.ts:23" />

Last access timestamp

<MemberHeading id="size" depth="3" name="size" sig="size: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L29" sourceLabel="Cache.ts:29" />

Size in bytes (approximate)

<MemberHeading id="value" depth="3" name="value" sig="value: T" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L19" sourceLabel="Cache.ts:19" />

Cached value
