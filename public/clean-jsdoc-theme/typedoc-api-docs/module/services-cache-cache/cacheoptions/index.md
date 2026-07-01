---
title: CacheOptions
kind: interface
longname: module:services/cache/Cache.CacheOptions
description: Cache configuration options
---

# CacheOptions

<Signature
  code="interface CacheOptions {
	cleanupInterval?: number;
	cloneValues?: boolean;
	defaultTtl?: number;
	evictionPolicy?: 'lru' | 'lfu' | 'fifo';
	maxSize?: number;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/services/cache/cache-ts/#L37" label="Cache.ts:37" />

Cache configuration options

---

## Properties

<MemberHeading id="cleanupinterval" depth="3" name="cleanupInterval" sig="cleanupInterval: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L66" sourceLabel="Cache.ts:66" />

Interval for checking expired entries (ms)

**Default:** ` ```ts
60000 ``` `

<MemberHeading id="clonevalues" depth="3" name="cloneValues" sig="cloneValues: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L60" sourceLabel="Cache.ts:60" />

Whether to clone values on get/set

**Default:** ` ```ts
false ``` `

<MemberHeading id="defaultttl" depth="3" name="defaultTtl" sig="defaultTtl: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L48" sourceLabel="Cache.ts:48" />

Default TTL in milliseconds

**Default:** ` ```ts
undefined (no expiry) ``` `

<MemberHeading id="evictionpolicy" depth="3" name="evictionPolicy" sig="evictionPolicy: 'lru' | 'lfu' | 'fifo'" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L54" sourceLabel="Cache.ts:54" />

Eviction policy when cache is full

**Default:** ` ```ts
'lru' ``` `

<MemberHeading id="maxsize" depth="3" name="maxSize" sig="maxSize: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L42" sourceLabel="Cache.ts:42" />

Maximum number of entries

**Default:** ` ```ts
1000 ``` `
