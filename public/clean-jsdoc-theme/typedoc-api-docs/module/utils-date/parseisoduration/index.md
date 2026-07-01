---
title: parseISODuration
kind: function
longname: module:utils/date.parseISODuration
description: Parses an ISO 8601 duration string
---

# parseISODuration

<Signature code="parseISODuration(duration: string): number" />

<SourceLink href="/source/docs-site/typedoc-src/utils/date-ts/#L463" label="date.ts:463" />

Parses an ISO 8601 duration string

**Parameters**

- `duration` (string) — ISO 8601 duration string

**Returns**

- `number` — Duration in milliseconds

**Example**

```typescript
parseISODuration('PT1H30M') // 5400000 (1.5 hours in ms)
parseISODuration('P1D') // 86400000 (1 day in ms)
parseISODuration('P1Y2M3D') // ~36720000000
```
