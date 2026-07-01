---
title: Widget
kind: class
longname: module:parity.Widget
description: A widget. Extends {@link module:parity.Base|Base} and implements {@link module:parity.Named|Named}.
group: Widgets
---

# Widget

<SourceLink href="/source/docs-site/typedoc-src/parity-ts/#L40" label="parity.ts:40" />

A widget. Extends [Base](/module/parity/base) and implements [Named](/module/parity/named).

---

## Constructors

<MemberHeading id="constructor" depth="3" name="constructor" sig="new Widget(id: string, name: string): Widget" />

**Parameters**

- `id` (string)
- `name` (string)

**Returns**

`Widget`

#### Hierarchy

- [`Base`](/module/parity/base)
- `Widget`

#### Implements

- [`Named`](/module/parity/named)

---

## Properties

<MemberHeading id="id" depth="3" name="id" sig="id: string" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/parity-ts/#L18" sourceLabel="parity.ts:18" />

_Inherited from&#x20;_[`id`](/module/parity/base#id)

Primary identifier.

<MemberHeading id="name" depth="3" name="name" sig="name: string" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/parity-ts/#L41" sourceLabel="parity.ts:41" />

_Implementation of&#x20;_[`name`](/module/parity/named#name)

Human-readable name.

## Accessors

<MemberHeading id="label" depth="3" name="label" sig="get label(): string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/parity-ts/#L51" sourceLabel="parity.ts:51" />

A getter accessor.

## Methods

<MemberHeading id="describe" depth="3" name="describe" sig="describe(): string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/parity-ts/#L47" sourceLabel="parity.ts:47" />

_Overrides&#x20;_[`describe`](/module/parity/base#describe)

Overrides [Base.describe](/module/parity/base#describe).

**Returns**

- `string`

<MemberHeading id="load" depth="3" name="load" sig="load(): Promise<void>" />

<MemberMeta badges="async" sourceHref="/source/docs-site/typedoc-src/parity-ts/#L61" sourceLabel="parity.ts:61" />

Load this widget's data asynchronously.

**Returns**

- `Promise<void>`

<MemberHeading id="tojson" depth="3" name="toJSON" sig="toJSON(): { id: string }" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/parity-ts/#L57" sourceLabel="parity.ts:57" />

_Overrides&#x20;_[`toJSON`](/module/parity/base#tojson)

Serialize to a plain object.

**Properties**

- `id` (string)

**Returns**

- `{ id: string }`
