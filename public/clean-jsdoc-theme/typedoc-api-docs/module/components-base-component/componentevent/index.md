---
title: ComponentEvent
kind: interface
longname: module:components/base/Component.ComponentEvent
description: Component event
---

# ComponentEvent

<Signature
  code="interface ComponentEvent<T = unknown> {
	data?: T;
	source: Component;
	timestamp: number;
	type: string;
	preventDefault(): void;
	stopPropagation(): void;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/components/base/component-ts/#L62" label="Component.ts:62" />

Component event

**Type Parameters**

- `T` = `unknown` — Event data type

---

## Properties

<MemberHeading id="data" depth="3" name="data" sig="data: T" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L68" sourceLabel="Component.ts:68" />

Event data

<MemberHeading id="source" depth="3" name="source" sig="source: Component" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L66" sourceLabel="Component.ts:66" />

Event source component

<MemberHeading id="timestamp" depth="3" name="timestamp" sig="timestamp: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L70" sourceLabel="Component.ts:70" />

Event timestamp

<MemberHeading id="type" depth="3" name="type" sig="type: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L64" sourceLabel="Component.ts:64" />

Event type

## Methods

<MemberHeading id="preventdefault" depth="3" name="preventDefault" sig="preventDefault(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L74" sourceLabel="Component.ts:74" />

Prevents default behavior

**Returns**

- `void`

<MemberHeading id="stoppropagation" depth="3" name="stopPropagation" sig="stopPropagation(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L72" sourceLabel="Component.ts:72" />

Stops event propagation

**Returns**

- `void`
