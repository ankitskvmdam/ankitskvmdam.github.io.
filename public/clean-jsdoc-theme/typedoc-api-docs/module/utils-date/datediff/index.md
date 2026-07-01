---
title: dateDiff
kind: function
longname: module:utils/date.dateDiff
description: Gets the difference between two dates in a specific unit
---

# dateDiff

<Signature
  code="dateDiff(
	date1: Date,
	date2: Date,
	unit: 'years' | 'months' | 'weeks' | 'days' | 'hours' | 'minutes' | 'seconds',
): number"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/date-ts/#L421" label="date.ts:421" />

Gets the difference between two dates in a specific unit

**Parameters**

- `date1` (Date) — First date
- `date2` (Date) — Second date
- `unit` ("years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds") — Unit of measurement

**Returns**

- `number` — Difference in the specified unit

**Example**

```typescript
const start = new Date('2024-01-01')
const end = new Date('2024-03-15')

dateDiff(end, start, 'days') // 74
dateDiff(end, start, 'months') // 2.5 (approximate)
```
