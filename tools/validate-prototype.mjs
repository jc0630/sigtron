import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve("prototype");
const chinesePages = [
  "index.html",
  "aidc.html",
  "ai-cloud-services.html",
  "payment-terms.html",
  "contact.html",
  "news.html",
  "news/article-template.html",
];
const englishPages = [
  "en/index.html",
  "en/aidc.html",
  "en/ai-cloud-services.html",
  "en/payment-terms.html",
  "en/contact.html",
  "en/news.html",
  "en/news/article-template.html",
];
const pages = [...chinesePages, ...englishPages];
const errors = [];
const contents = new Map();

const report = (condition, message) => {
  if (!condition) errors.push(message);
};

const count = (text, pattern) => (text.match(pattern) ?? []).length;
const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const localePagePath = (page) => (page.startsWith("en/") ? page.slice(3) : page);
const pagePrefix = (page) => (path.posix.dirname(localePagePath(page)) === "." ? "" : "../");
const normalPageTarget = (page, filePart) => {
  if (!filePart) return page;
  return path.posix.normalize(path.posix.join(path.posix.dirname(page), filePart));
};

for (const page of pages) {
  const html = await fs.readFile(path.join(projectRoot, ...page.split("/")), "utf8");
  contents.set(page, html);

  const isEnglish = page.startsWith("en/");
  const localePage = localePagePath(page);
  report(/^<!doctype html>/i.test(html.trim()), `${page}: missing doctype`);
  report(new RegExp(`<html\\s+lang="${isEnglish ? "en" : "zh-Hant"}"`, "i").test(html), `${page}: incorrect document language`);
  report(/<meta\s+name="viewport"/i.test(html), `${page}: missing viewport metadata`);
  report(count(html, /<h1\b/gi) === 1, `${page}: must contain exactly one h1`);
  report(/<header\b[^>]*data-site-header/.test(html), `${page}: missing shared site header`);
  report(/<main\b[^>]*id="main"/.test(html), `${page}: missing #main target`);
  report(/<footer\b/.test(html), `${page}: missing footer`);
  report(/class="skip-link"/.test(html), `${page}: missing skip link`);

  for (const marker of ["data-nav-toggle", "data-nav-backdrop", "data-site-nav", "data-nav-close"]) {
    report(html.includes(marker), `${page}: missing mobile navigation hook ${marker}`);
  }
  report(/role="dialog"[^>]*aria-modal="true"/.test(html), `${page}: drawer is missing dialog semantics`);

  const header = html.match(/<header\b[^>]*data-site-header[\s\S]*?<\/header>/)?.[0] ?? "";
  const desktopNav = header.match(/<nav class="desktop-nav"[\s\S]*?<\/nav>/)?.[0] ?? "";
  const drawerNav = header.match(/<nav class="drawer-nav"[\s\S]*?<\/nav>/)?.[0] ?? "";
  const prefix = pagePrefix(page);
  const expectedNavigation = isEnglish
    ? [
        [`${prefix}aidc.html`, "AIDC Delivery"],
        [`${prefix}ai-cloud-services.html`, "AI Cloud Services"],
        [`${prefix}index.html#project-footprint`, "Project Footprint"],
        [`${prefix}news.html`, "News &amp; Events"],
        [`${prefix}index.html#about`, "About SiGTRON"],
      ]
    : [
        [`${prefix}aidc.html`, "AIDC 建置"],
        [`${prefix}ai-cloud-services.html`, "AI 雲服務"],
        [`${prefix}index.html#project-footprint`, "專案與布局"],
        [`${prefix}news.html`, "新聞與活動"],
        [`${prefix}index.html#about`, "關於 SiGTRON"],
      ];
  for (const [navigationName, navigation] of [["desktop", desktopNav], ["drawer", drawerNav]]) {
    report(count(navigation, /class="nav-link"/g) === 5, `${page}: ${navigationName} navigation must contain exactly five links`);
    let previousPosition = -1;
    for (const [href, label] of expectedNavigation) {
      const linkPosition = navigation.indexOf(`href="${href}"`);
      report(linkPosition > previousPosition && navigation.includes(`>${label}</a>`), `${page}: ${navigationName} navigation order/link is wrong for ${label}`);
      previousPosition = linkPosition;
    }
  }
  report(!header.includes("header-cta") && !header.includes("洽談專案") && !header.includes("Discuss your project"), `${page}: Header/Drawer must not contain the project CTA`);
  const drawerActions = header.match(/<div class="drawer-actions">[\s\S]*?<\/div>/)?.[0] ?? "";
  report(count(drawerActions, /<a\b/g) === 1 && drawerActions.includes("button--secondary") && drawerActions.includes(isEnglish ? "Customer sign-in" : "客戶登入"), `${page}: Drawer actions must contain only the secondary Console login`);

  const loginUrl = "https://console.sigtron.ai/dev-console/auth/login";
  report(count(html, new RegExp(escapeRegExp(loginUrl), "g")) >= 2, `${page}: missing desktop/drawer Console login links`);
  const loginLabelPattern = isEnglish ? /aria-label="Sign in to SiGTRON Console"/g : /aria-label="登入 SiGTRON Console"/g;
  report(count(html, loginLabelPattern) >= 2, `${page}: Console links need accessible labels`);

  const projectCtaPattern = localePage === "contact.html"
    ? /href="#project-inquiry"/g
    : new RegExp(`href="${escapeRegExp(prefix)}contact\\.html#project-inquiry"`, "g");
  report(count(html, projectCtaPattern) >= 1, `${page}: content/Footer is missing a project CTA`);

  const expectedActiveHref = localePage === "aidc.html"
    ? `${prefix}aidc.html`
    : localePage === "ai-cloud-services.html" || localePage === "payment-terms.html"
      ? `${prefix}ai-cloud-services.html`
      : localePage === "news.html" || localePage === "news/article-template.html"
        ? `${prefix}news.html`
        : "";
  if (expectedActiveHref) {
    report(count(header, new RegExp(`href="${escapeRegExp(expectedActiveHref)}" aria-current="page"`, "g")) === 2, `${page}: desktop/drawer active navigation is incorrect`);
  } else {
    report(!desktopNav.includes('aria-current="page"') && !drawerNav.includes('aria-current="page"'), `${page}: primary navigation must not have a static active item`);
  }
  if (localePage === "index.html") {
    const homeNewsLinks = [...header.matchAll(/<a class="nav-link" href="news\.html"[^>]*>/g)].map((match) => match[0]);
    report(homeNewsLinks.length === 2 && homeNewsLinks.every((link) => !link.includes("aria-current") && !link.includes("data-scrollspy-link")), "index.html: News links must be inactive and excluded from scrollspy");
  }

  const footer = html.match(/<footer\b[\s\S]*?<\/footer>/)?.[0] ?? "";
  const newsHref = `${prefix}news.html`;
  report(
    footer.includes(`href="${newsHref}"`) && footer.includes(isEnglish ? "News &amp; Events" : "最新消息與活動"),
    `${page}: Footer is missing the Latest News & Events entry`
  );
  const approvedFooterLegal = isEnglish
    ? '© <span data-current-year></span> SignalPro Technology CO., LTD. | Unified Business No. 95464633'
    : '© <span data-current-year></span> 希格諾科技股份有限公司（SignalPro Technology CO., LTD.）｜統一編號 95464633';
  report(count(footer, /class="footer-legal"/g) === 1 && footer.includes(approvedFooterLegal), `${page}: approved legal Footer identity is missing or duplicated`);
  report(count(footer, /class="powered-by"/g) === 1 && /Powered by[\s\S]*?SignalPro/.test(footer), `${page}: secondary Powered by SignalPro signature is missing or duplicated`);
  const approvedContactAddress = isEnglish
    ? '<address class="footer-contact" aria-label="SignalPro Technology contact information"><span>[Official English postal address pending company confirmation]</span><a href="tel:072695198">07-2695198</a><a href="mailto:sales@signalpro.com.tw">sales@signalpro.com.tw</a></address>'
    : '<address class="footer-contact" aria-label="希格諾科技聯絡資訊"><span>高雄市苓雅區新光路38號31樓之4</span><a href="tel:072695198">07-2695198</a><a href="mailto:sales@signalpro.com.tw">sales@signalpro.com.tw</a></address>';
  report(count(footer, /<address\b/g) === 1 && footer.includes(approvedContactAddress), `${page}: approved semantic Footer contact information is missing or duplicated`);
  report(count(footer, /href="tel:072695198"/g) === 1, `${page}: Footer must contain one approved telephone link`);
  report(count(footer, /href="mailto:sales@signalpro\.com\.tw"/g) === 1, `${page}: Footer must contain one approved email link`);

  const desktopLanguage = header.match(/<nav class="language-selector"[\s\S]*?<\/nav>/)?.[0] ?? "";
  const drawerLanguage = header.match(/<nav class="drawer-language"[\s\S]*?<\/nav>/)?.[0] ?? "";
  const footerLanguage = footer.match(/<nav class="footer-language"[\s\S]*?<\/nav>/)?.[0] ?? "";
  for (const [location, languageNavigation] of [["desktop", desktopLanguage], ["drawer", drawerLanguage], ["footer", footerLanguage]]) {
    report(Boolean(languageNavigation), `${page}: missing ${location} language navigation`);
    report(count(languageNavigation, /aria-current="page"/g) === 1, `${page}: ${location} language navigation needs one current language`);
    report(count(languageNavigation, /hreflang=/g) === 1, `${page}: ${location} language navigation needs one alternate link`);
  }

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const seen = new Set();
  for (const id of ids) {
    report(!seen.has(id), `${page}: duplicate id #${id}`);
    seen.add(id);
  }
}

for (const [page, html] of contents) {
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (/^(https?:|mailto:|tel:)/i.test(href)) continue;
    const [beforeHash, hash = ""] = href.split("#");
    const filePart = beforeHash.split("?")[0];
    const targetPage = normalPageTarget(page, filePart);

    if (!contents.has(targetPage)) {
      const localPath = path.resolve(projectRoot, path.dirname(page), filePart);
      try {
        await fs.access(localPath);
      } catch {
        errors.push(`${page}: local link target not found: ${href}`);
      }
      continue;
    }

    if (hash) {
      const targetHtml = contents.get(targetPage);
      report(targetHtml.includes(`id="${hash}"`), `${page}: anchor not found: ${href}`);
    }
  }

  const sources = [...html.matchAll(/(?:src|poster)="([^"]+)"/g)].map((match) => match[1]);
  for (const source of sources) {
    if (/^(https?:|data:)/i.test(source)) continue;
    const sourcePath = source.split("?")[0];
    const targetPath = path.resolve(projectRoot, path.dirname(page), sourcePath);
    try {
      await fs.access(targetPath);
    } catch {
      errors.push(`${page}: local asset not found: ${source}`);
    }
  }
}

const home = contents.get("index.html");
const aidc = contents.get("aidc.html");
const cloud = contents.get("ai-cloud-services.html");
const paymentTerms = contents.get("payment-terms.html");
const contact = contents.get("contact.html");
const news = contents.get("news.html");
const article = contents.get("news/article-template.html");
const enHome = contents.get("en/index.html");
const enAidc = contents.get("en/aidc.html");
const enCloud = contents.get("en/ai-cloud-services.html");
const enPayment = contents.get("en/payment-terms.html");
const enContact = contents.get("en/contact.html");
const enNews = contents.get("en/news.html");
const enArticle = contents.get("en/news/article-template.html");
const combined = [...contents.values()].join("\n");

report(home.includes('id="project-footprint"'), "index.html: missing #project-footprint");
report(home.includes('id="about"'), "index.html: missing #about");
report(contact.includes('id="project-inquiry"'), "contact.html: missing #project-inquiry");
report(count(home, /data-scrollspy-link/g) === 4, "index.html: project/about scrollspy hooks must appear in desktop and drawer navigation");

report(home.includes("從 AIDC 建置，到 AI 算力服務。"), "index.html: approved H1 is missing");
report(home.includes("SiGTRON 是希格諾科技股份有限公司（SignalPro Technology CO., LTD.）自有的 AIDC 與企業 AI 算力服務品牌。"), "index.html: approved legal/brand relationship is missing from About");
report(home.includes("台南新市 AIDC 旗艦案場"), "index.html: Tainan flagship project is missing");
report(home.includes("試運轉中"), "index.html: Tainan trial-operation status is missing");
report(home.includes("72 Nodes") && home.includes("2026 Q4"), "index.html: approved Tainan planning figures are missing");
report(/約\s*800\s*MW/.test(home), "index.html: pipeline potential capacity is missing");
for (const market of ["台灣", "日本", "泰國", "馬來西亞", "印尼", "菲律賓"]) {
  report(home.includes(market), `index.html: project pipeline is missing ${market}`);
}
report(count(home, /asia-project-pipeline-map\.png/g) === 1, "index.html: pipeline must use exactly one fixed map image");
report(!/site-pin|map-pin|pin-pulse/.test(home), "index.html: map pins must not be HTML overlays");
report(/不代表已簽約、已建置或已(?:投入)?營運(?:之)?容量/.test(home), "index.html: 800MW disclosure is missing");
report(home.includes('id="partners"'), "index.html: Partners section is missing");
report(home.includes("CUSTOMERS &amp; ECOSYSTEM PARTNERS"), "index.html: Customers & Ecosystem Partners eyebrow is missing");
report(home.includes('<h2 id="partners-title">客戶與合作生態系</h2>'), "index.html: approved Customers & Ecosystem Partners title is missing");
report(home.includes("本區將依公開資訊與商標使用授權，分別呈現 SiGTRON 已可公開的客戶，以及技術、策略與生態系夥伴。各組織的身分、合作範圍與所屬專案，以雙方核准公開的資訊為準。"), "index.html: approved customer/ecosystem relationship copy is missing");
report(home.includes('aria-label="客戶與合作夥伴 Logo 預留區"'), "index.html: customer/partner Logo wall accessible label is missing");
report(count(home, /Customer \/ Partner Logo \d{2}/g) === 10, "index.html: customer/partner Logo wall must contain ten neutral placeholders");
report(count(home, /分類與授權待確認/g) === 10, "index.html: customer/partner placeholder status must appear ten times");
report(home.includes("正式上線時將依客戶、技術夥伴、策略夥伴與生態系夥伴分類呈現；Logo 僅用於識別經核准公開的關係，不代表相同合作層級，亦不構成推薦或背書。"), "index.html: customer/ecosystem classification disclosure is missing");
report(!home.includes("與專業夥伴共同完成 AIDC 的每一層"), "index.html: obsolete Partners title remains");
report(!home.includes(">PARTNERS</span>"), "index.html: obsolete Partners eyebrow remains");
report(!home.includes("待授權素材"), "index.html: obsolete Partner placeholder status remains");
report(/Powered by[\s\S]{0,240}SignalPro/.test(home), "index.html: Powered by SignalPro is missing");
report(count(home, /data-motion-engineering-stack/g) === 1, "index.html: approved Engineering Stack motion hook must appear exactly once");
report(!home.includes("data-motion-process-rail"), "index.html: summary Process Rail must remain outside the motion POC");

const partnersPosition = home.indexOf('id="partners"');
const newsPosition = home.indexOf('id="news-events"');
const aboutPosition = home.indexOf('id="about"');
const projectPosition = home.indexOf('id="project-footprint"');
const capabilityPosition = home.indexOf('id="aidc-capabilities-title"');
report(projectPosition >= 0 && newsPosition > projectPosition && capabilityPosition > newsPosition && partnersPosition > capabilityPosition && aboutPosition > partnersPosition, "index.html: section order must be Project → News → AIDC capabilities → Partners → About");
report(!home.includes('data-news-rail') && !home.includes('data-news-rail-controls') && !home.includes('data-news-rail-viewport'), "index.html: obsolete featured News Rail hooks remain");
report(count(home, /data-news-card/g) === 3, "index.html: featured template Grid must contain three cards");
report(home.includes("版型示意｜非已發布內容") && home.includes('data-content-status="template"'), "index.html: featured template disclosure is missing");
report(count(home, /assets\/js\/news\.js/g) === 0, "index.html: static featured News must not load news.js");
report(home.includes('<h2 id="news-events-title">新聞與活動</h2>'), "index.html: neutral News & Events heading is missing");
report(home.includes("本區將彙整 SiGTRON 經核准公開的公司公告、專案動態、活動資訊與媒體報導。"), "index.html: neutral template-stage News intro is missing");
report(home.includes('<ul class="featured-news-grid">'), "index.html: featured News must use the static Grid list");
for (const category of ["company", "project", "event"]) {
  report(count(home, new RegExp(`data-category="${category}"`, "g")) === 1, `index.html: featured Grid must contain one ${category} card`);
}
report(!home.includes('data-category="media"'), "index.html: featured Grid must not contain a media card");
report(home.includes('data-news-empty-all hidden'), "index.html: all-content empty state is missing");
report(count(home, /<time class="news-date">\[YYYY\.MM\.DD\]<\/time>/g) === 3, "index.html: schematic dates must use time without datetime");
report(!/<time\b[^>]*datetime=/i.test(home), "index.html: schematic time elements must not have fake datetime values");
report(/<section class="section featured-news" id="news-events"/.test(home), "index.html: Featured News must use a white compact section");
report(/<section class="section section--canvas" aria-labelledby="aidc-capabilities-title"/.test(home), "index.html: AIDC capabilities section must use the canvas background");
report(/<section class="section" aria-labelledby="delivery-title"/.test(home), "index.html: delivery section must return to white");
report(/<section class="section section--canvas" aria-labelledby="cloud-title"/.test(home), "index.html: AI cloud section must use the canvas background");
report(/<section class="section" aria-labelledby="confidence-title"/.test(home), "index.html: delivery confidence section must return to white");
report(/<section class="section section--canvas partners-section" id="partners"/.test(home), "index.html: Partners must use the canvas background");
report(/<section class="section" id="about"/.test(home), "index.html: About must remain on white");

report(aidc.includes("engineering-matrix"), "aidc.html: Engineering Matrix is missing");
report(aidc.includes('id="delivery"') && aidc.includes("process-rail"), "aidc.html: delivery Process Rail is missing");
report(count(aidc, /data-motion-process-rail/g) === 1, "aidc.html: approved Process Rail motion hook must appear exactly once");
report(count(aidc, /class="process-rail-motion__line" aria-hidden="true"/g) === 1, "aidc.html: Process Rail needs one decorative aria-hidden line");
report(count(aidc, /class="process-rail-motion__node" aria-hidden="true"/g) === 6, "aidc.html: Process Rail needs six decorative aria-hidden nodes");

for (const service of ["GaaS", "MaaS", "TaaS"]) {
  report(cloud.includes(service), `ai-cloud-services.html: missing ${service}`);
}
report(cloud.includes("service-table"), "ai-cloud-services.html: engineering service table is missing");
report(count(cloud, /平台已上線/g) >= 3, "ai-cloud-services.html: online-platform status is not sufficiently explicit");
report(count(cloud, /依帳號權限及個別專案設定為準/g) >= 3, "ai-cloud-services.html: account/project scope disclosure is not sufficiently repeated");
const cloudEcosystem = cloud.match(/<section class="section section--canvas" id="ecosystem"[\s\S]*?<\/section>/)?.[0] ?? "";
report(cloudEcosystem.includes("希格諾科技股份有限公司以 SiGTRON 品牌對外營運平台、管理客戶帳號並提供服務。"), "ai-cloud-services.html: approved platform operating relationship is missing from Technology Ecosystem");
report(/<p class="disclosure-note">INFINITIX 是後端白牌技術平台合作夥伴，不是客戶的締約或開票主體。<\/p>/.test(cloudEcosystem), "ai-cloud-services.html: approved low-level INFINITIX relationship disclosure is missing");
report(count(cloud, /INFINITIX/g) === 1, "ai-cloud-services.html: INFINITIX must appear only once in the low-level ecosystem disclosure");

const paymentTermSectionIds = [
  "terms-introduction",
  "terms-card-binding",
  "terms-card-unbinding",
  "terms-card-expiration",
  "terms-card-replacement",
  "terms-payment",
  "terms-postpaid",
  "terms-settlement",
  "terms-refunds",
  "terms-company-information",
];
report(cloud.includes('href="payment-terms.html"') && cloud.includes("data-payment-terms-open"), "ai-cloud-services.html: progressive payment terms link is missing");
report(cloud.includes("信用卡付款與訂閱條款") && cloud.includes("查看信用卡綁定、按量結算、扣款與退款的完整說明。"), "ai-cloud-services.html: approved payment terms entry copy is missing");
report(/<dialog class="payment-terms-dialog"[^>]*aria-labelledby="payment-terms-dialog-title"[^>]*data-payment-terms-dialog>/.test(cloud), "ai-cloud-services.html: native payment terms dialog is missing");
report(cloud.includes('id="payment-terms-dialog-title" tabindex="-1">信用卡付款說明</'), "ai-cloud-services.html: payment terms dialog initial focus title is missing");
report(cloud.includes("data-payment-terms-close") && cloud.includes("data-payment-terms-scroll"), "ai-cloud-services.html: payment terms dialog close/scroll hooks are missing");
report(cloud.includes("本視窗只供閱覽，不取得同意、綁卡、訂閱或付款。"), "ai-cloud-services.html: payment terms Prototype notice is missing");

report(/<meta\s+name="robots"\s+content="noindex, nofollow">/.test(paymentTerms), "payment-terms.html: Prototype terms page must be noindex, nofollow");
report(paymentTerms.includes("<title>信用卡付款說明｜SiGTRON</title>") && paymentTerms.includes("<h1>信用卡付款說明</h1>"), "payment-terms.html: title or H1 is incorrect");
report(paymentTerms.includes("本頁只供閱覽，不取得同意、綁卡、訂閱或付款。"), "payment-terms.html: permanent-page Prototype notice is missing");

for (const sectionId of paymentTermSectionIds) {
  report(count(cloud, new RegExp(`id="${sectionId}"`, "g")) === 1, `ai-cloud-services.html: payment terms dialog must contain one #${sectionId}`);
  report(count(paymentTerms, new RegExp(`id="${sectionId}"`, "g")) === 1, `payment-terms.html: permanent terms must contain one #${sectionId}`);
  report(cloud.includes(`href="#${sectionId}"`), `ai-cloud-services.html: dialog TOC is missing #${sectionId}`);
  report(paymentTerms.includes(`href="#${sectionId}"`), `payment-terms.html: permanent TOC is missing #${sectionId}`);
}

const extractTermsText = (html) => {
  const content = html.match(/<article class="payment-terms-content" data-payment-terms-content>([\s\S]*?)<\/article>/)?.[1] ?? "";
  return content
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
};
const dialogTermsText = extractTermsText(cloud);
const permanentTermsText = extractTermsText(paymentTerms);
report(Boolean(dialogTermsText) && dialogTermsText === permanentTermsText, "payment terms: dialog and permanent-page text must remain identical");
const dialogTermsMarkup = cloud.match(/<article class="payment-terms-content" data-payment-terms-content>([\s\S]*?)<\/article>/)?.[1] ?? "";
const permanentTermsMarkup = paymentTerms.match(/<article class="payment-terms-content" data-payment-terms-content>([\s\S]*?)<\/article>/)?.[1] ?? "";
report(count(dialogTermsMarkup, /<p>/g) === 24 && count(permanentTermsMarkup, /<p>/g) === 24, "payment terms: approved 24-paragraph original must remain intact in both presentations");

for (const requiredText of [
  "希格諾科技股份有限公司(以下簡稱「 希格諾公司」)係依據本服務條款提供信用卡綁定、付款、訂閱的相關服務。",
  "臺端授權希格諾公司透過金流公司之服務平台進行信用卡綁定，並取得由金流公司發出的支付憑證，該信用卡可用於未來支付本服務之所有服務費用。",
  "信用卡綁定過程中會進行小額驗證扣款 (例如 10 元授權驗證)，該金額會在驗證後取消授權，不予入帳。",
  "本服務採「先使用、後付款」之計費模式。",
  "本服務非固定週期扣款，而係依實際使用量進行結算。",
  "已使用之額度、服務時數、API 呼叫次數或其他已消耗之服務內容，均視為已履行之服務，不得申請退款。",
  "希格諾科技股份有限公司 © SignalPro Technology CO., LTD. All Rights Reserved. 統一編號 Tax ID number : 95464633",
]) {
  report(dialogTermsText.includes(requiredText), `payment terms: approved original text is missing: ${requiredText}`);
}

for (const staleStatus of ["建置中", "正在建置", "逐步建立", "依進度公布", "待正式公布"]) {
  report(!`${home}\n${cloud}`.includes(staleStatus), `AI cloud content contains outdated status: ${staleStatus}`);
}

report(contact.includes("data-prototype-form"), "contact.html: prototype form hook is missing");
report(count(contact, /<fieldset\b/g) === 4, "contact.html: form must contain the approved 01–04 fieldsets");
report(contact.includes("data-error-summary") && contact.includes("data-error-list"), "contact.html: accessible error summary is missing");
report(contact.includes('option value="aidc"') && contact.includes('option value="compute"'), "contact.html: CTA inquiry types are missing");
const approvedContactCopy = [
  "SiGTRON 為對外服務品牌；AIDC 與 AI 雲端服務的正式報價、合約簽署及發票開立，均由希格諾科技股份有限公司（SignalPro Technology CO., LTD.）辦理。",
  "本頁為靜態 Prototype，不會將您輸入的資料傳送至 SiGTRON、希格諾科技或任何表單服務商。請勿填入真實個人資料；正式網站的資料傳送機制與完整個資告知將於上線前完成。",
  "我已閱讀 Prototype 說明；此勾選僅供表單流程展示，資料不會送出。",
  "欄位檢查完成。此為靜態 Prototype，資料未送出。",
];
for (const approvedCopy of approvedContactCopy) {
  report(count(contact, new RegExp(escapeRegExp(approvedCopy), "g")) === 1, `contact.html: approved Contact copy is missing or duplicated: ${approvedCopy}`);
}
report(contact.includes("<legend><span>04</span>需求摘要與 Prototype 示意確認</legend>"), "contact.html: fieldset 04 must be a Prototype demonstration confirmation");
report(contact.includes('id="prototype-confirmation"') && contact.includes('id="prototype-confirmation-error"'), "contact.html: Prototype confirmation checkbox/error hooks are missing");
report(contact.indexOf(approvedContactCopy[0]) < contact.indexOf(approvedContactCopy[1]) && contact.indexOf(approvedContactCopy[1]) < contact.indexOf("data-prototype-form"), "contact.html: transaction identity and Prototype warning must appear in order before the form");
report(count(combined, new RegExp(escapeRegExp(approvedContactCopy[0]), "g")) === 1, "prototype: transaction identity statement must appear only on Contact");
const approvedContactFallback = '本表單不會傳送資料。如需聯絡，請撥 <a href="tel:072695198">07-2695198</a> 或寄信至 <a href="mailto:sales@signalpro.com.tw">sales@signalpro.com.tw</a>。';
report(count(contact, /class="contact-fallback"/g) === 1 && contact.includes(approvedContactFallback), "contact.html: approved non-form contact fallback is missing or duplicated");
report(contact.indexOf(approvedContactCopy[1]) < contact.indexOf(approvedContactFallback) && contact.indexOf(approvedContactFallback) < contact.indexOf("data-prototype-form"), "contact.html: fallback contact must follow the disclosures and precede the form");
const contactFallbackMarkup = contact.match(/<p class="contact-fallback"[^>]*>[\s\S]*?<\/p>/)?.[0] ?? "";
report(Boolean(contactFallbackMarkup) && !/class="button/.test(contactFallbackMarkup), "contact.html: fallback contact must not be styled as a large CTA");

for (const contactPlaceholder of ["地址：[待補]", "電話：[待補]", "Email：[待補]"]) {
  report(!combined.includes(contactPlaceholder), `prototype contains obsolete Footer contact placeholder: ${contactPlaceholder}`);
}
for (const responsePromise of [/\d+\s*(?:小時|工作天|天)內回覆/, /保證[^。]{0,20}回覆/, /承諾[^。]{0,20}回覆時效/]) {
  report(!responsePromise.test(combined), `prototype contains an unapproved response-time promise: ${responsePromise}`);
}

for (const obsoleteCopy of [
  "品牌關係建議",
  "待公司最終核准",
  "SiGTRON. All rights reserved.",
  "希格諾科技股份有限公司｜SignalPro Technology",
  "我同意 SiGTRON",
  "正式個資條款與連結仍待公司提供",
]) {
  report(!combined.includes(obsoleteCopy), `prototype contains obsolete legal/brand copy: ${obsoleteCopy}`);
}

report(/<meta\s+name="robots"\s+content="noindex, nofollow">/.test(news), "news.html: template listing must be noindex, nofollow");
report(count(news, /assets\/js\/news\.js/g) === 1, "news.html: listing filters must load news.js exactly once");
report(news.includes('data-content-status="template"') && news.includes("版型示意｜非已發布內容"), "news.html: prominent template status is missing");
report(news.includes("<title>新聞與活動｜SiGTRON</title>") && news.includes("<h1>新聞與活動</h1>"), "news.html: neutral template-stage title/H1 is missing");
report(count(news, /本區將彙整 SiGTRON 經核准公開的公司公告、專案動態、活動資訊與媒體報導。/g) >= 2, "news.html: neutral meta/lead copy is missing");
report(news.includes('assets/images/news/news-editorial-banner.svg') && /news-editorial-banner\.svg"[^>]*alt=""/.test(news), "news.html: decorative editorial banner or empty alt is missing");
report(/class="news-filter"[^>]*data-news-filters[^>]*hidden/.test(news), "news.html: filters must remain hidden until JavaScript initializes");
report(/class="news-filter"[^>]*role="group"/.test(news), "news.html: filters must expose group semantics");
report(/data-news-results-count[^>]*aria-live="polite"[^>]*aria-atomic="true"/.test(news), "news.html: result count must be atomic");
report(news.includes("data-news-results-count") && news.includes("data-news-empty"), "news.html: result count or empty state is missing");
report(news.includes("洽談專案") && news.includes("了解 AIDC 建置"), "news.html: approved dual CTA is missing");
report(count(news, /data-news-card/g) === 4, "news.html: listing template must contain four schematic cards");
for (const category of ["company", "project", "event", "media"]) {
  report(count(news, new RegExp(`data-category="${category}"`, "g")) === 1, `news.html: expected one ${category} template card`);
  report(news.includes(`data-news-filter="${category}"`), `news.html: missing ${category} filter`);
}
report(news.includes('data-news-filter="all"'), "news.html: missing all filter");
report(/<ul class="news-grid" data-news-grid>/.test(news) && count(news, /<li data-news-card data-category=/g) === 4, "news.html: News Grid must use list semantics");
report(news.includes('data-news-empty-all hidden'), "news.html: all-content empty state is missing");
report(count(news, /<time class="news-date">\[YYYY\.MM\.DD\]<\/time>/g) === 4, "news.html: schematic dates must use time without datetime");
report(!/<time\b[^>]*datetime=/i.test(news), "news.html: schematic time elements must not have fake datetime values");
report(count(news, /正式發布時，time 必須加入 datetime="YYYY-MM-DD"。/g) === 4, "news.html: date maintenance comments are missing");
report(!news.includes("查看原始報導 →"), "news.html: schematic media card must use the internal Reading CTA");

report(/<meta\s+name="robots"\s+content="noindex, nofollow">/.test(article), "article-template.html: template article must be noindex, nofollow");
report(article.includes('data-content-status="template"') && article.includes("文章版型示意｜非已發布內容"), "article-template.html: prominent template status is missing");
for (const commentLabel of ["[必填]", "[選填]", "[EVENT ONLY]", "[MEDIA ONLY]", "[發布前移除]"]) {
  report(article.includes(`<!-- ${commentLabel}`), `article-template.html: missing ${commentLabel} HTML comment`);
}
for (const relativePath of ["../assets/css/styles.css", "../assets/js/main.js", "../index.html", "../news.html", "../contact.html#project-inquiry"]) {
  report(article.includes(relativePath), `article-template.html: missing nested relative path ${relativePath}`);
}
report(article.includes("article-header") && article.includes("article-layout") && article.includes("article-body"), "article-template.html: article structure is incomplete");
report(article.includes('aside class="fact-panel"') && article.includes("fact-panel__variant"), "article-template.html: Fact Panel variants are missing");
report(article.includes("活動資訊 variant") && article.includes("媒體報導 variant"), "article-template.html: event/media visual variants are missing");
report(article.includes("article-figure") && article.includes("article-return"), "article-template.html: optional Figure or return link is missing");
report(count(article, /<time\b/g) >= 4 && !/<time\b[^>]*datetime=/i.test(article), "article-template.html: template dates must use time without fake datetime values");
report(count(article, /正式發布時，time 必須加入 datetime=/g) >= 4, "article-template.html: date maintenance comments are missing");

const pagePairs = [
  ["index.html", "en/index.html", "en/index.html", "../index.html"],
  ["aidc.html", "en/aidc.html", "en/aidc.html", "../aidc.html"],
  ["ai-cloud-services.html", "en/ai-cloud-services.html", "en/ai-cloud-services.html", "../ai-cloud-services.html"],
  ["contact.html", "en/contact.html", "en/contact.html", "../contact.html"],
  ["news.html", "en/news.html", "en/news.html", "../news.html"],
  ["payment-terms.html", "en/payment-terms.html", "en/payment-terms.html", "../payment-terms.html"],
  ["news/article-template.html", "en/news/article-template.html", "../en/news/article-template.html", "../../news/article-template.html"],
];
for (const [zhPage, enPage, zhToEn, enToZh] of pagePairs) {
  report(count(contents.get(zhPage), new RegExp(`href="${escapeRegExp(zhToEn)}"`, "g")) === 3, `${zhPage}: language links must point to ${zhToEn} in Header, Drawer, and Footer`);
  report(count(contents.get(enPage), new RegExp(`href="${escapeRegExp(enToZh)}"`, "g")) === 3, `${enPage}: language links must point to ${enToZh} in Header, Drawer, and Footer`);
}

const metadataPairs = [
  [home, "https://sigtron.ai/", "https://sigtron.ai/en/"],
  [aidc, "https://sigtron.ai/aidc/", "https://sigtron.ai/en/aidc/"],
  [cloud, "https://sigtron.ai/ai-cloud-services/", "https://sigtron.ai/en/ai-cloud-services/"],
  [contact, "https://sigtron.ai/contact/", "https://sigtron.ai/en/contact/"],
  [enHome, "https://sigtron.ai/en/", "https://sigtron.ai/"],
  [enAidc, "https://sigtron.ai/en/aidc/", "https://sigtron.ai/aidc/"],
  [enCloud, "https://sigtron.ai/en/ai-cloud-services/", "https://sigtron.ai/ai-cloud-services/"],
  [enContact, "https://sigtron.ai/en/contact/", "https://sigtron.ai/contact/"],
];
for (const [html, canonical, counterpart] of metadataPairs) {
  report(html.includes(`<link rel="canonical" href="${canonical}">`), `${canonical}: missing self-canonical`);
  report(html.includes(`hreflang="zh-Hant"`) && html.includes(`hreflang="en"`) && html.includes(`hreflang="x-default"`), `${canonical}: incomplete hreflang set`);
  report(html.includes(`href="${counterpart}"`), `${canonical}: missing reciprocal locale URL`);
}
for (const [page, html] of [["news.html", news], ["news/article-template.html", article], ["payment-terms.html", paymentTerms], ["en/news.html", enNews], ["en/news/article-template.html", enArticle], ["en/payment-terms.html", enPayment]]) {
  report(/<meta\s+name="robots"\s+content="noindex, nofollow">/.test(html), `${page}: review/template page must be noindex, nofollow`);
  report(!/<link\s+rel="alternate"\s+hreflang=/i.test(html), `${page}: noindex review/template page must not emit public hreflang metadata`);
}

for (const fixedName of ["SiGTRON", "SignalPro Technology CO., LTD."]) {
  report(enHome.includes(fixedName), `en/index.html: missing fixed name ${fixedName}`);
}
report(/Powered by[\s\S]{0,240}SignalPro/.test(enHome), "en/index.html: missing fixed secondary brand signature Powered by SignalPro");
report(enHome.includes("From AIDC delivery to enterprise AI compute services."), "en/index.html: controlled H1 is missing");
report(enHome.includes("The SiGTRON flagship AIDC site in Xinshi, Tainan is in trial operation. The project currently plans to deploy 72 NVIDIA HGX B300 compute nodes and a VAST Data high-speed storage solution, with commercial operation targeted for Q4 2026. Final configuration and timing remain subject to project progress and acceptance results."), "en/index.html: fixed Xinshi status paragraph is missing");
report(enHome.includes("Approximately 800 MW is the potential aggregate capacity of opportunities currently under discussion and planning. It does not represent contracted, built, deployed, or operational capacity."), "en/index.html: fixed pipeline capacity qualification is missing");
report(enHome.includes("Planning directions include NVIDIA HGX B300, NVIDIA GB300 NVL72, and the next-generation NVIDIA Vera Rubin platform. Vera Rubin is a future planning direction and is not currently deployed."), "en/index.html: fixed platform-planning qualification is missing");
report(enHome.includes("No News &amp; Events content is currently approved for publication") && !enHome.includes("[Approved company announcement title]"), "en/index.html: English Home must use the approved News zero state without placeholder cards");
report(enHome.includes("No customer or partner identities are currently approved for publication") && !enHome.includes("Customer / Partner Logo"), "en/index.html: English Home must use the approved partner zero state");

report(enAidc.includes("SiGTRON coordinates integrated AIDC delivery with specialist partners across the agreed project scope, from site assessment and design through infrastructure, GPU compute clusters, platform integration, testing, acceptance, and operations and maintenance."), "en/aidc.html: controlled AIDC scope sentence is missing");
report(count(enAidc, /class="process-rail-motion__node" aria-hidden="true"/g) === 6, "en/aidc.html: six delivery motion nodes are required");
report(enAidc.includes("Do not infer service availability from the six-market project pipeline."), "en/aidc.html: regional availability guardrail is missing");

report(count(enCloud, /Platform online/g) >= 3, "en/ai-cloud-services.html: platform-online status is not repeated with the service context");
report(count(enCloud, /depend on account permissions and project-specific configurations/g) >= 6, "en/ai-cloud-services.html: account/project limitations are not sufficiently explicit");
report(enCloud.includes("SignalPro Technology CO., LTD. operates the platform under the SiGTRON brand, manages customer accounts, and provides customer-facing services. INFINITIX is the backend white-label technology platform partner and is not the contracting or invoicing entity for SiGTRON customers."), "en/ai-cloud-services.html: fixed ecosystem relationship is missing");
report(enCloud.includes("Payment and subscription information — English legal translation pending"), "en/ai-cloud-services.html: safe payment status link is missing");
report(!enCloud.includes("data-payment-terms-open") && !enCloud.includes("data-payment-terms-dialog") && !/<dialog\b/i.test(enCloud), "en/ai-cloud-services.html: unapproved English terms dialog must not be enabled");

const paymentRequired = [
  "English legal translation pending company and legal approval. No approved English terms are available on this page, and this page must not be used to obtain consent or complete a transaction.",
  "Pending company and legal approval",
  "Company/legal confirmation required",
  "[Legal input required]",
  "Not available in this static prototype",
  "The company/legal team has not yet identified the Chinese source version for production use.",
  "No consent or transaction on this page",
];
for (const text of paymentRequired) report(enPayment.includes(text), `en/payment-terms.html: missing controlled status copy: ${text}`);
for (const forbiddenMarkup of [/<form\b/i, /<dialog\b/i, /<input\b/i, /<select\b/i, /<textarea\b/i, /payment-terms-toc/, /payment-terms-content/]) {
  report(!forbiddenMarkup.test(enPayment), `en/payment-terms.html: prohibited legal/transaction UI found: ${forbiddenMarkup}`);
}
report(!enPayment.includes("View Chinese source text</a>"), "en/payment-terms.html: Chinese-source CTA must remain absent until legal approval");

const enContactRequired = [
  "SiGTRON is the customer-facing service brand. Formal quotations and invoices for AIDC and AI cloud services are issued by, and contracts are entered into with, SignalPro Technology CO., LTD.",
  "This is a static prototype. Information entered here is not sent to SiGTRON, SignalPro Technology CO., LTD., or any form service provider. Do not enter personal information. The production site's data-submission process and full privacy notice must be completed and approved before launch.",
  "This form does not submit data. To contact us, call",
  "Field validation is complete. This is a static prototype; no data was submitted.",
];
for (const text of enContactRequired) report(enContact.includes(text), `en/contact.html: missing controlled no-send copy: ${text}`);
report(/<button class="button button--primary" type="button" data-prototype-check>Check fields — prototype only<\/button>/.test(enContact), "en/contact.html: prototype check action must be type=button");
report(!/<form\b[^>]*(?:action|method|formaction)=/i.test(enContact), "en/contact.html: form must not expose a submission target");
report(enContact.indexOf("SiGTRON is the customer-facing service brand.") < enContact.indexOf("data-prototype-form"), "en/contact.html: contracting disclosure must precede fields");

report(enNews.includes("Layout preview — not published content") && count(enNews, /data-news-card/g) === 4, "en/news.html: explicit four-card prototype layout state is missing");
report(enNews.includes("No News &amp; Events content is currently approved for publication"), "en/news.html: formal zero state is missing");
report(enArticle.includes("Article layout preview — not published content") && enArticle.includes('data-content-status="template"'), "en/news/article-template.html: template publication gate is missing");
for (const relativePath of ["../../assets/css/styles.css", "../../assets/js/main.js", "../index.html", "../news.html", "../contact.html#project-inquiry", "../../news/article-template.html"]) {
  report(enArticle.includes(relativePath), `en/news/article-template.html: missing nested relative path ${relativePath}`);
}

const prohibitedClaims = [
  /99\.9+%/i,
  /SOC\s*2/i,
  /HIPAA/i,
  /ISO\s*27001/i,
  /全球第一/,
  /首座/,
  /最低成本/,
  /免費試用/,
  /立即購買/,
];
for (const claim of prohibitedClaims) {
  report(!claim.test(combined), `prototype contains prohibited or unapproved claim: ${claim}`);
}

report(!/<script\b[^>]*src="https?:/i.test(combined), "prototype must not load external JavaScript");
report(!/<link\b[^>]*rel="(?:stylesheet|preload)"[^>]*href="https?:/i.test(combined), "prototype must not load external stylesheets or fonts");
report(!/tailwind|bootstrap|react|vue|svelte|gsap|animejs|anime\.js|swiper|slick/i.test(combined), "prototype contains a prohibited framework/library reference");

const cssPath = path.join(projectRoot, "assets", "css", "styles.css");
const mainJsPath = path.join(projectRoot, "assets", "js", "main.js");
const newsJsPath = path.join(projectRoot, "assets", "js", "news.js");
const css = await fs.readFile(cssPath, "utf8");
const js = await fs.readFile(mainJsPath, "utf8");
const newsJs = await fs.readFile(newsJsPath, "utf8");
const runtimeSources = `${css}\n${js}\n${newsJs}`;

report(!/animejs|anime\.js|anime\.umd|gsap|swiper|slick/i.test(runtimeSources), "prototype runtime contains a prohibited motion/carousel library");

const tabletCss = css.slice(css.indexOf("@media (min-width: 768px)"), css.indexOf("@media (min-width: 1120px)"));
const desktopCss = css.slice(css.indexOf("@media (min-width: 1120px)"), css.indexOf("@media (min-width: 1280px)"));
const wideDesktopCss = css.slice(css.indexOf("@media (min-width: 1280px)"), css.indexOf("@media (max-width: 767px)"));
const bodyCss = css.match(/(?:^|\n)body\s*\{[^}]*\}/)?.[0] ?? "";
const drawerCss = css.match(/\.site-drawer\s*\{[^}]*\}/)?.[0] ?? "";
const mobileCss = css.slice(css.indexOf("@media (max-width: 767px)"));
const mobilePaymentDialogCss = mobileCss.match(/\.payment-terms-dialog\s*\{[^}]*\}/)?.[0] ?? "";
const videoPlayCss = css.match(/\.video-play\s*\{[^}]*\}/)?.[0] ?? "";
const poweredByCss = css.match(/\.powered-by\s*\{[^}]*\}/)?.[0] ?? "";

report(count(css, /{/g) === count(css, /}/g), "styles.css: brace mismatch");
report(css.includes("@media (min-width: 768px)"), "styles.css: missing 768px tablet breakpoint");
report(css.includes("@media (min-width: 1120px)"), "styles.css: missing 1120px desktop breakpoint");
report(css.includes("--header-compact: 64px") && css.includes("--header-desktop: 72px"), "styles.css: missing approved header heights");
report(!/min-width\s*:/.test(bodyCss), "styles.css: body must not impose a viewport minimum width");
report(!/overflow-x\s*:/.test(bodyCss), "styles.css: body must not mask horizontal overflow");
report(!/\b100vw\b/.test(css), "styles.css: viewport-width units must not size the Drawer or payment dialog");
report(/width:\s*100%/.test(drawerCss) && /max-width:\s*none/.test(drawerCss), "styles.css: mobile Drawer must use containing-block width");
report(/\.site-drawer\s*\{[^}]*width:\s*22\.5rem[^}]*max-width:\s*100%/.test(tabletCss), "styles.css: tablet Drawer must cap its 360px width to the containing block");
report(/width:\s*100%/.test(mobilePaymentDialogCss) && /max-width:\s*100%/.test(mobilePaymentDialogCss) && /height:\s*100dvh/.test(mobilePaymentDialogCss), "styles.css: mobile payment dialog must fill its containing block without 100vw overflow");
report(css.includes(".header-inner > *") && css.includes(".article-layout > *") && /\.process-rail__step\s*>\s*\*\s*\{[^}]*min-width:\s*0/.test(css), "styles.css: reusable grid/flex children need min-width: 0 reflow protection");
report(/max-width:\s*calc\(100% - 2rem\)/.test(videoPlayCss) && !/white-space:\s*nowrap/.test(videoPlayCss), "styles.css: video play control must wrap within the viewport");
report(/max-width:\s*100%/.test(poweredByCss) && /flex-wrap:\s*wrap/.test(poweredByCss) && !/white-space:\s*nowrap/.test(poweredByCss), "styles.css: Powered by content must reflow instead of forcing one line");
report(!css.includes(".header-cta"), "styles.css: obsolete Header project CTA rules remain");
report(/\.drawer-actions \.button\s*\{[\s\S]*?width:\s*100%[\s\S]*?min-height:\s*3rem/.test(css), "styles.css: Drawer login must be full width and at least 3rem high");
report(!/\.header-login\s*\{[\s\S]*?display:\s*inline-flex/.test(tabletCss), "styles.css: Console login must remain inside the Drawer below 1120px");
report(/\.brand img\s*\{[\s\S]*?width:\s*8\.5rem/.test(desktopCss), "styles.css: 1120-1279 compact Logo width is incorrect");
report(/\.desktop-nav\s*\{[\s\S]*?gap:\s*0\.25rem/.test(desktopCss) && /\.desktop-nav \.nav-link\s*\{[\s\S]*?font-size:\s*0\.9375rem/.test(desktopCss), "styles.css: 1120-1279 desktop navigation fit budget is incorrect");
report(/\.header-actions\s*\{[\s\S]*?gap:\s*0\.5rem[\s\S]*?margin-left:\s*0\.25rem/.test(desktopCss), "styles.css: 1120-1279 Header action spacing is incorrect");
report(/\.header-login\s*\{[\s\S]*?min-width:\s*7rem[\s\S]*?padding-inline:\s*0\.5rem/.test(desktopCss), "styles.css: 1120-1279 Console login fit budget is incorrect");
report(/\.language-selector\s*\{[\s\S]*?display:\s*inline-flex[\s\S]*?width:\s*5\.8125rem/.test(desktopCss), "styles.css: desktop compact language selector is missing");
report(/\.brand img\s*\{[\s\S]*?width:\s*10\.875rem/.test(wideDesktopCss) && /\.desktop-nav\s*\{[\s\S]*?gap:\s*clamp\(0\.875rem, 1\.3vw, 1\.25rem\)/.test(wideDesktopCss), "styles.css: 1280px Header spacing restoration is missing");
report(css.includes(".drawer-language") && css.includes(".footer-language"), "styles.css: Drawer/Footer full-name language navigation styles are missing");
report(/body\.nav-open[\s\S]*?overflow:\s*hidden/.test(css), "styles.css: drawer scroll lock style is missing");
report(css.includes(":focus-visible"), "styles.css: visible keyboard focus style is missing");
report(css.includes("prefers-reduced-motion"), "styles.css: reduced-motion handling is missing");
report(css.includes("--color-subtle: #536779"), "styles.css: subtle text color does not meet the approved contrast baseline");
report(css.includes(".process-rail-shell > .process-rail"), "styles.css: AIDC-only Process Rail border override is missing");
report(css.includes(".process-rail-motion__line") && css.includes(".process-rail-motion__node"), "styles.css: Process Rail motion decoration styles are missing");
report(!/data-motion-[^{]+\{[^}]*opacity:\s*0/is.test(css), "styles.css: motion hooks must remain visible by default");
for (const decoration of [/linear-gradient\(/i, /radial-gradient\(/i, /backdrop-filter\s*:/i, /@keyframes\b/i]) {
  report(!decoration.test(css), `styles.css: prohibited heavy visual treatment remains: ${decoration}`);
}

report(/\.news-filter\s*\{[\s\S]*?flex-wrap:\s*wrap/.test(css), "styles.css: News filters must use flex-wrap");
report(!/\.news-rail/.test(css), "styles.css: obsolete Homepage News Rail rules remain");
report(/\.featured-news-grid\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0, 1fr\)/.test(css), "styles.css: mobile one-column featured News Grid is missing");
report(/@media \(min-width: 768px\)[\s\S]*?\.featured-news-grid\s*\{[\s\S]*?repeat\(2/.test(css), "styles.css: tablet two-column featured News Grid is missing");
report(/@media \(min-width: 1120px\)[\s\S]*?\.featured-news-grid\s*\{[\s\S]*?repeat\(3/.test(css), "styles.css: desktop three-column featured News Grid is missing");
report(/\.news-grid\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0, 1fr\)/.test(css), "styles.css: mobile one-column News Grid is missing");
report(/@media \(min-width: 768px\)[\s\S]*?\.news-grid\s*\{[\s\S]*?repeat\(2/.test(css), "styles.css: tablet two-column News Grid is missing");
report(/@media \(min-width: 1120px\)[\s\S]*?\.news-grid\s*\{[\s\S]*?repeat\(3/.test(css), "styles.css: desktop three-column News Grid is missing");
report(css.includes("aspect-ratio: 16 / 9") && css.includes(".news-card__type-plate"), "styles.css: 16:9 News Card media/type plate is missing");
report(css.includes(".article-layout") && css.includes("position: sticky") && css.includes(".fact-panel"), "styles.css: responsive Article 8/4 and sticky Fact Panel styles are missing");
report(css.includes(".payment-terms-dialog::backdrop") && css.includes("body.terms-dialog-open"), "styles.css: payment terms backdrop or body scroll lock is missing");
report(/\.payment-terms-dialog__scroll\s*\{[\s\S]*?overflow-y:\s*auto/.test(css), "styles.css: payment terms dialog needs one internal scrolling region");
report(/\.payment-terms-content\s*\{[\s\S]*?max-width:\s*70ch/.test(css), "styles.css: payment terms reading measure must be 70ch");
report(/@media \(min-width: 1120px\)[\s\S]*?\.payment-terms-layout\s*\{[\s\S]*?grid-template-columns:/.test(css), "styles.css: payment terms desktop TOC/content layout is missing");
report(/@media \(max-width: 767px\)[\s\S]*?\.payment-terms-dialog\s*\{[\s\S]*?width:\s*100%[\s\S]*?max-width:\s*100%[\s\S]*?height:\s*100dvh/.test(css), "styles.css: payment terms mobile full-screen dialog is missing");
report(/@media print[\s\S]*?\.payment-terms-content\s*\{/.test(css), "styles.css: payment terms print layout is missing");
report(css.includes(".contact-entity-note") && css.includes(".contact-prototype-notice"), "styles.css: distinct Contact transaction/Prototype disclosure hierarchy is missing");
report(/\.footer-contact\s*\{[\s\S]*?font-style:\s*normal[\s\S]*?overflow-wrap:\s*anywhere/.test(css), "styles.css: semantic Footer address reset/wrapping is missing");
report(/\.footer-contact\s*>\s*\*\s*\{[\s\S]*?min-height:\s*2\.75rem/.test(css), "styles.css: Footer contact targets must be at least 44px high");
report(/\.contact-fallback\s+a\s*\{[\s\S]*?min-height:\s*2\.75rem[\s\S]*?overflow-wrap:\s*anywhere/.test(css), "styles.css: Contact fallback links need accessible sizing and wrapping");
report(/\.footer-legal\s*\{[\s\S]*?overflow-wrap:\s*anywhere/.test(css), "styles.css: legal Footer copy needs robust wrapping");
report(/@media \(min-width: 768px\)[\s\S]*?\.footer-bottom\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0, 1fr\) minmax\(0, max-content\)/.test(css), "styles.css: responsive two-part Footer layout is missing");
report(/\.featured-news-grid\s*\{[\s\S]*?list-style:\s*none/.test(css) && /\.news-grid\s*\{[\s\S]*?list-style:\s*none/.test(css), "styles.css: News lists must reset native list styling");
report(/\.news-card\s*\{[\s\S]*?transition:[^;}]*border-color[^;}]*box-shadow/.test(css) && /\.news-card:hover\s*\{[\s\S]*?border-color:[^;}]*--color-brand-600[\s\S]*?box-shadow:[^;}]*--shadow-interactive/.test(css), "styles.css: restrained News Card hover treatment is missing");
report(/@media \(min-width: 768px\)[\s\S]*?height:\s*clamp\(15rem, 25vw, 16\.25rem\)/.test(css), "styles.css: tablet News banner height is incorrect");
report(/@media \(min-width: 1120px\)[\s\S]*?\.news-editorial-banner\s*\{[\s\S]*?aspect-ratio:\s*4 \/ 1[\s\S]*?max-height:\s*20rem/.test(css), "styles.css: desktop 4:1 News banner is missing");
report(css.includes(".legal-status-banner") && css.includes(".review-status-list"), "styles.css: English payment review-status components are missing");
report(!/line-clamp|text-overflow:\s*ellipsis/i.test(css), "styles.css: controlled English copy must not be clamped or ellipsized");

for (const behavior of ["Escape", "pointerdown", "nav-open", "aria-hidden", "IntersectionObserver", 'event.key !== "Tab"']) {
  report(js.includes(behavior), `main.js: missing navigation behavior ${behavior}`);
}
report(js.includes("samePageTarget") && js.includes("preventScroll"), "main.js: same-page drawer links do not restore meaningful focus");
report(js.includes("location.protocol") && js.includes("youtube.com/embed"), "main.js: progressive YouTube enhancement is missing");
report(js.includes("data-error-summary") && js.includes("aria-invalid"), "main.js: form error handling is missing");
report(js.includes("data-prototype-check") && js.includes('addEventListener("click", validateForm)'), "main.js: type=button prototype validation hook is missing");
report(js.includes('addEventListener("submit", (event) => event.preventDefault())'), "main.js: form submit network guard is missing");
report(!/fetch\s*\(|XMLHttpRequest|sendBeacon|\.submit\s*\(/.test(js), "main.js: prototype form contains a network/submission mechanism");
for (const message of ["Enter your name.", "Enter your company name.", "Enter a valid email address.", "Select an inquiry type.", "Provide a brief summary of your requirement.", "Confirm that you understand this is a non-submitting prototype."]) {
  report(js.includes(message), `main.js: missing controlled English validation message: ${message}`);
}
report(js.includes("URLSearchParams") && js.includes("requestedType"), "main.js: inquiry type preselection is missing");
const reducedMotionGuard = js.indexOf("if (reducedMotion.matches) return;");
const approvedMotionObserver = js.indexOf("const motionObserver = new IntersectionObserver");
report(reducedMotionGuard >= 0 && approvedMotionObserver > reducedMotionGuard, "main.js: approved motion must return before creating its observer");
report(js.includes('"animate" in Element.prototype'), "main.js: native Element.animate() capability guard is missing");
report(count(js, /\.animate\(/g) >= 3, "main.js: approved native WAAPI animations are missing");
report(js.includes("threshold: 0.2") && js.includes('rootMargin: "0px 0px -10% 0px"'), "main.js: approved motion observer settings are missing");
report(js.includes("observer.unobserve(entry.target)"), "main.js: approved motion observer must unobserve immediately");
report(count(js, /fill:\s*"backwards"/g) >= 3, "main.js: approved animations must use backwards fill");
report(js.includes("willChange") && js.includes('removeProperty("will-change")'), "main.js: temporary will-change cleanup is missing");
for (const behavior of ["data-payment-terms-dialog", "showModal", "data-payment-terms-close", "terms-dialog-open", 'addEventListener("close"', "event.target === paymentTermsDialog", "paymentTermsScroll.scrollTop = 0", "paymentTermsOpener.focus({ preventScroll: true })", "scrollIntoView", 'behavior: reducedMotion.matches ? "auto" : "smooth"']) {
  report(js.includes(behavior), `main.js: missing payment terms behavior ${behavior}`);
}

for (const behavior of ["data-news-filters", "aria-pressed", "URLSearchParams"]) {
  report(newsJs.includes(behavior), `news.js: missing required behavior ${behavior}`);
}
report(!/data-news-rail|scrollTo|setInterval|cloneNode|\.sort\(|autoplay|swiper|slick|splide|flickity/i.test(newsJs), "news.js: obsolete Rail or prohibited carousel behavior found");
report(newsJs.includes("filters.hidden = false"), "news.js: progressive filter initialization is missing");
report(newsJs.includes('card.hidden = !visible'), "news.js: filter visibility behavior is missing");
report(newsJs.includes('document.documentElement.lang === "en"') && newsJs.includes("not published content"), "news.js: English prototype filter/status copy is missing");
report(count(newsJs, /data-news-empty-all/g) === 1, "news.js: listing all-content empty-state hook is missing");
report(newsJs.includes("if (!cards.length)") && newsJs.includes("grid.hidden = true"), "news.js: zero-content listing fallback is missing");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Validated ${pages.length} pages: nested links, navigation, official contact details, News templates, payment terms parity, responsive CSS, approved disclosures, dependency limits and interaction hooks passed.`);
}
