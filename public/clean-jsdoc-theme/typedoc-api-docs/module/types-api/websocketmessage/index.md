---
title: WebSocketMessage
kind: interface
longname: module:types/api.WebSocketMessage
description: WebSocket message type
---

# WebSocketMessage

<Signature
  code="interface WebSocketMessage<T = unknown> {
	id?: string;
	payload: T;
	timestamp?: number;
	type: string;
}"
/>

<SourceLink href="/source/docs-site/typedoc-src/types/api-ts/#L413" label="api.ts:413" />

WebSocket message type

**Type Parameters**

- `T` = `unknown` — Message payload type

---

## Properties

<MemberHeading id="id" depth="3" name="id" sig="id: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L419" sourceLabel="api.ts:419" />

Message ID for correlation

<MemberHeading id="payload" depth="3" name="payload" sig="payload: T" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L417" sourceLabel="api.ts:417" />

Message payload

<MemberHeading id="timestamp" depth="3" name="timestamp" sig="timestamp: number" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L421" sourceLabel="api.ts:421" />

Timestamp

<MemberHeading id="type" depth="3" name="type" sig="type: string" />

<MemberMeta sourceHref="/source/docs-site/typedoc-src/types/api-ts/#L415" sourceLabel="api.ts:415" />

Message type/event name
