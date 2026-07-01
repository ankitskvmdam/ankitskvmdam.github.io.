---
title: createNamespacedCache
kind: function
longname: module:services/cache/Cache.createNamespacedCache
description: Creates a namespace-prefixed cache wrapper
---

# createNamespacedCache

<Signature
  code="createNamespacedCache<
	V,
>(
	cache: Cache<string, V>,
	namespace: string,
): { delete: (key: string) => boolean; get: (key: string) => V | undefined; has: (key: string) => boolean; set: (key: string, value: V, options?: { ttl?: number }) => void }"
/>

<SourceLink href="/source/docs-site/typedoc-src/services/cache/cache-ts/#L583" label="Cache.ts:583" />

Creates a namespace-prefixed cache wrapper

**Type Parameters**

- `V` — Value type

**Parameters**

- `cache` ([Cache](/module/services-cache-cache/cache)\<string, V>) — Base cache instance
- `namespace` (string) — Namespace prefix

**Properties**

- `delete` ((key: string) => boolean)
- `get` ((key: string) => V | undefined)
- `has` ((key: string) => boolean)
- `set` ((key: string, value: V, [options](/module/components-form/selectfieldprops#options)?: { ttl?: number }) => void)

**Returns**

- `{ delete: (key: string) => boolean; get: (key: string) => V | undefined; has: (key: string) => boolean; set: (key: string, value: V, `[`options`](/module/components-form/selectfieldprops#options)`?: { ttl?: number }) => void }` — Namespaced cache wrapper

**Example**

```typescript
const baseCache = new Cache<string, unknown>()
const userCache = createNamespacedCache(baseCache, 'users')

userCache.set('123', userData) // Actually stores as 'users:123'
userCache.get('123') // Retrieves from 'users:123'
```
