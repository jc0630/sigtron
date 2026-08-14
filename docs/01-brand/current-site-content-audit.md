# SiGTRON 現有委外網站內容稽核（初稿）

日期：2026-08-11  
範圍：`/home/`、`/docs/`、`/pricing/`、`/products/`、`/solutions/`

> 公司已確認：這五個受保護頁面的內容多為委外方在資訊不足時填入的占位內容，部分內容不正確。它們只能作為既有版面盤點，不能作為 SiGTRON 的產品、價格、技術或品牌資料來源。所有數字、價格、認證、服務等級與產品能力，在取得公司內部證據前一律視為「不可採用」。

## 結論摘要

目前版本把 SiGTRON 描述成已全面上線、可即時自助購買的全球 GPU 雲端平台，但公開可驗證的公司核心其實同時包含雷達訊號處理、AI-ready data、SDK／演算法能力，以及正在建置的 SiGTRON AI Factory。現有內容因此出現三個根本問題：

1. 品牌定位過度縮減成 GPU 租賃，沒有說清楚 SignalPro 的感知、訊號處理與 AI 資料核心能力。
2. 大量內容以成熟全球雲端平台的口吻呈現，和目前可驗證的營運階段可能不一致。
3. 多項數字、價格、合規、安全與 SLA 宣稱沒有來源，存在商業信任與法律風險。

## `/home/` 首頁

### 現況主張

- 主標：`AI Compute & Infrastructure, Scaled For Everyone`
- 受眾分成 Beginners & Creators、Advanced Developers、Enterprise Teams。
- 呈現 GPU 即時價格、即時庫存、全球延遲、系統可用率。
- 宣稱提供 REST API、CLI、Docker、私有叢集與企業安全能力。

### 主要問題

- `99.98% operational`、`12ms average` 沒有可追溯來源。
- GPU 價格、合約價與可用量未確認。
- `SOC 2 & HIPAA Compliance`、`military-grade physical security` 未確認。
- CTA 多數為空連結，Deploy 指向 `example.com`。
- Python SDK 區塊仍為「假文字」。
- 沒有說明 SignalPro 的雷達資料、訊號處理、SDK、AI 模型與感知技術優勢。

## `/docs/` 文件中心

### 現況主張

- Quickstart、API Reference、IAM、GPU workload、HPC migration 等文件入口。
- 顯示 SOC2 Type II、HIPAA、ISO 27001 ready。
- 顯示 `api.sigtron.com/v1/deploy` API 範例。
- 宣稱工程支援團隊 24/7 可用。

### 主要問題

- 文件、API 端點、IAM 與 migration 內容是否存在尚未確認。
- 合規徽章及 24/7 支援未確認。
- Quickstart 內容以 iframe／空內容呈現。
- Full API Docs、Contact Support、Community Forum 為空連結。

## `/pricing/` 價格頁

### 現況主張

- 預付點數：USD 500、2,500、10,000。
- 提供點數加碼、優先排程、H100／B200 優先權、專屬工程師等方案。
- 同時呈現 Pre-paid Credits、Hourly Matrix、Enterprise 三種模式。

### 主要問題

- 所有價格、點數換算、方案權益與 GPU 型號供應均未確認。
- Buy credits 為空連結，沒有可成立的購買流程。
- 同一組方案內容在頁面結構中重複三次。
- 在商業模式、服務範圍、計價單位未定前，不適合公開價格。

## `/products/` 產品頁

### 現況主張

- 三種路徑：AI Playgrounds、Cloud Compute、Private Clusters。
- 宣稱 Terraform、Kubernetes、Docker 整合。
- 宣稱 Tier 3 N+1、InfiniBand NDR、專線、24/7 on-site support。
- 以創作者、ML 工程師、企業 IT／研究機構區分受眾。

### 主要問題

- 第二個產品區塊誤用相同標題與文案 `No-code AI playgrounds`。
- 技術整合、機房等級、網路規格與支援能力未確認。
- 沒有清楚區分已上市服務、規劃中服務與客製專案。
- 沒有呈現 SignalPro 現有的雷達 SDK、資料處理與感知方案。

## `/solutions/` 解決方案頁

### 現況主張

- 實際內容是 Community／Support 方案，而非產業或應用解決方案。
- 宣稱有數千名 Discord 成員、每週討論、全球 24 區支援與全球 NOC。
- 提供 Free、USD 499/月、Enterprise 支援方案。
- 宣稱 99.998% uptime 與小於一小時的 critical SLA。

### 主要問題

- 頁面名稱和內容目的不一致。
- 社群規模、全球覆蓋、NOC、價格、SLA、uptime 均未確認。
- Discord、Forum、Talk to an Expert 多為空連結。
- 應改為真正的產業／使用情境，例如雷達 AI、智慧空間、工業感知、企業 AI 推論與算力基礎設施；實際分類仍需公司確認。

## 可驗證的公開基礎

以下只能作為品牌訪談的起點，正式文案仍需公司內部確認：

- `https://www.signalpro.com.tw/`：公司現有官網，主軸為雷達資料旅程、SignalPro SDK、訊號處理與 AI-ready datasets。
- `https://sigtron.ai/`：目前公開首頁，提到 SignalPro、4D 空間數據 SDK、雷達應用、算力服務與 SiGTRON AI Factory。
- `https://www.macnica.com/apac/galaxy/zh_tw/news-events/galaxy-news/sigtron-ai-factory/`：合作夥伴對 SiGTRON AI Factory 建置計畫與合作生態系的說明。
- `https://www.104.com.tw/company/1a2x6bn4xn`：公司公開徵才資訊，描述雷達模組、訊號處理演算法與 AI 模型軟體整合。

## 目前不可直接沿用的內容類型

- 即時可用率、延遲、GPU 庫存與全球節點數
- 任何價格、點數、折扣、購買方案
- SOC 2、HIPAA、ISO、Tier 等級與 military-grade 宣稱
- SLA、24/7、全球 NOC、全球支援區域
- 未實際存在的 API、CLI、SDK、論壇、Discord 或購買連結
- 未經確認的硬體型號、數量、上線時程與效能

## 下一階段

由 Brand Guardian 依公司提供的第一方資料確認：

1. SiGTRON 與 SignalPro 的品牌關係。
2. 這次網站最主要的商業目標與首要受眾。
3. 哪些產品／服務已可銷售、哪些仍在建置或規劃。
4. 可公開的證據、合作夥伴、硬體規格、時程與聯絡方式。
5. 品牌希望呈現的個性、可信度與行動召喚。
