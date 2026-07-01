---
title: WordWrapOptions
kind: interface
longname: module:utils/string.WordWrapOptions
description: Word wrap options
---

# WordWrapOptions

<Signature
  code="interface WordWrapOptions {
	cut?: boolean;
	newline?: string;
	width?: number;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/utils/string-ts/#L276" label="string.ts:276" />

Word wrap options

---

## Properties

<MemberHeading id="cut" depth="3" name="cut" sig="cut: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/utils/string-ts/#L293" sourceLabel="string.ts:293" />

Whether to cut words longer than width

**Default:** ` ```ts
false ``` `

<MemberHeading id="newline" depth="3" name="newline" sig="newline: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/utils/string-ts/#L287" sourceLabel="string.ts:287" />

String to use for newlines

**Default:** ` ```ts
'\n' ``` `

<MemberHeading id="width" depth="3" name="width" sig="width: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/utils/string-ts/#L281" sourceLabel="string.ts:281" />

Maximum line width

**Default:** ` ```ts
80 ``` `
