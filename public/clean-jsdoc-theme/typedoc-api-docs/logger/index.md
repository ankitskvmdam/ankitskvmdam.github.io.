---
title: Logger
kind: interface
longname: Logger
description: A minimal logging surface.
---

# Logger

<Signature
  code="interface Logger {
	format?: Formatter;
	minLevel: Level;
	info(message: string): void;
	log(message: string, level: Level): void;
}"
/>

<SourceLink href="/source/index-ts/#L58" label="index.ts:58" />

A minimal logging surface.

**Example**

```typescript
const logger: Logger = new ConsoleLogger()
logger.log('starting up', LOG_LEVELS.INFO)
```

---

## Properties

<MemberHeading id="format" depth="3" name="format" sig="format: Formatter" />

<MemberMeta sourceHref="/source/index-ts/#L62" sourceLabel="index.ts:62" />

An optional custom formatter; the default prefixes the level name.

<MemberHeading id="minlevel" depth="3" name="minLevel" sig="minLevel: Level" />

<MemberMeta sourceHref="/source/index-ts/#L60" sourceLabel="index.ts:60" />

The minimum level this logger emits.

## Methods

<MemberHeading id="info" depth="3" name="info" sig="info(message: string): void" />

<MemberMeta sourceHref="/source/index-ts/#L66" sourceLabel="index.ts:66" />

Convenience wrapper for `LOG_LEVELS.INFO`.

**Parameters**

- `message` (string)

**Returns**

- `void`

<MemberHeading id="log" depth="3" name="log" sig="log(message: string, level: Level): void" />

<MemberMeta sourceHref="/source/index-ts/#L64" sourceLabel="index.ts:64" />

Write a message at the given level.

**Parameters**

- `message` (string)
- `level` ([Level](/level))

**Returns**

- `void`
