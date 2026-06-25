---
title: forge/cache
kind: module
longname: module:forge/cache
description: Storage primitives — the {@link Cache} class and its helpers.
---

# forge/cache

<SourceLink href="/source/cache-js/#L7" label="cache.js:7" />

Storage primitives — the [Cache](/module/forge-cache#cache) class and its helpers.

---

## Static Methods

<MemberHeading
  id="createcache"
  depth="3"
  name="createCache"
  sig="createCache(
	entries: Object.<string, *>,
	options?: CacheOptions,
): Cache"
/>

<MemberMeta badges="static" sourceHref="/source/cache-js/#L204" sourceLabel="cache.js:204" />

Create a [Cache](/module/forge-cache#cache) pre-populated from an object of key/value pairs.

This is a **global** function (no `@memberof`), so it appears on the aggregated **Globals** page rather than owning its own page.

**Parameters**

- `entries` (Object.\<string, \*>) — Initial entries to seed the cache with.
- `options` ([CacheOptions](/module/forge-cache#cacheoptions), optional) — Options forwarded to the [Cache](/module/forge-cache#cache) constructor.

**Returns**

- [`Cache`](/module/forge-cache#cache) — A new, seeded cache.

**Example**

```js
const cache = createCache({ a: 1, b: 2 }, { maxSize: 10 });cache.get('b'); // => 2
```

<Embed src="https://ankdev.me/clean-jsdoc-theme/api-docs/" title="createCache demo" height="360" clickToLoad="true" />

- **Since:** 1.0.0

## Enums

<MemberHeading id="priority" depth="3" name="Priority" sig="Priority: number" />

<MemberMeta badges="static,readonly,enum" sourceHref="/source/cache-js/#L219" sourceLabel="cache.js:219" />

Relative priority for cached writes — a numeric [enum](https://jsdoc.app/tags-enum) rendered as a member table on the Globals page.

## Other

<MemberHeading id="cacheoptions" depth="3" name="CacheOptions" sig="CacheOptions: Object" />

<MemberMeta sourceHref="/source/cache-js/#L19" sourceLabel="cache.js:19" />

Options accepted by the [Cache](/module/forge-cache#cache) constructor.

**Properties**

- `maxSize` (number, optional, default: 100) — Maximum number of entries to keep before the least-recently-used entry is evicted.
- `ttl` (number, optional, default: 0) — Time-to-live for an entry, in milliseconds. `0` disables expiry.
- `freeze` (boolean, optional, default: false) — Freeze values on insert so callers can't mutate cached objects.

<MemberHeading id="cache" depth="3" name="Cache" sig="Cache" />

<MemberMeta badges="static" sourceHref="/source/cache-js/#L53" sourceLabel="cache.js:53" />

**Implements:&#x20;**`Store`, `Serializable`

A tiny in-memory, least-recently-used (LRU) cache.

This class is the showcase's centerpiece: its members exercise nearly every member-level tag the theme renders — parameters, returns, examples, events, deprecation, modifiers, and cross-references.

<Callout type="info">
  A `Cache` is **not** thread-safe across workers. Wrap shared access in a [Queue](/module/forge-queue#queue) if you need ordered writes.
</Callout>

Eviction follows a strict recency order:

| Operation   | Effect on recency            |
| ----------- | ---------------------------- |
| `set(k, v)` | marks `k` most-recently-used |
| `get(k)`    | marks `k` most-recently-used |
| `has(k)`    | no change                    |

**Parameters**

- `options` ([CacheOptions](/module/forge-cache#cacheoptions), optional, default: "{}") — Configuration for the cache.
  - `options.maxSize` (number, optional, default: 100) — Max entries before eviction.
  - `options.ttl` (number, optional, default: 0) — Per-entry time-to-live in ms.

**Throws**

- `RangeError` — If `maxSize` is not a positive integer.

**Example**

Basic usage

<Playground providers="codepen jsfiddle codesandbox">
  ```js
  const cache = new Cache({ maxSize: 2 });  cache.set('a', 1).set('b', 2);  cache.get('a'); // => 1, and 'a' is now most-recently-used
  ```
</Playground>

- **Since:** 1.0.0
- **Version:** 1.2.0
- **Author:** The clean-jsdoc-theme team
- **See:**
  - [CacheOptions](/module/forge-cache#cacheoptions)
  - [createCache](/module/forge-cache#createcache) for a one-shot factory
