---
title: Cache
kind: class
longname: module:services/cache/Cache.Cache
description: Generic cache implementation
---

# Cache

<SourceLink href="/source/docs-site/typedoc-src/services/cache/cache-ts/#L145" label="Cache.ts:145" />

Generic cache implementation

**Remarks**

A feature-rich caching solution with:

- Configurable TTL (Time To Live)
- Multiple eviction policies (LRU, LFU, FIFO)
- Automatic cleanup of expired entries
- Cache statistics and monitoring
- Namespace support for logical grouping

**Type Parameters**

- `K` = `string` — Key type
- `V` = `unknown` — Value type

**Example**

````js
Basic usage:
```typescript
const cache = new Cache<string, User>({
  maxSize: 100,
  defaultTtl: 5 * 60 * 1000 // 5 minutes
})

// Set a value
cache.set('user:123', { id: '123', name: 'John' })

// Get a value
const user = cache.get('user:123')

// Check if exists
if (cache.has('user:123')) {
  // ...
}
```
````

````js
With custom TTL:
```typescript
// Cache for 1 hour
cache.set('session:abc', sessionData, { ttl: 60 * 60 * 1000 })

// No expiry
cache.set('config', configData, { ttl: 0 })
```
````

````js
Using getOrSet pattern:
```typescript
const user = await cache.getOrSet('user:123', async () => {
  return await fetchUserFromDatabase('123')
})
```
````

---

## Constructors

<MemberHeading
  id="constructor"
  depth="3"
  name="constructor"
  sig="new Cache<
	K = string,
	V = unknown,
>(
	options: CacheOptions,
): Cache<K, V>"
/>

**Parameters**

- `options` ([CacheOptions](/module/services-cache-cache/cacheoptions), default: "{}") — Cache configuration options

**Returns**

`Cache<K, V>`

---

## Accessors

<MemberHeading id="size" depth="3" name="size" sig="get size(): number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L209" sourceLabel="Cache.ts:209" />

Gets the current size of the cache

## Methods

<MemberHeading id="clear" depth="3" name="clear" sig="clear(): this" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L353" sourceLabel="Cache.ts:353" />

Clears all entries from the cache

**Returns**

- `this` — This cache instance for chaining

<MemberHeading id="delete" depth="3" name="delete" sig="delete(key: K): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L344" sourceLabel="Cache.ts:344" />

Deletes a value from the cache

**Parameters**

- `key` (K) — Cache key

**Returns**

- `boolean` — True if the key was deleted

<MemberHeading id="destroy" depth="3" name="destroy" sig="destroy(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L463" sourceLabel="Cache.ts:463" />

Destroys the cache and cleans up resources

**Returns**

- `void`

<MemberHeading id="entries" depth="3" name="entries" sig="entries(): [K, V][]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L383" sourceLabel="Cache.ts:383" />

Gets all entries as key-value pairs

**Returns**

- `[K, V][]` — Array of \[key, value] tuples

<MemberHeading
  id="foreach"
  depth="3"
  name="forEach"
  sig="forEach(
	callback: (value: V, key: K, entry: CacheEntry<V>) => void,
): void"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L452" sourceLabel="Cache.ts:452" />

Iterates over cache entries

**Parameters**

- `callback` ((value: V, key: K, entry: [CacheEntry](/module/services-cache-cache/cacheentry)\<V>) => void) — Function called for each entry

**Returns**

- `void`

**Example**

```typescript
cache.forEach((value, key, entry) => {
  console.log(`${key}: ${value} (hits: ${entry.hits})`)
})
```

<MemberHeading id="get" depth="3" name="get" sig="get(key: K): V | undefined" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L227" sourceLabel="Cache.ts:227" />

Gets a value from the cache

**Parameters**

- `key` (K) — Cache key

**Returns**

- `V | undefined` — Cached value or undefined if not found/expired

**Example**

```typescript
const value = cache.get('myKey')
if (value !== undefined) {
  console.log('Found:', value)
}
```

<MemberHeading
  id="getorset"
  depth="3"
  name="getOrSet"
  sig="getOrSet<
	T,
>(
	key: K,
	factory: () => T | Promise<T>,
	options?: { ttl?: number },
): Promise<T>"
/>

<MemberMeta badges="async" sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L305" sourceLabel="Cache.ts:305" />

Gets a value, setting it if not present

**Type Parameters**

- `T` — Value type (extends V)

**Parameters**

- `key` (K) — Cache key
- `factory` (() => T | Promise\<T>) — Function to create value if not cached
- `options` ({ ttl?: number }, optional) — Optional cache settings

**Properties**

- `ttl` (number, optional)

**Returns**

- `Promise<T>` — The cached or newly created value

**Example**

```typescript
const user = await cache.getOrSet(
  'user:123',
  async () => await db.users.find('123'),
  { ttl: 300000 }
)
```

<MemberHeading id="getstats" depth="3" name="getStats" sig="getStats(): CacheStats" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L405" sourceLabel="Cache.ts:405" />

Gets cache statistics

**Returns**

- [`CacheStats`](/module/services-cache-cache/cachestats) — Current cache statistics

**Example**

```typescript
const stats = cache.getStats()
console.log(`Hit rate: ${(stats.hitRate * 100).toFixed(2)}%`)
console.log(`Memory: ${stats.memoryUsage} bytes`)
```

<MemberHeading id="has" depth="3" name="has" sig="has(key: K): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L326" sourceLabel="Cache.ts:326" />

Checks if a key exists and is not expired

**Parameters**

- `key` (K) — Cache key

**Returns**

- `boolean` — True if key exists and is valid

<MemberHeading id="keys" depth="3" name="keys" sig="keys(): K[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L363" sourceLabel="Cache.ts:363" />

Gets all keys in the cache

**Returns**

- `K[]` — Array of keys

<MemberHeading id="set" depth="3" name="set" sig="set(key: K, value: V, options?: { ttl?: number }): this" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L265" sourceLabel="Cache.ts:265" />

Sets a value in the cache

**Parameters**

- `key` (K) — Cache key
- `value` (V) — Value to cache
- `options` ({ ttl?: number }, optional) — Optional settings for this entry

**Properties**

- `ttl` (number, optional)

**Returns**

- `this` — This cache instance for chaining

**Example**

```typescript
cache
  .set('key1', 'value1')
  .set('key2', 'value2', { ttl: 60000 })
```

<MemberHeading id="touch" depth="3" name="touch" sig="touch(key: K, ttl?: number): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L431" sourceLabel="Cache.ts:431" />

Updates the TTL for an existing entry

**Parameters**

- `key` (K) — Cache key
- `ttl` (number, optional) — New TTL in milliseconds

**Returns**

- `boolean` — True if entry was updated

<MemberHeading id="values" depth="3" name="values" sig="values(): V[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/cache/cache-ts/#L372" sourceLabel="Cache.ts:372" />

Gets all values in the cache

**Returns**

- `V[]` — Array of values
