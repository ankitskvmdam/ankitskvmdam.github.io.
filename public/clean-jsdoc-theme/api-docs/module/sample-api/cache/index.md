---
title: Cache
kind: class
longname: module:sample-api.Cache
description: "A tiny in-memory, least-recently-used (LRU) cache. This class is a demo of how clean-jsdoc-theme renders a documented class: the signature, the constructor, properties, and each method get their own section with parameters, return types, and examples."
---

# Cache

<SourceLink href="/source/index-js/#L100" label="index.js:100" />

A tiny in-memory, least-recently-used (LRU) cache.

This class is a demo of how `clean-jsdoc-theme` renders a documented class: the signature, the constructor, properties, and each method get their own section with parameters, return types, and examples.

**Example**

Basic usage

```js
const cache = new Cache({ maxSize: 2 });
cache.set('a', 1);
cache.set('b', 2);
cache.get('a'); // => 1
```

- **See:**
  - [CacheOptions](/module/sample-api#cacheoptions)

---

## Constructor

`new Cache([options])`

Create a new cache.

**Parameters**

- `options` (CacheOptions, optional, default: "{}") — Configuration for the cache.

---

## Instance Methods

<MemberHeading id="set" depth="3" name="set" sig="set(key, value) -> Cache" />

<MemberMeta sourceHref="/source/index-js/#L146" sourceLabel="index.js:146" />

Store a value under a key. If the cache is full, the least-recently-used entry is evicted first.

**Parameters**

- `key` (string) — The key to store the value under.
- `value` (\*) — The value to cache.

**Returns**

- `Cache` — The cache instance, for chaining.

**Example**

```js
cache.set('user:1', { name: 'Ada' }).set('user:2', { name: 'Linus' });
```

<MemberHeading id="get" depth="3" name="get" sig="get(key) -> *" />

<MemberMeta sourceHref="/source/index-js/#L161" sourceLabel="index.js:161" />

Look up a value by key, marking it as recently used.

**Parameters**

- `key` (string) — The key to look up.

**Returns**

- `*` — The cached value, or `undefined` if the key is not present.

<MemberHeading id="has" depth="3" name="has" sig="has(key) -> boolean" />

<MemberMeta sourceHref="/source/index-js/#L175" sourceLabel="index.js:175" />

Check whether a key is present without affecting its recency.

**Parameters**

- `key` (string) — The key to test.

**Returns**

- `boolean` — `true` if the key is cached.

<MemberHeading id="clear" depth="3" name="clear" sig="clear() -> void" />

<MemberMeta sourceHref="/source/index-js/#L184" sourceLabel="index.js:184" />

Remove every entry from the cache.

**Returns**

- `void`

## Instance Fields

<MemberHeading id="maxsize" depth="3" name="maxSize" sig="maxSize" />

<MemberMeta sourceHref="/source/index-js/#L112" sourceLabel="index.js:112" />

The maximum number of entries this cache will hold.

**Type**

`number`

<MemberHeading id="ttl" depth="3" name="ttl" sig="ttl" />

<MemberMeta sourceHref="/source/index-js/#L119" sourceLabel="index.js:119" />

Time-to-live per entry, in milliseconds. `0` means entries never expire.

**Type**

`number`

<MemberHeading id="size" depth="3" name="size" sig="size" />

<MemberMeta badges="readonly" sourceHref="/source/index-js/#L131" sourceLabel="index.js:131" />

The number of entries currently stored.
