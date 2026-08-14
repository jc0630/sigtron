# SiGTRON English website copy v1

> English localization stage 2 — Content
>
> Last updated: 2026-08-13
>
> Scope: implementation-ready English copy for the Home, AIDC Delivery, AI Cloud Services, Contact, and News & Events index pages, plus global navigation, footer, zero-content states, UI labels, and accessible names. The article and payment-term pages are specified in companion files linked below.

## 0. Authority, status, and implementation rules

This is controlled English website copy for prototype implementation and company review. Except for company-provided proper names and facts already recorded as approved, the English wording still requires company approval before public launch. It is not permission to expand a fact, product capability, legal commitment, partner relationship, or service status.

Authority order:

1. [`confirmed-facts-and-decisions.md`](../00-project/confirmed-facts-and-decisions.md) — highest-priority factual source.
2. [`legal-brand-relationship-approval-v1.md`](../01-brand/legal-brand-relationship-approval-v1.md) — approved legal entity, contracting, invoicing, data responsibility, and brand relationships.
3. [`english-brand-and-legal-localization-v1.md`](../01-brand/english-brand-and-legal-localization-v1.md) — controlled English terminology, fixed sentences, status wording, and legal guardrails.
4. This document — page-level English content. Where wording conflicts with a higher source, return to the higher source rather than editing around the limitation.

Implementation status labels used in this document:

- **Controlled English copy**: suitable for the English prototype and company wording review; not final public approval.
- **Prototype only**: must not appear as public content or be indexed.
- **Company input required**: a verified value, public approval, or asset is missing.
- **Legal input required**: do not publish, use for consent, or infer standard legal wording.

Companion specifications:

- [`english-news-article-template-v1.md`](english-news-article-template-v1.md)
- [`english-payment-terms-handling-v1.md`](english-payment-terms-handling-v1.md)

### Non-negotiable English controls

- Always write `SiGTRON`, `SignalPro`, `SignalPro Technology CO., LTD.`, `Powered by SignalPro`, and `sigtron.ai` exactly as shown.
- Do not use `turnkey` or `one-stop construction`. Use `integrated AIDC delivery`.
- Do not describe planned, target, trial-operation, or pipeline items as contracted, built, deployed, operational, generally available, or guaranteed.
- `Platform online` does not mean public self-service registration, equal resources for every account, fixed prices, a free trial, or immediate purchase.
- Expand `GPU-as-a-Service (GaaS)`, `Model-as-a-Service (MaaS)`, and `Token-as-a-Service (TaaS)` on first page-level use.
- Headings use sentence case. Approved brand and service names keep their fixed capitalization.
- English body copy uses direct, engineering-led language. Avoid hype, unsupported superlatives, performance claims, and promises.

---

# 1. Global website copy

## 1.1 SEO language and brand conventions

- HTML language: `en`
- Brand in every title: `SiGTRON`
- Page titles use a vertical bar: `Page topic | SiGTRON`
- Do not translate the Chinese logo tagline into a new English tagline. If the image containing the Chinese tagline remains, treat it as a brand image and use the accessible name specified under Home / About.

## 1.2 Navbar and mobile drawer

Fixed order on desktop and mobile:

1. `AIDC Delivery`
2. `AI Cloud Services`
3. `Project Footprint`
4. `News & Events`
5. `About SiGTRON`
6. `Customer sign-in` — utility action; link to the approved SiGTRON Console URL.

The SiGTRON logo links to Home. Do not add `Home` as a separate top-level text link. Do not add `Discuss your project` to the header or drawer.

### Accessible names and controls

| Element | English accessible text |
| --- | --- |
| Skip link | `Skip to main content` |
| Header logo link | `SiGTRON home` |
| Desktop nav | `Primary navigation` |
| Menu open button | `Open site menu` |
| Menu close button | `Close site menu` |
| Drawer title | `Site menu` |
| Drawer nav | `Mobile primary navigation` |
| Drawer backdrop | `Close site menu` |
| Customer sign-in link | Visible: `Customer sign-in`; accessible name: `Sign in to SiGTRON Console` |

Active-page behavior:

- `AIDC Delivery`, `AI Cloud Services`, and `News & Events` use the current-page state on their respective pages.
- Every News article also marks `News & Events` as the current page.
- Home section anchors do not mark a nav item active until their existing scroll-state behavior applies; `News & Events` is not activated by the Home summary section.

## 1.3 Global CTA language

Primary business CTA:

> Discuss your project

Supporting copy:

> Tell us about your AIDC project or enterprise AI compute requirements. SiGTRON will use the information to identify an appropriate next step for evaluation.

Contextual CTA labels:

- `Discuss your AIDC project`
- `Discuss enterprise AI requirements`
- `Submit an AIDC project inquiry`
- `Explore AIDC delivery`
- `Explore AI Cloud Services`
- `Customer sign-in`

Do not use `Buy now`, `Start now`, `Get instant access`, `Free trial`, or `Request a demo` unless the relevant process and claim are separately approved.

## 1.4 Global status labels

| Meaning | Visible English label |
| --- | --- |
| 平台已上線 | `Platform online` |
| 試運轉中 | `In trial operation` |
| 目標 2026 Q4 正式商轉 | `Target: commercial operation in Q4 2026` |
| 規劃導入 | `Planned for deployment` |
| 洽談／規劃中 | `Under discussion / planning` |
| 潛在總容量 | `Potential aggregate capacity` |
| 前瞻規劃中 | `Future planning direction` |
| 平台服務 | `Platform service` |

Global platform qualification:

> The SiGTRON AI cloud services platform is online. Existing customers may sign in to SiGTRON Console. Actual services and available resources depend on account permissions and project-specific configurations.

## 1.5 Footer

### Brand introduction

> Integrated AIDC delivery and enterprise AI compute services, connecting site planning, engineering, GPU compute clusters, platforms, testing, acceptance, and operations and maintenance.

### Column headings and links

**Services**

- `Integrated AIDC delivery`
- `AI Cloud Services`
- `Delivery method`

**Company**

- `About SiGTRON`
- `Customers & Ecosystem Partners`
- `News & Events`
- `Discuss your project`

**Contact**

- `[Official English postal address pending company confirmation]`
- `07-2695198`
- `sales@signalpro.com.tw`

Do not translate the postal address or add a postcode, country, or international telephone prefix until the company supplies an approved English postal format.

### Legal and secondary brand line

> © [year] SignalPro Technology CO., LTD. | Unified Business No. 95464633

> Powered by SignalPro

`Unified Business No.` is controlled English wording pending company approval. The company name and number are confirmed. Keep `Powered by SignalPro` at a secondary visual level. If a SignalPro symbol is decorative, its image alternative is empty so the visible text is announced only once.

### Footer accessible names

- Footer logo link: `SiGTRON home`
- Contact address group: `SignalPro Technology contact information`

---

# 2. Home

## 2.1 Page goal

- Establish integrated AIDC delivery as the first commercial narrative.
- Connect AIDC development with the online AI cloud services platform.
- Route AIDC owners and enterprise compute buyers to the appropriate next step.
- Present project numbers only with their approved status and limitations.

## 2.2 SEO

**Title**

> SiGTRON | Integrated AIDC Delivery and Enterprise AI Compute Services

**Meta description**

> SiGTRON coordinates integrated AIDC delivery from site assessment through operations and maintenance. Its online AI cloud platform covers GaaS, MaaS, and TaaS.

## 2.3 Hero

**Eyebrow**

> AI DATA CENTERS · AI COMPUTE SERVICES

**H1**

> From AIDC delivery to enterprise AI compute services.

**Lead**

> SiGTRON coordinates integrated AI data center (AIDC) delivery with specialist partners, connecting site planning, infrastructure, GPU compute clusters, platform integration, testing, acceptance, and operations and maintenance. Its online AI cloud services platform covers GPU-as-a-Service (GaaS), Model-as-a-Service (MaaS), and Token-as-a-Service (TaaS).

**Primary CTA**

> Discuss your project

**Secondary CTA**

> Explore integrated AIDC delivery

**Status label**

> Platform online

**Status support**

> Existing customers may sign in. Actual services and available resources depend on account permissions and project-specific configurations.

### Architecture visual

Accessible name:

> Four integrated layers from AIDC infrastructure to AI services

Visible title:

> INTEGRATED AIDC ARCHITECTURE

1. **Facility** — Site · power · cooling · racks
2. **Compute** — GPU · networking · storage
3. **Platform** — Resource management and service platforms
4. **Services** — GaaS · MaaS · TaaS

## 2.4 Start with your goal

**Eyebrow**

> START WITH YOUR GOAL

**H2**

> Are you developing an AIDC or planning enterprise AI workloads?

**Introduction**

> Each starting point calls for coordinated decisions across infrastructure, compute, and service platforms. SiGTRON begins with the project objective and defines a delivery path around the agreed scope.

### Path A

**Label**

> FOR AIDC OWNERS

**H3**

> Plan and develop an AI data center for operation

**Body**

> SiGTRON coordinates delivery with specialist partners from site assessment, design, civil works, power, and cooling through GPU compute clusters, networking, storage, platforms, testing, acceptance, and operations and maintenance.

**Link**

> Explore integrated AIDC delivery

### Path B

**Label**

> FOR ENTERPRISE AI TEAMS

**H3**

> Connect enterprise workloads with AI compute and model services

**Body**

> The SiGTRON AI cloud services platform is online. Existing customers may sign in to SiGTRON Console. Actual services and available resources depend on account permissions and project-specific configurations.

**Link**

> Explore AI Cloud Services

## 2.5 Project status and Asian footprint

**Eyebrow**

> PROJECT STATUS · ASIA

**H2**

> Project status and Asian footprint

**Lead**

> The footprint combines the flagship site in Xinshi, Tainan, which is in trial operation, with opportunities in five other Asian markets that remain under discussion and planning. Every number is presented with its current status and limitations.

### Status overview

Accessible name:

> Project status overview

1. **In trial operation** — Xinshi, Tainan — Flagship AIDC site
2. **72 nodes** — Planned for deployment — Compute-node scale
3. **Q4 2026** — Target: commercial operation — Actual timing depends on project progress and acceptance results
4. **Under discussion / planning** — Five markets · approximately 800 MW — Potential aggregate capacity, not contracted or operational capacity

**Required adjacent disclosure**

> Approximately 800 MW is the potential aggregate capacity of opportunities currently under discussion and planning. It does not represent contracted, built, deployed, or operational capacity. The 72 compute nodes and Q4 2026 date are, respectively, the currently planned deployment scale and the target timing for commercial operation.

## 2.6 Xinshi, Tainan flagship AIDC site

**Eyebrow**

> XINSHI, TAINAN · FLAGSHIP AIDC

**Status**

> In trial operation

**Target label**

> Target: commercial operation in Q4 2026

**H3**

> Xinshi, Tainan flagship AIDC site

**Lead — use without removing its qualifications**

> The SiGTRON flagship AIDC site in Xinshi, Tainan is in trial operation. The project currently plans to deploy 72 NVIDIA HGX B300 compute nodes and a VAST Data high-speed storage solution, with commercial operation targeted for Q4 2026. Final configuration and timing remain subject to project progress and acceptance results.

### Evidence table

| Label | Value | Status/support |
| --- | --- | --- |
| Compute nodes | `72 nodes` | `Planned for deployment` |
| GPU compute | `NVIDIA HGX B300` | `Planned for deployment` |
| High-speed storage | `VAST Data` | `Planned solution` |
| AIDC infrastructure | `Power · cooling · networking` | No expanded specification without evidence |
| Commercial operation | `Q4 2026` | `Target timing` |

**Disclosure**

> The 72 compute nodes are the current planned deployment scale. Q4 2026 is the target timing for commercial operation. Final equipment configuration and timing remain subject to project progress and acceptance results.

**CTAs**

- `Discuss your AIDC project`
- `Discuss enterprise AI requirements`

### Concept video

Link accessible name:

> Play the 3D-rendered concept video for the SiGTRON AI facility in Tainan; when opened as a local static file, the video opens on YouTube in a new tab

Visible play label:

> Play concept video

Visible title:

> SiGTRON AI facility in Tainan — 3D-rendered concept video

Required caption:

> 3D-rendered concept video — not footage of the site.

Do not translate the Chinese YouTube title into a different factual description or call this footage, a site tour, or an operational facility video.

## 2.7 Asian AIDC project pipeline

**Eyebrow**

> AIDC PROJECT PIPELINE · ASIA

**H3**

> Asian AIDC project pipeline

**Introduction — use without removing its qualifications**

> SiGTRON's AIDC project pipeline spans six Asian markets. Taiwan's flagship site is in trial operation; opportunities in Japan, Thailand, Malaysia, Indonesia, and the Philippines are under discussion and planning.

### Capacity definition

**Value**

> Approximately 800 MW

**Definition**

> Potential aggregate capacity of opportunities currently under discussion and planning. It does not represent contracted, built, deployed, or operational capacity.

### Map legend

Accessible name:

> Map status legend

- `Taiwan flagship site · In trial operation`
- `Five other markets · Under discussion / planning`

Map alternative text:

> Country-level map of the Asian AIDC project pipeline. Taiwan is the location of the flagship site in trial operation. Japan, Thailand, the Philippines, Malaysia, and Indonesia are markets under discussion and planning. The map does not show exact project sites.

Map caption:

> Country-level illustration; not a map of exact project sites. Base map: Sokolskar / Wikimedia Commons (GFDL).

### Six markets

| Market | Status |
| --- | --- |
| Taiwan | `Flagship site · In trial operation` |
| Japan | `Under discussion / planning` |
| Thailand | `Under discussion / planning` |
| Malaysia | `Under discussion / planning` |
| Indonesia | `Under discussion / planning` |
| Philippines | `Under discussion / planning` |

### Platform planning directions

**H4**

> Three platform planning directions

1. `NVIDIA HGX B300` — Platform planning direction
2. `NVIDIA GB300 NVL72` — Platform planning direction
3. `NVIDIA Vera Rubin` — Future planning direction; not currently deployed

**Required planning qualification**

> Planning directions include NVIDIA HGX B300, NVIDIA GB300 NVL72, and the next-generation NVIDIA Vera Rubin platform. Vera Rubin is a future planning direction and is not currently deployed.

**Final disclosure**

> Actual locations, scale, equipment platforms, and timing remain subject to project evaluation, contracts, and supply conditions. Do not publish exact cities, project addresses, individual MW figures, or platform allocation without approval.

## 2.8 News & Events summary

**Eyebrow**

> NEWS & EVENTS

**H2**

> News & Events

**Introduction**

> Company announcements, project updates, event information, and media coverage appear here only after publication approval.

**Section CTA**

> View all News & Events

### Formal zero-content state

**H3**

> No News & Events content is currently approved for publication

**Body**

> Updates will appear here after factual, brand, rights, and publication review is complete.

Do not display an empty three-card grid, duplicate a card, or add a false date, quote, case study, or image.

### Prototype-only layout state

**Notice heading**

> Layout preview — not published content

**Notice body**

> The cards below demonstrate the future layout only. Titles, dates, summaries, and sources are placeholders and must not appear on the public website, in the SEO sitemap, or in social previews.

Prototype card categories and placeholder copy:

- `Company announcement` / `[Approved company announcement title]` / `[Approved summary]` / `Publisher: [approved publisher]` / `Read announcement`
- `Project update` / `[Approved project update title]` / `[Approved summary]` / `Publisher: [approved publisher]` / `Read update`
- `Event` / `[Approved event title]` / `[Approved summary]` / `Organizer / publisher: [approved name]` / `View event information`

Date placeholder: `[YYYY.MM.DD]`. Do not use relative dates.

## 2.9 Integrated AIDC capabilities

**Eyebrow**

> INTEGRATED AIDC DELIVERY

**H2**

> Align facilities, compute, and platforms from the start

**Introduction**

> An AI data center brings civil works and critical facilities together with GPU density, networking, storage, platforms, and operations. SiGTRON coordinates these disciplines with specialist partners across the agreed project scope so interfaces, deliverables, testing, and acceptance can be addressed as part of one delivery path.

1. **Site and design** — Establish the planning basis from project objectives, workload requirements, and site conditions.
2. **Civil works and critical facilities** — Coordinate civil works, power systems, cooling, and rack-related scope.
3. **GPU compute clusters** — Include GPU, networking, and storage in coordinated system planning.
4. **Service platforms** — Connect compute resources with the platform layer required for AI services.
5. **Testing and acceptance** — Complete integration testing and delivery confirmation for the agreed project scope.
6. **Operations and expansion** — Include operational handover and future expansion needs in delivery planning.

**Disclosure**

> Actual work, responsibilities, deliverables, and acceptance criteria are defined for each project and partner scope.

**CTA**

> View the full service scope

## 2.10 Delivery path summary

**Eyebrow**

> DELIVERY PATH

**H2**

> From requirements assessment to acceptance and operations

**Lead**

> Six stages establish the project scope, roles, deliverables, and next decision points.

1. **Requirements and site assessment**  
   **Focus:** Objectives, site conditions, and workloads.  
   **Stage output:** Requirements baseline and evaluation direction.
2. **Integrated design**  
   **Focus:** An integrated facility and systems blueprint.  
   **Stage output:** Agreed scope, roles, and design basis.
3. **Engineering and construction**  
   **Focus:** Civil works, power, cooling, and racks.  
   **Stage output:** A facility environment ready for systems integration.
4. **Systems integration**  
   **Focus:** GPU, networking, storage, and platforms.  
   **Stage output:** An integrated system environment based on the project design.
5. **Testing and acceptance**  
   **Focus:** Testing, issue correction, and delivery confirmation.  
   **Stage output:** Acceptance records and agreed deliverables.
6. **Operations handover**  
   **Focus:** Handover, support, maintenance, and expansion.  
   **Stage output:** Operations and support arrangements defined by contract scope.

**CTA**

> See how we coordinate delivery

## 2.11 AI Cloud Services summary

**Eyebrow**

> AI CLOUD SERVICES

**H2**

> Platform online; services configured by account and project

**Body**

> The SiGTRON AI cloud services platform is online and covers three service areas: GPU-as-a-Service (GaaS), Model-as-a-Service (MaaS), and Token-as-a-Service (TaaS). Existing customers may sign in to SiGTRON Console. Actual services and available resources depend on account permissions and project-specific configurations.

### Cards

1. **Platform service — GPU-as-a-Service**  
   Supports the evaluation of enterprise GPU compute service requirements.  
   Available resources depend on account permissions and project-specific configurations.
2. **Platform service — Model-as-a-Service**  
   Supports the evaluation of enterprise model service adoption and usage requirements.  
   Available content depends on account permissions and project-specific configurations.
3. **Platform service — Token-as-a-Service**  
   Supports the evaluation of enterprise inference and token service requirements.  
   Available content and metering depend on account permissions and project-specific configurations.

**CTAs**

- `Discuss enterprise AI requirements`
- `Customer sign-in` — accessible name: `Sign in to SiGTRON Console`

## 2.12 Delivery confidence

**Eyebrow**

> DELIVERY CONFIDENCE

**H2**

> Build delivery confidence through scope, responsibility, status, and acceptance

1. **Defined service scope** — Confirm work boundaries from the site and engineering scope through GPU, platforms, testing, acceptance, and operations and maintenance.
2. **One coordination point** — SiGTRON coordinates cross-disciplinary work and delivery with specialist partners.
3. **Transparent status** — Keep trial operation, target commercial operation, discussion and planning, and platform-online status distinct.
4. **Delivery connected to acceptance** — Define roles, deliverables, cross-system interfaces, and acceptance methods during project planning.

## 2.13 Customers & Ecosystem Partners

**Eyebrow**

> CUSTOMERS & ECOSYSTEM PARTNERS

**H2**

> Customers & Ecosystem Partners

**Introduction**

> This section is reserved for customer and partner identities that have completed relationship, role, publication, and trademark-use approval. Approved entries must be separated into Customers, Technology Partners, Strategic Partners, and Ecosystem Partners.

### Formal zero-content state

**H3**

> No customer or partner identities are currently approved for publication

**Body**

> Information will appear here only after the relationship, role, name, logo, link, project context, and trademark use have been approved for public disclosure by the relevant parties.

Do not show numbered logo placeholders on the public English website. If UX retains the section before approvals exist, show this zero state instead of unverified names or logos. If the section is hidden, retain the same rule in the content handoff.

**Relationship note for future approved entries**

> Logos identify approved public relationships. They do not indicate equal scope, certification, recommendation, or endorsement.

INFINITIX may be placed in `Technology Partners` only after public relationship wording, logo use, trademark use, and linking are approved. The approved operational relationship remains described on the AI Cloud Services page at a lower hierarchy.

## 2.14 About SiGTRON

**Eyebrow**

> ABOUT SiGTRON

**H2**

> A connected delivery path for AI infrastructure and compute services

**Lead**

> SiGTRON focuses on integrated AIDC delivery and enterprise AI compute services, connecting cross-disciplinary delivery with the online platform's GaaS, MaaS, and TaaS service areas.

**Fixed brand relationship sentence**

> SiGTRON is the AIDC and enterprise AI compute services brand owned by SignalPro Technology CO., LTD.

Brand image accessible name, if the stacked logo with Chinese tagline remains visible:

> SiGTRON brand mark

Do not create or announce an unapproved English translation of the Chinese logo tagline.

## 2.15 Home closing CTA

**H2**

> Start with your AIDC project or enterprise compute requirements

**Body**

> Whether you are assessing a site, planning an AIDC, or defining an enterprise AI workload, share the available project context with SiGTRON to identify an appropriate next step.

**CTA**

> Discuss your project

## 2.16 Home claim traceability

| Claim group | Authority |
| --- | --- |
| AIDC scope and partner delivery | Confirmed facts: `AIDC 一站式服務範圍`; English baseline §5–6 |
| Platform online; GaaS/MaaS/TaaS; sign-in limitations | Confirmed facts: `AI 雲端服務`; English baseline §6 |
| Xinshi trial operation, 72 nodes, NVIDIA HGX B300, VAST Data, Q4 2026 target | Confirmed facts: `台南新市 AIDC 旗艦案場`; English baseline §6 |
| Six markets, approximately 800 MW potential aggregate capacity, platform planning directions | Confirmed facts: `亞洲 AIDC 專案布局`; English baseline §6 |
| Brand relationship and legal entity | Confirmed facts: `公司與網站範圍`; English baseline §2–3 |
| News and partner zero-content governance | Confirmed facts: `內容策略決策` and `仍待確認`; existing core-page copy §§1, 4 |

---

# 3. AIDC Delivery

## 3.1 Page goal

- Explain the coordinated AIDC service scope from site assessment through operations and maintenance.
- Show the six delivery stages and the role of specialist partners.
- Route owners with initial project context to an evaluation inquiry.

## 3.2 SEO

**Title**

> Integrated AIDC Delivery | Site, Engineering, GPU, Platforms and O&M | SiGTRON

**Meta description**

> SiGTRON coordinates integrated AIDC delivery with specialist partners across site assessment, design, infrastructure, GPU clusters, platforms, testing, acceptance, and O&M.

## 3.3 Hero

**Eyebrow**

> INTEGRATED AIDC DELIVERY

**H1**

> One coordination point from AIDC planning to operations.

**Lead**

> SiGTRON coordinates integrated AIDC delivery with specialist partners across the agreed project scope, from site assessment and design through infrastructure, GPU compute clusters, platform integration, testing, acceptance, and operations and maintenance.

**Primary CTA**

> Submit an AIDC project inquiry

**Secondary CTA**

> View the full service scope

### Lifecycle visual

Accessible name:

> Integrated AIDC delivery across site, compute, platforms, and operations

Visible title:

> AIDC DELIVERY LIFECYCLE

1. **Site and facilities** — Site · civil works · power · cooling
2. **Compute and data** — GPU · networking · storage
3. **Platforms and operations** — Platforms · acceptance · operations and maintenance

## 3.4 The integration challenge

**Eyebrow**

> THE INTEGRATION CHALLENGE

**H2**

> Optimizing each layer separately does not resolve cross-system interfaces

**Body**

> Site conditions, civil works, power, cooling, racks, GPU, networking, storage, and platforms affect one another. When suppliers work without a shared baseline and defined interfaces, issues may surface during equipment installation, systems integration, or acceptance. SiGTRON coordinates cross-disciplinary planning and delivery around the agreed project scope.

1. **Interdependent specifications** — Facility conditions need to reflect compute density and system requirements.
2. **Distributed supplier responsibilities** — Engineering and IT interfaces need a defined coordination role, shared baseline, and responsibility boundaries.
3. **Delivery disconnected from operations** — Platform, handover, and operations requirements need to be considered before the system reaches acceptance.

## 3.5 Full service scope

**Eyebrow**

> FULL SERVICE SCOPE

**H2**

> From the site to platforms and operations

**Lead**

> SiGTRON coordinates twelve work areas with specialist partners within the agreed project scope.

1. **Site assessment** — Review site conditions, constraints, and project objectives.
2. **Integrated design** — Establish an integrated blueprint for facilities, compute, and platforms.
3. **Civil works** — Coordinate relevant works within the approved project scope.
4. **Power systems** — Include power distribution requirements in the integrated design and delivery scope.
5. **Cooling** — Plan cooling around equipment requirements and site conditions.
6. **Racks** — Coordinate equipment configuration, space, and facility requirements.
7. **GPU** — Include GPU compute resources in cluster and service planning.
8. **Networking** — Plan the network architecture required for compute, storage, and services.
9. **Storage** — Integrate storage resources according to workload and system requirements.
10. **Platforms** — Connect resource management with the platform capabilities required for AI services.
11. **Testing and acceptance** — Perform integration testing and delivery confirmation against agreed items.
12. **Operations and maintenance** — Plan operational handover, support, maintenance, and later expansion.

**Required disclosure**

> Actual work, responsibility assignments, deliverables, and acceptance criteria are defined for each project and partner scope.

## 3.6 Delivery method

**Eyebrow**

> DELIVERY METHOD

**H2**

> Six stages establish clear responsibilities and outputs

### 01 Requirements and site assessment

**Focus**

> Confirm business objectives, expected workloads, site conditions, timing, and constraints.

**Stage output**

> Project requirements baseline and direction for further evaluation.

### 02 Integrated design

**Focus**

> Connect facility, GPU, networking, storage, and platform requirements in an integrated blueprint.

**Stage output**

> Mutually confirmed project scope, roles, and design basis.

### 03 Engineering and construction

**Focus**

> Coordinate civil works, power, cooling, and racks within the approved scope.

**Stage output**

> A facility environment prepared for equipment and systems integration.

### 04 Cluster and platform integration

**Focus**

> Integrate GPU, networking, storage, and platforms while addressing cross-layer system interfaces.

**Stage output**

> A system environment integrated according to the project design.

### 05 Testing and acceptance

**Focus**

> Conduct agreed tests, correct identified issues, and confirm delivery.

**Stage output**

> Acceptance records and deliverables within the approved scope.

### 06 Operations handover

**Focus**

> Complete operational handover and define subsequent support, maintenance, and expansion arrangements.

**Stage output**

> Operations and support arrangements defined by the contract scope.

## 3.7 Delivery model

**Eyebrow**

> COORDINATED DELIVERY

**H2**

> SiGTRON coordinates the project; specialist partners deliver within defined scopes

**Lead**

> AIDC delivery spans multiple engineering and technology disciplines. SiGTRON acts as the coordination point and works with design, engineering, equipment, and platform partners according to project requirements. Each party's scope, interfaces, responsibilities, and deliverables are defined during project planning.

Relationship visual accessible name:

> Relationship among the AIDC owner, SiGTRON, and specialist partners

1. **AIDC owner** — Project objectives and requirements baseline
2. **SiGTRON** — Coordination point and project integration
3. **Specialist partners** — Engineering · facilities · systems · platforms

**Delivery principles**

- Use the customer's AIDC objectives as the shared design baseline.
- Define cross-system interfaces before equipment and engineering execution.
- Manage scope, changes, testing, and acceptance through project documentation.
- Include operations requirements in delivery decisions at an early stage.

## 3.8 FAQ

**Eyebrow**

> FAQ

**H2**

> Questions about integrated AIDC delivery

### Can SiGTRON begin with a site assessment?

> Yes. The service scope may begin with site assessment and design, then connect engineering, GPU compute clusters, platforms, testing, acceptance, and operations and maintenance. The actual scope is confirmed for each project.

### Does SiGTRON perform every discipline independently?

> No. SiGTRON coordinates and integrates the project, working with engineering and technology partners across the relevant specialist disciplines.

### Can the scope include GPU, networking, storage, and platforms?

> These areas may be included in planning and integration. Brands, specifications, quantities, and architecture are confirmed according to workloads, site conditions, and project requirements.

### How are project timing and cost evaluated?

> Timing and cost depend on the site, project scale, equipment, engineering scope, and supply conditions. An initial requirements and site review is needed before a project plan can be developed.

### In which regions is service available?

> Service availability depends on the project location and delivery scope. Include the proposed location in the inquiry so the team can evaluate it. Do not infer service availability from the six-market project pipeline.

## 3.9 Closing CTA

**H2**

> Start with the site and your delivery objectives

**Body**

> Share the proposed location, target timing, workload, current project stage, and areas where support is required. SiGTRON will use the available information to identify an appropriate evaluation path.

**CTA**

> Submit an AIDC project inquiry

## 3.10 AIDC inquiry prompts

- `Proposed site or region`
- `Current project stage`
- `Target timing`
- `Initial GPU or workload requirements`
- `Areas where SiGTRON support is requested`

Do not add a `New build / existing site` option until company approval is recorded.

## 3.11 AIDC claim traceability and proof requests

| Item | Source/status |
| --- | --- |
| Twelve-area service scope and specialist-partner delivery | Confirmed facts: `AIDC 一站式服務範圍`; English baseline §5–6 |
| Six delivery stages | Existing approved-direction core-page copy; each actual deliverable and criterion remains project-specific |
| Regions served | **Company input required**; do not equate pipeline markets with service coverage |
| Public partner names/logos | **Company input required**; relationship and trademark approval required |
| Public process images, design drawings, facility photos, or case material | **Company input required** and rights review required |
| Standard timing, cost, testing, acceptance, and O&M methods | **Company input required** before more specific claims are added |

---

# 4. AI Cloud Services

## 4.1 Page goal

- Explain the platform-online status and three service areas without implying equal access or public product packages.
- Route existing customers to SiGTRON Console.
- Route new enterprise requirements to workload evaluation, not self-service purchase.

## 4.2 SEO

**Title**

> Enterprise AI Cloud Services | GaaS, MaaS and TaaS | SiGTRON

**Meta description**

> The SiGTRON AI cloud services platform is online across GaaS, MaaS, and TaaS. Access and available resources depend on account permissions and project-specific configurations.

## 4.3 Hero

**Eyebrow**

> SiGTRON AI CLOUD SERVICES

**Status label**

> Platform online

**Status support**

> Actual services and available resources depend on account permissions and project-specific configurations.

**H1**

> Connect enterprise compute, model, and inference requirements through an online platform.

**Lead**

> The SiGTRON AI cloud services platform is online and covers three service areas: GPU-as-a-Service (GaaS), Model-as-a-Service (MaaS), and Token-as-a-Service (TaaS). Existing customers may sign in to SiGTRON Console. Actual services and available resources depend on account permissions and project-specific configurations.

**Primary CTA**

> Discuss enterprise AI requirements

**Secondary CTA**

> Customer sign-in

Secondary CTA accessible name:

> Sign in to SiGTRON Console

### Platform structure visual

Accessible name:

> AI cloud service access structure

Visible title:

> PLATFORM SERVICE STRUCTURE

1. **Compute resources** — GPU compute and infrastructure
2. **Account permissions** — Defined for each account
3. **Project configuration** — Defined by workloads and project scope
4. **Platform services** — GaaS · MaaS · TaaS

## 4.4 Three service areas

**Eyebrow**

> THREE SERVICE AREAS

**H2**

> From GPU compute to model and inference requirements

**Introduction**

> SiGTRON connects enterprise requirements across GaaS, MaaS, and TaaS. The available content for each service area depends on account permissions and project-specific configurations.

### GPU-as-a-Service (GaaS)

**Label**

> Platform service

**Summary**

> Supports the evaluation of enterprise GPU compute service requirements.

**Requirements to discuss**

- Workload and use case
- Expected resource scale and timing
- Account permissions and project scope

**Qualification**

> Available GPU resources, resource model, and region depend on account permissions and project-specific configurations.

### Model-as-a-Service (MaaS)

**Label**

> Platform service

**Summary**

> Supports the evaluation of enterprise model service adoption and usage requirements.

**Requirements to discuss**

- Current model and application stage
- Intended adoption scenario and usage
- Account permissions and project scope

**Qualification**

> Available models, deployment methods, and interfaces depend on account permissions and project-specific configurations.

### Token-as-a-Service (TaaS)

**Label**

> Platform service

**Summary**

> Supports the evaluation of enterprise model inference and token service requirements.

**Requirements to discuss**

- Inference use case
- Expected scale and timing
- Model, interface, and metering requirements

**Qualification**

> Available models, interfaces, and metering methods depend on account permissions and project-specific configurations.

Do not add public prices, SLA, availability, latency, GPU models, model lists, API specifications, usage units, purchasing controls, or a free-trial CTA without approved evidence.

## 4.5 Platform access

**Eyebrow**

> PLATFORM ACCESS

**H2**

> Platform online; services configured by account and project

**Body**

> The SiGTRON AI cloud services platform is online. Existing customers may sign in to SiGTRON Console. Actual services and available resources depend on account permissions and project-specific configurations.

1. **Existing customers** — Customers with an account may sign in to SiGTRON Console.
2. **Account permissions** — Accessible services depend on the permissions set for the individual account.
3. **Project-specific configurations** — Available resources and service scope depend on the individual project configuration.

**CTA**

> Customer sign-in

Accessible name:

> Sign in to SiGTRON Console

### Payment information entry — safe English handling

**Link label**

> Payment and subscription information — English legal translation pending

**Support text**

> The English legal translation is pending company and legal approval. View the Chinese source text and its review status on the information page. Do not use that page to obtain consent, bind a card, subscribe, or make a payment.

Full page and dialog copy: [`english-payment-terms-handling-v1.md`](english-payment-terms-handling-v1.md).

## 4.6 Enterprise requirements

**Eyebrow**

> ENTERPRISE REQUIREMENTS

**H2**

> Begin with the workload, then define services and available resources

1. **Enterprise teams with GPU workloads** — Share the use case, initial scale, and timing as the basis for evaluating GaaS requirements.
2. **Enterprises planning model services** — Describe the current model and application stage to establish the direction for a MaaS project configuration.
3. **Teams planning inference and token services** — Describe the inference use case and intended usage to evaluate TaaS content and project conditions.

**Audience qualification**

> This page is for enterprise workload requirements. Other data center operators and GPU cloud operators are not the primary audience.

## 4.7 Engagement path

**Eyebrow**

> ENGAGEMENT

**H2**

> Use the appropriate path for an existing account or a new enterprise requirement

**Introduction**

> Existing customers may sign in to the platform. New enterprise inquiries may begin with workload context so SiGTRON can evaluate an appropriate service and project configuration.

1. **Existing customer sign-in**  
   **Entry point:** SiGTRON Console.  
   **Principle:** Use the services available to the account.
2. **New enterprise workload**  
   **Input:** Use case, model stage, expected scale, and timing.  
   **Principle:** Evaluate the requirement against actual project conditions.
3. **Project configuration**  
   **Scope:** Service content and available resources.  
   **Outcome:** Confirm an appropriate next step for engagement.

**Disclosure**

> Platform online does not mean that every account can access the same resources, nor does it indicate a free trial or immediate purchase. Actual services and available resources depend on account permissions and project-specific configurations.

## 4.8 Technology ecosystem

**Eyebrow**

> TECHNOLOGY ECOSYSTEM

**H2**

> SiGTRON coordinates the customer-facing service with technology partners

**Lead and relationship statement — use without rewriting**

> SignalPro Technology CO., LTD. operates the platform under the SiGTRON brand, manages customer accounts, and provides customer-facing services. INFINITIX is the backend white-label technology platform partner and is not the contracting or invoicing entity for SiGTRON customers.

Relationship visual accessible name:

> Responsibilities across enterprise requirements, SiGTRON, and technology partners

1. **Enterprise requirements** — Workloads and use cases
2. **SiGTRON** — Service planning and customer-facing coordination
3. **Technology partners** — Platform and infrastructure capabilities within approved scopes

Do not place INFINITIX in the Hero, service names, product labels, or primary CTA. Do not use an INFINITIX logo or link until its public and trademark-use approval is recorded.

## 4.9 Status and closing entry points

**Status label**

> Platform online

**Status support**

> The SiGTRON AI cloud services platform is online. Actual services and available resources depend on account permissions and project-specific configurations.

**H2**

> Choose the appropriate enterprise entry point

**Lead**

> Existing customers may sign in to SiGTRON Console. New enterprise inquiries may share a GPU workload, model deployment stage, or inference use case for evaluation against project conditions.

**CTAs**

- `Discuss enterprise AI requirements`
- `Customer sign-in` — accessible name: `Sign in to SiGTRON Console`

## 4.10 Closing CTA band

**H2**

> Sign in to the platform or discuss an enterprise AI requirement

**Body**

> Existing customers may sign in to SiGTRON Console. New enterprise inquiries are evaluated based on workload requirements and project conditions.

**CTA**

> Discuss enterprise AI requirements

## 4.11 AI Cloud claim traceability and proof requests

| Item | Source/status |
| --- | --- |
| Platform online, three service areas, existing customer sign-in | Confirmed facts: `AI 雲端服務`; English baseline §6 |
| Access and resource limitations | Confirmed facts: `AI 雲端服務`; English baseline §4 and §6 |
| SignalPro/SiGTRON/INFINITIX responsibilities | Confirmed facts: `公司與網站範圍` and `INFINITIX 合作揭露`; English baseline §7 |
| New enterprise evaluation path | Confirmed facts: `AI 雲端服務`; English baseline §6 |
| Public GPU models, regions, resource types, model lists, interfaces, API, metering, price, and SLA | **Company/product input required**; do not publish until approved |
| Payment and subscription terms | **Company/legal input required**; governed by the companion payment handling document |

---

# 5. Contact

## 5.1 Page goal

- Provide one inquiry entry point for AIDC, enterprise AI compute, and approved partnership discussions.
- Explain the legal/contracting entity before the form.
- Keep the static prototype unambiguously non-submitting and direct users to the confirmed phone or email instead.

## 5.2 SEO

**Title**

> Discuss an AIDC or Enterprise AI Project | SiGTRON

**Meta description**

> Discuss an AIDC project or enterprise GPU compute, model, inference, or partnership requirement with SiGTRON. The static prototype form does not submit data.

For the production website, remove the final sentence only after the approved submission process and privacy notice are implemented.

## 5.3 Hero

**Eyebrow**

> START A CONVERSATION

**H1**

> Start with your AIDC project or enterprise compute requirements.

**Lead**

> Tell us about your AIDC project or enterprise AI workload. SiGTRON will use the available context to identify an appropriate next step for evaluation.

## 5.4 Project inquiry introduction

**Eyebrow**

> PROJECT INQUIRY

**H2**

> Discuss an AIDC or enterprise AI requirement

**Lead**

> If some details are not yet available, share the conditions you know. The actual project scope is confirmed during evaluation.

### Required disclosures

Accessible name for disclosure group:

> Contracting entity and static prototype information

**Contracting entity — use without rewriting**

> SiGTRON is the customer-facing service brand. Formal quotations and invoices for AIDC and AI cloud services are issued by, and contracts are entered into with, SignalPro Technology CO., LTD.

**Static prototype notice — use without rewriting**

> This is a static prototype. Information entered here is not sent to SiGTRON, SignalPro Technology CO., LTD., or any form service provider. Do not enter personal information. The production site's data-submission process and full privacy notice must be completed and approved before launch.

**Fallback contact — use without rewriting**

> This form does not submit data. To contact us, call 07-2695198 or email sales@signalpro.com.tw.

## 5.5 Information to prepare

**H3**

> Information that can help frame the discussion

- **AIDC project** — Proposed site, current project stage, target timing, workload, and areas where support is requested.
- **Enterprise compute** — AI use case, model stage, expected scale, and timing.
- **Partnership inquiry** — Company background, proposed role, and topic for discussion.

Do not add response-time or business-hours commitments.

## 5.6 Static prototype form copy

The following copy is for the static prototype only. It is not a privacy notice or consent mechanism.

### Form error summary

**H3**

> Please review the following fields

The summary receives keyboard focus after an invalid submission attempt and links each message to its field.

### Fieldset 01

**Legend**

> 01 Contact details

| Field label | Requirement | Error text |
| --- | --- | --- |
| `Name` | `Required` | `Enter your name.` |
| `Company` | `Required` | `Enter your company name.` |
| `Job title` | `Optional` | — |
| `Email` | `Required` | Empty: `Enter your email address.` Invalid: `Enter a valid email address.` |
| `Phone` | `Optional` | — |

### Fieldset 02

**Legend**

> 02 Inquiry type

**Label**

> Inquiry type

**Requirement**

> Required

**Options**

- `Select one`
- `Integrated AIDC delivery`
- `Enterprise AI compute / service requirements`
- `GaaS — GPU compute`
- `MaaS — model services`
- `TaaS — inference and token services`
- `Partnership inquiry`
- `Not yet sure`

**Error**

> Select an inquiry type.

### Fieldset 03

**Legend**

> 03 Project context

**Current stage — Optional**

- `Select one`
- `Initial research`
- `Requirements planning`
- `Supplier evaluation`
- `Preparing for execution`
- `Other`

**Target timing — Optional**

Placeholder:

> For example, a target start month or year

**Project location / proposed site — Optional**

Placeholder:

> For AIDC projects, include the country, city, or available site information

### Fieldset 04

**Legend**

> 04 Requirement summary and prototype confirmation

**Requirement summary — Required**

Placeholder:

> Describe the AIDC, GPU workload, model deployment, inference service, or partnership requirement.

Error:

> Provide a brief summary of your requirement.

**Prototype-only checkbox**

> I have read the prototype notice. This checkbox demonstrates the form flow only; no data is submitted.

Error:

> Confirm that you understand this is a non-submitting prototype.

### Prototype action and status

**Button**

> Check fields — prototype only

**Success/status message**

> Field validation is complete. This is a static prototype; no data was submitted.

Do not use `Submit inquiry` on the static English prototype because it creates a false submission expectation. The production label may become `Submit inquiry` only after the data process, full privacy notice, service provider, and actual submission behavior are implemented and approved.

## 5.7 Contact claim traceability and production blockers

| Item | Source/status |
| --- | --- |
| Customer-facing brand, contracting, quotation, and invoicing entity | Confirmed facts: `公司與網站範圍`; English baseline §7 |
| Static form behavior and fallback contact | Confirmed facts: `公司與網站範圍` and `內容策略決策`; English baseline §7 |
| Phone and email | Confirmed facts: `公司與網站範圍` |
| English postal address | **Company input required** |
| Production form service provider, data flow, storage location/period, privacy notice, and consent | **Company/legal input required before production launch** |

---

# 6. News & Events index

## 6.1 Page goal

- Present only approved company announcements, project updates, event information, and media coverage.
- Provide clear categories, exact dates, source/publisher information, content status, and appropriate destination links.
- Keep the first release static; do not imply a CMS, search function, or publishing backend.

## 6.2 Indexing state

- Keep `noindex, nofollow` while the page contains only layout placeholders.
- Remove the directive only after approved public content replaces every placeholder and the launch checklist is complete.
- A formal zero-content page may remain accessible, but the SEO/indexing decision requires production and company approval. Do not index prototype notices or placeholder cards.

## 6.3 SEO

**Title**

> News & Events | SiGTRON

**Meta description**

> View SiGTRON company announcements, project updates, event information, and media coverage approved for publication.

## 6.4 Breadcrumb and page header

Breadcrumb accessible name:

> Breadcrumb

Breadcrumb:

> Home / News & Events

**Eyebrow**

> NEWS & EVENTS

**H1**

> News & Events

**Lead**

> View SiGTRON company announcements, project updates, event information, and media coverage approved for publication.

Editorial banner alternative:

- If the approved image is decorative: empty alternative text.
- If the image conveys article-specific information: use approved descriptive alternative text from the image rights log.
- Do not use a generated documentary-style event or facility image to fill the layout.

## 6.5 Listing and filters

Visually hidden H2:

> News and events listing

Filter group accessible name:

> Filter by content category

| Filter | Content code |
| --- | --- |
| `All` | `all` |
| `Company announcements` | `company` |
| `Project updates` | `project` |
| `Events` | `event` |
| `Media coverage` | `media` |

Results-count live region:

- Zero: `No approved items in this category.`
- One: `1 approved item.`
- More than one: `[n] approved items.`
- Prototype only: `4 layout examples — not published content.`

## 6.6 Card copy and required fields

All public cards require an approved category, publication date, title, summary, publisher/source, and destination. Dates use an absolute format and a machine-readable `datetime` value.

### Company announcement

- Category: `Company announcement`
- Date: `[YYYY.MM.DD]`
- Title: `[Approved company announcement title]`
- Summary: `[Approved English summary]`
- Source label: `Publisher: [approved publisher]`
- CTA: `Read announcement`

### Project update

- Category: `Project update`
- Date: `[YYYY.MM.DD]`
- Status: `[Approved project status as of the stated information date]`
- Title: `[Approved project update title]`
- Summary: `[Approved English summary with status qualification]`
- Source label: `Publisher: [approved publisher]`
- CTA: `Read project update`

### Event

- Category: `Event`
- Publication date: `[YYYY.MM.DD]`
- Event date/time: `[Approved absolute date and time, including time zone where needed]`
- Location: `[Approved location]`
- Status: `Upcoming` / `Registration open` / `Registration closed` / `Ended` / `[other approved status]`
- Title: `[Approved event title]`
- Summary: `[Approved English summary]`
- Source label: `Organizer / publisher: [approved name]`
- CTA: `View event information`

Update the status and CTA when registration closes, the event ends, or the external link expires. Do not retain `Register now` after it is no longer valid.

### Media coverage

- Category: `Media coverage`
- Original publication date: `[YYYY.MM.DD]`
- Title: `[Approved media-coverage title or approved on-site framing title]`
- Summary: `[SiGTRON-authored approved summary; do not reproduce the article]`
- Source label: `Publication: [approved publication name]`
- CTA: `View original coverage`
- Accessible external-link suffix where visible context is insufficient: `— external website`

Do not imply that the publication recommends or endorses SiGTRON.

## 6.7 Zero-content states

### Entire page: zero approved items

**H3**

> No News & Events content is currently approved for publication

**Body**

> Updates will appear here after factual, brand, rights, and publication review is complete.

Remove or hide filters, result count, cards, and pagination in this state.

### Selected category: zero approved items

**H3**

> No approved [category name] at this time

**Body**

> View all approved News & Events, or check this category again after new content has completed review.

**Button**

> View all News & Events

## 6.8 Prototype-only notice

**Heading**

> Layout preview — not published content

**Body**

> This page does not yet contain approved News & Events content. The cards below demonstrate categories, text length, and filtering only. Replace or remove every example before launch.

Every placeholder card, page title, and template route remains `noindex, nofollow` and must not enter an SEO sitemap or social preview.

## 6.9 Closing CTA

**H2**

> Start with your AIDC project or enterprise compute requirements

**Body**

> Share the available project context and requirements so SiGTRON can identify an appropriate next step for evaluation.

**CTAs**

- `Discuss your project`
- `Explore AIDC delivery`

## 6.10 News claim traceability and content governance

| Item | Source/status |
| --- | --- |
| Four categories, static maintenance, homepage selection limits | Confirmed facts: `內容策略決策`; existing core-page copy §4 |
| First approved public items | **Company input required**; current approved item count is zero |
| Dates, sources, status, links, quotes, names, and project facts | Must trace to the content ledger and source record before publication |
| Images, logos, screenshots, captions, and social preview assets | Must trace to the image rights log |
| Article structure and variants | Companion article template |

---

# 7. Production content and asset requests

The following inputs are required before the corresponding English content can move from controlled copy to approved public copy:

1. Company word-for-word approval of this English copy and the Brand Guardian terminology baseline.
2. Official English postal address and any approved international phone display.
3. Approved English tagline, if the company wants one. Do not create one from the Chinese logo tagline.
4. Public customer and partner list with role classification, relationship wording, project context, logo files, link, and bilateral trademark/publication approval.
5. First approved News & Events items with exact dates, sources, rights, partner approvals, homepage-feature status, and expiry rules.
6. AIDC service regions, public project examples, partner roles, delivery images, process evidence, testing/acceptance methods, and O&M detail.
7. Public AI Cloud details for GPU resources, regions, models, interfaces, APIs, metering, pricing, SLA, or availability, if any are to be shown.
8. Approved INFINITIX public wording, logo/trademark use, and link treatment.
9. Approved Chinese payment-term source version, legal status, version number, effective date, and approved English legal translation.
10. Production inquiry-form service provider, data flow, storage location/period, privacy notice, consent text, and actual submission behavior.

Until those inputs exist, retain the zero-content states and explicit pending labels in this package.
