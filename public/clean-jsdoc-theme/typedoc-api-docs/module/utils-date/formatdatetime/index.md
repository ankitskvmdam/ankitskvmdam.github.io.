---
title: formatDateTime
kind: function
longname: module:utils/date.formatDateTime
description: Formats a date and time together
---

# formatDateTime

<Signature
  code="formatDateTime(
	date: string | number | Date,
	dateFormat: 'short' | 'medium' | 'long' | 'full',
	timeFormat: 'short' | 'medium' | 'long',
	options: DateFormatOptions,
): string"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/date-ts/#L134" label="date.ts:134" />

Formats a date and time together

**Parameters**

- `date` (string | number | Date) — Date to format
- `dateFormat` ("short" | "medium" | "long" | "full", default: "'medium'") — Date format style
- `timeFormat` ("short" | "medium" | "long", default: "'short'") — Time format style
- `options` ([DateFormatOptions](/module/utils-date/dateformatoptions), default: "{}") — Additional options

**Returns**

- `string` — Formatted datetime string

**Example**

```typescript
formatDateTime(new Date(), 'short', 'short')
// '12/15/2024, 2:30 PM'
```
