---
title: Task
kind: typedef
longname: module:forge/queue~Task
description: A unit of work the {@link Queue} can run.
---

# Task

<SourceLink href="/source/queue-js/#L16" label="queue.js:16" />

A unit of work the [Queue](/module/forge-queue#queue) can run.

**Properties**

- `id` (string) — Stable identifier for the task.
- `priority` (Priority, optional, default: "Priority.NORMAL") — Relative scheduling weight.
- `run` (TaskHandler) — The function invoked when the task is scheduled.

**Type**

`Object`
