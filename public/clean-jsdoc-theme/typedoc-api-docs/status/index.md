---
title: Status
kind: enum
longname: Status
description: The lifecycle status of a {@link Store}.
---

# Status

<SourceLink href="/source/index-ts/#L74" label="index.ts:74" />

The lifecycle status of a [Store](/store).

---

## Enumeration Members

<MemberHeading id="closed" depth="3" name="Closed" sig="Closed: 'closed'" />

<MemberMeta badges="static" sourceHref="/source/index-ts/#L80" sourceLabel="index.ts:80" />

Closed; further access throws.

<MemberHeading id="idle" depth="3" name="Idle" sig="Idle: 'idle'" />

<MemberMeta badges="static" sourceHref="/source/index-ts/#L76" sourceLabel="index.ts:76" />

Created but not yet opened.

<MemberHeading id="open" depth="3" name="Open" sig="Open: 'open'" />

<MemberMeta badges="static" sourceHref="/source/index-ts/#L78" sourceLabel="index.ts:78" />

Open and accepting reads/writes.
