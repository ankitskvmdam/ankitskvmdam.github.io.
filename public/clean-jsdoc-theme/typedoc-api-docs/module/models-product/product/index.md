---
title: Product
kind: class
longname: module:models/Product.Product
description: Product class implementation
---

# Product

<SourceLink href="/source/docs-site/typedoc-src/models/product-ts/#L230" label="Product.ts:230" />

Product class implementation

**Remarks**

Provides a complete product model with utility methods for price calculations, stock management, and data transformation.

**Example**

```typescript
const product = new Product({
  id: 'prod-123',
  sku: 'WIDGET-001',
  name: 'Super Widget',
  shortDescription: 'The best widget ever made',
  description: '## Features\n- Durable\n- Lightweight\n- Eco-friendly',
  category: ProductCategory.Electronics,
  tags: ['widget', 'gadget', 'popular'],
  price: { amount: 2999, currency: 'USD' },
  availability: AvailabilityStatus.InStock,
  stockQuantity: 100,
  images: ['https://example.com/widget.jpg'],
  variants: [],
  averageRating: 4.5,
  reviewCount: 42,
  createdAt: new Date(),
  updatedAt: new Date(),
  isFeatured: true,
  isActive: true
})

console.log(product.getFormattedPrice()) // "$29.99"
```

---

## Constructors

<MemberHeading id="constructor" depth="3" name="constructor" sig="new Product(data: IProduct): Product" />

**Parameters**

- `data` ([IProduct](/module/models-product/iproduct)) — Product data

**Returns**

`Product`

#### Implements

- [`IProduct`](/module/models-product/iproduct)

---

## Properties

<MemberHeading id="availability" depth="3" name="availability" sig="availability: AvailabilityStatus" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L248" sourceLabel="Product.ts:248" />

_Implementation of&#x20;_[`availability`](/module/models-product/iproduct#availability)

Current availability status

<MemberHeading id="averagerating" depth="3" name="averageRating" sig="averageRating: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L258" sourceLabel="Product.ts:258" />

_Implementation of&#x20;_[`averageRating`](/module/models-product/iproduct#averagerating)

Average rating (1-5)

<MemberHeading id="category" depth="3" name="category" sig="category: ProductCategory" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L242" sourceLabel="Product.ts:242" />

_Implementation of&#x20;_[`category`](/module/models-product/iproduct#category)

Product category

<MemberHeading id="createdat" depth="3" name="createdAt" sig="createdAt: Date" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L262" sourceLabel="Product.ts:262" />

_Implementation of&#x20;_[`createdAt`](/module/models-product/iproduct#createdat)

Product creation date

<MemberHeading id="description" depth="3" name="description" sig="description: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L240" sourceLabel="Product.ts:240" />

_Implementation of&#x20;_[`description`](/module/models-product/iproduct#description)

Full product description (supports markdown)

<MemberHeading id="dimensions" depth="3" name="dimensions" sig="dimensions: Dimensions" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L254" sourceLabel="Product.ts:254" />

_Implementation of&#x20;_[`dimensions`](/module/models-product/iproduct#dimensions)

Product dimensions and weight

<MemberHeading id="id" depth="3" name="id" sig="id: string" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L232" sourceLabel="Product.ts:232" />

_Implementation of&#x20;_[`id`](/module/models-product/iproduct#id)

Unique product identifier

<MemberHeading id="images" depth="3" name="images" sig="images: string[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L252" sourceLabel="Product.ts:252" />

_Implementation of&#x20;_[`images`](/module/models-product/iproduct#images)

Product images URLs

<MemberHeading id="isactive" depth="3" name="isActive" sig="isActive: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L268" sourceLabel="Product.ts:268" />

_Implementation of&#x20;_[`isActive`](/module/models-product/iproduct#isactive)

Whether product is active/visible

<MemberHeading id="isfeatured" depth="3" name="isFeatured" sig="isFeatured: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L266" sourceLabel="Product.ts:266" />

_Implementation of&#x20;_[`isFeatured`](/module/models-product/iproduct#isfeatured)

Whether product is featured

<MemberHeading id="name" depth="3" name="name" sig="name: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L236" sourceLabel="Product.ts:236" />

_Implementation of&#x20;_[`name`](/module/models-product/iproduct#name)

Product name

<MemberHeading id="price" depth="3" name="price" sig="price: Price" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L246" sourceLabel="Product.ts:246" />

_Implementation of&#x20;_[`price`](/module/models-product/iproduct#price)

Price information

<MemberHeading id="reviewcount" depth="3" name="reviewCount" sig="reviewCount: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L260" sourceLabel="Product.ts:260" />

_Implementation of&#x20;_[`reviewCount`](/module/models-product/iproduct#reviewcount)

Total number of reviews

<MemberHeading id="shortdescription" depth="3" name="shortDescription" sig="shortDescription: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L238" sourceLabel="Product.ts:238" />

_Implementation of&#x20;_[`shortDescription`](/module/models-product/iproduct#shortdescription)

Short description (max 200 chars)

<MemberHeading id="sku" depth="3" name="sku" sig="sku: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L234" sourceLabel="Product.ts:234" />

_Implementation of&#x20;_[`sku`](/module/models-product/iproduct#sku)

Product SKU (Stock Keeping Unit)

<MemberHeading id="stockquantity" depth="3" name="stockQuantity" sig="stockQuantity: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L250" sourceLabel="Product.ts:250" />

_Implementation of&#x20;_[`stockQuantity`](/module/models-product/iproduct#stockquantity)

Current stock quantity

<MemberHeading id="tags" depth="3" name="tags" sig="tags: string[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L244" sourceLabel="Product.ts:244" />

_Implementation of&#x20;_[`tags`](/module/models-product/iproduct#tags)

Product tags for searching

<MemberHeading id="updatedat" depth="3" name="updatedAt" sig="updatedAt: Date" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L264" sourceLabel="Product.ts:264" />

_Implementation of&#x20;_[`updatedAt`](/module/models-product/iproduct#updatedat)

Last update date

<MemberHeading id="variants" depth="3" name="variants" sig="variants: ProductVariant<string>[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L256" sourceLabel="Product.ts:256" />

_Implementation of&#x20;_[`variants`](/module/models-product/iproduct#variants)

Product variants (colors, sizes, etc.)

## Methods

<MemberHeading id="canpurchase" depth="3" name="canPurchase" sig="canPurchase(): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L317" sourceLabel="Product.ts:317" />

Checks if the product is available for purchase

**Returns**

- `boolean` — True if product can be purchased

<MemberHeading id="getdiscountamount" depth="3" name="getDiscountAmount" sig="getDiscountAmount(): number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L305" sourceLabel="Product.ts:305" />

Calculates the discount amount

**Returns**

- `number` — Discount amount in smallest currency unit, or 0 if no discount

<MemberHeading id="getformattedprice" depth="3" name="getFormattedPrice" sig="getFormattedPrice(locale: string): string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L293" sourceLabel="Product.ts:293" />

Formats the price for display

**Parameters**

- `locale` (string, default: "'en-US'") — Locale for formatting (default: 'en-US')

**Returns**

- `string` — Formatted price string

**Example**

```typescript
product.getFormattedPrice() // "$29.99"
product.getFormattedPrice('de-DE') // "29,99 €"
```

<MemberHeading id="gettotalprice" depth="3" name="getTotalPrice" sig="getTotalPrice(variantId?: string): number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L371" sourceLabel="Product.ts:371" />

Calculates total price for a variant

**Parameters**

- `variantId` (string, optional) — Optional variant ID

**Returns**

- `number` — Total price amount including variant adjustment

<MemberHeading
  id="getvariant"
  depth="3"
  name="getVariant"
  sig="getVariant<
	T = string,
>(
	variantId: string,
): ProductVariant<T> | undefined"
/>

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L361" sourceLabel="Product.ts:361" />

Gets a specific variant by ID

**Type Parameters**

- `T` = `string` — Variant value type

**Parameters**

- `variantId` (string) — The variant identifier

**Returns**

- [`ProductVariant`](/module/models-product/productvariant)`<T> | undefined` — The variant or undefined if not found

<MemberHeading id="updatestock" depth="3" name="updateStock" sig="updateStock(quantity: number): this" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L339" sourceLabel="Product.ts:339" />

Updates stock quantity and availability status

**Parameters**

- `quantity` (number) — New stock quantity

**Returns**

- `this` — The updated product instance

**Example**

```typescript
product.updateStock(5) // Sets to low stock
product.updateStock(0) // Sets to out of stock
```
