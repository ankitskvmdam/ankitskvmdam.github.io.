---
title: User
kind: class
longname: module:models/User.User
description: User class representing a system user
---

# User

<SourceLink href="/source/docs-site/typedoc-src/models/user-ts/#L176" label="User.ts:176" />

User class representing a system user

**Remarks**

This class provides a full implementation of the [IUser](/module/models-user/iuser) interface with additional utility methods for user management.

**Example**

````js
Creating a new user:
```typescript
const user = new User({
  id: 'uuid-here',
  username: 'johndoe',
  displayName: 'John Doe',
  role: UserRole.User,
  status: AccountStatus.Active,
  contact: { email: 'john@example.com' },
  preferences: {
    theme: 'dark',
    language: 'en',
    timezone: 'America/New_York',
    notifications: { marketing: false, security: true, updates: true, digest: false }
  },
  createdAt: new Date(),
  updatedAt: new Date()
})
```
````

---

## Constructors

<MemberHeading id="constructor" depth="3" name="constructor" sig="new User(data: IUser): User" />

**Parameters**

- `data` ([IUser](/module/models-user/iuser)) — User data to initialize the instance

**Returns**

`User`

#### Implements

- [`IUser`](/module/models-user/iuser)

---

## Properties

<MemberHeading id="contact" depth="3" name="contact" sig="contact: ContactInfo" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L188" sourceLabel="User.ts:188" />

_Implementation of&#x20;_[`contact`](/module/models-user/iuser#contact)

Contact information

<MemberHeading id="createdat" depth="3" name="createdAt" sig="createdAt: Date" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L192" sourceLabel="User.ts:192" />

_Implementation of&#x20;_[`createdAt`](/module/models-user/iuser#createdat)

Account creation timestamp

<MemberHeading id="displayname" depth="3" name="displayName" sig="displayName: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L182" sourceLabel="User.ts:182" />

_Implementation of&#x20;_[`displayName`](/module/models-user/iuser#displayname)

Display name

<MemberHeading id="id" depth="3" name="id" sig="id: string" />

<MemberMeta badges="readonly" sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L178" sourceLabel="User.ts:178" />

_Implementation of&#x20;_[`id`](/module/models-user/iuser#id)

Unique user identifier (UUID v4)

<MemberHeading id="lastloginat" depth="3" name="lastLoginAt" sig="lastLoginAt: Date" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L196" sourceLabel="User.ts:196" />

_Implementation of&#x20;_[`lastLoginAt`](/module/models-user/iuser#lastloginat)

Last login timestamp

<MemberHeading id="preferences" depth="3" name="preferences" sig="preferences: UserPreferences" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L190" sourceLabel="User.ts:190" />

_Implementation of&#x20;_[`preferences`](/module/models-user/iuser#preferences)

User preferences

<MemberHeading id="role" depth="3" name="role" sig="role: UserRole" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L184" sourceLabel="User.ts:184" />

_Implementation of&#x20;_[`role`](/module/models-user/iuser#role)

User's role in the system

<MemberHeading id="status" depth="3" name="status" sig="status: AccountStatus" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L186" sourceLabel="User.ts:186" />

_Implementation of&#x20;_[`status`](/module/models-user/iuser#status)

Current account status

<MemberHeading id="updatedat" depth="3" name="updatedAt" sig="updatedAt: Date" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L194" sourceLabel="User.ts:194" />

_Implementation of&#x20;_[`updatedAt`](/module/models-user/iuser#updatedat)

Last update timestamp

<MemberHeading id="username" depth="3" name="username" sig="username: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L180" sourceLabel="User.ts:180" />

_Implementation of&#x20;_[`username`](/module/models-user/iuser#username)

Username (unique, alphanumeric)

## Methods

<MemberHeading id="isactive" depth="3" name="isActive" sig="isActive(): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L237" sourceLabel="User.ts:237" />

Checks if the user account is active

**Returns**

- `boolean` — True if account status is Active

<MemberHeading id="isadmin" depth="3" name="isAdmin" sig="isAdmin(): boolean" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L228" sourceLabel="User.ts:228" />

Checks if the user has admin privileges

**Returns**

- `boolean` — True if user is Admin or SuperAdmin

**Example**

```typescript
if (user.isAdmin()) {
  // Show admin panel
}
```

<MemberHeading id="recordlogin" depth="3" name="recordLogin" sig="recordLogin(): void" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L266" sourceLabel="User.ts:266" />

Records a login event

**Returns**

- `void`

<MemberHeading id="tojson" depth="3" name="toJSON" sig="toJSON(): IUser" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L275" sourceLabel="User.ts:275" />

Converts user to a JSON-serializable object

**Returns**

- [`IUser`](/module/models-user/iuser) — Plain object representation

<MemberHeading id="updatepreferences" depth="3" name="updatePreferences" sig="updatePreferences(updates: Partial<UserPreferences>): this" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L255" sourceLabel="User.ts:255" />

Updates user preferences

**Parameters**

- `updates` (Partial\<[UserPreferences](/module/models-user/userpreferences)>) — Partial preferences to update

**Returns**

- `this` — The updated user instance

**Example**

```typescript
user.updatePreferences({
  theme: 'dark',
  language: 'zh'
})
```

## Static Methods

<MemberHeading id="fromjson" depth="3" name="fromJSON" sig="fromJSON(json: string | IUser): User" />

<MemberMeta badges="static" sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L302" sourceLabel="User.ts:302" />

Creates a User instance from JSON data

**Parameters**

- `json` (string | [IUser](/module/models-user/iuser)) — JSON string or parsed object

**Returns**

- `User` — New User instance

**Throws**

- SyntaxError If JSON string is invalid

**Example**

```typescript
const user = User.fromJSON('{"id":"...","username":"johndoe",...}')
```
