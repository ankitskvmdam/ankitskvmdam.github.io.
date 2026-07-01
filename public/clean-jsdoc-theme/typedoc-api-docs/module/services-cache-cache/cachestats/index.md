---
title: CacheStats
kind: interface
longname: module:services/cache/Cache.CacheStats
description: Cache statistics
---

# CacheStats

<Signature
  code="interface CacheStats {
	entries: number;
	evictions: number;
	hitRate: number;
	hits: number;
	memoryUsage: number;
	misses: number;
	uptime: number;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/services/cache/cache-ts/#L74" label="Cache.ts:74" />

Cache statistics

---

## Properties

<MemberHeading id="entries" depth="3" name="entries" sig="entries: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L76" sourceLabel="Cache.ts:76" />

Total number of entries

<MemberHeading id="evictions" depth="3" name="evictions" sig="evictions: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L84" sourceLabel="Cache.ts:84" />

Total evictions

<MemberHeading id="hitrate" depth="3" name="hitRate" sig="hitRate: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L82" sourceLabel="Cache.ts:82" />

Hit rate (0-1)

<MemberHeading id="hits" depth="3" name="hits" sig="hits: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L78" sourceLabel="Cache.ts:78" />

Total cache hits

<MemberHeading id="memoryusage" depth="3" name="memoryUsage" sig="memoryUsage: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L86" sourceLabel="Cache.ts:86" />

Approximate memory usage in bytes

<MemberHeading id="misses" depth="3" name="misses" sig="misses: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L80" sourceLabel="Cache.ts:80" />

Total cache misses

<MemberHeading id="uptime" depth="3" name="uptime" sig="uptime: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L88" sourceLabel="Cache.ts:88" />

Cache uptime in milliseconds
