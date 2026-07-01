---
title: ProductCollection
kind: class
longname: module:models/Product.ProductCollection
description: Product collection for managing multiple products
---

# ProductCollection

<SourceLink href="/source/docs-site/typedoc-src/models/product-ts/#L389" label="Product.ts:389" />

Product collection for managing multiple products

**Type Parameters**

- `T` extends `IProduct` = `Product` — Product type (must extend IProduct)

---

## Constructors

<MemberHeading
  id="constructor"
  depth="3"
  name="constructor"
  sig="new ProductCollection<
	T extends IProduct = Product,
>(
	initialProducts?: T[],
): ProductCollection<T>"
/>

**Parameters**

- `initialProducts` (T\[], optional) — Optional initial products array

**Returns**

`ProductCollection<T>`

---

## Accessors

<MemberHeading id="size" depth="3" name="size" sig="get size(): number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L412" sourceLabel="Product.ts:412" />

Gets the number of products in the collection

## Methods

<MemberHeading id="iterator" depth="3" name="[iterator]" sig="[iterator](): Iterator<T>" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L486" sourceLabel="Product.ts:486" />

Iterates over all products

**Returns**

- `Iterator<T>`

<MemberHeading id="add" depth="3" name="add" sig="add(product: T): this" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L422" sourceLabel="Product.ts:422" />

Adds a product to the collection

**Parameters**

- `product` (T) — Product to add

**Returns**

- `this` — This collection for chaining

<MemberHeading id="filterbycategory" depth="3" name="filterByCategory" sig="filterByCategory(category: ProductCategory): T[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L453" sourceLabel="Product.ts:453" />

Filters products by category

**Parameters**

- `category` ([ProductCategory](/module/models-product/productcategory)) — Category to filter by

**Returns**

- `T[]` — Array of matching products

<MemberHeading id="get" depth="3" name="get" sig="get(productId: string): T | undefined" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L443" sourceLabel="Product.ts:443" />

Gets a product by ID

**Parameters**

- `productId` (string) — Product ID

**Returns**

- `T | undefined` — The product or undefined

<MemberHeading id="remove" depth="3" name="remove" sig="remove(productId: string): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L433" sourceLabel="Product.ts:433" />

Removes a product from the collection

**Parameters**

- `productId` (string) — ID of product to remove

**Returns**

- `boolean` — True if product was removed

<MemberHeading id="search" depth="3" name="search" sig="search(query: string): T[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L463" sourceLabel="Product.ts:463" />

Searches products by name or tags

**Parameters**

- `query` (string) — Search query

**Returns**

- `T[]` — Array of matching products

<MemberHeading id="toarray" depth="3" name="toArray" sig="toArray(): T[]" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L477" sourceLabel="Product.ts:477" />

Gets all products as an array

**Returns**

- `T[]` — Array of all products
