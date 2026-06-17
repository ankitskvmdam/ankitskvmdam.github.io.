---
title: CacheOptions
kind: typedef
longname: module:forge/cache~CacheOptions
description: Options accepted by the {@link Cache} constructor.
---

# CacheOptions

<SourceLink href="/source/cache-js/#L19" label="cache.js:19" />

Options accepted by the [Cache](/module/forge-cache#cache) constructor.

**Properties**

- `maxSize` (number, optional, default: 100) — Maximum number of entries to keep before the least-recently-used entry is evicted.
- `ttl` (number, optional, default: 0) — Time-to-live for an entry, in milliseconds. `0` disables expiry.
- `freeze` (boolean, optional, default: false) — Freeze values on insert so callers can't mutate cached objects.

**Type**

`Object`
