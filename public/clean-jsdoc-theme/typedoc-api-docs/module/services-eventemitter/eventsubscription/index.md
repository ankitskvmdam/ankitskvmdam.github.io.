---
title: EventSubscription
kind: interface
longname: module:services/EventEmitter.EventSubscription
description: Event subscription object
---

# EventSubscription

<Signature
  code="interface EventSubscription {
	isActive: boolean;
	unsubscribe(): void;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/services/eventemitter-ts/#L25" label="EventEmitter.ts:25" />

Event subscription object

---

## Properties

<MemberHeading id="isactive" depth="3" name="isActive" sig="isActive: boolean" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L29" sourceLabel="EventEmitter.ts:29" />

Whether the subscription is active

## Methods

<MemberHeading id="unsubscribe" depth="3" name="unsubscribe" sig="unsubscribe(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L27" sourceLabel="EventEmitter.ts:27" />

Removes the subscription

**Returns**

- `void`
