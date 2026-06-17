---
title: forge
kind: module
longname: module:forge
description: "Forge is a tiny, fictional toolkit for building event-driven data pipelines. It does not do anything real — it exists to show, on a single generated site, every JSDoc construct and every authoring component that clean-jsdoc-theme understands. Use it as a living checklist: classes, interfaces, mixins, namespaces, typedefs, enums, events, constants, and globals are all here, and each pulls in a different slice of the theme's feature set. [!NOTE] Everything you're reading — this callout, the stepper below, the tabs, the table, and the embedded demo — is authored inline in a doc comment . The markers [!NOTE] , [!TIP] , [!IMPORTANT] , [!WARNING] , and [!CAUTION] each render as a differently-styled callout. [!TIP] Reach for {@link Cache} when you need fast key/value storage, and {@link Queue} when you need ordered, event-driven task processing. Quick start Build a {@link Cache}, optionally capping how many entries it holds: import { Cache } from 'forge'; const cache = new Cache({ maxSize: 2 }); A {@link Queue} runs tasks in priority order and emits events as it drains: import { Queue } from 'forge'; const q = new Queue({ concurrency: 2 }); q.on('drain', () => console.log('all done')); Read-through a cache from inside a queued task and you have a tiny pipeline. Install npm install --save-dev jsdoc clean-jsdoc-theme pnpm add -D jsdoc clean-jsdoc-theme yarn add -D jsdoc clean-jsdoc-theme What's in the box Symbol Kind Highlights it demonstrates {@link Cache} class constructor, getters, @deprecated , @fires , @playground {@link Queue} class @extends , events, @async , @generator , @abstract {@link Store} interface @interface + @implements {@link Timestamped} mixin @mixin + @mixes {@link text} namespace @namespace + @borrows {@link Priority} enum @enum rendered as a member table Roadmap [x] Caching primitives [x] Event-driven queue [ ] Persistent backends [ ] Streaming transforms Live demo The embed below is authored with the @iframe block tag (see the module's source) — it points at this very site and re-themes itself when you flip light/dark. In prose (README, tutorials, the docs folder) you can author the same thing with a ```iframe fenced code block instead."
---

# forge

<SourceLink href="/source/index-js/#L120" label="index.js:120" />

**Forge** is a tiny, fictional toolkit for building event-driven data pipelines. It does not do anything real — it exists to show, on a single generated site, **every** JSDoc construct and **every** authoring component that `clean-jsdoc-theme` understands.

Use it as a living checklist: classes, interfaces, mixins, namespaces, typedefs, enums, events, constants, and globals are all here, and each pulls in a different slice of the theme's feature set.

<Callout type="info">
  Everything you're reading — this callout, the stepper below, the tabs, the table, and the embedded demo — is authored **inline in a doc comment**. The markers `[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`, and `[!CAUTION]` each render as a differently-styled callout.
</Callout>

<Callout type="tip">
  Reach for [Cache](/module/forge-cache#cache) when you need fast key/value storage, and [Queue](/module/forge-queue#queue) when you need ordered, event-driven task processing.
</Callout>

## Quick start

<Steps>
  <Step label="Create a cache">
    Build a [Cache](/module/forge-cache#cache), optionally capping how many entries it holds:

    ```
    import { Cache } from 'forge';
    const cache = new Cache({ maxSize: 2 });
    ```
  </Step>

  <Step label="Queue some work">
    A [Queue](/module/forge-queue#queue) runs tasks in priority order and emits events as it drains:

    ```
    import { Queue } from 'forge';
    const q = new Queue({ concurrency: 2 });
    q.on('drain', () => console.log('all done'));
    ```
  </Step>

  <Step label="Wire them together">
    Read-through a cache from inside a queued task and you have a tiny pipeline.
  </Step>
</Steps>

## Install

<Tabs>
  <Tab label="npm">
    ```
    npm install --save-dev jsdoc clean-jsdoc-theme
    ```
  </Tab>

  <Tab label="pnpm">
    ```
    pnpm add -D jsdoc clean-jsdoc-theme
    ```
  </Tab>

  <Tab label="yarn">
    ```
    yarn add -D jsdoc clean-jsdoc-theme
    ```
  </Tab>
</Tabs>

## What's in the box

| Symbol                                             | Kind      | Highlights it demonstrates                                   |
| -------------------------------------------------- | --------- | ------------------------------------------------------------ |
| [Cache](/module/forge-cache#cache)                 | class     | constructor, getters, `@deprecated`, `@fires`, `@playground` |
| [Queue](/module/forge-queue#queue)                 | class     | `@extends`, events, `@async`, `@generator`, `@abstract`      |
| [Store](/module/forge-contracts#store)             | interface | `@interface` + `@implements`                                 |
| [Timestamped](/module/forge-contracts#timestamped) | mixin     | `@mixin` + `@mixes`                                          |
| [text](/module/forge-contracts#text)               | namespace | `@namespace` + `@borrows`                                    |
| [Priority](/module/forge-cache#priority)           | enum      | `@enum` rendered as a member table                           |

## Roadmap

- \[x] Caching primitives
- \[x] Event-driven queue
- \[ ] Persistent backends
- \[ ] Streaming transforms

## Live demo

The embed below is authored with the `@iframe` block tag (see the module's source) — it points at this very site and re-themes itself when you flip light/dark. In **prose** (README, tutorials, the `docs` folder) you can author the same thing with a ` ```iframe ` fenced code block instead.

<Embed src="https://ankdev.me/clean-jsdoc-theme/api-docs/" title="Forge API reference" height="420" />

- **Since:** 1.0.0
- **License:** MIT
- **Author:** The clean-jsdoc-theme team
- **See:**
  - [Cache](/module/forge-cache#cache)
  - [Queue](/module/forge-queue#queue)

---

## Other

<MemberHeading id="version" depth="3" name="VERSION" sig="VERSION" />

<MemberMeta badges="static" sourceHref="/source/index-js/#L127" sourceLabel="index.js:127" />

The current Forge version. A module-level `constant` rendered with a **Type** and **Default** row.

**Type**

`string`
