# SiGTRON UI 視覺系統 v1

> UI Designer 核准交付文件  
> 適用：首頁、AIDC 建置、AI 雲服務、洽談專案、新聞與活動列表、新聞單篇及 Payment Terms 永久頁  
> 實作限制：語意 HTML5、現代 CSS、最少量 vanilla JavaScript；不新增框架、套件、Build Tool、字體或未核准素材。  
> 上位品牌方向：`Engineered Infrastructure Confidence`  
> UI 執行語彙：`Operational Clarity`

本文件是 Frontend 第一輪視覺重構的權威規格。若舊 Prototype CSS 與本文件衝突，以本文件為準；事實、數字與狀態仍以 `docs/00-project/confirmed-facts-and-decisions.md` 為最高優先。

---

## 1. 唯一視覺方向

### Engineered Infrastructure Confidence

SiGTRON 網站應先讓 AIDC 業主與企業決策者感受到：範圍可定義、系統可整合、狀態可辨識、成果可驗收。AI 雲服務是基礎設施上層的營運能力，不是整站的視覺主角。

### 風格組合

> **Swiss Modernism 2.0 × 工程基礎設施 × 企業顧問式資訊設計**

- 使用嚴謹格線、清楚字級、規則留白與少量高對比色。
- 以資料列、矩陣、流程軌與證據區建立專業感，不靠發光、漸層或漂浮卡片營造科技感。
- 視覺閱讀順序固定為：`狀態 → 範圍／數字 → 定義／限制 → 方法 → 下一步`。
- 圖像優先呈現工程、設備、場址、3D 概念素材與靜態地圖，不使用通用 AI 人像、發光大腦、Prompt 介面或假 Console。
- 白色與冷灰占整體頁面約 65–75%；深墨藍只作標題、結構錨點、少數重點帶與 Footer。

### 第一印象驗收句

> 這是一家能統籌 AIDC 建置與算力服務的工程整合公司，而不是 AI SaaS、GPU 電商或科幻控制台。

---

## 2. 視覺使用比例與版面紀律

### 色彩比例

- 65–75%：白色與冷灰畫布。
- 15–22%：深墨藍標題、文字、結構線與少數重點區。
- 6–10%：品牌藍互動與導覽狀態。
- 2–4%：Amber、Green、灰藍等語意狀態色。

### 每頁上限

- 每頁最多一個大型深色重點區；Footer 不計入，但不可與前一區連成長距離暗色頁面。
- 每個可視區域最多一個實心 Primary CTA。
- 每個 Section 最多一種裝飾性背景處理；第一輪原則上只使用純色與 1px 分隔線。
- 一般內容不使用 Card inside Card。
- 三項以上平行內容，優先考慮共用外框＋分隔線，不先拆成浮動卡片。

### 表面層級

1. `Canvas`：頁面背景，白色或冷灰。
2. `Section`：靠留白、1px 分隔線或微小底色差異區分。
3. `Panel`：需要承載一組相關資料時使用，白底、細邊框、4–8px 圓角。
4. `Card`：只保留給真正獨立、可選擇或可點擊的內容，如兩類需求入口。
5. `Overlay`：只用於 Navigation Drawer；不把一般內容做成玻璃浮層。

---

## 3. 色彩系統

品牌色以既有彩色 SiGTRON Logo 與已核准色彩為準。不得使用 CSS filter、反相或重繪方式製作未核准 Logo 版本。

| Semantic Token | 色值 | 用途 |
| --- | --- | --- |
| `--color-brand-600` | `#16689F` | Primary CTA、主要連結、Active、Focus |
| `--color-brand-700` | `#0F527F` | Primary hover／pressed |
| `--color-brand-100` | `#E7F2F8` | Hover 底、局部資訊底色 |
| `--color-ink-950` | `#071B2F` | H1–H3、深色結構、Footer |
| `--color-ink-800` | `#17324D` | 次級標題、深色圖說 |
| `--color-steel-600` | `#526C8F` | 次級結構、靜態圖例 |
| `--color-steel-500` | `#6E89A9` | 輔助資訊、非主要狀態 |
| `--color-text` | `#102235` | Body 主要文字 |
| `--color-muted` | `#536779` | 次要文字與說明 |
| `--color-subtle` | `#536779` | 圖說與低層級 metadata；維持一般文字 4.5:1 對比基線 |
| `--color-surface` | `#FFFFFF` | Header、Panel、Card |
| `--color-canvas` | `#F4F7FA` | 冷灰畫布 |
| `--color-canvas-strong` | `#EDF2F6` | 區段分層與表頭 |
| `--color-border` | `#D7E1EA` | 一般邊框與分隔線 |
| `--color-border-strong` | `#AEBFCC` | 表格、重要分隔與 Hover |
| `--color-trial-bg` | `#FFF1D6` | 試運轉中／目標時程背景 |
| `--color-trial-text` | `#734800` | 試運轉中／目標時程文字 |
| `--color-trial-border` | `#D9AD57` | 試運轉狀態邊框 |
| `--color-live-bg` | `#E8F4EC` | 平台已上線背景 |
| `--color-live-text` | `#17643B` | 平台已上線文字 |
| `--color-live-border` | `#B8DCC5` | 平台已上線邊框 |
| `--color-planning-bg` | `#EEF3F6` | 洽談／規劃中背景 |
| `--color-planning-text` | `#40586B` | 洽談／規劃中文字 |
| `--color-planning-border` | `#BECBD4` | 洽談／規劃中邊框 |
| `--color-danger` | `#A13C3C` | 表單錯誤；不作裝飾 |
| `--color-focus` | `#16689F` | 淺色表面的 Focus Ring |

### Focus 在深色表面

品牌藍是 Focus 主色。深墨藍背景上使用雙層外框確保可見：內層 2px 白色、外層 4px `#16689F`；不得改用霓虹青。

### 狀態顏色規則

- `平台已上線`：Green，必須同時保留文字。
- `試運轉中`、`目標 2026 Q4`：Amber；目標日期不得改成完成狀態 Green。
- `洽談／規劃中`、`平台規劃方向`：灰藍中性色。
- 台灣旗艦案場與其他五國不可只靠不同顏色區分；地圖與清單均需顯示文字狀態。
- 狀態色不能作一般裝飾、按鈕或 Section 背景。

---

## 4. Typography

只使用 Prototype 已有字體設定，不新增 Google Fonts、字體檔或未核准字型。

### Font Stack

```css
--font-sans: Inter, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;
```

如果使用者裝置沒有 Inter 或 Noto Sans TC，系統字體回退必須維持完整排版。Logo 內文字不可由 HTML 字體重製。

### 字級與行高

| Token | Desktop | Mobile | Line-height | Weight | 用途 |
| --- | --- | --- | --- | --- | --- |
| `--type-display` | 64px | 42px | 1.10 | 700 | 首頁 H1 |
| `--type-h1` | 56px | 40px | 1.12 | 700 | 內頁 H1 |
| `--type-h2` | 44px | 32px | 1.20 | 700 | Section H2 |
| `--type-h3` | 26px | 22px | 1.30 | 650–700 | Panel／主要元件標題 |
| `--type-h4` | 20px | 19px | 1.40 | 650 | 資料列標題 |
| `--type-lead` | 19px | 17px | 1.70 | 400 | Hero／Section Lead |
| `--type-body` | 17px | 16px | 1.75 | 400 | 主要內文 |
| `--type-small` | 14px | 14px | 1.60 | 400–600 | Metadata／Disclosure |
| `--type-label` | 13px | 13px | 1.40 | 650–700 | Eyebrow／欄位標籤 |

### Typography 規則

- H1–H3 使用深墨藍，不用純黑；中文標題不使用 800–900 超粗字重。
- 中文 H1 最長約 14–18 個全形字寬；桌機 Hero 文案最大 7 欄。
- 一般內文最大寬約 36 個中文字；桌機長文控制在約 60–75 個英文字元。
- Eyebrow 僅用短英文或短中文，字距 `0.08em`，不得用膠囊底。
- `72`、`2026 Q4`、`約 800 MW`使用 `font-variant-numeric: tabular-nums`，但不使用跳動計數動畫。
- Monospace 不作大面積技術感字體；若現有素材沒有 monospace，就不新增。

---

## 5. Grid、Container 與 Spacing

### Breakpoints

| Viewport | 規格 |
| --- | --- |
| `<768px` | Mobile，4 欄，左右 20px |
| `768–1119px` | Tablet，8 欄，左右 32px |
| `≥1120px` | Desktop，12 欄，最大內容寬 1280px，左右最少 40px |

320px 是最低驗收寬度；1440px 與 390px 是主要 UI 畫面尺寸。

### Grid

- Desktop：12 欄，24px gutter。
- Tablet：8 欄，20px gutter。
- Mobile：4 欄，16px gutter。
- 一般文字與表格跟內容容器對齊；滿版背景可以延伸，但內容不可脫離格線。
- Mobile 不靠 CSS `order` 改變敘事，只把相同結構由多欄轉單欄。

### Spacing Tokens

`4, 8, 12, 16, 24, 32, 40, 48, 64, 72, 88, 96, 112, 128px`

- Desktop Section：88–112px；Hero 可 96–128px。
- Tablet Section：72–88px。
- Mobile Section：56–72px。
- Panel 內距：Desktop 24–32px；Mobile 20px。
- 資料列垂直內距：20–24px。
- 標題至 Lead：16–20px；Lead 至第一個主要元件：32–48px。
- 狀態與其揭露文字最大間距：12px，不能跨區。

---

## 6. Radius、Border、Shadow 與 Motion

### Radius

- `--radius-xs: 4px`：Badge、欄位標籤、數字索引。
- `--radius-sm: 6px`：Button、Input、FAQ Summary。
- `--radius-md: 8px`：Panel、Card、影片與地圖容器。
- 不再使用 12–16px 大圓角作為全站預設。
- 不使用 `999px` 膠囊，除非是無文字的小型圓點圖例；狀態 Badge 仍使用 4px 矩形。

### Border

- 一般：1px `--color-border`。
- 重要表頭／Hover：1px `--color-border-strong`。
- Section 分隔：1px solid `#E6EDF2`。
- 深色表面：1px solid `rgba(255,255,255,.18)`，但不可大量出現。

### Shadow

- Header scroll：`0 4px 16px rgba(7, 27, 47, .05)`。
- Drawer：`-16px 0 40px rgba(7, 27, 47, .14)`。
- Panel：預設無陰影。
- 可點擊入口卡 Hover：`0 8px 20px rgba(7, 27, 47, .07)`。
- 禁止大面積 `0 18px 48px`、發光 shadow 或每張卡都浮起。

### Motion

- Hover／Focus／Menu：150–200ms。
- Drawer：200–250ms `ease-out`；關閉 160–200ms。
- 只動畫 `opacity` 與 `transform`；不動畫 width、height、top、left。
- 一般 Section、數字、Pin、Logo、流程文字與資料列不做進場動畫。
- 核准 POC 例外一：首頁 Hero 的 Engineering Stack 四個 `li` 可做一次性 `opacity` 0→1 與 `translateY` 8px（桌機／平板）或 6px（手機）→0；360／320ms，60／50ms stagger，`ease-out`。
- 核准 POC 例外二：AIDC 獨立頁完整六階段 Process Rail 只動畫 `aria-hidden="true"` 的裝飾線與節點；線於桌機水平展開、平板／手機垂直展開，節點依序顯示。01–06、標題、工作重點與階段成果不可動畫；首頁摘要 Rail 不套用。
- 兩處 POC 皆使用原生 WAAPI 與一次性 `IntersectionObserver`，CSS 預設為終態可見，不使用 Anime.js 或外部依賴；`will-change` 僅在執行期間存在。
- `prefers-reduced-motion: reduce` 時取消位移、平滑捲動與非必要 transition。

---

## 7. Navbar 與 Header 規格（P0）

### 7.1 核准 IA

`Logo → AIDC 一站式建置 → AI 雲端服務 → 專案與布局 → 關於 SiGTRON → 新聞與活動 → 客戶登入`

- 不顯示文字版「首頁」。
- 不使用 Dropdown。
- Logo 回首頁。
- Desktop Header 固定為五個文字連結＋一個 outlined `客戶登入`，不放內容型 Primary CTA。
- `客戶登入`不使用人物、鎖頭或外連 icon 作主要視覺；文字已足夠清楚。
- Header 與 Drawer 移除`洽談專案`；內容區與 Footer 的洽談 CTA 繼續保留。

### 7.2 Desktop（≥1120px）

- Header 高度：72px；sticky、top 0、`z-index: 1000`。
- 背景：`#FFFFFF`；底線 1px `--color-border`。
- 不使用 `backdrop-filter`、半透明玻璃或浮空圓角容器。
- Scroll 後只增加低陰影，不改成深色 Header。
- 內部最大寬 1280px，跟頁面格線對齊。
- Logo 可視框：建議 174×32px；沿用 `sigtron-logo-horizontal.png` 與既有安全留白裁切方式，不改原圖比例與顏色。
- Logo 到導覽區至少 40px；Logo、文字導覽與操作區皆設 `flex-shrink: 0`，避免五個連結被壓縮換行。
- 主導覽字級：15px／600，單行。
- 每個導覽觸控高度至少 44px；五個文字連結的 `gap: clamp(.875rem, 1.3vw, 1.25rem)`。
- 右側 `.header-actions`設 `flex: 0 0 auto`，與最後一個文字連結以 `margin-left: clamp(1.25rem, 2vw, 1.75rem)`分隔。
- `客戶登入`：outlined Secondary，高 44px、`min-width: 5.5rem`（88px）、左右 padding 14px。

### 7.3 Tablet（768–1119px）

- Header 高度：64px；左右 padding 24–32px。
- 顯示：Logo、outlined `客戶登入`、Menu；768px 起不得以內容 CTA 取代登入。
- Logo 可視框：建議 154–166×28–30px。
- `客戶登入`：最小 88×44px，樣式與 Desktop 相同。
- Menu：44×44px；圖示三線，具 `aria-label` 與 `aria-expanded`。
- 五個文字連結進 Drawer；Header 中的`客戶登入`維持可見。

### 7.4 Mobile（<768px）

- Header 高度：64px；左右 padding 20px。
- 只顯示 Logo 與 Menu；`客戶登入`移入 Drawer，不在 Header 擠入操作按鈕。
- Logo 可視框：建議 146–154×27–28px。
- Menu 44×44px，邊框 1px、6px 圓角；不可只有 20px 小 icon 點擊區。

### 7.5 Navigation Drawer

- Tablet（768–1119px）寬度：`min(360px, 100vw)`；Mobile（<768px）使用 `100vw` 滿寬；皆從右側進入，高度 `100dvh`。
- 背景：白色；文字深墨藍；不得透明。
- Backdrop：全視窗 `rgba(7, 27, 47, .48)`，不加 blur。
- Drawer 內建 64px 頂列，顯示 Logo 或「網站選單」與 44×44px 關閉按鈕。
- 內容左右 padding 20px；頂部 12px；底部至少 24px 並考慮安全區。
- 導覽順序：
  1. AIDC 一站式建置。
  2. AI 雲端服務。
  3. 專案與布局。
  4. 關於 SiGTRON。
  5. 新聞與活動。
  6. 分隔線。
  7. 客戶登入。
- 主導覽每列 56px，17px／600，底部 1px 分隔線。
- `客戶登入`：滿寬 48px outlined Secondary；Drawer 不放內容型 Primary CTA。
- Drawer 必須具備 Modal 語意、Focus Trap、Escape／遮罩／連結關閉、Scroll Lock 與關閉後焦點返回。
- 視窗放大到 1120px 時自動清理 Drawer、Scroll Lock 與 ARIA 狀態。

### 7.6 Active、Hover、Focus、Pressed

**導覽連結**

- Default：`--color-text`。
- Hover：`--color-brand-600`，不位移。
- Active：品牌藍、600–700 字重、文字下方 2px 底線；搭配 `aria-current`。
- Focus-visible：3px 品牌藍外框、offset 3px。
- `news.html`與單篇文章頁的`新聞與活動`連結皆標 `aria-current="page"`；首頁上的同一連結不標 Active。
- `專案與布局`及`關於 SiGTRON`只在相應 Section 進入閱讀區時標 `aria-current="location"`，兩者不可同時 Active。

**Primary Button**

- Default：品牌藍底、白字、1px 同色邊框。
- Hover：`--color-brand-700`，無上浮。
- Pressed：`#0B456B`，不縮放。
- Focus-visible：3px `--color-focus`＋2px 白色間隔。
- Disabled：只在功能確實不可用時使用，背景 `#AAB8C2`、文字白色、`cursor: not-allowed`；不得用 Disabled 掩蓋不存在的入口。

**Secondary Button／客戶登入**

- Default：白底、深墨藍字、1px `--color-border-strong`。
- Hover：`--color-brand-100`、品牌藍邊框。
- Pressed：`#D7EAF4`。
- Focus 與 Primary 相同。

---

## 8. 共用 UI 元件優先序

### P0：狀態、導覽與轉換

#### 8.1 Status Row

用途：把狀態、適用範圍與限制放在同一閱讀區域。適用 Hero、AI 雲服務、旗艦案場與 Pipeline。

**Desktop**

- 一個共用外框或上下分隔線內，左側狀態 3/12，右側說明 9/12。
- 最小高度 56px；垂直 padding 14–16px。
- Badge 不超過內容必要寬度；揭露文字 14–15px。

**Mobile**

- 單欄：Badge 在上、完整說明在下，間距 8px。
- 不把限制放 Tooltip、Popover 或 Accordion。

**語意**

- 使用一般區塊＋可讀文字；Badge 不是唯一狀態來源。
- 狀態更新若會動態發生才使用 `aria-live`；靜態網站不需濫用。

#### 8.2 Disclosure Note

- 用於 `72 Nodes`、`2026 Q4`、`約 800 MW`、平台帳號限制與非實拍說明。
- 14px／1.65；顏色至少達 WCAG AA，不縮成 11–12px 法務細字。
- 左側可有 3px 品牌藍或狀態色直線；4px 圓角、淺底。
- 必須緊接相關數字或素材，不放到 Section 最末端才補充。

### P1：可核實專案證據

#### 8.3 Evidence Strip

用途：在 `#project-footprint` Anchor 第一屏同時揭露案場狀態與數字定義。

**內容順序**

1. 台南新市：試運轉中。
2. 72 Nodes：目前規劃導入規模。
3. 2026 Q4：目標正式商轉。
4. 五國市場＋約 800 MW：洽談／規劃中及潛在容量定義。

**Desktop**

- 單一外框四欄，不做四張浮卡。
- 每欄 padding 20–24px；欄間 1px 分隔線。
- 數字 36–48px／700；定義 14–16px，必須在同欄。
- 第一欄可用狀態 Badge；其餘不使用發光 icon。

**Tablet／Mobile**

- Tablet 2×2；Mobile 單欄 Status Rows。
- Mobile 數字 30–36px；每列上下 16–20px。
- 完整 Disclosure Note 緊接 Evidence Strip。

#### 8.4 台南旗艦案場 Project Detail

- 全區使用白色或冷灰，不使用滿版深色漸層。
- Desktop：3D 影片 7/12；Evidence Table 5/12；gap 24–32px。
- Mobile：狀態、標題、關鍵資料、影片、CTA 依序單欄。
- 影片 16:9，8px 圓角、1px 邊框、無厚陰影。
- `3D 渲染概念影片｜非現場實拍`放在播放器正下方 `figcaption`，也需在封面狀態可見；不可藏在 Hover 或播放控制列。
- Evidence Table 固定順序：狀態、72 Nodes、NVIDIA HGX B300、VAST Data、高速基礎設施範圍、2026 Q4 目標。
- NVIDIA 與 VAST Data 使用純文字；未取得進一步 Logo 授權前不加入商標圖形。
- 不顯示進度百分比、Live、即時狀態、脈衝或工程里程碑動畫。

#### 8.5 亞洲 Pipeline：Map＋Market Status List

- Section 以冷灰畫布為主；地圖與清單為白底 Panel。
- `約 800 MW`先顯示定義，再顯示地圖；不得只把數字做成績效大標。
- Desktop：靜態地圖 8/12；市場狀態清單 4/12；gap 24px。
- Tablet／Mobile：地圖在前、文字清單在後。
- 沿用現有 `asia-project-pipeline-map.png`；Pin 已合成於圖片，不用 CSS／JS 動態定位。
- 地圖容器 8px 圓角、1px 邊框、無 glow。
- 台灣與其他五國的圖例除形狀外必須有文字。
- 市場清單每列包含：國家／市場、狀態、可公開範圍；列高至少 52px。
- 三項平台方向使用平面資料列：HGX B300、GB300 NVL72、Vera Rubin；全部保留「規劃方向」，Vera Rubin 另標「前瞻規劃中」。
- 不把平台線條連到特定國家，避免暗示未核准部署。

### P2：工程方法與服務結構

#### 8.6 Engineering Matrix

用途：首頁六項 AIDC 能力、AIDC 頁 12 項服務、跨域挑戰與責任界面。

**視覺**

- 共用一個外框與表頭，內部用 1px 分隔線；不拆成 6 或 12 張 SaaS 卡。
- 編號使用 13–14px 品牌藍；標題 18–20px；說明 15–16px。
- 不使用圓形 icon、彩色插圖或 Hover 上浮。

**Desktop**

- 首頁六項：2 欄×3 列，每格顯示編號、範圍、作用。
- AIDC 12 項：3 欄×4 列或 4 欄×3 列；寬度不足時優先 3 欄，提高文字可讀性。
- 矩陣底部以全寬 Disclosure Note 顯示「內容、責任與驗收依專案確認」。

**Tablet／Mobile**

- Tablet 2 欄；Mobile 單欄。
- 保持服務順序，不折疊、不橫滑。

**語意**

- 若資料有明確欄列關係，可使用 `<table>`；若是獨立服務清單，使用 `<ol>`／`<li>`＋CSS Grid。

#### 8.7 Process Rail

用途：六階段 AIDC 交付與三階段 AI 雲合作方式。

**Desktop**

- 六階段採連續資料列；欄位：編號 1/12、階段 3/12、工作重點 4/12、階段成果 4/12。
- 每列最小高度 104px，上下 24px。
- 左側 2px 品牌藍 Rail 可跨列，但不使用發光節點或圓形脈衝。
- 階段成果用文字欄位，不做完成章、百分比或進度條。

**Mobile**

- 單欄 `<ol>`；每項依序顯示編號、階段、工作重點、階段成果。
- 左側 Rail 可保留，內容 padding-left 24–32px。
- 不做 Carousel、Tab 或只顯示單一步驟。

#### 8.8 AI 雲三項服務表

- 一個共用外框，Desktop 三欄，Mobile 單欄；欄間 1px 分隔線。
- 頂部使用一條 3px 品牌藍結構線；不使用 glow、gradient 或 glass。
- 每欄順序：`平台服務 → 全名 → 一句話 → 需求評估重點 → 帳號／專案限制`。
- `平台服務`使用中性品牌藍文字標籤，不做綠色上線 Badge；整個平台的上線狀態由上方 Status Row 表達。
- 不顯示價格、GPU 庫存、API、模型清單、免費試用、立即部署或立即購買。

### P3：生態系、品牌與表單

#### 8.9 Customers & Ecosystem Partners Logo Wall

- 關係揭露文字在前、Logo Wall 在後；正式 Logo 依客戶、技術夥伴、策略夥伴與生態系夥伴分類。
- Desktop 4–5 欄；Tablet 3 欄；Mobile 2 欄。
- Logo 容器高 96–112px，白底、1px 邊框、4–6px 圓角、無陰影。
- Logo 最大寬 68%、最大高 40px，`object-fit: contain`。
- 不使用跑馬燈、Hover 上浮、灰轉彩動畫；Logo 大小不代表相同合作層級，亦不構成推薦或背書。
- 客戶／夥伴關係、合作範圍、所屬專案與商標使用皆須取得雙方公開核准；未確認 Logo 使用中性文字佔位或直接隱藏，不可自行下載。

#### 8.10 About／品牌關係

- Desktop：文字 7/12、現有核准 Logo／素材 5/12。
- 使用 `sigtron-logo-stacked-tagline.png`時維持既有透明安全留白裁切方式。
- 核准關係句「SiGTRON 是希格諾科技股份有限公司（SignalPro Technology CO., LTD.）自有的 AIDC 與企業 AI 算力服務品牌。」使用真實可選取正文，16px／1.75／`--color-text`；可放在 About 主說明之後，與前文間距 16px。
- 關係句屬次級品牌說明，不使用 `.placeholder-text`、虛線框、灰色佔位底、Badge、Tooltip、腳註小字或 Disabled 樣式；不得降低至低於 14px。
- 公司英文名稱依核准大小寫完整呈現；中文與英文公司名稱允許自然換行，不烘焙在 Logo／圖片內。
- `Powered by SignalPro`只在 Footer 使用次級署名，搭配現有 SignalPro 正式 Logo；不與 SiGTRON 在 Hero／Header 同權重聯名。
- 不使用背景格線、品牌卡片內卡片或假團隊數字。

#### 8.11 FAQ

- 原生 `<details>`／`<summary>`。
- 共用單一外框或上下分隔線；6px 圓角可選。
- Summary 最小高度 56px，Focus 清楚；加號／減號只作輔助。
- 不做高度強制動畫；展開內容 padding-bottom 20–24px。

#### 8.12 Contact Form

- Desktop：表單 8/12、準備資料與限制 4/12；Mobile 單欄。
- Input 高度 48px，6px 圓角，1px 邊框；Textarea 最小 144px。
- Label 永久可見；Placeholder 不取代 Label。
- Error 使用文字＋邊框，不只靠紅色；表單頂端提供可聚焦 Error Summary。
- Prototype 不顯示虛構寄送成功、回覆時效或 CRM 狀態。
- 交易主體提示與 Prototype 警示位於所有輸入控制之前，使用兩種明確但克制的視覺層級；不得合併成一段難以掃讀的免責小字。
- `.transaction-party-note`為一般公司資訊：白底、1px `--color-border`、左側 3px `--color-brand-600`、4px 圓角、padding 14px 16px；內文 15–16px／1.7／`--color-text`，標籤可用 13px／700 品牌藍「交易主體」。
- `.prototype-warning`為 Prototype 操作限制：`--color-canvas-strong`底、1px `--color-border-strong`、左側 3px `--color-ink-800`、4px 圓角、padding 14px 16px；內文 15–16px／1.7／`--color-text`。不得使用 `role="alert"`、紅色 Error 或黃色 Trial 樣式造成頁面載入即警報。
- 兩提示垂直間距 12px；其後接 `.contact-fallback`備援聯絡，再與第一個表單欄位保留至少 24px。語意與 DOM 順序固定為交易主體 → Prototype 警示 → 電話／Email 備援聯絡 → 表單欄位。
- `.contact-fallback`使用小型聯絡列或平面資訊塊，不做大型 CTA Card：白底、上方 1px `--color-border`、padding-top 14px、14–15px／1.65；可用 13px／700／`--color-muted`標籤「其他聯絡方式」。
- 備援只列電話 `07-2695198`與 Email `sales@signalpro.com.tw`；可在 ≥768px 同列、gap 20–24px，窄版依 DOM 順序換行。Contact 主內容不重複高雄地址，完整地址只放全站 Footer。
- 電話與 Email 直接以可見文字作 Anchor，不使用只有電話／信封 Icon 的操作，也不新增實心按鈕、回覆時間、營業時間、服務範圍或送達承諾。
- `.contact-fallback a`使用品牌藍、600 字重、可見底線、`text-underline-offset: .2rem`，最小觸控高度 44px；Hover 改 `--color-brand-700`但不位移。Focus-visible 為 3px `--color-focus`外框、offset 3px，周圍留足安全空間。
- `.prototype-confirmation`使用原生 Checkbox＋永久可見 Label；Checkbox 可視框至少 20×20px，整列觸控目標至少 44px，Label 15px／1.65 並可完整點擊。此控制標示為「Prototype 示意確認」，不得命名或設計成個資同意、隱私權同意或契約同意。
- Default 為白底與 strong border；Checked 使用品牌藍底、白色勾記；Focus-visible 使用 3px `--color-focus`外框與 2px offset。驗證錯誤以 `--color-danger`邊框＋相鄰文字說明，不只變色，Error Summary 可將焦點送至 Checkbox。
- 欄位檢查完成狀態使用平面 `.prototype-status`，上方 1px 分隔線、15px／1.7，不用成功綠卡或打勾動畫；文字必須明示「資料未送出」，並以 `role="status"`或`aria-live="polite"`只宣告一次。

### P4：News & Events Editorial System

News & Events 是可查證企業動態的第三層信任證據。視覺需具備成熟的企業編輯密度，但不得搶過 AIDC、台南案場、亞洲布局與 AI 雲端服務的主敘事。

#### 8.13 首頁 Featured News Grid

- 位置固定在完整 `#project-footprint` 之後、AIDC Engineering Matrix 之前；Evidence Strip、台南旗艦案場與亞洲 Pipeline 必須保持在同一個完整專案證據區，不可被 News 插開。
- Section 使用白色 `--color-surface`；前一個 Project Footprint 使用 `--color-canvas`，下一個 AIDC 能力區再使用 `--color-canvas`，形成冷灰／白／冷灰的清楚節奏。
- 使用較緊湊的編輯區段節奏：Desktop section padding-block 80px、Tablet 72px、Mobile 56–64px；Heading 到卡片列距離為 Desktop 32px、Mobile 24px。
- Heading Desktop 採 8/4：左側放 `NEWS & EVENTS` Eyebrow、H2「最新消息與活動」；右側放一句說明與 Secondary「查看全部新聞與活動」。Mobile 依相同閱讀順序垂直排列。
- 首頁固定呈現最新 3 則已核准內容，每張皆使用 16:9 Media／Type Plate；Desktop ≥1120px 為 3 欄、gap 24px，Tablet 768–1119px 為 2 欄＋第 3 張自然換至下一列、gap 20px，Mobile <768px 為單欄、gap 16px。
- 使用靜態 `.featured-news-grid`；不建立 Rail、Controls、Status、horizontal overflow、`scroll-snap`、自動播放、循環、Pagination Dots 或任何 News Rail JavaScript／動效。
- `新聞與活動`是全站五個文字導覽之一；首頁不標 Active，並保留本 Section 的 Secondary Link 與 Footer 入口。

#### 8.14 News Card：有圖與無圖

- 共用同一 `.news-card` 結構與資訊順序：`分類＋日期 → 標題 → 摘要 → 來源／發布方 → 依類型 CTA`。
- Card 使用白底、1px `--color-border`、8px 圓角、預設無陰影；內容 padding Desktop／Tablet 24px、Mobile 20px。
- 有圖版使用 16:9 Editorial Image、`object-fit: cover`，明確設定 `width`／`height` 或 `aspect-ratio` 以避免 CLS；圖片不使用藍色濾鏡、zoom 或深色 overlay。
- 無核准圖片時不顯示灰色假圖、假機房或網路抓圖；以同為 16:9 的 `.news-card__type-plate` 取代。Type Plate 使用 `--color-canvas-strong`、左側 3px 品牌藍結構線、真實分類名稱與少量細分隔線，不使用 icon、gradient、pattern 或模擬照片。
- Type Plate 若重複下方分類文字，設 `aria-hidden="true"`；它只代表內容類型，不代表案場、設備或活動實景。
- Metadata 置於同一彈性列：分類在前、日期在後；空間不足可自然換行。
- 分類使用 12px／700、`--color-brand-700` 文字、`--color-brand-100` 背景、1px `--color-border` 與 4px 圓角。四分類沿用同一品牌藍樣式，不以紅色或多色暗示內容狀態。
- 日期使用語意 `<time datetime="">`，顯示固定格式 `YYYY.MM.DD`，13px／600、`--color-muted`、tabular numerals；不增加裝飾性日曆 icon。
- 標題 20px／1.4／700，建議視覺控制 2–3 行；摘要 15–16px／1.7、`--color-muted`，建議 2–3 行。完整標題與摘要仍需可由輔助科技取得。
- 每張 Card 只建立一個可聚焦 Link。Title Link 可用 pseudo-element 延伸完整卡片點擊區；圖片、標題與 CTA 不得分別建立三個相同目的焦點。
- Hover 只將邊框改為 `--color-brand-600`，可使用既有 `--shadow-interactive`；不位移、不縮放。Focus-visible 沿用 3px `--color-focus` 外框與 3px offset，Grid 外緣須保留至少 6px focus 安全空間。
- Card 的來源、專案狀態、活動狀態與外部媒體提示都必須是文字，不只依賴顏色或圖示。

#### 8.15 `news.html`：Editorial Banner、Filters 與 Grid

- 頁面順序固定為：Breadcrumb → Compact Title Group → Editorial Banner → Filters → Result Count → Grid／Empty State → Future Static Pagination → CTA → Footer。
- Breadcrumb 使用 `<nav aria-label="麵包屑">`；目前頁為文字。Title Group 的 `NEWS & EVENTS`、H1「最新消息與活動」與說明置中，H1 必須位於 Banner 外。
- Editorial Banner 最大 1280×320、比例上限 4:1、8px 圓角、1px `--color-border`、無陰影。使用 `news-editorial-banner.svg` 時視為純裝飾，`alt=""`。
- Banner 主題為 `Infrastructure Layers／基礎設施層級與訊號路徑`：冷灰底、品牌藍／Steel／Border 色、3–4 層正交線與少量模組節點；不使用文字、gradient、glow、Grid HUD、機器人、伺服器或假案場。
- Filters 順序固定為：全部／公司公告／專案動態／活動資訊／媒體報導。使用原生 Button 與 `aria-pressed`，每個控制至少 44px 高、4–6px 圓角、gap 至少 8px。
- Filters 在所有尺寸使用 `flex-wrap: wrap` 自然換行，不做橫向 Filter Bar、不縮小文字塞成單列。
- Filters 預設 hidden，只有 JavaScript 成功初始化後才顯示；無 JavaScript 時直接顯示全部已發布內容。
- Active Filter 使用品牌藍底／白字；Default 使用白底、深色字與 `--color-border-strong`。切換後焦點留在原按鈕，Result Count 使用 `aria-live="polite"`。
- Grid 依發布日期新至舊：Desktop 3 欄／24px、Tablet 2 欄／20px、Mobile 1 欄／24px vertical gap；不使用 Masonry 或 Infinite Scroll。
- 全站尚無核准內容時顯示：「目前尚無已核准公開的消息內容。相關內容完成確認後，將於此更新。」不得建立空卡、Skeleton、假日期或示意新聞。
- 個別分類為 0 則時顯示：「目前沒有『分類名稱』類別的已核准公開內容。」並提供「查看全部消息」Button。
- 核准公開內容 ≤12 則不渲染 Pagination。超過 12 則才建立真正的靜態分頁與完整分類索引；Mobile 精簡為「上一頁／第 X／Y 頁／下一頁」。
- 頁尾 CTA 沿用全站 `洽談專案` Primary，可搭配 `了解 AIDC 建置` Secondary；不新增訂閱、免費試用、免費評估或立即購買。

#### 8.16 `news/article-template.html`

- Breadcrumb 位於 `<article>` 外；`<article>` 包住 Article Header、可選 Figure、正文、Fact Panel 關聯內容與返回列表。
- Article Header 最大文字寬約 880px；順序為 Eyebrow／分類＋發布日期／H1／Lead／來源或發布方。H1 不使用娛樂媒體式超大字。
- Desktop 主內容採 8/4：正文最大 720–760px，Fact Panel 280–320px，欄距 56–64px。
- 正文使用 17px／1.85；H2 28–32px、H3 22–24px。Figure／Figcaption 使用真實來源與權利狀態；無核准圖片時直接省略 Figure。
- Fact Panel 使用 `<aside aria-labelledby>`＋`<dl>`，白底、頂部 3px 品牌藍結構線、其餘 1px `--color-border`、8px 圓角、無陰影；Desktop 可 sticky 於 Header 下方。
- Fact Panel 只顯示該類型已核准欄位：發布日期、分類、來源／發布方，以及專案狀態、活動日期／地點／狀態或媒體名稱／原始刊登日期／外部連結。沒有資料的欄位直接省略，不填推測值。
- Mobile 順序固定為 Breadcrumb → Article Header → 可選 Figure → Fact Panel → 正文 → 返回列表 → CTA；Fact Panel 不 sticky。
- 外部活動與媒體 Link 必須以文字標示「外部網站」。文章末不加入分享 Widget、觀看數或演算法推薦。

#### 8.17 News Responsive 與 Motion

- Breakpoints 沿用全站：Desktop ≥1120px、Tablet 768–1119px、Mobile <768px；首頁 Featured News Grid 固定為 3 欄／2＋1／1 欄，`news.html` Grid 維持 3／2／1 欄。
- Desktop Banner 最大 1280×320；Tablet 高 240–260px；Mobile 高 180–200px，以中央 60% 安全構圖裁切，不做不受控 full bleed。
- Mobile Breadcrumb 可換行；Filters 自然形成 2–3 列；CTA 兩按鈕全寬垂直排列。320px 不得出現頁面級橫向捲動。
- News 不增加任何進場 reveal、stagger、scale、parallax、Rail 捲動或 Anime.js 動效。只保留 160ms Hover／Focus 色彩轉換與最多 3px 的 CTA 箭頭位移。
- Reduced Motion 下關閉 smooth scroll 與非必要 transition；內容不可因動畫或 JavaScript 延遲顯示。

---

## 9. Hero 與主要頁面構圖

### 9.1 全站 Hero

- 改用淺色畫布；文字 7/12、工程／基礎設施視覺 5/12。
- H1、Lead、CTA、Status Row 置於同一內容群組。
- 右側可使用現有工程層級內容，但改為靜態、平面、可讀的四層架構，不做浮動玻璃卡。
- 若沒有核准 Hero 圖片，使用純 CSS 細邊框與文字架構圖，不新增生成圖或 SVG 插畫。
- Mobile：文字、CTA、狀態、視覺依序；CTA 可全寬。

### 9.2 首頁 1440／390

**1440**

1. 白色 Header。
2. 冷灰 Hero 7/5。
3. 白色兩類需求入口 6/6。
4. 冷灰 `#project-footprint`：Evidence Strip。
5. 同一 Footprint 內的台南旗艦案場 7/5。
6. 同一 Footprint 內的 Pipeline 地圖 8/4＋Disclosure；至此才結束完整專案證據區。
7. 白色 `#news-events`：Latest 3 Featured News Grid。
8. 冷灰 AIDC Engineering Matrix。
9. 白色六階段 Process Rail。
10. 冷灰 AI 雲 Status Row＋三服務共用外框。
11. 白色工程化交付信心四列 Evidence Table。
12. 冷灰 Customers & Ecosystem Partners。
13. 白色 About。
14. 深墨藍 Footer CTA、Footer。

**390**

- Anchor 第一屏優先顯示試運轉、72 Nodes、2026 Q4、五國規劃中與約 800 MW 定義。
- 台南資料先於影片；Pipeline 地圖先於市場清單。
- 完整 Project Footprint 結束後才顯示 Latest 3；三張 News Card 依發布日期單欄排列，不使用水平捲動。
- Partners 唯一維持 2 欄；其餘資訊結構單欄。

### 9.3 AIDC 頁

- Hero 保持淺色，不使用滿版深色機櫃或監控感。
- 跨域挑戰改為三列「問題／專案影響」。
- 12 項範圍使用 Engineering Matrix。
- `#delivery`使用 Process Rail。
- 合作模式以角色與責任箭頭呈現；不使用未核准 Logo。
- FAQ 與 CTA 保持平面、清楚、可掃讀。

### 9.4 AI 雲頁：略數位化但不 SaaS 化

AI 雲頁可比 AIDC 頁多一層數位感，但必須維持企業工程秩序。

**可以使用**

- 品牌藍 3px 結構線、清楚的模組欄位、編號與 tabular numerals。
- 一個局部深墨藍「平台存取」帶狀區，內容只放已核准的登入與權限說明。
- `平台已上線` Green Status Row。
- 三項服務共用外框與細分隔線。
- 簡化的「資源 → 帳號權限 → 專案設定 → 服務」文字架構。
- Technology Ecosystem 先以正文說明希格諾科技股份有限公司以 SiGTRON 品牌營運平台並負責帳號管理及對外服務，再緊接一則 `.disclosure-note`說明 INFINITIX 是後端白牌技術平台合作夥伴、不是客戶的締約或開票主體。
- INFINITIX Disclosure 沿用既有元件：`--color-brand-100`底、左側 3px 品牌藍、4px 圓角、14–15px／1.7；關係須靠完整文字表達，不只靠顏色、Icon 或 Tooltip。

**不可使用**

- Console 截圖佔位、Browser chrome、假 Dashboard、即時圖表、GPU 庫存與價格卡。
- AI 紫、Aurora、Glassmorphism、聊天框、Prompt bar、streaming dots。
- 大型登入 icon、免費試用、立即購買或公開方案比較。
- 讓 Header 的 outlined `客戶登入`壓過新商機主敘事；`洽談專案／洽詢企業需求`留在內容區與 Footer，仍是主要商務行動。
- 不把 INFINITIX 放進 Hero、Status Row、平台存取 CTA、客戶登入按鈕或主導覽；不使用聯名 Logo、並列品牌鎖定、合作 Badge、獨立大型 Section 或較 SiGTRON 更大的字級／圖像。
- 不以「Powered by INFINITIX」、共同營運、締約夥伴或付款主體等未核准視覺與字樣擴張其角色。

### 9.5 Contact 頁

- Hero 簡短，淺色畫布；不放裝飾科技視覺。
- `#project-inquiry`落點同時看到表單標題與說明，不直接把焦點放進第一個 input。
- 表單分 01–04 區段，使用分隔線與編號，不拆成多張卡。

### 9.6 News 列表與單篇畫面節奏

**`news.html` Desktop**

1. 白色 Header。
2. Breadcrumb；Header 後約 40px。
3. 置中 Compact Title Group；Breadcrumb 後約 32px，H1 約 48–56px。
4. Editorial Banner；Title Group 後 40px，最大 1280×320。
5. Filters；Banner 後 40px。
6. Result Count 與 3 欄 Editorial Grid；Filters 後 32px。
7. 可選 Static Pagination、CTA、Footer；Grid 下方保留約 96px 區段節奏。

**`news.html` Mobile**

- Header 後約 24px 顯示可換行 Breadcrumb；H1 約 36px。
- Banner 高 180–200px，使用中央安全構圖裁切；Banner 後 28px 顯示自然換行 Filters。
- Result Count 在 Grid 前；Card 單欄、16:9 圖片、20px 內容 padding。
- Future Pagination 使用精簡文字控制；CTA 垂直全寬。

**單篇**

- Desktop 先以最大 880px Article Header 建立編輯層級，再進入 8/4 正文與 Fact Panel。
- Mobile 將 Fact Panel 移到正文前，確保專案狀態、活動時間與媒體來源不被長文埋藏。
- 一般文章、Event、Media 與無主圖狀態共用同一 Layout，不以不同視覺模板暗示不同可信度。

---

## 10. 現有 Prototype CSS 移除／覆寫清單

Frontend 需依下列清單調整 `prototype/assets/css/styles.css`。本文件只指定變更，不在 UI 階段修改 Prototype。

### P0：Header 與基礎 Token

1. `.site-header`
   - 高度由 76px 統一為 Desktop 72px、Tablet／Mobile 64px。
   - 移除 `backdrop-filter: blur(14px)`。
   - 背景改實色白；scroll 才加入低陰影。
2. `.site-nav`
   - Desktop breakpoint 改為 1120px。
   - 導覽依五個文字連結重排；`gap: clamp(.875rem, 1.3vw, 1.25rem)`，Active 同時使用品牌藍、字重、2px 底線。
3. `.header-actions`與`.nav-login`
   - ≥1120px 的操作區設 `flex: 0 0 auto`與 `margin-left: clamp(1.25rem, 2vw, 1.75rem)`。
   - `客戶登入`保留文字式 outlined Secondary，不新增 icon；`min-width: 5.5rem`、最小高度 44px，768px 起顯示。
   - 移除 Header 與 Drawer 的 `.nav-cta`；內容區與 Footer CTA 不受影響。
4. `.nav-toggle`與手機 `.site-nav`
   - 現有全寬下拉選單改為右側 360px Modal Drawer＋Backdrop。
   - Drawer 導覽加入`新聞與活動`，移除`洽談專案`；`客戶登入`為滿寬 48px outlined Secondary。
   - 補 Focus Trap、Escape、Scroll Lock 清理與 1120px 自動關閉。
5. `:focus-visible`
   - 現有 `#4AA3FF`改為品牌藍 Focus Token；深色表面使用雙層外框。

### P1：大面積深色、Glow 與 Grid Texture

1. `.hero, .page-hero`
   - 移除多層 linear／radial gradient 與全區深墨藍背景，改淺色 Hero。
2. `.hero::after, .page-hero::after`
   - 移除滿版 grid texture。
3. `.stack-visual, .stack-card`
   - 移除 absolute 疊卡、玻璃透明、blur、厚 shadow、紫色 `#8C82FF`與錯位堆疊。
   - 改為單一靜態工程層級圖或分隔資料列。
4. `.flagship-section, .flagship-section::before`
   - 移除深色漸層、radial glow、grid texture 與 mask。
   - 改白／冷灰 Section；媒體與 Evidence Table 使用細邊框。
5. `.pipeline-section, .pipeline-section::before`
   - 移除全區深色、兩個 radial glow、grid texture 與 mask。
   - 改冷灰 Section；地圖與清單使用白底 Panel。
6. `.pipeline-map-legend i`
   - 移除 glow box-shadow；保留靜態形狀＋文字狀態。
7. `.platform-list--future .platform-index`
   - 移除 AI 紫；改 Planning 灰藍。
8. `.blueprint-panel::before, .brand-signature-card`
   - 移除背景 grid texture 與內層裝飾框；改純色／細邊框。

### P2：卡片、圓角與陰影減量

1. `--radius-md, --radius-lg`
   - 收斂為 8px；Badge 4px、Button 6px。
2. `--shadow-card`
   - 改低陰影，只供可點擊入口卡 Hover；一般 Panel 無 shadow。
3. `.status-badge`
   - 移除 `border-radius: 99rem`，改 4px 短矩形；依上線／試運轉／規劃狀態使用語意色。
4. `.path-card:hover`
   - 移除 `translateY(-3px)`；保留邊框、底色與低陰影。
5. `.service-grid, .value-grid, .scope-grid, .process-grid, .foundation-grid`
   - 不再一律生成多張卡。
   - 分別改為 AI 三服務共用外框、Evidence Table、Engineering Matrix、Process Rail、平面資料列。
6. `.section--dark .card, .section--dark .service-card`
   - 移除通用暗色卡規則；只有經指定的局部平台帶可使用深色。
7. `.platform-index`與其他圓形索引
   - 改 4px 方角小索引；避免膠囊／圓點堆疊造成 Dashboard 感。
8. `.partner-placeholder`
   - 圓角改 4–6px；不加 Hover、陰影或灰轉彩動畫。

### P3：裝飾動畫與細節

- 移除數字跳動、持續 pulse、發光 Pin、跑馬燈 Logo、Section reveal、卡片逐張浮入與裝飾性 Parallax。
- `.text-link::after`可保留 150ms 小幅箭頭移動；Reduced Motion 下取消。
- Menu 與 FAQ 以外，不新增 JavaScript 動畫。
- Smooth scroll 在 Reduced Motion 下停用。

---

## 11. CSS Design Tokens

Frontend 可直接以以下語意 Token 取代既有散落值；元件內不得新增未記錄的品牌色。

```css
:root {
  --color-brand-600: #16689f;
  --color-brand-700: #0f527f;
  --color-brand-100: #e7f2f8;

  --color-ink-950: #071b2f;
  --color-ink-800: #17324d;
  --color-steel-600: #526c8f;
  --color-steel-500: #6e89a9;

  --color-text: #102235;
  --color-muted: #536779;
  --color-subtle: #536779;
  --color-surface: #ffffff;
  --color-canvas: #f4f7fa;
  --color-canvas-strong: #edf2f6;
  --color-border: #d7e1ea;
  --color-border-strong: #aebfcc;

  --color-trial-bg: #fff1d6;
  --color-trial-text: #734800;
  --color-trial-border: #d9ad57;
  --color-live-bg: #e8f4ec;
  --color-live-text: #17643b;
  --color-live-border: #b8dcc5;
  --color-planning-bg: #eef3f6;
  --color-planning-text: #40586b;
  --color-planning-border: #becbd4;
  --color-danger: #a13c3c;
  --color-focus: #16689f;

  --font-sans: Inter, "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", Arial, sans-serif;

  --container: 80rem;
  --grid-gap-desktop: 1.5rem;
  --grid-gap-tablet: 1.25rem;
  --grid-gap-mobile: 1rem;

  --radius-xs: 0.25rem;
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;

  --shadow-header: 0 0.25rem 1rem rgba(7, 27, 47, 0.05);
  --shadow-drawer: -1rem 0 2.5rem rgba(7, 27, 47, 0.14);
  --shadow-interactive: 0 0.5rem 1.25rem rgba(7, 27, 47, 0.07);

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-18: 4.5rem;
  --space-22: 5.5rem;
  --space-24: 6rem;
  --space-28: 7rem;
  --space-32: 8rem;

  --header-desktop: 4.5rem;
  --header-compact: 4rem;
  --control-min: 2.75rem;
  --transition-fast: 160ms;
  --transition-menu: 220ms;
}
```

### 建議共用元件 class

以下名稱供 Frontend 建立一致結構，不要求框架或元件系統：

- `.status-row`
- `.status-label--live`
- `.status-label--trial`
- `.status-label--planning`
- `.disclosure-note`
- `.evidence-strip`
- `.evidence-item`
- `.engineering-matrix`
- `.engineering-matrix__item`
- `.process-rail`
- `.process-rail__step`
- `.project-detail`
- `.market-status-list`
- `.service-table`
- `.site-drawer`
- `.site-drawer-backdrop`
- `.featured-news`
- `.featured-news-grid`
- `.news-card`
- `.news-card__media`
- `.news-card__type-plate`
- `.news-meta`
- `.news-filter`
- `.news-filter__button`
- `.news-results-count`
- `.news-grid`
- `.news-empty`
- `.article-header`
- `.article-layout`
- `.article-body`
- `.article-figure`
- `.fact-panel`

---

## 12. 現有素材與使用限制

### 可直接沿用

- `prototype/assets/images/brand/sigtron-logo-horizontal.png`：Header。
- `prototype/assets/images/brand/sigtron-logo-stacked-tagline.png`：About／品牌區，依內容需要使用。
- `prototype/assets/images/brand/signalpro/`內既有正式 Logo：Footer 次級署名，依品牌規則選擇合適版本。
- `prototype/assets/images/maps/asia-project-pipeline-map.png`：亞洲 Pipeline 靜態地圖。
- `prototype/assets/images/news/news-editorial-banner.svg`：News 列表頁純裝飾 editorial banner；以基礎設施層級與訊號路徑為主題，不代表真實案場、設備或活動。
- 官方 YouTube 3D 概念影片：台南旗艦案場；固定標示非現場實拍。
- 現有 CSS 字體 stack：Inter／Noto Sans TC／系統字體回退。

### 不新增

- 新字體、Icon Font、Tailwind、GSAP、Three.js 或 UI Library。
- 未取得關係公開核准及商標授權的夥伴 Logo、客戶 Logo、認證 Badge、案場圖片或模型圖。
- 生成式 AI 機房、通用 GPU 圖、AI 人像、假 Dashboard 或假數據。
- 自製 SVG 品牌圖、重繪 Logo、CSS 改色 Logo。

### 缺少素材時

- 用文字、細邊框、數字與已核准架構資訊完成版面。
- Customers & Ecosystem Partners 在關係、分類或商標授權未確認時使用中性文字佔位或隱藏。
- News 沒有核准照片時使用核准的無圖 Type Plate 或 `news-editorial-banner.svg`；Card 不自行補入假照片。
- 不用「看起來合理」的圖片補足證據。

---

## 13. UI UX Pro Max 受控 QA Checklist

UI UX Pro Max 只作規則資料庫與交付前檢查，不生成或覆寫 SiGTRON 品牌系統。

### 使用設定

- 查詢語彙：`B2B enterprise infrastructure data center engineering construction trust authority minimal`。
- 若使用 Design Dials：`variance 2`、`motion 2`、`density 4`。
- 不以 `AI cloud SaaS platform`作主要分類。
- 不使用 `--force`覆寫核准設計文件。
- 忽略 Tailwind、GSAP、框架、案例、ROI、認證與 Trust Badge 的自動建議。

### Brand／Anti-AI

- [ ] 第一印象是 AIDC 工程整合與基礎設施，不是 AI SaaS、GPU 電商或 Console。
- [ ] 白色與冷灰約占 65–75%。
- [ ] 每頁最多一個大型深色重點區。
- [ ] 無 AI 紫／粉、Aurora、Glass、HUD、Cyberpunk、Glow、粒子或 Prompt UI。
- [ ] 無大量浮卡、Card inside Card、膠囊與厚陰影。
- [ ] Header 使用白底與現有彩色 Logo。

### Content Integrity

- [ ] `72 Nodes`旁顯示「規劃導入」。
- [ ] `2026 Q4`旁顯示「目標正式商轉」。
- [ ] `約 800 MW`旁顯示潛在容量與非已簽約／非已營運定義。
- [ ] 3D 影片固定顯示「非現場實拍」。
- [ ] 台灣試運轉與其他五國規劃中以文字區分。
- [ ] `平台已上線`與帳號權限／個別專案限制同時可見。
- [ ] 無未核准價格、SLA、認證、效能、客戶、Logo 或服務能力。

### Navigation／Interaction

- [ ] Desktop ≥1120px 顯示五個文字連結＋outlined 客戶登入；768–1119px 顯示 Logo＋客戶登入＋Menu；<768px 顯示 Logo＋Menu。
- [ ] Header 為 72／64px，所有觸控目標至少 44×44px。
- [ ] Drawer 寬 `min(360px,100vw)`，含五個文字連結＋滿寬客戶登入，且具 Backdrop、Focus Trap、Escape、Scroll Lock 與焦點返回。
- [ ] Active 同時使用字重、底線、品牌藍與 `aria-current`。
- [ ] News 列表與單篇文章將`新聞與活動`標為目前頁；首頁不誤標 News Active。
- [ ] Header／Drawer 無 Primary CTA；內容區與 Footer 每個可視區域只有一個 Primary CTA。
- [ ] Hover 之外有可見 Focus；互動不造成 layout shift。

### Accessibility

- [ ] 一般文字對比至少 4.5:1；大型文字與非文字 UI 依 WCAG AA 驗證。
- [ ] 每頁一個 H1，標題層級連續。
- [ ] Skip Link 可用；主內容目的地為 `#main`。
- [ ] 狀態不只依顏色、形狀或 Pin。
- [ ] FAQ 使用原生 `<details>`／`<summary>`。
- [ ] 地圖資訊另有文字市場清單。
- [ ] 影片、地圖與資訊圖片有描述性文字或相鄰完整圖說。
- [ ] 表單 Label 永久可見，Error 接近欄位並有 Error Summary。

### Responsive

- [ ] 驗證 320、390、768、1119、1120、1440px。
- [ ] 320px 無核心內容橫向捲動。
- [ ] Mobile 不改變敘事順序；Matrix、Rail、服務表均可單欄閱讀。
- [ ] `#project-footprint` Anchor 第一屏可看到必要狀態與定義。
- [ ] `#project-inquiry`落點顯示表單標題與說明，不自動彈出鍵盤。
- [ ] 首頁 Featured News 固定為最新 3 則，Desktop／Tablet／Mobile 使用 3 欄／2＋1／1 欄靜態 Grid；沒有 Rail、Controls、Status 或水平捲動。
- [ ] News Filters 在 320–768px 自然換行，沒有橫向 Filter Bar 或被截斷的分類文字。
- [ ] Mobile Article 的 Fact Panel 位於正文前；Breadcrumb、來源名稱、Pagination 與雙 CTA 均可正常換行。

### Performance／Motion

- [ ] 靜態圖片有 width／height 或 `aspect-ratio`，避免 CLS。
- [ ] 非首屏圖片 `loading="lazy"`；Hero 核心圖不延遲。
- [ ] YouTube iframe 只在使用者觸發或正式頁面需要時載入；保留 `file://`外連降級。
- [ ] 無裝飾性計數、脈衝 Pin、Logo 跑馬燈與長距離 Parallax。
- [ ] Reduced Motion 下關閉位移、平滑捲動與非必要 transition。
- [ ] News 沒有進場 reveal、自動播放、輪播循環、Card stagger、圖片 zoom 或娛樂化轉場。
- [ ] 未引入新框架、套件、Build Tool、字體或第三方裝飾腳本。

---

## 14. Frontend 可直接執行的 P0–P4 變更

### P0：導覽、Token、狀態

1. 套用本文件色彩、字體、Radius、Shadow 與 Spacing Token。
2. 所有頁面 Header 改成五個文字連結＋outlined 客戶登入，套用 1120／768 breakpoint 與 News Active 行為。
3. 白色 Header 移除 blur；建立 360px Drawer＋Backdrop 與完整鍵盤行為。
4. 移除 Header／Drawer CTA；建立內容 Primary、登入 Secondary、Active、Focus、Pressed 樣式。
5. 建立 Status Row、三種狀態標籤與 Disclosure Note。

### P1：首頁專案證據

1. 建立 `#project-footprint` Evidence Strip。
2. 台南旗艦案場改淺色 7/5 Project Detail，固定非實拍標示。
3. Pipeline 改冷灰背景、白底地圖與市場狀態清單，移除 Glow、Grid 與動態 Pin。
4. 所有關鍵數字與定義相鄰，不使用計數動畫。

### P2：降低 AI／SaaS 模板感

1. Hero 改淺色；移除漸層、網格與浮動 Stack Cards。
2. 首頁六能力、AIDC 12 範圍改 Engineering Matrix。
3. 六階段交付改 Process Rail。
4. AI 三服務改共用外框表；工程化交付信心改 Evidence Table。
5. 收斂圓角至 4–8px，取消一般卡片陰影與 Hover 上浮。

### P3：生態系、品牌與表單

1. Customers & Ecosystem Partners 改分類式靜態 Logo Wall，客戶關係或商標未取得雙方公開核准時維持中性佔位或隱藏。
2. About 移除 grid texture，沿用現有 Logo 與品牌關係文字。
3. Contact 依 8/4、Mobile 單欄與錯誤狀態規格實作。
4. 完成 Skip Link、Alt／Caption、Focus、Reduced Motion 與 320–1440px QA。

### P4：News & Events

1. 將 `#news-events`放在完整 `#project-footprint` 後、AIDC 能力區前；首頁固定輸出 Latest 3 靜態 `.featured-news-grid`。
2. 建立共用 16:9 `.news-card` 有圖與無圖 Type Plate；固定分類、日期、標題、摘要、來源與單一 Link 層級。
3. 首頁移除 Manual Rail、Controls、Status、Scroll Snap 與對應 JavaScript；Desktop／Tablet／Mobile 使用 3／2＋1／1 欄。
4. 首頁套用 `Footprint 灰 → News 白 → AIDC 能力灰 → 交付白 → Cloud 灰 → Confidence 白 → Partners 灰 → About 白`的 Section 節奏。
5. 新增 `news.html`：Breadcrumb、Title Group、`news-editorial-banner.svg`、Filters、Result Count、3／2／1 Grid、Empty State、未來 Static Pagination 與 CTA。
6. 新增 `news/article-template.html`：Article Header、可選 Figure、8/4 正文與 Fact Panel；Mobile 將 Fact Panel 放到正文前。
7. News 只讀取已核准內容與權利素材；獨立列表 0 則不建立假卡片，≤12 則不渲染 Pagination。

### P5：信用卡付款條款

1. 在 AI 雲頁 `PLATFORM ACCESS` 的「客戶登入」按鈕下方加入次要文字入口「信用卡付款與訂閱條款」；不得取代或壓過登入與商務 CTA。
2. JavaScript 可用時開啟原生 `<dialog>`；不可用時自然前往 `payment-terms.html`，不得建立無法操作的假入口。
3. Dialog 僅供閱覽，不設「接受」、「同意」、「繼續付款」、Checkbox 或任何取得同意的介面；唯一命令操作為關閉。
4. 共用同一份十節條款結構、Prototype Notice 與公司資訊，避免 Dialog 和永久頁出現兩份不同內容。
5. 完成 Focus Trap、Escape、Scroll Lock、關閉後焦點返回、Reduced Motion、320／375／768／1120px 與列印 QA。

### P6：法定與品牌關係最小調整

1. About 將核准品牌關係句改為可選取的正常正文／次級品牌說明，移除 `.placeholder-text`或佔位視覺。
2. 首頁、AIDC、AI 雲服務、Contact、News 列表、News 單篇與 Payment Terms 七頁 Footer 統一完整官方地址、可撥電話、可寄信 Email 與法定署名；Footer Bottom 順序固定為法定署名後接次級 `Powered by SignalPro`。
3. Contact 在所有輸入欄前依序建立 `.transaction-party-note`、`.prototype-warning`與電話／Email `.contact-fallback`，並以 `.prototype-confirmation`表示 Prototype 示意確認；Checkbox 不得冒充個資或契約同意。
4. AI 雲 Technology Ecosystem 將營運主體正文與 INFINITIX `.disclosure-note`相鄰；移除 Hero／CTA／聯名 Logo 等升級視覺。
5. 逐頁完成 320、375、768、1119、1120、1440px、200% Zoom、鍵盤 Focus、文字／非文字對比與無 JavaScript QA；不新增 Gradient、Glow、Pulse 或動畫。

---

## 15. 信用卡付款與訂閱條款 UI

### 15.1 使用情境與內容原則

- 元件位於 AI 雲服務頁，不是全站促銷彈窗，也不是付款或訂閱流程。
- 入口名稱固定為「信用卡付款與訂閱條款」；Dialog 主標保留條款原文「信用卡付款說明」。
- Dialog 與 `payment-terms.html`使用相同十節全文順序與公司署名；Front-end 不改寫條款、不自行增加價格、日期、金流商、退款承諾或法律敘述。
- Prototype 只展示條款內容，不取得同意、不綁定信用卡、不傳送付款資料。不得出現「接受」、「同意」、「繼續付款」、勾選框或同意狀態。
- 唯一命令按鈕為「關閉」；章節項目只作頁內 Anchor 導覽，不視為交易操作。
- 視覺定位是正式文件閱讀層：白底、冷灰分區、細邊框、品牌藍結構線與章節編號；禁止 Gradient、Glow、Glass、Pulse、彈跳與過度動畫。

### 15.2 元件 Token

沿用第 11 節既有品牌與間距 Token；僅補下列付款條款語意 Token：

```css
:root {
  --terms-dialog-max: 68rem;
  --terms-dialog-max-height: min(52rem, calc(100dvh - 3rem));
  --terms-content-measure: 70ch;
  --terms-toc-width: 13.5rem;

  --terms-backdrop: rgba(7, 27, 47, 0.64);
  --terms-surface: var(--color-surface);
  --terms-canvas: var(--color-canvas);
  --terms-canvas-strong: var(--color-canvas-strong);
  --terms-border: var(--color-border);
  --terms-border-strong: var(--color-border-strong);
  --terms-accent: var(--color-brand-600);
  --terms-accent-hover: var(--color-brand-700);
  --terms-accent-soft: var(--color-brand-100);
  --terms-heading: var(--color-ink-950);
  --terms-text: var(--color-text);
  --terms-muted: var(--color-muted);

  --terms-radius: var(--radius-md);
  --terms-shadow: 0 1.25rem 3.5rem rgba(7, 27, 47, 0.2);
}
```

Modal 是少數可使用明確陰影的浮層；正文、章節與公司資訊不得再疊加 Card Shadow。

### 15.3 PLATFORM ACCESS 入口

- 使用 `<a class="payment-terms-entry" href="payment-terms.html" data-payment-terms-open>`；JavaScript 只增強為 Dialog，無 JavaScript 時保留永久頁降級。
- 放在既有「客戶登入」按鈕下方，與按鈕相距 12px；不放進 Header、Drawer 或主要 CTA 列。
- 文字固定為「信用卡付款與訂閱條款」。
- 14px／600／`line-height: 1.5`，最小觸控高度 44px；在深墨藍 `PLATFORM ACCESS` 上使用 `#D7E1EA`與可見底線，`text-underline-offset: .25rem`。
- Hover：白字與清楚底線，不位移。Focus-visible：2px 白色外框、offset 3px，再以品牌藍形成外環；不得只靠 Hover。

### 15.4 Dialog、Backdrop 與固定 Header

**`.payment-terms-dialog`**

- 使用原生 `<dialog>`，以 `aria-labelledby`指向「信用卡付款說明」，必要說明以 `aria-describedby`連到 Prototype Notice。
- 寬 `min(68rem, calc(100vw - 4rem))`；最大高度 `min(52rem, calc(100dvh - 3rem))`。
- `padding: 0`、`overflow: hidden`，內部為 `grid-template-rows: auto minmax(0, 1fr)`；只讓正文區捲動。
- 白底、1px `--color-border-strong`、頂部 3px 品牌藍結構線、8px 圓角及 `--terms-shadow`。
- `::backdrop`使用 `rgba(7, 27, 47, .64)`；不加 blur、紋理、漸層或光暈。
- 不製作開啟縮放、淡入、滑入或關閉轉場。

**`.payment-terms__header`**

- 位於非捲動列，保持白底；最小高度 80px、padding `1rem 1.5rem`、底部 1px `--color-border`。
- 左側可放 12px／700／0.08em 的 `PAYMENT TERMS` eyebrow；主標固定為「信用卡付款說明」，24px／700／1.25。
- 不放 Logo、同意狀態、付款步驟或額外操作。

**`.payment-terms__close`**

- 44×44px，不得縮小；白底、1px strong border、6px 圓角、26px `×`，並設 `aria-label="關閉信用卡付款說明"`。
- Hover：品牌淺藍底、品牌藍邊框與文字；Pressed：`#D7EAF4`；不旋轉、不縮放。
- Focus-visible：3px 品牌藍外框、offset 2px。

### 15.5 Prototype Notice

`.payment-terms__notice`位於捲動正文最前面，不塞入固定 Header：

- 文案固定說明本元件僅供閱覽，不會取得同意、綁定信用卡或送出付款資料。
- 最大寬度與正文一致；冷灰背景、左側 3px 品牌藍、其餘 1px `--color-border`、4px 圓角。
- Padding 12px 16px；14px／1.65／`--color-muted`；與條款 Layout 間距 24px。
- 不使用警告 Icon、紅色或黃色警報卡；Prototype Notice 是資訊完整性標示，不是 Error。
- Prototype 與列印稿皆保留此 Notice；正式製作公司只能在資料流與法務版本核准後，依核准內容替換，不得直接隱藏造成誤解。

### 15.6 章節導航、正文與公司資訊

**捲動層與 Layout**

- `.payment-terms__scroll`：`overflow-y: auto`、`overscroll-behavior: contain`、`scrollbar-gutter: stable`，Desktop padding 32px。
- `.payment-terms__layout`在 1120px 以上使用 `13.5rem minmax(0, 1fr)`雙欄、gap 32px、top-aligned。

**`.payment-terms__toc`**

- 僅在 1120px 以上顯示；左欄 `position: sticky; top: 0`，右側 1px 邊框、右 padding 20px。
- 「條款章節」標籤為 12px／700／0.08em；01–10 採直列、tabular numerals 與品牌藍編號，不做 Pills。
- 每項 14px／600，最小高度 40px。Hover 可用淺藍底或品牌藍字，Focus 使用 3px 品牌藍外框，皆不得位移。
- 只作 Anchor 捲動，不新增 ScrollSpy；高度不足時 TOC 自身可垂直捲動。

**`.payment-terms__content`與章節**

- 正文 `max-width: 70ch`，16px／1.85／`--color-text`；不將法律文字拉滿 Dialog。
- `.payment-terms__section`依 01–10 排列，各節 `padding-block: 1.75rem`；除第一節外使用上方 1px 分隔線，`scroll-margin-top: 1rem`。
- 章節標題 20px／700／1.4，下距正文 12px；13px 品牌藍編號需與標題相鄰，不靠顏色單獨傳達順序。
- 段落間距 12px；中文、英文名稱與數字可自然換行，長字串使用 `overflow-wrap: anywhere`。
- 章節不拆成 Cards、不使用每節不同背景、Icon 或陰影。

**`.payment-terms__company`**

- 位於全文結尾；上方 2px `--color-border-strong`、margin-top 32px、padding-top 20px。
- 中文公司名 16px／700；英文公司名、版權與統編 14px／1.7／muted，數字使用 tabular numerals。
- 白底、不做深色 Footer 帶；只呈現已核准公司資訊，不自行補地址、電話、Email 或新法律敘述。

### 15.7 Responsive

**Desktop ≥1120px**

- 使用左側 TOC＋右側 65–72ch 正文；Dialog 周圍至少 24px 留白。
- Header 約 80px；頁面本身鎖定捲動，只讓 `.payment-terms__scroll`內捲。

**Tablet 768–1119px**

- Dialog 寬 `calc(100vw - 3rem)`、最大高度 `calc(100dvh - 3rem)`，維持視窗外距。
- 改為單欄；隱藏 TOC，不改成水平捲動、Dropdown 或另一個命令元件。
- Header padding 20px；捲動區 padding 24px；正文維持最大 70ch 並靠左。

**Mobile <768px，包括 320／375px**

- Dialog 全螢幕：`width: 100vw`、`height: 100dvh`、`max-width/max-height: none`、`margin: 0`、`border-radius: 0`；移除 inline 與底部邊框，但保留頂部 3px 品牌藍線。
- Header 最小高度 64px，使用 `minmax(0, 1fr) auto`；主標 20px 可換兩行，關閉按鈕維持 44×44px。
- 捲動區水平 padding 20px；正文 15px／1.8，章節標題 18px；底部考慮 `env(safe-area-inset-bottom)`。
- 320px 內容可讀寬不得低於約 280px；公司英文名與長字串允許換行，全程不得產生水平捲動。

### 15.8 Hover、Focus、鍵盤與 Motion

- 打開時將焦點放在主標或關閉按鈕；Dialog 內需 Focus Trap。
- Escape、關閉按鈕與可選的 Backdrop 都可關閉；Backdrop 不得成為唯一關閉方式。
- 關閉後焦點返回「信用卡付款與訂閱條款」入口；開啟時鎖定頁面捲動，關閉及 1120px 狀態變更時清理 Lock 與 ARIA 狀態。
- Hover transition 只限 `color`、`background-color`與`border-color`，最長 160ms；禁止 transform、zoom、opacity reveal、pulse 或 focus glow。
- `prefers-reduced-motion: reduce`下停用 smooth scroll 與所有非必要 transition；元件即使不支援動畫仍須維持完整操作。

### 15.9 永久頁與 Print

- `payment-terms.html`使用淺灰 Page Hero、白色文件正文與同一套十節 HTML；Desktop 可沿用左側章節導航，正文最大 70ch。
- 永久頁是無 JavaScript fallback 與可列印版本，不得改成第二份獨立維護的條款文字。
- `@media print`使用 A4、頁邊距 16mm 18mm；隱藏全站 Header、Drawer、Backdrop、Footer、TOC 與關閉按鈕。
- 列印時移除陰影與裝飾背景，正文改黑字白底、最大寬不限；保留章節編號、公司資訊與 Prototype Notice。
- 章節標題 `break-after: avoid`；段落 `orphans: 3; widows: 3`。不得對整個長章節強制 `break-inside: avoid`，避免大片空白。

### 15.10 建議 Class

- `.payment-terms-entry`
- `.payment-terms-dialog`
- `.payment-terms__header`
- `.payment-terms__heading`
- `.payment-terms__eyebrow`
- `.payment-terms__close`
- `.payment-terms__scroll`
- `.payment-terms__notice`
- `.payment-terms__layout`
- `.payment-terms__toc`
- `.payment-terms__toc-title`
- `.payment-terms__toc-list`
- `.payment-terms__toc-link`
- `.payment-terms__content`
- `.payment-terms__section`
- `.payment-terms__section-number`
- `.payment-terms__company`
- `.payment-terms-page`
- `.payment-terms-page__hero`
- `.payment-terms-page__layout`

### 15.11 Payment Terms QA

- [ ] AI 雲 `PLATFORM ACCESS`入口文字為「信用卡付款與訂閱條款」，且無 JavaScript 時可到達 `payment-terms.html`。
- [ ] Dialog 主標為「信用卡付款說明」；Dialog 與永久頁十節內容、順序及公司署名一致。
- [ ] Prototype Notice 清楚說明不取得同意、不綁卡、不送出付款資料。
- [ ] 無接受、同意、繼續付款、Checkbox、付款步驟、價格方案或金流商臆測。
- [ ] 唯一命令操作為關閉；章節導覽只使用 Anchor，無 ScrollSpy 或額外控制器。
- [ ] Header 固定、正文內捲；Desktop 章節導航可用，Tablet／Mobile 單欄可完整閱讀。
- [ ] Escape、Focus Trap、Scroll Lock、焦點返回、Backdrop 與 44×44px 關閉按鈕均通過鍵盤測試。
- [ ] 驗證 320、375、768、1119、1120、1440px，無水平捲動、截字或關閉按鈕縮小。
- [ ] Reduced Motion 下無平滑捲動與非必要 Transition；一般模式也無縮放、滑入、Glow 或 Pulse。
- [ ] 永久頁在 A4 列印時保留全文、章節編號、公司資訊及 Prototype Notice，且不列印網站導覽與互動控制。

---

## 16. 法定與品牌關係最小 UI 調整

本節只補足核准關係的可讀性與層級，不建立新的品牌 Section、法律 Dashboard、Badge 系統或裝飾元件。所有文字逐字依 Brand／Content 核准文件；UI 不負責重寫或補充法律事實。

### 16.1 七頁 Footer 法定署名與次級品牌背書

適用頁面固定為：首頁、AIDC、AI 雲服務、Contact、News 列表、News 單篇與 Payment Terms 永久頁。

- Footer 上層仍由 SiGTRON 主 Logo、品牌說明、服務／公司／聯絡入口構成；不得以法定署名或 SignalPro Logo 取代 SiGTRON 主品牌位置。
- Footer 既有「聯絡資訊」欄改用 `<address class="footer-contact" aria-label="希格諾科技聯絡資訊">`，只包住地址、電話與 Email，不包住法定署名、版權或 `Powered by SignalPro`。
- `.footer-contact`與 `.footer-contact-list`維持地址 → 電話 → Email 的 DOM 順序；不增加地圖、聊天、社群或營業時間。地址為純文字 `高雄市苓雅區新光路38號31樓之4`，不做地圖連結；電話顯示 `07-2695198`並連至 `tel:072695198`；Email 顯示 `sales@signalpro.com.tw`並連至 `mailto:sales@signalpro.com.tw`。
- 聯絡標籤可沿用 `.footer-heading` 16px／700／白色；資料文字 14–15px／1.65，地址用 `#BECBD4`，電話與 Email Link 使用 `#D7E1EA`、600 字重與可見底線，`text-underline-offset: .2rem`。不得以 opacity 降低對比。
- `.footer-contact a`為 inline-flex，最小高度 44px、align-items center；Hover 轉白且保留底線，不位移、不改成按鈕底色。Focus-visible 使用 2px 白色內框、offset 3px 與品牌藍外環，Focus 不被 Footer Grid 或 overflow 裁切。
- 電話、Email 與地址都必須由文字本身傳達，不依賴 Icon；如正式製作方保留裝飾 Icon，須 `aria-hidden="true"`且不能成為獨立 Link 或唯一線索。
- 地址與 Email 使用 `overflow-wrap: anywhere`作最後保護，但優先在正常詞義邊界換行；不可 `text-overflow: ellipsis`、line clamp、nowrap 或 Tooltip 隱藏全文。
- `.footer-legal`逐字顯示：`© [年份] 希格諾科技股份有限公司（SignalPro Technology CO., LTD.）｜統一編號 95464633`。使用真實文字、可選取、可縮放；英文名稱依核准大小寫，不縮寫成 `SignalPro Technology`。
- `.footer-legal`在深墨藍 Footer 使用 `#D7E1EA`，13–14px／1.65／500；需達一般文字 4.5:1 對比，不以 opacity 壓低層級。
- `.powered-by`保留於法定署名之後，13px／600、白字或 `#D7E1EA`；正式 SignalPro Symbol 建議 24×24px、`object-fit: contain`。整組可用 `white-space: nowrap`，但不可造成頁面橫向溢出。
- `Powered by SignalPro`是同一公司的次級品牌背書：視覺尺寸不得大於法定署名，不使用 Divider 標成合作公司、不加「技術提供」、外連箭頭、Partner Badge、Glow 或 Hover 動畫。
- SignalPro 圖片若與文字相鄰，使用空 `alt`避免重複朗讀；若圖像單獨承擔名稱，替代文字才使用 `SignalPro`。
- `.footer-bottom`以 1px `rgba(255,255,255,.18)`與上層 Footer 分隔；Desktop gap 24px，Tablet／Mobile gap 12px。不要為了維持單列而縮小公司名稱。

**Responsive**

- ≥1120px：Footer 聯絡欄保持既有欄寬且不壓縮地址／Email；Footer Bottom 可用 `grid-template-columns: minmax(0, 1fr) auto`，法定署名靠左、`Powered by SignalPro`靠右，兩者不重疊。
- 768–1119px：Footer Grid 依既有格線自然換行；聯絡欄可獨占一欄或一列，資料順序仍為地址 → 電話 → Email。Footer Bottom 依同一 DOM 順序換行，不建立平板專用重複文案。
- 320／375px：Footer 單欄；地址、電話、Email、公司全名、英文名與統編自然換行。電話與 Email 各維持至少 44px 觸控高度；`Powered by SignalPro`保持成組但必要時整組移到下一列，Logo 不擠壓聯絡或法定文字。
- 200% Zoom：等同窄版自然 reflow；地址、Email 與法定署名不得截字、重疊、使用 Tooltip 補全文或產生頁面級水平捲動。

### 16.2 About 品牌關係句

- 沿用 8.10 的 7/5 格線與現有 About 內容，不新增品牌關係卡或第二個 Logo 區。
- `.about-brand-relationship`使用一般 `<p>`；16px／1.75／`--color-text`，最大 46rem，與前段正文相距 16px。
- 如需次級辨識，可用上方 1px `--color-border`與 16px padding-top；不使用 `.placeholder-text`、灰色斜體小字、Badge、Tooltip 或 Alert。
- 在 320／375／768px 依正文自然換行；200% Zoom 下公司英文名稱完整可見，不固定高度、不 clamp、不省略。

### 16.3 Contact 雙提示與 Prototype 示意確認

- 使用 8.12 的現有表單格線，不另建法律側欄或 Modal。閱讀與鍵盤順序為：表單標題 → 交易主體提示 → Prototype 警示 → 電話 → Email → 欄位 → Prototype 示意確認 → Submit → 未傳送狀態。
- `.transaction-party-note`只解釋正式報價、合約與發票主體，視覺較接近一般 Disclosure；`.prototype-warning`說明 Prototype 不傳送資料，邊框較強但不是 Error／Alert。
- 兩者標題、正文與左側結構線共同區分用途，不能只用不同顏色；兩者文字對比皆至少 4.5:1。
- `.contact-fallback`緊接雙提示，使用 `<address aria-label="洽談專案備援聯絡方式">`或語意清單；只列可撥電話與可寄信 Email，不重複地址。外觀為小型文字聯絡列／資訊塊，不使用大型 Card、Primary Button、圖示按鈕或深色 CTA Band。
- `.contact-fallback`可使用「其他聯絡方式」次級標籤與兩個 Anchor；電話、Email 可見文字分別完整顯示 `07-2695198`、`sales@signalpro.com.tw`，不得寫成模糊的「致電我們／寄信給我們」或只顯示 Icon。
- 備援聯絡只解決 Prototype 不傳送資料時的可送達性，不顯示或暗示回覆時效、立即回電、24/7、營業時間、案件建立或其他服務承諾。
- ≥768px 可同列但允許換行；320／375px 必須垂直排列，電話與 Email 每項至少 44px 高，長 Email 可換行且 Focus Ring 不被裁切。
- `.prototype-confirmation`的 Checkbox 與 Label 必須在 320px 完整可點擊，Label 不被 Submit 擠在同列；767px 以下 Button 與示意確認分列。
- Error 狀態使用文字「請完成 Prototype 示意確認」及可聚焦 Error Summary；不可寫成「請同意個資條款」。成功／完成狀態固定明示資料未送出，不使用綠色成功 Toast。
- JavaScript 停用時，雙提示與 Checkbox 仍可見，Submit 不得造成真實傳送；不依賴動畫或即時效果傳達狀態。

### 16.4 AI 雲 INFINITIX 關係 Disclosure

- `.platform-operator-copy`先清楚呈現希格諾科技股份有限公司以 SiGTRON 品牌營運、管理客戶帳號並提供服務；其後緊接 `.disclosure-note--technology-partner`。
- Disclosure 沿用既有 `.disclosure-note`，只補語意 class，不新增新色或 Partner Card：品牌淺藍底、左側 3px 品牌藍、14–15px／1.7，最大行寬 70ch。
- INFINITIX 僅在正文出現一次完整關係說明；不得使用 Logo、聯名鎖定、Hero 標題、Status Badge、CTA、獨立深色區或動畫。
- 320／375／768px 單欄且保持營運句在前、夥伴句在後；1120px 以上也維持相鄰閱讀，不把兩者拆到不同欄。
- 200% Zoom 與螢幕閱讀器順序不得分離主體與角色限制；不以 Tooltip、圖示或色彩作唯一說明。

### 16.5 建議 Class

- `.about-brand-relationship`
- `.footer-legal`
- `.footer-contact`
- `.footer-contact-list`
- `.footer-contact__address`
- `.footer-contact__link`
- `.powered-by`
- `.transaction-party-note`
- `.prototype-warning`
- `.contact-fallback`
- `.contact-fallback__label`
- `.contact-fallback__links`
- `.prototype-confirmation`
- `.prototype-confirmation__error`
- `.prototype-status`
- `.platform-operator-copy`
- `.disclosure-note--technology-partner`

### 16.6 法定／品牌關係 QA

- [ ] 七頁 Footer 逐頁比對相同聯絡資料與法定署名；地址為純文字，電話、Email 分別使用正確 `tel:`與`mailto:`，不存在 Placeholder、不完整 `SignalPro Technology`或另一法人暗示。
- [ ] About 關係句是可選取、可縮放的正常正文，不是圖片、Placeholder、Tooltip、Badge 或腳註小字。
- [ ] `Powered by SignalPro`在法定署名之後且保持次級；Logo 與相鄰文字不重複朗讀，不被理解為第三方技術提供者。
- [ ] Contact 交易主體提示、Prototype 警示、電話與 Email 備援聯絡依序在所有輸入欄之前；主內容不重複地址，備援沒有大型 CTA、Icon-only Link 或回覆時效承諾。
- [ ] Checkbox 可見 Label 使用「Prototype 示意確認」，錯誤與 Error Summary 不稱為個資或契約同意；完成狀態明示資料未送出。
- [ ] INFINITIX 只以 Technology Ecosystem 相鄰 Disclosure 呈現，不出現在 Hero、CTA、Status、Header、Logo Lockup 或大型獨立區。
- [ ] 320px：地址、Email、公司英文名無水平溢出、截字、超小字或 Tooltip 依賴；Footer 電話／Email、Contact 備援與 Checkbox 觸控目標皆至少 44px。
- [ ] 375px：About、Contact 雙提示／備援聯絡、Checkbox、INFINITIX Disclosure 與 Footer 全部單欄可讀，沒有 fixed height、line clamp 或互相擠壓。
- [ ] 768px：多欄自然轉單欄／換行；Footer 聯絡資料維持地址 → 電話 → Email，Footer Bottom 維持法定署名 → 品牌背書，不建立重複文案。
- [ ] 1120px 與 1440px：Footer 聯絡欄、法定署名與品牌背書無重疊；Contact 雙提示及備援跨表單主欄，AI 雲營運句與 Disclosure 仍相鄰。
- [ ] 200% Zoom：七頁逐頁確認 Footer 地址／電話／Email與法定署名 reflow；Contact 備援 Link 與 Focus 外框完整，無遮蔽、重疊、省略或頁面級水平捲動。
- [ ] 一般文字對比至少 4.5:1；Focus indicator 與 Checkbox 邊界至少符合非文字對比 3:1。深色 Footer Focus 使用白色內框＋品牌藍外環。
- [ ] Tab 順序符合 DOM；Contact 電話 → Email → 表單欄位，Footer 電話 → Email 各只有一個焦點；所有 Link、Checkbox、Submit 皆有可見 Focus，焦點不被 Sticky Header 或容器 overflow 裁切。
- [ ] `prefers-reduced-motion: reduce`下無平滑捲動或非必要 Transition；一般模式亦無 Gradient、Glow、Pulse、Reveal、上浮或 Logo 動畫。
- [ ] JavaScript 停用時，About、Footer、Contact 雙提示／Checkbox 與 AI 雲 Disclosure 仍為可讀 HTML；Prototype 不傳送資料。

---

## 17. UI 核准結論

- `Engineered Infrastructure Confidence`是唯一上位視覺方向；`Operational Clarity`是其 UI 執行方式。
- 全站採 Swiss Modernism 2.0 與工程資訊設計，不再沿用 AI-Native、Glass、HUD、Glow 或過量 SaaS Cards。
- Header 固定使用淺色背景與現有彩色 SiGTRON Logo；品牌藍 `#16689F`專供 Primary、主要連結、Active 與 Focus。
- 深墨藍負責結構，不作全站暗色模式；白色與冷灰保持 65–75%。
- Radius 收斂至 4–8px；多數 Panel 只用細邊框，不用陰影。
- 首頁專案證據、AIDC 工程方法與 AI 雲服務狀態均以可讀、可驗證、不可誤解為優先。
- News 使用成熟的企業 Editorial 密度補充可查證動態；不複製紅色分類、厚陰影、機器人視覺或自動輪播。
- Frontend Developer 可直接依第 10、11、14 節開始調整 Prototype；不得自行補入新字體、素材、商業事實或框架。
