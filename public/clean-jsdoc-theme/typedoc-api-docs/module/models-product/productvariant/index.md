---
title: ProductVariant
kind: interface
longname: module:models/Product.ProductVariant
description: Product variant options
---

# ProductVariant

<Signature
  code="interface ProductVariant<T = string> {
	id: string;
	name: string;
	priceAdjustment?: number;
	sku: string;
	stock: number;
	value: T;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/models/product-ts/#L108" label="Product.ts:108" />

Product variant options

**Type Parameters**

- `T` = `string` — Type of the variant value

---

## Properties

<MemberHeading id="id" depth="3" name="id" sig="id: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L110" sourceLabel="Product.ts:110" />

Variant identifier

<MemberHeading id="name" depth="3" name="name" sig="name: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L112" sourceLabel="Product.ts:112" />

Variant name (e.g., "Red", "Large")

<MemberHeading id="priceadjustment" depth="3" name="priceAdjustment" sig="priceAdjustment: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L116" sourceLabel="Product.ts:116" />

Price adjustment for this variant

<MemberHeading id="sku" depth="3" name="sku" sig="sku: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L120" sourceLabel="Product.ts:120" />

SKU for this variant

<MemberHeading id="stock" depth="3" name="stock" sig="stock: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L118" sourceLabel="Product.ts:118" />

Stock quantity for this variant

<MemberHeading id="value" depth="3" name="value" sig="value: T" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L114" sourceLabel="Product.ts:114" />

Variant value
