---
title: endOf
kind: function
longname: module:utils/date.endOf
description: Gets the end of a time period
---

# endOf

<Signature code="endOf(date: Date, unit: 'year' | 'month' | 'week' | 'day'): Date" />

<SourceLink href="/source/docs-site/typedoc-src/utils/date-ts/#L324" label="date.ts:324" />

Gets the end of a time period

**Parameters**

- `date` (Date) — Input date
- `unit` ("year" | "month" | "week" | "day") — Time unit

**Returns**

- `Date` — End of the period

**Example**

```typescript
endOf(new Date('2024-03-15'), 'day')
// 2024-03-15 23:59:59.999

endOf(new Date('2024-03-15'), 'month')
// 2024-03-31 23:59:59.999
```
