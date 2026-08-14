# SiGTRON English bilingual UI specification v1

> UI Designer — English localization stage 4  
> Last updated: 2026-08-13  
> Scope: bilingual visual extension for the existing static corporate prototype. This document specifies UI and handoff requirements only; it does not change the prototype, add routes, or approve English copy for public launch.

## 0. Authority, scope, and conflict decisions

This document extends [`design-system-v1.md`](design-system-v1.md). All existing color, spacing, grid, radius, shadow, motion, component, and asset rules remain authoritative unless a bilingual rule below explicitly replaces them.

Upstream authority, in order:

1. [`confirmed-facts-and-decisions.md`](../00-project/confirmed-facts-and-decisions.md)
2. [`legal-brand-relationship-approval-v1.md`](../01-brand/legal-brand-relationship-approval-v1.md)
3. [`english-brand-and-legal-localization-v1.md`](../01-brand/english-brand-and-legal-localization-v1.md)
4. [`english-website-copy-v1.md`](../02-content/english-website-copy-v1.md)
5. [`english-news-article-template-v1.md`](../02-content/english-news-article-template-v1.md)
6. [`english-payment-terms-handling-v1.md`](../02-content/english-payment-terms-handling-v1.md)
7. [`english-bilingual-ia-wireframes-v1.md`](../03-ux/english-bilingual-ia-wireframes-v1.md)
8. This UI extension

The controlled English copy is suitable for prototype and company review, but it is not word-for-word public approval. UI must not shorten qualifications, invent supporting claims, or visually promote a pending, planned, target, trial-operation, partner, legal, or platform-online statement beyond its recorded status.

### 0.1 Explicit replacements to the existing UI v1

The later bilingual UX establishes three intentional replacements:

1. **Header below `1120px`:** at `1119px` and below, both locales show only the SiGTRON Logo and Menu button. The former `768–1119px` Header treatment that retained `Customer sign-in` no longer applies. Sign-in moves into the Drawer.
2. **English Payment:** the English experience uses a `noindex, nofollow` translation-status page. The existing full Chinese clause page/dialog must not be translated, summarized, or presented as approved English terms. The English page has no ten-clause TOC, consent, payment, subscription, card, refund, or purchase UI.
3. **English News text:** headline and summary guidance is a content-density target only. No English title, summary, source, status qualification, or CTA is line-clamped or visually truncated.

These replacements apply to the bilingual/English extension only and do not authorize changes to Chinese legal content.

## 1. Visual system continuity

The bilingual site keeps the single approved direction:

> **Engineered Infrastructure Confidence** expressed through **Operational Clarity**.

- Continue the light corporate system: white and cool gray canvas, deep ink structure, brand blue interaction, and restrained semantic status colors.
- Continue the `4–8px` radius range, `1px` borders, flat panels, low-shadow interactive surfaces, and engineering-information layouts.
- Do not add gradients, glow, glass, aurora color, HUD grids, floating SaaS cards, flags, auto-translation icons, AI-generated facility imagery, fake dashboards, or decorative motion.
- English localization changes measure, wrapping, and layout allocation; it does not introduce a second visual theme, dark mode, font family, or component library.
- Status remains `text + structure + optional color`. Color never carries the only distinction.

### 1.1 Inherited tokens and bilingual additions

Use the existing tokens in `design-system-v1.md`. The following measurements are implementation aliases, not new visual colors:

```css
:root {
  --language-target: 2.75rem;       /* 44px */
  --language-current-width: 2.25rem;/* 36px compact reading box */
  --language-divider-height: 1rem;  /* 16px */
  --drawer-language-row: 3rem;      /* 48px */
  --measure-body-en: 68ch;
  --measure-lead-en: 62ch;
  --measure-legal-en: 62ch;
  --measure-article-en: 70ch;
  --measure-heading-en: 24ch;
}
```

The minimum interactive target remains `44 × 44px`. The `36px` current-language width is permitted only because it is non-interactive; its height remains `44px`.

## 2. Responsive frame and English typography

### 2.1 Breakpoints and containers

| Test width | Mode | Header | Grid / side padding |
| --- | --- | --- | --- |
| `320px` | Minimum mobile | Logo + Menu, `64px` high | 4 columns, `20px` sides |
| `390px` | Primary mobile frame | Logo + Menu, `64px` high | 4 columns, `20px` sides |
| `768px` | Tablet start | Logo + Menu, `64px` high | 8 columns, `32px` sides |
| `1119px` | Last compact width | Logo + Menu, `64px` high | 8 columns, `32px` sides |
| `1120px` | Exact desktop start | Full nav + `中 | EN` + sign-in, `72px` high | 12 columns, minimum `40px` sides |
| `1440px` | Primary desktop frame | Full nav + `中 | EN` + sign-in, `72px` high | 12 columns, max `1280px` content |

Do not introduce an intermediate breakpoint to keep part of the desktop Header. The switch is atomic: full desktop Header at `1120px`; Logo + Menu at `1119px`.

### 2.2 English type scale at review widths

Use fluid CSS between the listed values. The values are visual QA targets, not fixed-height boxes.

| Type | `320` | `390` | `768` | `1119` | `1120` | `1440` | Line height |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Home display H1 | 40px | 42px | 48px | 54px | 56px | 64px | `1.10–1.14` |
| Inner-page H1 | 38px | 40px | 44px | 48px | 52px | 56px | `1.12–1.18` |
| H2 | 30px | 32px | 36px | 40px | 40px | 44px | `1.18–1.24` |
| H3 | 22px | 22px | 24px | 24px | 26px | 26px | `1.28–1.35` |
| Lead | 17px | 17px | 18px | 18px | 19px | 19px | `1.62–1.72` |
| Body | 16px | 16px | 17px | 17px | 17px | 17px | `1.70–1.80` |
| Small / metadata | 14px | 14px | 14px | 14px | 14–15px | 14–15px | `1.55–1.68` |
| UI / nav | 15–16px | 15–17px | 15–17px | 15–17px | 15px | 15–16px | `1.30–1.45` |

- Every page has one H1. English H1 may occupy two or three lines on desktop and three or more on mobile.
- No heading, card, button, row, disclosure, Footer group, or article header has a fixed height.
- Use sentence case exactly as supplied. Do not use `text-transform` on `SiGTRON`, `SignalPro`, company names, service names, or supplied headings.
- Eyebrows remain `13px`, `650–700`, `0.08em`; they may wrap at a word boundary but are never shrunk below `13px` to force one line.
- Body text is left aligned. Do not justify text or tighten tracking to fit English.

### 2.3 Line length and wrapping rules

| Content | Preferred maximum measure |
| --- | --- |
| Hero / section lead | `58–62ch` |
| General body copy | `60–72ch`; default `68ch` |
| Dense legal / status copy | `54–62ch` |
| H1 / H2 | about `20–24ch`, with natural exceptions for controlled copy |
| Card body | about `30–38ch` within the available column |
| News article body | `65–72ch`; default `70ch` |
| Footer introduction | about `42–50ch` |

Implementation rules:

- Set `<html lang="en">` on English pages and `lang="zh-Hant"` on Traditional Chinese pages. Inline alternate-language names retain their own `lang`.
- `hyphens: auto` may be applied to English body, article, disclosure, and long status copy only when the element inherits `lang="en"`. Keep `hyphens: none` on H1–H4, buttons, navigation, language names, brand names, product names, email addresses, URLs, codes, and legal entity strings.
- Do not insert manual hyphens or `<br>` elements to force an English screenshot. Do not use `word-break: break-all`.
- Use normal word wrapping first. Use `overflow-wrap: anywhere` only for URLs, email-like strings, and an otherwise unbreakable approved identifier.
- `SignalPro Technology CO., LTD.` may wrap at its natural spaces, but it must not be abbreviated, altered, or forced onto one line.
- Keep compact units such as `72 nodes`, `Q4 2026`, and `800 MW` together only when doing so does not cause overflow. The complete qualification remains directly adjacent.
- `text-wrap: balance` may progressively enhance H1/H2, and `text-wrap: pretty` may enhance leads. Layout must remain correct without either property.
- Never use line clamp, ellipsis, hidden overflow, tooltip-only continuation, hover reveal, accordion, carousel, or `Read more` to conceal required English copy.

## 3. Header, primary navigation, and language selection

### 3.1 Desktop Header at `1120px+`

Order:

```text
SiGTRON Logo | five locale navigation links | 中 | EN | Customer sign-in
```

The English navigation order is fixed by the bilingual UX:

1. `AIDC Delivery`
2. `AI Cloud Services`
3. `Project Footprint`
4. `News & Events`
5. `About SiGTRON`
6. `Customer sign-in` as the sole utility action

All nav labels remain one line. Do not truncate them, reduce nav text below `15px`, convert labels to icons, hide one item, or move the language selector into a dropdown at `1120px`.

#### Exact `1120px` fit budget

The available Header container is `1040px` with `40px` side padding. Use this budget:

| Region | `1120px` specification | `1440px` specification |
| --- | --- | --- |
| Horizontal Logo asset | `154 × auto` visible width; about `28px` high | `174 × auto`; about `32px` high |
| Logo → nav | `16px` minimum | `32–40px` |
| Nav type | `15px / 600`, no wrap | `15–16px / 600` |
| Gap between five nav links | `8px` | `14–20px` |
| Nav → language | `12px` | `20–24px` |
| Language group | about `93 × 44px` | same |
| Language → sign-in | `12px` | `16px` |
| Customer sign-in | minimum `124 × 44px`, `12px` inline padding | minimum `128 × 44px`, `14px` inline padding |

Use `flex: 0 0 auto` for Logo, language selector, and sign-in. Use `white-space: nowrap` on individual nav labels, not on the whole Header. The nav region may use `min-width: 0`, but its text must not shrink, clip, or wrap. If a future approved label exceeds this budget, the content owner and UX Architect must approve a new label or breakpoint; Frontend must not silently reduce type or remove controls.

### 3.2 Desktop compact `中 | EN` selector

The display order is always `中`, separator, `EN`; it does not reverse by locale.

**Dimensions**

- Group: inline grid, approximately `93px` wide, `44px` high, overflow visible.
- Current language: non-link `36px` minimum width × `44px` high reading box.
- Alternate language: real link, `44 × 44px` minimum target.
- Separator: `1px × 16px` border or visible `|`, with `6px` inline breathing room; `aria-hidden="true"`.
- Visible text: `15px / 700` current; `15px / 600` alternate.
- Do not draw an enclosing pill, segmented-control capsule, flag, globe, translate icon, or popover chevron.

**Semantic contract**

- Group accessible name: English `Language selector`; Chinese `語言選擇`.
- Current English text: visible `EN`; accessible text `English, current language`; non-link with `aria-current="page"`.
- English alternate: visible `中`; accessible name `Switch to Traditional Chinese`; `lang="zh-Hant"`; `hreflang="zh-Hant"`; exact counterpart `href`.
- Current Chinese text: visible `中`; accessible text `繁體中文，目前語言`; non-link with `aria-current="page"`.
- Chinese alternate: visible `EN`; accessible name `切換至 English`; `lang="en"`; `hreflang="en"`; exact counterpart `href`.
- Language `aria-current` is scoped to language navigation and does not replace primary-nav `aria-current`.

**Visual and interaction states**

| State | Visual rule | Accessibility rule |
| --- | --- | --- |
| Current | brand ink/blue, `700` weight, persistent `2px` underline directly beneath abbreviation | non-link, `aria-current="page"`, not in Tab order |
| Alternate default | text color, `600` weight, no underline | real link with exact `href`, `lang`, `hreflang`, and localized accessible name |
| Hover | `--color-brand-100` flat background, brand-blue text, `4px` radius | no movement or delayed navigation |
| Focus-visible | `3px --color-focus` outline, `2px` offset; complete ring visible outside group | Tab then Enter works without JavaScript |
| Pressed | `#D7EAF4` background and brand-700 text | normal link activation |
| Visited | same as default; no purple visited treatment | destination remains understandable from text |
| Missing article counterpart | plain non-link abbreviation with a visible strike and no hover/focus surface | accessible text states `[Language] version not available for this article`; never links to Home, index, 404, or machine translation |

The current state is identifiable by weight plus underline, not color alone. A missing counterpart is visibly non-interactive and must not look like a disabled button.

### 3.3 Primary navigation current state

- Current page/location uses `700` weight plus a persistent `2px` underline and `aria-current`; brand blue is supplementary.
- Hover uses color only because it is transient. Hover never replaces the persistent current marker.
- Focus-visible uses the global `3px` outline and must not be clipped by the sticky Header.
- `News & Events` is current on the News index and article pages. `AI Cloud Services` is current on the English Payment translation-status page.
- The language-current indicator and primary-nav current indicator must not be combined into one accessible navigation group.

### 3.4 Compact Header below `1120px`

At `1119`, `768`, `390`, and `320px`, Header contains only:

```text
SiGTRON Logo | Menu
```

- Header height `64px`.
- Side padding: `32px` at `768–1119`; `20px` below `768`.
- Logo width: `154–166px` at tablet, `146–154px` on mobile. Preserve aspect ratio and transparent safe area.
- Menu target: `44 × 44px`, `6px` radius, `1px` strong border. Visible three-line icon may be decorative; accessible name is localized (`Open site menu` / `開啟網站選單`).
- No desktop nav, language abbreviation, sign-in, or business CTA remains in the compact Header.
- A small-screen `<noscript>` counterpart link may appear adjacent to or immediately below the Header only when required by the UX no-JavaScript fallback. It must not cause a third persistent Header control when JavaScript is available.

### 3.5 Drawer and full language names

**Frame**

- Width: `min(360px, 100vw)` at `768–1119px`; `100vw` below `768px`.
- Height: `100dvh`; opaque white; right-side entry; existing flat backdrop `rgba(7,27,47,.48)`; no blur.
- Header: `64px`; Close target `44 × 44px`.
- Content padding: `20px` inline; `12px` top; bottom `max(24px, env(safe-area-inset-bottom))`.
- Primary nav rows: `56px` minimum, `17px / 600`, bottom divider.
- `Customer sign-in`: one full-width outlined control, `48px` minimum height.

**Order**

```text
Close
five primary links
divider
Customer sign-in
divider
Language / 語言
繁體中文 [Current / 目前語言 when applicable]
English [Current / 目前語言 when applicable]
```

**Language group**

- Use a separate `<nav>` with localized accessible name, not a `<select>`.
- Group label: `13px / 700`, muted, `0.06em`; margin `20px 0 8px`.
- Each language row: `48px` minimum height, full available width, `16px / 600`.
- Current row is non-link, not focusable, `700` weight, `3px` left structure line, and visible `Current` or `目前語言` text. The text label, not color, establishes the state.
- Alternate row is a real link with a `44px` minimum target. Hover uses the flat brand-100 surface. Focus-visible uses a complete `3px` brand outline with `2px` offset.
- Full names always remain visible: `繁體中文` with `lang="zh-Hant"`; `English` with `lang="en"`.
- Keyboard order: Close → five primary links → Customer sign-in → alternate language. The current language remains in reading order but is not a Tab stop.
- Keep the existing Focus Trap, Escape, backdrop close, scroll lock, focus return, breakpoint cleanup, and reduced-motion behavior.

## 4. Reusable English component behavior

### 4.1 Buttons and text links

- Default buttons: `44px` minimum height; use `48px` for full-width mobile actions. Horizontal padding `20px` desktop and `16px` mobile.
- Button text is `15–16px / 700 / 1.3`. Do not use `white-space: nowrap` globally.
- At `390px` and `320px`, approved long labels may form two centered lines. Increase height naturally; never reduce target size or font size.
- CTA groups stack full width below `768px`; use `12px` vertical gap. At `768–1119px`, two buttons may remain inline only if each has at least `44px` height and complete copy.
- `Customer sign-in` remains one line because it is a compact utility label. Other business CTAs may wrap.
- Text links retain visible underline where their purpose could otherwise be mistaken for body text, including the Payment status entry, source links, phone, email, and Footer language links.
- Disabled styling is not used for missing pages or missing translations. Use clear non-interactive status text instead.

### 4.2 Cards, matrices, and panels

- Cards have no fixed content height and no text clamp. Grid rows may be unequal when English copy requires it.
- Desktop News and service layouts may use equal column tracks, but internal content remains natural height.
- A linked card has one focusable destination. The title link may extend the hit area; repeated image/title/CTA links are not permitted.
- Hover changes border/background only. No translate, scale, glow, image zoom, or reveal.
- Status and disclosure panels use the existing `4–8px` radii, flat surface, `1px` border, and optional `3px` structural line.
- Missing imagery removes the Figure or uses the approved News type plate. Do not add a generated or generic AI image to equalize card heights.

### 4.3 Tables, definition rows, and status labels

- Use `<dl>` for label/value status panels and Fact Panels; use a semantic `<table>` only for genuine row/column comparisons.
- At `1120px+`, a definition row may use label `3/12` and value `9/12`, or the component-specific ratio in UI v1.
- At `768–1119px`, keep two columns only when the label receives at least `12rem` and the value remains at least `28ch`. Otherwise stack label over value.
- At `390px`, `320px`, and reflowed zoom widths, every row stacks label → value with `6–8px` gap and `16–20px` vertical padding.
- No horizontal table track, clipped cell, reduced `12px` body text, or sideways scrolling is permitted for core content.
- Status badges are rectangular, text-led, and may wrap to two lines. They use a border plus the full visible status label; color is supplementary.
- `72 nodes`, `Q4 2026`, `Approximately 800 MW`, `Platform online`, and all qualifications remain in the same component/reading region.

## 5. Page and component matrix by target width

### 5.1 `1440px`

- Use the full `1280px` container and 12-column grid.
- Header uses the relaxed desktop spacing in §3.1.
- Hero uses the approved `7/12 + 5/12`; long English H1 may use two or three lines without changing the visual order.
- Standard service/News grids use three columns. News article uses body `8/12` + Fact Panel `4/12` with `56–64px` gap.
- Contact uses form/disclosures `8/12` + preparation guidance `4/12`; the three mandatory disclosures remain before the first field in DOM and reading order.
- Footer uses 12 columns: brand `4`, Services `2`, Company `2`, Contact `2`, Language `2`. Footer Bottom uses legal line `minmax(0,1fr)` + `Powered by SignalPro` auto.
- Payment status uses a maximum `62ch` lead and flat review-status panel. There is no terms TOC or clause column.

### 5.2 Exact `1120px`

- Use the exact Header fit budget; all five English nav labels, selector, Logo, and `Customer sign-in` remain on one line.
- Keep desktop content structures but use the tighter `15px` nav, `8px` nav gaps, `154px` Logo, and `12–16px` inter-region gaps.
- Three-column grids are allowed only when each English card has a usable text measure. A dense matrix may use two columns without changing source order.
- Footer retains five conceptual groups, but the brand introduction may span a full first row if any Contact/Language column becomes narrower than about `10rem`. Do not shrink Footer type.
- Payment status definition rows may remain label/value only if each value has at least `28ch`; otherwise stack.

### 5.3 `1119px`

- Header immediately becomes Logo + Menu. No sign-in, compact language selector, or partial nav remains.
- Use the 8-column tablet grid. Hero may remain `5/8 + 3/8` only if the English visual panel and text have adequate width; otherwise stack in DOM order.
- News grids use two columns. The third Home item starts the next row.
- Article may use `5/8 + 3/8` only when the Fact Panel remains at least `17.5rem`; otherwise stack Figure → Fact Panel → body.
- Footer uses two columns with brand introduction spanning the first row. Contact and Language may each occupy a full column/row as needed.
- Contact is single-column unless both the main form and preparation panel retain readable measures; disclosures always precede fields.

### 5.4 `768px`

- Header is Logo + Menu; Drawer is `360px` wide.
- Use the 8-column grid with `32px` sides, but long English page sections stack where needed.
- News Filters wrap into multiple rows; no horizontal scroll. News grids use two columns.
- News article stacks and places Fact Panel before body; do not force a narrow side rail at this boundary.
- Payment status rows stack label over value. Contact disclosures, preparation guidance, fieldsets, confirmation, and status are single-column.
- Footer uses two columns; the brand introduction and legal bottom each span all columns.

### 5.5 `390px`

- Use the `40/32/22/17/16px` mobile type targets in §2.2 and `20px` side padding.
- Header is Logo + Menu; Drawer is full width. Full language names and the visible current marker remain complete.
- Hero, cards, matrices, process rows, tables, Contact, Payment status, News, article, and Footer are single-column.
- CTA buttons stack full width and may grow to two lines.
- News cards show full title, summary, source, status, and CTA; no clamp.
- Footer order is brand → Services → Company → Contact → Language → legal line → `Powered by SignalPro`.

### 5.6 `320px`

- Preserve `20px` sides, leaving about `280px` content width. Do not reduce to a narrower readable column merely to preserve decorative margins.
- No page-level horizontal scroll. Focus outlines remain fully visible inside the viewport.
- H1 and H2 grow vertically; buttons, badges, table rows, Payment banner, Contact warnings, News source lines, email, legal name, and Footer all wrap naturally.
- Drawer uses `100vw`; its current-language marker and alternate link do not collide with the safe-area inset.
- Long email/URL strings use `overflow-wrap: anywhere`; ordinary English words and brand names do not break character by character.
- `Powered by SignalPro` may move to its own row, but the words and supplied symbol remain one secondary group.

### 5.7 `200%` zoom / reflow

Treat browser zoom as a smaller effective CSS viewport, not as a scaled desktop screenshot:

- A `1440px` browser at `200%` commonly reflows near `720` CSS pixels and therefore uses Logo + Menu, full-width Drawer, and stacked page structures.
- A `1120px` browser at `200%` commonly reflows near `560` CSS pixels and also uses the compact Header.
- A `768px` browser at `200%` commonly reflows near `384` CSS pixels.
- Do not lock Header, dialog, table, Footer, or card widths in device pixels in an attempt to preserve the unzoomed desktop composition.
- Header/Drawer, Payment status rows, Contact disclosures and error summary, Footer legal line, and News Fact Panel must remain complete, operable, and free of overlap.
- Zoom must not reveal a page-level horizontal scrollbar at an effective width of `320px` or more. Text remains selectable and no control falls below its `44px` target.

## 6. Component-specific bilingual layouts

### 6.1 Footer language and legal groups

English Footer order:

```text
SiGTRON brand introduction
Services
Company
Contact
Language selector
© [year] SignalPro Technology CO., LTD. | Unified Business No. 95464633
Powered by SignalPro
```

- Add a real `<nav>` with localized accessible name (`Language selector` / `語言選擇`).
- Use full visible names, not `中 | EN`, in the Footer. Current language is non-link and shows a visible `Current` / `目前語言` marker plus weight or a structural line. Alternate language is a normal underlined link.
- Each alternate link has at least `44px` height, localized accessible name, `lang`, `hreflang`, and exact counterpart `href`.
- English Contact displays `[Official English postal address pending company confirmation]`. Do not translate the Chinese address, add a postcode/country, or invent an international phone format.
- Legal text is `13–14px / 1.65`, never reduced by opacity. It may wrap across multiple lines.
- `Powered by SignalPro` follows the legal line, remains no larger than it, and does not become a partner badge or technology endorsement.
- Footer language links remain available with JavaScript disabled.

### 6.2 English Payment translation-status page

This is a review/status document, not an English terms page.

Required visual order:

```text
Header — AI Cloud Services current
mandatory legal-status banner before H1
eyebrow
H1 — English legal translation pending
lead
Current review status <dl>
Chinese source status / approved source link if one exists
No consent or transaction section
general contact + do-not-email-card-details warning
Back to AI Cloud Services
Footer + language group
```

**Visual rules**

- Banner: maximum `62ch`; cool-gray surface; `1px` strong border; `3px` ink/brand structural line; `16px / 1.7`; no amber trial color, error red, icon, glow, or dismiss control.
- H1 and lead follow the inner-page type scale and may wrap naturally.
- Review-status panel: white surface, `1px` border, `8px` radius, no shadow. At `1120/1440`, label/value rows may be `3/9`; at `768/390/320` they stack.
- Pending values such as `[Legal input required]` are plain visible text, not badges, skeletons, tooltips, or disabled inputs.
- Chinese source: show one underlined normal link only after company/legal supplies and approves the exact URL, version, status, and effective date. Before then show the controlled pending paragraph and no disabled link/CTA.
- Language navigation may link to a Chinese review view only when the exact counterpart exists; its accessible label must state that legal review is pending and must not imply Chinese has controlling authority.
- Set `noindex, nofollow`; exclude the page from sitemap and public `hreflang` pairing.
- Do not render translated clauses, clause summaries, TOC, consent checkbox, card fields, payment steps, plan/price cards, subscription actions, refund actions, order actions, or a transaction dialog.

### 6.3 Contact

Visual and DOM reading order is fixed:

```text
Contact H1 / lead
Information to prepare
Project inquiry H2 / lead
contracting entity disclosure
static prototype / do-not-enter-personal-information warning
fallback phone and email
fieldsets 01–04
prototype-only confirmation
Check fields — prototype only
no-data-submitted status
```

- The two disclosure panels are distinguished by visible headings/labels and border structure, not color alone.
- Both use `15–16px / 1.7`, `14–16px` padding, natural height, and at least `12px` separation. They are never collapsed, put in a modal, or moved below the form.
- Fallback phone and email are underlined text links with `44px` targets. Do not add response-time or hours copy.
- Field controls are `48px` minimum height; Textarea is `144px` minimum. Labels remain visible.
- Error uses border + adjacent message + focused Error Summary. Error is not color-only.
- The prototype checkbox label wraps beside/below a `20 × 20px` native control within a `44px` target. It is not privacy or contract consent.
- At `390/320`, fieldsets and buttons are full width. At `200%`, the Error Summary, field error, and confirmation remain visible without horizontal scrolling.
- Completion uses the exact no-send status copy and a flat status row, not a green success toast.

### 6.4 News index, cards, zero states, and article

**Index and Home cards**

- `1440/1120`: three columns; `1119/768`: two columns; `390/320`: one column.
- English card order: category + absolute date → full title → full summary → source/publisher → CTA.
- Title `20px / 1.4 / 700`; body `15–16px / 1.7`; source `14px / 1.6`. No line clamp or fixed card body height.
- Filters wrap at all compact widths; each button is at least `44px` high. Active filter uses filled brand surface plus `aria-pressed="true"` and stronger weight/border; it is not color-only.
- Whole-page English zero state removes Filters, result count, cards, and pagination. Category zero state retains a clear `View all News & Events` action.
- Home shows zero or the latest `1/2/3` English-approved items. It does not duplicate cards or fill gaps with Chinese/unapproved content.

**Article**

- `1440/1120`: article body maximum `70ch` with `8/4` Fact Panel when it remains readable.
- `1119`: `5/3` is optional only when the Fact Panel is at least `17.5rem`; otherwise stack.
- `768/390/320` and zoomed reflow: Article Header → optional approved Figure → Fact Panel → body → return link → CTA.
- Fact Panel uses `<aside>` + `<dl>`, top `3px` brand structure line, `1px` border, `8px` radius, no shadow. Values wrap and unused fields are removed.
- Article H1, lead, source, figure caption, body, quote, and Fact Panel are never clamped.
- An article without an approved counterpart uses non-link language-unavailable text. It does not redirect to an index or automatic translation.

### 6.5 Home, AIDC, and AI Cloud long-copy safeguards

- Home status overview never separates `72 nodes`, `Q4 2026`, or `Approximately 800 MW` from their status and complete qualification.
- AIDC matrices retain source order and become one column below `768px`; they do not become tabs, accordions, carousels, or horizontal tables.
- AI Cloud service areas use one shared bordered frame. Platform-online status stays in a separate text-led Status Row with account/project limitations.
- The Payment link label may wrap and remains visually secondary to Customer sign-in and the enterprise inquiry path.
- INFINITIX remains a low-hierarchy adjacent disclosure with no Logo, badge, Hero placement, or co-brand lockup unless later approval explicitly changes that input.

## 7. Bilingual assets and Logo preservation

| Asset | Bilingual use |
| --- | --- |
| `sigtron-logo-horizontal.png` | Header and Footer primary brand. Use the same supplied raster in both locales; preserve aspect ratio, color, transparency, and safe area. |
| `sigtron-logo-stacked-tagline.png` | About only when retained as an approved brand image. Do not translate, crop out, redraw, or replace the embedded Chinese tagline. English accessible name: `SiGTRON brand mark`. |
| SignalPro supplied assets | Footer secondary `Powered by SignalPro` only. Prefer the supplied symbol plus visible fixed text. Do not edit the company lockup to resolve its `Co., Ltd.` / `CO., LTD.` case difference. Legal HTML copy uses the approved `SignalPro Technology CO., LTD.`. |
| `asia-project-pipeline-map.png` | Shared static map. Localize adjacent legend, alternative text, and caption in HTML. Do not reposition pins or add deployment implications. |
| `news-editorial-banner.svg` | Decorative shared News banner with `alt=""`; it does not depict a real site, device, or event. |
| 3D concept video / still | Retain the approved English caption `3D-rendered concept video — not footage of the site.` in the same reading region. |

Global asset rules:

- Do not use CSS filters, recolor, invert, stretch, reconstruct, or typeset a Logo in HTML.
- Do not create an English Logo/tagline, bilingual Logo lockup, flag asset, translation badge, or partner co-branding without company approval.
- An informative image containing Chinese copy requires an approved English variant or omission. The official Logo exception remains an unmodified brand image, not translated content.
- English root pages use shared `../assets/`; English nested News articles use `../../assets/`. Do not duplicate an `/en/assets/` tree.

## 8. Interaction, accessibility, and motion

- Normal text contrast is at least `4.5:1`; large text and non-text UI follow WCAG AA. Do not reduce Footer/status text with opacity.
- Every interactive target is at least `44 × 44px`; complete Focus Ring is visible and not clipped by overflow or the sticky Header.
- Language, nav, filter, status, error, current, and unavailable states each use visible text and/or border/underline/weight in addition to color.
- Skip link, landmarks, heading hierarchy, form labels, semantic dates, `dl` label/value relationships, and locale-appropriate accessible names remain intact.
- Anchor targets use the UX scroll margin (`88px` desktop; at least `76px` compact) and are not hidden by Header.
- Language links work as normal navigation with JavaScript disabled. No cookie, `localStorage`, browser-language redirect, translation API, or i18n library is introduced.
- Drawer motion remains `200–250ms` open / `160–200ms` close using transform/opacity only. Language navigation itself has no delayed route animation.
- `prefers-reduced-motion: reduce` removes transform, smooth scroll, and non-essential transition. Content is visible before and without JavaScript.

## 9. Component and screenshot handoff

### 9.1 Component inventory for Frontend

The production company should receive one annotated component sheet with these IDs and states:

| ID | Component | Required states |
| --- | --- | --- |
| `NAV-EN-01` | Desktop English Header | default, page current, anchor current, alternate-language hover/focus, scrolled |
| `LANG-01` | Compact `中 | EN` | Chinese current, English current, alternate focus, missing article counterpart |
| `DRAWER-01` | Compact Header + Drawer | closed, open, primary current, alternate-language focus, current-language non-link |
| `FOOTER-LANG-01` | Footer language group | each locale current, alternate focus, unavailable article language |
| `TYPE-EN-01` | English heading/body set | H1 two/three-line, H2, lead, body, metadata, long legal name |
| `BUTTON-EN-01` | CTA and text link | default, hover, focus, pressed, two-line mobile label |
| `STATUS-EN-01` | Status row / badge | live, trial, target, planning, long qualification |
| `TABLE-EN-01` | Definition/table row | desktop columns, compact stacked row, long email/URL |
| `PAYMENT-STATUS-01` | Translation-status page | source pending, approved-source-link slot, no-transaction warning |
| `CONTACT-EN-01` | Contact disclosures/form | initial, error summary, confirmation error, validation complete/no-send |
| `NEWS-CARD-EN-01` | News card | with approved image, approved no-image type plate, focus, long title/source |
| `NEWS-ZERO-EN-01` | News empty states | whole page zero, category zero, Home 0/1/2/3 approved items |
| `ARTICLE-EN-01` | News article | with/without Figure, paired/unpaired language, Fact Panel desktop/mobile |

Component annotations must show dimensions, text style/token, padding/gap, border/radius, accessible name/state, breakpoint change, and which copy fields may grow. Do not annotate fixed heights for text-bearing components.

### 9.2 Screenshot / reference-frame matrix

Use lossless PNG at 100% browser zoom unless the filename includes `zoom-200`. Capture the entire component plus enough surrounding context to verify spacing and focus. Suggested naming:

```text
ui-[locale]-[page-or-component]-[width]-[state].png
```

Required frames:

1. Header in `zh-Hant` and `en` at `1440` and exact `1120`, including selector current state and one alternate-language Focus frame.
2. Header closed at `1119`, `768`, `390`, and `320`; Drawer open at `768`, `390`, and `320`, including full language group and focus state.
3. English Home, AIDC, AI Cloud, Contact, News index, and News article at `1440` and `390`.
4. Footer at `1120`, `768`, `390`, and `320`, including pending English address, language group, legal line, and `Powered by SignalPro`.
5. Payment translation-status page at `1440`, `768`, `390`, and `320`; include source-pending state, never translated clauses.
6. Contact initial, field-error summary, prototype-confirmation error, and validation-complete/no-send states at `390`; initial and error at `1440`.
7. News whole-page zero, category zero, Home `1/2/3`-card states, article with approved counterpart, and article without counterpart.
8. `zoom-200` frames for Header/Drawer, Payment status rows, Contact warnings/error summary, Footer legal/language area, and News Fact Panel.

Each screenshot review note records: viewport CSS pixels, zoom, locale, page/state, browser, horizontal-scroll result, keyboard-focus target, and known pending content. Placeholder or controlled review copy must be visibly identified; no screenshot may be presented as company/legal approval.

## 10. Frontend landing rules

1. **Header / language:** add desktop `中 | EN`; change `1119px` and below to Logo + Menu only; add the Drawer and Footer full-name language groups. Keep exact counterpart links in HTML.
2. **Text / reflow:** apply English measures, natural-height components, no clamp, long-string safeguards, and the exact breakpoint matrix. Do not use JavaScript for copy fitting.
3. **Payment:** implement only the controlled English translation-status page, `noindex, nofollow`, source-pending/link slot, and no-transaction content. Do not port the Chinese clause dialog or TOC into English.
4. **Contact:** preserve the three disclosures before fields, static `type="button"` validation action, no-send status, and full mobile reflow.
5. **News:** render only English-approved records; implement zero/category/1–3-card states; keep Fact Panel before body on compact widths; render language links only for approved ledger pairs.
6. **Footer / assets:** localize visible/footer copy while retaining official assets unchanged. Keep pending English address visible until approved input exists.
7. **Progressive enhancement:** desktop and Footer language links work without JavaScript; Drawer, filter, and local Contact validation remain enhancements, never the source of content or legal state.
8. **No scope expansion:** use semantic HTML5, existing CSS system, and minimum vanilla JavaScript only. Add no framework, package, API, CMS, font, backend, database, authentication, automatic translation, or new factual/brand/legal content.

## 11. Acceptance tests

### A. Header and language selection

- [ ] At `1440px` and exact `1120px`, both locales show Logo, five locale nav links, `中 | EN`, and one `Customer sign-in` without overlap, wrapping, clipping, or type below `15px`.
- [ ] At exact `1120px`, the Header fits within the `1040px` container and every interactive target remains at least `44px` high.
- [ ] At `1119`, `768`, `390`, and `320px`, Header shows only Logo + Menu.
- [ ] Drawer at `768/390/320` shows five links, sign-in, `繁體中文`, `English`, visible current marker, and one alternate-language Tab stop.
- [ ] Desktop, Drawer, and Footer language links use exact counterpart `href`, correct `lang`/`hreflang`, localized accessible names, and normal navigation without JavaScript.
- [ ] Current nav and language states use weight/underline/structure plus text/ARIA, not color alone.
- [ ] Missing News counterpart is visibly unavailable and non-interactive; it does not link to Home, an index, 404, or machine translation.

### B. English copy and responsive layout

- [ ] Test Home, AIDC, AI Cloud, Contact, News index, News article, and Payment status at `320`, `390`, `768`, `1119`, `1120`, and `1440px`.
- [ ] Every page has one H1; headings, lead, body, buttons, cards, rows, sources, email, legal name, and Footer grow naturally without fixed-height clipping.
- [ ] No required English copy uses clamp, ellipsis, hidden overflow, hover reveal, tooltip-only continuation, horizontal carousel, or `Read more` concealment.
- [ ] No page-level horizontal scrolling occurs at any target width.
- [ ] Body and article measures remain within the specified range at desktop; mobile uses the available `280/350px` content width without artificial narrow columns.
- [ ] Hyphenation occurs only in `lang="en"` prose; brands, UI labels, navigation, email, URLs, and legal names are not manually or character-by-character broken.

### C. Components

- [ ] Buttons retain `44px` targets and allow approved two-line labels at compact widths.
- [ ] Cards contain complete titles, summaries, status, sources, and CTA; differing English copy lengths do not force missing text or fake equal-height content.
- [ ] Definition rows/tables stack at compact widths with visible label/value relationships and no horizontal track.
- [ ] Status badges include full visible text and border/structure; `72 nodes`, `Q4 2026`, `Approximately 800 MW`, and platform limitations stay adjacent to their qualifications.
- [ ] Footer at `1120/768/390/320` preserves content order, pending English address, language navigation, legal line, and secondary brand line without overlap.

### D. Payment safety

- [ ] English Payment displays the mandatory pre-H1 banner, H1, review-status rows, source status, no-transaction warning, contact safety sentence, and return link.
- [ ] Page is `noindex, nofollow`, excluded from sitemap and public `hreflang` pairing.
- [ ] No Chinese-source CTA appears until company/legal supplies the exact approved URL, version, status, and effective date.
- [ ] No translated clause, clause summary, TOC, controlling-language statement, consent, checkbox, card field, plan, price, payment, subscription, refund, order, or purchase control appears.
- [ ] The current Chinese prototype clauses are not described as approved, controlling, or the source of a completed English translation.

### E. Contact and News

- [ ] Contact contracting entity, static-prototype warning, and fallback phone/email precede all fields at every width and at `200%` zoom.
- [ ] Error Summary receives visible focus; field error and prototype confirmation error use text plus structure, not color alone.
- [ ] Validation-complete state uses the controlled no-data-submitted copy and never appears as a successful submission.
- [ ] English News zero state contains no Chinese, machine-translated, duplicated, or placeholder cards.
- [ ] News Filters wrap at `768/390/320`; active filter has non-color state; whole-page zero hides Filters, count, cards, and pagination.
- [ ] Mobile/zoomed article order places Fact Panel before body and preserves semantic label/value relationships.

### F. Accessibility, zoom, and assets

- [ ] Keyboard completes Skip Link, Header, language alternate, Menu/Drawer, primary nav, sign-in, page controls, Footer language, and Footer contact in logical order.
- [ ] Focus Ring is visible on light/dark surfaces and is not clipped by Header, card, Footer, or Drawer overflow.
- [ ] At `200%` zoom, Header/Drawer, Payment rows, Contact warnings, Footer legal/language area, and News Fact Panel reflow without overlap or lost controls.
- [ ] Text contrast is at least `4.5:1`; UI boundaries and focus indicators meet non-text contrast expectations.
- [ ] Reduced Motion removes unnecessary transitions; content and links remain present without JavaScript.
- [ ] All supplied Logos retain original color, aspect ratio, safe area, and embedded wording; no English Logo/tagline, filter, redraw, flag, or co-brand asset is introduced.

### G. Content and legal guardrails

- [ ] Fixed names remain exact: `SiGTRON`, `SignalPro`, `SignalPro Technology CO., LTD.`, and `Powered by SignalPro`.
- [ ] No UI annotation, placeholder, badge, diagram, screenshot, or state invents a company fact, customer/partner, certification, performance, SLA, price, product capability, address translation, response time, or legal statement.
- [ ] Controlled English copy, pending English address, News approval state, article pairing, partner/logo rights, and Payment legal/source inputs remain visibly identified as review gates.

## 12. Open production inputs

UI cannot resolve these items. Retain the specified pending/zero/review state until the responsible owner provides approval:

1. Company word-for-word approval of controlled English copy and terminology.
2. Official English postal address and approved international phone format, if any.
3. Approved English tagline or English-specific Logo asset, if the company wants one.
4. English News records, paired article URLs, source ownership, image rights, and publication approvals.
5. Approved customer/partner names, roles, Logos, links, and trademark permissions.
6. Approved Chinese Payment source URL, legal status, version, effective date, English legal translation, controlling-language rule, and consent mechanism.
7. Production Contact data processor, privacy notice, consent, endpoint, storage, and actual submission behavior.

Until those inputs exist, Frontend uses the controlled pending, zero-content, unavailable-language, and no-send states defined above.
