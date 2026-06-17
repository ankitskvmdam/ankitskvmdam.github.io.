---
title: forge/queue
kind: module
longname: module:forge/queue
description: The event-driven task {@link Queue} and its supporting types.
---

# forge/queue

<SourceLink href="/source/queue-js/#L7" label="queue.js:7" />

The event-driven task [Queue](/module/forge-queue#queue) and its supporting types.

---

## Other

<MemberHeading id="task" depth="3" name="Task" sig="Task" />

<MemberMeta sourceHref="/source/queue-js/#L16" sourceLabel="queue.js:16" />

A unit of work the [Queue](/module/forge-queue#queue) can run.

**Properties**

- `id` (string) — Stable identifier for the task.
- `priority` (Priority, optional, default: "Priority.NORMAL") — Relative scheduling weight.
- `run` (TaskHandler) — The function invoked when the task is scheduled.

**Type**

`Object`

<MemberHeading id="taskhandler" depth="3" name="TaskHandler" sig="TaskHandler" />

<MemberMeta sourceHref="/source/queue-js/#L24" sourceLabel="queue.js:24" />

The function a [Task](/module/forge-queue#task) runs when scheduled.

**Parameters**

- `signal` (AbortSignal) — Aborted if the queue is cleared mid-flight.

**Returns**

- `Promise.<void> | void` — Resolves when the task is complete.

<MemberHeading id="maxconcurrency" depth="3" name="MAX_CONCURRENCY" sig="MAX_CONCURRENCY" />

<MemberMeta badges="static" sourceHref="/source/queue-js/#L30" sourceLabel="queue.js:30" />

Maximum concurrency the queue will ever allow, regardless of options.

**Type**

`number`

<MemberHeading id="queue" depth="3" name="Queue" sig="Queue" />

<MemberMeta badges="static" sourceHref="/source/queue-js/#L61" sourceLabel="queue.js:61" />

**Extends:&#x20;**`EventEmitter`

An ordered, event-driven task runner.

`Queue` extends Node's `EventEmitter`, so the inheritance chain and the emitted events both show up in the generated page.

<Callout type="warning">
  Tasks pushed after `Queue#clear` runs are rejected — clearing aborts the in-flight signal.
</Callout>

**Parameters**

- `options` (Object, optional, default: "{}") — Queue configuration.
  - `options.concurrency` (number, optional, default: 1) — How many tasks run at once (clamped to [MAX\_CONCURRENCY](/module/forge-queue#maxconcurrency)).
  - `options.autoStart` (boolean, optional, default: true) — Start draining as soon as a task is pushed.

**Fires**

- `Queue#event:drain`
- `Queue#event:error`

**Listens**

- `module:forge/cache.Cache#event:evict`

**Example**

Draining a queue

<Playground providers="codepen jsfiddle codesandbox">
  ```js
  const q = new Queue({ concurrency: 2 });  q.on('drain', () => console.log('done'));  q.push({ id: 't1', run: async () => doWork() });  await q.drain();
  ```
</Playground>

- **Since:** 1.1.0
- **Version:** 1.3.0
- **Copyright:** 2024 The clean-jsdoc-theme team
- **Author:** The clean-jsdoc-theme team
- **Requires:** `module:forge/cache`
- **TODO:**
  - Add backpressure when the pending list exceeds a high-water mark.
