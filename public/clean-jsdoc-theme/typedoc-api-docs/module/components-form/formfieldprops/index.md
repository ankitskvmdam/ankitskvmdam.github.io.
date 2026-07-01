---
title: FormFieldProps
kind: interface
longname: module:components/Form.FormFieldProps
description: Form field props
---

# FormFieldProps

<Signature
  code="interface FormFieldProps extends module:components/base/Component.ComponentProps {
	children?: unknown;
	className?: string;
	defaultValue?: unknown;
	disabled?: boolean;
	error?: string;
	helpText?: string;
	id?: string;
	label?: string;
	name: string;
	onBlur?: () => void;
	onChange?: (value: unknown) => void;
	onFocus?: () => void;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	rules?: ValidationRule[];
	style?: Record<string, string | number>;
	value?: unknown;
	visible?: boolean;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/components/form-ts/#L45" label="Form.ts:45" />

Form field props

#### Hierarchy

- [`ComponentProps`](/module/components-base-component/componentprops)
- `FormFieldProps`

---

## Properties

<MemberHeading id="children" depth="3" name="children" sig="children: unknown" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L41" sourceLabel="Component.ts:41" />

_Inherited from&#x20;_[`children`](/module/components-base-component/componentprops#children)

Child components or content

<MemberHeading id="classname" depth="3" name="className" sig="className: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L37" sourceLabel="Component.ts:37" />

_Inherited from&#x20;_[`className`](/module/components-base-component/componentprops#classname)

CSS class names

<MemberHeading id="defaultvalue" depth="3" name="defaultValue" sig="defaultValue: unknown" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L55" sourceLabel="Form.ts:55" />

Default value

<MemberHeading id="disabled" depth="3" name="disabled" sig="disabled: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L45" sourceLabel="Component.ts:45" />

_Inherited from&#x20;_[`disabled`](/module/components-base-component/componentprops#disabled)

Whether component is disabled

<MemberHeading id="error" depth="3" name="error" sig="error: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L65" sourceLabel="Form.ts:65" />

Error message to display

<MemberHeading id="helptext" depth="3" name="helpText" sig="helpText: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L63" sourceLabel="Form.ts:63" />

Help text displayed below field

<MemberHeading id="id" depth="3" name="id" sig="id: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L35" sourceLabel="Component.ts:35" />

_Inherited from&#x20;_[`id`](/module/components-base-component/componentprops#id)

Unique component identifier

<MemberHeading id="label" depth="3" name="label" sig="label: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L49" sourceLabel="Form.ts:49" />

Field label

<MemberHeading id="name" depth="3" name="name" sig="name: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L47" sourceLabel="Form.ts:47" />

Field name

<MemberHeading id="onblur" depth="3" name="onBlur" sig="onBlur: () => void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L69" sourceLabel="Form.ts:69" />

Blur handler

<MemberHeading id="onchange" depth="3" name="onChange" sig="onChange: (value: unknown) => void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L67" sourceLabel="Form.ts:67" />

Value change handler

<MemberHeading id="onfocus" depth="3" name="onFocus" sig="onFocus: () => void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L71" sourceLabel="Form.ts:71" />

Focus handler

<MemberHeading id="placeholder" depth="3" name="placeholder" sig="placeholder: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L51" sourceLabel="Form.ts:51" />

Placeholder text

<MemberHeading id="readonly" depth="3" name="readOnly" sig="readOnly: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L59" sourceLabel="Form.ts:59" />

Whether field is read-only

<MemberHeading id="required" depth="3" name="required" sig="required: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L57" sourceLabel="Form.ts:57" />

Whether field is required

<MemberHeading id="rules" depth="3" name="rules" sig="rules: ValidationRule[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L61" sourceLabel="Form.ts:61" />

Validation rules

<MemberHeading id="style" depth="3" name="style" sig="style: Record<string, string | number>" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L39" sourceLabel="Component.ts:39" />

_Inherited from&#x20;_[`style`](/module/components-base-component/componentprops#style)

Inline styles

<MemberHeading id="value" depth="3" name="value" sig="value: unknown" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L53" sourceLabel="Form.ts:53" />

Field value

<MemberHeading id="visible" depth="3" name="visible" sig="visible: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L43" sourceLabel="Component.ts:43" />

_Inherited from&#x20;_[`visible`](/module/components-base-component/componentprops#visible)

Whether component is visible
