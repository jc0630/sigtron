# SiGTRON bilingual static website prototype

This folder is a handoff-ready Traditional Chinese / English static prototype. It uses semantic HTML5, the shared `assets/css/styles.css`, and minimum vanilla JavaScript. It has no package installation, build step, backend, database, API, authentication implementation, form endpoint, CMS, or automatic translation.

The controlled English copy is suitable for prototype review but still requires company word-for-word approval before public launch. Pending content, rights, product, form-processing, and legal inputs remain visibly identified; the prototype must not be treated as publication approval.

## Page pairs

| Traditional Chinese | English | Status |
| --- | --- | --- |
| `index.html` | `en/index.html` | Core page; reciprocal canonical / `hreflang` metadata included for production handoff. |
| `aidc.html` | `en/aidc.html` | Core page; reciprocal canonical / `hreflang` metadata included. |
| `ai-cloud-services.html` | `en/ai-cloud-services.html` | Core page; English payment entry routes to the translation-status page and never opens translated clauses. |
| `contact.html` | `en/contact.html` | Core page; both forms are non-submitting local validation demonstrations. |
| `news.html` | `en/news.html` | Prototype layout / zero-content state; `noindex, nofollow`. |
| `news/article-template.html` | `en/news/article-template.html` | Unpublished article templates; `noindex, nofollow`. |
| `payment-terms.html` | `en/payment-terms.html` | Legal review pages; `noindex, nofollow`; excluded from public `hreflang`. |

English pages share the existing `/assets/` tree. Files in `en/` use `../assets/`; the nested English article template uses `../../assets/`. No duplicate English asset tree is maintained.

## Language navigation and URLs

- At `1120px` and above, Header order is Logo, five locale navigation links, compact `中 | EN`, then `Customer sign-in` / `客戶登入`.
- At `1119px` and below, Header contains only Logo + Menu. The Drawer contains all five links, Console sign-in, then full `繁體中文` / `English` choices.
- Every Footer repeats the full language choices so language navigation remains available without JavaScript.
- All language links are real relative links to the corresponding static file. No cookie, `localStorage`, browser-language redirect, i18n library, translation API, or runtime route construction is used.
- The four core page pairs use absolute production canonical URLs and reciprocal `zh-Hant`, `en`, and Chinese `x-default` alternates. News prototypes, article templates, Payment review pages, and other `noindex` states intentionally emit no public `hreflang` metadata.
- Production hosting may expose clean URLs, but the `.html` links are retained so the handoff works over `file://` and a simple static server.

## Legal and content safety states

### English payment information

`en/payment-terms.html` is a translation-status page, not English terms. It includes the mandatory legal-review banner, pending source/version/effective-date fields, a no-transaction warning, and a return link. It contains no translated clause, clause summary, terms table of contents, language-priority statement, consent, card, subscription, payment, purchase, refund, order, or data-submission control.

The English AI Cloud page uses a normal link to that status page. It does not include `data-payment-terms-open`, a terms dialog, or duplicated English legal text. No Chinese-source CTA appears until company/legal approves the exact Chinese source URL, legal status, version, and effective date.

The existing Chinese Payment page/dialog remains a review-only Chinese prototype and is not evidence of an approved source, version, effective date, or controlling language. Do not translate it, describe it as controlling, or connect it to consent or a transaction. Its current duplicate page/dialog behavior is preserved only as an existing Chinese prototype state and remains `noindex, nofollow`.

### News & Events

No English News item is currently approved for publication. English Home shows the formal zero state. `en/news.html` and `en/news/article-template.html` are visibly marked layout previews and remain `noindex, nofollow`; their placeholders must never enter a sitemap or social preview.

An English article can be published only after its English title, summary, body, dates, status, source, images/rights, facts, and publication approval are recorded. A real article language switch must point to an explicitly approved paired article, never to Home, the News index, a 404, or machine translation.

### Customers and partners

English Home uses the formal zero state because no customer or partner identity is currently approved for English publication. Do not replace it with names, logos, numbered placeholders, badges, or endorsements until the relationship, role, project context, link, trademark use, and bilateral publication permission are approved.

### Contact no-send contract

Both Contact pages expose three disclosures before all fields: contracting entity, static-prototype warning, and fallback phone/email. The forms have no `action`, `method`, `formaction`, network request, or third-party endpoint. The action control is `type="button"`; JavaScript performs local validation only. A defensive `submit` listener prevents accidental browser submission, including Enter-triggered submission.

The completion text explicitly says no data was submitted. Field values are not stored. The Prototype checkbox is a flow demonstration, not privacy consent or contract agreement. The production company must replace this behavior only after the service provider, data flow, storage, privacy notice, consent, and endpoint are approved.

## Responsive and accessibility behavior

- Breakpoints: mobile `0–767px`, tablet `768–1119px`, desktop `1120px+`.
- Exact `1120px` Header uses the compact fit budget; at `1119px`, all desktop navigation, language abbreviations, and Header sign-in move into the Drawer atomically.
- Header/Drawer language current states are non-links; alternate languages are real links with `lang`, `hreflang`, localized accessible names, and at least `44px` targets.
- The Drawer retains Escape, backdrop close, focus trap, scroll lock, focus return, and reduced-motion behavior.
- English components use natural height, readable line measures, complete status qualifications, no line clamp, and no hidden hover-only content. Long URLs and email addresses may wrap; fixed brand/legal names are not abbreviated.
- Status is expressed with visible text and structure, not color alone. Focus indicators, Skip Links, semantic landmarks, form labels, definition lists, and machine-readable production-date requirements are retained.
- At compact widths, the News Fact Panel precedes the article body, CTA groups stack, and status/definition rows reflow without horizontal tables.
- Page width is content-driven: `body` does not set a minimum width or hide horizontal overflow, reusable Flexbox/Grid children can shrink, and long English text wraps inside its component.
- Drawer and Payment dialog widths are relative to their containing block, not `100vw`, so browser scrollbar width and `200%` zoom do not introduce sideways page movement. Do not reintroduce `body` overflow masking or viewport-width sizing as an overflow workaround.

## Confirmed external destinations and assets

- Console sign-in remains `https://console.sigtron.ai/dev-console/auth/login` and is an external destination; the prototype does not implement authentication.
- The Tainan concept video opens on YouTube under `file://` and is progressively embedded only over HTTP(S). Its English qualification remains `3D-rendered concept video — not footage of the site.`
- Supplied SiGTRON and SignalPro assets are shared unchanged. Do not recolor, redraw, translate the embedded Chinese Logo tagline, create a flag selector, or create a new co-brand lockup.
- The project map remains a country-level illustration. Do not add exact-site pins or treat planning markets/capacity as contracted or operational.

## Validation

Run from the project root:

```text
node scripts/validate-prototype.mjs
node --check prototype/assets/js/main.js
node --check prototype/assets/js/news.js
```

The validator checks all 14 files, both document languages, shared navigation order, exact locale counterparts, nested relative links/assets, reciprocal core metadata, `noindex` exclusions, English fixed status qualifications, Payment safety, Contact no-send behavior, News prototype gates, existing Chinese payment parity, prohibited dependencies/claims, responsive CSS hooks, horizontal-overflow regressions, and JavaScript safety behavior.

Manual production review is still required at `320`, `390`, `768`, `1119`, `1120`, and `1440px`, plus `200%` zoom and keyboard-only navigation. Confirm no horizontal scrolling, label collision, clipped Focus Ring, hidden qualification, or Console/link regression.

## Open approval gates

1. Company word-for-word approval of controlled English copy and terminology.
2. Official English postal address and any approved international phone format.
3. Approved English tagline or English-specific Logo asset, if desired.
4. Approved English News records, article pairs, facts, dates, sources, rights, and publication decisions.
5. Approved customer/partner names, roles, relationship wording, logos, links, and trademark permissions.
6. Approved Chinese Payment source URL, legal status, version, effective date, English legal translation, language-effect rule, and consent mechanism.
7. Production Contact processor, data flow, storage location/period, privacy notice, consent, endpoint, and actual submission behavior.
8. Static-host configuration for clean URLs, a production sitemap containing only approved indexable URLs, and real locale-appropriate 404 responses.
