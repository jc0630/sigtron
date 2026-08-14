# SiGTRON 核心頁面 UX 與響應式線框 v1

> UX Architect 核准交付文件
>
> 適用頁面：首頁、AIDC 建置、AI 雲服務、洽談專案、最新消息與活動、消息單篇模板
>
> 本文件定義資訊架構、區塊順序、響應式行為與互動規格。內容事實以 `docs/00-project/confirmed-facts-and-decisions.md` 為最高優先；文案依 `docs/02-content/core-page-copy-v1.md`，但其中舊的導覽名稱與 Anchor 應由本文件的核准 IA 取代。

## 1. 核准 IA 與 UX 目標

### 1.1 第一版核心任務

1. 訪客在第一屏理解 SiGTRON 的兩條業務主線：AIDC 一站式建置、已上線的企業 AI 雲服務。
2. AIDC 業主能快速確認服務是否涵蓋場址、工程、GPU、平台、驗收與維運。
3. 需要算力的大企業能理解 GaaS、MaaS、TaaS 是已上線平台的服務方向，實際內容與資源仍依帳號權限及個別專案設定。
4. 以台南新市試運轉案場、72 個規劃節點、2026 Q4 目標，以及亞洲 Project Pipeline 建立可核實的專案層級。
5. 全站以 `洽談專案` 為新商機主要轉換；`客戶登入` 是現有客戶的次要工具入口。
6. 以工程範圍、狀態、責任、交付物與驗收建立信任，不套用一般 AI SaaS 或 GPU 電商版型。
7. 以已核准的公司公告、專案動態、活動資訊與媒體報導補充第三層信任證據；沒有核准內容時顯示正式空狀態，不以示意新聞填版。

### 1.2 四條主要訪客路徑

- AIDC 業主：`首頁 → AIDC 建置 → 完整範圍 → 六階段交付 → 洽談專案`。
- 企業算力需求：`首頁 → AI 雲服務 → GaaS／MaaS／TaaS → 洽詢企業需求`。
- 專案評估者：`首頁 → 專案與布局 → 台南旗艦案場 → 亞洲 Pipeline → 洽談專案`。
- 現有客戶：`Navbar／AI 雲服務 Hero → 客戶登入 → SiGTRON Console`。
- 企業動態讀者：`Navbar／首頁 News & Events／Footer → news.html → 分類／單篇內容 → 洽談專案`。

## 2. 全站 Navbar 與 Header 規格

### 2.1 唯一核准名稱、順序與目的地

第一版不使用 Dropdown，也不顯示文字版「首頁」。首頁、AIDC、AI 雲服務、聯絡、News 列表與 News 單篇共六個公開頁面／模板使用完全相同的項目順序。

| 層級 | 顯示名稱 | 正式站目的地 | 靜態原型目的地 | Active 規則 |
| --- | --- | --- | --- | --- |
| 品牌 | SiGTRON Logo | `/` | `index.html` | 不顯示 Active；可存取名稱為「SiGTRON 首頁」。 |
| 主導覽 1 | AIDC 建置 | `/aidc/` | `aidc.html` | AIDC 頁使用 `aria-current="page"`。 |
| 主導覽 2 | AI 雲服務 | `/ai-cloud-services/` | `ai-cloud-services.html` | AI 雲服務頁使用 `aria-current="page"`。 |
| 主導覽 3 | 專案與布局 | `/#project-footprint` | `index.html#project-footprint` | 首頁該區進入閱讀範圍時使用 `aria-current="location"`。 |
| 主導覽 4 | 新聞與活動 | `/news/` | `news.html` | News 列表及 News 單篇頁使用 `aria-current="page"`。 |
| 主導覽 5 | 關於 SiGTRON | `/#about` | `index.html#about` | 首頁該區進入閱讀範圍時使用 `aria-current="location"`。 |
| 次要工具 | 客戶登入 | SiGTRON Console | `https://console.sigtron.ai/dev-console/auth/login` | 不參與本站 Active；是 Header／Drawer 唯一 Utility Action。 |

不得再使用下列舊名稱或目的地：

- `案場與布局`。
- `#projects`。

Header 與 Mobile Drawer 不顯示 `洽談專案`。內容 Hero、頁內 CTA Band、`#project-inquiry` 與 Footer 的洽談入口完整保留；移除 Header CTA 不改變全站主要轉換目的地。

`新聞與活動`是第五個主導覽項目，位置固定在 `專案與布局`後、`關於 SiGTRON`前；首頁 `#news-events` 與 Footer 仍保留額外入口，皆連至正式站 `/news/`、靜態原型 `news.html`。

### 2.2 桌機 Header：1120px 以上

- 高度 72px，`position: sticky; top: 0`；不做自動隱藏 Header。
- 使用白色或高不透明淺色底、1px 分隔線，不使用大面積深色或玻璃浮空效果。
- 內容最大寬度 1280px，左右與頁面格線對齊。
- Logo 靠左；五個主導覽置中偏右；`客戶登入`作為唯一 Header Utility 靠右。
- 導覽文字維持單行，不縮小至低於 15–16px，也不壓縮字距來容納項目。
- Header 不放實心 Primary CTA；`客戶登入`使用文字或低權重外框，不得因移除 CTA 留下空欄或保留原雙按鈕寬度。
- Active 同時使用文字權重與 2px 底線，不只靠顏色。
- 所有可操作項目的點擊高度至少 44px。

### 2.3 平板 Header：768–1119px

- 高度 64px。
- 顯示 Logo 與 Menu 按鈕；五個主連結與 `客戶登入`收入 Drawer，不在平板 Header 保留 `洽談專案`或 Login。

### 2.4 手機 Header：767px 以下

- 高度 64px。
- 只顯示 Logo 與 Menu 按鈕，避免在 320–390px 壓縮品牌與觸控區。
- Menu 按鈕至少 44×44px，需有可存取名稱「開啟網站選單／關閉網站選單」。

### 2.5 360px Navigation Drawer

- 從右側進入，寬度 `min(360px, 100vw)`，高度涵蓋可用視窗；背景不得透明到影響閱讀。
- 順序固定為：`AIDC 建置 → AI 雲服務 → 專案與布局 → 新聞與活動 → 關於 SiGTRON → 分隔線 → 客戶登入`。
- `客戶登入`是 Drawer 唯一 Utility Action，使用滿寬 Secondary 或文字按鈕；原本雙按鈕容器改為單欄，不保留空白欄位。
- Drawer 以 Modal 行為實作：`role="dialog"`、`aria-modal="true"`、可存取名稱「網站選單」。
- 開啟時：設定 Menu 按鈕 `aria-expanded="true"`、鎖住頁面背景捲動、焦點移至關閉按鈕或第一個連結。
- 焦點必須限制在 Drawer 內；Tab／Shift+Tab 不可跑到遮罩後方。
- Escape、點擊遮罩、關閉按鈕、選擇任一連結均關閉 Drawer。
- 關閉時移除 Scroll Lock，並把焦點還給原 Menu 按鈕。
- 視窗放大到 1120px 以上時，若 Drawer 開啟，必須自動關閉並清理 Scroll Lock／ARIA 狀態。
- Anchor 連結需先關閉 Drawer，再捲動至目標；目標標題可暫設 `tabindex="-1"` 接收焦點。
- Menu 動畫控制在 150–250ms；`prefers-reduced-motion` 下取消位移動畫。

### 2.6 Active 與 Scrollspy

| 目前頁面／位置 | Active 項目 | ARIA | 備註 |
| --- | --- | --- | --- |
| 首頁 Hero、一般內容與 `#news-events` | 無 | 無 | 首頁 News 區不使「新聞與活動」Active，也不參與 Scrollspy。 |
| 首頁 `#project-footprint` | 專案與布局 | `aria-current="location"` | 僅在該區進入閱讀範圍時啟用。 |
| 首頁 `#about` | 關於 SiGTRON | `aria-current="location"` | 與專案區不可同時 Active。 |
| `aidc.html`／`/aidc/` | AIDC 建置 | `aria-current="page"` | 桌機 Header 與 Drawer 同步。 |
| `ai-cloud-services.html`／`/ai-cloud-services/` | AI 雲服務 | `aria-current="page"` | 桌機 Header 與 Drawer 同步。 |
| `news.html`／`/news/` | 新聞與活動 | `aria-current="page"` | 列表頁使用頁面級 Active。 |
| `news/[article].html`／`/news/[article-slug]/` | 新聞與活動 | `aria-current="page"` | 單篇頁沿用 News 頁面級 Active。 |
| 聯絡／專案洽談頁 | 無 | 無 | 表單屬轉換目的地，不在五個主導覽中製造錯誤 Active。 |
| 客戶登入外部 Console | 無 | 無 | Utility Action 不參與本站 Active。 |

- 首頁區段 Active 只監看 `#project-footprint` 與 `#about`；`#news-events` 不得加入 `IntersectionObserver`，「新聞與活動」連結也不得加上 `data-scrollspy-link`。
- `#news-events`緊接在 `#project-footprint`之後時，一旦專案共同父層離開觀察範圍就清除「專案與布局」的 `aria-current="location"`；進入 News 區不新增任何 Active。
- 建議以 `IntersectionObserver` 判斷，觀察區域需扣除 Sticky Header；可採約 `rootMargin: -88px 0px -60% 0px`，由實際內容高度微調。
- 首頁 Hero、需求入口、AIDC 能力、AI 雲服務或 Partners 區不強迫任何主導覽 Active。
- Scrollspy 只更新視覺與 `aria-current="location"`，不在一般滾動中持續改寫 URL，避免污染瀏覽器返回紀錄。
- 使用者點擊 Anchor 時可正常更新 Hash；目標區設定 `scroll-margin-top: 88px`，手機至少 76px。

## 3. 響應式格線與共同順序

| 版型 | 寬度 | 格線 | 建議頁面留白 | 區塊上下間距 |
| --- | --- | --- | --- | --- |
| Mobile | 0–767px | 4 欄 | 20–24px | 56–72px |
| Tablet | 768–1119px | 8 欄 | 32–48px | 72–88px |
| Desktop | 1120px 以上 | 12 欄 | 最大內容寬 1280px，置中 | 88–112px |

共同規則：

- 桌機內容順序不得在手機以 CSS 任意改成不同敘事；手機只把同一結構由多欄改為單欄。
- 主要內容在 320px 不產生橫向捲動。
- 內文行寬控制在約 28–36 個中文字；證據表與流程可較寬。
- 每一視覺區域最多一個 Primary CTA。
- 核心內容不使用橫滑 Carousel、Accordion 隱藏狀態或只在 Hover 顯示。

### 3.1 全站 Footer 法定署名與品牌背書

- 首頁、AIDC、AI 雲服務、Contact、News 列表、News 單篇與 Payment Terms 永久頁共七頁使用同一 Footer；既有服務、公司、聯絡入口不增加新欄位，只更新最底層署名列。
- 法定署名逐字使用：`© [年份] 希格諾科技股份有限公司（SignalPro Technology CO., LTD.）｜統一編號 95464633`。年份可由最少量 JavaScript 更新，但無 JavaScript 時仍須保留可理解的年份內容或由正式製作方在發版時寫入。
- `Powered by SignalPro`保留為同一公司的次級品牌背書，可搭配已核准的 SignalPro Logo；不得取代 SiGTRON 主 Logo，也不得以 `合作夥伴`、`技術提供者`或第三方法人視覺呈現。
- 七頁 Footer 的既有 `聯絡資訊`欄以 `<address aria-label="希格諾科技聯絡資訊">`呈現：地址使用純文字 `高雄市苓雅區新光路38號31樓之4`，不加地圖連結；電話顯示 `07-2695198`並連至 `tel:072695198`；Email 顯示 `sales@signalpro.com.tw`並連至 `mailto:sales@signalpro.com.tw`。`<address>`只包住聯絡資料，不包住法定署名、版權或 `Powered by SignalPro`。
- 電話與 Email 使用描述本身即可理解的 Anchor 文字，不使用只有圖示的連結，不另加 `另開視窗`或虛構聯絡時段、服務範圍、回覆時間；地址、電話與 Email 均不得留作 Placeholder。
- 桌機可將法定署名與 `Powered by SignalPro`分置同一 Footer Bottom 列；平板與手機依 DOM 順序自然換為上下排列，先法定署名、後次級品牌背書。公司全名、統一編號不得截斷、省略或以 Tooltip 隱藏；`Powered by SignalPro`內部標誌與文字保持成組、不拆行。
- 七頁 Footer 使用相同 DOM 順序與可存取名稱。SignalPro Logo 若與相鄰 `Powered by SignalPro`文字重複，圖片使用空 `alt`；若 Logo 單獨承擔名稱，替代文字使用 `SignalPro`，兩者不得重複朗讀。

## 4. 第一輪「降 AI 化」版面原則

### 4.1 全站畫布與分區

- 白色與冷灰是主要畫布，合計至少約占頁面 70%；深墨藍只用於少數重點帶、頁尾或局部圖說，不作全站暗色模式。
- 以 1px 分隔線、區段編號、欄位標籤、證據表與明確留白建立工程秩序。
- 每頁最多一個大型深色重點區，且不可與 Footer 連成整頁深色。
- 移除大面積背景網格、發光線、霓虹暈、粒子、光球、玻璃浮空層與 Dashboard 式裝飾。
- 不使用無意義的「Live」、跳動計數、持續脈衝 Pin 或資料流動畫。

### 4.2 卡片減量

- 卡片只保留在「需要做選擇」或「內容確實為獨立單元」的地方，例如兩類客群入口、FAQ 與必要的服務比較。
- 六項以上的能力／流程改用編號清單、工程矩陣、證據表或共用外框內的分欄，不做大量漂浮 SaaS 卡片。
- 禁止 Card inside Card；一般區塊不使用 Hover 上浮、發光外框或厚陰影。
- 圓角維持小而克制；狀態標籤使用短矩形，不做大量膠囊 Tag。

### 4.3 證據優先元件

UI 優先建立下列元件，而非再增加裝飾卡片：

1. `Status Row`：狀態文字、適用範圍與必要揭露放在同一列。
2. `Evidence Strip`：數字＋定義＋限制；數字不能離開狀態說明單獨呈現。
3. `Engineering Matrix`：工作範圍、責任、階段成果或介面關係。
4. `Process Rail`：編號、工作重點、階段成果依序排列。
5. `Market Status List`：國家／市場、狀態、可公開範圍；與靜態地圖互相補充。
6. `Disclosure Note`：一般文字可讀，不縮成難以閱讀的細小免責字。

### 4.4 圖像原則

- 優先使用核准的真實工程、設備、空間或專案協作照片。
- 台南案場 3D 素材固定顯示 `3D 渲染概念影片｜非現場實拍`。
- 亞洲地圖採已合成 Pin 的靜態圖片，不使用 CSS／JavaScript 動態定位；另以文字清單完整表達市場與狀態。
- 不使用通用 AI 人像、發光大腦、聊天框、假 Console、虛構即時數據或無法驗證的未來機房。

## 5. 首頁線框

### 5.1 桌機結構

```text
Header
Hero｜文字 7/12｜工程／基礎設施視覺 5/12
兩類需求入口｜AIDC 業主 6/12｜企業算力需求 6/12
#project-footprint
  專案狀態總覽與揭露
  台南新市旗艦案場｜3D 概念影片 7/12｜Evidence Table 5/12
  亞洲 Project Pipeline｜靜態地圖 8/12｜市場狀態清單 4/12
  平台規劃方向＋約 800 MW 揭露
#news-events｜最新 3 則靜態消息 Grid／0 則空狀態
AIDC 完整服務範圍｜兩欄編號工程清單
六階段交付方法｜單一 Process Rail／Evidence Table
AI 雲服務概覽｜狀態列＋共用外框三欄
工程化交付信心｜四列證據表
Customers & Ecosystem Partners｜關係揭露＋分類式靜態 Logo Wall
#about｜已核准品牌關係文字 7/12｜核准品牌／團隊素材 5/12
頁尾 CTA
Footer
```

### 5.2 Hero

- 保留 H1「從 AIDC 建置，到 AI 算力服務。」作為唯一 H1。
- 主要 CTA：`洽談專案`；次要 CTA：`了解 AIDC 一站式建置`。
- `平台已上線｜服務與資源依帳號權限及個別專案設定`需在 Hero 文字區可見，不放到頁尾才說明。
- 右側視覺呈現「設施 → GPU／網路／儲存 → 平台 → 服務」層級，可使用工程剖面、設備或架構示意；不可使用假 Dashboard。
- Hero 使用淺色畫布。若要使用深色，只能作右側局部視覺底，不做滿版深色發光區。

### 5.3 兩類需求入口

- 保留兩張入口卡，因為它們承擔路徑選擇：AIDC 業主在前、企業算力需求在後。
- 桌機 6/12＋6/12；平板可維持雙欄；手機單欄。
- 卡片只有標籤、標題、兩至三行說明與明確連結，不加入裝飾數字或多個次級按鈕。

### 5.4 `#project-footprint`：台南旗艦案場＋亞洲 Pipeline

`id="project-footprint"` 必須放在兩個內容的共同父層，不可只放在地圖或只放在台南卡片。

#### Anchor 落點第一屏

使用者從 Navbar 抵達後，在一般 1440×900 桌機與 390×844 手機的第一個可視區內，必須先看到以下狀態揭露，不得先出現只有數字或只有地圖的畫面：

- `台南新市：試運轉中`。
- `72 Nodes：目前規劃導入規模`。
- `2026 Q4：目標正式商轉`。
- `日本、泰國、馬來西亞、印尼、菲律賓：洽談／規劃中市場`。
- `約 800 MW：洽談與規劃案件的潛在總容量，非已簽約、已建置或已營運容量`。

桌機用一列四欄 Evidence Strip；手機改為緊湊的垂直 Status Rows。完整免責文字緊接其後，不用 Tooltip 隱藏。

#### 台南旗艦案場

- 排在 Pipeline 前，建立「具體案場 → 區域規劃」的可信順序。
- 桌機：3D 概念影片 7/12，右側 Evidence Table 5/12。
- Evidence Table 順序：狀態、72 個規劃節點、NVIDIA HGX B300、VAST Data 規劃方案、AIDC 基礎設施範圍、2026 Q4 目標。
- 72 與 2026 Q4 可以放大，但旁邊必須保留「規劃導入」與「目標正式商轉」。
- 影片封面及播放後畫面都需固定顯示「3D 渲染概念影片｜非現場實拍」。
- 不使用完成百分比、進度條、Live 狀態或工程里程碑動畫。
- CTA：`洽談 AIDC 建置合作`為主要；`洽詢企業算力服務`為次要。

#### 亞洲 Project Pipeline

- 區塊開頭先顯示 `約 800 MW 潛在總容量`與完整定義，不讓數字獨立成績效宣稱。
- 桌機：靜態地圖 8/12，市場狀態清單 4/12；平板與手機：地圖在前、清單在後。
- 地圖只顯示國家層級位置；台灣可標示台南新市，其餘市場不得自行加入城市、地址、MW、設備或時程。
- 台灣使用實心標記並加文字「旗艦案場・試運轉中」；其餘五國使用空心標記並加文字「洽談／規劃中」。狀態不能只靠顏色或形狀。
- Pin、國名與狀態合成在靜態圖中；不使用動態定位、脈衝或發光。
- 圖片之後仍需有語意清單列出六個市場，避免地圖文字成為唯一資訊來源。
- 平台方向以三列呈現：HGX B300、GB300 NVL72、Vera Rubin；全部標為規劃方向，Vera Rubin另標「前瞻規劃中」。不得把平台連到特定國家 Pin。

### 5.5 AIDC 完整服務範圍

- 現有六張卡改為兩欄編號工程清單，依「場址與設計 → 關鍵設施 → GPU／網路／儲存 → 平台 → 測試驗收 → 維運」排序。
- 每列包含工作範圍與其對專案的作用；共用同一外框與分隔線，不做六張浮卡。
- 手機單欄，保持順序，不折疊。

### 5.6 六階段交付方法

- 使用單一 Process Rail 或表格式清單，每步固定有 `01–06`、階段名稱、工作重點、階段成果。
- 桌機可三欄資料列；手機改為垂直內容，但仍維持一個連續流程，不做 Carousel。
- 首頁可用摘要；完整內容連到 `aidc.html#delivery`／`/aidc/#delivery`。

### 5.7 AI 雲服務概覽

- 首列顯示 `平台已上線` 與「服務／資源依帳號權限及個別專案設定」。
- GaaS、MaaS、TaaS 改為一個共用外框中的三欄內容，不做三張發光 SaaS 卡。
- 每欄只保留全名、用途、適用需求與限制；不放價格、庫存、免費試用、立即部署或假 Dashboard。
- 新需求 CTA 使用 `洽詢企業算力需求`；客戶登入為次要文字入口。

### 5.8 工程化交付信心、Customers & Ecosystem Partners 與 About

- 「工程化交付信心」由四張形容詞卡改成四列證據表：服務範圍、整合窗口、狀態揭露、驗收銜接。
- 客戶與合作生態系保留獨立區，使用關係揭露＋分類式靜態 Logo Wall；Logo 容器不做發光、跑馬燈或 Hover 上浮。
- 正式 Logo 依客戶、技術夥伴、策略夥伴與生態系夥伴分類；客戶／夥伴關係、合作範圍、所屬專案及商標使用皆須取得雙方公開核准，未確認時使用中性文字佔位或隱藏。
- 所有 Logo 維持一致視覺高度；大小不代表相同合作層級，亦不構成推薦或背書。
- `#about` 以文字與核准素材建立公司／品牌關係，不再增加泛化價值卡；原本未確認的關係 Placeholder 直接替換為：`SiGTRON 是希格諾科技股份有限公司（SignalPro Technology CO., LTD.）自有的 AIDC 與企業 AI 算力服務品牌。`
- 品牌關係句位於 About 標題與主要介紹文之後、連結或 CTA 之前，使用一般正文或 Disclosure Note 層級，不做大型數字、Logo Lockup 或獨立深色區；手機維持相同閱讀順序。

### 5.9 `#news-events`：首頁最新消息 Grid

位置固定為完整 `#project-footprint` 閉合後、AIDC 完整服務範圍前，不得插入台南旗艦案場與亞洲 Pipeline 之間。順序為 `#project-footprint → #news-events → AIDC 完整服務範圍`。`id="news-events"`放在整個區塊共同父層；區塊包含 Eyebrow `NEWS & EVENTS`、H2「最新消息與活動」、說明與「查看全部新聞與活動」連結。

#### 數量與響應式行為

- 只使用內容台帳中已達「核准公開」或「已發布」且仍在有效公開期間的內容，依發布日期由新至舊取最新 3 則；不使用人工 Featured 排序取代最新順序。
- 0 則：不建立空卡、Skeleton 或假標題；顯示正式空狀態「目前尚無已核准公開的消息內容。相關內容完成確認後，將於此更新。」此時可隱藏區塊的「查看全部新聞與活動」，Footer 入口仍保留。
- 1–2 則：只呈現實際內容並靠左排列，不複製、不補空卡，也不拉伸成假滿版。
- 3 則：桌機 `≥1120px`為同列三欄；平板 `768–1119px`為首列兩欄、第二列一欄；手機 `<768px`為單欄三列。
- 首頁不使用 Rail、Carousel、Overflow Track、Scroll Snap、Previous／Next、範圍 Status、Autoplay、Loop 或 Clone；所有尺寸皆為一般文件流中的靜態 Grid。
- 三個尺寸使用完全相同的 DOM 與內容順序，均為由新至舊；不得以 CSS `order`、視覺重排或手機專用複本改變閱讀次序。

#### 首頁 News Card

- 與 `news.html`共用相同 Card 結構與 16:9 圖片比例，固定顯示分類、日期、標題、摘要與來源／發布方；活動與媒體依類型使用核准欄位。
- Card 視覺整張可點，但 DOM 只保留一個主要 Title Link；以 Title Link 的延伸點擊區覆蓋 Card，不加入第二個重複「閱讀更多」焦點。
- Card Link Focus 必須包住整張卡；媒體報導直接連外時需標示外部網站。
- Section CTA `查看全部新聞與活動`是 Secondary；每張 Card Link 是 Tertiary，不在消息卡片使用實心 Primary Button。

### 5.10 首頁手機順序

```text
Header
Hero 文字 → Primary CTA → Secondary CTA → 平台已上線說明 → 視覺
AIDC 業主入口 → 企業算力入口
#project-footprint
  H2／狀態總述
  台南試運轉／其他五國規劃／約 800 MW 潛在容量揭露
  72 Nodes → 2026 Q4 → 旗艦案場 Evidence Table
  3D 概念影片與固定標示
  Pipeline 標題與約 800 MW 定義
  靜態地圖 → 六市場文字清單 → 三項平台方向
#news-events
  NEWS & EVENTS → H2 → 查看全部新聞與活動
  0 則空狀態／最新 1–3 則靜態單欄 Cards
AIDC 服務編號清單
六階段垂直 Process Rail
AI 雲服務狀態列 → GaaS → MaaS → TaaS
工程化交付證據表
Customers & Ecosystem Partners Logo Wall 2 欄
About
頁尾 CTA
Footer
```

## 6. AIDC 建置頁線框

### 6.1 桌機結構

```text
Header
Hero｜文字 7/12｜核准工程／架構素材 5/12
跨域整合挑戰｜引言 4/12｜三列問題／影響 8/12
完整服務範圍｜12 項 Engineering Matrix
#delivery 六階段交付｜工作重點＋階段成果
合作模式｜客戶 → SiGTRON 整合窗口 → 專業夥伴角色
FAQ｜原生 details/summary
CTA｜需準備的專案資訊
Footer
```

### 6.2 第一輪版面調整

- Hero 維持淺色工程風格，不使用深色全屏、發光機櫃或假監控介面。
- 三張挑戰卡改成三列「問題／專案影響」；不增加未核准數據。
- 12 項服務由 4×3 SaaS 卡改為 Engineering Matrix：桌機三欄或四欄資料格、平板兩欄、手機單欄。
- 每項顯示編號、服務範圍、短說明；矩陣末端固定顯示責任與驗收依專案確認。
- `#delivery` 使用連續的六階段 Process Rail；桌機每列顯示「階段／工作重點／階段成果」，手機每階段依序顯示相同三項內容。
- 合作模式只呈現角色與責任箭頭，不使用未核准 Logo，不把夥伴畫成 SiGTRON 的內部部門。
- FAQ 保留原生折疊；不以動畫卡片重製。

### 6.3 平板與手機順序

順序不變：Hero → 挑戰 → 12 項範圍 → 六階段交付 → 合作模式 → FAQ → CTA。

- 平板 Hero 可 5/8＋3/8；其餘主要資訊轉為雙欄。
- 手機 Hero 文字在前、素材在後，CTA 全寬。
- 12 項範圍與六階段流程皆為單欄，不橫滑、不折疊。
- CTA 前先列出建議準備資料：地點、專案階段、時程、工作負載與希望協助的範圍。

## 7. AI 雲服務頁線框

### 7.1 桌機結構

```text
Header
Hero｜平台已上線＋限制說明＋新需求 CTA／客戶登入
三項服務方向｜共用外框三欄
平台存取與服務設定｜現有客戶／帳號權限／專案設定 Evidence Table＋客戶登入＋信用卡付款與訂閱條款入口
企業需求入口｜三種工作負載情境
合作方式｜提供背景 → 需求評估 → 確認專案設定
技術生態系｜SiGTRON 主敘事＋低層級核准合作說明
服務狀態總結
頁尾 CTA
Footer
```

### 7.2 第一輪版面調整

- Hero 狀態固定使用 `平台已上線`，不得沿用舊版 `建置中`。
- Hero 的新商機主要行動為 `洽詢企業需求`／全站 `洽談專案`；`客戶登入`維持清楚但較低的工具層級。
- 狀態標籤旁立即顯示「服務內容與可用資源依帳號權限及個別專案設定」，不可收進 Tooltip。
- 三項服務使用同一個表格式外框，桌機三欄、平板可三欄或 1＋2、手機依 GaaS → MaaS → TaaS 單欄。
- 「平台存取與服務設定」使用三列 Evidence Table，不做帳號管理 Dashboard 示意。
- 三種企業情境可使用三欄，但採平面分隔，不使用漂浮卡與產品插圖。
- 合作方式使用連續三步驟，不用 Funnel 動畫。
- 技術生態系先以一般正文說明：`希格諾科技股份有限公司以 SiGTRON 品牌對外營運 AI 雲端平台、管理客戶帳號並提供服務，並結合平台及基礎設施合作夥伴支援服務營運。`其後以低一層級的 Disclosure Note 顯示：`INFINITIX 是後端白牌技術平台合作夥伴，不是客戶的締約或開票主體。`
- INFINITIX 不進入 Hero、主標題、產品名稱、主要 CTA 或獨立大型 Logo 區；以上兩句在桌機、平板與手機維持相鄰且同序，不使用 Tooltip、Accordion 或 Hover 隱藏。
- 不顯示公開價格、GPU 庫存、模型清單、API、SLA、免費試用、立即購買或即時開通。
- AIDC 與 AI 雲服務的行銷正文不重複報價、締約及開票主體說明；交易主體只在 Contact 表單前說明，全站共同法人資訊只在 Footer 署名。Payment Terms 是獨立法律閱覽內容，不視為服務正文重複。

### 7.3 平板與手機順序

順序不變：Hero → 三項服務 → 平台存取 → 企業情境 → 合作方式 → 技術生態系 → 狀態總結 → CTA。

- 手機 Hero：狀態 → H1 → 說明 → 洽詢 CTA → 客戶登入 → 限制文字 → 視覺。
- 三項服務與三個設定原則不折疊，避免把限制藏起來。
- 主要 CTA 在 Hero 與頁尾各出現一次即可。

### 7.4 信用卡付款與訂閱條款 Dialog

#### 入口、目的與內容界線

- 入口固定放在 `PLATFORM ACCESS` 區塊的 `客戶登入`按鈕下方，以次要文字連結顯示 `信用卡付款與訂閱條款`，並保留已核准輔助句；不放進 Navbar、Hero 或主要 CTA 列。
- 入口只供公開閱覽條款，不表示登入、綁卡、訂閱、付款或同意條款。Dialog 內不得出現同意 Checkbox、`確認`、`繼續`、`付款`、`登入`或其他交易操作；唯一命令型操作是關閉，章節連結只屬文件導航。
- 入口使用具有真實 `href="payment-terms.html"` 的 `<a>`，並設定 `aria-haspopup="dialog"`、`aria-controls="credit-card-payment-terms"`。支援 JavaScript 與原生 Dialog 時攔截導頁並開啟 Modal；JavaScript 停用或瀏覽器不支援原生 Dialog 時，正常前往永久條款頁。
- Dialog Header 主標固定為 `信用卡付款說明`。使用者提供的原文全文、標點、公司名稱、統一編號與順序須逐字保留，不摘要、不改寫、不以 `展開更多`、Accordion 或預設收合隱藏正文。

#### 語意結構與十節正文

- 優先使用直接置於 `body` 底部的原生 `<dialog id="credit-card-payment-terms">`，以 `showModal()` 開啟；Dialog 使用 `aria-labelledby="payment-terms-title"`，Header 的 `<h2 id="payment-terms-title" tabindex="-1">信用卡付款說明</h2>`提供可存取名稱。
- 不將 `aria-describedby` 指向整份條款，避免螢幕閱讀器開啟時一次朗讀大量文字。關閉鍵使用原生 `<button type="button">`，可存取名稱為 `關閉信用卡付款與訂閱條款`；圖示 `×` 設為裝飾。
- 原文以十個 `<section>` 整理，但不新增或改寫可見法律文字：`信用卡付款說明與適用範圍`、`綁定信用卡`、`解除綁定信用卡`、`到期失效`、`換卡`、`付費`、`先使用後付款機制說明`、`結算與扣款方式`、`退款說明`、`公司資訊與版權文字`。第一節沿用 Dialog H2，不重複標題；第 2–9 節使用原文標題為 H3；最後公司資訊單獨成節並逐字保留。
- 各節使用穩定 ID：`terms-introduction`、`terms-card-binding`、`terms-card-unbinding`、`terms-card-expiry`、`terms-card-replacement`、`terms-payment`、`terms-postpaid`、`terms-settlement`、`terms-refund`、`terms-company`。

#### 開啟、關閉、焦點與捲動

- 開啟時儲存觸發連結為 opener、把 Dialog 正文捲動位置重設到頂端、呼叫 `showModal()`、加入 `body.terms-open`，再把焦點移到條款 H2。長篇文件先聚焦標題可先建立內容脈絡；按一次 Tab 即可到達 Header 關閉鍵。
- 原生 `showModal()`負責背景 inert 與焦點限制，不另做會與瀏覽器衝突的第二套 Focus Trap。Tab／Shift+Tab 不可進入背景頁面；若製作方改用非原生 Dialog，才須沿用 Drawer 的手動首尾焦點循環，但此方案不建議。
- 關閉方式包含 Header 關閉鍵、Escape 與點擊真正的 Backdrop。Backdrop 事件只在 `event.target === dialog`或等價的明確外層邊界時關閉；點擊正文、正文空白、章節導航或捲軸不得誤關閉。
- 所有關閉路徑統一在 Dialog `close`事件移除 `body.terms-open`，並以 `opener.focus({ preventScroll: true })`還原焦點；若 opener 已不存在則安全略過。
- Dialog 開啟時以 `body.terms-open { overflow: hidden; }`鎖住背景。Dialog 採固定 Header 加獨立正文捲動區；正文區使用 `overflow-y: auto`、`overscroll-behavior: contain`與 `100dvh`計算可用高度，不可讓頁面 Body 與 Dialog 正文同時捲動。重新開啟一律回到頂端。

#### 章節導航、URL 與永久頁

- `1120px`以上可在正文左側顯示 `<nav aria-label="信用卡付款條款章節">`與十節連結，導航置頂固定、正文閱讀寬度控制在約 65–72ch；小於 `1120px`直接隱藏章節導航，不改成摺疊選單。
- 章節導航只在 Dialog 捲動容器內定位，並把焦點移至對應標題供螢幕閱讀器宣告；不需 Scrollspy。`prefers-reduced-motion`下直接跳轉，不做平滑捲動。
- 開啟與關閉 Dialog 不改寫 URL、不建立瀏覽紀錄，也不攔截瀏覽器返回鍵。需要分享、列印或連到特定章節時使用永久頁 `payment-terms.html`及其節點，例如 `payment-terms.html#terms-refund`。
- 永久頁是無 JavaScript Fallback 與可分享、可列印的正式入口，內容與 Dialog 使用相同原文、順序及章節 ID。靜態 Prototype 沒有模板引擎，委外交付時須把「Dialog 與永久頁全文逐字同步」列入發版檢查，不以 iframe、遠端 Fetch 或外部 UI 套件共用內容。

#### Responsive 與列印規格

| 寬度 | Dialog 行為 |
| --- | --- |
| 320px | 佔滿 `100vw × 100dvh`，正文左右至少 16px、單欄全文、無水平捲動；關閉鍵觸控區至少 44×44px。 |
| 375px／390px | 同為全高單欄，左右內距可提高至 20px；Header 與關閉鍵持續可見，正文不可收合。 |
| 768–1119px | 與視窗保留約 24px 外距，最大高度約 `calc(100dvh - 48px)`；維持單欄且不顯示章節導航。 |
| 1120px 以上 | 最大寬度約 68–72rem，視窗四周至少 32px；左側章節導航、右側正文，正文不因 Dialog 變寬而產生過長行寬。 |

- Dialog 內不增加列印按鈕。主要列印路徑是 `payment-terms.html`搭配瀏覽器列印；若從開啟的 Dialog 使用瀏覽器列印，`@media print`須隱藏網站 Header、Footer、Backdrop、關閉鍵與章節導航，解除 Dialog 固定高度及 overflow，將全部正文與公司資訊置入正常文件流。
- 所有尺寸均需驗證 200% Zoom 後仍能完整閱讀與關閉；320px 不得出現頁面級或 Dialog 內水平溢出。

#### Payment Terms QA

- [ ] `PLATFORM ACCESS`客戶登入下方顯示次要條款入口與核准輔助句。
- [ ] 入口是可正常前往 `payment-terms.html`的 Anchor；支援時才 Progressive Enhance 為原生 Modal Dialog。
- [ ] Dialog 主標只有 `信用卡付款說明`，原文十節逐字完整且順序正確。
- [ ] Dialog 沒有同意、付款、綁卡、訂閱、登入或其他交易操作。
- [ ] 開啟後螢幕閱讀器可取得 Dialog 名稱，初始焦點位於條款標題，下一個 Tab 可到關閉鍵。
- [ ] Tab／Shift+Tab 不進入背景；關閉鍵、Escape、Backdrop 可關閉，正文點擊不會誤關閉。
- [ ] 所有關閉路徑都解除 Scroll Lock，並把焦點還原到原觸發連結且不改變原頁捲動位置。
- [ ] 背景不可捲動；長文只在 Dialog 正文區內捲動，Header 持續可見。
- [ ] 320、375／390、768、1120+ 無水平溢出，手機全文無摘要、收合或 `展開更多`。
- [ ] 1120+ 章節導航可定位且不改寫 URL；Reduced Motion 下不使用平滑捲動。
- [ ] JavaScript 關閉或不支援 Dialog 時可閱讀永久頁，永久頁可列印且與 Dialog 全文一致。
- [ ] 200% Zoom、鍵盤操作、觸控與基本螢幕閱讀器流程通過。

## 8. 洽談專案頁線框

### 8.1 Anchor 與桌機結構

表單共同 Anchor 固定為 `id="project-inquiry"`；Navbar CTA 正式站連到 `/contact/#project-inquiry`，原型連到 `contact.html#project-inquiry`。

```text
Header
頁面 Hero｜洽談 AIDC 或企業算力需求
#project-inquiry
  交易主體提示
  Prototype 不傳送資料警示
  備援聯絡｜07-2695198／sales@signalpro.com.tw
  表單 8/12｜填寫準備與狀態說明 4/12
  01 聯絡資料
  02 需求類型
  03 專案背景
  04 需求摘要與 Prototype 示意確認
  送出／欄位檢查狀態：資料未送出
Footer
```

### 8.2 表單 UX

- 桌機表單與輔助欄同屏；輔助欄只列已確認可準備的資料，不顯示未核准的回覆時效、服務地區或承諾。
- 欄位依認知順序分組，先聯絡資料，再需求類型、地點／階段／時程與摘要。
- 必填與選填需以文字標示，不只使用星號。
- 每個欄位有永久可見 `<label>`；Placeholder 不取代 Label。
- 驗證失敗時在欄位旁顯示文字錯誤，並於表單頂端提供可聚焦的 Error Summary。
- 表單標題／說明之後、第一個輸入欄位之前，依序顯示交易主體提示：`SiGTRON 為對外服務品牌；AIDC 與 AI 雲端服務的正式報價、合約簽署及發票開立，均由希格諾科技股份有限公司（SignalPro Technology CO., LTD.）辦理。`以及 Prototype 警示：`本頁為靜態 Prototype，不會將您輸入的資料傳送至 SiGTRON、希格諾科技或任何表單服務商。請勿填入真實個人資料；正式網站的資料傳送機制與完整個資告知將於上線前完成。`
- 交易主體提示使用一般 Disclosure Note；Prototype 警示使用視覺較明確但非錯誤狀態的 `<aside aria-label="Prototype 資料傳送說明">`或 `role="note"`。頁面載入時不使用 `role="alert"`或 `aria-live`強制朗讀。
- 因 Prototype 不傳送資料，在交易主體提示與 Prototype 警示後、第一個表單欄位前提供明確備援聯絡：`電話：07-2695198`連至 `tel:072695198`，`Email：sales@signalpro.com.tw`連至 `mailto:sales@signalpro.com.tw`。可用 `<address aria-label="洽談專案備援聯絡方式">`或語意清單包住兩個連結；Contact 主內容不重複高雄地址，完整地址保留於全站 Footer。
- 備援入口使用一般文字連結或低權重聯絡列，不新增大型 CTA 卡片，不使用只有電話／信封圖示的操作，也不宣稱多久回覆；連結可見文字與其目的必須一致。
- 原 `個資同意` Checkbox 改名為 `Prototype 示意確認`，標籤逐字使用：`我已閱讀 Prototype 說明；此勾選僅供表單流程展示，資料不會送出。`不得連至不存在的個資條款，也不得使用 `我同意蒐集／處理個資`等正式授權語氣。Checkbox 可維持 Required 以展示驗證流程，但錯誤訊息只能要求完成「Prototype 示意確認」，不可稱為法律同意。
- 送出按鈕使用具體的 Prototype 操作文案，不得暗示已寄送、已建立案件或已進入 CRM。欄位通過檢查後顯示：`欄位檢查完成。此為靜態 Prototype，資料未送出。`並以 `role="status"`或 `aria-live="polite"`宣告；不得顯示 `送出成功`、案件編號、回覆時間或其他虛構結果。
- Prototype Submit 持續 `preventDefault()`且不發出網路請求。正式製作方日後接入服務商時，必須另外導入以希格諾科技股份有限公司為資料負責主體的完整個資告知；不得沿用 Prototype 警示作為正式個資條款。

### 8.3 平板與手機順序

- 平板可維持 5/8 表單＋3/8 輔助欄；空間不足時改單欄。
- 手機順序：Hero → 簡短「準備資料」清單 → 表單標題 → 交易主體提示 → Prototype 警示 → 電話／Email 備援聯絡 → 表單 01–04 → Prototype 示意確認 → 送出 → 未傳送狀態 → Footer。
- 所有欄位單欄、至少 44px 高；姓名／公司等欄位不為了省空間並排。
- Anchor 落點需讓表單標題與第一段說明可見，不直接把焦點放進第一個輸入欄造成鍵盤自動彈出。
- 桌機的兩個提示跨滿表單欄寬，位於 8/12 表單與 4/12 輔助欄分欄之前；平板空間不足時與表單、輔助欄一起改成單欄。320px 時公司英文名稱及狀態文字自然換行，不縮小字級、不橫向捲動。

## 9. 最新消息與活動 UX

### 9.1 URL、入口與頁面責任

- 正式列表：`/news/`；靜態原型：`news.html`。
- 正式單篇：`/news/[article-slug]/`；靜態原型：`news/[YYYY-MM-DD]-[slug].html`，結構來源為 `news/article-template.html`。
- 入口固定包含 Navbar「新聞與活動」、首頁 `#news-events` 與 Footer「新聞與活動」；三處皆進入正式列表 `/news/`／靜態原型 `news.html`。
- News 列表與所有 News 單篇頁的桌機 Header／Drawer 均將「新聞與活動」設為 `aria-current="page"`；首頁 `#news-events` 不因此 Active。
- 列表依發布日期由新至舊；第一版不提供搜尋、分頁、Load More、無限捲動、CMS、登入、編輯或發布後端。
- 分類代碼固定為：`company`公司公告、`project`專案動態、`event`活動資訊、`media`媒體報導；不得由 UI 自行增加成功案例、優惠或其他未核准分類。

### 9.2 `news.html` 最終桌機順序

衝突裁決後的唯一順序如下，Banner 不得移到 H1 前方，H1 不得嵌在圖片內：

```text
Header
Breadcrumb｜首頁／最新消息與活動
Compact Title Group
  NEWS & EVENTS
  H1 最新消息與活動
  查看 SiGTRON 已公開的公司公告、專案動態、活動資訊與媒體報導。
Editorial Banner｜最大 1280 × 320
Filter Buttons｜全部／公司公告／專案動態／活動資訊／媒體報導
Result Count／Status
News Grid｜桌機 3 欄，依日期新至舊
整體空狀態／分類空狀態
Future Static Pagination｜只有內容超過 12 則時才加入
CTA Band｜洽談專案／了解 AIDC 建置
Footer
```

#### Breadcrumb 與 Compact Title Group

- Breadcrumb 使用 `<nav aria-label="麵包屑">`；`首頁`可返回 `/`／`index.html`，目前頁使用文字而非連結。
- Title Group 保持緊湊，桌機最大文字寬度約 720px；Eyebrow、H1 與一段說明形成單一群組，不加入假數字或消息總量宣稱。
- 每頁只有一個 H1，且 H1 是 Banner 外的 HTML 文字。

#### Editorial Banner

- 桌機最大尺寸 `1280 × 320px`，與內容主格線同寬；使用固定 Aspect Ratio／預留高度避免 Layout Shift。
- 平板高度約 240–260px；手機高度約 180–200px，應使用 `<picture>`提供核准的手機裁切，不只縮小桌機圖。
- Banner 不放 H1、分類、日期或其他唯一資訊；裝飾性 Banner 使用空 `alt`。
- 優先使用權利可追溯的真實工程、活動或公司素材。沒有合適素材時，使用品牌色、字體與細線構成的排版式 Banner；不得生成看似紀實的假活動或假機房照片。

### 9.3 Filters 與結果狀態

- 初期 12 則以內使用原生 `<button type="button">`進行當頁篩選，不使用 Link、`role="tablist"`或 Tab Panel 語意。
- Filters 預設 `hidden`；只有 JavaScript 成功初始化後才顯示。無 JavaScript 時隱藏無效控制並顯示全部內容。
- Filter 順序固定為：全部 `all`、公司公告 `company`、專案動態 `project`、活動資訊 `event`、媒體報導 `media`。
- 每個按鈕使用 `aria-pressed="true|false"`；一次只有一個按鈕為 True。
- 切換後焦點留在按鈕，不自動跳入結果；非當前分類的 `<li>`使用原生 `hidden`。
- Result Count 是可見文字並設 `aria-live="polite" aria-atomic="true"`，例如「目前顯示：專案動態，共 3 則」。
- 手機 Filters 使用 `flex-wrap`自然換行，不採橫向滑動 Filter Bar；按鈕高度至少 44px、間距至少 8px，不縮小字體塞成單列。
- 整站 0 則時顯示：「目前尚無已核准公開的消息內容。相關內容完成確認後，將於此更新。」
- 個別分類 0 則時顯示：「目前沒有『活動資訊』類別的已核准公開內容。」並提供「查看全部消息」Button；不得留下空 Grid。

### 9.4 News Grid 與 Card

- Grid：桌機 3 欄、平板 2 欄、手機 1 欄；同列 Card 等高，手機依內容自然延伸。
- 圖片使用 16:9；無核准圖片時整個圖片區省略，或使用已核准的排版式資訊封面，不顯示空白圖片框。
- 共用欄位順序：圖片（若有）→ 分類與日期 → 標題 → 摘要 → 來源／發布方 → 內容 CTA。
- 專案動態在同卡顯示已核准狀態；活動另顯示活動日期、地點與有效狀態；媒體報導顯示媒體名稱、原始刊登日期與外部網站提示。
- 卡片視覺整張可點，但 DOM 只保留一個 Title Link；以 Title Link 的延伸點擊區覆蓋 Card。圖片不建立重複 Link，視覺 CTA 使用同一 Link 範圍，不增加第二個重複焦點。
- Focus Ring 必須清楚包住整張 Card；媒體報導若直接連外，Link 可存取名稱需包含「外部網站」。
- Card 不使用 Hover 上浮、Glow、厚陰影或整卡 3D 翻轉；Title Link Hover 與 Focus 可使用底線、邊框或克制色彩變化。
- 標題與摘要由內容端控制長度，不以 CSS Line Clamp 隱藏必要事實；建議摘要 60–120 個中文字。

### 9.5 靜態分頁預留

- 核准公開內容 `≤12`：全部顯示，不渲染 Pagination。
- 內容 `>12`：每頁固定 12 則，使用真正靜態 URL 與 `<nav aria-label="消息分頁">`；不以 JS 隱藏大量卡片模擬分頁。
- 正式站建議 `/news/`、`/news/page/2/`；Prototype 可使用 `news.html`、`news-page-2.html`。
- 目前頁使用 `aria-current="page"`；Previous／Next 不循環，第一頁／末頁不可建立無效連結。
- 換頁後落在 Result Header／列表標題，不直接把焦點送入第一張 Card。
- 啟用靜態分頁時，分類不能只篩選目前頁。屆時需建立完整靜態分類索引，例如 `/news/category/project/`，並把 Filter Buttons 升級為真正分類 Links；各分類超過 12 則後才各自分頁。
- 第一版先保留穩定 `data-category="company|project|event|media"`，讓未來遷移不需改內容分類。

### 9.6 `news.html` 平板與手機順序

頁面順序不改：Breadcrumb → Compact Title Group → Banner → Filters → Result Count → Grid／Empty State → Pagination → CTA → Footer。

- 平板 `768–1119px`：Title Group 單欄、Banner 240–260px、Filters 換行、Grid 2 欄。
- 手機 `<768px`：Banner 180–200px、Filters 2–3 列自然換行、Grid 1 欄、CTA 兩按鈕全寬垂直排列。
- 手機未來 Pagination 優先顯示「上一頁／第 X／Y 頁／下一頁」，不在 320px 塞入大量頁碼。
- Breadcrumb 可換行，不截斷目前頁名稱；所有控制與連結觸控範圍至少 44×44px。

### 9.7 `news/article-template.html` 桌機線框

```text
Header
Breadcrumb｜首頁／最新消息與活動／文章標題
Article Header
  NEWS & EVENTS
  分類・發布日期・來源／發布方
  H1
  導言摘要
Figure｜核准主圖＋圖說／來源／必要署名；無圖時整區省略
Article Layout
  Main Body 8/12｜開場、主要內容、補充資訊、核准引言
  Fact Panel 4/12｜依 company／project／event／media 顯示
Article Footer｜返回最新消息與活動
CTA Band｜洽談專案／了解 AIDC 建置
Footer
```

- `<article>`包住 Article Header、Figure、正文與 Article Footer；Breadcrumb 與全站 CTA 位於 `<article>`外。
- Article Header 最大文字寬度約 880px，不以巨大字體製造娛樂媒體感。
- Figure 使用語意 `<figure>`／`<figcaption>`；沒有核准圖片時完全省略，不保留灰色空框。
- 桌機正文 8/12、Fact Panel 4/12；平板可使用 5/8＋3/8。Fact Panel 與正文頂端對齊，不做會遮擋頁尾的 Sticky Aside。
- 正文支援 `<h2>`、`<h3>`、段落、清單、核准圖片與引言；引言未取得本人及公司核准時不顯示。

#### Fact Panel Variants

- `company`：發布主體、公告生效日期、受影響服務／對象（如已核准）。
- `project`：案場／專案名稱、資訊截至日期、所在地核准層級、目前狀態、狀態說明與下一個已核准里程碑；目標與規劃不可寫成完成成果。
- `event`：活動日期與時間、時區、地點／線上形式、活動狀態、主辦／協辦角色、SiGTRON 參與角色與有效報名／詳情入口。報名截止、活動結束、取消或延期後必須更新狀態與 CTA。
- `media`：媒體名稱、原始刊登日期、原始報導標題與「查看原始報導」外部 Link；本站只使用自有摘要，不大量轉載原文或暗示媒體背書。

#### 單篇手機順序

```text
Breadcrumb
Article Header
Figure（有核准圖片時）
Fact Panel
Main Body
返回最新消息與活動
CTA Band
Footer
```

- Fact Panel 在正文前，使活動時間、專案狀態與媒體來源不被長文埋藏。
- 內容保持單欄，不使用左右滑動文章、浮動分享工具或 Sticky CTA。
- 外部報名／媒體 Link 使用文字與圖示共同標示外部網站；狀態不只依顏色表示。

### 9.8 Progressive Enhancement 與最小 JavaScript

- 首頁 `#news-events`是由新至舊的靜態 Grid，不需要 JavaScript 初始化、Resize 重算、控制器或 Live Status；內容在純 HTML／CSS 下完整可讀。
- `news.html`只需 Filters 顯示／切換、`hidden`結果、Result Count、分類 Empty State與可選的 `?category=`初始化。
- 無 JavaScript：首頁最新 1–3 則維持相同 Grid 與順序；`news.html` Filters 隱藏、全部內容依日期可讀。
- JavaScript 錯誤不得讓卡片、日期、來源、外部 Link 或空狀態消失。
- 第一版不為 News 增加搜尋、分頁 JS、CMS、分享 Widget、觀看數、相關推薦演算法或自動載入。

## 10. 現有 Prototype 第一輪調整優先序

### P0：導覽、事實與狀態

1. 首頁、AIDC、AI 雲服務、聯絡、News 列表與 News 單篇共六個公開頁面／模板的 Header 與 Drawer 全部使用核准 IA：`AIDC 建置／AI 雲服務／專案與布局／新聞與活動／關於 SiGTRON／客戶登入`；News 固定在專案後、關於前。
2. 統一使用 `#project-footprint` 與 `#project-inquiry`。
3. AI 雲服務所有 `建置中` 改依核准內容為 `平台已上線`／`平台服務`，並保留帳號與專案限制。
4. Navbar 的 `客戶登入` 接正式 Console，並作為 Header／Drawer 唯一 Utility Action；Header 與 Drawer 移除 `洽談專案`，內容 CTA Band、`#project-inquiry` 與 Footer 的洽談入口完整保留。

### P1：首頁專案證據

1. 把台南旗艦案場與亞洲 Pipeline 包在共同 `#project-footprint`。
2. Anchor 第一屏同時揭露試運轉、72 個規劃節點、2026 Q4 目標、其他五國規劃中與約 800 MW 潛在容量。
3. 台南在前、Pipeline 在後；地圖使用固定 Pin 的靜態圖片與文字市場清單。
4. 3D 影片與約 800 MW 都在同區保留必要揭露。

### P2：降低 SaaS／AI 模板感

1. 首頁六能力、交付信心與 AIDC 12 項服務由浮卡改為工程清單或矩陣。
2. 交付流程改為單一 Process Rail／Evidence Table。
3. AI 雲三服務改為共用外框三欄，移除假 Dashboard、發光與大量深色區。
4. 每頁只保留一個大型深色重點區；移除背景網格、脈衝、Glow 與 Card-on-card。

### P3：生態系、表單與細節

1. Customers & Ecosystem Partners 依角色使用核准 Logo 與靜態 Logo Wall；客戶關係或商標未取得雙方公開核准即維持中性文字佔位或隱藏。
2. Contact 建立 `#project-inquiry`、欄位分組、錯誤摘要與響應式單欄。
3. 補齊 Skip Link、Focus、Active、替代文字、狀態文字與 Reduced Motion。

### P4：News & Events

1. 首頁在完整 `#project-footprint` 閉合後、AIDC 完整服務範圍前加入 `#news-events`；依核准台帳顯示 0 則空狀態或依發布日期由新至舊的最新 1–3 則。
2. 首頁固定使用靜態 Grid：桌機 3 欄、平板 2＋1、手機單欄；不建立 Rail、Controls、Status、Overflow 或 Scroll Snap，且所有尺寸維持相同 DOM 順序。
3. 新增 `news.html`：Breadcrumb → Compact Title Group → 1280×320 Banner → Filters → Result Count → 3／2／1 Grid → Empty State → Future Pagination → CTA → Footer。
4. 新增 `news/article-template.html`：Breadcrumb、Article Header、可選 Figure、8/4 正文與 Fact Panel，以及 Event／Media 差異狀態。
5. Navbar 與 Footer 加入「新聞與活動」入口；Filters 無 JS 時隱藏並保留全部內容可讀。

## 11. 第一輪保留項目

- SiGTRON 主 Logo、白色 Sticky Header 與 Footer 的 `Powered by SignalPro` 次級署名。
- 首頁 H1、兩類需求入口與主要／次要 CTA 層級。
- 台南 3D 概念素材，但必須保留非實拍標示。
- 已合成正確 Pin 的亞洲靜態地圖，但需移除動態定位、脈衝與 Glow。
- 六階段交付內容、GaaS／MaaS／TaaS 文案、原生 FAQ 與 Partners 靜態 Logo Wall。
- News Card 使用 16:9 Editorial Image、單一 Title Link 與既有 CTA 層級；首頁使用不需 JavaScript 的靜態 Grid。
- 純 HTML、現代 CSS 與最少量 vanilla JavaScript 的技術範圍。

## 12. 可存取性與語意交付

- 每頁只有一個 `<h1>`；後續使用正確 `<h2>`／`<h3>`。
- 頁首第一個可聚焦元素提供「跳至主要內容」連結，目的地為 `#main`。
- 主導覽使用 `<nav aria-label="主要導覽">`；Drawer 使用獨立可存取名稱。
- 所有文字與背景符合 WCAG AA；一般文字至少 4.5:1。
- Focus Ring 清楚可見，不得以 `outline: none` 移除。
- 狀態不可只用顏色、Pin 或圖示表達。
- 流程使用 `<ol>`；市場、服務、Logo Wall 使用適當 `<ul>`／`<li>`；資料可用語意表格時需保留欄列標題。
- 地圖不是唯一資訊來源；以文字清單提供相同國家與狀態。
- 裝飾圖使用空 `alt`；有資訊的工程圖、3D 素材與地圖使用描述性替代文字或相鄰完整圖說。
- FAQ 使用原生 `<details>`／`<summary>`。
- News Filters 使用原生 Buttons 與 `aria-pressed`；`news.html` Result Count 使用 `aria-live="polite"`，無 JS 時 Filters 不可留下無效操作。首頁靜態 News Grid 不建立 Live Status 或 Controls。
- News Card 以單一 Title Link 延伸完整卡片點擊區；不得製造圖片 Link、標題 Link 與重複 CTA 三個相同焦點。
- Article 使用 `<article>`、`<figure>`／`<figcaption>`、語意標題與可辨識的 Fact Panel；外部報名及媒體 Link 必須明確標示外部網站。
- 首頁 About 品牌關係句與 Footer 法定署名必須是可選取、可縮放的真實文字，不可烘焙在 Logo 或圖片內；公司英文名稱依原文大小寫呈現。
- Contact 交易主體提示、Prototype 警示及電話／Email 備援聯絡在表單控制項之前進入閱讀順序；Prototype 警示不使用頁面載入即播報的 Alert。示意 Checkbox 具有可見 Label，錯誤訊息與 Error Summary 均稱為 `Prototype 示意確認`。
- Footer 與 Contact 的電話、Email 使用原生 Anchor 且可由鍵盤聚焦；Focus Ring 符合全站規格。`tel:`值不含視覺格式符號，`mailto:`與可見 Email 完全一致；`<address>`具有區辨 Footer 與洽談備援用途的可存取名稱。
- Prototype 欄位檢查完成狀態使用 `role="status"`或 `aria-live="polite"`，文字明示資料未送出；焦點可移到狀態節點，但不得將其宣告為寄送成功。
- AI 雲端平台營運句與 INFINITIX 次要說明保持相鄰的 DOM 順序；不以 Logo、Tooltip 或色彩作為唯一關係說明。
- 尊重 `prefers-reduced-motion`；必要 Menu 轉場以外不依賴動畫理解內容。

## 13. UI Designer 具體交付畫面

UI 第一輪至少提供：

1. 1440px 首頁全頁，以及 Hero、`#project-footprint`、AI 雲服務概覽的放大畫面。
2. 390px 首頁全頁，特別驗證 Anchor 第一屏的狀態揭露與地圖／市場清單順序。
3. 1440px 與 390px 的 AIDC 頁：Engineering Matrix、Process Rail、合作模式。
4. 1440px 與 390px 的 AI 雲服務頁：平台狀態、三服務共用外框、平台存取表。
5. 1440px 與 390px 的 Contact：`#project-inquiry` 表單、錯誤狀態與輔助欄。
6. Header 三狀態：桌機 Logo＋五個主導覽＋單一客戶登入；平板與手機皆為 Logo＋Menu，所有導覽及單一滿寬客戶登入收入 Drawer。
7. 360px Drawer 的 Default、Hover／Focus、Active 與開啟狀態。
8. Status Row、Evidence Strip、Engineering Matrix、Process Rail、Market Status List、Disclosure Note 六個共用元件。
9. 1440px、1120px、768px、390px、320px 的首頁 News & Events；涵蓋 0 則空狀態、1 則、2 則及最新 3 則靜態 Grid。
10. 1440px、1120px、768px、390px、320px 的 `news.html`；涵蓋正常列表、分類 0 則與整體 0 則狀態。
11. 1440px 與 390px 的 `news/article-template.html`；至少提供一般文章、Event Fact Panel、Media Fact Panel 與無主圖狀態。
12. 法定／品牌關係最小版面：首頁 About 核准句、七頁 Footer 法定署名＋`Powered by SignalPro`、Contact 表單前雙提示與示意確認／未傳送狀態，以及 AI 雲 Technology Ecosystem 的營運主體＋INFINITIX 次要說明；沿用既有元件與格線，不新增獨立大型區塊。

### UI 驗收條件

- 視覺第一印象是工程整合與基礎設施，不是 AI SaaS、GPU 電商或科幻 Console。
- `專案與布局`、`#project-footprint`、`#project-inquiry` 在所有標註與 Prototype Handoff 完全一致。
- 台南試運轉與其他五國洽談／規劃狀態沒有被同一色彩、同一 Pin 或同一標籤混為一談。
- `72 Nodes`、`2026 Q4`與`約 800 MW`均與其規劃／目標／潛在狀態相鄰。
- 平台已上線與帳號／專案限制同時可見。
- About 清楚說明 SiGTRON 是希格諾科技股份有限公司自有品牌；Footer 清楚呈現法定公司名稱、英文名稱、統一編號與次級 `Powered by SignalPro`，且不讓兩者看起來是不同法人或第三方合作關係。
- Contact 在任何輸入欄之前說明交易主體及 Prototype 不傳送資料；Checkbox 不再冒充個資同意，欄位檢查結果明示資料未送出。
- AI 雲 Technology Ecosystem 清楚區分希格諾科技股份有限公司的營運／帳號／服務責任與 INFINITIX 的後端白牌技術平台夥伴身分，且不提高 INFINITIX 的視覺層級。
- AIDC 與 AI 雲服務行銷正文不重複締約／開票說明；Footer、Contact、About 與 Technology Ecosystem 各自只承擔已核准的單一資訊目的。
- 320px 無頁面級核心內容橫向捲動；Drawer、表單、FAQ、Anchor 導航與 News Filters 可用鍵盤完成；首頁 News 不得產生水平 Track。

### 法定／品牌關係響應式與可及性 QA

| 測試寬度 | 驗收重點 |
| --- | --- |
| 1440px | About 維持文字 7/12＋素材 5/12；Contact 雙提示與備援聯絡跨表單區上方且不被側欄切斷；Technology Ecosystem 的營運句與 INFINITIX 說明相鄰；Footer 聯絡欄完整，Footer Bottom 可同列但法定署名完整。 |
| 1120px | 桌機 Header／Footer 邊界下，地址、電話、Email、完整公司名稱、英文名稱與統一編號均不與 `Powered by SignalPro`重疊；不以縮小至難讀字級換取單列。 |
| 1119px／768px | 多欄內容依既有格線自然轉單欄或換行；不建立平板專用重複文案。Footer 聯絡資料維持地址 → 電話 → Email，Footer Bottom 固定為法定署名後接品牌背書。 |
| 390px／375px | About、Contact 雙提示／備援聯絡、表單、Technology Ecosystem 與 Footer 皆為單欄；交易主體提示、Prototype 警示、電話與 Email 先於所有輸入欄，長地址及公司名稱正常換行。 |
| 320px | 地址、Email、法定名稱無水平溢出、截斷、超小字或只靠 Tooltip 才能讀取；Footer Logo／文字不擠壓聯絡資料或法定署名，電話／Email 與 Checkbox Label 可完整點擊。 |

- 七頁 Footer 逐頁比對同一法定署名及 `Powered by SignalPro`順序；無不完整 `SignalPro Technology`、舊 Placeholder 或另一法人暗示。
- 鍵盤閱讀順序：Contact 標題 → 交易主體提示 → Prototype 警示 → 電話 → Email → 表單欄位 → Prototype 示意確認 → Submit → 未傳送狀態；Error Summary 可把焦點送往示意 Checkbox。Footer 電話與 Email 依可見順序各有一個焦點，不建立重複圖示連結。
- 螢幕閱讀器確認 About、Footer、Technology Ecosystem 不因重複 Logo alt 朗讀兩次；Footer 與 Contact 的 `<address>`各有明確名稱，地址純文字、電話與 Email 宣告為連結；Prototype 警示可依文件順序閱讀但不在載入時打斷使用者，欄位檢查結果只禮貌宣告一次。
- 200% Zoom 下再次驗證 Footer 地址／電話／Email、法定署名與品牌背書換行，以及 Contact 提示、備援聯絡、Checkbox 與 AI 雲關係文字；內容不遮蔽、不重疊且所有可操作目標維持至少 44px。
- JavaScript 停用時，所有品牌／法定文字、Contact 雙提示與 Checkbox 仍可見；Submit 不得造成真實資料傳送，未傳送狀態可由靜態說明持續明示。

### News 響應式 QA 條件

- `1440px`：內容最大寬 1280px；`news.html` Banner 精確維持 1280×320 上限、列表 Grid 3 欄；首頁最新 3 則為同列三欄靜態 Grid，沒有 Rail、Controls、Status 或水平 Overflow。
- `1120px`：必須顯示桌機 Header，順序為 Logo → 五個主導覽 → 單一客戶登入；全部單行、無重疊、無空白 CTA 欄位。首頁最新 3 則仍為三欄，`news.html` 3 欄 Grid 與 Banner 均無壓縮或文字截斷。
- `1119px`：必須切換為 Logo＋Menu，不得同時顯示桌機連結或 Header Login；360px Drawer 依序顯示五個主導覽、分隔線與單一滿寬客戶登入。
- `768px`：驗證平板 Header／Drawer 邊界；首頁最新 3 則為兩欄＋第二列一張靠左，DOM 仍為新至舊；`news.html` Grid 2 欄，Filters 自然換行且沒有橫向 Filter Bar。
- `390px`：首頁最新 3 則為單欄、由新至舊且無水平滑動；`news.html` Banner 180–200px、Grid 1 欄、Filters 2–3 列、44px 觸控目標，Event／Media Fact Panel 位於單篇正文之前。
- `320px`：驗證首頁 News 長標題、來源名稱與「查看全部」不造成頁面級或區塊級水平捲動；`news.html` Filter 文案、未來精簡 Pagination 與雙 CTA 亦不得溢出。
- 全部尺寸都需驗證：首頁 0 則顯示正式 Empty State、1–2 則只呈現實際數量且不補假卡；首頁沒有 Rail／Controls／Status／Scroll Snap；無 JS 時首頁順序不變、`news.html` 全部內容可讀且 Filters 隱藏；外部 Media Link 有文字提示。
- Drawer 單按鈕驗收：移除 `洽談專案` 後不得殘留第二欄、空按鈕、空白間距或 Primary CTA 樣式容器；鍵盤焦點順序為關閉 → 五個主導覽 → 客戶登入，Escape／遮罩關閉與焦點回復皆正常。

## 14. 委外製作注意事項

- 不引入框架、套件、後端、CMS 或 Build Tool；使用語意 HTML、現代 CSS 與最少量 vanilla JavaScript。
- 未確認的服務規格、案場數、價格、SLA、日期、認證、客戶與 Logo 不可由設計或製作方補寫。
- 合作夥伴名單與授權需由獨立資料清單維護；不可自行從網路下載 Logo。
- 導覽、Drawer、Scrollspy、表單驗證與 FAQ 完成後需做鍵盤、觸控、螢幕閱讀器與 Reduced Motion 檢查。
- News 內容只從核准台帳與圖片權利台帳發布；首頁只取發布日期最新 3 則，`news.html` 12 則內不分頁，超過 12 則才建立真正靜態分頁與完整分類索引。
- `news/article-template.html`依 `company`／`project`／`event`／`media`保留必要 Fact Panel；沒有核准主圖時省略 Figure，不自行補圖。
- 缺少素材時使用明確標示的中性佔位；不可用虛構機房、假數據或 AI 生成畫面替代事實證據。
