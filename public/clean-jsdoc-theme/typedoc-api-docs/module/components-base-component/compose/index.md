---
title: compose
kind: function
longname: module:components/base/Component.compose
description: Combines multiple HOCs
---

# compose

<Signature
  code="compose<
	P extends ComponentProps,
>(
	...hocs: HOC<P, P>[],
): HOC<P, P>"
/>

<SourceLink href="/source/docs-site/typedoc-src/components/base/component-ts/#L545" label="Component.ts:545" />

Combines multiple HOCs

**Type Parameters**

- `P` extends `ComponentProps`

**Parameters**

- `hocs` ([HOC](/module/components-base-component/hoc)\<P, P>\[]) — HOCs to compose

**Returns**

- [`HOC`](/module/components-base-component/hoc)`<P, P>` — Combined HOC

**Example**

```typescript
const enhance = compose(
  withLogging,
  withErrorBoundary,
  withStyles
)

const EnhancedComponent = enhance(MyComponent)
```
