---
title: isSameDay
kind: function
longname: module:utils/date.isSameDay
description: Checks if two dates are on the same day
---

# isSameDay

<Signature code="isSameDay(date1: Date, date2: Date): boolean" />

<SourceLink href="/source/docs-site/typedoc-src/utils/date-ts/#L363" label="date.ts:363" />

Checks if two dates are on the same day

**Parameters**

- `date1` (Date) — First date
- `date2` (Date) — Second date

**Returns**

- `boolean` — True if dates are on the same day

**Example**

```typescript
isSameDay(new Date('2024-03-15 10:00'), new Date('2024-03-15 22:00')) // true
isSameDay(new Date('2024-03-15'), new Date('2024-03-16')) // false
```
