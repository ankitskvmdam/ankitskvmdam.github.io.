---
title: ContactInfo
kind: interface
longname: module:models/User.ContactInfo
description: User contact information
---

# ContactInfo

<Signature
  code="interface ContactInfo {
	address?: { city: string; country: string; postalCode: string; state: string; street: string; street2?: string };
	email: string;
	phone?: string;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/models/user-ts/#L54" label="User.ts:54" />

User contact information

---

## Properties

<MemberHeading id="address" depth="3" name="address" sig="address: { city: string; country: string; postalCode: string; state: string; street: string; street2?: string }" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L60" sourceLabel="User.ts:60" />

Physical address

**Properties**

- `city` (string) — City name
- `country` (string) — Country code (ISO 3166-1 alpha-2)
- `postalCode` (string) — Postal/ZIP code
- `state` (string) — State or province
- `street` (string) — Street address line 1
- `street2` (string, optional) — Street address line 2

<MemberHeading id="email" depth="3" name="email" sig="email: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L56" sourceLabel="User.ts:56" />

Primary email address

<MemberHeading id="phone" depth="3" name="phone" sig="phone: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L58" sourceLabel="User.ts:58" />

Optional phone number
