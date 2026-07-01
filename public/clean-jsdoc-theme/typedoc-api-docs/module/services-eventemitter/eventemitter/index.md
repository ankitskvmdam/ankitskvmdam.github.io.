---
title: EventEmitter
kind: class
longname: module:services/EventEmitter.EventEmitter
description: Type-safe event emitter class
---

# EventEmitter

<SourceLink href="/source/docs-site/typedoc-src/services/eventemitter-ts/#L132" label="EventEmitter.ts:132" />

Type-safe event emitter class

**Remarks**

Provides a robust event system with support for:

- Typed events with type inference
- One-time listeners
- Priority-based execution
- Async event handlers
- Wildcard event listening

A local image referenced from a TypeScript doc comment is copied into the built site and its path rewritten, just like in `docs` pages and the README. The diagram below lives in `img/event-flow.svg`, referenced from this source file (`src/services/`) with a `../../img/` relative path:

![Event flow from emit() through EventEmitter to Listeners](../../img/event-flow.svg)

**Type Parameters**

- `TEvents` extends `Record<string, unknown>` = `Record<string, unknown>` — Event map type defining event names and data types

**Example**

````js
Define typed events:
```typescript
interface MyEvents {
  'user:login': { userId: string; timestamp: Date }
  'user:logout': { userId: string }
  'error': Error
  'ready': void
}

const emitter = new EventEmitter<MyEvents>()
```
````

````js
Subscribe to events:
```typescript
// Type-safe event subscription
emitter.on('user:login', (data) => {
  console.log(`User ${data.userId} logged in at ${data.timestamp}`)
})

// One-time listener
emitter.once('ready', () => {
  console.log('Application is ready!')
})

// Priority listener (executes first)
emitter.on('error', (error) => {
  console.error('Critical error:', error)
}, { priority: 100 })
```
````

````js
Emit events:
```typescript
emitter.emit('user:login', {
  userId: 'user-123',
  timestamp: new Date()
})

emitter.emit('ready')
```
````

---

## Constructors

<MemberHeading
  id="constructor"
  depth="3"
  name="constructor"
  sig="new EventEmitter<
	TEvents extends Record<string, unknown> = Record<string, unknown>,
>(
): EventEmitter<TEvents>"
/>

**Returns**

`EventEmitter<TEvents>`

---

## Methods

<MemberHeading
  id="emit"
  depth="3"
  name="emit"
  sig="emit<
	K extends string | number | symbol,
>(
	event: K,
	...args: TEvents[K] extends void ? [] : [data: TEvents[K]],
): boolean"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L262" sourceLabel="EventEmitter.ts:262" />

Emits an event to all listeners

**Type Parameters**

- `K` extends `string | number | symbol` — Event name type

**Parameters**

- `event` (K) — Event name to emit
- `args` (TEvents\[K] extends void ? \[] : \[data: TEvents\[K]])

**Returns**

- `boolean` — True if event had listeners

**Example**

```typescript
emitter.emit('user:login', {
  userId: 'user-123',
  timestamp: new Date()
})
```

<MemberHeading
  id="emitasync"
  depth="3"
  name="emitAsync"
  sig="emitAsync<
	K extends string | number | symbol,
>(
	event: K,
	...args: TEvents[K] extends void ? [] : [data: TEvents[K]],
): Promise<boolean>"
/>

<MemberMeta badges="async" sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L315" sourceLabel="EventEmitter.ts:315" />

Emits an event and waits for all async handlers

**Type Parameters**

- `K` extends `string | number | symbol` — Event name type

**Parameters**

- `event` (K) — Event name to emit
- `args` (TEvents\[K] extends void ? \[] : \[data: TEvents\[K]])

**Returns**

- `Promise<boolean>` — Promise that resolves when all handlers complete

**Example**

```typescript
await emitter.emitAsync('data:save', { records: [...] })
console.log('All save handlers completed!')
```

<MemberHeading id="eventnames" depth="3" name="eventNames" sig="eventNames(): (keyof TEvents)[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L372" sourceLabel="EventEmitter.ts:372" />

Gets all event names with listeners

**Returns**

- `(keyof TEvents)[]` — Array of event names

<MemberHeading id="getmaxlisteners" depth="3" name="getMaxListeners" sig="getMaxListeners(): number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L171" sourceLabel="EventEmitter.ts:171" />

Gets the maximum number of listeners per event

**Returns**

- `number` — Maximum listeners count

<MemberHeading
  id="listenercount"
  depth="3"
  name="listenerCount"
  sig="listenerCount<
	K extends string | number | symbol,
>(
	event: K,
): number"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L363" sourceLabel="EventEmitter.ts:363" />

Gets the number of listeners for an event

**Type Parameters**

- `K` extends `string | number | symbol`

**Parameters**

- `event` (K) — Event name

**Returns**

- `number` — Number of listeners

<MemberHeading
  id="off"
  depth="3"
  name="off"
  sig="off<
	K extends string | number | symbol,
>(
	event: K,
	handler: EventHandler<TEvents[K]>,
): boolean"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L234" sourceLabel="EventEmitter.ts:234" />

Removes an event listener

**Type Parameters**

- `K` extends `string | number | symbol` — Event name type

**Parameters**

- `event` (K) — Event name
- `handler` ([EventHandler](/module/services-eventemitter/eventhandler)\<TEvents\[K]>) — Handler function to remove

**Returns**

- `boolean` — True if a listener was removed

<MemberHeading
  id="on"
  depth="3"
  name="on"
  sig="on<
	K extends string | number | symbol,
>(
	event: K,
	handler: EventHandler<TEvents[K]>,
	options: ListenerOptions,
): EventSubscription"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L194" sourceLabel="EventEmitter.ts:194" />

Adds an event listener

**Type Parameters**

- `K` extends `string | number | symbol` — Event name type

**Parameters**

- `event` (K) — Event name to listen for
- `handler` ([EventHandler](/module/services-eventemitter/eventhandler)\<TEvents\[K]>) — Handler function
- `options` ([ListenerOptions](/module/services-eventemitter/listeneroptions), default: "{}") — Listener options

**Returns**

- [`EventSubscription`](/module/services-eventemitter/eventsubscription) — Subscription object for unsubscribing

**Example**

```typescript
const subscription = emitter.on('user:login', (data) => {
  console.log(data.userId)
})

// Later: remove the listener
subscription.unsubscribe()
```

<MemberHeading
  id="onany"
  depth="3"
  name="onAny"
  sig="onAny(
	handler: EventHandler<unknown>,
	options: ListenerOptions,
): EventSubscription"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L405" sourceLabel="EventEmitter.ts:405" />

Adds a wildcard listener that receives all events

**Parameters**

- `handler` ([EventHandler](/module/services-eventemitter/eventhandler)\<unknown>) — Handler function
- `options` ([ListenerOptions](/module/services-eventemitter/listeneroptions), default: "{}") — Listener options

**Returns**

- [`EventSubscription`](/module/services-eventemitter/eventsubscription) — Subscription object

**Example**

```typescript
emitter.onAny((data) => {
  console.log('Event emitted:', data)
})
```

<MemberHeading
  id="once"
  depth="3"
  name="once"
  sig="once<
	K extends string | number | symbol,
>(
	event: K,
	handler: EventHandler<TEvents[K]>,
	options: ListenerOptions,
): EventSubscription"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L218" sourceLabel="EventEmitter.ts:218" />

Adds a one-time event listener

**Type Parameters**

- `K` extends `string | number | symbol` — Event name type

**Parameters**

- `event` (K) — Event name to listen for
- `handler` ([EventHandler](/module/services-eventemitter/eventhandler)\<TEvents\[K]>) — Handler function
- `options` ([ListenerOptions](/module/services-eventemitter/listeneroptions), default: "{}") — Listener options (once is automatically set to true)

**Returns**

- [`EventSubscription`](/module/services-eventemitter/eventsubscription) — Subscription object

**Example**

```typescript
emitter.once('ready', () => {
  console.log('This runs only once!')
})
```

<MemberHeading
  id="removealllisteners"
  depth="3"
  name="removeAllListeners"
  sig="removeAllListeners<
	K extends string | number | symbol,
>(
	event?: K,
): this"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L382" sourceLabel="EventEmitter.ts:382" />

Removes all listeners for an event or all events

**Type Parameters**

- `K` extends `string | number | symbol`

**Parameters**

- `event` (K, optional) — Optional event name (if omitted, removes all)

**Returns**

- `this` — This emitter for chaining

<MemberHeading id="setmaxlisteners" depth="3" name="setMaxListeners" sig="setMaxListeners(max: number): this" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L161" sourceLabel="EventEmitter.ts:161" />

Sets the maximum number of listeners per event

**Parameters**

- `max` (number) — Maximum listeners (0 for unlimited)

**Returns**

- `this` — This emitter for chaining

**Example**

```typescript
emitter.setMaxListeners(10)
```

<MemberHeading
  id="waitfor"
  depth="3"
  name="waitFor"
  sig="waitFor<
	K extends string | number | symbol,
>(
	event: K,
	timeout?: number,
): Promise<TEvents[K]>"
/>

<MemberMeta badges="async" sourceHref="/source/docs-site/typedoc-src/services/eventemitter-ts/#L424" sourceLabel="EventEmitter.ts:424" />

Waits for an event to be emitted

**Type Parameters**

- `K` extends `string | number | symbol` — Event name type

**Parameters**

- `event` (K) — Event to wait for
- `timeout` (number, optional) — Optional timeout in milliseconds

**Returns**

- `Promise<TEvents[K]>` — Promise resolving to the event data

**Throws**

- Error If timeout is reached

**Example**

```typescript
const loginData = await emitter.waitFor('user:login', 5000)
console.log('User logged in:', loginData.userId)
```
