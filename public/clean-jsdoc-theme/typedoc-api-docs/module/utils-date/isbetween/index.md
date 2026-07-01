---
title: isBetween
kind: function
longname: module:utils/date.isBetween
description: Checks if a date is between two other dates
---

# isBetween

<Signature
  code="isBetween(
	date: Date,
	start: Date,
	end: Date,
	inclusive: boolean,
): boolean"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/date-ts/#L391" label="date.ts:391" />

Checks if a date is between two other dates

**Parameters**

- `date` (Date) — Date to check
- `start` (Date) — Start of range
- `end` (Date) — End of range
- `inclusive` (boolean, default: "true") — Whether to include boundaries

**Returns**

- `boolean` — True if date is in range

**Example**

```typescript
const date = new Date('2024-03-15')
const start = new Date('2024-03-01')
const end = new Date('2024-03-31')

isBetween(date, start, end) // true
```
