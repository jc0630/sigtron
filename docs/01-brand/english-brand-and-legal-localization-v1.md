# SiGTRON 英文品牌與法律在地化基線 v1

> Brand Guardian 英文多語系第 1 階段交付
>
> 最後更新：2026-08-13
>
> 適用範圍：`sigtron.ai` 英文版的品牌名稱、英文語氣、術語、狀態宣稱、公司關係揭露及付款條款呈現護欄。

## 1. 文件權限與狀態標示

本文件把「已由公司確認的事實」與「為英文網站制定的翻譯建議」分開。除原本已由公司提供或確認的英文專有名稱外，本文件中的英文句子是 **Brand Guardian 受控英譯基線**，可供下一階段製作 Prototype 與送審，但不等於公司、法務或合作方已逐字核准。

內容權限依序如下：

1. `docs/00-project/confirmed-facts-and-decisions.md`：網站事實的最高優先來源。
2. `docs/01-brand/legal-brand-relationship-approval-v1.md`：法定、締約、開票、資料責任及品牌關係的核准來源。
3. `docs/01-brand/brand-foundation-v1.md`：定位、語氣、訊息層級與視覺方向。
4. 本文件：把上述已核准中文事實轉為保守、可追溯的英文表達；不得擴張原意。

狀態標示：

- **[公司已核准]**：公司已確認的名稱、事實或關係，可作為英譯來源。
- **[Brand Guardian 基線]**：下一階段應沿用的受控英文文案；仍待公司完成英文逐字核准。
- **[待公司確認]**：需要公司提供正式寫法、素材權限或對外核准。
- **[待法務核准]**：不得作為正式條款、同意文字或法律承諾發布。

若英文與已核准中文事實有衝突，退回中文權威來源，不自行以較流暢的英文擴張宣稱。

## 2. 名稱、大小寫與商標用法

| 項目 | 固定寫法 | 狀態與使用規則 |
|---|---|---|
| 對外主品牌 | `SiGTRON` | **[公司已核准]**。每次均保留此大小寫；禁用 `Sigtron`、`SIGTRON`、`SiGtron`。不得以 CSS `text-transform` 改變品牌字樣。 |
| 中文品牌名稱 | `希格創` | **[公司已核准]**。英文網站不另造羅馬拼音或翻譯，通常直接使用 `SiGTRON`。 |
| 公司品牌簡稱 | `SignalPro` | **[公司已核准]**。是同一法人的對外品牌簡稱，不是另一家公司；禁用 `Signalpro` 或把它寫成第三方母公司。 |
| 英文法定公司名稱 | `SignalPro Technology CO., LTD.` | **[公司已核准]**。法律、報價、合約、開票、付款及個資情境須逐字使用此大小寫與標點，不改寫為 `SignalPro Technology Co., Ltd.` 或 `SignalPro Technology`。 |
| 中文法定公司名稱 | `希格諾科技股份有限公司` | **[公司已核准]**。需要中英並列或核對登記主體時保留。 |
| 次級品牌署名 | `Powered by SignalPro` | **[公司已核准]**。只作 Footer 次級品牌背書；`Powered by` 不全大寫、不翻譯、不改成 `Powered by SignalPro Technology`。 |
| 網站網域 | `sigtron.ai` | 網域一律小寫。 |
| 客戶平台 | `SiGTRON Console` | **[Brand Guardian 基線]**。URL 保持 `console.sigtron.ai` 或已核准登入網址；不得稱為 INFINITIX Console。 |
| AI 雲服務名稱 | `SiGTRON AI Cloud Services` | **[Brand Guardian 基線]**。作正式頁名時使用 Title Case；一般句子可寫 `the SiGTRON AI cloud services platform`。 |
| 服務縮寫 | `GaaS`, `MaaS`, `TaaS` | 維持此大小寫。每頁第一次出現時分別展開為 `GPU-as-a-Service`, `Model-as-a-Service`, `Token-as-a-Service`。 |

### Logo 與商標護欄

- SiGTRON 是 Navbar、Hero、服務名稱及主要 CTA 的唯一主品牌。
- SignalPro 只在公司關係、法律資訊、Footer 及低層級的 `Powered by SignalPro` 署名出現；不得與 SiGTRON 在 Hero 形成同權重聯名。
- `Powered by SignalPro` 表示 SiGTRON 由同一家公司擁有並打造；不得延伸解讀為第三方平台供應、技術認證、效能保證或原廠背書。
- 未取得正式商標規範前，不加 `®` 或 `™`，不自行翻譯標語，不重排、重繪、改色或拆解現有 Logo。
- 公司提供的 SignalPro company lockup 素材顯示 `SignalPro Technology Co., Ltd.`，與公司已核准的法定英文名稱 `SignalPro Technology CO., LTD.` 大小寫不一致。素材維持原檔、不自行修改；但在法律文字中只能使用已核准法定寫法。該 lockup 是否可用於法律敏感位置，**[待公司確認]**。

## 3. 英文品牌關係與使用層級

### 固定品牌關係句

**[Brand Guardian 基線｜待公司逐字核准]**

> SiGTRON is the AIDC and enterprise AI compute services brand owned by SignalPro Technology CO., LTD.

使用位置：About、公司介紹或第一次需要釐清品牌與法人關係之處。不得把 SiGTRON 稱為 company、legal entity、subsidiary、affiliate 或 contracting party。

### `Powered by SignalPro`

- 固定放在 Footer，視覺權重低於 SiGTRON Logo 與法定署名。
- 不在 Navbar、Hero、服務卡、產品標題或主要 CTA 使用。
- 不改成 `A SignalPro Company`、`SiGTRON by SignalPro` 或 `Powered by SignalPro Technology CO., LTD.`。
- 若 SignalPro 圖形 Logo 已由圖片呈現，輔助文字仍使用完整字串 `Powered by SignalPro`；Logo 的替代文字不得重複造成螢幕閱讀器朗讀兩次。

## 4. 英文 Voice & Tone

### 核心語氣

- **Precise**：先說範圍、狀態、責任與限制，不用形容詞代替證據。
- **Engineering-led**：以架構、界面、流程、交付物、測試與驗收建立信任。
- **Commercially clear**：把技術內容連結到工作負載、專案範圍、時程與營運需求。
- **Evidence-bound**：已完成、規劃中、目標時程、帳號權限與個別專案設定必須清楚分開。
- **Confident but restrained**：用直接的主動語態，不用炒作、不做未核准承諾。

### 句型原則

1. 先寫目前可確認的事實。
2. 同一閱讀區塊緊接狀態或範圍限定。
3. 說明 SiGTRON 統籌角色與合作夥伴共同交付關係。
4. 最後才使用 `Discuss your project` 或 `Submit an inquiry` 等非交易型 CTA。

- 只有已核准的確定事實才使用 `is`、`has` 或 `provides`。
- 規劃使用 `planned`, `under planning`, `targeted for`；不得用 `will` 把目標寫成承諾。
- 可用內容依條件而異時使用 `depends on account permissions and project-specific configurations`。
- `can` 只用於有證據的能力；範圍仍待專案確認時改用 `may include` 或 `is defined for each project`。
- 標題採 sentence case；品牌與服務專名依本文件固定大小寫。

### 禁用或需證據的英文

- `world-class`, `industry-leading`, `best-in-class`, `unmatched`, `revolutionary`
- `guaranteed`, `zero downtime`, `always available`, `secure by default`
- `fully operational`, `production-ready`, `generally available`，除非與核准狀態完全相符
- `instant access`, `instant deployment`, `on-demand GPU`, `buy now`, `free trial`
- `turnkey`，除非合約已明確核准 SiGTRON 的單一總責與交付定義；一般網站改用 `integrated AIDC delivery`
- `proprietary platform`, `built entirely in-house` 或任何暗示 INFINITIX 平台完全由 SiGTRON 自研的說法
- 未核准的價格、SLA、可用率、延遲、效能、認證、GPU 庫存、客戶、案例、支援時效或法遵宣稱

## 5. 受控術語表

| 中文來源 | 英文固定／建議寫法 | 使用注意 |
|---|---|---|
| AI 資料中心（AIDC） | `AI data center (AIDC)` | 每頁首次面向一般讀者時先展開；後文可只寫 `AIDC`。 |
| AIDC 一站式建置 | `integrated AIDC delivery` | 避免 `one-stop construction`；未有合約總責證據時不用 `turnkey`。 |
| AIDC 建置 | `AIDC delivery` 或 `AIDC development` | 導覽與服務名稱優先 `AIDC Delivery`；不要一律縮成 `construction`。 |
| 統籌 | `coordinates` / `coordinates delivery` | 不把合作夥伴共同工作寫成 SiGTRON 獨立完成。 |
| 共同交付 | `delivers with specialist partners` | 可加 `within the agreed project scope`，不暗示未核准總包責任。 |
| 場址評估 | `site assessment` |  |
| 設計 | `design` |  |
| 土建 | `civil works` |  |
| 電力 | `power systems` |  |
| 冷卻 | `cooling` |  |
| 機櫃 | `racks` |  |
| GPU 運算叢集 | `GPU compute clusters` | 不延伸為特定庫存或效能。 |
| 網路／儲存 | `networking / storage` |  |
| 平台整合 | `platform integration` | 不寫成完全自研平台。 |
| 測試驗收 | `testing and acceptance` | 不用 `certification`。 |
| 維運 | `operations and maintenance` / `O&M` | 第一次使用時先展開再使用縮寫。 |
| 企業 AI 算力服務 | `enterprise AI compute services` | 優先於較空泛的 `computing power`。 |
| 算力需求 | `compute requirements` | CTA 可寫 `Discuss your compute requirements`。 |
| AI 雲端服務 | `AI cloud services` | 頁名可用 `AI Cloud Services`。 |
| 三項服務方向 | `three service areas` | 避免把未核准細節寫成三個固定公開產品方案。 |
| 平台已上線 | `Platform online` | 不等於所有訪客可註冊、購買或存取相同資源。 |
| 現有客戶 | `existing customers` | 不改成 `all customers` 或 `anyone`。 |
| 帳號權限 | `account permissions` |  |
| 個別專案設定 | `project-specific configurations` |  |
| 可用資源 | `available resources` | 必須與帳號權限及專案限定一起出現。 |
| 試運轉中 | `in trial operation` | 禁用 `fully operational`、`commercially operational`。 |
| 正式商轉 | `commercial operation` | 目標時程使用 `targeted for`。 |
| 規劃導入 | `planned for deployment` | 禁用 `deployed`、`installed`。 |
| 洽談中 | `under discussion` | 禁用 `contracted`、`secured`。 |
| 規劃中 | `in planning` / `under planning` | 禁用 `under construction`，除非事實另有核准。 |
| 洽談／規劃中 | `under discussion and planning` | 需要時附非簽約、非建置、非營運限定。 |
| 專案布局 | `project footprint` | 規劃案件區可用 `project pipeline`，但須緊接狀態限定。 |
| 潛在總容量 | `potential aggregate capacity` | 不單獨使用 `capacity`，避免被理解為已建置容量。 |
| 前瞻規劃方向 | `future planning direction` | 禁用 `currently deployed` 或確定承諾式 roadmap。 |
| 3D 渲染概念影片 | `3D-rendered concept video` | 必須接 `not footage of the site`。 |
| 客戶登入 | `Customer sign-in` | 連到 SiGTRON Console；不是主要銷售 CTA。 |
| 洽談專案 | `Discuss your project` | 優先於 `Buy now`, `Start now`, `Get instant access`。 |
| 法定／締約主體 | `legal / contracting entity` | 必須使用正式公司全名。 |
| 開票主體 | `invoicing entity` | 必須使用正式公司全名。 |
| 白牌技術平台合作夥伴 | `white-label technology platform partner` | 只在低層級技術／生態系揭露使用。 |
| 統一編號 | `Unified Business No.` | **[Brand Guardian 基線｜待公司確認英文標籤]**；不自行改稱其他登記或稅籍種類。 |

## 6. AIDC、AI Cloud 與狀態宣稱固定英譯

以下句子可作英文 Prototype 與內容送審的固定基線；不可刪除限定語後發布。

### AIDC 服務範圍

> SiGTRON coordinates integrated AIDC delivery with specialist partners across the agreed project scope, from site assessment and design through infrastructure, GPU compute clusters, platform integration, testing, acceptance, and operations and maintenance.

### 台南新市旗艦案場

> The SiGTRON flagship AIDC site in Xinshi, Tainan is in trial operation. The project currently plans to deploy 72 NVIDIA HGX B300 compute nodes and a VAST Data high-speed storage solution, with commercial operation targeted for Q4 2026. Final configuration and timing remain subject to project progress and acceptance results.

素材限定：

> 3D-rendered concept video — not footage of the site.

### 亞洲 Project Pipeline

> SiGTRON's AIDC project pipeline spans six Asian markets. Taiwan's flagship site is in trial operation; opportunities in Japan, Thailand, Malaysia, Indonesia, and the Philippines are under discussion and planning.

容量限定句必須與數字同區呈現：

> Approximately 800 MW is the potential aggregate capacity of opportunities currently under discussion and planning. It does not represent contracted, built, deployed, or operational capacity.

前瞻平台限定：

> Planning directions include NVIDIA HGX B300, NVIDIA GB300 NVL72, and the next-generation NVIDIA Vera Rubin platform. Vera Rubin is a future planning direction and is not currently deployed.

### AI Cloud Services

> The SiGTRON AI cloud services platform is online and covers three service areas: GPU-as-a-Service (GaaS), Model-as-a-Service (MaaS), and Token-as-a-Service (TaaS). Existing customers may sign in to SiGTRON Console. Actual services and available resources depend on account permissions and project-specific configurations.

新企業需求：

> New enterprise inquiries are evaluated based on workload requirements and project conditions.

### 狀態標籤

| 中文狀態 | 英文標籤 |
|---|---|
| 平台已上線 | `Platform online` |
| 試運轉中 | `In trial operation` |
| 目標 2026 Q4 正式商轉 | `Target: commercial operation in Q4 2026` |
| 規劃導入 | `Planned for deployment` |
| 洽談／規劃中 | `Under discussion / planning` |
| 潛在總容量 | `Potential aggregate capacity` |
| 前瞻規劃中 | `Future planning direction` |

## 7. Contact、Footer 與 INFINITIX 固定句

以下是下一階段不得自行改寫的英文基線。除 `Powered by SignalPro` 與法定英文公司名稱外，均仍須公司逐字核准後才可視為正式對外英文文案。

### Contact：交易主體

> SiGTRON is the customer-facing service brand. Formal quotations and invoices for AIDC and AI cloud services are issued by, and contracts are entered into with, SignalPro Technology CO., LTD.

### Contact：靜態 Prototype 告知

> This is a static prototype. Information entered here is not sent to SiGTRON, SignalPro Technology CO., LTD., or any form service provider. Do not enter personal information. The production site's data-submission process and full privacy notice must be completed and approved before launch.

### Contact：備援聯絡

> This form does not submit data. To contact us, call 07-2695198 or email sales@signalpro.com.tw.

聯絡資料規則：

- 電話與 Email 使用公司已核准資料：`07-2695198`、`sales@signalpro.com.tw`。
- 在公司提供正式英文郵寄格式前，英文地址顯示為 `[Official English postal address pending company confirmation]`，或在內部 Prototype 暫留已核准中文地址；不得自行補郵遞區號、國碼、行政區翻譯或英文地址。
- 不加入回覆時效、服務時間或支援承諾。

### Footer：品牌介紹

> Integrated AIDC delivery and enterprise AI compute services, connecting site planning, engineering, GPU compute clusters, platforms, testing, acceptance, and operations and maintenance.

### Footer：法定署名

> © [year] SignalPro Technology CO., LTD. | Unified Business No. 95464633

`Unified Business No.` 是受控英譯，仍待公司確認標籤；公司名稱與號碼本身已確認。Footer 另保留固定署名：

> Powered by SignalPro

### INFINITIX：營運與技術關係

> SignalPro Technology CO., LTD. operates the platform under the SiGTRON brand, manages customer accounts, and provides customer-facing services. INFINITIX is the backend white-label technology platform partner and is not the contracting or invoicing entity for SiGTRON customers.

使用規則：

- 只放在 AI Cloud Services 頁後段的 Technology Ecosystem／service responsibilities 區，或核准的合作夥伴資訊中。
- 不放在 Hero、Navbar、主要 CTA、GaaS／MaaS／TaaS 名稱前，也不使用 `Powered by INFINITIX`。
- 關係事實已確認；上述英文逐字表述仍待公司核准。INFINITIX Logo、商標、連結及合作層級的視覺呈現仍須取得公開與素材使用權限。

## 8. 付款與訂閱條款英文版法律護欄

### 現況判定

Prototype 的 `payment-terms.html` 與 `ai-cloud-services.html` 內嵌對話框目前各保存一份中文付款／訂閱內容。現有權威文件沒有記錄該中文條款已經法務核准，也沒有英文條款、適用語言、版本、生效日或中英文效力優先規則的核准紀錄。

因此：

- 中文條款本身為 **[待法務確認來源版本]**。
- 任何英文翻譯均為 **[待法務核准]**，不得因文字完整、版面正式或放在 `Terms` 頁面，就被當成有效條款。
- 不得自行加入「英文僅供參考」、「中文為準」或任何語言優先條款；哪一語言版本具效力必須由法務明確核准。

### 法務核准前的安全呈現

若英文 Prototype 必須展示版型，只能使用 `noindex, nofollow` 的內部審閱頁，並在 H1 前顯示：

> Draft English translation for legal review only. This text has not been approved by legal counsel and must not be presented as binding terms or used to obtain consent.

同時遵守：

1. 頁面標題、導覽入口與連結文字均標示 `Draft for legal review`，不得只寫 `Payment & Subscription Terms` 製造已生效外觀。
2. 不提供 `I agree`、同意勾選、綁卡、訂閱、付款、下單或其他契約成立操作。
3. 靜態 Prototype 不傳送資料；付款條款草稿不得成為任何交易流程的同意依據。
4. 未確認的原文、數字、處理方、期限或責任直接標示 `[Legal input required]`，不以英文常見條款補齊。
5. 若中文來源尚未核准，中英文都標示為審閱草稿；不得建立未核准的「中文正式版／英文參考版」階層。
6. 獨立頁與 AI Cloud Services 內嵌版本必須來自同一份已核准來源，版本號、日期與內容完全同步；不得手動維護兩份分歧條款。
7. 正式發布前移除草稿 banner、改名或解除 `noindex` 的動作，只能在法務核准紀錄、版本與生效日全部完成後進行。

### 必須由法務／公司逐項確認

- 中文來源全文是否為公司採用版本，以及版本號、生效日、適用服務與變更通知方式。
- 契約成立方式；「開始使用即同意」是否適用，以及同意紀錄如何保存。
- 信用卡綁定、支付憑證、金流服務商、銀行與 SignalPro Technology CO., LTD. 的實際角色與資料流。
- 「公司不經手、儲存或管理卡號」是否有流程與技術證據。
- 小額驗證扣款的幣別、金額（現稿例示 10 元）、取消授權與入帳處理。
- 換卡、解綁、欠費、失效、未完成訂單、服務暫停或終止的實際規則。
- 先使用後付款、初始額度、門檻、用罄、結算、扣款及額度補充機制。
- 可計費單位是否包含服務時數、API 呼叫、Token、資源用量或其他項目；不得由譯者推定。
- 退款資格、不得退款範圍、系統異常、重複扣款、審核程序與處理時程。
- 價格、幣別、稅額、發票、付款失敗、爭議款與通知方式。
- 取消、終止、責任限制、準據法、管轄／爭議處理及適用消費者保護規則。
- 個資告知、支付資料安全、受託處理者及跨境／保存事項。
- 法律聯絡窗口與正式英文郵寄地址。
- 中英文版本的效力、翻譯審閱責任與發生差異時的處理方式。

### 核准與發布流程

1. 法務先確認中文來源版本與缺漏條款。
2. 由具法律文本能力的人員依核准中文逐條翻譯，不做行銷式改寫或摘要取代。
3. 法務核准英文全文、頁名、同意機制、適用語言與版本效力。
4. 公司記錄核准人、核准日、版本號與生效日。
5. Content、UX、UI 與 Frontend 只部署同一份核准來源；獨立頁與內嵌對話框做逐字一致性檢查。
6. 上線前再驗證連結、可下載／可保存性、同意紀錄、可及性與版本回溯方式。

## 9. 核准／待輸入清單

### 已有公司核准，可作英譯事實來源

- `SiGTRON`、`希格創`、`SignalPro` 與 `SignalPro Technology CO., LTD.` 的身分與關係。
- `Powered by SignalPro` 的固定署名、含義及 Footer 次級使用層級。
- AIDC 與 AI 雲端服務正式報價、締約及發票主體。
- SiGTRON AI 雲端平台的營運、客戶帳號與服務責任主體，以及 INFINITIX 的後端白牌技術平台合作關係。
- 官方中文地址、電話、Email 與統一編號。
- 台南新市案場、亞洲 Project Pipeline、AI Cloud Services 的現行狀態與既有中文限定語。

### Brand Guardian 已制定，待公司逐字核准

- 本文件的品牌關係句、Contact、Footer、INFINITIX 關係句。
- 英文 Voice & Tone、術語表、狀態標籤與保守宣稱英譯。
- `Unified Business No.` 作為 `統一編號` 的英文 UI 標籤。
- `From AIDC Infrastructure to AI Compute Services.` 及其他既有英文標語仍是候選，不是核准 Tagline；未核准前不得作商標式固定標語。

### 待公司／法務輸入

1. 公司正式英文郵寄地址；是否提供 `+886` 國際電話格式。
2. 英文固定文案、英文標語與本術語表的公司最終簽核。
3. SiGTRON／SignalPro 商標註冊狀態、`®`／`™` 使用、正式 Logo 規範及 company lockup 大小寫差異的處理。
4. INFINITIX 英文稱謂、Logo、商標與連結的對外使用核准；已確認關係不得被視覺擴張成認證或背書。
5. 付款與訂閱條款的核准中文來源、英文法律翻譯、效力語言、版本、生效日、同意機制及所有上節法律事項。
6. 正式洽詢表單受託服務商、資料流向、保存位置、期間與完整個資告知；依公司既有決策延後，但正式站上線前必須完成。

## 10. 下一階段交接規則

- Marketing Content Creator 以第 5–7 節為英文用語與固定句來源，不創造新的品牌關係、狀態或交易主體句。
- 所有數字、設備、國家與平台狀態，必須連同本文件的限定句一起出現，不可只翻譯醒目數字。
- UX 與 UI 不得以徽章、圖示、Logo 大小或 CTA 把規劃、合作或平台上線狀態升格。
- Frontend 不得把付款翻譯草稿接到同意、付款或資料送出流程；兩個條款呈現面須採單一核准內容來源。
- 若下一階段需要比本文件更強的承諾、不同法定名稱或不同合作定位，應先回報衝突並取得公司／法務更新，不得自行改寫。
