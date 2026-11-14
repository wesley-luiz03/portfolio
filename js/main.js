(function () {
  var D = window.DATA, L = window.I18N || {}, ICONS = window.ICONS || {}, CDN = "https://cdn.jsdelivr.net/npm/simple-icons@11/icons/";
  var $ = function (id) { return document.getElementById(id); }, B = document.body;
  var lang = "pt", PT = {}, sel = -1, cur = 5, TITLE = document.title;
  var OUT0 = "Passe o mouse ou toque numa barra para ver o cliente.";
  function el(tag, text, cls) { var e = document.createElement(tag); if (text) e.textContent = text; if (cls) e.className = cls; return e; }
  function icon(slug) { var i = el("span", "", "ic"); i.style.setProperty("--i", 'url("' + (ICONS[slug] || CDN + slug + ".svg") + '")'); return i; }
  function tr() { return L[lang] || {}; }
  function sv(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function ld(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }

  // Tema (padrão: claro)
  var th = $("theme");
  if (ld("tema2") === "dark") th.checked = false;
  function applyTheme() { document.documentElement.setAttribute("data-theme", th.checked ? "light" : "dark"); sv("tema2", th.checked ? "light" : "dark"); }
  th.onchange = applyTheme; applyTheme();

  // Menu lateral
  var bg = $("burger");
  function menu(open) { B.classList.toggle("menu", open); bg.setAttribute("aria-expanded", open ? "true" : "false"); }
  bg.onclick = function () { menu(!B.classList.contains("menu")); };
  $("veil").onclick = function () { menu(false); };
  $("drawer").onclick = function (e) { if (e.target.tagName === "A") menu(false); };
  document.onkeydown = function (e) { if (e.key === "Escape") menu(false); };

  // Cursor
  var dot = $("dot");
  window.addEventListener("pointermove", function (e) { if (e.pointerType === "mouse") { dot.style.opacity = 1; dot.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)"; } });

  // Habilidades
  function renderSkills() {
    var box = $("skills"), m = tr().sk || {}; box.innerHTML = "";
    D.skills.forEach(function (s) {
      var t = el("div", "", "sk"); t.appendChild(el("span", m[s[0]] || s[0]));
      if (s[1]) t.appendChild(icon(s[1])); else t.appendChild(el("span", s[2] || s[0].slice(0, 2), "gl"));
      box.appendChild(t);
    });
  }

  // Curva ABC
  var T = D.abc.reduce(function (s, d) { return s + d[1]; }, 0), max = D.abc[0][1], run = 0;
  var cum = D.abc.map(function (d) { run += d[1]; return run / T * 100; });
  var bars = $("bars"), cut = $("cut");
  function cls(i) { var a = +cut.value; return cum[i] <= a ? "A" : cum[i] <= 95 ? "B" : "C"; }
  function show(i) {
    sel = i; var t = tr(), n = D.abc[i][0], v = D.abc[i][1], c = cum[i], k = cls(i);
    [].forEach.call(bars.children, function (b, j) { b.setAttribute("aria-pressed", j === i ? "true" : "false"); });
    $("out").textContent = t.outf ? t.outf(n, v, c, k) : n + ": R$ " + v + " mil. Acumulado de " + c.toFixed(1).replace(".", ",") + "% do faturamento, classe " + k + ".";
  }
  D.abc.forEach(function (d, i) {
    var b = el("button", "", "bar-i"); b.type = "button"; b.style.height = (d[1] / max * 100) + "%";
    b.setAttribute("aria-pressed", "false"); b.setAttribute("aria-label", d[0]);
    b.onclick = b.onmouseenter = b.onfocus = function () { show(i); };
    bars.appendChild(b);
  });
  function paint() {
    var n = { A: 0, B: 0, C: 0 }, pa = 0, t = tr();
    D.abc.forEach(function (d, i) { var k = cls(i); n[k]++; bars.children[i].dataset.k = k; if (k === "A") pa += d[1]; });
    $("cutv").textContent = cut.value + "%";
    var p = pa / T * 100;
    $("sum").textContent = t.sumf ? t.sumf(n.A, D.abc.length, p) : n.A + " de " + D.abc.length + " clientes são classe A e somam " + p.toFixed(0) + "% do faturamento.";
    if (sel > -1) show(sel); else $("out").textContent = t.out0 || OUT0;
  }
  cut.oninput = paint;

  // Relatórios
  var rl = $("rl"), rp = $("rp");
  function pick(i) {
    cur = i; var t = tr().rep || [], r = t[i] || D.reports[i], ul = el("ul", "", "tags");
    [].forEach.call(rl.children, function (b, j) { b.setAttribute("aria-pressed", j === i ? "true" : "false"); });
    r[2].split(", ").forEach(function (x) { ul.appendChild(el("li", x)); });
    rp.innerHTML = ""; rp.appendChild(el("h3", r[0])); rp.appendChild(el("p", r[1])); rp.appendChild(ul);
  }
  function renderList() {
    var t = tr().rep || []; rl.innerHTML = "";
    D.reports.forEach(function (r, i) { var b = el("button", (t[i] || r)[0]); b.type = "button"; b.onclick = function () { pick(i); }; rl.appendChild(b); });
    pick(cur);
  }

  // Projetos
  var ST = "repeating-linear-gradient(90deg,rgba(255,255,255,.07) 0 24px,transparent 24px 48px),", GR = [ST + "#006437", ST + "#00492A", ST + "#0B5E3A"], n = 0;
  function cards(target, list, key) {
    var box = $(target), t = tr(), ds = t[key] || [], more = t.more || "Ver mais"; box.innerHTML = "";
    list.forEach(function (p, i) {
      var c = el("article", "", "pc"), th2 = el("div", "", "th"), f = el("div", "", "info");
      if (p[4]) { th2.classList.add("has-img"); var im = el("div", "", "im"); im.style.background = 'url("' + p[4] + '") center/' + (p[5] || "cover") + " no-repeat" + (p[5] === "contain" ? ", #fff" : ""); th2.appendChild(im); }
      else th2.style.setProperty("--g", GR[n++ % GR.length]);
      th2.appendChild(el("h4", p[0]));
      if (p[3].length) { var tc = el("div", "", "tech"); p[3].forEach(function (s) { tc.appendChild(icon(s)); }); th2.appendChild(tc); }
      f.appendChild(el("p", ds[i] || p[1]));
      if (p[2]) { var a = el("a", more, "btn"); a.href = p[2]; a.target = "_blank"; a.rel = "noopener"; f.appendChild(a); }
      c.appendChild(th2); c.appendChild(f); box.appendChild(c);
    });
  }
  function renderCards() { n = 0; cards("pg", D.projects, "prj"); cards("ag", D.academic, "acd"); }

  // Idioma
  [].forEach.call(document.querySelectorAll("[data-i]"), function (e) { PT[e.dataset.i] = e.innerHTML; });
  function applyLang(l) {
    lang = L[l] ? l : "pt"; var t = tr();
    document.documentElement.lang = { pt: "pt-BR", en: "en", es: "es" }[lang];
    document.title = t.title || TITLE;
    [].forEach.call(document.querySelectorAll("[data-i]"), function (e) { var k = e.dataset.i; e.innerHTML = t[k] != null ? t[k] : PT[k]; });
    [].forEach.call($("lang").children, function (b) { b.setAttribute("aria-pressed", b.dataset.l === lang ? "true" : "false"); });
    sv("lang", lang); renderSkills(); renderCards(); renderList(); paint();
  }
  $("lang").onclick = function (e) { var b = e.target.closest("button[data-l]"); if (b) applyLang(b.dataset.l); };
  applyLang(ld("lang") || "pt");

  // Animações de rolagem, progresso e foto
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var x = e.target; x.classList.add("in"); io.unobserve(x);
        setTimeout(function () { x.classList.remove("rv"); if (!x.classList.contains("tt")) x.classList.remove("in"); x.style.transitionDelay = ""; }, 1100);
      });
    }, { threshold: 0.15 });
    [].forEach.call(document.querySelectorAll("section h2,.about,.sub,.tt,.demo,.split>*,.sk,.pc,.tl li,.so,.two h3,.plain"), function (x) {
      x.classList.add("rv"); x.style.transitionDelay = ([].indexOf.call(x.parentNode.children, x) % 6 * 70) + "ms"; io.observe(x);
    });
  }
  var prog = $("prog");
  function sc() { var h = document.documentElement, m = h.scrollHeight - h.clientHeight; prog.style.transform = "scaleX(" + (m > 0 ? h.scrollTop / m : 0) + ")"; }
  window.addEventListener("scroll", sc, { passive: true }); sc();
  var av = $("av"), hero = $("inicio");
  if (av && !reduce && window.matchMedia("(hover:hover)").matches) {
    hero.addEventListener("pointermove", function (e) {
      var r = av.getBoundingClientRect(), x = (e.clientX - (r.left + r.width / 2)) / r.width, y = (e.clientY - (r.top + r.height / 2)) / r.height;
      av.style.setProperty("--rx", (-y * 8).toFixed(2) + "deg"); av.style.setProperty("--ry", (x * 8).toFixed(2) + "deg");
    });
    hero.addEventListener("pointerleave", function () { av.style.setProperty("--rx", "0deg"); av.style.setProperty("--ry", "0deg"); });
  }
})();
