---
title: startOf
kind: function
longname: module:utils/date.startOf
description: Gets the start of a time period
---

# startOf

<Signature
  code="startOf(
	date: Date,
	unit: 'year' | 'month' | 'week' | 'day',
): Date"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/date-ts/#L282" label="date.ts:282" />

Gets the start of a time period

**Parameters**

- `date` (Date) — Input date
- `unit` ("year" | "month" | "week" | "day") — Time unit

**Returns**

- `Date` — Start of the period

**Example**

```typescript
startOf(new Date('2024-03-15 14:30:00'), 'day')
// 2024-03-15 00:00:00

startOf(new Date('2024-03-15'), 'month')
// 2024-03-01 00:00:00
```
