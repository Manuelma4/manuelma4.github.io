/* ==========================================================================
   Manuel David Maya Rosero — Portfolio app logic.
   Renders window.SITE content, handles i18n, theme, the project filter,
   architecture case studies and the command palette.
   Static ES2017+ with local Lucide SVGs and optional Motion Mini enhancement.
   ========================================================================== */
(function () {
  "use strict";

  var SITE = window.SITE;
  var LANGS = ["es", "en", "fr"];
  var STAGGER_MAX = 8; // clamp per-card entrance delay for long grids/lists
  var MONTHS = {
    es: ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    fr: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
  };

  /* Lucide 1.47.0: only the icons used by this site, in a local SVG sprite.
     Brand marks remain separate because they are not part of Lucide's set. */
  var BRAND_ICONS = {
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8.2" r="0.4" fill="currentColor"/><path d="M8 11v6.2"/><path d="M12.2 17.2V13a2 2 0 0 1 4 0v4.2M12.2 17.2v-6"/>',
    github: '<path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.65-.2.65-.47v-1.9c-2.6.57-3.15-1.13-3.15-1.13-.43-1.08-1.04-1.37-1.04-1.37-.86-.58.07-.57.07-.57.94.07 1.44.97 1.44.97.84 1.43 2.2 1.02 2.75.78.08-.6.33-1.02.6-1.26-2.08-.24-4.27-1.04-4.27-4.62 0-1.02.37-1.86.96-2.51-.1-.24-.42-1.2.1-2.5 0 0 .8-.25 2.6.96a9 9 0 0 1 4.74 0c1.8-1.21 2.6-.96 2.6-.96.52 1.3.2 2.26.1 2.5.6.65.96 1.49.96 2.51 0 3.59-2.2 4.38-4.29 4.61.34.3.64.87.64 1.76v2.6c0 .27.15.58.65.47A9.5 9.5 0 0 0 12 2.5Z"/>'
  };
  function icon(name, size) {
    size = size || 18;
    var body = BRAND_ICONS[name] || '<use href="assets/img/icons/lucide-1.47.0.svg#' + name + '"></use>';
    return '<svg class="icon" viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + body + '</svg>';
  }

  /* ---------------- Storage / URL helpers (never throw) ---------------- */
  function storageGet(key) { try { return window.localStorage.getItem(key); } catch (e) { return null; } }
  function storageSet(key, value) { try { window.localStorage.setItem(key, value); } catch (e) { /* private mode */ } }
  function queryParam(name) {
    var m = new RegExp("[?&]" + name + "=([^&#]*)").exec(window.location.search);
    return m ? decodeURIComponent(m[1]) : null;
  }

  /* ---------------- State ---------------- */
  var state = {
    lang: detectLang(),
    filter: "all"
  };

  function detectLang() {
    var fromUrl = queryParam("lang");
    if (fromUrl && LANGS.indexOf(fromUrl) !== -1) return fromUrl;
    var stored = storageGet("site-lang");
    if (stored && LANGS.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) !== -1 ? nav : "en";
  }

  function t(key) {
    var dict = SITE.ui[state.lang] || SITE.ui.en;
    return dict[key] !== undefined ? dict[key] : key;
  }
  function L(field) {
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[state.lang] !== undefined ? field[state.lang] : field.en;
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }
  function attrText(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
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
  function reducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* ---------------- i18n: static [data-i18n] nodes ---------------- */
  function applyStaticI18n() {
    document.documentElement.lang = state.lang;
    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) {
      els[i].textContent = t(els[i].getAttribute("data-i18n"));
    }
    var ariaEls = document.querySelectorAll("[data-i18n-aria]");
    for (var j = 0; j < ariaEls.length; j++) {
      ariaEls[j].setAttribute("aria-label", t(ariaEls[j].getAttribute("data-i18n-aria")));
    }
    document.title = SITE.meta.name + " — " + L(SITE.meta.role);
    var brandSub = document.getElementById("brandSub");
    if (brandSub) brandSub.textContent = L(SITE.meta.role);
    var cvPath = SITE.meta.cvFiles[state.lang] || SITE.meta.cvFiles.en;
    var cvName = cvPath.split("/").pop();
    ["heroCvBtn", "contactCvBtn"].forEach(function (id) {
      var link = document.getElementById(id);
      if (!link) return;
      link.href = cvPath;
      link.setAttribute("download", cvName);
    });
  }

  /* ---------------- Renderers ---------------- */

  function renderHero() {
    var role = document.getElementById("heroRole");
    if (role) role.textContent = t("hero_role_line");

    var meta = document.getElementById("heroMeta");
    if (meta) {
      meta.innerHTML = "";
      [
        { icon: "mail", text: SITE.meta.email, href: "mailto:" + SITE.meta.email },
        { icon: "phone", text: SITE.meta.phoneDisplay, href: "tel:" + SITE.meta.phoneHref },
        { icon: "pin", text: L(SITE.meta.location), href: null },
        { icon: "linkedin", text: "/in/" + SITE.meta.linkedinUser, href: SITE.meta.linkedinUrl },
        { icon: "github", text: "@" + SITE.meta.githubUser, href: SITE.meta.githubUrl }
      ].forEach(function (it) {
        var node = it.href ? el("a", "hero-meta-item") : el("span", "hero-meta-item");
        if (it.href) {
          node.href = it.href;
          if (it.href.indexOf("http") === 0) { node.target = "_blank"; node.rel = "noopener"; }
        }
        node.innerHTML = icon(it.icon, 16) + "<span>" + it.text + "</span>";
        meta.appendChild(node);
      });
    }

    var facts = document.getElementById("heroFacts");
    if (facts) {
      facts.innerHTML = (SITE.heroFacts || []).map(function (f) {
        return '<div class="hero-fact"><dt>' + L(f.label) + "</dt><dd>" + L(f.value) + "</dd></div>";
      }).join("");
    }
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
        "<div><h3>" + L(h.title) + "</h3><p>" + L(h.text) + "</p></div>";
      hi.appendChild(card);
    });
  }

  /* ---- Architecture case studies: applications with an architecture diagram ---- */
  /* Node kinds map to a Lucide icon; `tech` chips are coloured by language. */
  var NODE_ICONS = {
    client: "monitor", service: "server", store: "database", source: "fileText", external: "cloud",
    output: "chart", gateway: "network", queue: "arrowLeftRight", llm: "brain", worker: "cpu",
    proxy: "shield", ops: "activity", cluster: "container", cache: "zap", storage: "hardDrive", ci: "gitBranch",
    app: "layoutDashboard", people: "users", check: "listChecks"
  };
  var TECH_TONE = {
    Python: "primary", TypeScript: "violet", JavaScript: "violet", Java: "accent", Go: "aqua",
    "C#": "rose", Kotlin: "rose", Scala: "rose", Rust: "accent", SQL: "muted", VBA: "muted"
  };
  var QUALITY_ICONS = {
    scalability: "zap", availability: "shield", operability: "activity", maintainability: "wrench",
    security: "lock", observability: "gauge", reproducibility: "refresh", testability: "listChecks"
  };

  function techChip(name) {
    return '<span class="dg-tech dg-tone-' + (TECH_TONE[name] || "muted") + '"><i aria-hidden="true"></i>' + attrText(name) + "</span>";
  }

  function diagramHtml(d, figNumber) {
    var techs = [];
    var groups = (d.groups || []).map(function (g) {
      return (
        '<div class="dg-group dg-tone-' + attrText(g.tone || "neutral") + '" style="--col:' + g.col + ";--row:" + g.row +
          ";--cs:" + (g.colSpan || 1) + ";--rs:" + (g.rowSpan || 1) + '">' +
          '<span class="dg-group-label">' + (g.icon ? icon(g.icon, 11) : "") + "<span>" + L(g.label) + "</span></span>" +
        "</div>"
      );
    }).join("");
    var nodes = d.nodes.map(function (n) {
      var kind = n.kind || "service";
      var cls = "dg-node dg-kind-" + kind + (n.primary ? " is-primary" : "") + (n.replicas ? " has-replicas" : "");
      if (n.tech && techs.indexOf(n.tech) === -1) techs.push(n.tech);
      return (
        '<div class="' + cls + '" data-node="' + attrText(n.id) + '" style="--col:' + n.col + ";--row:" + n.row + '">' +
          (n.replicas ? '<span class="dg-replicas" title="' + attrText(n.replicas + " " + t("work_replicas")) + '">×' + n.replicas + "</span>" : "") +
          '<span class="dg-ic">' + icon(n.icon || NODE_ICONS[kind] || "server", 14) + "</span>" +
          '<span class="dg-label">' + L(n.label) + "</span>" +
          (n.sub ? '<span class="dg-sub">' + L(n.sub) + "</span>" : "") +
          (n.tech ? techChip(n.tech) : "") +
        "</div>"
      );
    }).join("");
    var labels = d.edges.map(function (e, i) {
      return e.label ? '<span class="dg-edge-label' + (e.kind ? " is-" + attrText(e.kind) : "") + '" data-edge="' + i + '">' + L(e.label) + "</span>" : "";
    }).join("");
    var head = (d.style || techs.length)
      ? '<div class="dg-head">' +
          (d.style ? '<span class="dg-style">' + icon(d.styleIcon || "layers", 13) + "<span>" + L(d.style) + "</span></span>" : "") +
          (techs.length ? '<span class="dg-techs">' + techs.map(techChip).join("") + "</span>" : "") +
        "</div>"
      : "";
    var pipeline = (d.pipeline && d.pipeline.length)
      ? '<div class="dg-pipeline"><span class="dg-pipeline-title">' + icon("gitBranch", 13) + t("work_cicd") + "</span><ol>" +
          d.pipeline.map(function (p) {
            return "<li><b>" + L(p.label) + "</b>" + (p.sub ? "<span>" + L(p.sub) + "</span>" : "") + "</li>";
          }).join("") +
        "</ol></div>"
      : "";
    return (
      '<figure class="dg" data-cols="' + d.cols + '" data-rows="' + d.rows + '">' +
        head +
        '<div class="dg-canvas" style="--cols:' + d.cols + ";--rows:" + d.rows + '">' +
          groups +
          '<svg class="dg-wires" aria-hidden="true" focusable="false"></svg>' +
          nodes + labels +
        "</div>" +
        pipeline +
        '<figcaption><span class="dg-fig">' + t("work_fig") + " " + figNumber + "</span> " + L(d.caption) + "</figcaption>" +
      "</figure>"
    );
  }

  function qualitiesHtml(list) {
    if (!list || !list.length) return "";
    return '<ul class="work-qualities">' + list.map(function (q) {
      return (
        '<li><span class="wq-key">' + icon(QUALITY_ICONS[q.key] || "check", 13) + "<span>" + t("quality_" + q.key) + "</span></span>" +
        '<span class="wq-text">' + L(q.text) + "</span></li>"
      );
    }).join("") + "</ul>";
  }

  function renderWork() {
    var wrap = document.getElementById("workList");
    if (!wrap) return;
    wrap.innerHTML = (SITE.work || []).map(function (w, i) {
      var points = (w.points && w.points[state.lang] ? w.points[state.lang] : []).map(function (p) { return "<li>" + p + "</li>"; }).join("");
      var stack = (w.stack || []).map(function (s) { return '<span class="tag">' + s + "</span>"; }).join("");
      var num = (i + 1 < 10 ? "0" : "") + (i + 1);
      var qualities = qualitiesHtml(w.qualities);
      return (
        '<article class="work-item stagger-item" id="work-' + attrText(w.id) + '" style="--i:' + Math.min(i, STAGGER_MAX) + '">' +
          '<header class="work-head">' +
            '<div class="work-meta"><span class="work-num">' + num + "</span><span>" + L(w.org) + "</span><span>" + w.year + "</span>" +
              '<span class="work-kind work-kind-' + attrText(w.kind) + '">' + t("work_kind_" + w.kind) + "</span></div>" +
            "<h3>" + L(w.title) + "</h3>" +
            '<p class="work-tagline">' + L(w.tagline) + "</p>" +
          "</header>" +
          '<div class="work-body">' +
            '<div class="work-copy">' +
              '<p class="work-summary">' + L(w.summary) + "</p>" +
              (points ? '<ul class="work-points">' + points + "</ul>" : "") +
            "</div>" +
            '<aside class="work-side">' +
              (qualities ? '<div><div class="work-side-title">' + t("work_qualities") + "</div>" + qualities + "</div>" : "") +
              (stack ? '<div><div class="work-side-title">' + t("work_stack") + '</div><div class="tl-tags work-stack">' + stack + "</div></div>" : "") +
            "</aside>" +
          "</div>" +
          '<div class="work-figure">' + diagramHtml(w.diagram, i + 1) + "</div>" +
        "</article>"
      );
    }).join("");
    observeDiagrams();
  }

  /* Diagram wiring: nodes are laid out by CSS grid; connectors are measured
     from the DOM and drawn as orthogonal SVG paths, so they survive any
     restyle, language switch or viewport change. */
  var TRANSPOSE = { l: "t", r: "b", t: "l", b: "r" };
  var diagramObserver = ("ResizeObserver" in window) ? new ResizeObserver(function (entries) {
    entries.forEach(function (entry) { routeDiagram(entry.target.closest(".dg")); });
  }) : null;

  function observeDiagrams() {
    var figs = document.querySelectorAll(".dg");
    for (var i = 0; i < figs.length; i++) {
      routeDiagram(figs[i]);
      if (diagramObserver) diagramObserver.observe(figs[i].querySelector(".dg-canvas"));
    }
  }

  function portPoint(rect, side, pos) {
    if (side === "l") return { x: rect.left, y: rect.top + rect.height * pos };
    if (side === "r") return { x: rect.right, y: rect.top + rect.height * pos };
    if (side === "t") return { x: rect.left + rect.width * pos, y: rect.top };
    return { x: rect.left + rect.width * pos, y: rect.bottom };
  }

  /* True when a label box centred on (x, y) would overlap a node. */
  function labelHitsNode(p, rects) {
    var hw = 34, hh = 11;
    for (var id in rects) {
      var r = rects[id];
      if (p.x + hw > r.left + 2 && p.x - hw < r.right - 2 && p.y + hh > r.top + 2 && p.y - hh < r.bottom - 2) return true;
    }
    return false;
  }

  function arrowMarker(id, style) {
    return (
      '<marker id="' + id + '" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">' +
        '<path d="M1 1.5 8.5 5 1 8.5" fill="none" stroke="currentColor"' + (style ? ' style="' + style + '"' : "") +
        ' stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></marker>'
    );
  }

  /* Resolved grid tracks of a canvas, so an edge can pass through a cell
     (integer col/row = track centre, half values = the gap after it). */
  function gridTracks(canvas) {
    var cs = getComputedStyle(canvas);
    function px(v) { return parseFloat(v) || 0; }
    var cols = cs.gridTemplateColumns.split(" ").map(px);
    var rows = cs.gridTemplateRows.split(" ").map(px);
    var gx = px(cs.columnGap), gy = px(cs.rowGap);
    var ox = px(cs.borderLeftWidth) + px(cs.paddingLeft), oy = px(cs.borderTopWidth) + px(cs.paddingTop);
    function pos(tracks, gap, offset, i) {
      var k = Math.floor(i), start = offset;
      for (var j = 0; j < k; j++) start += (tracks[j] || 0) + gap;
      if (i < 0) return offset / 2;
      if (i === k) return start + (tracks[k] || 0) / 2;
      return start + (tracks[k] || 0) + gap / 2;
    }
    return { x: function (c) { return pos(cols, gx, ox, c); }, y: function (r) { return pos(rows, gy, oy, r); } };
  }

  function routeDiagram(fig) {
    if (!fig) return;
    var article = fig.closest(".work-item");
    var spec = null;
    (SITE.work || []).forEach(function (w) { if (article && article.id === "work-" + w.id) spec = w.diagram; });
    if (!spec) return;

    if (!fig.dataset.uid) fig.dataset.uid = String(Math.random()).slice(2, 8);
    var uid = fig.dataset.uid;
    var canvas = fig.querySelector(".dg-canvas");
    var svg = fig.querySelector(".dg-wires");
    // Narrow containers flip the grid: columns become rows, so flows read top-down.
    var narrow = fig.clientWidth < spec.cols * 138;
    fig.classList.toggle("is-transposed", narrow);

    var base = canvas.getBoundingClientRect();
    if (!base.width) return;
    var rects = {};
    var nodes = canvas.querySelectorAll(".dg-node");
    for (var i = 0; i < nodes.length; i++) {
      var r = nodes[i].getBoundingClientRect();
      rects[nodes[i].getAttribute("data-node")] = {
        left: r.left - base.left, right: r.right - base.left,
        top: r.top - base.top, bottom: r.bottom - base.top,
        width: r.width, height: r.height
      };
    }

    var paths = "";
    var tracks = gridTracks(canvas);
    spec.edges.forEach(function (e, idx) {
      var a = rects[e.from], b = rects[e.to];
      if (!a || !b) return;
      var sides = e.sides || "rl";
      var s1 = sides.charAt(0), s2 = sides.charAt(1);
      if (narrow) { s1 = TRANSPOSE[s1]; s2 = TRANSPOSE[s2]; }
      var p1 = portPoint(a, s1, e.fromPos == null ? 0.5 : e.fromPos);
      var p2 = portPoint(b, s2, e.toPos == null ? 0.5 : e.toPos);
      var h1 = s1 === "l" || s1 === "r", h2 = s2 === "l" || s2 === "r";
      var pts;
      if (e.via && e.via.length) {
        // Explicit waypoints: orthogonal hops through the listed cells.
        pts = [p1];
        var horiz = h1;
        e.via.forEach(function (v) {
          var vc = narrow ? { col: v.row, row: v.col } : v;
          var w = { x: tracks.x(vc.col), y: tracks.y(vc.row) };
          var last = pts[pts.length - 1];
          if (horiz) { if (Math.abs(w.x - last.x) > 1.5) pts.push({ x: w.x, y: last.y }); }
          else if (Math.abs(w.y - last.y) > 1.5) pts.push({ x: last.x, y: w.y });
          var prev = pts[pts.length - 1];
          if (Math.abs(prev.x - w.x) > 1.5 || Math.abs(prev.y - w.y) > 1.5) pts.push(w);
          var q = pts[pts.length - 2];
          horiz = Math.abs(pts[pts.length - 1].y - q.y) < 1.5;
        });
        var tail = pts[pts.length - 1];
        if (h2) { if (Math.abs(tail.y - p2.y) > 1.5) pts.push({ x: tail.x, y: p2.y }); }
        else if (Math.abs(tail.x - p2.x) > 1.5) pts.push({ x: p2.x, y: tail.y });
        pts.push(p2);
      } else if (h1 && h2) {
        if (Math.abs(p1.y - p2.y) < 1.5) pts = [p1, p2];
        else { var mx = (p1.x + p2.x) / 2; pts = [p1, { x: mx, y: p1.y }, { x: mx, y: p2.y }, p2]; }
      } else if (!h1 && !h2) {
        if (Math.abs(p1.x - p2.x) < 1.5) pts = [p1, p2];
        else { var my = (p1.y + p2.y) / 2; pts = [p1, { x: p1.x, y: my }, { x: p2.x, y: my }, p2]; }
      } else if (h1) {
        pts = [p1, { x: p2.x, y: p1.y }, p2];
      } else {
        pts = [p1, { x: p1.x, y: p2.y }, p2];
      }
      var dAttr = pts.map(function (p, k) { return (k ? "L" : "M") + p.x.toFixed(1) + " " + p.y.toFixed(1); }).join(" ");
      var cls = "dg-wire" + (e.dashed ? " is-dashed" : "") + (e.kind ? " is-" + e.kind : "");
      var marker = "dg-arrow-" + uid + (e.kind === "async" ? "-async" : "");
      paths += '<path class="' + cls + '" d="' + dAttr + '" marker-end="url(#' + marker + ')"/>';

      if (e.label) {
        // The label goes on the longest segment whose midpoint is clear of every
        // node; `labelSeg` pins it to a given segment instead.
        var segs = [];
        for (var k = 1; k < pts.length; k++) {
          segs.push({
            len: Math.abs(pts[k].x - pts[k - 1].x) + Math.abs(pts[k].y - pts[k - 1].y),
            x: (pts[k].x + pts[k - 1].x) / 2, y: (pts[k].y + pts[k - 1].y) / 2
          });
        }
        var pick = (e.labelSeg != null && segs[e.labelSeg]) ? segs[e.labelSeg] : null;
        if (!pick) {
          var ordered = segs.slice().sort(function (p, q) { return q.len - p.len; });
          for (var s = 0; s < ordered.length && !pick; s++) if (!labelHitsNode(ordered[s], rects)) pick = ordered[s];
          if (!pick) pick = ordered[0];
        }
        var lab = canvas.querySelector('.dg-edge-label[data-edge="' + idx + '"]');
        if (lab && pick) { lab.style.left = pick.x.toFixed(1) + "px"; lab.style.top = pick.y.toFixed(1) + "px"; }
      }
    });

    svg.setAttribute("viewBox", "0 0 " + base.width.toFixed(1) + " " + base.height.toFixed(1));
    svg.innerHTML =
      "<defs>" + arrowMarker("dg-arrow-" + uid, "") + arrowMarker("dg-arrow-" + uid + "-async", "stroke: var(--accent)") + "</defs>" +
      paths;
  }

  /* ---- Timeline (experience & education) ---- */
  function renderTimeline(containerId, items) {
    var wrap = document.getElementById(containerId);
    wrap.innerHTML = "";
    items.forEach(function (item, i) {
      var wrapper = el("div", "tl-item stagger-item" + (item.ongoing ? " is-current" : ""));
      wrapper.style.setProperty("--i", Math.min(i, STAGGER_MAX));
      var bullets = item.bullets[state.lang].map(function (b) { return "<li>" + b + "</li>"; }).join("");
      var tags = (item.tags || []).map(function (tg) { return '<span class="tag">' + tg + "</span>"; }).join("");
      var placeLine = item.place ? L(item.place) : "";

      wrapper.innerHTML =
        '<div class="tl-dot">' + icon(item.icon || "briefcase", 17) + "</div>" +
        '<div class="tl-card">' +
          '<div class="tl-top">' +
            (item.logo ? '<img class="tl-logo' + (item.logoBg === "dark" ? " is-dark" : "") + '" src="' + attrText(item.logo) + '" alt="" width="44" height="44" loading="lazy" decoding="async" onerror="this.remove()">' : "") +
            '<div class="tl-head-copy"><h3 class="tl-title">' + (item.title ? L(item.title) : L(item.degree)) + "</h3>" +
            '<div class="tl-org">' + L(item.org) + "</div></div>" +
            '<div class="tl-date">' + (item.ongoing ? '<span class="tl-live" aria-hidden="true"></span>' : "") + L(item.dateLabel) + "</div>" +
          "</div>" +
          (placeLine ? '<div class="tl-place">' + placeLine + "</div>" : "") +
          '<ul class="tl-bullets">' + bullets + "</ul>" +
          (tags ? '<div class="tl-tags">' + tags + "</div>" : "") +
        "</div>";
      wrap.appendChild(wrapper);
    });
  }

  /* ---- Projects: institution → course → work, with an area filter ---- */
  function projectCard(item, i) {
    var level = item.level || "standard";
    var media = (item.images && item.images.length)
      ? '<div class="project-card-media">' + item.images.map(function (im) {
          var cap = L(im.cap);
          return '<figure><a href="' + attrText(im.src) + '" target="_blank" rel="noopener noreferrer" aria-label="' + attrText(cap) + '"><img src="' + attrText(im.src) + '" alt="' + attrText(cap) + '" loading="lazy" decoding="async"></a><figcaption>' + cap + "</figcaption></figure>";
        }).join("") + "</div>"
      : "";
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
      '<article class="project-card project-card-' + level + ' stagger-item" data-area="' + attrText(item.area || "") + '" style="--i:' + Math.min(i || 0, STAGGER_MAX) + '">' +
        media +
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

  var FILTERS = ["all", "software", "ml", "econ"];

  function renderProjectFilter() {
    var wrap = document.getElementById("projectFilter");
    if (!wrap) return;
    var counts = { all: 0 };
    SITE.projectCatalog.forEach(function (g) {
      g.courses.forEach(function (c) {
        c.items.forEach(function (it) { counts.all++; counts[it.area] = (counts[it.area] || 0) + 1; });
      });
    });
    wrap.setAttribute("aria-label", t("filter_label"));
    wrap.innerHTML = FILTERS.map(function (f) {
      var active = state.filter === f;
      return '<button type="button" class="filter-chip' + (active ? " is-active" : "") + '" data-filter="' + f + '" aria-pressed="' + (active ? "true" : "false") + '">' +
        "<span>" + t("filter_" + f) + '</span><span class="filter-count">' + (counts[f] || 0) + "</span></button>";
    }).join("");
  }

  function renderProjectCatalog() {
    var wrap = document.getElementById("projectCatalog");
    var hasRendered = wrap.dataset.rendered === "true";
    var openGroups = Array.prototype.map.call(
      wrap.querySelectorAll(".project-institution[open]"),
      function (details) { return details.dataset.projectId; }
    );
    var institutionOrder = ["dauphine-iren", "telecom-paris", "unal"];
    var filtering = state.filter !== "all";
    var groups = SITE.projectCatalog.slice().sort(function (a, b) {
      return institutionOrder.indexOf(a.id) - institutionOrder.indexOf(b.id);
    }).map(function (group) {
      var courses = group.courses.map(function (course) {
        return { name: course.name, items: course.items.filter(function (it) { return !filtering || it.area === state.filter; }) };
      }).filter(function (course) { return course.items.length; });
      return { group: group, courses: courses };
    }).filter(function (entry) { return entry.courses.length; });

    wrap.innerHTML = groups.map(function (entry, groupIndex) {
      var group = entry.group;
      var courses = entry.courses.map(function (course) {
        return (
          '<section class="project-course">' +
            '<div class="project-course-head">' +
              "<h4>" + L(course.name) + "</h4>" +
            "</div>" +
            '<div class="project-course-grid">' + course.items.map(projectCard).join("") + "</div>" +
          "</section>"
        );
      }).join("");

      var isOpen = filtering
        ? true
        : (hasRendered && !wrap.dataset.filtered ? openGroups.indexOf(group.id) !== -1 : false);

      return (
        '<details class="project-institution" data-project-id="' + attrText(group.id) + '" data-c="' + (groupIndex % 3) + '"' + (isOpen ? " open" : "") + '>' +
          '<summary class="project-institution-head">' +
            (group.photo
              ? '<img class="project-institution-photo" src="' + attrText(group.photo) + '" alt="" width="88" height="88" loading="lazy" decoding="async">'
              : '<div class="project-institution-icon">' + icon("cap", 22) + "</div>") +
            '<div class="project-institution-copy"><div class="project-institution-title">' +
              "<h3>" + group.institution + "</h3>" +
            "</div><p>" + L(group.description) + "</p></div>" +
            '<span class="project-institution-toggle" aria-hidden="true"></span>' +
          "</summary>" +
          '<div class="project-courses">' + courses + "</div>" +
        "</details>"
      );
    }).join("");
    wrap.dataset.rendered = "true";
    if (filtering) wrap.dataset.filtered = "true"; else delete wrap.dataset.filtered;
  }

  function setFilter(filter) {
    if (FILTERS.indexOf(filter) === -1 || filter === state.filter) return;
    state.filter = filter;
    renderProjectFilter();
    renderProjectCatalog();
    scanReveal();
  }

  /* ---- Skills & languages ---- */
  function renderSkills() {
    var wrap = document.getElementById("skillsList");
    wrap.innerHTML = "";
    SITE.skills.forEach(function (s, idx) {
      var card = el("div", "skill-card stagger-item");
      card.setAttribute("data-c", idx % 5);
      card.style.setProperty("--i", Math.min(idx, STAGGER_MAX));
      var tags = s.items.map(function (i) { return '<span class="tag">' + i + "</span>"; }).join("");
      card.innerHTML =
        '<div class="skill-card-head"><div class="ic">' + icon(s.icon, 18) + "</div><h3>" + L(s.name) + "</h3></div>" +
        '<div class="skill-tags">' + tags + "</div>";
      wrap.appendChild(card);
    });
    if (SITE.skills.length % 2 === 1) {
      wrap.lastElementChild.classList.add("is-wide");
    }

    var lm = document.getElementById("langMeters");
    lm.innerHTML = "";
    SITE.languages.forEach(function (lg) {
      var bars = "";
      for (var i = 1; i <= 5; i++) bars += '<i class="' + (i <= lg.fill ? "is-filled" : "") + '"></i>';
      var card = el("div", "lang-meter");
      card.innerHTML =
        '<div class="lang-meter-top"><h4>' + L(lg.name) + "</h4><span>" + L(lg.level) + "</span></div>" +
        '<div class="lang-meter-bar" aria-hidden="true">' + bars + "</div>";
      lm.appendChild(card);
    });
  }

  /* ---- Certifications: type → provider → credential ---- */
  function typeLabel(type, count) {
    var key = "certs_type_" + type;
    var requestedKey = count === 1 ? key + "_1" : key;
    var label = t(requestedKey);
    return label === requestedKey ? type : label;
  }
  function certCategory(type) {
    if (type === "micro" || type === "applied") return "micro";
    if (type === "knowledge") return "knowledge";
    return "certification";
  }
  function certCategoryIcon(category) {
    if (category === "micro") return "layers";
    if (category === "knowledge") return "cap";
    return "award";
  }
  function credentialCountLabel(count) {
    return count + " " + t(count === 1 ? "certs_credentials_1" : "certs_credentials");
  }

  function certCard(item, issuer, i) {
    var itemType = item.type || "knowledge";
    var tip = t("certs_issued") + " " + fmtDate(item.date);
    if (item.expires) tip += " · " + t("certs_expires") + " " + fmtDate(item.expires);
    if (item.id) tip += " · " + t("certs_credential") + ": " + item.id;
    if (item.number) tip += " · " + t("certs_number") + ": " + item.number;

    var media = item.image
      ? '<div class="cert-item-media"><img src="' + attrText(item.image) + '" alt="' + attrText(t("certs_badge_alt") + " " + item.title) + '" loading="lazy" decoding="async"></div>'
      : '<div class="cert-item-media cert-item-media-fallback">' + icon("award", 44) + "</div>";

    var skills = (item.skills || []).map(function (skill) {
      return '<span class="cert-skill">' + skill + "</span>";
    }).join("");
    if (item.more) skills += '<span class="cert-skill cert-skill-more">+' + item.more + " " + t("certs_more_skills") + "</span>";

    var dates = "<span><b>" + t("certs_issued") + ":</b> " + fmtDate(item.date) + "</span>";
    if (item.expires) dates += "<span><b>" + t("certs_expires") + ":</b> " + fmtDate(item.expires) + "</span>";

    var action = item.url
      ? '<a class="cert-verify" href="' + attrText(item.url) + '" target="_blank" rel="noopener noreferrer" title="' + attrText(tip) + '" aria-label="' + attrText(t("certs_verify") + ": " + item.title) + '"><span>' + t("certs_verify") + "</span>" + icon("external", 14) + "</a>"
      : '<span class="cert-verify is-disabled" title="' + attrText(tip) + '">' + t("certs_verify") + "</span>";

    return (
      '<article class="cert-item stagger-item" style="--i:' + Math.min(i || 0, STAGGER_MAX) + '">' +
        media +
        '<div class="cert-item-content">' +
          '<div class="cert-item-top"><span class="cert-item-issuer">' + issuer + '</span><span class="cert-kind">' + typeLabel(itemType, 1) + "</span></div>" +
          '<h5 class="cert-item-title">' + item.title + "</h5>" +
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

    // The lede is a template, so the numbers can never drift from the data.
    var lede = document.getElementById("certsLede");
    if (lede) {
      lede.textContent = t("certs_lede")
        .replace("{total}", total).replace("{cert}", counts.certification)
        .replace("{micro}", counts.micro).replace("{knowledge}", counts.knowledge);
    }

    var statsWrap = document.getElementById("certsStats");
    if (statsWrap) {
      statsWrap.innerHTML = [
        { num: String(total), label: t("certs_stat_total") },
        { num: String(counts.certification), label: t("certs_stat_certification") },
        { num: String(counts.micro), label: t("certs_stat_micro") },
        { num: String(counts.knowledge), label: t("certs_stat_knowledge") }
      ].map(function (s) { return '<div class="stat-tile"><b>' + s.num + "</b><span>" + s.label + "</span></div>"; }).join("");
    }

    var wrap = document.getElementById("certsGroups");
    var hasRendered = wrap.dataset.rendered === "true";
    var openCategories = Array.prototype.map.call(
      wrap.querySelectorAll(".cert-type-section[open]"),
      function (details) { return details.dataset.certCategory; }
    );
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
      var section = el("details", "cert-type-section cert-type-" + category);
      section.dataset.certCategory = category;
      section.open = hasRendered && openCategories.indexOf(category) !== -1;
      var providersHtml = providers.map(function (provider) {
        return (
          '<section class="cert-provider" data-c="' + (provider.colorIndex % 5) + '">' +
            '<div class="cert-provider-head">' +
              '<div class="ic">' + icon(provider.icon, 18) + "</div>" +
              "<div><h4>" + provider.issuer + "</h4><span>" + credentialCountLabel(provider.items.length) + "</span></div>" +
            "</div>" +
            '<div class="cert-items-grid">' + provider.items.map(function (item, i) { return certCard(item, provider.issuer, i); }).join("") + "</div>" +
          "</section>"
        );
      }).join("");

      section.innerHTML =
        '<summary class="cert-type-head">' +
          '<div class="cert-type-icon">' + icon(certCategoryIcon(category), 22) + "</div>" +
          '<div class="cert-type-copy"><div class="cert-type-title-line"><h3>' + t("certs_category_" + category) + '</h3><span class="cert-type-count">' + categoryCount + "</span></div>" +
          "<p>" + t("certs_category_" + category + "_desc") + "</p></div>" +
          '<span class="cert-type-toggle" aria-hidden="true"></span>' +
        "</summary>" +
        '<div class="cert-providers">' + providersHtml + "</div>";
      wrap.appendChild(section);
    });
    wrap.dataset.rendered = "true";
  }

  function renderContact() {
    var wrap = document.getElementById("contactLinks");
    wrap.innerHTML = "";
    [
      { icon: "mail", label: t("contact_label_email"), text: SITE.meta.email, href: "mailto:" + SITE.meta.email },
      { icon: "phone", label: t("contact_label_phone"), text: SITE.meta.phoneDisplay, href: "tel:" + SITE.meta.phoneHref },
      { icon: "linkedin", label: "LinkedIn", text: "linkedin.com/in/" + SITE.meta.linkedinUser, href: SITE.meta.linkedinUrl },
      { icon: "github", label: "GitHub", text: "github.com/" + SITE.meta.githubUser, href: SITE.meta.githubUrl }
    ].forEach(function (it) {
      var a = el("a", "contact-tile");
      a.href = it.href;
      if (it.href.indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
      a.innerHTML =
        '<span class="contact-tile-ic">' + icon(it.icon, 18) + "</span>" +
        '<span class="contact-tile-body"><span class="contact-tile-label">' + it.label + '</span><span class="contact-tile-value">' + it.text + "</span></span>" +
        '<span class="contact-tile-arrow">' + icon(it.href.indexOf("http") === 0 ? "external" : "arrowRight", 15) + "</span>";
      wrap.appendChild(a);
    });
    var meta = document.getElementById("contactMeta");
    if (meta) {
      var langs = (SITE.languages || []).map(function (lg) {
        var level = L(lg.level);
        return L(lg.name) + (/^c\d$/i.test(level) ? " " + level : "");
      }).join(" · ");
      meta.innerHTML =
        "<span>" + icon("pin", 14) + L(SITE.meta.location) + "</span>" +
        "<span>" + icon("globe", 14) + langs + "</span>";
    }
    var copyBtn = document.getElementById("copyEmailBtn");
    if (copyBtn) copyBtn.innerHTML = icon("copy", 16) + "<span>" + t("contact_copy") + "</span>";
  }

  function safe(name, fn) {
    try { fn(); } catch (e) { console.error("[render:" + name + "]", e); }
  }

  function renderAll() {
    // Rendering is independent of optional motion; content is visible by default.
    safe("i18n", applyStaticI18n);
    safe("hero", renderHero);
    safe("about", renderAbout);
    safe("work", renderWork);
    safe("education", function () { renderTimeline("educationList", SITE.education); });
    safe("experience", function () { renderTimeline("experienceList", SITE.experience); });
    safe("projectFilter", renderProjectFilter);
    safe("projects", renderProjectCatalog);
    safe("skills", renderSkills);
    safe("certifications", renderCertifications);
    safe("contact", renderContact);
    safe("theme", syncThemeToggle);
    safe("activeNav", updateActiveNav);
    scanReveal();
  }

  /* ---------------- Language ---------------- */
  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    function apply() {
      state.lang = lang;
      storageSet("site-lang", lang);
      document.querySelectorAll(".lang-switch button").forEach(function (b) {
        var active = b.getAttribute("data-lang") === lang;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", active ? "true" : "false");
      });
      renderAll();
    }
    if (document.startViewTransition && !reducedMotion()) document.startViewTransition(apply);
    else apply();
  }

  /* ---------------- Theme ---------------- */
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }
  function syncThemeToggle() {
    var btn = document.getElementById("themeToggle");
    if (!btn) return;
    var dark = currentTheme() === "dark";
    btn.innerHTML = icon(dark ? "sun" : "moon", 17);
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue("--page").trim() || (dark ? "#0f1417" : "#eceef1"));
  }
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    storageSet("site-theme", theme);
    syncThemeToggle();
  }
  function toggleTheme() { setTheme(currentTheme() === "dark" ? "light" : "dark"); }

  /* ---------------- Clipboard ---------------- */
  function copyEmail(feedbackEl) {
    var text = SITE.meta.email;
    function done() {
      if (!feedbackEl) return;
      var original = feedbackEl.innerHTML;
      feedbackEl.innerHTML = icon("check", 16) + "<span>" + t("contact_copied") + "</span>";
      feedbackEl.classList.add("is-done");
      window.setTimeout(function () { feedbackEl.innerHTML = original; feedbackEl.classList.remove("is-done"); }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { legacyCopy(text); done(); });
    } else { legacyCopy(text); done(); }
  }
  function legacyCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) { /* nothing else to try */ }
    document.body.removeChild(ta);
  }

  /* ---------------- Command palette (Ctrl/⌘ + K) ---------------- */
  var palette = { open: false, items: [], index: 0, lastFocus: null };

  function paletteCommands() {
    var go = [
      ["nav_home", "#home"], ["nav_about", "#about"], ["nav_work", "#work"], ["nav_experience", "#experience"],
      ["nav_projects", "#projects"], ["nav_education", "#education"], ["nav_skills", "#skills"],
      ["nav_certifications", "#certifications"], ["nav_contact", "#contact"]
    ].map(function (pair) {
      return { group: t("palette_group_go"), label: t(pair[0]), icon: "arrowRight", run: function () { scrollToTarget(pair[1]); } };
    });
    var actions = [
      { group: t("palette_group_actions"), label: t("palette_theme"), icon: currentTheme() === "dark" ? "sun" : "moon", run: toggleTheme },
      { group: t("palette_group_actions"), label: t("palette_copy_email"), hint: SITE.meta.email, icon: "copy", run: function () { copyEmail(null); } },
      { group: t("palette_group_actions"), label: t("palette_download_cv"), icon: "download", run: function () { var a = document.getElementById("heroCvBtn"); if (a) a.click(); } },
      { group: t("palette_group_actions"), label: t("palette_open_github"), hint: "@" + SITE.meta.githubUser, icon: "github", run: function () { window.open(SITE.meta.githubUrl, "_blank", "noopener"); } },
      { group: t("palette_group_actions"), label: t("palette_open_linkedin"), hint: "/in/" + SITE.meta.linkedinUser, icon: "linkedin", run: function () { window.open(SITE.meta.linkedinUrl, "_blank", "noopener"); } }
    ];
    var langs = [["es", "Español"], ["en", "English"], ["fr", "Français"]].map(function (pair) {
      return { group: t("palette_group_lang"), label: pair[1], hint: pair[0].toUpperCase(), icon: "globe", run: function () { setLang(pair[0]); } };
    });
    return go.concat(actions, langs);
  }

  function normalize(str) {
    return String(str).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  }

  function renderPaletteList() {
    var list = document.getElementById("paletteList");
    var query = normalize(document.getElementById("paletteInput").value.trim());
    var all = paletteCommands();
    palette.items = query
      ? all.filter(function (c) { return normalize(c.label + " " + (c.hint || "") + " " + c.group).indexOf(query) !== -1; })
      : all;
    if (palette.index >= palette.items.length) palette.index = Math.max(0, palette.items.length - 1);
    if (!palette.items.length) {
      list.innerHTML = '<li class="palette-empty" role="presentation">' + t("palette_empty") + "</li>";
      return;
    }
    var html = "", lastGroup = null;
    palette.items.forEach(function (c, i) {
      if (c.group !== lastGroup) { html += '<li class="palette-group" role="presentation">' + c.group + "</li>"; lastGroup = c.group; }
      html += '<li class="palette-item' + (i === palette.index ? " is-active" : "") + '" role="option" id="palette-opt-' + i + '" data-index="' + i + '" aria-selected="' + (i === palette.index ? "true" : "false") + '">' +
        icon(c.icon, 16) + '<span class="palette-label">' + c.label + "</span>" + (c.hint ? '<span class="palette-item-hint">' + c.hint + "</span>" : "") + "</li>";
    });
    list.innerHTML = html;
    var input = document.getElementById("paletteInput");
    input.setAttribute("aria-activedescendant", "palette-opt-" + palette.index);
    var active = list.querySelector(".palette-item.is-active");
    if (active && active.scrollIntoView) active.scrollIntoView({ block: "nearest" });
  }

  function openPalette() {
    var root = document.getElementById("palette");
    if (!root || palette.open) return;
    palette.open = true; palette.index = 0; palette.lastFocus = document.activeElement;
    root.hidden = false;
    document.documentElement.classList.add("has-palette");
    var input = document.getElementById("paletteInput");
    input.value = "";
    input.setAttribute("placeholder", t("palette_placeholder"));
    renderPaletteList();
    input.focus();
  }
  function closePalette() {
    var root = document.getElementById("palette");
    if (!root || !palette.open) return;
    palette.open = false;
    root.hidden = true;
    document.documentElement.classList.remove("has-palette");
    if (palette.lastFocus && palette.lastFocus.focus) palette.lastFocus.focus();
  }
  function runPaletteItem(i) {
    var cmd = palette.items[i];
    if (!cmd) return;
    closePalette();
    cmd.run();
  }

  function initPalette() {
    var root = document.getElementById("palette");
    if (!root) return;
    var input = document.getElementById("paletteInput");
    var list = document.getElementById("paletteList");
    var trigger = document.getElementById("paletteTrigger");
    var isMac = /Mac|iPhone|iPad/.test(navigator.platform || "");
    var kbd = document.getElementById("paletteKbd");
    if (kbd) kbd.textContent = isMac ? "⌘K" : "Ctrl K";

    if (trigger) trigger.addEventListener("click", openPalette);
    document.addEventListener("keydown", function (e) {
      if ((e.ctrlKey || e.metaKey) && !e.altKey && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        if (palette.open) closePalette(); else openPalette();
        return;
      }
      if (!palette.open) return;
      if (e.key === "Escape") { e.preventDefault(); closePalette(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); palette.index = (palette.index + 1) % Math.max(1, palette.items.length); renderPaletteList(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); palette.index = (palette.index - 1 + palette.items.length) % Math.max(1, palette.items.length); renderPaletteList(); }
      else if (e.key === "Enter") { e.preventDefault(); runPaletteItem(palette.index); }
      else if (e.key === "Tab") { e.preventDefault(); } // single focusable control: keep focus in the dialog
    });
    input.addEventListener("input", function () { palette.index = 0; renderPaletteList(); });
    list.addEventListener("click", function (e) {
      var item = e.target.closest && e.target.closest(".palette-item");
      if (item) runPaletteItem(Number(item.getAttribute("data-index")));
    });
    list.addEventListener("mousemove", function (e) {
      var item = e.target.closest && e.target.closest(".palette-item");
      if (!item) return;
      var i = Number(item.getAttribute("data-index"));
      if (i !== palette.index) { palette.index = i; renderPaletteList(); }
    });
    root.addEventListener("mousedown", function (e) { if (e.target === root) closePalette(); });
  }

  /* ---------------- Nav: scroll spy, mobile menu, back-to-top ---------------- */
  var navSections = [];
  function cacheNavSections() {
    navSections = Array.prototype.map.call(document.querySelectorAll(".nav-links a"), function (a) {
      return { link: a, section: document.querySelector(a.getAttribute("href")) };
    }).filter(function (p) { return p.section; });
  }
  function updateActiveNav() {
    if (!navSections.length) cacheNavSections();
    var scrollPos = window.scrollY + 140;
    var current = null;
    navSections.forEach(function (p) { if (p.section.offsetTop <= scrollPos) current = p.link; });
    navSections.forEach(function (p) {
      var active = p.link === current;
      p.link.classList.toggle("is-active", active);
      if (active) p.link.setAttribute("aria-current", "true"); else p.link.removeAttribute("aria-current");
    });
  }

  function initScrollEffects() {
    var navbar = document.getElementById("navbar");
    var backTop = document.getElementById("backTop");
    var ticking = false;
    function onFrame() {
      ticking = false;
      navbar.classList.toggle("is-scrolled", window.scrollY > 8);
      if (backTop) backTop.classList.toggle("is-visible", window.scrollY > 700);
      updateActiveNav();
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(onFrame); }
    }, { passive: true });
    onFrame();
  }

  /* Motion Mini is optional: no stylesheet ever hides these elements.
     Observe individual cards, not long section containers. Rebuilds disconnect
     detached nodes, and temporary animations are cancelled before re-rendering. */
  var entranceSelector = ".hero-card, .section-head, .about-text, .about-highlight, .stagger-item, .contact-card";
  var entranceSeen = new WeakSet();
  var entranceAnimations = new Map();
  var motionPreference = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;

  function finishEntrances() {
    entranceAnimations.forEach(function (animation) { animation.cancel(); });
    entranceAnimations.clear();
  }

  function enterCard(element) {
    if (entranceSeen.has(element)) return;
    entranceSeen.add(element);
    if (reducedMotion() || !window.PortfolioMotion || !Element.prototype.animate) return;
    try {
      var animation = window.PortfolioMotion.animate(element, {
        opacity: [0, 1], transform: ["translateY(8px)", "translateY(0px)"]
      }, { duration: 0.24, ease: [0.22, 1, 0.36, 1] });
      entranceAnimations.set(element, animation);
      animation.then(function () {
        // Release the transform so hover styles and SVG measurements stay native.
        animation.cancel();
        entranceAnimations.delete(element);
      });
    } catch (e) { /* Missing/unsupported animation never blocks the content. */ }
  }

  var revealObserver = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      enterCard(entry.target);
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: "0px 0px -20px 0px" }) : null;

  function scanReveal() {
    finishEntrances();
    if (revealObserver) revealObserver.disconnect();
    document.querySelectorAll(entranceSelector).forEach(function (element) {
      if (entranceSeen.has(element)) return;
      if (reducedMotion() || !revealObserver || !window.PortfolioMotion) {
        entranceSeen.add(element);
        return;
      }
      revealObserver.observe(element);
    });
  }

  if (motionPreference) {
    var onMotionChange = function () { scanReveal(); };
    if (motionPreference.addEventListener) motionPreference.addEventListener("change", onMotionChange);
    else if (motionPreference.addListener) motionPreference.addListener(onMotionChange);
  }

  function scrollToTarget(hash) {
    var target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth" });
    if (window.history && history.pushState) history.pushState(null, "", hash);
  }

  function initAnchorScroll() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var href = a.getAttribute("href");
      if (!href || href === "#" || !document.querySelector(href)) return;
      e.preventDefault();
      scrollToTarget(href);
    });
  }

  function initMobileNav() {
    var burger = document.getElementById("navBurger");
    var links = document.getElementById("navLinks");
    function setOpen(open) {
      links.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.documentElement.classList.toggle("has-menu", open);
    }
    burger.addEventListener("click", function () { setOpen(!links.classList.contains("is-open")); });
    links.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("is-open")) { setOpen(false); burger.focus(); }
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

    var themeBtn = document.getElementById("themeToggle");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

    var backTop = document.getElementById("backTop");
    if (backTop) backTop.addEventListener("click", function () { scrollToTarget("#home"); });

    var filterWrap = document.getElementById("projectFilter");
    if (filterWrap) filterWrap.addEventListener("click", function (e) {
      var chip = e.target.closest && e.target.closest(".filter-chip");
      if (chip) setFilter(chip.getAttribute("data-filter"));
    });

    var copyBtn = document.getElementById("copyEmailBtn");
    if (copyBtn) copyBtn.addEventListener("click", function () { copyEmail(copyBtn); });

    initMobileNav();
    initScrollEffects();
    initAnchorScroll();
    initPalette();
    renderAll();

    // Sections are empty until renderAll() runs, so the browser's own jump to a
    // deep link (#projects) lands in the wrong place. Re-apply it once content exists.
    if (window.location.hash.length > 1) {
      var deepLink = null;
      try { deepLink = document.querySelector(window.location.hash); } catch (e) { /* not a selector */ }
      if (deepLink) deepLink.scrollIntoView();
    }

    // Web fonts change node sizes: re-route the diagram connectors once they land.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(observeDiagrams);
    window.addEventListener("load", observeDiagrams);
  });

})();
