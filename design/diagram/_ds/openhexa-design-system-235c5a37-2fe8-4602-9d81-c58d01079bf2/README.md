# Building with the OpenHEXA brand system

This design system ships **tokens + CSS classes, no JS components**. Everything you
build should use the CSS custom properties and `.oh-*` classes defined in
`styles.css` (which imports `tokens/tokens.css`). Read both files before styling —
they are the source of truth.

## Setup

Link `styles.css`; it loads the Mulish font-faces (weights 400/500/600/700/800) and
all tokens. No provider or wrapper is needed. Body text defaults to Mulish 16px
weight 500 in `--oh-navy-900` on white.

## Styling idiom

Style with the `--oh-*` custom properties — never hard-code brand hex values.

- Colors: `--oh-navy-900/800/700`, `--oh-pink-500/400`, `--oh-blue-600`,
  `--oh-periwinkle-400/100`, `--oh-coral-400`, `--oh-yellow-400`, `--oh-mint-300`,
  `--oh-gray-50/100/200/500`, `--oh-white`, `--oh-black`
- Semantic aliases (prefer these): `--oh-bg-dark`, `--oh-bg-light`,
  `--oh-surface-dark`, `--oh-text-on-light`, `--oh-text-on-dark`, `--oh-text-muted`,
  `--oh-action-primary`, `--oh-action-primary-hover`, `--oh-action-secondary`, `--oh-link`
- Type sizes: `--oh-text-13` through `--oh-text-56`; spacing: `--oh-space-1..40`
  (4px base); radii: `--oh-radius-sm/md/lg/xl/pill`; shadow: `--oh-glow-dark`
  (the ONLY shadow — this system is flat otherwise)

Ready-made classes: `.oh-btn` + `.oh-btn--primary|secondary|outline|lg|submit`,
`.oh-card` + `.oh-card--dark`, `.oh-input`, `.oh-form-panel`, `.oh-section` +
`.oh-section--dark|hero|subtle`, `.oh-eyebrow`, `.oh-lead`, `.oh-small`,
`mark.oh-highlight`.

## Hard rules

- All buttons are pills (`--oh-radius-pill`). Primary actions are pink, never blue;
  blue-600 is secondary. Outline buttons only on dark surfaces.
- Sections alternate dark navy (white text) and white/gray-50 (navy text). On dark,
  supporting copy sits at 80% opacity.
- Hero headings: uppercase, weight 800, with 1–3 words highlighted via
  `<mark class="oh-highlight">`. One pink accent per view.
- The gradient `--oh-gradient-brand` is decorative-border-only — never text or buttons.
- Hexagons are the brand motif; prefer hexagonal frames/accents over other shapes.

## Example

```html
<section class="oh-section oh-section--dark oh-section--hero">
  <p class="oh-eyebrow">Functionalities</p>
  <h1 style="text-transform: uppercase">
    <mark class="oh-highlight">Data integration</mark> platform
  </h1>
  <p class="oh-lead">Open-source platform to connect, store, manage, and analyze.</p>
  <a class="oh-btn oh-btn--primary oh-btn--lg" href="#">Get started for free</a>
</section>
```

---

# OpenHEXA Design System

Brand system extracted from openhexa.com (WordPress theme `bluesquare2025`, captured
2026-08-03) and rationalized: near-duplicate colors collapsed, scales regularized.
Where the live site is inconsistent, this document states the canonical choice and
notes what the site actually does.

OpenHEXA is an open-source data integration and analysis platform for public health,
made by Bluesquare. The visual identity is a dark navy base with a vivid pink primary
accent, hexagon motifs (the logo is a pink hexagon), and the Mulish typeface
throughout.

## 1. Color

### Brand palette

| Token | Hex | Use |
|---|---|---|
| `navy-900` | `#192041` | Primary dark. Hero/footer/section backgrounds, body text on light |
| `navy-800` | `#222948` | Elevated surfaces on navy (cards, modals, banners) |
| `navy-700` | `#353E66` | Borders/dividers on navy, secondary surfaces |
| `pink-500` | `#FF459A` | **Primary action.** CTAs, key highlights, brand accent |
| `pink-400` | `#FF62AA` | Hover/focus state of pink-500; inline text highlights on dark |
| `blue-600` | `#4361EE` | Secondary action (e.g. plan "Subscribe" buttons), toggles |
| `periwinkle-400` | `#7990FF` | Links, focus outlines, info accents (`blue-link` on the site) |
| `periwinkle-100` | `#CCD5FF` | Tints of periwinkle for chips/backgrounds |
| `coral-400` | `#FF7474` | Form panels and warm accent surfaces (demo-form background) |
| `yellow-400` | `#FFCD2D` | Occasional warm accent, badges |
| `mint-300` | `#74FFCF` | Rare accent; endpoint of the brand gradient |

### Neutrals

| Token | Hex | Use |
|---|---|---|
| `white` | `#FFFFFF` | Light backgrounds, text on dark |
| `gray-50` | `#F6F6F6` | Subtle section background on light |
| `gray-100` | `#F1F1F1` | Input backgrounds, muted surfaces |
| `gray-200` | `#E5E5E5` | Borders/dividers on light |
| `gray-500` | `#9CA3AF` | Muted/secondary text |
| `black` | `#000000` | Reserved; body text is navy-900, not black |

### Gradient

Brand gradient: `linear-gradient(90deg, #74FFCF, #EE469A)` — used sparingly as a
decorative border/edge treatment (e.g. hexagon frames), never for text or buttons.

### Usage rules

- Sections alternate: navy-900 with white text ↔ white/gray-50 with navy-900 text.
- Pink-500 is the one primary accent per view: the main CTA, or a highlighted word in
  a heading (the site wraps it in `<mark>` with pink color) — not both competing.
- Text on navy uses white at 100% for headings, ~80% opacity for supporting copy.
- Rationalization note: the live site defines buttons as blue-600 and then overrides
  them to pink via custom CSS ("Get Demo Button – Change to Pink"). Canonical: pink is
  primary, blue-600 is secondary. The logo's own pink is `#FF3E96`; treat that as the
  logo asset color and use pink-500 for everything else.

## 2. Typography

**Typeface: Mulish** (sans-serif) for everything, weights 400/500/600/700/800.
Self-hosted woff2. Fallback: `Mulish, sans-serif`.

| Style | Size/Line | Weight | Notes |
|---|---|---|---|
| Display (hero H1) | 48/60 (mobile 32) | 800 | Uppercase in heroes; pink `<mark>` highlight on 1–3 key words |
| H2 | 32/40 (mobile 24) | 800 | Section titles, often centered |
| H3 | 28/35 | 700 | Sub-section titles |
| H4 | 20/28 | 800 | Card titles |
| Lead | 20/30 | 500 | Hero subtitle, section intros; 80% opacity on dark |
| Body | 16/24 | 500 | Default body text |
| Small | 14/20 | 500 | Captions, meta, footer |
| Eyebrow | 13–14 | 700 | Uppercase, letter-spaced kicker above section titles (e.g. "FUNCTIONALITIES", "BENEFITS"), often periwinkle-400 or gray-500 |

Rationalized type scale (px): 13, 14, 16, 20, 24, 28, 32, 40, 48, 56.

## 3. Spacing & layout

- Base unit 4px; spacing steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 160.
- Page container: full-bleed up to `max-width: 1920px`, content padding 24px
  (16px on large screens per site, but 24px is the canonical gutter).
- Text/content measure inside sections: ~1200px.
- Vertical section rhythm: generous — 96px–160px padding on hero sections,
  64–96px between content sections.
- Grid: benefit/feature cards in 3-column grids on desktop, stacking to 1 column
  on mobile; feature rows alternate text-left/image-right and reverse.

## 4. Shape & elevation

| Token | Value | Use |
|---|---|---|
| `radius-sm` | 6px | Inputs, small elements |
| `radius-md` | 8px | Buttons that aren't pills, small cards |
| `radius-lg` | 16px | Cards, modals, media frames |
| `radius-xl` | 24px | Large feature panels |
| `radius-pill` | 9999px | All buttons and chips (signature shape) |

Elevation is minimal: flat surfaces, color contrast instead of shadows. The only
shadow in the system is a soft glow on dark surfaces:
`0 0 16px 0 rgba(255,255,255,0.08)`.

## 5. Components

### Buttons
All buttons are pills (`radius-pill`), padding `8px 24px` (large: `12px 32px`),
weight 500–700, white text, transition ~150ms ease.

- **Primary**: bg pink-500, hover pink-400. ("Get started for free", "Contact")
- **Secondary**: bg blue-600, hover 80% opacity. ("Subscribe now")
- **Outline**: transparent bg, 1px white border, white text — on navy surfaces
  ("Contact us" on Enterprise plan, language switcher).
- Arrow suffix (→) on inline/text CTAs ("Read more →", "Contact →").

### Inputs
Background gray-100, `radius-sm`, padding `10px 24px`, no border; focus outline
periwinkle-400. On coral form panels: white background inputs.

### Cards
- **On light**: white or gray-50, `radius-lg`, icon top (brand-colored line icon in a
  small rounded square), H4 title, body text.
- **On navy**: navy-800 surface, `radius-lg`, thin navy-700 or white/10% border,
  optional white-glow shadow. Pricing plan cards follow this.

### Header
Transparent over hero (hero is navy/imagery), white logo + white nav links (16px,
w500), pill outline language toggle, pink primary CTA at right. Dropdown for
"Integrations".

### Hero
Navy-900 background with darkened photographic/product imagery, uppercase display
heading with pink highlight `<mark>`, 20px lead at 80% white, primary CTA. Often a
floating product-UI collage on the right with hexagon accents.

### Footer
Navy-900, white text: logo, nav columns (uppercase link headings), social icon row
(brand-colored circular icons), copyright + legal link in pink.

### Forms (lead capture)
Embedded HubSpot forms presented on a coral-400 rounded panel (`radius-lg`+),
white labels, white inputs, dark navy pill submit button.

## 6. Iconography & motifs

- **Hexagon** is the brand motif: pink hexagon logo, hexagon-pattern background
  texture on light sections (`pattern.png`), gradient-bordered hexagon frames around
  imagery.
- Icons: Material-Symbols-style line icons (rounded, 2px stroke), single brand color
  (periwinkle-400 or pink-500) on contrasting surface.
- Check bullets: filled circular check icons, pink-500 on dark, periwinkle/blue on light.
- Imagery: real product screenshots in rounded frames; photos are dark-overlaid
  (navy multiply) so white/pink text stays readable.

## 7. Voice (for generated copy)

Short, benefit-led headlines ("Connect anything!", "Turning data into insights").
Sentence case for body, uppercase reserved for hero display lines and eyebrows.
Audience: public-health data teams, NGOs, ministries, UN agencies — credible and
practical, not salesy.
