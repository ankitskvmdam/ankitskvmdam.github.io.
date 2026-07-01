---
title: TextFieldProps
kind: interface
longname: module:components/Form.TextFieldProps
description: Text input field props
---

# TextFieldProps

<Signature
  code="interface TextFieldProps extends module:components/Form.FormFieldProps {
	autoComplete?: string;
	children?: unknown;
	className?: string;
	defaultValue?: unknown;
	disabled?: boolean;
	error?: string;
	helpText?: string;
	id?: string;
	label?: string;
	maxLength?: number;
	minLength?: number;
	name: string;
	onBlur?: () => void;
	onChange?: (value: unknown) => void;
	onFocus?: () => void;
	placeholder?: string;
	readOnly?: boolean;
	required?: boolean;
	rules?: ValidationRule[];
	style?: Record<string, string | number>;
	type?: 'text' | 'email' | 'password' | 'tel' | 'url';
	value?: unknown;
	visible?: boolean;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/components/form-ts/#L358" label="Form.ts:358" />

Text input field props

#### Hierarchy

- [`FormFieldProps`](/module/components-form/formfieldprops)
- `TextFieldProps`

---

## Properties

<MemberHeading id="autocomplete" depth="3" name="autoComplete" sig="autoComplete: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L366" sourceLabel="Form.ts:366" />

Auto-complete setting

<MemberHeading id="children" depth="3" name="children" sig="children: unknown" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L41" sourceLabel="Component.ts:41" />

_Inherited from&#x20;_[`children`](/module/components-form/formfieldprops#children)

Child components or content

<MemberHeading id="classname" depth="3" name="className" sig="className: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L37" sourceLabel="Component.ts:37" />

_Inherited from&#x20;_[`className`](/module/components-form/formfieldprops#classname)

CSS class names

<MemberHeading id="defaultvalue" depth="3" name="defaultValue" sig="defaultValue: unknown" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L55" sourceLabel="Form.ts:55" />

_Inherited from&#x20;_[`defaultValue`](/module/components-form/formfieldprops#defaultvalue)

Default value

<MemberHeading id="disabled" depth="3" name="disabled" sig="disabled: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L45" sourceLabel="Component.ts:45" />

_Inherited from&#x20;_[`disabled`](/module/components-form/formfieldprops#disabled)

Whether component is disabled

<MemberHeading id="error" depth="3" name="error" sig="error: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L65" sourceLabel="Form.ts:65" />

_Inherited from&#x20;_[`error`](/module/components-form/formfieldprops#error)

Error message to display

<MemberHeading id="helptext" depth="3" name="helpText" sig="helpText: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L63" sourceLabel="Form.ts:63" />

_Inherited from&#x20;_[`helpText`](/module/components-form/formfieldprops#helptext)

Help text displayed below field

<MemberHeading id="id" depth="3" name="id" sig="id: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L35" sourceLabel="Component.ts:35" />

_Inherited from&#x20;_[`id`](/module/components-form/formfieldprops#id)

Unique component identifier

<MemberHeading id="label" depth="3" name="label" sig="label: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L49" sourceLabel="Form.ts:49" />

_Inherited from&#x20;_[`label`](/module/components-form/formfieldprops#label)

Field label

<MemberHeading id="maxlength" depth="3" name="maxLength" sig="maxLength: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L364" sourceLabel="Form.ts:364" />

Maximum length

<MemberHeading id="minlength" depth="3" name="minLength" sig="minLength: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L362" sourceLabel="Form.ts:362" />

Minimum length

<MemberHeading id="name" depth="3" name="name" sig="name: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L47" sourceLabel="Form.ts:47" />

_Inherited from&#x20;_[`name`](/module/components-form/formfieldprops#name)

Field name

<MemberHeading id="onblur" depth="3" name="onBlur" sig="onBlur: () => void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L69" sourceLabel="Form.ts:69" />

_Inherited from&#x20;_[`onBlur`](/module/components-form/formfieldprops#onblur)

Blur handler

<MemberHeading id="onchange" depth="3" name="onChange" sig="onChange: (value: unknown) => void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L67" sourceLabel="Form.ts:67" />

_Inherited from&#x20;_[`onChange`](/module/components-form/formfieldprops#onchange)

Value change handler

<MemberHeading id="onfocus" depth="3" name="onFocus" sig="onFocus: () => void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L71" sourceLabel="Form.ts:71" />

_Inherited from&#x20;_[`onFocus`](/module/components-form/formfieldprops#onfocus)

Focus handler

<MemberHeading id="placeholder" depth="3" name="placeholder" sig="placeholder: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L51" sourceLabel="Form.ts:51" />

_Inherited from&#x20;_[`placeholder`](/module/components-form/formfieldprops#placeholder)

Placeholder text

<MemberHeading id="readonly" depth="3" name="readOnly" sig="readOnly: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L59" sourceLabel="Form.ts:59" />

_Inherited from&#x20;_[`readOnly`](/module/components-form/formfieldprops#readonly)

Whether field is read-only

<MemberHeading id="required" depth="3" name="required" sig="required: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L57" sourceLabel="Form.ts:57" />

_Inherited from&#x20;_[`required`](/module/components-form/formfieldprops#required)

Whether field is required

<MemberHeading id="rules" depth="3" name="rules" sig="rules: ValidationRule[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L61" sourceLabel="Form.ts:61" />

_Inherited from&#x20;_[`rules`](/module/components-form/formfieldprops#rules)

Validation rules

<MemberHeading id="style" depth="3" name="style" sig="style: Record<string, string | number>" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L39" sourceLabel="Component.ts:39" />

_Inherited from&#x20;_[`style`](/module/components-form/formfieldprops#style)

Inline styles

<MemberHeading id="type" depth="3" name="type" sig="type: 'text' | 'email' | 'password' | 'tel' | 'url'" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L360" sourceLabel="Form.ts:360" />

Input type

<MemberHeading id="value" depth="3" name="value" sig="value: unknown" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L53" sourceLabel="Form.ts:53" />

_Inherited from&#x20;_[`value`](/module/components-form/formfieldprops#value)

Field value

<MemberHeading id="visible" depth="3" name="visible" sig="visible: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L43" sourceLabel="Component.ts:43" />

_Inherited from&#x20;_[`visible`](/module/components-form/formfieldprops#visible)

Whether component is visible
