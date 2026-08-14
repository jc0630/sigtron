# SiGTRON English bilingual IA and responsive wireframes v1

> UX Architect — English localization stage 3
>
> Last updated: 2026-08-13
>
> Scope: static `zh-Hant` / `en` information architecture, URL pairing, language navigation, responsive behavior, News localization, legal-safe payment routing, Contact no-send behavior, SEO requirements, and implementation acceptance tests.

## 0. Authority, scope, and conflict decision

This document extends, but does not reorder, the approved Chinese IA and wireframes in [`core-pages-wireframes-v1.md`](core-pages-wireframes-v1.md). The same page purposes, content order, primary user paths, `1120px` desktop breakpoint, and `768px` tablet breakpoint remain authoritative.

Content and legal authority, in order:

1. [`confirmed-facts-and-decisions.md`](../00-project/confirmed-facts-and-decisions.md)
2. [`legal-brand-relationship-approval-v1.md`](../01-brand/legal-brand-relationship-approval-v1.md)
3. [`english-brand-and-legal-localization-v1.md`](../01-brand/english-brand-and-legal-localization-v1.md)
4. [`english-website-copy-v1.md`](../02-content/english-website-copy-v1.md)
5. [`english-news-article-template-v1.md`](../02-content/english-news-article-template-v1.md)
6. [`english-payment-terms-handling-v1.md`](../02-content/english-payment-terms-handling-v1.md)
7. This UX extension

The English copy is controlled prototype copy and still requires company word-for-word approval before public launch. Layout must not visually upgrade a planned, target, trial-operation, platform-online, customer, partner, legal, or product statement beyond its recorded status.

### English Payment Terms conflict decision

The Chinese wireframe §7.4 and current prototype demonstrate a full Chinese Payment Terms page/dialog. The later English brand and Content deliverables establish that:

- the Chinese source version and legal approval are not yet confirmed;
- there is no approved English legal translation, controlling-language rule, version number, or effective date;
- unapproved clauses must not be translated, summarized, displayed as binding terms, or used to obtain consent.

Therefore, **for the English experience only**, this document supersedes the full-clause dialog pattern. The approved English path is a `noindex, nofollow` translation-status page; a short status-only dialog is optional, and direct navigation is preferred. This decision does not authorize a change to Chinese legal content and does not treat the current Chinese prototype page as an approved source.

## 1. Static bilingual URL and folder architecture

### 1.1 Route principle

- Keep the existing Traditional Chinese prototype files at their current paths.
- Add English counterparts under one `/en/` folder.
- Do not add runtime language detection, a translation API, an i18n library, a router, a CMS, or a backend.
- The URL is the language state. Do not store language in a cookie or `localStorage`, and do not redirect based on browser language.
- Default and `x-default` language is Traditional Chinese. An explicit language choice always wins because it navigates to a different URL.

Recommended static prototype tree:

```text
prototype/
├── index.html
├── aidc.html
├── ai-cloud-services.html
├── contact.html
├── news.html
├── payment-terms.html                 # Chinese review state; not proven approved terms
├── 404.html                           # production handoff requirement
├── news/
│   └── [YYYY-MM-DD]-[slug].html
├── en/
│   ├── index.html
│   ├── aidc.html
│   ├── ai-cloud-services.html
│   ├── contact.html
│   ├── news.html
│   ├── payment-terms.html             # English translation-status page only
│   ├── 404.html                       # preferred English-prefix fallback
│   └── news/
│       └── [YYYY-MM-DD]-[slug].html
└── assets/                            # one shared asset directory
```

The static prototype keeps `.html` filenames so it works from files and a simple static server. The production company may expose clean URLs without changing the IA:

| Page | `zh-Hant` prototype | `en` prototype | `zh-Hant` production | `en` production |
| --- | --- | --- | --- | --- |
| Home | `index.html` | `en/index.html` | `/` | `/en/` |
| AIDC Delivery | `aidc.html` | `en/aidc.html` | `/aidc/` | `/en/aidc/` |
| AI Cloud Services | `ai-cloud-services.html` | `en/ai-cloud-services.html` | `/ai-cloud-services/` | `/en/ai-cloud-services/` |
| Contact | `contact.html` | `en/contact.html` | `/contact/` | `/en/contact/` |
| News & Events index | `news.html` | `en/news.html` | `/news/` | `/en/news/` |
| Approved News article | `news/[date]-[slug].html` | `en/news/[date]-[slug].html` | `/news/[slug]/` | `/en/news/[slug]/` |
| Payment review state | `payment-terms.html` | `en/payment-terms.html` | not public/indexable until legal release | not public/indexable until legal release |
| Not found | `404.html` | `en/404.html` | host-configured 404 | host-configured `/en/` 404 where supported |

Do not publish an empty English shell merely to complete a pair. Every English core page must contain its controlled English copy before English launch. Every News article is paired independently under §8.

### 1.2 Shared asset rule

Use the existing shared `/assets/` directory. Do not duplicate a full asset tree under `/en/`.

- From `en/*.html`, asset paths begin `../assets/`.
- From `en/news/*.html`, asset paths begin `../../assets/`.
- An image containing Chinese words is not language-neutral. It needs an approved English alternative asset or must be omitted from English. Do not redraw logos or translate the Chinese logo tagline.
- Informative image alternative text and captions are localized in HTML, not embedded into the asset filename or supplied by JavaScript.

## 2. Page pairing, relative links, anchors, and URL state

### 2.1 Stable page and anchor pairs

Keep the same ASCII anchor IDs in both languages. The visible heading changes language; the ID does not.

| Page pair | Shared anchors / state | Language-switch behavior |
| --- | --- | --- |
| Home | `#project-footprint`, `#news-events`, `#partners`, `#about` | Preserve these four hashes exactly. |
| AIDC Delivery | `#scope`, `#delivery` | Preserve either hash. |
| AI Cloud Services | `#services`, `#access-title`, `#ecosystem` | Preserve only a matching anchor. Payment entry routes separately. |
| Contact | `#project-inquiry`; optional query `type=aidc|compute` | Preserve the recognized `type` value and `#project-inquiry`. |
| News index | optional query `category=all|company|project|event|media` | Preserve only a recognized category code. |
| News article | explicit content-ledger pair | Link only to an approved localized counterpart. Do not calculate a route from title text. |
| Payment review state | no clause-anchor equivalence before approval | Do not carry existing Chinese clause hashes into English. |

Rules:

- A language switch keeps the visitor on the equivalent page, not the language homepage.
- Preserve a hash only when it exists in both DOMs. If it is not paired, navigate to the counterpart page top.
- Preserve only the whitelisted Contact and News query values above. Never copy arbitrary query parameters.
- Current links such as `contact.html?type=aidc#project-inquiry` remain valid. Do not move the fragment before the query.
- Anchor targets use `scroll-margin-top: 88px` on desktop and at least `76px` below `1120px`; focusable section headings may use `tabindex="-1"` after an intentional anchor action.
- Language changes use a normal navigation. Do not push two client-side history entries or rewrite the current DOM in place.

### 2.2 Relative-link contracts

#### From `prototype/en/*.html`

| Destination | Relative `href` |
| --- | --- |
| English Home | `index.html` |
| English AIDC | `aidc.html` |
| English AI Cloud | `ai-cloud-services.html` |
| English Project Footprint | `index.html#project-footprint` |
| English News | `news.html` |
| English About | `index.html#about` |
| English Contact | `contact.html#project-inquiry` |
| English AIDC delivery method | `aidc.html#delivery` |
| English payment status | `payment-terms.html` |
| Chinese counterpart | `../[counterpart].html` or `../index.html#[shared-anchor]` |

#### From `prototype/en/news/*.html`

| Destination | Relative `href` |
| --- | --- |
| English Home | `../index.html` |
| English AIDC | `../aidc.html` |
| English AI Cloud | `../ai-cloud-services.html` |
| English Project Footprint | `../index.html#project-footprint` |
| English News index | `../news.html` |
| English About | `../index.html#about` |
| English Contact | `../contact.html#project-inquiry` |
| English AIDC delivery method | `../aidc.html#delivery` |
| Paired Chinese article | `../../news/[paired-file].html` |

#### From existing Chinese pages

- Root-level page to English pair: `en/[counterpart].html`.
- Chinese News article to paired English article: `../en/news/[paired-file].html`.
- A Chinese article without approved English content must not link to an invented English article or silently redirect to `en/news.html`.

### 2.3 Link and active-state conventions

The English global navigation keeps the approved order:

1. `AIDC Delivery`
2. `AI Cloud Services`
3. `Project Footprint`
4. `News & Events`
5. `About SiGTRON`
6. `Customer sign-in` — utility action to the approved SiGTRON Console URL

The logo links to the locale Home. Do not add a visible Home item and do not add `Discuss your project` to Header or Drawer.

- Core English pages use `aria-current="page"` on their page-level item.
- Every English News article keeps `News & Events` current.
- Home scrollspy remains limited to `#project-footprint` and `#about`; `#news-events` never activates `News & Events`.
- Contact has no false primary-nav current state.
- Payment translation-status page keeps `AI Cloud Services` current because it is reached from Platform Access.
- Language-current state is independent from primary-nav current state.

## 3. Header, Drawer, and language selection

### 3.1 Desktop Header — `1120px` and above

Keep the existing `72px` sticky Header and content-grid alignment. The order is:

```text
SiGTRON logo | five primary links | compact language selector | Customer sign-in
```

The selector is a compact two-state `中 | EN` group:

- Fixed display order is always `中`, then `EN`, so the control does not jump when language changes.
- The current language is text, not a redundant self-link, and uses `aria-current="page"`, visible weight, and a non-color indicator.
- The other language is a real `<a>` with the exact counterpart `href`, `lang`, and `hreflang`.
- Each state has a minimum `44px` high target/reading box. The alternate link has at least a `44 × 44px` pointer target.
- English accessible group name: `Language selector`. Chinese accessible group name: `語言選擇`.
- English current label: `English, current language`; alternate accessible name: `Switch to Traditional Chinese`.
- Chinese current label: `繁體中文，目前語言`; alternate accessible name: `切換至 English`.
- The visible abbreviations stay `中` and `EN`; do not use flags because language is not equivalent to nationality.

At exactly `1120px`, the Header must still fit without hiding, truncating, or wrapping a nav label. Keep nav type at least `15–16px`, use a controlled flexible gap, and keep `Customer sign-in` as the only business utility action. The language selector is navigation metadata, not a second CTA.

### 3.2 Tablet and mobile Header — below `1120px`

At `768–1119px` and below `768px`, keep the uncluttered approved Header:

```text
SiGTRON logo | Menu button
```

Do not place the two full language names, `Customer sign-in`, or a business CTA beside the logo. Put the complete language choice in the Drawer.

Drawer order:

```text
Close
AIDC Delivery
AI Cloud Services
Project Footprint
News & Events
About SiGTRON
divider
Customer sign-in
divider
Language / 語言
  繁體中文 [Current / 目前語言 when applicable]
  English [Current / 目前語言 when applicable]
```

- The current language is a non-link with `aria-current="page"`; the alternate is one normal link.
- Keep both full names visible. `繁體中文` has `lang="zh-Hant"`; `English` has `lang="en"`.
- The Drawer language group is a `<nav>` with localized accessible name; do not use a `<select>` that requires JavaScript to navigate.
- Opening focus remains on Close or the first nav link. Keyboard order is Close → five primary links → Customer sign-in → alternate language. The non-link current language is announced in reading order but is not an extra Tab stop.
- Activating the alternate language performs normal page navigation. No animation or delayed route change is needed.
- Existing Drawer Escape, backdrop, focus trap, scroll lock, focus return, and `prefers-reduced-motion` requirements remain unchanged.

### 3.3 Keyboard and no-JavaScript behavior

- Language links always contain real relative `href` values. JavaScript must not construct or repair them.
- The desktop selector works with Tab and Enter and requires no JavaScript.
- The Drawer uses existing progressive behavior. If the Drawer is unavailable without JavaScript, every page must also expose the same two-language choice in the Footer, and the production handoff should provide a compact `<noscript>` alternate-language link in the small-screen Header.
- No-JavaScript navigation must not auto-redirect, discard an approved shared hash, or submit Contact data.
- Focus after a normal language navigation starts at the new document. Do not script focus to the matching section on initial load; the browser's native fragment behavior is sufficient.
- Do not announce language change through `aria-live`; the document title, root language, and page heading provide the new context.

## 4. English page hierarchy and wireframe continuity

The English pages use the section order already approved for Chinese. English localization does not create a second IA, add service pages, or promote legal/partner content.

### 4.1 Home

```text
Header
Hero
Start with your goal — AIDC owner / enterprise AI team
#project-footprint — status overview → Xinshi → Asian pipeline
#news-events — approved English items or English zero state
Integrated AIDC capabilities
Delivery path
AI Cloud Services summary
Delivery confidence
#partners — approved localized identities or zero state
#about — controlled brand relationship sentence
Closing CTA
Footer + language links
```

The same status qualifications must remain adjacent to `72 nodes`, `Q4 2026`, and `Approximately 800 MW`. English text length is not permission to move a qualification to a tooltip, footnote, hover state, or later section.

### 4.2 AIDC Delivery

Keep: Hero → integration challenge → full service scope → `#delivery` six stages → delivery model → FAQ → closing CTA. Do not add a service-region promise, public timing, cost, standard acceptance method, or partner identity.

### 4.3 AI Cloud Services

Keep: Hero → three service areas → Platform Access → enterprise requirements → engagement path → technology ecosystem → status/entry points → closing CTA.

- Platform status and account/project qualification stay in the same reading region.
- `Customer sign-in` stays secondary to the enterprise inquiry path.
- The INFINITIX relationship remains low hierarchy and adjacent to the approved SignalPro/SiGTRON responsibility sentence.
- Platform Access links to the English translation-status page described in §9, not to translated clauses.

### 4.4 Contact

Keep: Hero → preparation guidance → `#project-inquiry` disclosures → fallback phone/email → four fieldsets → prototype check result → Footer. The contracting-entity note, static-prototype notice, and fallback contact precede every form field at all widths.

### 4.5 News index and article

Keep the approved list and article sequence. Localization eligibility and missing-language behavior are defined in §8; the layout must not backfill English cards with Chinese or machine-translated content.

### 4.6 Payment translation status

This is an English legal-routing support page, not a seventh marketing page and not an English terms page. Its only content hierarchy is defined in §9.

## 5. English copy length and responsive layout

The breakpoints remain exactly:

| Mode | Width | Grid | Header |
| --- | --- | --- | --- |
| Mobile | `0–767px` | 4 columns | Logo + Menu |
| Tablet | `768–1119px` | 8 columns | Logo + Menu |
| Desktop | `1120px+` | 12 columns | Full nav + compact language selector + sign-in |

### 5.1 Global text behavior

- Do not set fixed heights on headings, cards, disclosures, buttons, status rows, Footers, or article headers.
- English body copy uses a readable maximum of about `60–72ch`; dense legal/status copy may be narrower.
- H1/H2 measure is shorter than body copy. Allow a desktop H1 to occupy two or three lines and a mobile H1 to grow naturally.
- Use `line-height` and section spacing, not hardcoded minimum height, to absorb localization.
- Do not line-clamp titles, summaries, legal names, status qualifications, source names, or CTAs.
- Buttons may grow vertically. At mobile widths, allow controlled two-line labels and use full-width stacking where already specified.
- Apply `overflow-wrap: anywhere` only to long URLs and email-like strings. Do not abbreviate `SignalPro Technology CO., LTD.` or alter fixed brand capitalization to fit.
- Use `hyphens: auto` only with the correct `lang="en"`; do not insert manual hyphens into brand or product names.
- Badges/status labels may wrap into two lines and must remain rectangular and text-led; do not shrink them into unreadable pills.

### 5.2 Component behavior by width

| Component | Desktop `1120px+` | Tablet `768–1119px` | Mobile `<768px` |
| --- | --- | --- | --- |
| Header | English nav remains one line; `中 | EN` compact; sign-in visible. | Full nav and language names move to Drawer. | Same; only Logo + Menu in Header. |
| Hero | Existing 7/12 + 5/12 or page-specific grid; no fixed height. | Existing 5/8 + 3/8 where content fits; otherwise stack without reordering. | Text → CTAs → qualifications → visual. |
| Evidence Strip | Existing columns; definitions visible below values. | Two columns or stacked rows based on available text measure. | Vertical status rows; number and qualification never separate. |
| Service / process matrix | Existing multi-column or row table; cells grow. | Two columns or 1+2 only where reading order remains clear. | Single column, no horizontal track or collapsed detail. |
| News Grid | Three columns. | Two columns; third item starts the next row. | One column. No line clamp. |
| News article | Main 8/12 + Fact Panel 4/12. | Main 5/8 + Fact Panel 3/8 if it remains readable; otherwise stack. | Header → optional figure → Fact Panel → body. |
| Footer | Columns may align, but legal line can wrap. | Natural column wrap; legal line before `Powered by SignalPro`. | Single column; no truncated address, legal name, or language links. |
| Review-status table | Label/value columns when each value remains readable. | May stack each row into label then value. | Stacked definition rows; no horizontal scrolling. |

### 5.3 English-specific layout checks

- At `1120px`, `Project Footprint`, `News & Events`, `About SiGTRON`, `Customer sign-in`, and the language selector must not overlap or force type below the approved minimum.
- At `1119px`, no desktop nav or Header sign-in remains visible; Drawer contains all full labels and the language group.
- At `768px`, News Filters wrap, not scroll horizontally; long category labels retain `44px` control height.
- At `390px` and `320px`, `Payment and subscription information — English legal translation pending`, legal entity names, source labels, and email addresses do not create horizontal overflow.
- At `200%` zoom, the language selector, Header, Drawer, status qualifications, Contact warnings, Footer legal line, and News source fields remain complete and operable.

## 6. Bilingual Footer

Every locale has its localized Footer content and the same structural order. Add a final language navigation group without displacing legal identity or `Powered by SignalPro`.

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

- The English postal address remains `[Official English postal address pending company confirmation]`. Do not translate the Chinese address or add a country/postcode.
- `Unified Business No.` is controlled wording pending company approval; it must not be replaced with a guessed tax/legal label.
- Footer language links use full visible names and the same counterpart rules as Header/Drawer.
- Footer language navigation remains available without JavaScript and is the small-screen language fallback.

## 7. Metadata, `hreflang`, sitemap, canonical, and 404

### 7.1 Document language and titles

- Chinese root: `<html lang="zh-Hant">`.
- English root: `<html lang="en">`.
- Do not label the English document `en-US` or `en-TW` without a company decision that changes scope.
- Each localized page uses the controlled localized title and meta description. Do not copy Chinese metadata onto English pages.

### 7.2 Canonical and alternate links

Every indexable, approved localized page uses an absolute self-canonical. English must never canonicalize to Chinese merely because Chinese is the default.

Example for the English AIDC page:

```html
<link rel="canonical" href="https://sigtron.ai/en/aidc/">
<link rel="alternate" hreflang="zh-Hant" href="https://sigtron.ai/aidc/">
<link rel="alternate" hreflang="en" href="https://sigtron.ai/en/aidc/">
<link rel="alternate" hreflang="x-default" href="https://sigtron.ai/aidc/">
```

The Chinese counterpart contains the same three reciprocal alternate links and a Chinese self-canonical.

Rules:

- `hreflang` is emitted only for a real, approved, `200`-status counterpart.
- Do not point `hreflang` to a placeholder, redirect, 404, `noindex` page, language homepage fallback, or unapproved article translation.
- Canonical and alternate URLs do not include fragments or filter/query state.
- News articles include only existing approved locale variants. The content ledger records the exact pair and which approved version serves as `x-default`.
- The Payment translation-status page, Chinese unconfirmed source page, prototype News templates, placeholder News pages, and 404 pages have no public `hreflang` set.

### 7.3 Sitemap

The production static root supplies one `sitemap.xml` that includes only canonical, indexable, approved URLs.

- Include both core locale URLs after both versions are approved for launch.
- For paired URLs, include reciprocal `xhtml:link` alternates or maintain an equivalently validated sitemap pair structure.
- Include a News article only after that language version passes factual, brand, rights, and publication review.
- A Chinese-only approved article may appear only as the Chinese URL; do not create a false English sitemap entry.
- Exclude all `noindex`, review-only, template, placeholder, filter-query, Contact query-state, and 404 URLs.
- Use `lastmod` only for a real content update; do not generate a fake daily timestamp.

### 7.4 404 fallback

Static hosting must return an actual HTTP `404`, not `200` with Home content.

- Preferred: `/404.html` in Traditional Chinese and `/en/404.html` in English; configure `/en/*` misses to use the English file where the static host supports prefix-specific errors.
- If the host supports only one error document, use one concise bilingual 404 with each language block correctly marked by `lang`, plus direct links to `/` and `/en/`.
- Never auto-redirect an unknown English URL to Chinese Home, English Home, or an approximately matching page.
- Do not use 404 as the missing-translation state. A News language option is disabled/non-linked when no approved counterpart exists.
- 404 pages use `noindex`, are excluded from the sitemap, and do not need canonical or `hreflang` links.
- Required content: clear not-found H1, no factual claims, locale Home link, locale AIDC link, locale News link, and locale Contact link. No search UI or backend flow is added.

## 8. News & Events bilingual publishing rules

### 8.1 Language eligibility

Chinese approval does not automatically approve English. A News record is eligible for an English list/card/article only after it has:

- approved English title, summary, category, date, source/publisher, and applicable status wording;
- approved English body and facts for an on-site article;
- image/social asset rights covering that use and approved English alternative/caption text;
- factual, brand, partner/rights, and publication review recorded for English.

Do not machine translate, partially translate, or show a Chinese card under English navigation. Do not invent an English slug, quote, source description, event status, or project qualification.

### 8.2 Index and Home summary

- The English Home `#news-events` selects the latest 1–3 **English-approved** records by publication date. It does not inherit the Chinese set.
- The English News index filters and result counts operate only on English-approved records.
- The four category codes remain language-neutral: `company`, `project`, `event`, `media`.
- A category may be empty in English even when it has Chinese items; show the approved English category-empty state.
- If there are zero English-approved records, show the formal English zero-content state from the Content deliverable. Remove/hide Filters, result count, cards, and pagination.
- Prototype-only example cards remain `noindex, nofollow`, visibly marked as layout previews, excluded from sitemap/social metadata, and removed before launch.

### 8.3 Article pairing and missing English content

- The content ledger stores explicit `zh-Hant URL`, `en URL`, source language, approval status by language, and pair ID.
- A shared ASCII slug is recommended when the editorial owner approves it, but pairing must use the ledger, not a filename assumption.
- On an article with an approved counterpart, Header/Drawer/Footer language links go directly to that article.
- If English is not approved, the Chinese article displays `EN` as unavailable, not as a link. Accessible text: `English version not available for this article`.
- Optionally provide a separate, clearly labeled `View English News & Events` link to the English index after the article. Do not make this look like a translation of the current article.
- Apply the same rule in reverse if an approved English article has no approved Chinese counterpart.
- Never redirect a missing counterpart to a locale Home, News index, 404, external media URL, or automated translation service.

### 8.4 Article layout continuity

The English article remains:

```text
Breadcrumb
Article Header — category, absolute publication date, source, H1, lead
Optional approved Figure
Fact Panel + Main Body
Back to News & Events
CTA Band
Footer
```

- Keep the Fact Panel before the body on mobile.
- Do not clamp English headlines or summaries.
- Keep fixed status qualifications in the same reading region as project numbers/status.
- Remove the entire Figure or quote block when its required approval is missing.
- `News & Events` remains `aria-current="page"` on both locale article templates.

## 9. English payment and subscription safety path

### 9.1 Recommended flow

```text
English AI Cloud Services / Platform Access
  → Payment and subscription information — English legal translation pending
  → /en/payment-terms/ review-status page (`noindex, nofollow`)
  → approved Chinese source URL only after company/legal identifies it
```

Use a normal link to the status page. This is safer than opening a dialog and works without JavaScript.

### 9.2 Translation-status page wireframe

```text
Header — AI Cloud Services current
Mandatory legal-status banner before H1
Eyebrow — PAYMENT & SUBSCRIPTION INFORMATION
H1 — English legal translation pending
Lead — approval/source/version/effective-date limitation
#review-status — status definition rows
#source-language — approved Chinese source link OR pending text, never a disabled control
#no-transaction — explicit list of actions this page does not perform
General service contact + do-not-email-card-details warning
Back to AI Cloud Services
Footer + language links
```

Required behavior:

- Use the exact controlled English content in [`english-payment-terms-handling-v1.md`](../02-content/english-payment-terms-handling-v1.md).
- Set `noindex, nofollow`; exclude from sitemap and public `hreflang` pairing.
- Show no translated clause, clause summary, terms table of contents, consent control, card binding, subscription, payment, order, purchase, refund request, or personal/payment-data form.
- Do not use `English for reference only`, `Chinese version prevails`, or another controlling-language statement.
- Until company/legal identifies an approved Chinese source URL, show pending text and no Chinese-source CTA.
- Do not treat the current duplicated Chinese prototype clauses as the approved source.
- The global language selector may identify the Chinese review page as another language view, but its accessible label must communicate that legal review is pending and must not imply that Chinese controls.

### 9.3 Optional status-only dialog

If UI retains a dialog, it contains only the status copy and links defined by the Content deliverable. It must not duplicate the Chinese clauses or create English clauses. Direct navigation to `en/payment-terms.html` remains the no-JavaScript path. The dialog has:

- H2 / label `English legal translation pending`;
- Close button `Close payment and subscription information`;
- content region `Payment and subscription translation status`;
- no consent or transaction action;
- focus, Escape, backdrop, scroll lock, and opener return behavior from the existing accessible dialog pattern.

## 10. Contact static no-send contract

The English Contact form remains a validation demonstration only.

### 10.1 Required reading order

```text
Contact H1 and lead
Information to prepare
#project-inquiry H2
Contracting entity disclosure
Static prototype / do-not-enter-personal-information notice
Fallback phone and email
01 Contact details
02 Inquiry type
03 Project context
04 Requirement summary and prototype confirmation
Check fields — prototype only
No-data-submitted status
```

- The three disclosures before the form use the exact controlled English copy.
- Phone and email remain `07-2695198` and `sales@signalpro.com.tw`; no response-time or hours promise is added.
- Do not show a guessed English postal address in Contact; Footer retains the explicit pending marker.

### 10.2 Interaction contract

- Prototype button label: `Check fields — prototype only`.
- The action control is `type="button"` until a production submission process is approved. The form has no live `action`, `formaction`, Fetch, XHR, beacon, mail gateway, API, or third-party form endpoint.
- Pressing Enter in a field must not trigger a navigation or network submission.
- JavaScript may validate local values and show the approved error summary/status only. It must not persist field values.
- Success wording is never `Submitted` or `Inquiry received`; it is `Field validation is complete. This is a static prototype; no data was submitted.`
- The checkbox is `Prototype-only checkbox`, not privacy consent. It does not link to an absent privacy notice or create legal agreement.
- With JavaScript disabled, all warnings and fallback phone/email remain visible, and no control can send data. A static sentence continues to state that the form does not submit.
- The production company must replace this entire interaction contract only after the data-submission process, processor details, full privacy notice, consent, and actual endpoint receive company/legal approval.

## 11. UI Designer handoff

UI should extend the approved light corporate system; this UX stage does not request a dark theme or new visual direction.

Required new/updated states:

1. Desktop Header at `1440px` and exact `1120px`, in both languages, showing the compact `中 | EN` selector and no label collision.
2. Header at `1119px`, `768px`, `390px`, and `320px`, showing only Logo + Menu.
3. Drawer at `768px`, `390px`, and `320px`, with full `繁體中文` / `English` group, current-language state, alternate-language focus, and the existing single `Customer sign-in` utility.
4. Footer language group and long English legal/contact wrapping at `1120px`, `768px`, `390px`, and `320px`.
5. English Home, AIDC, AI Cloud, Contact, News index, and News article at `1440px` and `390px`, using the existing content order and English copy lengths.
6. English News whole-page zero state, category zero state, one/two/three-card Home states, article with counterpart, and article without counterpart.
7. English Payment translation-status page at `1440px`, `768px`, `390px`, and `320px`; no full terms dialog or translated clause mockup.
8. Contact: initial, field-error summary, prototype confirmation error, and validation-complete/no-send state.
9. `200%` zoom states for Header/Drawer, payment status rows, Contact warnings, Footer legal line, and News article Fact Panel.

UI must not create a flag selector, auto-translation icon, sticky language popover, new locale homepage chooser, language modal, or disabled control that looks actionable.

## 12. Acceptance tests

### A. File, route, and relative-link integrity

- [ ] Chinese files remain at the existing prototype paths; every implemented English core page is under `prototype/en/`.
- [ ] English root pages use `../assets/`; English News articles use `../../assets/`.
- [ ] All Header, Drawer, Footer, breadcrumb, CTA, article-return, and language links resolve from both root and nested article directories under `file://` and a simple static HTTP server.
- [ ] Core language switches land on the exact counterpart page; shared anchors and whitelisted Contact/News state are preserved.
- [ ] An unpaired hash is discarded safely; arbitrary query strings are not copied.
- [ ] No language link falls back silently to Home, News index, 404, or machine translation.

### B. Language navigation and breakpoints

- [ ] `zh-Hant` and `en` are correct on the root HTML elements; inline alternate-language names use matching `lang` values.
- [ ] At `1440px` and `1120px`, `中 | EN` visibly identifies the current language and provides one keyboard-focusable counterpart link.
- [ ] At exactly `1120px`, the five English nav labels, selector, logo, and `Customer sign-in` stay on one line without overlap, truncation, reduced text below `15px`, or targets below `44px` high.
- [ ] At `1119px`, `768px`, `390px`, and `320px`, Header shows only Logo + Menu; Drawer includes all five nav links, Customer sign-in, and both full language names.
- [ ] Drawer keyboard order, Escape, backdrop close, scroll lock, focus trap, and focus return work; current language is not a redundant Tab stop.
- [ ] With JavaScript disabled, desktop and Footer language links work; the small-screen Footer or `<noscript>` Header fallback provides language navigation.
- [ ] No browser-language auto-redirect, cookie, `localStorage`, API, or i18n library is used.

### C. Page hierarchy and responsive English copy

- [ ] Every English page has one H1 and uses the approved Chinese section order.
- [ ] At `1440`, `1120`, `1119`, `768`, `390`, and `320px`, English headings, CTAs, status text, sources, company name, email, and Footer do not clip or cause page-level horizontal scrolling.
- [ ] No required English title, summary, source, disclosure, or legal/status text is line-clamped or hidden behind hover, tooltip, accordion, carousel, or `Read more`.
- [ ] Home status qualifications remain adjacent to `72 nodes`, `Q4 2026`, and `Approximately 800 MW` in every layout.
- [ ] At `200%` zoom, content reflows without overlap and all interactive targets remain visible and operable.

### D. Accessibility

- [ ] Language selectors have localized group names, current-language text, alternate-language accessible names, real `href`, `lang`, and `hreflang`.
- [ ] Primary-nav `aria-current` and language `aria-current` are not conflated.
- [ ] Skip link, semantic landmarks, heading hierarchy, visible Focus Ring, `44px` interactive targets, reduced motion, and non-color status cues pass on both locales.
- [ ] Anchor targets are not obscured by the sticky Header.
- [ ] English News article Fact Panel precedes body content on mobile and retains semantic label/value relationships.
- [ ] Footer and Contact address groups have locale-appropriate accessible names; logo/visible brand text is not announced twice.

### E. Metadata and discovery

- [ ] Every approved indexable page has an absolute self-canonical and reciprocal `zh-Hant`, `en`, and appropriate `x-default` links.
- [ ] No `hreflang` points to a placeholder, redirect, 404, missing article, payment review page, or `noindex` page.
- [ ] `sitemap.xml` contains only approved canonical URLs; filter/query, template, payment-review, 404, and placeholder URLs are excluded.
- [ ] Placeholder News pages and articles remain `noindex, nofollow`; public directives change only after content approval.
- [ ] Unknown routes return real `404` status with a locale-appropriate or bilingual static fallback and no auto-redirect.

### F. News bilingual governance

- [ ] English Home and News lists contain only English-approved records and compute counts from that set.
- [ ] Zero English records show the approved English zero state; no Chinese or placeholder card is used to fill space.
- [ ] Category empty state, overall empty state, and 1/2/3-card states work at all breakpoints without copied cards.
- [ ] Article language links are rendered only for approved pairs recorded in the ledger.
- [ ] A missing translation is announced as unavailable, not linked to a false counterpart.
- [ ] Dates are absolute and machine-readable; sources, event status, project qualifications, external-site labels, image rights, and quotes follow the English Content templates.

### G. Payment safety

- [ ] English Platform Access uses `Payment and subscription information — English legal translation pending` and routes to the English status page.
- [ ] The status page has the mandatory pre-H1 notice, `noindex, nofollow`, current-review rows, transaction warning, contact, and return link.
- [ ] No English legal clause, summary, language-priority statement, terms TOC, consent, card, subscription, payment, refund, order, or data-submission control appears.
- [ ] No Chinese-source CTA appears until company/legal supplies and approves the exact source URL, status, version, and effective date.
- [ ] The current Chinese prototype clauses are not described as approved or controlling.

### H. Contact no-send

- [ ] Contracting-entity disclosure, static-prototype warning, and fallback phone/email precede all fields at every width.
- [ ] Action control is `Check fields — prototype only`; completed validation announces that no data was submitted.
- [ ] The form has no live action/endpoint and sends no request through submit, Enter, JavaScript, beacon, or external service.
- [ ] With JavaScript disabled, warnings and fallback contact remain visible and no data can be sent.
- [ ] Prototype checkbox is not presented as privacy/legal consent; Error Summary and field errors use the controlled English copy.

### I. Content and legal guardrails

- [ ] Fixed names remain exact: `SiGTRON`, `SignalPro`, `SignalPro Technology CO., LTD.`, and `Powered by SignalPro`.
- [ ] No new fact, capability, service region, customer/partner, certification, performance, SLA, price, legal statement, response time, address translation, or controlling-language rule is added by UX/UI/Frontend.
- [ ] Any missing company, product, partner, rights, form-processing, or legal input remains an explicit pending state or open question.

## 13. Open inputs and production gates

The following remain outside UX authority:

1. Company word-for-word approval of controlled English website copy and terminology.
2. Official English postal address and any approved international telephone format.
3. Approved English tagline, if any.
4. English News records, article pairs, source-language ownership, imagery rights, and publication approvals.
5. Approved customer/partner names, roles, wording, logos, links, and trademark permissions.
6. Approved Chinese Payment Terms source, legal status, exact URL, version, effective date, English legal translation, language-effect rule, and consent mechanism.
7. Production Contact processor, data flow, storage location/period, privacy notice, consent, endpoint, and actual submission behavior.
8. Static-host configuration for clean URLs, reciprocal canonical/hreflang output, sitemap, and a real English-prefix 404 response.

Until each gate is satisfied, use the defined pending/zero/review states and keep affected URLs out of the public sitemap.
