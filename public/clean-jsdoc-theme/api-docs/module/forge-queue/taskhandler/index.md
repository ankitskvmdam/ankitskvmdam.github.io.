---
title: TaskHandler
kind: typedef
longname: module:forge/queue~TaskHandler
description: The function a {@link Task} runs when scheduled.
---

# TaskHandler

<SourceLink href="/source/queue-js/#L24" label="queue.js:24" />

The function a [Task](/module/forge-queue#task) runs when scheduled.

**Parameters**

- `signal` (AbortSignal) — Aborted if the queue is cleared mid-flight.

**Returns**

- `Promise.<void> | void` — Resolves when the task is complete.
