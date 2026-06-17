---
title: Queue
kind: class
longname: module:forge/queue.Queue
description: An ordered, event-driven task runner. Queue extends Node's EventEmitter , so the inheritance chain and the emitted events both show up in the generated page. [!CAUTION] Tasks pushed after {@link Queue#clear} runs are rejected — clearing aborts the in-flight signal.
group: Core/Runtime
order: 1
---

# Queue

**Extends:&#x20;**`EventEmitter`

<SourceLink href="/source/queue-js/#L61" label="queue.js:61" />

An ordered, event-driven task runner.

`Queue` extends Node's `EventEmitter`, so the inheritance chain and the emitted events both show up in the generated page.

<Callout type="warning">
  Tasks pushed after `Queue#clear` runs are rejected — clearing aborts the in-flight signal.
</Callout>

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

---

## Constructor

`new Queue([options])`

**Parameters**

- `options` (Object, optional, default: "{}") — Queue configuration.
  - `options.concurrency` (number, optional, default: 1) — How many tasks run at once (clamped to [MAX\_CONCURRENCY](/module/forge-queue#maxconcurrency)).
  - `options.autoStart` (boolean, optional, default: true) — Start draining as soon as a task is pushed.

---

## Instance Methods

<MemberHeading id="push" depth="3" name="push" sig="push(task) -> this" />

<MemberMeta sourceHref="/source/queue-js/#L93" sourceLabel="queue.js:93" />

Add a task to the queue, inserted by [Priority](/module/forge-cache#priority).

**Parameters**

- `task` (Task) — The task to enqueue.

**Returns**

- `this` — The queue, for chaining.

<MemberHeading id="drain" depth="3" name="drain" sig="drain() -> Promise.<number>" />

<MemberMeta badges="async" sourceHref="/source/queue-js/#L108" sourceLabel="queue.js:108" />

Run every pending task and resolve once the queue is empty.

**Returns**

- `Promise.<number>` — The number of tasks that ran.

**Fires**

- `Queue#event:drain`

**Example**

<Playground providers="codesandbox" filename="drain.js" highlight="2,3">
  ```js
  const ran = await queue.drain();
  ```
</Playground>

<MemberHeading id="tasks" depth="3" name="tasks" sig="tasks()" />

<MemberMeta badges="generator" sourceHref="/source/queue-js/#L127" sourceLabel="queue.js:127" />

Iterate pending tasks in scheduling order, highest priority first.

**Yields**

- `Task` — The next pending task.

**Example**

The {@lang} directive forces this block's language

<Playground providers="codepen jsfiddle codesandbox">
  ```ts
  for (const task of queue.tasks()) {    console.log(task.id satisfies string);  }
  ```
</Playground>

<MemberHeading id="onerror" depth="3" name="onError" sig="onError(error) -> void" />

<MemberMeta badges="abstract" sourceHref="/source/queue-js/#L138" sourceLabel="queue.js:138" />

Handle a task failure. Subclasses **must** implement this.

**Parameters**

- `error` (Error) — The error a task threw.

**Returns**

- `void`

<MemberHeading id="next" depth="3" name="_next" sig="_next() -> Task | undefined" />

<MemberMeta badges="protected" sourceHref="/source/queue-js/#L148" sourceLabel="queue.js:148" />

Pull and start the next task. Internal scheduling step.

**Returns**

- `Task | undefined` — The task that was started, if any.

<MemberHeading id="clear" depth="3" name="clear" sig="clear() -> void" />

<MemberMeta sourceHref="/source/queue-js/#L158" sourceLabel="queue.js:158" />

Stop and clear the queue, aborting any in-flight task.

**Returns**

- `void`

## Instance Fields

<MemberHeading id="concurrency" depth="3" name="concurrency" sig="concurrency" />

<MemberMeta badges="readonly" sourceHref="/source/queue-js/#L76" sourceLabel="queue.js:76" />

Effective concurrency, clamped to [MAX\_CONCURRENCY](/module/forge-queue#maxconcurrency).

**Type**

`number`
