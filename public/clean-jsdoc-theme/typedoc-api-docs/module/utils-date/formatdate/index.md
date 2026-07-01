---
title: formatDate
kind: function
longname: module:utils/date.formatDate
description: Formats a date using Intl.DateTimeFormat
---

# formatDate

<Signature
  code="formatDate(
	date: string | number | Date,
	format: 'short' | 'medium' | 'long' | 'full',
	options: DateFormatOptions,
): string"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/date-ts/#L68" label="date.ts:68" />

Formats a date using Intl.DateTimeFormat

**Parameters**

- `date` (string | number | Date) — Date to format
- `format` ("short" | "medium" | "long" | "full", default: "'medium'") — Format style or options
- `options` ([DateFormatOptions](/module/utils-date/dateformatoptions), default: "{}") — Additional options

**Returns**

- `string` — Formatted date string

**Example**

```typescript
formatDate(new Date(), 'short') // '12/15/2024'
formatDate(new Date(), 'long') // 'December 15, 2024'
formatDate(new Date(), 'full', { locale: 'de-DE' }) // 'Sonntag, 15. Dezember 2024'
```
