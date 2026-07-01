---
title: isType
kind: function
longname: module:types/common.isType
description: Type guard for checking if value is a specific type
---

# isType

<Signature
  code="isType<
	T,
>(
	value: unknown,
	check: (value: unknown) => boolean,
): value is T"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/common-ts/#L439" label="common.ts:439" />

Type guard for checking if value is a specific type

**Type Parameters**

- `T` — Expected type

**Parameters**

- `value` (unknown) — Value to check
- `check` ((value: unknown) => boolean) — Type checking function

**Returns**

- `value is T` — True if value passes the check
