---
title: Globals
kind: global
longname: Globals
---

# Globals

---

## Instance Methods

<MemberHeading
  id="definetask"
  depth="3"
  name="defineTask"
  sig="defineTask(
	id: string,
	run: TaskHandler,
	priority?: Priority,
): Task"
/>

<MemberMeta sourceHref="/source/globals-js/#L60" sourceLabel="globals.js:60" />

Define a [Task](/module/forge-queue#task) without writing the object literal by hand.

A convenience global that mirrors the [createCache](/module/forge-cache#createcache) factory — handy for one-liners.

**Parameters**

- `id` (string) — Stable task identifier.
- `run` ([TaskHandler](/module/forge-queue#taskhandler)) — The work to perform.
- `priority` ([Priority](/module/forge-cache#priority), optional, default: "Priority.NORMAL") — Scheduling weight.

**Returns**

- [`Task`](/module/forge-queue#task) — The assembled task.

**Example**

Define and enqueue a task

```js
const task = defineTask('reindex', async () => rebuildIndex());queue.push(task);
```

- **See:**
  - `Queue#push`

## Enums

<MemberHeading id="loglevel" depth="3" name="LogLevel" sig="LogLevel: number" />

<MemberMeta badges="readonly,enum" sourceHref="/source/globals-js/#L19" sourceLabel="globals.js:19" />

Severity levels for Forge's logger — a global numeric enum, rendered as a member table in the Globals page section.

**Properties**

- `DEBUG` (number, default: 10) — Diagnostic detail.
- `INFO` (number, default: 20) — Normal operation.
- `WARN` (number, default: 30) — Something looks off.
- `ERROR` (number, default: 40) — A failure occurred.

## Other

<MemberHeading id="defaultoptions" depth="3" name="DEFAULT_OPTIONS" sig="DEFAULT_OPTIONS: Object" />

<MemberMeta sourceHref="/source/globals-js/#L38" sourceLabel="globals.js:38" />

Default options applied to every [Queue](/module/forge-queue#queue) when none are supplied.

**Properties**

- `concurrency` (number) — Default parallelism.
- `autoStart` (boolean) — Whether to drain on push.
