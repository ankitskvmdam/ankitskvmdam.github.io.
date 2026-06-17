---
title: text
kind: namespace
longname: module:forge/contracts~text
description: String helpers used across Forge.
group: Helpers
---

# text

<SourceLink href="/source/contracts-js/#L101" label="contracts.js:101" />

A grab-bag of pure string utilities.

String helpers used across Forge.

---

## Static Methods

<MemberHeading id="slugify" depth="3" name="slugify" sig="slugify(input) -> string" />

<MemberMeta badges="static" sourceHref="/source/contracts-js/#L110" sourceLabel="contracts.js:110" />

Convert a string to a URL-friendly slug.

**Parameters**

- `input` (string) — The string to slugify.

**Returns**

- `string` — A lowercase, hyphenated slug.

**Example**

```js
text.slugify('Hello World'); // => 'hello-world'
```

<MemberHeading id="truncate" depth="3" name="truncate" sig="truncate(input, max) -> string" />

<MemberMeta badges="static" sourceHref="/source/contracts-js/#L121" sourceLabel="contracts.js:121" />

Truncate a string to `max` characters, appending an ellipsis.

**Parameters**

- `input` (string) — The string to shorten.
- `max` (number, optional, default: 80) — Maximum length before truncation.

**Returns**

- `string` — The truncated string.

<MemberHeading id="seedcache" depth="3" name="seedCache" sig="seedCache(entries, options) -> Cache" />

<MemberMeta badges="static" sourceHref="/source/cache-js/#L204" sourceLabel="cache.js:204" />

Create a [Cache](/module/forge-cache#cache) pre-populated from an object of key/value pairs.

This is a **global** function (no `@memberof`), so it appears on the aggregated **Globals** page rather than owning its own page.

**Parameters**

- `entries` (Object.\<string, \*>) — Initial entries to seed the cache with.
- `options` (CacheOptions, optional) — Options forwarded to the [Cache](/module/forge-cache#cache) constructor.

**Returns**

- `Cache` — A new, seeded cache.

**Example**

```js
const cache = createCache({ a: 1, b: 2 }, { maxSize: 10 });cache.get('b'); // => 2
```

<Embed src="https://ankdev.me/clean-jsdoc-theme/api-docs/" title="createCache demo" height="360" clickToLoad="true" />

- **Since:** 1.0.0
