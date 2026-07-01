---
title: ProductReview
kind: interface
longname: module:models/Product.ProductReview
description: Product review interface
---

# ProductReview

<Signature
  code="interface ProductReview {
	content: string;
	createdAt: Date;
	helpfulVotes: number;
	id: string;
	rating: 1 | 2 | 3 | 4 | 5;
	title: string;
	userId: string;
	userName: string;
	verifiedPurchase: boolean;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/models/product-ts/#L128" label="Product.ts:128" />

Product review interface

---

## Properties

<MemberHeading id="content" depth="3" name="content" sig="content: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L140" sourceLabel="Product.ts:140" />

Review content

<MemberHeading id="createdat" depth="3" name="createdAt" sig="createdAt: Date" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L144" sourceLabel="Product.ts:144" />

Review creation date

<MemberHeading id="helpfulvotes" depth="3" name="helpfulVotes" sig="helpfulVotes: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L142" sourceLabel="Product.ts:142" />

Helpful votes count

<MemberHeading id="id" depth="3" name="id" sig="id: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L130" sourceLabel="Product.ts:130" />

Review identifier

<MemberHeading id="rating" depth="3" name="rating" sig="rating: 1 | 2 | 3 | 4 | 5" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L136" sourceLabel="Product.ts:136" />

Rating from 1 to 5

<MemberHeading id="title" depth="3" name="title" sig="title: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L138" sourceLabel="Product.ts:138" />

Review title

<MemberHeading id="userid" depth="3" name="userId" sig="userId: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L132" sourceLabel="Product.ts:132" />

Reviewer's user ID

<MemberHeading id="username" depth="3" name="userName" sig="userName: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L134" sourceLabel="Product.ts:134" />

Reviewer's display name

<MemberHeading id="verifiedpurchase" depth="3" name="verifiedPurchase" sig="verifiedPurchase: boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/product-ts/#L146" sourceLabel="Product.ts:146" />

Whether the review is verified purchase
