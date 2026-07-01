---
title: interpolate
kind: function
longname: module:utils/string.interpolate
description: String template interpolation
---

# interpolate

<Signature
  code="interpolate(
	template: string,
	values: Record<string, unknown>,
): string"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/string-ts/#L380" label="string.ts:380" />

String template interpolation

**Parameters**

- `template` (string) — Template string with placeholders
- `values` (Record\<string, unknown>) — Object with replacement values

**Returns**

- `string` — Interpolated string

**Example**

```typescript
interpolate('Hello, {name}!', { name: 'World' }) // 'Hello, World!'
interpolate('{a} + {b} = {c}', { a: 1, b: 2, c: 3 }) // '1 + 2 = 3'
```
