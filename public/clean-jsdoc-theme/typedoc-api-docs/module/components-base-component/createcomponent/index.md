---
title: createComponent
kind: function
longname: module:components/base/Component.createComponent
description: Component factory function
---

# createComponent

<Signature
  code="createComponent<
	P extends ComponentProps,
>(
	render: FunctionComponent<P>,
): FunctionComponent<P>"
/>

<SourceLink href="/source/docs-site/typedoc-src/components/base/component-ts/#L520" label="Component.ts:520" />

Component factory function

**Type Parameters**

- `P` extends `ComponentProps` — Props type

**Parameters**

- `render` ([FunctionComponent](/module/components-base-component/functioncomponent)\<P>) — Render function

**Returns**

- [`FunctionComponent`](/module/components-base-component/functioncomponent)`<P>` — Function component

**Example**

```typescript
const Greeting = createComponent<{ name: string }>((props) => {
  return `<h1>Hello, ${props.name}!</h1>`
})
```
