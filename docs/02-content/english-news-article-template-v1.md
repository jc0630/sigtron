# SiGTRON English News & Events article template v1

> English localization stage 2 — Content
>
> Last updated: 2026-08-13
>
> Status: implementation-ready English template copy. It is not a published article. Every bracketed field requires approved source content before publication.

## 1. Template status and publishing gate

Keep the template and every draft article `noindex, nofollow`. Remove this directive only when the individual article has completed factual, brand, rights, and publication approval and all placeholders have been removed.

Visible template notice:

**Heading**

> Article layout preview — not published content

**Body**

> Every title, date, source, body paragraph, image, quote, and information field on this page is a placeholder. Replace or remove each item using approved source content before publication.

The public article must not display this notice or any bracketed placeholder.

## 2. SEO fields

**Title pattern**

> [Approved article title] | SiGTRON

**Meta description**

> [Approved article summary; describe the verified subject and status without adding claims.]

**Required production fields**

- Canonical URL: `[Approved public URL]`
- Open Graph title: `[Approved article title]`
- Open Graph description: `[Approved article summary]`
- Social image: `[Rights-approved asset URL]`
- Social image alternative: `[Approved descriptive alternative text]`

Do not use a placeholder or rights-unverified image in search or social metadata.

## 3. Global navigation and footer

Use the exact global English Navbar, accessible control names, and Footer from [`english-website-copy-v1.md`](english-website-copy-v1.md). Mark `News & Events` as the current page on desktop and mobile.

## 4. Breadcrumb

Accessible name:

> Breadcrumb

Visible structure:

> Home / News & Events / [Approved article title]

The final item is the current page.

## 5. Article header

**Eyebrow**

> NEWS & EVENTS

**Category**

> [Company announcement / Project update / Event / Media coverage]

**Publication date**

> [YYYY.MM.DD]

Add the machine-readable value `YYYY-MM-DD` to the final date element.

**H1**

> [Approved article title]

**Lead**

> [Approved summary that states the core fact, relevant audience, current status, and information date where needed.]

**Source line**

> Source / publisher: [approved source or publisher]

For external media coverage, use:

> Original publication: [approved publication name]

## 6. Lead image

Retain the figure only if the image, source, usage rights, caption, and alternative text are all approved. Otherwise remove the entire figure; do not show an empty frame on a public article.

**Image alternative**

> [Approved description of the information conveyed by the image]

**Caption**

> [Approved caption · source · credit or required rights statement]

Template-only placeholder accessible name:

> Article image placeholder; replace with an approved image and alternative text, or remove this section before publication

For a concept rendering, the caption must identify it as a rendering and must not imply documentary footage. For the confirmed Tainan video or derived still, retain the approved qualification `3D-rendered concept video — not footage of the site.`

## 7. Related information panel

**H2**

> Article information

Common fields:

| Label | Value |
| --- | --- |
| Publication date | `[YYYY.MM.DD]` |
| Category | `[Approved category]` |
| Source / publisher | `[Approved name]` |

Only show fields relevant to the selected variant. Remove unused variants completely rather than displaying empty values.

### 7.1 Company announcement fields

**Variant heading**

> Announcement information

| Label | Value |
| --- | --- |
| Publishing entity | `[Approved legal entity or publishing brand]` |
| Effective date | `[Approved date, if applicable]` |
| Information date | `[Approved date, if different]` |

Do not frame a routine page update, unapproved plan, or internal discussion as an announcement. Company-name, service-status, organizational, or operational changes require the corresponding approval owner.

### 7.2 Project update fields

**Variant heading**

> Project information

| Label | Value |
| --- | --- |
| Project / site | `[Approved public name]` |
| Location | `[Approved country, city, or site level]` |
| Status as of | `[Approved information date]` |
| Current status | `[Approved status label]` |
| Fact source | `[Approved source record]` |

Use only the verified status that applies: `Under discussion / planning`, `[approved construction status]`, `In trial operation`, `Target: commercial operation in [date]`, or another specifically approved status. Do not convert a target, intention, planned capacity, or pipeline opportunity into a completed result.

### 7.3 Event fields

**Variant heading**

> Event information

| Label | Value |
| --- | --- |
| Date and time | `[Approved absolute date, time, and time zone where needed]` |
| Location | `[Approved location]` |
| Event status | `Upcoming / Registration open / Registration closed / Ended / [other approved status]` |
| Organizer / co-organizer role | `[Approved organization and role]` |
| Event details | `[Approved URL] — external website` |

When registration closes, the event ends, or the link expires, update both the status and CTA. Do not retain `Register now` after it is no longer valid.

### 7.4 Media coverage fields

**Variant heading**

> Original coverage

| Label | Value |
| --- | --- |
| Publication | `[Approved publication name]` |
| Original publication date | `[YYYY.MM.DD]` |
| Original headline | `[Original headline within approved usage]` |
| Original article | `View original coverage — external website` |

Clearly identify this as external coverage. Summarize it in SiGTRON's own approved wording and do not reproduce the article. Publication logos, screenshots, photos, quotes, and excerpts require rights review. Do not imply recommendation or endorsement.

## 8. Article body template

Use the following structure only as editorial scaffolding. Bracketed copy is not publication content.

**Opening paragraph**

> [State the verified core fact, information date, present status, and scope. Identify whether the item is an announcement, project update, event, or external coverage.]

**H2**

> [Approved section heading focused on the main development]

**Body paragraph**

> [Explain the approved event, project update, or announcement in concise paragraphs. Keep planned, target, trial-operation, and completed states distinct.]

**Optional detail list**

- `[Approved fact or deliverable]`
- `[Approved date or status with its qualification]`
- `[Approved responsibility, source, or next step]`

**H2**

> [Approved context or next-step heading]

**Body paragraph**

> [Provide approved context, limitations, information date, applicable audience, and a factual next step.]

**Optional H3**

> [Approved supporting heading]

**Optional supporting paragraph**

> [Approved supporting detail. Remove this section if there is no verified content.]

### Quote rule

Use a quote only when the speaker's name, job title, organization, exact wording, context, and publication permission are approved.

**Quote**

> [Approved quotation]

**Citation**

> [Approved name, title, organization]

Remove the complete quote block if any required input is missing.

## 9. Status-specific fixed qualifications

If an article uses one of the following confirmed SiGTRON topics, keep the complete approved wording in the same reading region as the number or status.

### Xinshi, Tainan flagship AIDC site

> The SiGTRON flagship AIDC site in Xinshi, Tainan is in trial operation. The project currently plans to deploy 72 NVIDIA HGX B300 compute nodes and a VAST Data high-speed storage solution, with commercial operation targeted for Q4 2026. Final configuration and timing remain subject to project progress and acceptance results.

### Asian AIDC project pipeline

> SiGTRON's AIDC project pipeline spans six Asian markets. Taiwan's flagship site is in trial operation; opportunities in Japan, Thailand, Malaysia, Indonesia, and the Philippines are under discussion and planning.

> Approximately 800 MW is the potential aggregate capacity of opportunities currently under discussion and planning. It does not represent contracted, built, deployed, or operational capacity.

### Platform planning directions

> Planning directions include NVIDIA HGX B300, NVIDIA GB300 NVL72, and the next-generation NVIDIA Vera Rubin platform. Vera Rubin is a future planning direction and is not currently deployed.

### AI Cloud Services

> The SiGTRON AI cloud services platform is online and covers three service areas: GPU-as-a-Service (GaaS), Model-as-a-Service (MaaS), and Token-as-a-Service (TaaS). Existing customers may sign in to SiGTRON Console. Actual services and available resources depend on account permissions and project-specific configurations.

Do not shorten these sentences in a way that removes the status or limitation.

## 10. Return link and closing CTA

**Return link**

> Back to News & Events

**CTA H2**

> Start with your AIDC project or enterprise compute requirements

**CTA body**

> Share the available project context and requirements so SiGTRON can identify an appropriate next step for evaluation.

**Primary CTA**

> Discuss your project

**Secondary CTA**

> Explore AIDC delivery

## 11. Accessible labels

| Element | English accessible text |
| --- | --- |
| Breadcrumb | `Breadcrumb` |
| Article image placeholder, template only | `Article image placeholder; replace with an approved image and alternative text, or remove this section before publication` |
| External source link, where context is not otherwise clear | `[Link purpose] — external website` |
| News current-page nav item | Visible: `News & Events`; current page state enabled |
| SiGTRON logo | `SiGTRON home` |

Use the global menu, drawer, sign-in, and Footer labels in the main English copy document.

## 12. Ledger and approval requirements

Before publication, the article record in `news-and-events-content-list.csv` must contain or link to:

- approved English title, summary, category, publisher/source, and exact publication date;
- approval status `approved for publication` or equivalent recorded company status;
- source URLs or internal records for every fact, number, status, name, and quote;
- project information date for project updates;
- event date, time zone, location, status, role, external URL, and expiry handling for events;
- original publication details and URL for media coverage;
- canonical URL and homepage-feature decision;
- named reviewers or approval records for fact, brand, rights, partner, and publication review.

Every image and social asset must have a corresponding approved entry in `news-image-rights-log.csv`. Complete `news-publication-checklist.md` before changing indexing or publishing the article.
