---
title: formatDuration
kind: function
longname: module:utils/date.formatDuration
description: Formats a duration in milliseconds to a human-readable string
---

# formatDuration

<Signature
  code="formatDuration(
	ms: number,
	options: { verbose?: boolean },
): string"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/date-ts/#L500" label="date.ts:500" />

Formats a duration in milliseconds to a human-readable string

**Parameters**

- `ms` (number) — Duration in milliseconds
- `options` ({ verbose?: boolean }, default: "{}") — Formatting options

**Properties**

- `verbose` (boolean, optional)

**Returns**

- `string` — Formatted duration string

**Example**

```typescript
formatDuration(3661000) // '1h 1m 1s'
formatDuration(86400000) // '1d'
formatDuration(3600000, { verbose: true }) // '1 hour'
```
