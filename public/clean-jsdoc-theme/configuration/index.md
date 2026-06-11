---
title: Configuration
kind: guide
group: Getting Started
order: 4
---

# Configuration

Every theme option lives under `opts` in your `jsdoc.json` (or, for TypeDoc, under the `cleanJsdocTheme` block in `typedoc.json` — see [JSDoc vs TypeDoc](#jsdoc-vs-typedoc) just below). Setting up the rest of the build is covered in [JSDoc Getting Started](/jsdoc-getting-started) and [TypeDoc Getting Started](/typedoc-getting-started); this page documents the theme's own options.

Each option below shows the snippet for both tools in tabs — pick the one that matches your setup.

<Callout type="warning">
  Unknown or misspelled options only **warn** by default (with a "did you mean?" hint) — the build continues. Set [`strict`](#strict) to turn those warnings into errors.
</Callout>

## JSDoc vs TypeDoc

Every option on this page is the same for both tools — only **where you put it** differs. In JSDoc the theme options go under `opts`; in TypeDoc, under `cleanJsdocTheme`.

<Tabs group="tool">
  <Tab label="JSDoc (jsdoc.json)" value="jsdoc">
    Theme options live under **`opts`**, alongside JSDoc's own options:

    ```json5
    {
      source: { include: ["./src", "./README.md"] },
      plugins: ["plugins/markdown"],
      opts: {
        destination: "dist",
        recurse: true,
        template: "node_modules/clean-jsdoc-theme/dist",
        // ↓ theme options
        siteName: "My Library",
        sectionOrder: ["Getting Started", "Classes", "Modules"],
        clubSidebarItems: true,
        copyPage: { enabled: true, actions: ["copy", "view", "claude"] },
      },
    }
    ```
  </Tab>

  <Tab label="TypeDoc (typedoc.json)" value="typedoc">
    The theme is loaded as a plugin and selected as an output; its options live under **`cleanJsdocTheme`**:

    ```json5
    {
      entryPoints: ["src/index.ts"],
      plugin: ["@clean-jsdoc-theme/typedoc"],
      outputs: [{ name: "clean-jsdoc-theme", path: "dist" }],
      // ↓ theme options
      cleanJsdocTheme: {
        siteName: "My Library",
        sectionOrder: ["Getting Started", "Classes", "Modules"],
        clubSidebarItems: true,
        copyPage: { enabled: true, actions: ["copy", "view", "claude"] },
      },
    }
    ```
  </Tab>
</Tabs>

The option names and values are identical — only the namespace changes: **`opts`** (JSDoc) vs **`cleanJsdocTheme`** (TypeDoc). One exception: the [`outputSourceFiles`](#outputsourcefiles) and [`sourceLinkToComment`](#sourcelinktocomment) options sit under JSDoc's `templates.default` and are JSDoc-only.

## Site & identity

### `siteName`

The title shown in the header — plain text, or a logo image.

**Expected:** a string, or a logo set object. The logo set keys are all strings: `light` and `dark` are the logo URLs (or local paths) used in each theme, `default` is the fallback when a theme-specific one isn't given, and `alt` is the text shown if the image fails to load (and read by screen readers).

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { siteName: "My Library" }
    // or a logo that swaps with the theme:
    opts: {
      siteName: {
        light: "./assets/logo.svg",
        dark: "./assets/logo-dark.svg",
        alt: "My Library",
      },
    }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { siteName: "My Library" }
    // or a logo that swaps with the theme:
    cleanJsdocTheme: {
      siteName: {
        light: "./assets/logo.svg",
        dark: "./assets/logo-dark.svg",
        alt: "My Library",
      },
    }
    ```
  </Tab>
</Tabs>

Defaults to your package's `name`.

### `basePath`

The site root path the renderer prefixes onto every internal link and asset — set it when the site is served under a sub-path rather than the domain root.

**Expected:** a string path. Defaults to `""` (served at the root).

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { basePath: "/my-library" } // served at example.com/my-library/
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { basePath: "/my-library" } // served at example.com/my-library/
    ```
  </Tab>
</Tabs>

## Content sources

### `readme`

A Markdown file rendered as the site **home page**.

**Expected:** a path string. (A root `docs/index.md` overrides it — see [`docs`](#docs).)

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { readme: "./README.md" }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { readme: "./README.md" }
    ```
  </Tab>
</Tabs>

### `docs`

A directory of hand-written Markdown/HTML guides rendered as prose pages. The folder layout drives each page's URL and sidebar group; per-file YAML frontmatter (`title`, `group`, `order`, `slug`, `hidden`) overrides the defaults, and a root `index.md` becomes the home page.

**Expected:** a path string (a directory).

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { docs: "./docs" }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { docs: "./docs" }
    ```
  </Tab>
</Tabs>

### `docGroups`

The display order of the top-level **doc** groups in the sidebar.

**Expected:** an array of group-label strings.

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { docGroups: ["Getting Started", "Guides"] }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { docGroups: ["Getting Started", "Guides"] }
    ```
  </Tab>
</Tabs>

<Callout type="tip">
  This very site is built with the `docs` and `docGroups` options — its guides are plain Markdown files grouped into the sidebar sections you're browsing right now. Want to build something similar? Browse the source: [docs-site on GitHub](https://github.com/ankitskvmdam/clean-jsdoc-theme/tree/master/docs-site).
</Callout>

### `defaultDocGroup`

The group label a doc lands in when it declares none (no frontmatter `group` and no folder to humanize).

**Expected:** a single string.

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { defaultDocGroup: "Docs" }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { defaultDocGroup: "Docs" }
    ```
  </Tab>
</Tabs>

### `tutorials`

The JSDoc `--tutorials` directory. Each tutorial becomes a guide page, grouped under "Tutorials" in the sidebar.

**Expected:** a path string (a directory). Equivalent to JSDoc's `-u` flag.

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { tutorials: "./tutorials" }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { tutorials: "./tutorials" }
    ```
  </Tab>
</Tabs>

## Sidebar & navigation

### `sectionOrder`

The order of **all** top-level sidebar sections — both your doc/category groups and the API kind labels (Classes, Modules, …). Listed labels come first in the given order; anything you omit is appended afterward.

**Expected:** an array of section-label strings.

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { sectionOrder: ["Getting Started", "Guides", "Classes", "Modules"] }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { sectionOrder: ["Getting Started", "Guides", "Classes", "Modules"] }
    ```
  </Tab>
</Tabs>

### `clubSidebarItems`

Collapse related entries (e.g. a module and its members) under a shared, collapsible parent, grouped by the path segment before the first `/`.

**Expected:** a boolean. Defaults to `false`.

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { clubSidebarItems: true }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { clubSidebarItems: true }
    ```
  </Tab>
</Tabs>

### `menu`

Custom links pinned above the sidebar navigation.

**Expected:** an array of entries. Each is an object with `title`, a `link` (or `href`), an optional `id`, and an optional `icon` — `lucide:<name>` or `simpleicons:<name>`, loaded from a CDN.

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: {
      menu: [
        { title: "Home", link: "/", icon: "lucide:home" },
        { title: "GitHub", link: "https://github.com/you/repo", icon: "simpleicons:github" },
      ],
    }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: {
      menu: [
        { title: "Home", link: "/", icon: "lucide:home" },
        { title: "GitHub", link: "https://github.com/you/repo", icon: "simpleicons:github" },
      ],
    }
    ```
  </Tab>
</Tabs>

## Appearance & assets

### `fonts`

Override the type families.

**Expected:** an object with `heading`, `body`, and/or `mono`. `heading` and `body` are Google Font family names (loaded for you, existence-checked at build time); `mono` is a CSS font stack.

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: {
      fonts: { heading: "Fraunces", body: "Spline Sans", mono: "Spline Sans Mono" },
    }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: {
      fonts: { heading: "Fraunces", body: "Spline Sans", mono: "Spline Sans Mono" },
    }
    ```
  </Tab>
</Tabs>

### `colors` and `darkColors`

Recolor the theme. `colors` is the light-mode palette (also the `:root` default); `darkColors` is the dark-mode palette, emitted under `[data-theme="dark"]`. Each merges **per key** over the built-in palette, so you can override just `bg` and keep every other default.

**Expected:** an object with any subset of these keys, each a CSS color string (the theme ships [oklch](https://oklch.com), but any valid CSS color works):

| Key        | Role                                          |
| ---------- | --------------------------------------------- |
| `bg`       | Page background                               |
| `bgMuted`  | Subtle surfaces (code blocks, cards, sidebar) |
| `fg`       | Body text                                     |
| `fgMuted`  | Secondary / muted text                        |
| `accent`   | Links, focus rings, primary buttons           |
| `accentFg` | Text/icon on an `accent` background           |
| `border`   | Hairlines and dividers                        |

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: {
      colors: { bg: "oklch(0.99 0.01 95)", accent: "oklch(0.55 0.2 250)" },
      darkColors: { bg: "oklch(0.18 0.01 250)", accent: "oklch(0.7 0.16 250)" },
    }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: {
      colors: { bg: "oklch(0.99 0.01 95)", accent: "oklch(0.55 0.2 250)" },
      darkColors: { bg: "oklch(0.18 0.01 250)", accent: "oklch(0.7 0.16 250)" },
    }
    ```
  </Tab>
</Tabs>

Unknown keys and non-string values are ignored. If you omit `darkColors` entirely, dark mode falls back to a sensible bg/fg swap of `colors`.

### `customCss` and `customJs`

Inline CSS/JS injected into every page. Custom CSS loads **after** the theme stylesheet (so it overrides); custom JS runs **last**.

**Expected:** a string.

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { customCss: ".my-banner { color: rebeccapurple; }" }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { customCss: ".my-banner { color: rebeccapurple; }" }
    ```
  </Tab>
</Tabs>

### `customCssFile` and `customJsFile`

Like the above, but read from a file on disk. The bridge copies each to a content-hashed asset and links it.

**Expected:** a path string.

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { customCssFile: "./extra.css", customJsFile: "./extra.js" }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { customCssFile: "./extra.css", customJsFile: "./extra.js" }
    ```
  </Tab>
</Tabs>

### `hashCustomAssets`

Whether custom-asset filenames are content-hashed (for cache-busting). Set `false` to keep stable, unhashed names.

**Expected:** a boolean. Defaults to `true`.

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { hashCustomAssets: false }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { hashCustomAssets: false }
    ```
  </Tab>
</Tabs>

## LLM & copy page

### `copyPage`

The per-page "copy page" / "open in LLM" button (content pages only).

**Expected:** a boolean shorthand, or an object `{ enabled, actions }` where `actions` is any of `copy`, `view`, `claude`, `chatgpt`, `perplexity`. On by default with all actions.

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { copyPage: { enabled: true, actions: ["copy", "view", "claude"] } }
    // or simply: opts: { copyPage: false }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { copyPage: { enabled: true, actions: ["copy", "view", "claude"] } }
    // or simply: cleanJsdocTheme: { copyPage: false }
    ```
  </Tab>
</Tabs>

### `aiPrompt`

A custom instruction prepended when a page is handed to an LLM via the open-in actions.

**Expected:** a string.

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { aiPrompt: "You are helping a developer use My Library. " }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { aiPrompt: "You are helping a developer use My Library. " }
    ```
  </Tab>
</Tabs>

## Source files

<Callout type="info">
  These two are **JSDoc-only**. They live under `templates.default` (JSDoc's default-template namespace), not under `opts` or `cleanJsdocTheme`.
</Callout>

### `outputSourceFiles`

Whether to generate the syntax-highlighted source-file viewer pages and the `Source: file:line` links on members.

**Expected:** a boolean. Defaults to `true`; set `false` to suppress both.

```json5
templates: { default: { outputSourceFiles: false } }
```

### `sourceLinkToComment`

Where a `Source:` link lands: the symbol's **declaration** (default) or its documentation **comment**.

**Expected:** a boolean. Defaults to `false` (land on the declaration).

```json5
templates: { default: { sourceLinkToComment: true } }
```

### How assets are handled

You don't configure this, but it's worth knowing how local files referenced from your docs and README are processed. Any image you link with a relative or root-relative path — `![diagram](./assets/flow.svg)` — is copied into the site's `_assets/` directory under a **content-hashed** name (e.g. `_assets/flow.3de65053.svg`) and the reference is rewritten to point at it. The hash is derived from the file's bytes, so an unchanged file keeps a stable, cacheable URL across builds and a changed one cache-busts automatically. External (`https://…`) and `data:` URLs are left untouched.

`.svg` files get one extra step: their markup is **inlined** directly into the page rather than loaded through an `<img>`. That lets an SVG's own `[data-theme="dark"]` styles follow the in-page theme toggle — an `<img>`-loaded SVG can only see the operating system's color scheme, never your site's toggle.

Logos ([`siteName`](#sitename)) and [`customCssFile` / `customJsFile`](#customcssfile-and-customjsfile) ride the same content-hashed `_assets/` pipeline.

## Build

### `strict`

Escalate option diagnostics (a bad font name, an unknown key) from warnings to hard build errors.

**Expected:** a boolean. Defaults to `false`.

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { strict: true }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { strict: true }
    ```
  </Tab>
</Tabs>

### `progress`

Toggle the build's progress output (the per-stage spinners).

**Expected:** a boolean. Defaults to `true`.

<Tabs group="tool">
  <Tab label="JSDoc">
    ```json5
    opts: { progress: false }
    ```
  </Tab>

  <Tab label="TypeDoc">
    ```json5
    cleanJsdocTheme: { progress: false }
    ```
  </Tab>
</Tabs>
