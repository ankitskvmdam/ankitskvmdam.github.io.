---
title: ValidationRule
kind: interface
longname: module:components/Form.ValidationRule
description: Form field validation rule
---

# ValidationRule

<Signature
  code="interface ValidationRule {
	message: string;
	type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'custom';
	validator?: (value: unknown) => boolean;
	value?: unknown;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/components/form-ts/#L17" label="Form.ts:17" />

Form field validation rule

---

## Properties

<MemberHeading id="message" depth="3" name="message" sig="message: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L23" sourceLabel="Form.ts:23" />

Error message when validation fails

<MemberHeading id="type" depth="3" name="type" sig="type: 'required' | 'minLength' | 'maxLength' | 'pattern' | 'custom'" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L19" sourceLabel="Form.ts:19" />

Rule type

<MemberHeading id="validator" depth="3" name="validator" sig="validator: (value: unknown) => boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L25" sourceLabel="Form.ts:25" />

Custom validation function (for 'custom' type)

<MemberHeading id="value" depth="3" name="value" sig="value: unknown" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L21" sourceLabel="Form.ts:21" />

Rule value (varies by type)
