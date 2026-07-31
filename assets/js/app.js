/* ==========================================================================
   Manuel David Maya Rosero — Portfolio app logic.
   Renders window.SITE content, handles i18n switching, theme, and interactions.
   No build step, no dependencies — plain ES2017+.
   ========================================================================== */
(function () {
  "use strict";

  var SITE = window.SITE;
  var LANGS = ["es", "en", "fr"];
  var MONTHS = {
    es: ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    fr: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
  };

  /* ---------------- Icons (hand-drawn, stroke-based, 24x24) ---------------- */
  var ICONS = {
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6 8.5-6"/>',
    phone: '<path d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2a1.5 1.5 0 0 1 1.5-.37c1 .3 2.1.47 3.2.47a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5C11.9 21.5 2.5 12.1 2.5 3.5A1.5 1.5 0 0 1 4 2h3.2a1.5 1.5 0 0 1 1.5 1.5c0 1.1.17 2.2.47 3.2a1.5 1.5 0 0 1-.37 1.5L6.6 10.8Z"/>',
    pin: '<path d="M12 21s7-6.4 7-11.5a7 7 0 1 0-14 0C5 14.6 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
    download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M4 19.5h16"/>',
    arrowRight: '<path d="M4 12h15"/><path d="m13 6 6 6-6 6"/>',
    external: '<path d="M9 5H5.5A1.5 1.5 0 0 0 4 6.5v12A1.5 1.5 0 0 0 5.5 20h12a1.5 1.5 0 0 0 1.5-1.5V15"/><path d="M14 4h6v6"/><path d="M20 4 11 13"/>',
    cap: '<path d="M12 3 2 8l10 5 10-5-10-5Z"/><path d="M6 10.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-5.5"/><path d="M22 8v6.5"/>',
    briefcase: '<rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5"/><path d="M3 12.5h18"/>',
    rocket: '<path d="M12 2.5c2.8 1.3 5 4.6 5 8.8 0 2-1 4-2 5l-.6 3.2-2.4-1.6-2.4 1.6L9 16.3c-1-1-2-3-2-5 0-4.2 2.2-7.5 5-8.8Z"/><circle cx="12" cy="10.5" r="1.6"/><path d="M8.3 15.5 5.8 17a3 3 0 0 0-1.3 2.5V21l1.5-.5a3 3 0 0 0 2-1.6l1-2.4M15.7 15.5l2.5 1.5a3 3 0 0 1 1.3 2.5V21l-1.5-.5a3 3 0 0 1-2-1.6l-1-2.4"/>',
    heart: '<path d="M12 20.2S3.5 15 3.5 8.9A4.9 4.9 0 0 1 12 5.7a4.9 4.9 0 0 1 8.5 3.2c0 6.1-8.5 11.3-8.5 11.3Z"/>',
    award: '<circle cx="12" cy="8.5" r="5.5"/><path d="m8.3 13.2-1.4 7.3 5.1-2.6 5.1 2.6-1.4-7.3"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>',
    code: '<path d="m9 8-4.5 4L9 16"/><path d="m15 8 4.5 4L15 16"/>',
    database: '<ellipse cx="12" cy="5.5" rx="7.5" ry="3"/><path d="M4.5 5.5V12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V5.5"/><path d="M4.5 12v6.5c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V12"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 4.9L3.5 17l3.5 3.5 5.8-5.8a4 4 0 0 0 4.9-5.4l-2.8 2.8-2.5-2.5 2.8-2.8Z"/>',
    cloud: '<path d="M7 18h10.5a3.8 3.8 0 0 0 .6-7.5 5.5 5.5 0 0 0-10.7-1.7A4.3 4.3 0 0 0 7 18Z"/>',
    chevronUp: '<path d="m5 15 7-7 7 7"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    doc: '<path d="M7 3h7l4 4v14H7Z"/><path d="M14 3v4h4"/><path d="M9.5 13h5M9.5 16.5h5"/>',
    bike: '<circle cx="6" cy="17" r="3.3"/><circle cx="18" cy="17" r="3.3"/><path d="M6 17l4-8h4l3 8"/><path d="M10 9h4"/><path d="m12.5 9 2 4h3.5"/>',
    flask: '<path d="M10 3h4"/><path d="M11 3v5.5L5.8 18a2 2 0 0 0 1.7 3h9a2 2 0 0 0 1.7-3L13 8.5V3"/><path d="M8 14.5h8"/>',
    wifi: '<path d="M4 9a13 13 0 0 1 16 0"/><path d="M7.2 12.8a8.5 8.5 0 0 1 9.6 0"/><path d="M10 16.5a4 4 0 0 1 4 0"/><circle cx="12" cy="19.5" r="0.9"/>',
    share: '<circle cx="6" cy="12" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="M8.1 10.8 15.9 7.2M8.1 13.2l7.8 3.6"/>',
    brain: '<path d="M9 4.5A2.5 2.5 0 0 0 6.5 7v.3A3 3 0 0 0 5 12a3 3 0 0 0 1.5 4.7V17a2.5 2.5 0 0 0 5 0V6.5A2 2 0 0 0 9 4.5Z"/><path d="M15 4.5A2.5 2.5 0 0 1 17.5 7v.3A3 3 0 0 1 19 12a3 3 0 0 1-1.5 4.7V17a2.5 2.5 0 0 1-5 0V6.5a2 2 0 0 1 2.5-2Z"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8.2" r="0.4" fill="currentColor"/><path d="M8 11v6.2M8 11v6.2"/><path d="M12.2 17.2V13a2 2 0 0 1 4 0v4.2M12.2 17.2v-6M16.2 17.2v-4.4"/>',
    github: '<path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.65-.2.65-.47v-1.9c-2.6.57-3.15-1.13-3.15-1.13-.43-1.08-1.04-1.37-1.04-1.37-.86-.58.07-.57.07-.57.94.07 1.44.97 1.44.97.84 1.43 2.2 1.02 2.75.78.08-.6.33-1.02.6-1.26-2.08-.24-4.27-1.04-4.27-4.62 0-1.02.37-1.86.96-2.51-.1-.24-.42-1.2.1-2.5 0 0 .8-.25 2.6.96a9 9 0 0 1 4.74 0c1.8-1.21 2.6-.96 2.6-.96.52 1.3.2 2.26.1 2.5.6.65.96 1.49.96 2.51 0 3.59-2.2 4.38-4.29 4.61.34.3.64.87.64 1.76v2.6c0 .27.15.58.65.47A9.5 9.5 0 0 0 12 2.5Z"/>'
  };
  function icon(name, size) {
    size = size || 18;
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || "") + "</svg>";
  }

  /* ---------------- State ---------------- */
  var state = {
    lang: detectLang(),
    theme: localStorage.getItem("site-theme") || null
  };

  function detectLang() {
    var stored = localStorage.getItem("site-lang");
    if (stored && LANGS.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) !== -1 ? nav : "es";
  }

  function t(key) {
    var dict = SITE.ui[state.lang] || SITE.ui.es;
    return dict[key] !== undefined ? dict[key] : key;
  }
  function L(field) {
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[state.lang] !== undefined ? field[state.lang] : field.es;
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function fmtDate(d) {
    if (!d) return "";
    return MONTHS[state.lang][d.m - 1] + " " + d.y;
  }

  /* ---------------- i18n: static [data-i18n] nodes ---------------- */
  function applyStaticI18n() {
    document.documentElement.lang = state.lang;
    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute("data-i18n");
      els[i].textContent = t(key);
    }
    var ariaEls = document.querySelectorAll("[data-i18n-aria]");
    for (var j = 0; j < ariaEls.length; j++) {
      ariaEls[j].setAttribute("aria-label", t(ariaEls[j].getAttribute("data-i18n-aria")));
    }
    document.title = "Manuel David Maya Rosero — " + L(SITE.meta.role);
    document.getElementById("brandSub").textContent = L(SITE.meta.role);
  }

  /* ---------------- Renderers ---------------- */

  function renderHeroRole() {
    document.getElementById("heroRole").textContent = t("hero_role_line");
    document.getElementById("heroCardRole").textContent = L(SITE.meta.role) + " — " + L(SITE.meta.location);
  }

  function renderHeroMeta() {
    var wrap = document.getElementById("heroMeta");
    wrap.innerHTML = "";
    var items = [
      { icon: "mail", text: SITE.meta.email, href: "mailto:" + SITE.meta.email },
      { icon: "phone", text: SITE.meta.phoneDisplay, href: "tel:" + SITE.meta.phoneHref },
      { icon: "pin", text: L(SITE.meta.location), href: null },
      { icon: "linkedin", text: "/in/" + SITE.meta.linkedinUser, href: SITE.meta.linkedinUrl },
      { icon: "github", text: "@" + SITE.meta.githubUser, href: SITE.meta.githubUrl }
    ];
    items.forEach(function (it) {
      var node = it.href ? el("a", "hero-meta-item") : el("span", "hero-meta-item");
      if (it.href) {
        node.href = it.href;
        if (it.href.indexOf("http") === 0) { node.target = "_blank"; node.rel = "noopener"; }
      }
      node.innerHTML = icon(it.icon, 16) + "<span>" + it.text + "</span>";
      wrap.appendChild(node);
    });
  }

  function renderHeroStats() {
    var wrap = document.getElementById("heroStats");
    wrap.innerHTML = "";
    SITE.heroStats.forEach(function (s) {
      var tile = el("div", "hero-stat", "<b>" + s.num + "</b><span>" + L(s.label) + "</span>");
      wrap.appendChild(tile);
    });
  }

  function renderAbout() {
    var text = document.getElementById("aboutText");
    text.innerHTML = "";
    SITE.about.paragraphs[state.lang].forEach(function (p) {
      text.appendChild(el("p", null, p));
    });

    var hi = document.getElementById("aboutHighlights");
    hi.innerHTML = "";
    SITE.about.highlights.forEach(function (h) {
      var card = el("div", "about-highlight");
      card.innerHTML =
        '<div class="ic">' + icon(h.icon, 19) + "</div>" +
        "<div><h4>" + L(h.title) + "</h4><p>" + L(h.text) + "</p></div>";
      hi.appendChild(card);
    });
  }

  function tlDot(iconName, current) {
    return '<div class="tl-dot">' + icon(iconName, 17) + "</div>";
  }

  function renderTimeline(containerId, items, opts) {
    opts = opts || {};
    var wrap = document.getElementById(containerId);
    wrap.innerHTML = "";
    items.forEach(function (item) {
      var wrapper = el("div", "tl-item" + (item.ongoing ? " is-current" : ""));
      var bullets = item.bullets[state.lang].map(function (b) { return "<li>" + b + "</li>"; }).join("");
      var tags = (item.tags || []).map(function (tg) { return '<span class="tag">' + tg + "</span>"; }).join("");
      var placeLine = item.place ? L(item.place) : "";
      var orgLine = item.org || "";

      wrapper.innerHTML =
        tlDot(item.icon || "briefcase") +
        '<div class="tl-card">' +
          '<div class="tl-top">' +
            '<div><div class="tl-title">' + (item.title ? L(item.title) : L(item.degree)) + '</div>' +
            '<div class="tl-org">' + orgLine + "</div></div>" +
            '<div class="tl-date">' + (item.ongoing ? '<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:currentColor;margin-right:6px;"></span>' : "") + L(item.dateLabel) + "</div>" +
          "</div>" +
          (placeLine ? '<div class="tl-place">' + placeLine + "</div>" : "") +
          '<ul class="tl-bullets">' + bullets + "</ul>" +
          (tags ? '<div class="tl-tags">' + tags + "</div>" : "") +
        "</div>";
      wrap.appendChild(wrapper);
    });
  }

  function renderProjects() {
    var wrap = document.getElementById("projectsList");
    wrap.innerHTML = "";
    SITE.projects.forEach(function (p) {
      var card = el("div", "project-card" + (p.featured ? " is-featured" : ""));
      var bodyOpen = p.featured ? '<div class="project-body">' : "";
      var bodyClose = p.featured ? "</div>" : "";

      var media = "";
      if (p.images && p.images.length) {
        media = '<div class="project-media">' + p.images.map(function (im, idx) {
          return '<img src="' + im.src + '" alt="' + L(im.cap) + '" loading="lazy" data-lightbox="1" data-cap="' + L(im.cap).replace(/"/g, "&quot;") + '">';
        }).join("") + "</div>";
      }

      var stats = "";
      if (p.stats && p.stats.length) {
        stats = '<div class="stat-row">' + p.stats.map(function (s) {
          return '<div class="stat-tile"><b>' + s.num + "</b><span>" + L(s.label) + "</span></div>";
        }).join("") + "</div>";
      }

      var bullets = p.bullets[state.lang].map(function (b) { return "<li>" + b + "</li>"; }).join("");
      var tags = (p.tags || []).map(function (tg) { return '<span class="tag">' + tg + "</span>"; }).join("");

      var content =
        '<div class="project-content">' +
          '<div class="project-kicker">' + L(p.kicker) + "</div>" +
          "<h3>" + L(p.title) + "</h3>" +
          '<div class="project-meta">' + p.org + " · " + L(p.dateLabel) + "</div>" +
          "<p>" + L(p.intro) + "</p>" +
          stats +
          '<ul class="project-bullets">' + bullets + "</ul>" +
          '<div class="tl-tags">' + tags + "</div>" +
        "</div>";

      card.innerHTML = bodyOpen + media + content + bodyClose;
      wrap.appendChild(card);
    });

    // lightbox wiring
    wrap.querySelectorAll("img[data-lightbox]").forEach(function (img) {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", function () {
        openLightbox(img.src, img.getAttribute("data-cap"));
      });
    });
  }

  function renderCoursework() {
    var wrap = document.getElementById("courseworkList");
    wrap.innerHTML = "";
    SITE.coursework.forEach(function (c) {
      var card = el("div", "course-card");
      card.innerHTML =
        '<div class="ic">' + icon(c.icon, 16) + "</div>" +
        "<h4>" + L(c.title) + "</h4>" +
        '<div class="tl-date" style="display:inline-block; margin-bottom:8px;">' + L(c.dateLabel) + "</div>" +
        "<p>" + L(c.text) + "</p>" +
        '<div class="project-meta">' + L(c.org) + "</div>";
      wrap.appendChild(card);
    });
  }

  function renderSkills() {
    var wrap = document.getElementById("skillsList");
    wrap.innerHTML = "";
    SITE.skills.forEach(function (s, idx) {
      var card = el("div", "skill-card");
      card.setAttribute("data-c", idx % 5);
      var tags = s.items.map(function (i) { return '<span class="tag">' + i + "</span>"; }).join("");
      card.innerHTML =
        '<div class="skill-card-head"><div class="ic">' + icon(s.icon, 18) + "</div><h4>" + L(s.name) + "</h4></div>" +
        '<div class="skill-tags">' + tags + "</div>";
      wrap.appendChild(card);
    });
    if (SITE.skills.length % 2 === 1) {
      wrap.lastElementChild.style.gridColumn = "1 / -1";
    }

    var lm = document.getElementById("langMeters");
    lm.innerHTML = "";
    SITE.languages.forEach(function (lg) {
      var bars = "";
      for (var i = 1; i <= 5; i++) bars += '<i class="' + (i <= lg.fill ? "is-filled" : "") + '"></i>';
      var card = el("div", "lang-meter");
      card.innerHTML =
        '<div class="lang-meter-top"><h4>' + L(lg.name) + "</h4><span>" + L(lg.level) + "</span></div>" +
        '<div class="lang-meter-bar">' + bars + "</div>";
      lm.appendChild(card);
    });
  }

  function renderCertifications() {
    var c = SITE.certifications;
    var total = 0;
    c.groups.forEach(function (g) { total += g.items.length; });
    var databricksCount = 0;
    c.groups.forEach(function (g) { if (g.issuer === "Databricks") databricksCount = g.items.length; });

    var statsWrap = document.getElementById("certsStats");
    statsWrap.innerHTML = [
      { num: String(total), label: t("certs_stat_total") },
      { num: String(c.groups.length), label: t("certs_stat_platforms") },
      { num: String(databricksCount), label: t("certs_stat_databricks") }
    ].map(function (s) { return '<div class="stat-tile"><b>' + s.num + "</b><span>" + s.label + "</span></div>"; }).join("");

    var wrap = document.getElementById("certsGroups");
    wrap.innerHTML = "";
    c.groups.forEach(function (g) {
      var card = el("div", "skill-card", "");
      card.style.marginBottom = "18px";
      var rows = g.items.map(function (item) {
        var dateStr = t("certs_issued") + " " + fmtDate(item.date);
        if (item.expires) dateStr += " · " + t("certs_expires") + " " + fmtDate(item.expires);
        var skillsLine = "";
        if (item.skills && item.skills.length) {
          skillsLine = item.skills.join(", ");
          if (item.more) skillsLine += " +" + item.more + " " + t("certs_more_skills");
        }
        return (
          '<li style="position:relative; padding:14px 0; border-top:1px solid var(--border);">' +
            '<div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap;">' +
              '<strong style="font-size:14px; color:var(--ink);">' + item.title + "</strong>" +
              '<span class="tl-date" style="flex-shrink:0;">' + dateStr + "</span>" +
            "</div>" +
            (skillsLine ? '<div style="font-size:12.5px; color:var(--muted); margin-top:5px;">' + skillsLine + "</div>" : "") +
            '<div style="font-size:11px; color:var(--muted); margin-top:4px; font-variant-numeric:tabular-nums;">' + t("certs_credential") + ": " + item.id + "</div>" +
          "</li>"
        );
      }).join("");

      card.innerHTML =
        '<div class="skill-card-head"><div class="ic">' + icon(g.icon, 18) + '</div><h4>' + g.issuer + '<span style="color:var(--muted); font-weight:500;"> · ' + g.items.length + "</span></h4></div>" +
        '<ul style="list-style:none;">' + rows + "</ul>";
      wrap.appendChild(card);
    });
    // colorize issuer icons using the same rotation as skills
    wrap.querySelectorAll(".skill-card").forEach(function (card, idx) {
      card.setAttribute("data-c", idx % 5);
    });
  }

  function renderContact() {
    var wrap = document.getElementById("contactLinks");
    wrap.innerHTML = "";
    var items = [
      { icon: "mail", text: SITE.meta.email, href: "mailto:" + SITE.meta.email },
      { icon: "phone", text: SITE.meta.phoneDisplay, href: "tel:" + SITE.meta.phoneHref },
      { icon: "linkedin", text: "linkedin.com/in/" + SITE.meta.linkedinUser, href: SITE.meta.linkedinUrl },
      { icon: "github", text: "github.com/" + SITE.meta.githubUser, href: SITE.meta.githubUrl }
    ];
    items.forEach(function (it) {
      var a = el("a", null);
      a.href = it.href;
      if (it.href.indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
      a.innerHTML = icon(it.icon, 16) + "<span>" + it.text + "</span>";
      wrap.appendChild(a);
    });
  }

  function renderAll() {
    applyStaticI18n();
    renderHeroRole();
    renderHeroMeta();
    renderHeroStats();
    renderAbout();
    renderTimeline("educationList", SITE.education);
    renderTimeline("experienceList", SITE.experience);
    renderProjects();
    renderCoursework();
    renderSkills();
    renderCertifications();
    renderContact();
    updateActiveNav();
    scanReveal();
  }

  /* ---------------- Lightbox ---------------- */
  function openLightbox(src, cap) {
    var lb = document.getElementById("lightbox");
    document.getElementById("lightboxImg").src = src;
    document.getElementById("lightboxCap").textContent = cap || "";
    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    document.getElementById("lightbox").classList.remove("is-open");
    document.body.style.overflow = "";
  }

  /* ---------------- Theme ---------------- */
  function applyTheme() {
    if (state.theme) {
      document.documentElement.setAttribute("data-theme", state.theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }
  function toggleTheme() {
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    var current = state.theme || (prefersDark ? "dark" : "light");
    state.theme = current === "dark" ? "light" : "dark";
    localStorage.setItem("site-theme", state.theme);
    applyTheme();
  }

  /* ---------------- Language ---------------- */
  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    state.lang = lang;
    localStorage.setItem("site-lang", lang);
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
    renderAll();
  }

  /* ---------------- Nav: scroll spy, mobile menu, back-to-top ---------------- */
  function updateActiveNav() {
    var links = document.querySelectorAll(".nav-links a");
    var scrollPos = window.scrollY + 120;
    var current = null;
    links.forEach(function (a) {
      var sec = document.querySelector(a.getAttribute("href"));
      if (sec && sec.offsetTop <= scrollPos) current = a;
    });
    links.forEach(function (a) { a.classList.remove("is-active"); });
    if (current) current.classList.add("is-active");
  }

  function initScrollEffects() {
    var navbar = document.getElementById("navbar");
    var backTop = document.getElementById("backTop");
    window.addEventListener("scroll", function () {
      navbar.classList.toggle("is-scrolled", window.scrollY > 8);
      backTop.classList.toggle("is-visible", window.scrollY > 700);
      updateActiveNav();
    }, { passive: true });
  }

  var revealObserver = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }) : null;

  function scanReveal() {
    if (!revealObserver) {
      document.querySelectorAll(".reveal").forEach(function (n) { n.classList.add("is-visible"); });
      return;
    }
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (n) { revealObserver.observe(n); });
  }

  function initMobileNav() {
    var burger = document.getElementById("navBurger");
    var links = document.getElementById("navLinks");
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyTheme();

    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === state.lang);
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });

    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
    document.getElementById("backTop").addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
    document.getElementById("lightbox").addEventListener("click", function (e) {
      if (e.target.id === "lightbox") closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });

    initMobileNav();
    initScrollEffects();
    renderAll();
  });

})();
