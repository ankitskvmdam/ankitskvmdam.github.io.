---
title: LifecycleHooks
kind: interface
longname: module:components/base/Component.LifecycleHooks
description: Component lifecycle hooks interface
---

# LifecycleHooks

<Signature
  code="interface LifecycleHooks {
	onBeforeMount?(): void;
	onBeforeUnmount?(): void;
	onBeforeUpdate?(prevProps: ComponentProps, nextProps: ComponentProps): void;
	onError?(error: Error): void;
	onMounted?(): void;
	onUnmounted?(): void;
	onUpdated?(prevProps: ComponentProps): void;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/components/base/component-ts/#L82" label="Component.ts:82" />

Component lifecycle hooks interface

#### Implemented By

- [`Component`](/module/components-base-component/component)

---

## Methods

<MemberHeading id="onbeforemount" depth="3" name="onBeforeMount" sig="onBeforeMount(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L86" sourceLabel="Component.ts:86" />

Called before component mounts

**Returns**

- `void`

<MemberHeading id="onbeforeunmount" depth="3" name="onBeforeUnmount" sig="onBeforeUnmount(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L111" sourceLabel="Component.ts:111" />

Called before component unmounts

**Returns**

- `void`

<MemberHeading
  id="onbeforeupdate"
  depth="3"
  name="onBeforeUpdate"
  sig="onBeforeUpdate(
	prevProps: ComponentProps,
	nextProps: ComponentProps,
): void"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L99" sourceLabel="Component.ts:99" />

Called before component updates

**Parameters**

- `prevProps` ([ComponentProps](/module/components-base-component/componentprops)) — Previous props
- `nextProps` ([ComponentProps](/module/components-base-component/componentprops)) — Next props

**Returns**

- `void`

<MemberHeading id="onerror" depth="3" name="onError" sig="onError(error: Error): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L123" sourceLabel="Component.ts:123" />

Called when an error occurs in the component

**Parameters**

- `error` (Error) — The error that occurred

**Returns**

- `void`

<MemberHeading id="onmounted" depth="3" name="onMounted" sig="onMounted(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L91" sourceLabel="Component.ts:91" />

Called after component mounts

**Returns**

- `void`

<MemberHeading id="onunmounted" depth="3" name="onUnmounted" sig="onUnmounted(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L116" sourceLabel="Component.ts:116" />

Called after component unmounts

**Returns**

- `void`

<MemberHeading id="onupdated" depth="3" name="onUpdated" sig="onUpdated(prevProps: ComponentProps): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/components/base/component-ts/#L106" sourceLabel="Component.ts:106" />

Called after component updates

**Parameters**

- `prevProps` ([ComponentProps](/module/components-base-component/componentprops)) — Previous props

**Returns**

- `void`
