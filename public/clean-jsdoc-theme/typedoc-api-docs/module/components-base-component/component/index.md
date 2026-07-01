---
title: Component
kind: class
longname: module:components/base/Component.Component
description: Abstract base component class
---

# Component

<SourceLink href="/source/docs-site/typedoc-src/components/base/component-ts/#L165" label="Component.ts:165" />

**Modifiers:** `abstract`

Abstract base component class

**Remarks**

Provides a foundation for building UI components with:

- Lifecycle management
- Event handling
- Props management
- State management

**Type Parameters**

- `P` extends `ComponentProps` = `ComponentProps` — Props type (extends ComponentProps)
- `S` extends `object` = `object` — State type

**Example**

```typescript
interface ButtonProps extends ComponentProps {
  label: string
  onClick?: () => void
}

interface ButtonState {
  isPressed: boolean
}

class Button extends Component<ButtonProps, ButtonState> {
  protected getInitialState(): ButtonState {
    return { isPressed: false }
  }

  public render(): string {
    return `<button class="${this.props.className}">
      ${this.props.label}
    </button>`
  }
}
```

---

## Constructors

<MemberHeading
  id="constructor"
  depth="3"
  name="constructor"
  sig="new Component<
	P extends ComponentProps = ComponentProps,
	S extends object = object,
>(
	props: P,
): Component<P, S>"
/>

**Parameters**

- `props` (P) — Initial component props

**Returns**

`Component<P, S>`

#### Implements

- [`LifecycleHooks`](/module/components-base-component/lifecyclehooks)

---

## Properties

<MemberHeading id="internalstate" depth="3" name="_internalState" sig="_internalState: S" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L189" sourceLabel="Component.ts:189" />

Component internal state

<MemberHeading id="props" depth="3" name="_props" sig="_props: P" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L184" sourceLabel="Component.ts:184" />

Component props

<MemberHeading id="children" depth="3" name="children" sig="children: Component<ComponentProps, object>[]" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L204" sourceLabel="Component.ts:204" />

Child components

**Default:** `[]`

<MemberHeading id="instanceid" depth="3" name="instanceId" sig="instanceId: string" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L174" sourceLabel="Component.ts:174" />

Unique component instance ID

<MemberHeading id="parent" depth="3" name="parent" sig="parent: Component<ComponentProps, object>" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L199" sourceLabel="Component.ts:199" />

Parent component reference

## Accessors

<MemberHeading id="internalstate" depth="3" name="internalState" sig="get internalState(): Readonly<S>" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L234" sourceLabel="Component.ts:234" />

Gets the internal component state

<MemberHeading id="props" depth="3" name="props" sig="get props(): Readonly<P>" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L227" sourceLabel="Component.ts:227" />

Gets the current props

<MemberHeading id="state" depth="3" name="state" sig="get state(): ComponentState" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L220" sourceLabel="Component.ts:220" />

Gets the current component lifecycle state

## Methods

<MemberHeading id="addchild" depth="3" name="addChild" sig="addChild(child: Component): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L418" sourceLabel="Component.ts:418" />

Adds a child component

**Parameters**

- `child` ([Component](/module/components-base-component/component)) — Child component to add

**Returns**

- `void`

<MemberHeading id="emit" depth="3" name="emit" sig="emit<T>(type: string, data?: T): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L382" sourceLabel="Component.ts:382" />

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

Finds a child component by ID

**Parameters**

- `id` (string) — Component ID to find

**Returns**

- [`Component`](/module/components-base-component/component)`<`[`ComponentProps`](/module/components-base-component/componentprops)`, object> | undefined` — Found component or undefined

<MemberHeading id="getinitialstate" depth="3" name="getInitialState" sig="getInitialState(): S" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L244" sourceLabel="Component.ts:244" />

Returns the initial internal state

**Returns**

- `S` — Initial state object

<MemberHeading id="mount" depth="3" name="mount" sig="mount(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L296" sourceLabel="Component.ts:296" />

Mounts the component

**Returns**

- `void`

<MemberHeading id="off" depth="3" name="off" sig="off(event: string, handler: ComponentEventHandler): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L366" sourceLabel="Component.ts:366" />

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

_Implementation of&#x20;_[`onBeforeMount`](/module/components-base-component/lifecyclehooks#onbeforemount)

Called before component mounts

**Returns**

- `void`

<MemberHeading id="onbeforeunmount" depth="3" name="onBeforeUnmount" sig="onBeforeUnmount(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L480" sourceLabel="Component.ts:480" />

_Implementation of&#x20;_[`onBeforeUnmount`](/module/components-base-component/lifecyclehooks#onbeforeunmount)

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

_Implementation of&#x20;_[`onBeforeUpdate`](/module/components-base-component/lifecyclehooks#onbeforeupdate)

Called before component updates

**Parameters**

- `_prevProps` ([ComponentProps](/module/components-base-component/componentprops))
- `_nextProps` ([ComponentProps](/module/components-base-component/componentprops))

**Returns**

- `void`

<MemberHeading id="onerror" depth="3" name="onError" sig="onError(_error: Error): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L482" sourceLabel="Component.ts:482" />

_Implementation of&#x20;_[`onError`](/module/components-base-component/lifecyclehooks#onerror)

Called when an error occurs in the component

**Parameters**

- `_error` (Error)

**Returns**

- `void`

<MemberHeading id="onmounted" depth="3" name="onMounted" sig="onMounted(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L477" sourceLabel="Component.ts:477" />

_Implementation of&#x20;_[`onMounted`](/module/components-base-component/lifecyclehooks#onmounted)

Called after component mounts

**Returns**

- `void`

<MemberHeading id="onstatechange" depth="3" name="onStateChange" sig="onStateChange(_prevState: S, _newState: S): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L271" sourceLabel="Component.ts:271" />

Called when internal state changes

**Parameters**

- `_prevState` (S)
- `_newState` (S)

**Returns**

- `void`

<MemberHeading id="onunmounted" depth="3" name="onUnmounted" sig="onUnmounted(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L481" sourceLabel="Component.ts:481" />

_Implementation of&#x20;_[`onUnmounted`](/module/components-base-component/lifecyclehooks#onunmounted)

Called after component unmounts

**Returns**

- `void`

<MemberHeading id="onupdated" depth="3" name="onUpdated" sig="onUpdated(_prevProps: ComponentProps): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L479" sourceLabel="Component.ts:479" />

_Implementation of&#x20;_[`onUpdated`](/module/components-base-component/lifecyclehooks#onupdated)

Called after component updates

**Parameters**

- `_prevProps` ([ComponentProps](/module/components-base-component/componentprops))

**Returns**

- `void`

<MemberHeading id="removechild" depth="3" name="removeChild" sig="removeChild(child: Component): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L429" sourceLabel="Component.ts:429" />

Removes a child component

**Parameters**

- `child` ([Component](/module/components-base-component/component)) — Child component to remove

**Returns**

- `boolean` — True if child was removed

<MemberHeading id="render" depth="3" name="render" sig="render(): unknown" />

<MemberMeta badges="abstract" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L473" sourceLabel="Component.ts:473" />

Renders the component

**Returns**

- `unknown` — Rendered output

<MemberHeading id="setprops" depth="3" name="setProps" sig="setProps(nextProps: Partial<P>): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L280" sourceLabel="Component.ts:280" />

Updates component props

**Parameters**

- `nextProps` (Partial\<P>) — New props

**Returns**

- `void`

<MemberHeading id="setstate" depth="3" name="setState" sig="setState(updates: Partial<S>): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L258" sourceLabel="Component.ts:258" />

Updates the internal state

**Parameters**

- `updates` (Partial\<S>) — Partial state updates

**Returns**

- `void`

**Example**

```typescript
this.setState({ count: this.internalState.count + 1 })
```

<MemberHeading id="unmount" depth="3" name="unmount" sig="unmount(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L309" sourceLabel="Component.ts:309" />

Unmounts the component

**Returns**

- `void`

<MemberHeading id="update" depth="3" name="update" sig="update(): void" />

<MemberMeta badges="protected" sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L463" sourceLabel="Component.ts:463" />

Updates the component

**Returns**

- `void`
