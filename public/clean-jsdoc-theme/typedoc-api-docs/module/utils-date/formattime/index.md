---
title: formatTime
kind: function
longname: module:utils/date.formatTime
description: Formats a time using Intl.DateTimeFormat
---

# formatTime

<Signature
  code="formatTime(
	date: string | number | Date,
	format: 'short' | 'medium' | 'long',
	options: DateFormatOptions,
): string"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/date-ts/#L101" label="date.ts:101" />

Formats a time using Intl.DateTimeFormat

**Parameters**

- `date` (string | number | Date) — Date to format
- `format` ("short" | "medium" | "long", default: "'short'") — Format style
- `options` ([DateFormatOptions](/module/utils-date/dateformatoptions), default: "{}") — Additional options

**Returns**

- `string` — Formatted time string

**Example**

```typescript
formatTime(new Date(), 'short') // '2:30 PM'
formatTime(new Date(), 'medium') // '2:30:45 PM'
formatTime(new Date(), 'long') // '2:30:45 PM EST'
```
