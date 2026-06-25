---
title: Store
kind: class
longname: Store
description: A typed key/value store with a fixed capacity.
---

# Store

<SourceLink href="/source/index-ts/#L90" label="index.ts:90" />

A typed key/value store with a fixed capacity.

**Type Parameters**

- `T` — The value type held by the store.

---

## Constructors

<MemberHeading id="constructor" depth="3" name="constructor" sig="new Store<T>(capacity: number, logger?: Logger): Store<T>" />

**Parameters**

- `capacity` (number) — Maximum number of entries before [Store.set](/store#set) throws.
- `logger` ([Logger](/logger), optional) — Optional logger for diagnostics.

**Returns**

`Store<T>`

---

## Properties

<MemberHeading id="capacity" depth="3" name="capacity" sig="capacity: number" />

<MemberMeta badges="readonly" sourceHref="/source/index-ts/#L103" sourceLabel="index.ts:103" />

Maximum number of entries before [Store.set](/store#set) throws.

<MemberHeading id="status" depth="3" name="status" sig="status: Status" />

<MemberMeta sourceHref="/source/index-ts/#L92" sourceLabel="index.ts:92" />

Current lifecycle status.

**Default:** `Status.Idle`

## Accessors

<MemberHeading id="size" depth="3" name="size" sig="get size(): number" />

<MemberMeta sourceHref="/source/index-ts/#L110" sourceLabel="index.ts:110" />

The number of entries currently held.

## Methods

<MemberHeading id="get" depth="3" name="get" sig="get(key: string): T | undefined" />

<MemberMeta sourceHref="/source/index-ts/#L134" sourceLabel="index.ts:134" />

Read a value back.

**Parameters**

- `key` (string) — The lookup key.

**Returns**

- `T | undefined` — The stored value, or `undefined` if absent.

<MemberHeading id="set" depth="3" name="set" sig="set(key: string, value: T): void" />

<MemberMeta sourceHref="/source/index-ts/#L121" sourceLabel="index.ts:121" />

Store a value under `key`.

**Parameters**

- `key` (string) — The lookup key.
- `value` (T) — The value to store.

**Returns**

- `void`

**Throws**

- If the store is full or not open.
