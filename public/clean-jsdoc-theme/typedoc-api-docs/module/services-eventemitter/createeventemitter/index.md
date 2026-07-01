---
title: createEventEmitter
kind: function
longname: module:services/EventEmitter.createEventEmitter
description: Creates a new EventEmitter instance
---

# createEventEmitter

<Signature
  code="createEventEmitter<
	TEvents extends Record<string, unknown> = Record<string, unknown>,
>(
): EventEmitter<TEvents>"
/>

<SourceLink href="/source/docs-site/typedoc-src/services/eventemitter-ts/#L520" label="EventEmitter.ts:520" />

Creates a new EventEmitter instance

**Type Parameters**

- `TEvents` extends `Record<string, unknown>` = `Record<string, unknown>` — Event map type

**Returns**

- [`EventEmitter`](/module/services-eventemitter/eventemitter)`<TEvents>` — New EventEmitter instance

**Example**

```typescript
interface AppEvents {
  'start': void
  'stop': { reason: string }
}

const events = createEventEmitter<AppEvents>()
events.on('stop', ({ reason }) => console.log(reason))
```
