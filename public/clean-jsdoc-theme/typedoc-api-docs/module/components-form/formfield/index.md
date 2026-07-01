---
title: FormField
kind: class
longname: module:components/Form.FormField
description: Abstract form field component
---

# FormField

<SourceLink href="/source/docs-site/typedoc-src/components/form-ts/#L120" label="Form.ts:120" />

**Modifiers:** `abstract`

Abstract form field component

**Remarks**

Base class for all form field components. Provides:

- Value management
- Validation support
- Touch/dirty state tracking
- Error display

**Type Parameters**

- `P` extends `FormFieldProps` = `FormFieldProps` — Props type (extends FormFieldProps)
- `V` = `unknown` — Value type

**Example**

```typescript
class TextField extends FormField<TextFieldProps, string> {
  protected parseValue(rawValue: unknown): string {
    return String(rawValue ?? '')
  }

  public render(): string {
    return `<input type="text" value="${this.getValue()}" />`
  }
}
```

---

## Constructors

<MemberHeading
  id="constructor"
  depth="3"
  name="constructor"
  sig="new FormField<
	P extends FormFieldProps = FormFieldProps,
	V = unknown,
>(
	props: P,
): FormField<P, V>"
/>

**Parameters**

- `props` (P) — Initial component props

**Returns**

`FormField<P, V>`

#### Hierarchy

- [`Component`](/module/components-base-component/component)
- `FormField`

---

## Properties

<MemberHeading id="internalstate" depth="3" name="_internalState" sig="_internalState: FormFieldState" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L189" sourceLabel="Component.ts:189" />

_Inherited from&#x20;_[`_internalState`](/module/components-base-component/component#internalstate)

Component internal state

<MemberHeading id="props" depth="3" name="_props" sig="_props: P" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L184" sourceLabel="Component.ts:184" />

_Inherited from&#x20;_[`_props`](/module/components-base-component/component#props)

Component props

<MemberHeading id="children" depth="3" name="children" sig="children: Component<ComponentProps, object>[]" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L204" sourceLabel="Component.ts:204" />

_Inherited from&#x20;_[`children`](/module/components-base-component/component#children)

Child components

**Default:** `[]`

<MemberHeading id="instanceid" depth="3" name="instanceId" sig="instanceId: string" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L174" sourceLabel="Component.ts:174" />

_Inherited from&#x20;_[`instanceId`](/module/components-base-component/component#instanceid)

Unique component instance ID

<MemberHeading id="parent" depth="3" name="parent" sig="parent: Component<ComponentProps, object>" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L199" sourceLabel="Component.ts:199" />

_Inherited from&#x20;_[`parent`](/module/components-base-component/component#parent)

Parent component reference

## Accessors

<MemberHeading id="haserrors" depth="3" name="hasErrors" sig="get hasErrors(): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L334" sourceLabel="Form.ts:334" />

Whether the field has validation errors

<MemberHeading id="internalstate" depth="3" name="internalState" sig="get internalState(): Readonly<S>" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L234" sourceLabel="Component.ts:234" />

_Inherited from&#x20;_[`internalState`](/module/components-base-component/component#internalstate)

Gets the internal component state

<MemberHeading id="isdirty" depth="3" name="isDirty" sig="get isDirty(): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L348" sourceLabel="Form.ts:348" />

Whether the field has been modified

<MemberHeading id="istouched" depth="3" name="isTouched" sig="get isTouched(): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L341" sourceLabel="Form.ts:341" />

Whether the field has been touched

<MemberHeading id="props" depth="3" name="props" sig="get props(): Readonly<P>" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L227" sourceLabel="Component.ts:227" />

_Inherited from&#x20;_[`props`](/module/components-base-component/component#props)

Gets the current props

<MemberHeading id="state" depth="3" name="state" sig="get state(): ComponentState" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L220" sourceLabel="Component.ts:220" />

_Inherited from&#x20;_[`state`](/module/components-base-component/component#state)

Gets the current component lifecycle state

## Methods

<MemberHeading id="addchild" depth="3" name="addChild" sig="addChild(child: Component): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L418" sourceLabel="Component.ts:418" />

_Inherited from&#x20;_[`addChild`](/module/components-base-component/component#addchild)

Adds a child component

**Parameters**

- `child` ([Component](/module/components-base-component/component)) — Child component to add

**Returns**

- `void`

<MemberHeading id="checkrule" depth="3" name="checkRule" sig="checkRule(rule: ValidationRule, value: V): boolean" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L292" sourceLabel="Form.ts:292" />

Checks a single validation rule

**Parameters**

- `rule` ([ValidationRule](/module/components-form/validationrule)) — Rule to check
- `value` (V) — Value to validate

**Returns**

- `boolean` — True if rule passes

<MemberHeading id="emit" depth="3" name="emit" sig="emit<T>(type: string, data?: T): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L382" sourceLabel="Component.ts:382" />

_Inherited from&#x20;_[`emit`](/module/components-base-component/component#emit)

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

_Inherited from&#x20;_[`findChildById`](/module/components-base-component/component#findchildbyid)

Finds a child component by ID

**Parameters**

- `id` (string) — Component ID to find

**Returns**

- [`Component`](/module/components-base-component/component)`<`[`ComponentProps`](/module/components-base-component/componentprops)`, object> | undefined` — Found component or undefined

<MemberHeading id="formatvalue" depth="3" name="formatValue" sig="formatValue(value: V): string" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L165" sourceLabel="Form.ts:165" />

Formats the value for display

**Parameters**

- `value` (V) — Value to format

**Returns**

- `string` — Formatted string

<MemberHeading id="getdefaultvalue" depth="3" name="getDefaultValue" sig="getDefaultValue(): V" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L145" sourceLabel="Form.ts:145" />

Gets the default value for this field type

**Returns**

- `V` — Default value

<MemberHeading id="getinitialstate" depth="3" name="getInitialState" sig="getInitialState(): FormFieldState" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L129" sourceLabel="Form.ts:129" />

_Overrides&#x20;_[`getInitialState`](/module/components-base-component/component#getinitialstate)

Gets the initial state

**Returns**

- [`FormFieldState`](/module/components-form/formfieldstate) — Initial field state

<MemberHeading id="getvalue" depth="3" name="getValue" sig="getValue(): V" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L174" sourceLabel="Form.ts:174" />

Gets the current field value

**Returns**

- `V` — Current value

<MemberHeading id="handleblur" depth="3" name="handleBlur" sig="handleBlur(): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L221" sourceLabel="Form.ts:221" />

Handles field blur

**Returns**

- `void`

<MemberHeading id="handlechange" depth="3" name="handleChange" sig="handleChange(rawValue: unknown): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L205" sourceLabel="Form.ts:205" />

Handles input change event

**Parameters**

- `rawValue` (unknown) — Raw input value

**Returns**

- `void`

<MemberHeading id="handlefocus" depth="3" name="handleFocus" sig="handleFocus(): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L213" sourceLabel="Form.ts:213" />

Handles field focus

**Returns**

- `void`

<MemberHeading id="isempty" depth="3" name="isEmpty" sig="isEmpty(value: V): boolean" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L278" sourceLabel="Form.ts:278" />

Checks if a value is empty

**Parameters**

- `value` (V) — Value to check

**Returns**

- `boolean` — True if empty

<MemberHeading id="mount" depth="3" name="mount" sig="mount(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L296" sourceLabel="Component.ts:296" />

_Inherited from&#x20;_[`mount`](/module/components-base-component/component#mount)

Mounts the component

**Returns**

- `void`

<MemberHeading id="off" depth="3" name="off" sig="off(event: string, handler: ComponentEventHandler): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L366" sourceLabel="Component.ts:366" />

_Inherited from&#x20;_[`off`](/module/components-base-component/component#off)

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

_Inherited from&#x20;_[`on`](/module/components-base-component/component#on)

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

_Inherited from&#x20;_[`onBeforeMount`](/module/components-base-component/component#onbeforemount)

Called before component mounts

**Returns**

- `void`

<MemberHeading id="onbeforeunmount" depth="3" name="onBeforeUnmount" sig="onBeforeUnmount(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L480" sourceLabel="Component.ts:480" />

_Inherited from&#x20;_[`onBeforeUnmount`](/module/components-base-component/component#onbeforeunmount)

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

_Inherited from&#x20;_[`onBeforeUpdate`](/module/components-base-component/component#onbeforeupdate)

Called before component updates

**Parameters**

- `_prevProps` ([ComponentProps](/module/components-base-component/componentprops))
- `_nextProps` ([ComponentProps](/module/components-base-component/componentprops))

**Returns**

- `void`

<MemberHeading id="onerror" depth="3" name="onError" sig="onError(_error: Error): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L482" sourceLabel="Component.ts:482" />

_Inherited from&#x20;_[`onError`](/module/components-base-component/component#onerror)

Called when an error occurs in the component

**Parameters**

- `_error` (Error)

**Returns**

- `void`

<MemberHeading id="onmounted" depth="3" name="onMounted" sig="onMounted(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L477" sourceLabel="Component.ts:477" />

_Inherited from&#x20;_[`onMounted`](/module/components-base-component/component#onmounted)

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

_Inherited from&#x20;_[`onStateChange`](/module/components-base-component/component#onstatechange)

Called when internal state changes

**Parameters**

- `_prevState` ([FormFieldState](/module/components-form/formfieldstate))
- `_newState` ([FormFieldState](/module/components-form/formfieldstate))

**Returns**

- `void`

<MemberHeading id="onunmounted" depth="3" name="onUnmounted" sig="onUnmounted(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L481" sourceLabel="Component.ts:481" />

_Inherited from&#x20;_[`onUnmounted`](/module/components-base-component/component#onunmounted)

Called after component unmounts

**Returns**

- `void`

<MemberHeading id="onupdated" depth="3" name="onUpdated" sig="onUpdated(_prevProps: ComponentProps): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L479" sourceLabel="Component.ts:479" />

_Inherited from&#x20;_[`onUpdated`](/module/components-base-component/component#onupdated)

Called after component updates

**Parameters**

- `_prevProps` ([ComponentProps](/module/components-base-component/componentprops))

**Returns**

- `void`

<MemberHeading id="parsevalue" depth="3" name="parseValue" sig="parseValue(rawValue: unknown): V" />

<MemberMeta badges="abstract,protected" sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L156" sourceLabel="Form.ts:156" />

Parses raw input value to the field's value type

**Parameters**

- `rawValue` (unknown) — Raw input value

**Returns**

- `V` — Parsed value

<MemberHeading id="removechild" depth="3" name="removeChild" sig="removeChild(child: Component): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L429" sourceLabel="Component.ts:429" />

_Inherited from&#x20;_[`removeChild`](/module/components-base-component/component#removechild)

Removes a child component

**Parameters**

- `child` ([Component](/module/components-base-component/component)) — Child component to remove

**Returns**

- `boolean` — True if child was removed

<MemberHeading id="render" depth="3" name="render" sig="render(): unknown" />

<MemberMeta badges="abstract" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L473" sourceLabel="Component.ts:473" />

_Inherited from&#x20;_[`render`](/module/components-base-component/component#render)

Renders the component

**Returns**

- `unknown` — Rendered output

<MemberHeading id="reset" depth="3" name="reset" sig="reset(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L321" sourceLabel="Form.ts:321" />

Resets the field to its default state

**Returns**

- `void`

<MemberHeading id="setprops" depth="3" name="setProps" sig="setProps(nextProps: Partial<P>): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L280" sourceLabel="Component.ts:280" />

_Inherited from&#x20;_[`setProps`](/module/components-base-component/component#setprops)

Updates component props

**Parameters**

- `nextProps` (Partial\<P>) — New props

**Returns**

- `void`

<MemberHeading id="setstate" depth="3" name="setState" sig="setState(updates: Partial<S>): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L258" sourceLabel="Component.ts:258" />

_Inherited from&#x20;_[`setState`](/module/components-base-component/component#setstate)

Updates the internal state

**Parameters**

- `updates` (Partial\<S>) — Partial state updates

**Returns**

- `void`

**Example**

```typescript
this.setState({ count: this.internalState.count + 1 })
```

<MemberHeading id="setvalue" depth="3" name="setValue" sig="setValue(value: V, options: { validate?: boolean }): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L184" sourceLabel="Form.ts:184" />

Sets the field value

**Parameters**

- `value` (V) — New value
- `options` ({ validate?: boolean }, default: "{}") — Set options

**Properties**

- `validate` (boolean, optional)

**Returns**

- `void`

<MemberHeading id="unmount" depth="3" name="unmount" sig="unmount(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L309" sourceLabel="Component.ts:309" />

_Inherited from&#x20;_[`unmount`](/module/components-base-component/component#unmount)

Unmounts the component

**Returns**

- `void`

<MemberHeading id="update" depth="3" name="update" sig="update(): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L463" sourceLabel="Component.ts:463" />

_Inherited from&#x20;_[`update`](/module/components-base-component/component#update)

Updates the component

**Returns**

- `void`

<MemberHeading id="validate" depth="3" name="validate" sig="validate(): ValidationResult" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/form-ts/#L243" sourceLabel="Form.ts:243" />

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
