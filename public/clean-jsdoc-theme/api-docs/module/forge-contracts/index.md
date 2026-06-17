---
title: forge/contracts
kind: module
longname: module:forge/contracts
description: Contracts &amp; helpers — the interfaces, mixin, and namespace that the concrete classes build on.
---

# forge/contracts

<SourceLink href="/source/contracts-js/#L8" label="contracts.js:8" />

Contracts & helpers — the interfaces, mixin, and namespace that the concrete classes build on.

---

## Instance Methods

<MemberHeading id="slug" depth="3" name="slug" sig="slug(input) -> string" />

<MemberMeta sourceHref="/source/contracts-js/#L134" sourceLabel="contracts.js:134" />

Shorthand alias for `text.slugify`.

**Alias:** `slug`

**Parameters**

- `input` (string) — The string to slugify.

**Returns**

- `string` — A lowercase, hyphenated slug.

## Other

<MemberHeading id="store" depth="3" name="Store" sig="Store" />

<MemberMeta sourceHref="/source/contracts-js/#L15" sourceLabel="contracts.js:15" />

A minimal key/value store contract. [Cache](/module/forge-cache#cache) implements it.

<MemberHeading id="serializable" depth="3" name="Serializable" sig="Serializable" />

<MemberMeta sourceHref="/source/contracts-js/#L41" sourceLabel="contracts.js:41" />

Anything that can be turned into a JSON-safe snapshot.

<MemberHeading id="timestamped" depth="3" name="Timestamped" sig="Timestamped" />

<MemberMeta badges="static" sourceHref="/source/contracts-js/#L57" sourceLabel="contracts.js:57" />

Adds created/updated timestamps to whatever it is mixed into.

**Example**

```js
Object.assign(MyClass.prototype, Timestamped);
```

<MemberHeading id="record" depth="3" name="Record" sig="Record" />

<MemberMeta badges="static" sourceHref="/source/contracts-js/#L85" sourceLabel="contracts.js:85" />

**Mixes:&#x20;**`Timestamped`

A timestamped record — demonstrates `@mixes`.

**Parameters**

- `data` (Object) — Arbitrary record fields.

<MemberHeading id="text" depth="3" name="text" sig="text" />

<MemberMeta sourceHref="/source/contracts-js/#L101" sourceLabel="contracts.js:101" />

A grab-bag of pure string utilities.

String helpers used across Forge.
