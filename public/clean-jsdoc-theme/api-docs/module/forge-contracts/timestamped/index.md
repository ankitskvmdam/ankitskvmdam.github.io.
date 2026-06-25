---
title: Timestamped
kind: mixin
longname: module:forge/contracts.Timestamped
description: Adds created/updated timestamps to whatever it is mixed into.
group: Contracts
---

# Timestamped

<SourceLink href="/source/contracts-js/#L57" label="contracts.js:57" />

Adds created/updated timestamps to whatever it is mixed into.

**Example**

```js
Object.assign(MyClass.prototype, Timestamped);
```

---

## Static Methods

<MemberHeading id="touch" depth="3" name="touch" sig="touch(): void" />

<MemberMeta badges="static" sourceHref="/source/contracts-js/#L73" sourceLabel="contracts.js:73" />

Stamp the host object as updated **now**.

**This:** `{Object}`

**Returns**

- `void`

## Static Fields

<MemberHeading id="createdat" depth="3" name="createdAt" sig="createdAt: number" />

<MemberMeta badges="static" sourceHref="/source/contracts-js/#L64" sourceLabel="contracts.js:64" />

When the host object was created.
