---
title: CacheOptions
kind: typedef
longname: module:sample-api~CacheOptions
description: Options accepted by the {@link Cache} constructor.
---

# CacheOptions

<SourceLink href="/source/index-js/#L21" label="index.js:21" />

Options accepted by the [Cache](/module/sample-api#cache) constructor.

**Properties**

- `maxSize` (number, optional, default: 100) — Maximum number of entries to keep before the least-recently-used entry is evicted.
- `ttl` (number, optional, default: 0) — Time-to-live for an entry in milliseconds. `0` disables expiry.

**Type**

`Object`
