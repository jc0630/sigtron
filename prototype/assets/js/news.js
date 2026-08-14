(() => {
  "use strict";

  const newsList = document.querySelector("[data-news-list]");
  if (!newsList) return;

  const filters = newsList.querySelector("[data-news-filters]");
  const filterButtons = Array.from(newsList.querySelectorAll("[data-news-filter]"));
  const cards = Array.from(newsList.querySelectorAll("[data-news-card]"));
  const resultsCount = newsList.querySelector("[data-news-results-count]");
  const grid = newsList.querySelector("[data-news-grid]");
  const emptyState = newsList.querySelector("[data-news-empty]");
  const emptyTitle = newsList.querySelector("[data-news-empty-title]");
  const emptyAll = newsList.querySelector("[data-news-empty-all]");
  const showAllButton = newsList.querySelector("[data-news-show-all]");
  const categories = new Set(["all", "company", "project", "event", "media"]);
  if (!filters || !filterButtons.length || !resultsCount || !grid || !emptyState || !emptyAll) return;

  if (!cards.length) {
    filters.hidden = true;
    resultsCount.hidden = true;
    grid.hidden = true;
    emptyState.hidden = true;
    emptyAll.hidden = false;
    return;
  }

  const isEnglish = document.documentElement.lang === "en";
  const categoryLabels = isEnglish
    ? { all: "All", company: "Company announcements", project: "Project updates", event: "Events", media: "Media coverage" }
    : { all: "全部", company: "公司公告", project: "專案動態", event: "活動資訊", media: "媒體報導" };

  const setAddressCategory = (category) => {
    const address = new URL(window.location.href);
    if (category === "all") address.searchParams.delete("category");
    else address.searchParams.set("category", category);
    window.history.replaceState({}, "", address);
  };

  const applyFilter = (category, updateAddress = true) => {
    const selectedCategory = categories.has(category) ? category : "all";
    let visibleCount = 0;

    cards.forEach((card) => {
      const visible = selectedCategory === "all" || card.dataset.category === selectedCategory;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    filterButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.newsFilter === selectedCategory));
    });

    resultsCount.textContent = isEnglish
      ? selectedCategory === "all"
        ? `${visibleCount} layout examples — not published content.`
        : `${categoryLabels[selectedCategory]}: ${visibleCount} layout ${visibleCount === 1 ? "example" : "examples"} — not published content.`
      : selectedCategory === "all"
        ? `共 ${visibleCount} 則版型示意`
        : `${categoryLabels[selectedCategory]}：${visibleCount} 則版型示意`;
    if (isEnglish && emptyTitle && selectedCategory !== "all") {
      emptyTitle.textContent = `No approved ${categoryLabels[selectedCategory].toLowerCase()} at this time`;
    }
    emptyState.hidden = visibleCount !== 0;
    if (updateAddress) setAddressCategory(selectedCategory);
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.newsFilter));
  });

  showAllButton?.addEventListener("click", () => {
    applyFilter("all");
    filterButtons[0].focus();
  });

  const requestedCategory = new URLSearchParams(window.location.search).get("category") || "all";
  filters.hidden = false;
  applyFilter(requestedCategory, false);
})();
