# SiGTRON Website Vendor Handoff

交付日期：2026-08-13  
專案類型：繁體中文／英文雙語靜態網站 Prototype 及製作規格

## 1. 請先閱讀

本交付包提供網站製作公司進行正式網站設計、切版與上線整合。Prototype 用來說明已核准的資訊架構、內容層級、視覺方向、互動方式與響應式規則，不要求逐像素照抄。

委外團隊可以優化排版與視覺細節，但不得自行新增或改寫公司事實、法律關係、客戶／夥伴、認證、案場狀態、產品規格、價格、SLA、資安或效能宣稱。

## 2. 建議閱讀順序

1. `docs/00-project/confirmed-facts-and-decisions.md`
2. `docs/01-brand/legal-brand-relationship-approval-v1.md`
3. `docs/01-brand/english-brand-and-legal-localization-v1.md`
4. `docs/02-content/core-page-copy-v1.md`
5. `docs/02-content/english-website-copy-v1.md`
6. `docs/03-ux/core-pages-wireframes-v1.md`
7. `docs/03-ux/english-bilingual-ia-wireframes-v1.md`
8. `docs/04-ui/design-system-v1.md`
9. `docs/04-ui/english-bilingual-ui-specification-v1.md`
10. `prototype/README.md`

如文件間出現衝突，依上述順序較前且更新日期較新的核准內容處理，並回報 SiGTRON 確認，不得自行推定。

## 3. Prototype 入口

- 繁體中文首頁：`prototype/index.html`
- 英文首頁：`prototype/en/index.html`
- Prototype 說明：`prototype/README.md`

Prototype 使用 Semantic HTML5、共用 CSS 與少量 Vanilla JavaScript，不需要安裝套件或執行建置流程。可直接開啟 HTML；影片漸進式嵌入等 HTTP(S) 行為應使用靜態伺服器測試。

## 4. 交付內容

- `docs/00-project`：已確認事實與決策
- `docs/01-brand`：品牌、法定關係與英文品牌規範
- `docs/02-content`：中英文文案、News／Event 模板與發布台帳
- `docs/03-ux`：中英文 IA、Wireframe、Responsive 與互動規格
- `docs/04-ui`：Design System 與雙語 UI 規格
- `prototype`：十四個中英文靜態頁面及所有網站資產
- `partner-data/sigtron-partner-list.xlsx`：待公司補充與核准的 Partner 清單
- `tools/validate-prototype.mjs`：Prototype 自動檢查工具

## 5. 正式上線前必須處理

- 移除或替換所有 Prototype、示意 News、文章模板、方括號欄位及未核准 Logo 佔位。
- News 沒有核准內容時使用正式空狀態；文章模板不得被索引或當成正式新聞。
- 沒有取得雙方公開及商標授權的客戶／夥伴，不得顯示名稱或 Logo。
- Contact 必須選擇：只保留電話／Email，或在公司核准個資告知、資料流及服務商後接入正式傳送流程。
- 英文文案、正式英文地址及 `Unified Business No.` 用語仍需公司逐字核准。
- 英文 Payment 頁目前只顯示翻譯審閱狀態；不得自行翻譯、摘要或接入同意／付款流程。
- 建立正式 clean URL、Canonical、`hreflang`、Sitemap、Robots、404 及 Redirect。
- 完成 320、390、768、1119、1120、1440px、200% Zoom、鍵盤及主要瀏覽器驗收。

## 6. 不得改寫的狀態限制

- 台南新市案場：試運轉中／In trial operation
- 72 個 HGX B300 Nodes：規劃導入／Planned for deployment
- 2026 Q4：目標正式商轉／Target timing for commercial operation
- 約 800 MW：洽談與規劃中的潛在總容量，不是已簽約、已建置或已營運容量
- 日本、泰國、馬來西亞、印尼、菲律賓：洽談／規劃中
- 台南影片：3D 渲染概念影片，非現場實拍
- AI 雲平台：平台已上線；實際服務與資源依帳號權限及個別專案設定

## 7. 驗證

若環境已安裝 Node.js，可在交付包根目錄執行：

```text
node tools/validate-prototype.mjs
node --check prototype/assets/js/main.js
node --check prototype/assets/js/news.js
```

目前交付版本已通過十四頁 Prototype 驗證及 JavaScript 語法檢查。自動檢查不取代正式瀏覽器、視覺、鍵盤、內容與法律驗收。

## 8. 官方聯絡資料

- 公司：希格諾科技股份有限公司／SignalPro Technology CO., LTD.
- 統一編號：95464633
- 地址：高雄市苓雅區新光路38號31樓之4
- 電話：07-2695198
- Email：sales@signalpro.com.tw

