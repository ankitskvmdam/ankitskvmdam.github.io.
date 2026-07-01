---
title: Base
kind: class
longname: module:parity.Base
description: Base entity.
group: Models
---

# Base

<SourceLink href="/source/docs-site/typedoc-src/parity-ts/#L16" label="parity.ts:16" />

**Modifiers:** `abstract`

Base entity.

**Type Parameters**

- `T`

---

## Constructors

<MemberHeading id="constructor" depth="3" name="constructor" sig="new Base<T>(id: string): Base<T>" />

**Parameters**

- `id` (string)

**Returns**

`Base<T>`

---

## Properties

<MemberHeading id="id" depth="3" name="id" sig="id: string" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/parity-ts/#L18" sourceLabel="parity.ts:18" />

Primary identifier.

## Methods

<MemberHeading id="describe" depth="3" name="describe" sig="describe(): string" />

<MemberMeta badges="abstract" sourceHref="/source/docs-site/typedoc-src/parity-ts/#L27" sourceLabel="parity.ts:27" />

Abstract hook subclasses override.

**Returns**

- `string`

<MemberHeading id="tojson" depth="3" name="toJSON" sig="toJSON(): { id: string }" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/parity-ts/#L23" sourceLabel="parity.ts:23" />

Serialize to a plain object.

**Properties**

- `id` (string)

**Returns**

- `{ id: string }`
