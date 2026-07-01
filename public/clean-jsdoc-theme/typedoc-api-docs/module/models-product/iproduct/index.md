---
title: IProduct
kind: interface
longname: module:models/Product.IProduct
description: Complete product interface
---

# IProduct

<Signature
  code="interface IProduct {
	availability: AvailabilityStatus;
	averageRating: number;
	category: ProductCategory;
	createdAt: Date;
	description: string;
	dimensions?: Dimensions;
	id: string;
	images: string[];
	isActive: boolean;
	isFeatured: boolean;
	name: string;
	price: Price;
	reviewCount: number;
	shortDescription: string;
	sku: string;
	stockQuantity: number;
	tags: string[];
	updatedAt: Date;
	variants: ProductVariant<string>[];
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/models/product-ts/#L154" label="Product.ts:154" />

Complete product interface

#### Implemented By

- [`Product`](/module/models-product/product)

---

## Properties

<MemberHeading id="availability" depth="3" name="availability" sig="availability: AvailabilityStatus" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L172" sourceLabel="Product.ts:172" />

Current availability status

<MemberHeading id="averagerating" depth="3" name="averageRating" sig="averageRating: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L182" sourceLabel="Product.ts:182" />

Average rating (1-5)

<MemberHeading id="category" depth="3" name="category" sig="category: ProductCategory" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L166" sourceLabel="Product.ts:166" />

Product category

<MemberHeading id="createdat" depth="3" name="createdAt" sig="createdAt: Date" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L186" sourceLabel="Product.ts:186" />

Product creation date

<MemberHeading id="description" depth="3" name="description" sig="description: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L164" sourceLabel="Product.ts:164" />

Full product description (supports markdown)

<MemberHeading id="dimensions" depth="3" name="dimensions" sig="dimensions: Dimensions" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L178" sourceLabel="Product.ts:178" />

Product dimensions and weight

<MemberHeading id="id" depth="3" name="id" sig="id: string" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L156" sourceLabel="Product.ts:156" />

Unique product identifier

<MemberHeading id="images" depth="3" name="images" sig="images: string[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L176" sourceLabel="Product.ts:176" />

Product images URLs

<MemberHeading id="isactive" depth="3" name="isActive" sig="isActive: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L192" sourceLabel="Product.ts:192" />

Whether product is active/visible

<MemberHeading id="isfeatured" depth="3" name="isFeatured" sig="isFeatured: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L190" sourceLabel="Product.ts:190" />

Whether product is featured

<MemberHeading id="name" depth="3" name="name" sig="name: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L160" sourceLabel="Product.ts:160" />

Product name

<MemberHeading id="price" depth="3" name="price" sig="price: Price" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L170" sourceLabel="Product.ts:170" />

Price information

<MemberHeading id="reviewcount" depth="3" name="reviewCount" sig="reviewCount: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L184" sourceLabel="Product.ts:184" />

Total number of reviews

<MemberHeading id="shortdescription" depth="3" name="shortDescription" sig="shortDescription: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L162" sourceLabel="Product.ts:162" />

Short description (max 200 chars)

<MemberHeading id="sku" depth="3" name="sku" sig="sku: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L158" sourceLabel="Product.ts:158" />

Product SKU (Stock Keeping Unit)

<MemberHeading id="stockquantity" depth="3" name="stockQuantity" sig="stockQuantity: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L174" sourceLabel="Product.ts:174" />

Current stock quantity

<MemberHeading id="tags" depth="3" name="tags" sig="tags: string[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L168" sourceLabel="Product.ts:168" />

Product tags for searching

<MemberHeading id="updatedat" depth="3" name="updatedAt" sig="updatedAt: Date" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L188" sourceLabel="Product.ts:188" />

Last update date

<MemberHeading id="variants" depth="3" name="variants" sig="variants: ProductVariant<string>[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L180" sourceLabel="Product.ts:180" />

Product variants (colors, sizes, etc.)
