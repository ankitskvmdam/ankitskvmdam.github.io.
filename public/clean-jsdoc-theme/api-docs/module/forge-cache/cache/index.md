---
title: Cache
kind: class
longname: module:forge/cache.Cache
description: "A tiny in-memory, least-recently-used (LRU) cache. This class is the showcase's centerpiece: its members exercise nearly every member-level tag the theme renders — parameters, returns, examples, events, deprecation, modifiers, and cross-references. [!IMPORTANT] A Cache is not thread-safe across workers. Wrap shared access in a {@link Queue} if you need ordered writes. Eviction follows a strict recency order: Operation Effect on recency set(k, v) marks k most-recently-used get(k) marks k most-recently-used has(k) no change"
group: Core/Storage
order: 1
---

# Cache

**Implements:&#x20;**`Store`, `Serializable`

<SourceLink href="/source/cache-js/#L53" label="cache.js:53" />

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

---

## Constructor

`new Cache([options])`

Create a new cache.

**Parameters**

- `options` (CacheOptions, optional, default: "{}") — Configuration for the cache.
  - `options.maxSize` (number, optional, default: 100) — Max entries before eviction.
  - `options.ttl` (number, optional, default: 0) — Per-entry time-to-live in ms.

---

## Instance Methods

<MemberHeading id="set" depth="3" name="set" sig="set(key, value) -> Cache" />

<MemberMeta sourceHref="/source/cache-js/#L113" sourceLabel="cache.js:113" />

**Implements:&#x20;**`Store#set`

Store a value under a key. If the cache is full, the least-recently-used entry is evicted first and a `evict event` fires.

**Parameters**

- `key` (string) — The key to store the value under.
- `value` (\*) — The value to cache.

**Returns**

- `Cache` — The cache instance, for chaining.

**Fires**

- `Cache#event:evict`

**Example**

Calls chain

<Playground providers="codepen jsfiddle" filename="set.js" highlight="1">
  ```js
  cache.set('user:1', { name: 'Ada' }).set('user:2', { name: 'Linus' });
  ```
</Playground>

<MemberHeading id="get" depth="3" name="get" sig="get(key) -> *" />

<MemberMeta sourceHref="/source/cache-js/#L128" sourceLabel="cache.js:128" />

**Implements:&#x20;**`Store#get`

Look up a value by key, marking it as recently used.

**Parameters**

- `key` (string) — The key to look up.

**Returns**

- `*` — The cached value, or `undefined` if the key is not present.

<MemberHeading id="has" depth="3" name="has" sig="has(key) -> boolean" />

<MemberMeta sourceHref="/source/cache-js/#L142" sourceLabel="cache.js:142" />

Check whether a key is present **without** affecting its recency.

**Parameters**

- `key` (string) — The key to test.

**Returns**

- `boolean` — `true` if the key is cached.

<MemberHeading id="remove" depth="3" name="remove" sig="remove(key) -> boolean" />

<MemberMeta badges="deprecated" sourceHref="/source/cache-js/#L154" sourceLabel="cache.js:154" />

Remove a single entry.

<Callout type="error">
  &#x20;Since 1.2.0 — prefer `Cache#clear` or let entries expire via \`ttl\`. This method will be removed in 2.0.
</Callout>

**Parameters**

- `key` (string) — The key to remove.

**Returns**

- `boolean` — `true` if an entry was removed.

<MemberHeading id="clear" depth="3" name="clear" sig="clear() -> void" />

<MemberMeta sourceHref="/source/cache-js/#L163" sourceLabel="cache.js:163" />

Remove every entry from the cache.

**Returns**

- `void`

<MemberHeading id="tojson" depth="3" name="toJSON" sig="toJSON() -> Object.<string, *>" />

<MemberMeta sourceHref="/source/cache-js/#L172" sourceLabel="cache.js:172" />

**Implements:&#x20;**`Serializable#toJSON`

Serialize the cache to a plain object — satisfies [Serializable](/module/forge-contracts#serializable).

**Returns**

- `Object.<string, *>` — A snapshot of every entry.

## Instance Fields

<MemberHeading id="maxsize" depth="3" name="maxSize" sig="maxSize" />

<MemberMeta sourceHref="/source/cache-js/#L72" sourceLabel="cache.js:72" />

The maximum number of entries this cache will hold.

**Type**

`number`

<MemberHeading id="ttl" depth="3" name="ttl" sig="ttl" />

<MemberMeta sourceHref="/source/cache-js/#L79" sourceLabel="cache.js:79" />

Time-to-live per entry, in milliseconds. `0` means entries never expire.

**Type**

`number`

<MemberHeading id="size" depth="3" name="size" sig="size" />

<MemberMeta badges="readonly" sourceHref="/source/cache-js/#L96" sourceLabel="cache.js:96" />

The number of entries currently stored.
