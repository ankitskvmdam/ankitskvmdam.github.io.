---
title: assertNever
kind: function
longname: module:types/common.assertNever
description: Utility type for exhaustive switch statements
---

# assertNever

<Signature code="assertNever(x: never): never" />

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L406" label="common.ts:406" />

Utility type for exhaustive switch statements

**Parameters**

- `x` (never) — Value that should be never

**Returns**

- `never`

**Example**

```typescript
type Status = 'pending' | 'active' | 'done'

function handleStatus(status: Status): string {
  switch (status) {
    case 'pending': return 'Waiting...'
    case 'active': return 'In progress'
    case 'done': return 'Completed'
    default: return assertNever(status)
  }
}
```
