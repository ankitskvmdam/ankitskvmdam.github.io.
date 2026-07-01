---
title: SelectField
kind: class
longname: module:components/Form.SelectField
description: Select dropdown field component
---

# SelectField

<SourceLink href="/source/docs-site/typedoc-src/components/form-ts/#L459" label="Form.ts:459" />

Select dropdown field component

**Example**

```typescript
const countrySelect = new SelectField({
  name: 'country',
  label: 'Country',
  options: [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'cn', label: 'China' }
  ]
})
```

---

## Constructors

<MemberHeading id="constructor" depth="3" name="constructor" sig="new SelectField(props: SelectFieldProps): SelectField" />

**Parameters**

- `props` ([SelectFieldProps](/module/components-form/selectfieldprops)) — Initial component props

**Returns**

`SelectField`

#### Hierarchy

- [`FormField`](/module/components-form/formfield)
- `SelectField`

---

## Properties

<MemberHeading id="internalstate" depth="3" name="_internalState" sig="_internalState: FormFieldState" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L189" sourceLabel="Component.ts:189" />

_Inherited from&#x20;_[`_internalState`](/module/components-form/formfield#internalstate)

Component internal state

<MemberHeading id="props" depth="3" name="_props" sig="_props: SelectFieldProps" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L184" sourceLabel="Component.ts:184" />

_Inherited from&#x20;_[`_props`](/module/components-form/formfield#props)

Component props

<MemberHeading id="children" depth="3" name="children" sig="children: Component<ComponentProps, object>[]" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L204" sourceLabel="Component.ts:204" />

_Inherited from&#x20;_[`children`](/module/components-form/formfield#children)

Child components

**Default:** `[]`

<MemberHeading id="instanceid" depth="3" name="instanceId" sig="instanceId: string" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L174" sourceLabel="Component.ts:174" />

_Inherited from&#x20;_[`instanceId`](/module/components-form/formfield#instanceid)

Unique component instance ID

<MemberHeading id="parent" depth="3" name="parent" sig="parent: Component<ComponentProps, object>" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L199" sourceLabel="Component.ts:199" />

_Inherited from&#x20;_[`parent`](/module/components-form/formfield#parent)

Parent component reference

## Accessors

<MemberHeading id="haserrors" depth="3" name="hasErrors" sig="get hasErrors(): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L334" sourceLabel="Form.ts:334" />

_Inherited from&#x20;_[`hasErrors`](/module/components-form/formfield#haserrors)

Whether the field has validation errors

<MemberHeading id="internalstate" depth="3" name="internalState" sig="get internalState(): Readonly<S>" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L234" sourceLabel="Component.ts:234" />

_Inherited from&#x20;_[`internalState`](/module/components-form/formfield#internalstate)

Gets the internal component state

<MemberHeading id="isdirty" depth="3" name="isDirty" sig="get isDirty(): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L348" sourceLabel="Form.ts:348" />

_Inherited from&#x20;_[`isDirty`](/module/components-form/formfield#isdirty)

Whether the field has been modified

<MemberHeading id="istouched" depth="3" name="isTouched" sig="get isTouched(): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L341" sourceLabel="Form.ts:341" />

_Inherited from&#x20;_[`isTouched`](/module/components-form/formfield#istouched)

Whether the field has been touched

<MemberHeading id="props" depth="3" name="props" sig="get props(): Readonly<P>" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L227" sourceLabel="Component.ts:227" />

_Inherited from&#x20;_[`props`](/module/components-form/formfield#props)

Gets the current props

<MemberHeading id="state" depth="3" name="state" sig="get state(): ComponentState" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L220" sourceLabel="Component.ts:220" />

_Inherited from&#x20;_[`state`](/module/components-form/formfield#state)

Gets the current component lifecycle state

## Methods

<MemberHeading id="addchild" depth="3" name="addChild" sig="addChild(child: Component): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L418" sourceLabel="Component.ts:418" />

_Inherited from&#x20;_[`addChild`](/module/components-form/formfield#addchild)

Adds a child component

**Parameters**

- `child` ([Component](/module/components-base-component/component)) — Child component to add

**Returns**

- `void`

<MemberHeading
  id="checkrule"
  depth="3"
  name="checkRule"
  sig="checkRule(
	rule: ValidationRule,
	value: string | string[],
): boolean"
/>

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L292" sourceLabel="Form.ts:292" />

_Inherited from&#x20;_[`checkRule`](/module/components-form/formfield#checkrule)

Checks a single validation rule

**Parameters**

- `rule` ([ValidationRule](/module/components-form/validationrule)) — Rule to check
- `value` (string | string\[]) — Value to validate

**Returns**

- `boolean` — True if rule passes

<MemberHeading id="emit" depth="3" name="emit" sig="emit<T>(type: string, data?: T): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L382" sourceLabel="Component.ts:382" />

_Inherited from&#x20;_[`emit`](/module/components-form/formfield#emit)

Emits an event

**Type Parameters**

- `T` — Event data type

**Parameters**

- `type` (string) — Event type
- `data` (T, optional) — Event data

**Returns**

- `void`

**Example**

```typescript
this.emit('valueChange', { oldValue: 1, newValue: 2 })
```

<MemberHeading
  id="findchildbyid"
  depth="3"
  name="findChildById"
  sig="findChildById(
	id: string,
): Component<ComponentProps, object> | undefined"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L445" sourceLabel="Component.ts:445" />

_Inherited from&#x20;_[`findChildById`](/module/components-form/formfield#findchildbyid)

Finds a child component by ID

**Parameters**

- `id` (string) — Component ID to find

**Returns**

- [`Component`](/module/components-base-component/component)`<`[`ComponentProps`](/module/components-base-component/componentprops)`, object> | undefined` — Found component or undefined

<MemberHeading id="formatvalue" depth="3" name="formatValue" sig="formatValue(value: string | string[]): string" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L165" sourceLabel="Form.ts:165" />

_Inherited from&#x20;_[`formatValue`](/module/components-form/formfield#formatvalue)

Formats the value for display

**Parameters**

- `value` (string | string\[]) — Value to format

**Returns**

- `string` — Formatted string

<MemberHeading id="getdefaultvalue" depth="3" name="getDefaultValue" sig="getDefaultValue(): string | string[]" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L467" sourceLabel="Form.ts:467" />

_Overrides&#x20;_[`getDefaultValue`](/module/components-form/formfield#getdefaultvalue)

Gets the default value for this field type

**Returns**

- `string | string[]` — Default value

<MemberHeading id="getinitialstate" depth="3" name="getInitialState" sig="getInitialState(): FormFieldState" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L129" sourceLabel="Form.ts:129" />

_Inherited from&#x20;_[`getInitialState`](/module/components-form/formfield#getinitialstate)

Gets the initial state

**Returns**

- [`FormFieldState`](/module/components-form/formfieldstate) — Initial field state

<MemberHeading id="getvalue" depth="3" name="getValue" sig="getValue(): string | string[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L174" sourceLabel="Form.ts:174" />

_Inherited from&#x20;_[`getValue`](/module/components-form/formfield#getvalue)

Gets the current field value

**Returns**

- `string | string[]` — Current value

<MemberHeading id="handleblur" depth="3" name="handleBlur" sig="handleBlur(): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L221" sourceLabel="Form.ts:221" />

_Inherited from&#x20;_[`handleBlur`](/module/components-form/formfield#handleblur)

Handles field blur

**Returns**

- `void`

<MemberHeading id="handlechange" depth="3" name="handleChange" sig="handleChange(rawValue: unknown): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L205" sourceLabel="Form.ts:205" />

_Inherited from&#x20;_[`handleChange`](/module/components-form/formfield#handlechange)

Handles input change event

**Parameters**

- `rawValue` (unknown) — Raw input value

**Returns**

- `void`

<MemberHeading id="handlefocus" depth="3" name="handleFocus" sig="handleFocus(): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L213" sourceLabel="Form.ts:213" />

_Inherited from&#x20;_[`handleFocus`](/module/components-form/formfield#handlefocus)

Handles field focus

**Returns**

- `void`

<MemberHeading id="isempty" depth="3" name="isEmpty" sig="isEmpty(value: string | string[]): boolean" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L278" sourceLabel="Form.ts:278" />

_Inherited from&#x20;_[`isEmpty`](/module/components-form/formfield#isempty)

Checks if a value is empty

**Parameters**

- `value` (string | string\[]) — Value to check

**Returns**

- `boolean` — True if empty

<MemberHeading id="mount" depth="3" name="mount" sig="mount(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L296" sourceLabel="Component.ts:296" />

_Inherited from&#x20;_[`mount`](/module/components-form/formfield#mount)

Mounts the component

**Returns**

- `void`

<MemberHeading id="off" depth="3" name="off" sig="off(event: string, handler: ComponentEventHandler): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L366" sourceLabel="Component.ts:366" />

_Inherited from&#x20;_[`off`](/module/components-form/formfield#off)

Removes an event listener

**Parameters**

- `event` (string) — Event type
- `handler` ([ComponentEventHandler](/module/components-base-component/componenteventhandler)) — Event handler to remove

**Returns**

- `void`

<MemberHeading
  id="on"
  depth="3"
  name="on"
  sig="on<
	T,
>(
	event: string,
	handler: ComponentEventHandler<T>,
): () => void"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L347" sourceLabel="Component.ts:347" />

_Inherited from&#x20;_[`on`](/module/components-form/formfield#on)

Adds an event listener

**Type Parameters**

- `T` — Event data type

**Parameters**

- `event` (string) — Event type
- `handler` ([ComponentEventHandler](/module/components-base-component/componenteventhandler)\<T>) — Event handler

**Returns**

- `() => void` — Function to remove the listener

**Example**

```typescript
const off = button.on('click', (event) => {
  console.log('Button clicked!', event.data)
})

// Later: remove listener
off()
```

<MemberHeading id="onbeforemount" depth="3" name="onBeforeMount" sig="onBeforeMount(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L476" sourceLabel="Component.ts:476" />

_Inherited from&#x20;_[`onBeforeMount`](/module/components-form/formfield#onbeforemount)

Called before component mounts

**Returns**

- `void`

<MemberHeading id="onbeforeunmount" depth="3" name="onBeforeUnmount" sig="onBeforeUnmount(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L480" sourceLabel="Component.ts:480" />

_Inherited from&#x20;_[`onBeforeUnmount`](/module/components-form/formfield#onbeforeunmount)

Called before component unmounts

**Returns**

- `void`

<MemberHeading
  id="onbeforeupdate"
  depth="3"
  name="onBeforeUpdate"
  sig="onBeforeUpdate(
	_prevProps: ComponentProps,
	_nextProps: ComponentProps,
): void"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L478" sourceLabel="Component.ts:478" />

_Inherited from&#x20;_[`onBeforeUpdate`](/module/components-form/formfield#onbeforeupdate)

Called before component updates

**Parameters**

- `_prevProps` ([ComponentProps](/module/components-base-component/componentprops))
- `_nextProps` ([ComponentProps](/module/components-base-component/componentprops))

**Returns**

- `void`

<MemberHeading id="onerror" depth="3" name="onError" sig="onError(_error: Error): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L482" sourceLabel="Component.ts:482" />

_Inherited from&#x20;_[`onError`](/module/components-form/formfield#onerror)

Called when an error occurs in the component

**Parameters**

- `_error` (Error)

**Returns**

- `void`

<MemberHeading id="onmounted" depth="3" name="onMounted" sig="onMounted(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L477" sourceLabel="Component.ts:477" />

_Inherited from&#x20;_[`onMounted`](/module/components-form/formfield#onmounted)

Called after component mounts

**Returns**

- `void`

<MemberHeading
  id="onstatechange"
  depth="3"
  name="onStateChange"
  sig="onStateChange(
	_prevState: FormFieldState,
	_newState: FormFieldState,
): void"
/>

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L271" sourceLabel="Component.ts:271" />

_Inherited from&#x20;_[`onStateChange`](/module/components-form/formfield#onstatechange)

Called when internal state changes

**Parameters**

- `_prevState` ([FormFieldState](/module/components-form/formfieldstate))
- `_newState` ([FormFieldState](/module/components-form/formfieldstate))

**Returns**

- `void`

<MemberHeading id="onunmounted" depth="3" name="onUnmounted" sig="onUnmounted(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L481" sourceLabel="Component.ts:481" />

_Inherited from&#x20;_[`onUnmounted`](/module/components-form/formfield#onunmounted)

Called after component unmounts

**Returns**

- `void`

<MemberHeading id="onupdated" depth="3" name="onUpdated" sig="onUpdated(_prevProps: ComponentProps): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L479" sourceLabel="Component.ts:479" />

_Inherited from&#x20;_[`onUpdated`](/module/components-form/formfield#onupdated)

Called after component updates

**Parameters**

- `_prevProps` ([ComponentProps](/module/components-base-component/componentprops))

**Returns**

- `void`

<MemberHeading id="parsevalue" depth="3" name="parseValue" sig="parseValue(rawValue: unknown): string | string[]" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L460" sourceLabel="Form.ts:460" />

_Overrides&#x20;_[`parseValue`](/module/components-form/formfield#parsevalue)

Parses raw input value to the field's value type

**Parameters**

- `rawValue` (unknown) — Raw input value

**Returns**

- `string | string[]` — Parsed value

<MemberHeading id="removechild" depth="3" name="removeChild" sig="removeChild(child: Component): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L429" sourceLabel="Component.ts:429" />

_Inherited from&#x20;_[`removeChild`](/module/components-form/formfield#removechild)

Removes a child component

**Parameters**

- `child` ([Component](/module/components-base-component/component)) — Child component to remove

**Returns**

- `boolean` — True if child was removed

<MemberHeading id="render" depth="3" name="render" sig="render(): string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L471" sourceLabel="Form.ts:471" />

_Overrides&#x20;_[`render`](/module/components-form/formfield#render)

Renders the component

**Returns**

- `string` — Rendered output

<MemberHeading id="reset" depth="3" name="reset" sig="reset(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L321" sourceLabel="Form.ts:321" />

_Inherited from&#x20;_[`reset`](/module/components-form/formfield#reset)

Resets the field to its default state

**Returns**

- `void`

<MemberHeading id="setprops" depth="3" name="setProps" sig="setProps(nextProps: Partial<P>): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L280" sourceLabel="Component.ts:280" />

_Inherited from&#x20;_[`setProps`](/module/components-form/formfield#setprops)

Updates component props

**Parameters**

- `nextProps` (Partial\<P>) — New props

**Returns**

- `void`

<MemberHeading id="setstate" depth="3" name="setState" sig="setState(updates: Partial<S>): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L258" sourceLabel="Component.ts:258" />

_Inherited from&#x20;_[`setState`](/module/components-form/formfield#setstate)

Updates the internal state

**Parameters**

- `updates` (Partial\<S>) — Partial state updates

**Returns**

- `void`

**Example**

```typescript
this.setState({ count: this.internalState.count + 1 })
```

<MemberHeading
  id="setvalue"
  depth="3"
  name="setValue"
  sig="setValue(
	value: string | string[],
	options: { validate?: boolean },
): void"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L184" sourceLabel="Form.ts:184" />

_Inherited from&#x20;_[`setValue`](/module/components-form/formfield#setvalue)

Sets the field value

**Parameters**

- `value` (string | string\[]) — New value
- `options` ({ validate?: boolean }, default: "{}") — Set options

**Properties**

- `validate` (boolean, optional)

**Returns**

- `void`

<MemberHeading id="unmount" depth="3" name="unmount" sig="unmount(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L309" sourceLabel="Component.ts:309" />

_Inherited from&#x20;_[`unmount`](/module/components-form/formfield#unmount)

Unmounts the component

**Returns**

- `void`

<MemberHeading id="update" depth="3" name="update" sig="update(): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L463" sourceLabel="Component.ts:463" />

_Inherited from&#x20;_[`update`](/module/components-form/formfield#update)

Updates the component

**Returns**

- `void`

<MemberHeading id="validate" depth="3" name="validate" sig="validate(): ValidationResult" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L243" sourceLabel="Form.ts:243" />

_Inherited from&#x20;_[`validate`](/module/components-form/formfield#validate)

Validates the current field value

**Returns**

- [`ValidationResult`](/module/components-form/validationresult) — Validation result

**Example**

```typescript
const result = field.validate()
if (!result.valid) {
  console.log('Errors:', result.errors)
}
```
