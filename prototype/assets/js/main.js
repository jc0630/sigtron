(() => {
  "use strict";

  const body = document.body;
  const header = document.querySelector("[data-site-header]");
  const menuToggle = document.querySelector("[data-nav-toggle]");
  const menuDrawer = document.querySelector("[data-site-nav]");
  const menuClose = document.querySelector("[data-nav-close]");
  const menuBackdrop = document.querySelector("[data-nav-backdrop]");
  const desktopNavigation = window.matchMedia("(min-width: 1120px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const isEnglish = document.documentElement.lang === "en";
  const menuLabels = isEnglish
    ? { open: "Open site menu", close: "Close site menu" }
    : { open: "開啟網站選單", close: "關閉網站選單" };
  let drawerCloseTimer;

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  const getFocusableElements = () => {
    if (!menuDrawer) return [];
    return Array.from(
      menuDrawer.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => !element.hasAttribute("hidden"));
  };

  const isDrawerOpen = () => menuToggle?.getAttribute("aria-expanded") === "true";

  const openDrawer = () => {
    if (!menuToggle || !menuDrawer || !menuBackdrop || desktopNavigation.matches) return;
    window.clearTimeout(drawerCloseTimer);
    menuDrawer.hidden = false;
    menuBackdrop.hidden = false;
    menuDrawer.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", menuLabels.close);
    body.classList.add("nav-open");

    window.requestAnimationFrame(() => {
      menuDrawer.classList.add("is-open");
      menuBackdrop.classList.add("is-open");
      menuClose?.focus();
    });
  };

  const closeDrawer = ({ restoreFocus = true, immediate = false } = {}) => {
    if (!menuToggle || !menuDrawer || !menuBackdrop) return;
    window.clearTimeout(drawerCloseTimer);
    menuDrawer.classList.remove("is-open");
    menuBackdrop.classList.remove("is-open");
    menuDrawer.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", menuLabels.open);
    body.classList.remove("nav-open");

    const finishClose = () => {
      menuDrawer.hidden = true;
      menuBackdrop.hidden = true;
      if (restoreFocus && !desktopNavigation.matches) menuToggle.focus();
    };

    if (immediate || reducedMotion.matches) {
      finishClose();
      return;
    }

    drawerCloseTimer = window.setTimeout(finishClose, 220);
  };

  const handleDrawerKeys = (event) => {
    if (!isDrawerOpen() || !menuDrawer) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeDrawer();
      return;
    }

    if (event.key !== "Tab") return;
    const focusableElements = getFocusableElements();
    if (!focusableElements.length) {
      event.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  if (menuToggle && menuDrawer && menuBackdrop) {
    menuToggle.addEventListener("click", () => {
      if (isDrawerOpen()) closeDrawer();
      else openDrawer();
    });

    menuClose?.addEventListener("click", () => closeDrawer());
    menuBackdrop.addEventListener("click", () => closeDrawer());
    document.addEventListener("keydown", handleDrawerKeys);

    document.addEventListener("pointerdown", (event) => {
      if (
        !isDrawerOpen() ||
        menuDrawer.contains(event.target) ||
        menuToggle.contains(event.target)
      ) {
        return;
      }
      closeDrawer();
    });

    menuDrawer.querySelectorAll("a[href]").forEach((link) => {
      link.addEventListener("click", () => {
        const targetUrl = new URL(link.href, window.location.href);
        const samePageTarget =
          targetUrl.pathname === window.location.pathname && targetUrl.hash
            ? document.querySelector(targetUrl.hash)
            : null;

        closeDrawer({ restoreFocus: false });
        if (samePageTarget instanceof HTMLElement) {
          window.setTimeout(() => samePageTarget.focus({ preventScroll: true }), 0);
        }
      });
    });

    desktopNavigation.addEventListener("change", () => {
      if (desktopNavigation.matches) closeDrawer({ restoreFocus: false, immediate: true });
    });
  }

  window.addEventListener("scroll", setHeaderState, { passive: true });
  setHeaderState();

  const scrollspyLinks = Array.from(document.querySelectorAll("[data-scrollspy-link]"));
  if (body.dataset.page === "home" && scrollspyLinks.length && "IntersectionObserver" in window) {
    const targets = Array.from(
      new Set(scrollspyLinks.map((link) => link.hash).filter(Boolean))
    )
      .map((hash) => document.querySelector(hash))
      .filter(Boolean);
    const visibleSections = new Map();

    const updateScrollspy = () => {
      const currentSection = Array.from(visibleSections.entries())
        .filter(([, visible]) => visible)
        .map(([section]) => section)
        .sort((a, b) => Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top))[0];

      scrollspyLinks.forEach((link) => {
        const active = Boolean(currentSection && link.hash === `#${currentSection.id}`);
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visibleSections.set(entry.target, entry.isIntersecting));
        updateScrollspy();
      },
      { rootMargin: "-88px 0px -58% 0px", threshold: [0, 0.1, 0.5] }
    );

    targets.forEach((target) => sectionObserver.observe(target));
  }

  const initApprovedMotion = () => {
    if (reducedMotion.matches) return;
    if (!("IntersectionObserver" in window) || !("animate" in Element.prototype)) return;

    const engineeringStack = document.querySelector("[data-motion-engineering-stack]");
    const processRail = document.querySelector("[data-motion-process-rail]");
    const motionTargets = [engineeringStack, processRail].filter(Boolean);
    if (!motionTargets.length) return;

    const clearWillChangeAfter = (element, animation) => {
      animation.finished
        .catch(() => {})
        .finally(() => element.style.removeProperty("will-change"));
    };

    const animateEngineeringStack = (stack) => {
      const items = Array.from(stack.querySelector("ol")?.children ?? []);
      const desktopMotion = window.matchMedia("(min-width: 768px)").matches;
      const distance = desktopMotion ? 8 : 6;
      const duration = desktopMotion ? 360 : 320;
      const stagger = desktopMotion ? 60 : 50;

      items.forEach((item, index) => {
        item.style.willChange = "opacity, transform";
        const animation = item.animate(
          [
            { opacity: 0, transform: `translateY(${distance}px)` },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration,
            delay: index * stagger,
            easing: "ease-out",
            fill: "backwards",
          }
        );
        clearWillChangeAfter(item, animation);
      });
    };

    const animateProcessRail = (rail) => {
      const line = rail.querySelector(".process-rail-motion__line");
      const nodes = Array.from(rail.querySelectorAll(".process-rail-motion__node"));
      const desktopMotion = window.matchMedia("(min-width: 1120px)").matches;

      if (line) {
        line.style.willChange = "transform";
        const lineAnimation = line.animate(
          desktopMotion
            ? [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }]
            : [{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }],
          { duration: 600, easing: "ease-out", fill: "backwards" }
        );
        clearWillChangeAfter(line, lineAnimation);
      }

      nodes.forEach((node, index) => {
        node.style.willChange = "opacity, transform";
        const nodeAnimation = node.animate(
          [
            { opacity: 0, transform: "scale(.85)" },
            { opacity: 1, transform: "scale(1)" },
          ],
          {
            duration: 180,
            delay: index * 120,
            easing: "ease-out",
            fill: "backwards",
          }
        );
        clearWillChangeAfter(node, nodeAnimation);
      });
    };

    const motionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          if (entry.target.matches("[data-motion-engineering-stack]")) {
            animateEngineeringStack(entry.target);
          } else if (entry.target.matches("[data-motion-process-rail]")) {
            animateProcessRail(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    motionTargets.forEach((target) => motionObserver.observe(target));
  };

  initApprovedMotion();

  document.querySelectorAll("[data-youtube-poster]").forEach((videoTrigger) => {
    if (!/^https?:$/.test(window.location.protocol)) return;

    videoTrigger.addEventListener("click", (event) => {
      event.preventDefault();
      const videoId = videoTrigger.dataset.youtubeId;
      const videoTitle = videoTrigger.dataset.youtubeTitle || (isEnglish ? "SiGTRON AI video" : "SiGTRON AI 影片");
      if (!videoId) return;

      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${encodeURIComponent(videoId)}?start=5&autoplay=1&loop=1&controls=0&mute=1&playlist=${encodeURIComponent(videoId)}&playsinline=1&rel=0`;
      iframe.title = videoTitle;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      iframe.className = "video-embed";
      videoTrigger.replaceWith(iframe);
    });
  });

  const inquiryForm = document.querySelector("[data-prototype-form]");
  if (inquiryForm) {
    const errorSummary = inquiryForm.querySelector("[data-error-summary]");
    const errorList = inquiryForm.querySelector("[data-error-list]");
    const formStatus = inquiryForm.querySelector("[data-form-status]");
    const validationButton = inquiryForm.querySelector("[data-prototype-check]");
    const requiredFields = Array.from(inquiryForm.querySelectorAll("[required]"));
    inquiryForm.noValidate = true;

    const inquiryType = inquiryForm.querySelector("#type");
    const requestedType = new URLSearchParams(window.location.search).get("type");
    if (
      inquiryType instanceof HTMLSelectElement &&
      requestedType &&
      Array.from(inquiryType.options).some((option) => option.value === requestedType)
    ) {
      inquiryType.value = requestedType;
    }

    const getErrorMessage = (field) => {
      if (!isEnglish) {
        if (field.validity.valueMissing) return "此欄位為必填。";
        if (field.validity.typeMismatch) return "請輸入有效的電子郵件格式。";
        return "請確認此欄位內容。";
      }

      if (field.id === "email" && field.validity.typeMismatch) return "Enter a valid email address.";
      if (field.id === "name") return "Enter your name.";
      if (field.id === "company") return "Enter your company name.";
      if (field.id === "email") return "Enter your email address.";
      if (field.id === "type") return "Select an inquiry type.";
      if (field.id === "message") return "Provide a brief summary of your requirement.";
      if (field.id === "prototype-confirmation") return "Confirm that you understand this is a non-submitting prototype.";
      return "Review this field.";
    };

    const setFieldError = (field, message = "") => {
      const errorNode = document.getElementById(`${field.id}-error`);
      field.toggleAttribute("aria-invalid", Boolean(message));
      if (errorNode) {
        errorNode.textContent = message;
        errorNode.hidden = !message;
      }
    };

    const validateField = (field) => {
      const message = field.validity.valid ? "" : getErrorMessage(field);
      setFieldError(field, message);
      return message;
    };

    requiredFields.forEach((field) => {
      field.addEventListener("input", () => {
        if (field.hasAttribute("aria-invalid")) validateField(field);
      });
      field.addEventListener("change", () => {
        if (field.hasAttribute("aria-invalid")) validateField(field);
      });
    });

    const validateForm = () => {
      const errors = requiredFields
        .map((field) => ({ field, message: validateField(field) }))
        .filter(({ message }) => message);

      if (errorList) {
        errorList.replaceChildren(
          ...errors.map(({ field, message }) => {
            const item = document.createElement("li");
            const link = document.createElement("a");
            link.href = `#${field.id}`;
            const fieldLabel = field.labels?.[0]?.textContent
              .replace(/\s*(必填|選填|Required|Optional)\s*$/, "")
              .trim();
            link.textContent = `${fieldLabel || "欄位"}：${message}`;
            link.addEventListener("click", (clickEvent) => {
              clickEvent.preventDefault();
              field.focus();
            });
            item.append(link);
            return item;
          })
        );
      }

      if (errors.length) {
        if (formStatus) formStatus.hidden = true;
        if (errorSummary) {
          errorSummary.hidden = false;
          errorSummary.focus();
        }
        return;
      }

      if (errorSummary) errorSummary.hidden = true;
      if (formStatus) {
        formStatus.hidden = false;
        formStatus.focus();
      }
    };

    validationButton?.addEventListener("click", validateForm);
    inquiryForm.addEventListener("submit", (event) => event.preventDefault());
  }

  const paymentTermsDialog = document.querySelector("[data-payment-terms-dialog]");
  const paymentTermsOpeners = Array.from(document.querySelectorAll("[data-payment-terms-open]"));
  const paymentTermsClose = paymentTermsDialog?.querySelector("[data-payment-terms-close]");
  const paymentTermsTitle = paymentTermsDialog?.querySelector("#payment-terms-dialog-title");
  const paymentTermsScroll = paymentTermsDialog?.querySelector("[data-payment-terms-scroll]");
  const supportsPaymentTermsDialog =
    "HTMLDialogElement" in window &&
    paymentTermsDialog instanceof HTMLDialogElement &&
    typeof paymentTermsDialog.showModal === "function";
  let paymentTermsOpener = null;

  if (supportsPaymentTermsDialog) {
    paymentTermsOpeners.forEach((opener) => {
      opener.addEventListener("click", (event) => {
        event.preventDefault();
        paymentTermsOpener = opener;
        if (paymentTermsScroll instanceof HTMLElement) paymentTermsScroll.scrollTop = 0;
        paymentTermsDialog.showModal();
        body.classList.add("terms-dialog-open");
        window.requestAnimationFrame(() => paymentTermsTitle?.focus());
      });
    });

    paymentTermsClose?.addEventListener("click", () => paymentTermsDialog.close());

    paymentTermsDialog.addEventListener("click", (event) => {
      if (event.target === paymentTermsDialog) paymentTermsDialog.close();
    });

    paymentTermsDialog.addEventListener("close", () => {
      body.classList.remove("terms-dialog-open");
      if (paymentTermsOpener instanceof HTMLElement) paymentTermsOpener.focus({ preventScroll: true });
      paymentTermsOpener = null;
    });

    paymentTermsDialog.querySelectorAll('.payment-terms-toc a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const target = paymentTermsDialog.querySelector(link.hash);
        if (!(target instanceof HTMLElement)) return;
        event.preventDefault();
        target.scrollIntoView({
          behavior: reducedMotion.matches ? "auto" : "smooth",
          block: "start",
        });
        target.focus({ preventScroll: true });
      });
    });
  }

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
})();
