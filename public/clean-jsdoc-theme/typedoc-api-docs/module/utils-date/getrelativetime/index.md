---
title: getRelativeTime
kind: function
longname: module:utils/date.getRelativeTime
description: Returns a relative time string (e.g., "3 days ago")
---

# getRelativeTime

<Signature
  code="getRelativeTime(
	date: string | number | Date,
	baseDate: Date,
	options: DateFormatOptions,
): string"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/date-ts/#L171" label="date.ts:171" />

Returns a relative time string (e.g., "3 days ago")

**Parameters**

- `date` (string | number | Date) — Date to compare
- `baseDate` (Date, default: "...") — Base date for comparison (default: now)
- `options` ([DateFormatOptions](/module/utils-date/dateformatoptions), default: "{}") — Format options

**Returns**

- `string` — Relative time string

**Example**

```typescript
const yesterday = new Date(Date.now() - 86400000)
getRelativeTime(yesterday) // '1 day ago'

const nextWeek = new Date(Date.now() + 7 * 86400000)
getRelativeTime(nextWeek) // 'in 1 week'
```
