---
title: ListenerOptions
kind: interface
longname: module:services/EventEmitter.ListenerOptions
description: Event listener options
---

# ListenerOptions

<Signature
  code="interface ListenerOptions {
	context?: unknown;
	once?: boolean;
	priority?: number;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/services/eventemitter-ts/#L37" label="EventEmitter.ts:37" />

Event listener options

---

## Properties

<MemberHeading id="context" depth="3" name="context" sig="context: unknown" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L53" sourceLabel="EventEmitter.ts:53" />

Optional context to bind to the handler

<MemberHeading id="once" depth="3" name="once" sig="once: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L42" sourceLabel="EventEmitter.ts:42" />

If true, the listener is automatically removed after first invocation

**Default:** ` ```ts
false ``` `

<MemberHeading id="priority" depth="3" name="priority" sig="priority: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L48" sourceLabel="EventEmitter.ts:48" />

Priority for execution order (higher = earlier)

**Default:** ` ```ts
0 ``` `
