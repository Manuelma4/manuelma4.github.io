/* ==========================================================================
   Manuel David Maya Rosero — Portfolio app logic.
   Renders window.SITE content, handles i18n switching and interactions.
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
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 10.5V17"/><circle cx="12" cy="7.5" r=".7" fill="currentColor" stroke="none"/>',
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
    lang: detectLang()
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
  function fmtMonthYear(d) {
    return MONTHS[state.lang][d.m - 1] + " " + d.y;
  }
  function fmtDate(d) {
    if (!d) return "";
    if (!d.d) return fmtMonthYear(d);
    if (state.lang === "es") return d.d + " de " + MONTHS.es[d.m - 1].toLowerCase() + " de " + d.y;
    if (state.lang === "fr") return d.d + " " + MONTHS.fr[d.m - 1].toLowerCase() + " " + d.y;
    return MONTHS.en[d.m - 1] + " " + d.d + ", " + d.y;
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
    var cvPath = SITE.meta.cvFiles[state.lang] || SITE.meta.cvFiles.en;
    var cvName = state.lang === "fr" ? "CV_Manuel_David_MAYAROSERO_FR.pdf" : "Manuel_David_MAYA_ROSERO_CV.pdf";
    ["heroCvBtn", "contactCvBtn"].forEach(function (id) {
      var link = document.getElementById(id);
      if (!link) return;
      link.href = cvPath;
      link.setAttribute("download", cvName);
    });
  }

  /* ---------------- Renderers ---------------- */

  function renderHeroRole() {
    document.getElementById("heroRole").textContent = t("hero_role_line");
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

  function projectCount(group) {
    return group.courses.reduce(function (total, course) {
      return total + course.items.length;
    }, 0);
  }

  function projectCard(item) {
    var level = item.level || "standard";
    var stats = (item.stats || []).map(function (s) {
      return '<div class="stat-tile"><b>' + s.num + "</b><span>" + L(s.label) + "</span></div>";
    }).join("");
    var bullets = item.bullets && item.bullets[state.lang]
      ? item.bullets[state.lang].map(function (b) { return "<li>" + b + "</li>"; }).join("")
      : "";
    var tags = (item.tags || []).map(function (tag) {
      return '<span class="tag">' + tag + "</span>";
    }).join("");
    var documents = (item.documents || []).map(function (doc) {
      return '<a href="' + attrText(doc.href) + '" target="_blank" rel="noopener noreferrer" aria-label="' + attrText(L(doc.label) + " · " + t("projects_open_pdf")) + '">' + icon("doc", 15) + "<span>" + L(doc.label) + "</span></a>";
    }).join("");
    var links = (item.links || []).map(function (link) {
      return '<a href="' + attrText(link.href) + '" target="_blank" rel="noopener noreferrer">' + icon("external", 15) + "<span>" + L(link.label) + "</span></a>";
    }).join("");
    var actions = documents + links;

    return (
      '<article class="project-card project-card-' + level + '">' +
        '<div class="project-content">' +
          '<div class="project-card-top">' +
            '<span class="project-kicker">' + L(item.kind) + "</span>" +
            '<span class="tl-date">' + L(item.dateLabel) + "</span>" +
          "</div>" +
          "<h5>" + L(item.title) + "</h5>" +
          '<p class="project-intro">' + L(item.intro) + "</p>" +
          (stats ? '<div class="stat-row">' + stats + "</div>" : "") +
          (bullets ? '<ul class="project-bullets">' + bullets + "</ul>" : "") +
          (item.note ? '<p class="project-note">' + icon("info", 15) + "<span>" + L(item.note) + "</span></p>" : "") +
          (tags ? '<div class="tl-tags project-tags">' + tags + "</div>" : "") +
          (actions ? '<div class="project-links">' + actions + "</div>" : "") +
        "</div>" +
      "</article>"
    );
  }

  function renderProjectCatalog() {
    var wrap = document.getElementById("projectCatalog");
    wrap.innerHTML = SITE.projectCatalog.map(function (group, groupIndex) {
      var count = projectCount(group);
      var countLabel = count + " " + t(count === 1 ? "projects_count_1" : "projects_count");
      var courses = group.courses.map(function (course) {
        var courseCount = course.items.length;
        var courseCountLabel = courseCount + " " + t(courseCount === 1 ? "projects_count_1" : "projects_count");
        return (
          '<section class="project-course">' +
            '<div class="project-course-head">' +
              "<h4>" + L(course.name) + "</h4>" +
              '<span aria-label="' + attrText(courseCountLabel) + '">' + courseCount + "</span>" +
            "</div>" +
            '<div class="project-course-grid">' + course.items.map(projectCard).join("") + "</div>" +
          "</section>"
        );
      }).join("");

      return (
        '<section class="project-institution" data-c="' + (groupIndex % 3) + '">' +
          '<header class="project-institution-head">' +
            '<div class="project-institution-icon">' + icon("cap", 22) + "</div>" +
            '<div class="project-institution-copy"><div class="project-institution-title">' +
              "<h3>" + group.institution + "</h3>" +
              '<span class="project-count">' + countLabel + "</span>" +
            "</div><p>" + L(group.description) + "</p></div>" +
          "</header>" +
          '<div class="project-courses">' + courses + "</div>" +
        "</section>"
      );
    }).join("");
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

  function typeLabel(type, count) {
    var key = "certs_type_" + type;
    var requestedKey = count === 1 ? key + "_1" : key;
    var label = t(requestedKey);
    return label === requestedKey ? type : label;
  }

  function certCategory(type) {
    if (type === "micro") return "micro";
    if (type === "knowledge") return "knowledge";
    return "certification";
  }

  function certCategoryIcon(category) {
    if (category === "micro") return "layers";
    if (category === "knowledge") return "cap";
    return "award";
  }

  function attrText(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function credentialCountLabel(count) {
    return count + " " + t(count === 1 ? "certs_credentials_1" : "certs_credentials");
  }

  function certCard(item, issuer) {
    var itemType = item.type || "knowledge";
    var tip = t("certs_issued") + " " + fmtDate(item.date);
    if (item.expires) tip += " · " + t("certs_expires") + " " + fmtDate(item.expires);
    if (item.id) tip += " · " + t("certs_credential") + ": " + item.id;
    if (item.number) tip += " · " + t("certs_number") + ": " + item.number;

    var media = item.image
      ? '<div class="cert-item-media"><img src="' + attrText(item.image) + '" alt="' + attrText(t("certs_badge_alt") + " " + item.title) + '" loading="lazy"></div>'
      : '<div class="cert-item-media cert-item-media-fallback">' + icon("award", 44) + "</div>";

    var skills = (item.skills || []).map(function (skill) {
      return '<span class="cert-skill">' + skill + "</span>";
    }).join("");
    if (item.more) skills += '<span class="cert-skill cert-skill-more">+' + item.more + " " + t("certs_more_skills") + "</span>";

    var dates = '<span><b>' + t("certs_issued") + ":</b> " + fmtDate(item.date) + "</span>";
    if (item.expires) dates += '<span><b>' + t("certs_expires") + ":</b> " + fmtDate(item.expires) + "</span>";

    var action = item.url
      ? '<a class="cert-verify" href="' + attrText(item.url) + '" target="_blank" rel="noopener noreferrer" title="' + attrText(tip) + '" aria-label="' + attrText(t("certs_verify") + ": " + item.title) + '"><span>' + t("certs_verify") + "</span>" + icon("external", 14) + "</a>"
      : '<span class="cert-verify is-disabled" title="' + attrText(tip) + '">' + t("certs_verify") + "</span>";

    return (
      '<article class="cert-item">' +
        media +
        '<div class="cert-item-content">' +
          '<div class="cert-item-top"><span class="cert-item-issuer">' + issuer + '</span><span class="cert-kind">' + typeLabel(itemType, 1) + "</span></div>" +
          '<h4 class="cert-item-title">' + item.title + "</h4>" +
          '<div class="cert-item-dates">' + dates + "</div>" +
          (skills ? '<div class="cert-skills">' + skills + "</div>" : "") +
          action +
        "</div>" +
      "</article>"
    );
  }

  function renderCertifications() {
    var c = SITE.certifications;
    var counts = { knowledge: 0, micro: 0, certification: 0 };
    var total = 0;
    c.groups.forEach(function (g) {
      g.items.forEach(function (it) {
        total++;
        var category = certCategory(it.type || "knowledge");
        counts[category] = (counts[category] || 0) + 1;
      });
    });

    var statsWrap = document.getElementById("certsStats");
    statsWrap.innerHTML = [
      { num: String(total), label: t("certs_stat_total") },
      { num: String(counts.certification), label: t("certs_stat_certification") },
      { num: String(counts.micro), label: t("certs_stat_micro") },
      { num: String(counts.knowledge), label: t("certs_stat_knowledge") }
    ].map(function (s) { return '<div class="stat-tile"><b>' + s.num + "</b><span>" + s.label + "</span></div>"; }).join("");

    var wrap = document.getElementById("certsGroups");
    wrap.innerHTML = "";
    ["certification", "micro", "knowledge"].forEach(function (category) {
      var providers = c.groups.map(function (g, idx) {
        return {
          issuer: g.issuer,
          icon: g.icon,
          colorIndex: idx,
          items: g.items.filter(function (item) { return certCategory(item.type || "knowledge") === category; })
        };
      }).filter(function (provider) { return provider.items.length; });

      if (!providers.length) return;

      var categoryCount = providers.reduce(function (sum, provider) { return sum + provider.items.length; }, 0);
      var section = el("section", "cert-type-section cert-type-" + category);
      var providersHtml = providers.map(function (provider) {
        return (
          '<section class="cert-provider" data-c="' + (provider.colorIndex % 5) + '">' +
            '<div class="cert-provider-head">' +
              '<div class="ic">' + icon(provider.icon, 18) + "</div>" +
              '<div><h4>' + provider.issuer + '</h4><span>' + credentialCountLabel(provider.items.length) + "</span></div>" +
            "</div>" +
            '<div class="cert-items-grid">' + provider.items.map(function (item) { return certCard(item, provider.issuer); }).join("") + "</div>" +
          "</section>"
        );
      }).join("");

      section.innerHTML =
        '<div class="cert-type-head">' +
          '<div class="cert-type-icon">' + icon(certCategoryIcon(category), 22) + "</div>" +
          '<div class="cert-type-copy"><div class="cert-type-title-line"><h3>' + t("certs_category_" + category) + '</h3><span class="cert-type-count">' + categoryCount + "</span></div>" +
          '<p>' + t("certs_category_" + category + "_desc") + "</p></div>" +
        "</div>" +
        '<div class="cert-providers">' + providersHtml + "</div>";
      wrap.appendChild(section);
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

  function safe(name, fn) {
    try { fn(); } catch (e) { console.error("[render:" + name + "]", e); }
  }

  function renderAll() {
    // Each step runs in isolation: a stale-cache mismatch or a bad edit in one
    // section must never blank the rest of the page (or block scanReveal below,
    // which is what actually makes content visible).
    safe("i18n", applyStaticI18n);
    safe("heroRole", renderHeroRole);
    safe("heroMeta", renderHeroMeta);
    safe("heroStats", renderHeroStats);
    safe("about", renderAbout);
    safe("education", function () { renderTimeline("educationList", SITE.education); });
    safe("experience", function () { renderTimeline("experienceList", SITE.experience); });
    safe("projects", renderProjectCatalog);
    safe("skills", renderSkills);
    safe("certifications", renderCertifications);
    safe("contact", renderContact);
    safe("activeNav", updateActiveNav);
    scanReveal();
  }

  /* ---------------- Language ---------------- */
  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    state.lang = lang;
    localStorage.setItem("site-lang", lang);
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      var active = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
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
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      var active = b.getAttribute("data-lang") === state.lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });

    document.getElementById("backTop").addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    initMobileNav();
    initScrollEffects();
    renderAll();
  });

})();
