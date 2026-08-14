# SiGTRON English payment and subscription information handling v1

> English localization stage 2 — Content
>
> Last updated: 2026-08-13
>
> Status: safe English presentation for prototype and legal-review routing. This document deliberately does not translate the Chinese payment and subscription text and is not a set of terms.

## 1. Legal status and required outcome

The current project does not contain an approved English legal translation, an approved controlling-language rule, or a recorded approval for the Chinese source version, version number, or effective date. The existing Chinese text in `prototype/payment-terms.html` and the AI Cloud dialog must therefore not be treated as an approved contract or used as the source of a production-ready English translation.

The English experience must:

1. state visibly that the English legal translation is pending company and legal approval;
2. direct the reader to the Chinese source text selected by the company/legal team;
3. disclose the review status of that Chinese source until its version and legal status are confirmed;
4. avoid translating, summarizing, or implying agreement with the substantive payment terms;
5. remain `noindex, nofollow` while it is a prototype or review-status page;
6. provide no consent, card-binding, subscription, payment, order, or purchase control.

Do not add `English for reference only`, `Chinese version prevails`, `In case of conflict...`, or any other language-priority statement. The company/legal team must approve which version has legal effect.

## 2. Recommended English routing before legal approval

### AI Cloud Services entry

**Link label**

> Payment and subscription information — English legal translation pending

**Support text**

> The English legal translation is pending company and legal approval. View the Chinese source text and its review status on the information page. Do not use that page to obtain consent, bind a card, subscribe, or make a payment.

This replaces copy that claims the page contains a complete explanation of card binding, usage-based settlement, charges, or refunds. Those substantive claims are not approved for English publication.

### Link behavior

- English AI Cloud page → English review-status page specified below.
- English review-status page → `[Company/legal-approved Chinese source URL required]`.
- Do not link to an unversioned duplicate or maintain the Chinese source independently in two HTML locations.
- If the company/legal team has not yet identified the approved Chinese source URL, display the pending state without a live Chinese-source CTA.

## 3. English review-status page

### Page controls

- HTML language: `en`
- Robots directive: `noindex, nofollow`
- Global Navbar and Footer: use [`english-website-copy-v1.md`](english-website-copy-v1.md)
- Current Navbar item: `AI Cloud Services`
- No terms table of contents, because no English clauses are approved for display.

### SEO / browser title

**Title**

> Payment & Subscription Information — English Legal Translation Pending | SiGTRON

**Meta description**

> The English legal translation of SiGTRON payment and subscription information is pending company and legal approval. Review the source-language status before use.

This metadata is for the internal review prototype only and remains `noindex, nofollow`.

### Mandatory banner before H1

> English legal translation pending company and legal approval. No approved English terms are available on this page, and this page must not be used to obtain consent or complete a transaction.

If a draft clause-by-clause English translation is later inserted for legal review, replace or precede the banner with the Brand Guardian fixed review notice:

> Draft English translation for legal review only. This text has not been approved by legal counsel and must not be presented as binding terms or used to obtain consent.

### Header

**Eyebrow**

> PAYMENT & SUBSCRIPTION INFORMATION

**H1**

> English legal translation pending

**Lead**

> An English legal translation has not yet been approved by SignalPro Technology CO., LTD. and legal counsel. The Chinese source version, its legal status, version number, and effective date must also be confirmed before production launch.

### Status panel

**H2**

> Current review status

| Label | Visible value |
| --- | --- |
| English legal translation | `Pending company and legal approval` |
| Chinese source version | `Company/legal confirmation required` |
| Version number | `[Legal input required]` |
| Effective date | `[Legal input required]` |
| Controlling language | `[Legal input required]` |
| Consent mechanism | `Not available in this static prototype` |

### Source-language routing

**H2**

> View the Chinese source text

**Body when a company/legal-approved source URL exists**

> Use the link below to view the Chinese source text identified by the company/legal team. Its version, legal status, and effective date must be displayed with the source. Do not infer that either language controls unless legal approval expressly states this.

**CTA**

> View Chinese source text

Accessible name if the link opens a new tab:

> View the Chinese payment and subscription source text in a new tab

**Body when no approved source URL exists**

> The company/legal team has not yet identified the Chinese source version for production use. A source link will be added after the version, legal status, and effective date are confirmed.

No disabled link is needed in the pending state.

### Transaction warning

**H2**

> No consent or transaction on this page

**Body**

> This static page does not record agreement, bind or replace a credit card, create or cancel a subscription, initiate payment, settle usage, request a refund, or submit personal or payment information.

Do not add checkboxes, `I agree`, `Accept`, `Continue to payment`, `Bind card`, `Subscribe`, `Buy`, or similar controls.

### Contact and navigation

**Body**

> For a general SiGTRON service inquiry, call 07-2695198 or email sales@signalpro.com.tw. Do not send card details or other payment credentials by email.

The final sentence is a safety instruction, not a claim about a payment process.

**Return link**

> Back to AI Cloud Services

## 4. Safe dialog copy

If the AI Cloud page retains a dialog rather than navigating immediately to the review-status page, the dialog must not contain a translated or duplicated set of terms.

### Dialog accessible labels

| Element | English accessible text |
| --- | --- |
| Dialog label / H2 | `English legal translation pending` |
| Close button | `Close payment and subscription information` |
| Dialog content region | `Payment and subscription translation status` |

### Dialog visible copy

**Eyebrow**

> PAYMENT & SUBSCRIPTION INFORMATION

**H2**

> English legal translation pending

**Mandatory notice**

> The English legal translation is pending company and legal approval. This dialog is for review-status information only and must not be used to obtain consent, bind a card, subscribe, or make a payment.

**Body**

> View the Chinese source text selected by the company/legal team, together with its version and review status. Do not infer a controlling language until legal approval is recorded.

**Primary link, only after the source URL is approved**

> View Chinese source text

**Secondary link**

> Open translation status page

**Close control**

> Close

Remove the current translated chapter navigation from the English dialog until a single approved legal source supplies both the page and dialog.

## 5. Content that must not be translated or summarized yet

Do not produce English clauses, summaries, FAQs, tooltips, or marketing explanations for the current Chinese sections on:

- introduction and purported agreement by use;
- card binding, payment tokens, payment processor roles, or card-number handling;
- small verification charges, including any example amount;
- card unbinding, expiration, replacement, unpaid amounts, failed payment, suspension, or termination;
- postpaid use, initial credit, thresholds, replenishment, settlement, and automatic charges;
- service hours, API calls, tokens, resources, or any other billing unit;
- refund eligibility, non-refundable usage, duplicate charges, system errors, or review timing;
- price, currency, tax, invoices, disputes, notices, cancellation, liability, law, jurisdiction, privacy, data security, processors, or cross-border handling.

These items require the approved Chinese source, verified business/process facts, legal drafting, and legal approval. A conventional English legal phrase is not an acceptable substitute.

## 6. Single-source and version-control rule

Once the company/legal team approves the Chinese source and an English legal translation:

1. Record the source version, English version, version number, effective date, approval owner, approval date, and language-effect rule.
2. Store the approved clauses in one authoritative content source.
3. Render the independent page and the AI Cloud dialog from that source, or verify their exact text automatically or manually as part of every release.
4. Keep headings, clause order, defined terms, numbers, dates, entity names, and links identical in both renderings.
5. Do not remove the draft banner, rename the page as final terms, enable indexing, or add consent until the approval record is complete.

## 7. Required company/legal inputs

- Approved Chinese source text and its exact source URL or content owner.
- Confirmation that the Chinese source is the company-adopted version.
- Version number, effective date, applicable services, change-notice method, and archive process.
- Approved English legal translation and reviewer.
- Approved statement on the legal effect of each language and conflict handling.
- Contract formation and consent-record mechanism.
- Verified payment processor, bank, company, and platform roles and data flow.
- Evidence for any card-data handling statement.
- Verified charging, settlement, usage, refund, tax, invoice, failure, cancellation, termination, privacy, security, governing-law, and dispute rules.
- Legal contact and approved English postal address.

## 8. Claim traceability

| Item | Authority |
| --- | --- |
| No approved English legal translation, controlling-language rule, version, or effective date | [`english-brand-and-legal-localization-v1.md`](../01-brand/english-brand-and-legal-localization-v1.md) §8 |
| Chinese source also requires confirmation | Same source §8 |
| Required draft banner and prohibition on consent/transaction | Same source §8 |
| Legal entity spelling | Same source §2 and confirmed facts |
| Phone and email | Confirmed facts: `公司與網站範圍` |

This handling file supersedes any English content request to translate the current Chinese clauses until the company/legal inputs above are complete.
