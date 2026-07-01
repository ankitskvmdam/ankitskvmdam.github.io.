---
title: UserPreferences
kind: interface
longname: module:models/User.UserPreferences
description: User preferences configuration
---

# UserPreferences

<Signature
  code="interface UserPreferences {
	language: string;
	notifications: { digest: boolean; marketing: boolean; security: boolean; updates: boolean };
	theme: 'light' | 'dark' | 'system';
	timezone: string;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/models/user-ts/#L81" label="User.ts:81" />

User preferences configuration

---

## Properties

<MemberHeading id="language" depth="3" name="language" sig="language: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L92" sourceLabel="User.ts:92" />

Preferred language code (ISO 639-1)

**Default:** ` ```ts
'en' ``` `

<MemberHeading id="notifications" depth="3" name="notifications" sig="notifications: { digest: boolean; marketing: boolean; security: boolean; updates: boolean }" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L103" sourceLabel="User.ts:103" />

Email notification settings

**Properties**

- `digest` (boolean) — Receive weekly digest
- `marketing` (boolean) — Receive marketing emails
- `security` (boolean) — Receive security alerts
- `updates` (boolean) — Receive product updates

<MemberHeading id="theme" depth="3" name="theme" sig="theme: 'light' | 'dark' | 'system'" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L86" sourceLabel="User.ts:86" />

UI theme preference

**Default:** ` ```ts
'system' ``` `

<MemberHeading id="timezone" depth="3" name="timezone" sig="timezone: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/models/user-ts/#L98" sourceLabel="User.ts:98" />

Timezone identifier (IANA)

**Default:** ` ```ts
'UTC' ``` `
