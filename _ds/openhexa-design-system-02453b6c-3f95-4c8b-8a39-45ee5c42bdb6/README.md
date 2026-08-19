# OpenHEXA Design System

A design system extracted from the [OpenHEXA](https://openhexa.org) frontend codebase. OpenHEXA is an open-source data integration platform built for global health and humanitarian programs — it lets teams ingest data from sources like DHIS2, run reproducible Python/R pipelines, and share notebooks, datasets and web apps across collaborative workspaces.

> **Source attached:** `frontend/` — the OpenHEXA Next.js + Tailwind v4 frontend (read-only mount). The system below was reconstructed from that codebase; nothing was invented.

---

## Index

```
README.md               ← you are here
SKILL.md                ← skill front-matter, makes this folder portable to Claude Code
colors_and_type.css     ← all design tokens as CSS custom properties
assets/                 ← logos, product icons, favicon (copied from /public/images)
preview/                ← review cards (one per token / component family)
ui_kits/
  app/                  ← workspace product (sidebar, cards, pages)
    index.html
    *.jsx               ← Sidebar, Header, Buttons, Cards, Forms, etc
    README.md
slides/                 ← (not generated — no deck template was provided)
```

---

## The product

OpenHEXA is **one product** with several functional surfaces inside a single Next.js app (`/frontend`):

| Surface | Purpose | Entry route |
| --- | --- | --- |
| **Workspaces** | The core authenticated product. Each workspace has a Home, Files, Database, Datasets, Connections, Pipelines, JupyterHub, Apps, Settings. | `/workspaces/[slug]` |
| **Organizations** | A layer above workspaces — admins manage members and workspaces of an org. | `/organizations/[id]` |
| **Identity** | Login, signup, password reset, account settings, 2FA. | `/login`, `/signup`, `/user/account` |
| **Notebooks / Pipelines (legacy)** | Deprecated Airflow-era pages still reachable under "Deprecated features". | `/notebooks`, `/pipelines` |
| **MCP / Assistant** | An AI assistant and an MCP tool catalogue for the workspace. | `/workspaces/[slug]/assistant`, `/mcp` |

The user-facing **brand surface is the app itself** — there's no separate marketing site in this codebase, so the design system is built around the in-app patterns.

Tech stack: **Next.js 15 + React 18 + TypeScript + Apollo GraphQL + Tailwind CSS v4 + Headless UI + Heroicons**. The font is **Inter var**.

---

## Content fundamentals

How OpenHEXA writes copy, distilled from `frontend/public/locales/en/messages.json` and the UI source:

**Voice.** Clear, functional, neutral. OpenHEXA is a tool for analysts and data engineers; the copy doesn't try to be friendly or punchy. No exclamation marks. No marketing voice.

**Person.**
- **Imperative for actions on the UI's behalf:** "Create a workspace", "Add connection", "Run pipeline", "Send a new code".
- **Second person ("you/your") for things _about_ the user:** "You don't have access to any workspace yet.", "Enter your password", "Check your inbox and enter the token you received…"
- **Never "we"**, except in legal/admin contexts.

**Casing.** Sentence case for everything — buttons, headers, labels, menu items. Examples seen verbatim: "Account settings", "About workspaces", "Add custom connector", "Forgot your password?". Acronyms preserved as-is ("OTP", "JupyterHub", "DHIS2", "MCP").

**Tone shape.**
- Empty/error states are **informational, not apologetic**: _"No workspace available. You don't have access to any workspace yet. Contact your administrator or a member of the OpenHEXA team to get invited to a workspace."_ — three short sentences, no decoration.
- Destructive confirmations are **literal**: _"Are you sure you want to delete pipeline <name>?"_, _"Be aware that this action is irreversible…"_.
- Help links read like nav: _"About workspaces"_, _"Writing OpenHEXA pipelines"_, _"Editing the workspace homepage"_.

**Punctuation.**
- Ellipses (`…` or `...`) on async/in-progress states and search inputs: "Search workspaces...", "Send a new code".
- Question mark only on actual questions: _"Don't have an account?"_, _"Are you sure…?"_, _"Forgot your password?"_.
- No oxford comma rule enforced; copy is short enough that it rarely matters.

**Vocabulary the product owns.** Workspace, Pipeline, Run, Version, Template, Connection, Dataset, Database table, Bucket, Webhook, Notebook, Webapp, Organization, Member, Shortcut, Invitation, Token. Capitalize when referring to a UI section ("Pipelines"), lowercase when referring to the concept ("create a pipeline").

**Emoji.** Not used. Anywhere. (Confirmed: zero emoji in `messages.json` or component source.)

**Numbers / units.** Plural forms via i18next (`{{count}} row___one` / `___other`). Durations use compact forms `1d 4h 12m 30s`. Dates use Luxon's locale-aware formatting.

**Brand name.** Always **OpenHEXA** — one word, camel-cased. Never "Open Hexa" or "openhexa".

---

## Visual foundations

The look is **utilitarian, dense, dashboard-grade**. Inter, lots of grays, a single hot-pink accent, no gradients, no illustration, no decorative imagery. The chrome is dark; content surfaces are white.

### Color

| Role | Token | Hex | Where it lives |
| --- | --- | --- | --- |
| Brand accent | `--brand-pink` | `#FF3E96` | The logo body, active sidebar indicator strip, notification bubble |
| Primary action | `--blue-600` | `#2563EB` | Primary buttons (`bg-blue-600`), links |
| Secondary action | `--indigo-100` / `--indigo-700` | `#E0E7FF` / `#4338CA` | "Secondary" button variant |
| Danger | `--red-600` | `#DC2626` | Destructive buttons, error text |
| Chrome / sidebar | `--gray-800` | `#1F2937` | Sidebar, user menu |
| Body text | `--gray-800` | `#1F2937` | `html { @apply text-gray-800 }` in `globals.css` |
| Subtle text | `--gray-500/600` | `#6B7280` / `#4B5563` | Captions, labels, card metadata |
| Surface | `#FFFFFF` | — | Cards, popovers, header |
| Background | `--gray-50` | `#F9FAFB` | Optional muted background blocks |
| Progress bar (top of page) | `--brand-navy` | `#002C5F` | Nextjs route progress bar |

Pink is **never used as a fill for buttons or large surfaces** — only as a 4px-wide left accent strip on the active sidebar item, the logo body, and small alert dots. Color hierarchy is carried by blue (primary) + indigo (secondary), not pink.

### Typography

- Family: **Inter var** loaded as the default `font-sans` (`tailwind.config.js`).
- Body: 14–16px / `leading-normal` / `text-gray-800`.
- Headings via the `<Title level={1..6}>` component:
  - h1 → `text-2xl font-semibold` (24px / 600)
  - h2 → `text-xl font-semibold`
  - h3 → `text-xl font-medium`
  - h4 → `text-lg font-medium` (used as card titles)
  - h5/h6 → `text-md font-medium`
- Login uses a one-off `text-3xl font-extrabold` ("display") class.
- `font-mono` for codes/identifiers (e.g. `pipeline.code` in the PipelineCard).

### Spacing

4px base scale — Tailwind defaults are used directly (`px-2 py-2.5`, `gap-2`, `space-y-1`). Pages use `py-6 xl:py-8` and `px-4 md:px-6 xl:px-10 2xl:px-12` (`WorkspaceLayout.PageContent`). No custom spacing scale.

### Radii

- Buttons: `rounded-sm` (2px) — visibly squarish.
- Cards, popovers, badges: `rounded-md` (6px).
- Inputs: `rounded-md` (6px).
- Avatars, pill badges, status dots: `rounded-full`.
- Full-rounded "soft pill" badges (notification count) use `rounded-full` with `px-2.5 py-0.5`.

### Borders

- `border-gray-200` is the default border color everywhere (set in `globals.css` via `*, ::before, ::after { border-color: var(--color-gray-200, currentColor); }`).
- `border-gray-300` for input borders.
- `ring-1 ring-inset` with `ring-gray-500/20` on badges; `ring-1 ring-black/5` on floating popovers.

### Shadows / elevation

A short ladder, all soft:
- `shadow-xs` — resting cards, inputs.
- `shadow-md` — floating menus (user menu, workspace menu, search popover).
- `shadow-xl` — the floating Help "?" button (bottom-right).
- Hover lift on Cards: `shadow-xs` → `shadow-md`.

### Backgrounds, imagery, gradients

- **No background imagery, no full-bleed photos, no illustrations.** The product is data-first; everything sits on white or `gray-50`.
- **No CSS gradients** in component code. The single gradient anywhere is the white-fade overlay _inside the logo SVG_.
- **No textures, no grain.**
- Empty states use a single outline Heroicon (e.g. `InboxIcon`) in `text-gray-400`, centered, with a `text-lg font-semibold` heading and a `text-sm text-gray-500` paragraph below.

### Cards

`<Card>` is the primary content container:
```
bg-white  rounded-md  shadow-xs  px-4 py-3 lg:px-5 lg:py-4
hover:shadow-md   (when clickable via `href`)
```
Title is `<Title level={4}>` (`text-lg font-medium`), subtitle is `text-sm text-gray-500`, body text is `text-gray-600`. Cards have **no border** — they sit on white pages and rely on the shadow ladder.

### Buttons

Five variants, all from `core/components/Button/Button.tsx`:
- `primary` — `bg-blue-600` / `hover:bg-blue-700`, white text, `shadow-xs`, `rounded-sm`.
- `secondary` — `bg-indigo-100` / `hover:bg-indigo-200`, `text-indigo-700`.
- `white` — `bg-white border-gray-400` / `hover:bg-gray-50`.
- `outlined` — transparent border, `text-gray-800`, `hover:bg-gray-100`.
- `danger` — `bg-red-600` / `hover:bg-red-700`, white text.

Sizes go `sm → xxl` with consistent padding ratios. Focus ring is `focus:ring-2 focus:ring-offset-2` colored to match the variant. Disabled = `opacity-50 cursor-not-allowed`.

### Hover / press / focus

- **Hover (interactive rows):** `hover:bg-gray-100` (light surfaces) or `hover:bg-gray-700` (sidebar).
- **Hover (buttons):** one step darker — `blue-600 → blue-700`, `indigo-100 → indigo-200`.
- **Hover (cards):** shadow lift, no movement, no scale.
- **Press / active:** for the star-favorite button: `active:scale-75` (the only scale animation in the system).
- **Focus:** visible `focus:ring-2 focus:ring-offset-2` rings, in the variant's accent color.

### Animation

- Transitions are short and quiet: `transition-all`, `duration-75` (sidebar collapse), `duration-100` (menus enter), `duration-200` (favorite stars, auto-animate lists), `duration-75` (menus leave).
- Headless UI's `<Transition>` with `scale-95 → scale-100` + opacity for popovers and menus.
- `@formkit/auto-animate` is used for list reordering in the workspace picker.
- The animated progress bar at the top of the page is `nextjs-progressbar` colored `#002C5F`, height `3px`.
- **No bounces. No spring physics. No scroll-linked animation. No marquee.**

### Layout rules

- Fixed left sidebar (`w-16` collapsed, `w-64` open, `2xl:w-72`), dark `bg-gray-800`.
- Fixed top header (`h-16 bg-white border-b border-gray-200`) only when a page declares one. Sits to the right of the sidebar (`left-64 2xl:left-72`).
- Page content is `mx-auto px-4 md:px-6 xl:px-10 2xl:px-12 py-6 xl:py-8`.
- A floating circular **Help "?"** button sits fixed at `bottom-6 right-6` (`h-12 w-12 rounded-full bg-white shadow-xl`).

### Transparency & blur

- Almost none. Two semi-transparent uses: badge ring `ring-gray-500/20`, popover ring `ring-black/5`. **No backdrop-blur is used anywhere** in the workspace layout.

### Imagery color vibe

There's no photography or illustration to characterise. Product connector icons (DHIS2, GCS, S3, Postgres, IASO) are stored as their respective brand SVGs — used as small inline icons in connection cards, not styled to match each other.

---

## Iconography

OpenHEXA uses **@heroicons/react v2** as its only icon system. Both **outline** and **solid** styles are used:

| Style | When | Examples |
| --- | --- | --- |
| `@heroicons/react/24/outline` | Default — nav items, page actions, empty states. | `HomeIcon`, `BoltIcon` (pipelines), `FolderOpenIcon`, `CircleStackIcon` (database), `Square2StackIcon` (datasets), `SwatchIcon` (connections), `BookOpenIcon`, `GlobeAltIcon`, `Cog6ToothIcon`, `BookmarkIcon`, `QuestionMarkCircleIcon`, `UserIcon`, `ArrowRightStartOnRectangleIcon`. |
| `@heroicons/react/24/solid` | Toggles + filled states. | `StarIcon` (favorite filled), `PlusCircleIcon`, `ChevronDownIcon` (menu trigger). |
| `@heroicons/react/16/...` | Tiny inline icons (rare). | Used in dense menus. |

Sizes: `h-4 w-4` (tiny / inside buttons), `h-5 w-5` (sidebar, menu rows), `h-7 w-7` (collapsed sidebar), `h-12 w-12` (empty states), `h-16 w-16` (alert icons).

**No icon font, no emoji, no Unicode-as-icon.** The only Unicode glyph used as an icon-ish element is the literal "?" character inside the floating Help button.

**Branded product icons** (`/public/images/*.svg`) are real vendor logos — DHIS2, GCS, IASO, Postgres, S3, and `cog.svg`. They are used at small sizes inside connection cards and pickers. Country flags come from `react-world-flags`.

**Logo files:** `logo.svg` (mark only), `logo_with_text_black.svg` / `logo_with_text_white.svg` (lockup, ~630×186) — pink mark + black or white wordmark. Use on white or `gray-800` backgrounds respectively.

### Fonts substitution flag ⚠️

The original system relies on **Inter var** (the variable font that exposes `cv11` and `ss01` features). I'm loading it from `https://rsms.me/inter/inter.css` in `colors_and_type.css` rather than self-hosting — the local `frontend/` does not ship the woff2 file. If you need a fully-offline kit, please drop the Inter variable woff2 into `fonts/` and update the `@font-face`. **No font substitution has been made; only the delivery channel differs.**

---

## Caveats

- **Inter ttf/woff2 is not bundled.** It's loaded from the rsms.me CDN. See note above.
- **No marketing site.** OpenHEXA's user-facing brand surface is the app — there's no separate landing/docs design to model against.
- **No slide template was attached.** `slides/` is intentionally absent.
- **Pink as accent only.** Resist the urge to use pink as a primary button color in mocks; OpenHEXA never does.
