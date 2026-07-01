---
title: IUser
kind: interface
longname: module:models/User.IUser
description: Base user interface
---

# IUser

<Signature
  code="interface IUser {
	contact: ContactInfo;
	createdAt: Date;
	displayName: string;
	id: string;
	lastLoginAt?: Date;
	preferences: UserPreferences;
	role: UserRole;
	status: AccountStatus;
	updatedAt: Date;
	username: string;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/models/user-ts/#L123" label="User.ts:123" />

Base user interface

**Remarks**

Contains common properties shared by all user types.

#### Implemented By

- [`User`](/module/models-user/user)

---

## Properties

<MemberHeading id="contact" depth="3" name="contact" sig="contact: ContactInfo" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L135" sourceLabel="User.ts:135" />

Contact information

<MemberHeading id="createdat" depth="3" name="createdAt" sig="createdAt: Date" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L139" sourceLabel="User.ts:139" />

Account creation timestamp

<MemberHeading id="displayname" depth="3" name="displayName" sig="displayName: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L129" sourceLabel="User.ts:129" />

Display name

<MemberHeading id="id" depth="3" name="id" sig="id: string" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L125" sourceLabel="User.ts:125" />

Unique user identifier (UUID v4)

<MemberHeading id="lastloginat" depth="3" name="lastLoginAt" sig="lastLoginAt: Date" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L143" sourceLabel="User.ts:143" />

Last login timestamp

<MemberHeading id="preferences" depth="3" name="preferences" sig="preferences: UserPreferences" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L137" sourceLabel="User.ts:137" />

User preferences

<MemberHeading id="role" depth="3" name="role" sig="role: UserRole" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L131" sourceLabel="User.ts:131" />

User's role in the system

<MemberHeading id="status" depth="3" name="status" sig="status: AccountStatus" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L133" sourceLabel="User.ts:133" />

Current account status

<MemberHeading id="updatedat" depth="3" name="updatedAt" sig="updatedAt: Date" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L141" sourceLabel="User.ts:141" />

Last update timestamp

<MemberHeading id="username" depth="3" name="username" sig="username: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L127" sourceLabel="User.ts:127" />

Username (unique, alphanumeric)
