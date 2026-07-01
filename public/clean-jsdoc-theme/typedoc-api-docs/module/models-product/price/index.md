---
title: Price
kind: interface
longname: module:models/Product.Price
description: Price information structure
---

# Price

<Signature
  code="interface Price {
	amount: number;
	currency: string;
	discountPercent?: number;
	originalAmount?: number;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/models/product-ts/#L57" label="Product.ts:57" />

Price information structure

---

## Properties

<MemberHeading id="amount" depth="3" name="amount" sig="amount: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L62" sourceLabel="Product.ts:62" />

Price amount in smallest currency unit (e.g., cents)

**Example**

```ts
1999 represents $19.99
```

<MemberHeading id="currency" depth="3" name="currency" sig="currency: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L68" sourceLabel="Product.ts:68" />

Currency code (ISO 4217)

**Example**

```ts
'USD', 'EUR', 'CNY'
```

<MemberHeading id="discountpercent" depth="3" name="discountPercent" sig="discountPercent: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L80" sourceLabel="Product.ts:80" />

Discount percentage if applicable

<MemberHeading id="originalamount" depth="3" name="originalAmount" sig="originalAmount: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L73" sourceLabel="Product.ts:73" />

Optional original price for displaying discounts
