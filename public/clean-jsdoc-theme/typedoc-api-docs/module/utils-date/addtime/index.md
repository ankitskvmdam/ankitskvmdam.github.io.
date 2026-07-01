---
title: addTime
kind: function
longname: module:utils/date.addTime
description: Adds a duration to a date
---

# addTime

<Signature
  code="addTime(
	date: Date,
	amount: number,
	unit: 'years' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds',
): Date"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/date-ts/#L230" label="date.ts:230" />

Adds a duration to a date

**Parameters**

- `date` (Date) — Base date
- `amount` (number) — Amount to add
- `unit` ("years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds") — Unit of time

**Returns**

- `Date` — New date with added duration

**Example**

```typescript
const now = new Date()
addTime(now, 1, 'day') // Tomorrow
addTime(now, -1, 'week') // Last week
addTime(now, 2, 'hours') // 2 hours from now
```
