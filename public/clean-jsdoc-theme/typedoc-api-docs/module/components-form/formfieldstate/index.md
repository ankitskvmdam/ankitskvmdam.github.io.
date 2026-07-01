---
title: FormFieldState
kind: interface
longname: module:components/Form.FormFieldState
description: Form field state
---

# FormFieldState

<Signature
  code="interface FormFieldState {
	dirty: boolean;
	errors: string[];
	touched: boolean;
	validating: boolean;
	value: unknown;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/components/form-ts/#L79" label="Form.ts:79" />

Form field state

---

## Properties

<MemberHeading id="dirty" depth="3" name="dirty" sig="dirty: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L85" sourceLabel="Form.ts:85" />

Whether field has been modified

<MemberHeading id="errors" depth="3" name="errors" sig="errors: string[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L87" sourceLabel="Form.ts:87" />

Current validation errors

<MemberHeading id="touched" depth="3" name="touched" sig="touched: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L83" sourceLabel="Form.ts:83" />

Whether field has been touched

<MemberHeading id="validating" depth="3" name="validating" sig="validating: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L89" sourceLabel="Form.ts:89" />

Whether field is being validated

<MemberHeading id="value" depth="3" name="value" sig="value: unknown" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L81" sourceLabel="Form.ts:81" />

Current field value
