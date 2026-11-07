/* ===== 专升本英语进化之路 · 主逻辑 ===== */
window.CHAPTERS = window.CHAPTERS || [];

/* 动态模板统一图标助手（内联 SVG，跟随 currentColor） */
const IC = {
  book:'<path d="M4 19V5a2 2 0 0 1 2-2h13v14H6a2 2 0 0 0-2 2z"/><path d="M4 19a2 2 0 0 0 2 2h13"/>',
  key:'<circle cx="8" cy="15" r="4"/><path d="M11 12L20 3M16 7l3 3"/>',
  swords:'<path d="M4 4l16 16M20 4L4 20"/>',
  mask:'<path d="M4 4h16v8a8 8 0 0 1-16 0z"/><path d="M9 9h.01M15 9h.01M9 15c1.5 1 4.5 1 6 0"/>',
  layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  chat:'<path d="M21 12a8 8 0 0 1-8 8H4l2-4a8 8 0 1 1 15-4z"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="M15 9l-6 6M9 9l6 6"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>',
  trophy:'<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M9 20h6"/>',
  bolt:'<path d="M13 2L4 14h6l-1 8 9-12h-6z"/>',
  radar:'<circle cx="12" cy="12" r="9"/><path d="M12 12l6-6"/><path d="M12 3a9 9 0 0 1 9 9"/>',
  speak:'<path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
  refresh:'<path d="M20 12a8 8 0 1 1-3-6"/><path d="M20 3v4h-4"/>',
  undo:'<path d="M9 14l-5-5 5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>',
  pen:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.5-1.5"/>',
  bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10c.6.6 1 1.2 1 2h6c0-.8.4-1.4 1-2a6 6 0 0 0-4-10z"/>',
  check:'<path d="M4 12l5 5L20 7"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  warn:'<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>',
  pin:'<circle cx="12" cy="9" r="3"/><path d="M12 12v9"/>',
  dice:'<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="0.8"/><circle cx="15" cy="15" r="0.8"/>',
  scroll:'<path d="M6 4h12v16H6z"/><path d="M9 8h6M9 12h6M9 16h4"/>',
  chart:'<path d="M5 20v-8M11 20V6M17 20v-4"/>',
  clip:'<rect x="6" y="4" width="12" height="16" rx="2"/><path d="M9 4h6v3H9z"/><path d="M9 9h6M9 13h6"/>',
  grid:'<rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/>',
  play:'<path d="M7 4l13 8-13 8z"/>',
  lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',
  mentor:'<path d="M12 3L2 8l10 5 10-5-10-5z"/><path d="M6 10.5V15c0 1.6 2.7 3 6 3s6-1.4 6-3v-4.5"/><path d="M22 8v6"/><circle cx="22" cy="15" r="1.2"/>',
  star:'<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>'
};
const icon = (n, s) => `<svg class="ic" width="${s||18}" height="${s||18}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${IC[n]}</svg>`;

const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const App = {
  current: null,
  state: { unlocked: 1, completed: {}, scores: {} },

  /* ---------- 存档（localStorage 安全封装：禁站点数据时降级内存态，不白屏） ---------- */
  _memStore: {},
  _lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return this._memStore[k] ?? null; } },
  _lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { this._memStore[k] = v; } },
  _lsDel(k) { try { localStorage.removeItem(k); } catch (e) { delete this._memStore[k]; } },
  load() {
    try {
      const raw = this._lsGet("zsb_english_save");
      if (raw) this.state = { ...this.state, ...JSON.parse(raw) };
    } catch (e) { /* 忽略坏存档 */ }
  },
  save() { this._lsSet("zsb_english_save", JSON.stringify(this.state)); },
  resetProgress() {
    if (!confirm("确定要删除全部进度重新开始吗？")) return;
    this._lsDel("zsb_english_save");
    this.state = { unlocked: 1, completed: {}, scores: {} };
    this.goHome();
  },

  /* ---------- 进度条 ---------- */
  updateProgressBar() {
    const total = window.CHAPTERS.length;
    const done = Object.keys(this.state.completed).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    document.getElementById("progress-fill").style.width = pct + "%";
    document.getElementById("progress-text").textContent =
      done + "/" + total + " 章 · " + pct + "%";
  },

  /* ---------- 世界地图 ---------- */
  goHome() {
    this.current = null;
    document.getElementById("map-view").classList.remove("hidden");
    document.getElementById("chapter-view").classList.add("hidden");
    document.getElementById("training-view").classList.add("hidden");
    document.getElementById("phrasal-view").classList.add("hidden");
    document.getElementById("score-view").classList.add("hidden");
    document.getElementById("syn-view").classList.add("hidden");
    this.renderMap();
    window.scrollTo(0, 0);
  },
  renderMap() {
    const grid = document.getElementById("chapter-grid");
    grid.innerHTML = "";
    const stages = window.STAGES;
    if (!stages) { this.renderFlatMap(grid); return; }
    stages.forEach((st, si) => {
      const doneInStage = st.chapters.filter(id => this.state.completed[id]).length;
      const wrap = document.createElement("div");
      wrap.className = "stage-block";
      const head = document.createElement("div");
      head.className = "stage-head " + (st.cls || "");
      head.innerHTML = `
        
        <div class="stage-info">
          <h3 style="color:${st.color}">${st.name}</h3>
          <p>${st.desc}</p>
        </div>
        <span class="stage-pct" style="color:${st.color}">${doneInStage}/${st.chapters.length}</span>`;
      wrap.appendChild(head);
      const cards = document.createElement("div");
      cards.className = "stage-cards";
      st.chapters.forEach(id => {
        const ch = window.CHAPTERS.find(c => c.id === id);
        if (!ch) return;
        cards.appendChild(this.buildCard(ch, st));
      });
      wrap.appendChild(cards);
      grid.appendChild(wrap);
    });
    this.updateProgressBar();
  },
  buildCard(ch, st) {
    const idx = window.CHAPTERS.findIndex(c => c.id === ch.id);
    const locked = (idx + 1) > this.state.unlocked;
    const done = this.state.completed[ch.id];
    const stCls = st ? (st.cls || "") : "";
    const stColor = st ? st.color : "var(--gold)";
    const card = document.createElement("div");
    card.className = "chapter-card " + stCls + (locked ? " locked" : "") + (done ? " done" : "");
    card.innerHTML = `
      <span class="ch-status">${done ? icon("trophy",12) : locked ? icon("lock",12) : icon("play",12)}</span>
      <div class="ch-num" style="color:${stColor}">CHAPTER ${String(ch.id).padStart(2, "0")}</div>
      <h3>${ch.title}</h3>
      <p>${ch.desc}</p>
      <span class="ch-tag" style="background:rgba(0,0,0,.2);color:${stColor};border-color:${stColor}40">${ch.tag}</span>
      ${done ? `<span class="ch-tag" style="background:rgba(255,215,0,.1);color:var(--gold);border-color:var(--gold)40">${icon("check",12)} ${this.state.scores[ch.id] ?? "--"}分</span>` : ""}`;
    if (!locked) { card.onclick = () => this.openChapter(ch.id); this.mkFocus(card); }
    else card.setAttribute("aria-disabled", "true");
    return card;
  },
  renderFlatMap(grid) {
    window.CHAPTERS.forEach(ch => grid.appendChild(this.buildCard(ch)));
    this.updateProgressBar();
  },

  /* ---------- 题型特训营 ---------- */
  goTraining(tab) {
    this.current = null;
    document.getElementById("map-view").classList.add("hidden");
    document.getElementById("chapter-view").classList.add("hidden");
    document.getElementById("phrasal-view").classList.add("hidden");
    document.getElementById("score-view").classList.add("hidden");
    document.getElementById("syn-view").classList.add("hidden");
    document.getElementById("training-view").classList.remove("hidden");
    window.scrollTo(0, 0);
    this.switchTraining(tab || "overview");
  },
  switchTraining(key) {
    document.querySelectorAll(".t-tab").forEach(b =>
      b.classList.toggle("active", b.dataset.t === key));
    const body = document.getElementById("training-body");
    body.innerHTML = "";
    if (key === "all") {
      ["reading", "cloze", "error", "translation", "writing"].forEach(k => {
        const sec = document.createElement("div");
        sec.className = "all-sec";
        body.appendChild(sec);
        this._renderTrainingSection(sec, k);
      });
      return;
    }
    this._renderTrainingSection(body, key);
  },
  _renderTrainingSection(container, key) {
    // ===== 八年考情总览 =====
    if (key === "overview") {
      this._renderOverview(container);
      return;
    }
    // ===== 翻译特训渲染（数据独立于 TRAINING，需先于通用分支处理）=====
    if (key === "translation") {
      if (window.TRAINING_TRANS) this._renderTranslation(container);
      else container.innerHTML = "<p style='color:var(--sub);padding:20px'>数据加载中...</p>";
      return;
    }
    // ===== 写作特训渲染 =====
    if (key === "writing") {
      if (window.TRAINING_WRITE) this._renderWriting(container);
      else container.innerHTML = "<p style='color:var(--sub);padding:20px'>数据加载中...</p>";
      return;
    }
    // ===== 军火库总览（独立数据，必须在通用守卫之前分流）=====
    if (key === "arsenal") {
      this.renderArsenal(container);
      return;
    }
    const T = window.TRAINING;
    if (!T || !T[key]) return;
    const sec = T[key];

    // 入场编排：块级容器按创建顺序依次上浮淡入
    let _seq = 0;
    const enterFx = box => {
      box.classList.add("g-fade-up");
      box.style.setProperty("--i", _seq++);
    };

    // 方法步骤
    const stepBox = document.createElement("div");
    stepBox.className = "train-steps";
    stepBox.innerHTML = `<h3>${icon('compass')} 解题流程</h3>` + sec.steps.map((s, i) =>
      `<div class="train-step"><b>第${i + 1}步</b> ${s}</div>`).join("");
    enterFx(stepBox);
    container.appendChild(stepBox);

    // 阅读四大题型 / 完形逻辑词表 / 改错十雷区
    if (sec.types) {
      const tBox = document.createElement("div");
      tBox.innerHTML = `<h3>${icon('layers')} 四大题型逐个击破</h3>` + sec.types.map(t => `
        <div class="train-type">
          <h4>${t.name}</h4>
          <div class="tq">${icon("chat",14)} 常见提问：${t.signal}</div>
          <div class="th">${icon("compass",14)} 怎么做：${t.howto}</div>
          <div class="tt">${icon("warn",14)} 陷阱：${t.traps}</div>
        </div>`).join("");
      enterFx(tBox);
      container.appendChild(tBox);
    }
    if (sec.logic) {
      const lBox = document.createElement("div");
      lBox.innerHTML = `<h3>${icon('chat')} 逻辑关系词 = 隐形线索</h3>` + sec.logic.map(l => `
        <div class="train-logic"><b>${l.type}</b> ${l.words}<small>${l.tip}</small></div>`).join("");
      enterFx(lBox);
      container.appendChild(lBox);
    }
    if (sec.collos) {
      const cBox = document.createElement("div");
      cBox.className = "train-collos";
      cBox.innerHTML = `<h3>${icon('key')} 30 高频搭配速查（完形秒选题）</h3>` +
        sec.collos.map(c => `<div class="col-item"><b>${c.p}</b> ${c.cn}<small>${c.note}</small></div>`).join("");
      enterFx(cBox);
      container.appendChild(cBox);
    }
    if (sec.zones) {
      const zBox = document.createElement("div");
      zBox.innerHTML = `<h3>${icon('swords')} 改错十雷区（每区一个真题式例句）</h3>` + sec.zones.map(z => `
        <div class="train-zone">
          <h4>${z.name}</h4>
          <div class="zr">${z.rule}</div>
          <div class="zw">${icon("x",12)} ${z.wrong}</div>
          <div class="zg">${icon("check",12)} ${z.right}</div>
          <div class="zx">${icon("bulb",12)} ${z.explain}</div>
        </div>`).join("");
      enterFx(zBox);
      container.appendChild(zBox);
    }
    // 判断题六大陷阱（命题人视角）
    if (sec.traps) {
      const trBox = document.createElement("div");
      trBox.innerHTML = `<h3>${icon('mask')} 判断题六大陷阱（命题人视角）</h3>` + sec.traps.map(t => `
        <div class="train-zone">
          <h4>${t.name}</h4>
          <div class="zr">${t.rule}</div>
          <div class="zw">${icon("x",12)} ${t.wrong}</div>
          <div class="zg">${icon("check",12)} ${t.right}</div>
          <div class="zx">${icon("bulb",12)} ${t.explain}</div>
        </div>`).join("");
      container.appendChild(trBox);
    }
    // 构词法后缀总表（选词填空筛词器）
    if (sec.suffixes) {
      const sfBox = document.createElement("div");
      sfBox.innerHTML = `<h3>${icon('layers')} 构词法后缀总表（选词填空筛词器）</h3>` + sec.suffixes.map(s => `
        <div class="train-logic"><b>${s.type}</b><code style="background:rgba(255,215,0,.1);padding:2px 6px;border-radius:4px;color:var(--gold)">${s.affixes}</code> ${s.words}<small>${s.note}</small></div>`).join("");
      container.appendChild(sfBox);
    }

    // 真题示范
    if (sec.demo) {
      const dBox = document.createElement("div");
      dBox.className = "train-demo";
      let html = `<h3>${icon('book')} 真题风格示范 · 逐题拆解</h3><div class="demo-passage">${sec.demo.passage.replace(/\n/g, '<br>')}</div>`;
      (sec.demo.questions || []).forEach((q, i) => {
        html += `<div class="demo-q">
          <div class="dq">${i + 1}. ${q.q}</div>
          <div class="dopts">${q.options.map((o, oi) =>
            `<span class="${oi === q.answer ? "dopt ok" : "dopt"}">${String.fromCharCode(65 + oi)}. ${o}</span>`).join("")}</div>
          ${q.locate ? `<div class="dloc">${icon("pin",12)} 定位：${q.locate}</div>` : ""}
          <div class="dex">${icon("bulb",12)} 解析：${q.explain}</div>
        </div>`;
      });
      (sec.demo.blanks || []).forEach(b => {
        html += `<div class="demo-q">
          <div class="dq"><b>${b.n}.</b> ${b.q}</div>
          <div class="dopts">${b.options.map((o, oi) =>
            `<span class="${oi === b.answer ? "dopt ok" : "dopt"}">${String.fromCharCode(65 + oi)}. ${o}</span>`).join("")}</div>
          <div class="dex">${icon("bulb",12)} ${b.explain}</div>
        </div>`;
      });
      dBox.innerHTML = html;
      enterFx(dBox);
      container.appendChild(dBox);
    }

    // ===== 额外真题集（阅读/完形/改错）=====
    const TT = window.TRAINING;
    if (key === "reading" && TT && TT.extraPassages && TT.extraPassages.length) {
      this._renderExtraReadings(container, TT.extraPassages);
    }
    if (key === "cloze" && TT && TT.extraClozeSets && TT.extraClozeSets.length) {
      this._renderExtraCloze(container, TT.extraClozeSets);
    }
    if (key === "error" && TT && TT.extraErrorSets && TT.extraErrorSets.length) {
      this._renderExtraErrors(container, TT.extraErrorSets);
    }
    if (key === "blankSelect" && TT && TT.extraBlankSets && TT.extraBlankSets.length) {
      this._renderExtraBlanks(container, TT.extraBlankSets);
    }
    if (key === "arsenal") {
      this.renderArsenal(container);
      return;
    }
  },

  /* ---------- 选词填空产出式练习（2026 卷式：括号/词库变形，自评对答案） ---------- */
  _renderExtraBlanks(body, sets) {
    let html = `<h3 style="color:var(--green);border-left-color:var(--green)">${icon('book')} 语境变形填空（2026 卷式 · 写出正确形式再对答案）</h3>`;
    sets.forEach((s, si) => {
      html += `<div class="train-demo" style="margin-bottom:16px"><h3 style="color:var(--purple)">练习 ${si + 1}：${s.topic}</h3>`;
      if (s.cn) {
        html += `<div class="demo-passage"><b>【中文原文】</b>${s.cn}</div>`;
      }
      if (s.bank && s.bank.length) {
        html += `<div class="demo-passage" style="border-color:rgba(255,215,0,.4)"><b>词库：</b>${s.bank.join(' / ')}</div>`;
      }
      if (s.passage) {
        html += `<div class="demo-passage">${s.passage.replace(/\n/g, '<br>')}</div>`;
      }
      (s.questions || []).forEach((q, qi) => {
        html += `<div class="demo-q">
          <div class="dq">${q.q}</div>
          <details><summary style="cursor:pointer;color:var(--green);font-size:13px">${icon("pen",12)} 先自己写出形式，再点开对答案</summary>
            <div style="margin-top:6px"><span class="dopt ok">${icon("check",12)} ${q.answer}</span></div>
            <div class="dex">${icon("bulb",12)} ${q.explain}</div>
          </details>
        </div>`;
      });
      html += `</div>`;
    });
    body.insertAdjacentHTML('beforeend', html);
  },

  /* ---------- 动词短语总军团 ---------- */
  goPhrasal() {
    this.current = null;
    document.getElementById("map-view").classList.add("hidden");
    document.getElementById("chapter-view").classList.add("hidden");
    document.getElementById("training-view").classList.add("hidden");
    document.getElementById("score-view").classList.add("hidden");
    document.getElementById("syn-view").classList.add("hidden");
    document.getElementById("phrasal-view").classList.remove("hidden");
    window.scrollTo(0, 0);
    this.renderPhrasal();
  },

  /* ---------- 同义替换弹药库 ---------- */
  goSynonyms() {
    this.current = null;
    document.getElementById("map-view").classList.add("hidden");
    document.getElementById("chapter-view").classList.add("hidden");
    document.getElementById("training-view").classList.add("hidden");
    document.getElementById("score-view").classList.add("hidden");
    document.getElementById("phrasal-view").classList.add("hidden");
    document.getElementById("syn-view").classList.remove("hidden");
    window.scrollTo(0, 0);
    this.renderSynonyms();
  },
  renderSynonyms() {
    const D = window.SYNONYMS;
    const body = document.getElementById("syn-body");
    if (!D) { body.innerHTML = "<p style='color:var(--sub);padding:20px'>数据加载中...</p>"; return; }
    const total = (D.cats || []).reduce((n, c) => n + (c.items || []).length, 0);
    let html = `<div class="syn-head">
      <h2>${D.title}</h2>
      <p>${D.intro}</p>
      <div class="phrasal-meta"><span>${icon("grid",12)} ${(D.cats || []).length} 大类</span><span>${icon("refresh",12)} ${total} 组替换</span><span>${icon("target",12)} 完形/判断/选词填空选项破解</span></div>
    </div>`;
    (D.cats || []).forEach(cat => {
      html += `<h3 class="syn-cat-name">${cat.name}（${(cat.items || []).length} 组）</h3>`;
      (cat.items || []).forEach(it => {
        html += `<div class="syn-item">
          <span class="syn-base">${it.base}</span>
          <span class="syn-syn">→ ${it.syn}</span>
          <span class="syn-note">${icon("target",12)} ${it.note}</span>
        </div>`;
      });
    });
    body.innerHTML = html;
  },

  /* ---------- 提分战记 ---------- */
  goScore() {
    this.current = null;
    document.getElementById("map-view").classList.add("hidden");
    document.getElementById("chapter-view").classList.add("hidden");
    document.getElementById("training-view").classList.add("hidden");
    document.getElementById("phrasal-view").classList.add("hidden");
    document.getElementById("syn-view").classList.add("hidden");
    document.getElementById("score-view").classList.remove("hidden");
    window.scrollTo(0, 0);
    this.renderScore();
  },
  _scoreChecks() {
    try { return JSON.parse(localStorage.getItem("zsb_score_check") || "{}"); }
    catch (e) { return {}; }
  },
  toggleAction(key, el) {
    const checks = this._scoreChecks();
    checks[key] = !checks[key];
    localStorage.setItem("zsb_score_check", JSON.stringify(checks));
    el.classList.toggle("done", checks[key]);
    el.querySelector(".sa-box").innerHTML = checks[key] ? icon("check",12) : "";
    // 刷新本关进度
    const gate = el.closest(".score-gate");
    const all = gate.querySelectorAll(".sa");
    const done = gate.querySelectorAll(".sa.done").length;
    gate.querySelector(".sg-progress").innerHTML = `${icon("trophy",12)} 冲刺进度 ${done}/${all.length}`;
  },
  renderScore() {
    const D = window.SCORE_GUIDE;
    const body = document.getElementById("score-body");
    if (!D) { body.innerHTML = "<p style='color:var(--sub);padding:20px'>数据加载中...</p>"; return; }
    const checks = this._scoreChecks();
    let html = `<div class="score-head">
      <h2>${D.title}</h2>
      <p>${D.intro}</p>
    </div>`;
    D.gates.forEach((g, gi) => {
      html += `<details class="score-gate" ${gi === 0 ? "open" : ""}>
        <summary><span class="sg-emoji">${g.emoji}</span>
          <span class="sg-info"><b>${g.name}</b><small>${g.sub}</small></span>
          <span class="sg-progress"></span>
        </summary>
        <div class="sg-body">
          <p class="sg-story">${icon("scroll",12)} ${g.story}</p>
          <div class="sg-sec"><h4>${icon('trophy',14)} 得分公式 · 每一步都有名字</h4>
            ${g.formula.map((f, fi) => `<div class="sg-f"><span class="sg-n">${fi + 1}</span><div>${f.act}</div><span class="sg-worth">${f.worth}</span></div>`).join("")}
          </div>
          <div class="sg-sec"><h4>${icon('swords',14)} 扣分黑名单 · 这些坑 8 年年年有人踩</h4>
            ${g.blacklist.map(b => `<div class="sg-b">${icon("x",12)} ${b}</div>`).join("")}
          </div>
          <div class="sg-sec"><h4>${icon('target',14)} 冲刺清单 · 打勾就是打分（自动保存）</h4>
            ${g.actions.map((a, ai) => {
              const key = g.id + "-" + ai;
              return `<div class="sa ${checks[key] ? "done" : ""}" onclick="App.toggleAction('${key}', this)">
                <span class="sa-box">${checks[key] ? icon("check",12) : ""}</span><span>${a}</span></div>`;
            }).join("")}
          </div>
        </div>
      </details>`;
    });
    // 初始化每关进度数字
    body.innerHTML = html;
    document.querySelectorAll(".score-gate").forEach(gate => {
      const all = gate.querySelectorAll(".sa").length;
      const done = gate.querySelectorAll(".sa.done").length;
      gate.querySelector(".sg-progress").innerHTML = `${icon("trophy",12)} 冲刺进度 ${done}/${all}`;
    });
  },

  renderPhrasal() {
    const D = window.PHRASAL;
    const body = document.getElementById("phrasal-body");
    if (!D) { body.innerHTML = "<p style='color:var(--sub);padding:20px'>数据加载中...</p>"; return; }
    const total = (D.verbs || []).reduce((n, v) => n + (v.items || []).length, 0);
    let html = `<div class="phrasal-head">
      <h2>${D.title}</h2>
      <p>${D.intro}</p>
      <div class="phrasal-meta"><span>${icon("grid",12)} ${D.verbs.length} 大动词</span><span>${icon("link",12)} ${total} 条搭配</span><span>${icon("warn",12)} = 改错高频雷区</span></div>
      <button class="nav-btn next" onclick="App.pvQuizStart()">${icon("target",14)} 自测模式 · 完形实战</button>
    </div>`;
    html += `<div id="pv-quiz" class="hidden"></div>`;
    html += `<div class="phrasal-grid">`;
    (D.verbs || []).forEach((vt, vi) => {
      html += `<details class="pv-verb" ${vi === 0 ? "open" : ""}>
        <summary><span class="pv-v">${vt.v}</span><span class="pv-cn">${vt.cn}</span><span class="pv-count">${(vt.items || []).length} 条搭配</span></summary>
        <div class="pv-list">`;
      (vt.items || []).forEach(it => {
        html += `<div class="pv-item">
          <div class="pv-p" onclick="App.pvReveal(this)"><b>${it.p}</b><span class="pv-mean hidden">${it.cn}</span><em class="pv-hint">点击显示意思</em></div>
          <div class="pv-ex">${it.ex}</div>
          <div class="pv-excn">${it.excn}</div>
          <div class="pv-note">${it.note}</div>
        </div>`;
      });
      html += `</div></details>`;
    });
    html += `</div>`;
    body.innerHTML = html;
  },
  pvReveal(el) {
    el.querySelector(".pv-mean").classList.toggle("hidden");
    el.querySelector(".pv-hint").classList.toggle("hidden");
  },
  // 自测：随机抽一条可挖空短语，选对介词（干扰项取同动词家族 + 通用介词池）
  pvQuizStart() {
    const D = window.PHRASAL;
    if (!D) return;
    const all = [];
    D.verbs.forEach(vt => vt.items.forEach(it => all.push(it)));
    const blanks = all.filter(it => /^(\S+)\s+([a-z]+)$/.test(it.p));
    if (!blanks.length) return;
    const pick = blanks[Math.floor(Math.random() * blanks.length)];
    const verb = pick.p.split(" ")[0];
    const prep = pick.p.split(" ")[1];
    const siblings = all
      .filter(it => it.p !== pick.p && it.p.split(" ")[0] === verb)
      .map(it => it.p.split(" ")[1])
      .filter(w => w && /^[a-z]+$/.test(w));
    const pool = [...new Set(siblings)].filter(w => w !== prep);
    const common = ["on", "off", "up", "out", "down", "in", "over", "into", "back", "away", "through", "for", "after", "to"];
    while (pool.length < 3) {
      const w = common[Math.floor(Math.random() * common.length)];
      if (!pool.includes(w)) pool.push(w);
    }
    const opts = pool.slice(0, 3);
    opts.splice(Math.floor(Math.random() * 4), 0, prep);
    this._pvCurrent = { pick, verb, prep };
    const box = document.getElementById("pv-quiz");
    box.classList.remove("hidden");
    box.innerHTML = `
      <div class="pv-quiz-head">${icon("dice",12)} 完形实战 · <b>${verb}</b> 家族第 ${all.filter(it => it.p.startsWith(verb)).indexOf(pick) + 1} 弹</div>
      <div class="pv-q"><b>${verb}</b> <span class="pv-blank">______</span> <span class="pv-mean-cn">→ ${pick.cn}</span></div>
      <div class="pv-opts">${opts.map(o =>
        `<button class="pv-opt" onclick="App.pvAnswer(this,'${o}')">${o}</button>`).join("")}</div>
      <div id="pv-feedback"></div>`;
    box.scrollIntoView({ behavior: App.smooth(), block: "center" });
  },
  pvAnswer(btn, chosen) {
    const { pick, verb, prep } = this._pvCurrent;
    const box = document.getElementById("pv-quiz");
    box.querySelectorAll(".pv-opt").forEach(b => {
      b.disabled = true;
      if (b.textContent === prep) b.classList.add("ok");
    });
    const fb = document.getElementById("pv-feedback");
    const head = chosen === prep
      ? `<div class="pv-fb pv-fb-ok">${icon("check",12)} 答对了！<b>${pick.p}</b> = ${pick.cn}</div>`
      : (() => { btn.classList.add("bad"); return `<div class="pv-fb pv-fb-bad">${icon("x",12)} 正确答案是 <b>${prep}</b>：${pick.p} = ${pick.cn}</div>`; })();
    // 同族拓展：随机带 2 条本动词家族的其他成员
    const D = window.PHRASAL;
    let famHtml = "";
    if (D) {
      const fam = D.verbs.find(v => v.v === verb);
      if (fam) {
        const others = fam.items.filter(it => it.p !== pick.p);
        const picks = [];
        while (picks.length < 2 && others.length) {
          picks.push(others.splice(Math.floor(Math.random() * others.length), 1)[0]);
        }
        if (picks.length) {
          famHtml = `<div class="pv-fam-x">${icon("link",12)} <b>${verb}</b> 家族再记两条：${picks.map(it => `<b>${it.p}</b> ${it.cn}`).join(" ｜ ")}</div>`;
        }
      }
    }
    fb.innerHTML = head +
      `<div class="pv-fb-ex">例句：${pick.ex}<br>${pick.excn}</div>
       <div class="pv-fb-note">${icon("bulb",12)} ${pick.note}</div>` + famHtml;
    fb.insertAdjacentHTML("beforeend", `<button class="nav-btn next" onclick="App.pvQuizStart()">下一题 →</button>`);
  },

  /* ---------- 八年考情总览渲染 ---------- */
  _renderOverview(body) {
    const T = window.TRAINING;
    if (!T || !T.examInsight) { body.innerHTML = "<p style='color:var(--sub);padding:20px'>数据加载中...</p>"; return; }
    const E = T.examInsight;
    // 1) 分值结构条
    let html = `<h3>${icon('trophy')} 150 分分值结构</h3><div class="train-steps">`;
    E.structure.forEach(s => {
      html += `<div class="train-step">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px">
          <b style="color:${s.color}">${s.name}</b><span style="color:var(--gold);font-weight:800">${s.score} 分</span>
        </div>
        <div style="background:rgba(0,0,0,.3);border-radius:6px;height:10px;overflow:hidden">
          <div style="width:${s.score / 1.5}%;height:100%;background:${s.color};border-radius:6px"></div>
        </div>
        <div style="font-size:12px;color:var(--sub);margin-top:3px">${s.detail}</div>
      </div>`;
    });
    html += `</div>`;
    // 2) 五大题型命题规律
    const trends = [E.readingTrend, E.clozeTrend, E.errorTrend, E.transTrend, E.writeTrend, E.strategy];
    trends.forEach(tr => {
      html += `<div class="train-steps" style="margin-top:14px"><h3 style="color:var(--gold)">${tr.head}</h3>`;
      tr.points.forEach((p, i) => {
        html += `<div class="train-step"><b>${i + 1}</b> ${p}</div>`;
      });
      html += `</div>`;
    });
    body.innerHTML = html;
  },

  /* ---------- 翻译特训渲染 ---------- */
  _renderTranslation(body) {
    const T = window.TRAINING_TRANS;
    if (!T) { body.innerHTML = "<p style='color:var(--sub);padding:20px'>数据加载中...</p>"; return; }
    // 英译汉
    const e2c = T.e2c;
    let html = `<h3><span style="font-size:14px;color:var(--gold)">英→中</span> 英译汉 · 读句功力深练</h3>`;
    html += `<div class="train-steps">`;
    (e2c.skills||[]).forEach(s => {
      html += `<div class="train-step"><b>【${s.name}】</b> ${s.rule}<br><span style="color:var(--blue);font-style:italic">${s.ex}</span><br><span style="color:var(--sub);font-size:12px">${s.excn}</span></div>`;
    });
    html += `</div>`;
    html += `<h3>${icon('book')} 英译汉练习句（${(e2c.sentences||[]).length}句）</h3>`;
    (e2c.sentences||[]).forEach((s,i) => {
      html += `<div class="sentence-item" style="margin-bottom:12px">
        <div class="sen-en" style="margin-bottom:8px"><b>${i+1}.</b> ${s.en}</div>
        <div style="font-size:12px;color:var(--gold);margin-bottom:6px">${icon("pin",12)} 句型：${s.type}</div>
        <details style="margin-bottom:6px"><summary style="cursor:pointer;color:var(--blue);font-size:13px">查看拆解步骤</summary>
          <div class="sen-parts">${(s.steps||[]).map(p=>`<p>${p}</p>`).join("")}</div>
        </details>
        <details><summary style="cursor:pointer;color:var(--green);font-size:13px">查看参考译文</summary>
          <div class="sen-cn" style="margin-top:6px">${s.cn}</div>
          ${s.tips ? `<div style="color:var(--red);font-size:12px;margin-top:4px">${icon("warn",12)} ${s.tips}</div>` : ""}
        </details>
      </div>`;
    });
    // 汉译英
    const c2e = T.c2e;
    html += `<h3><span style="font-size:14px;color:var(--gold)">中→英</span> 汉译英 · 15 分（5 句 × 3 分）</h3>`;
    html += `<div class="train-steps">`;
    (c2e.templates||[]).forEach(t => {
      html += `<div class="train-step"><b>【${t.name}】</b> <code style="background:rgba(255,215,0,.1);padding:2px 6px;border-radius:4px">${t.pattern}</code><br><span style="color:var(--sub);font-size:12.5px">例：${t.ex_cn} → <em style="color:var(--blue)">${t.ex_en}</em></span>${t.note ? `<br><span style="color:var(--orange);font-size:11.5px">${icon("bulb",12)} ${t.note}</span>` : ""}</div>`;
    });
    html += `</div>`;
    html += `<h3>${icon('book')} 汉译英练习句（${(c2e.sentences||[]).length}句）</h3>`;
    html += `<div class="train-step" style="margin-bottom:10px"><b>${icon("pen",12)} 盲写三步：</b>①只看中文自己写出英文，别偷看；②点开对照参考译文；③逐个核对「必对关键词」——核心成分全命中，这 3 分才是你的。</div>`;
    (c2e.sentences||[]).forEach((s,i) => {
      html += `<div class="sentence-item" style="margin-bottom:12px">
        <div style="font-size:14px;font-weight:600;color:var(--ink);margin-bottom:6px"><b>${i+1}.</b> ${s.cn}</div>
        <div style="font-size:12px;color:var(--gold);margin-bottom:6px">${icon("pin",12)} 考点：${s.type}</div>
        <details><summary style="cursor:pointer;color:var(--green);font-size:13px">写完再点：对照参考译文 + 必对关键词</summary>
          <div class="sen-cn" style="margin-top:6px"><em>${s.en}</em></div>
          ${(s.keys && s.keys.length) ? `<div style="margin-top:6px"><span style="color:var(--gold);font-size:12px">${icon("key",12)} 必对关键词：</span>${s.keys.map(k => `<span class="dopt ok" style="display:inline-block;margin:2px 6px 2px 0">${k}</span>`).join('')}<div style="font-size:12px;color:var(--sub);margin-top:2px">逐个核对：这些核心成分你的译文里都有吗？</div></div>` : ''}
          <div style="color:var(--blue);font-size:12px;margin-top:4px">${icon("key",12)} ${s.keypoint}</div>
          ${s.traps ? `<div style="color:var(--red);font-size:12px;margin-top:2px">${icon("warn",12)} 易错：${s.traps}</div>` : ""}
        </details>
      </div>`;
    });
    body.innerHTML = html;
  },

  /* ---------- 写作特训渲染 ---------- */
  _renderWriting(body) {
    const W = window.TRAINING_WRITE;
    if (!W) { body.innerHTML = "<p style='color:var(--sub);padding:20px'>数据加载中...</p>"; return; }
    let html = `<h3>${icon('book')} 写作概览</h3><div class="train-steps"><div class="train-step">${W.overview ? W.overview.desc : "20分，150词左右，议论文为主，书写工整，结构清晰。"}`;
    if (W.overview && W.overview.scoring) {
      html += `<div style="margin-top:8px"><b>${icon("chart",14)} 评分标准</b>${W.overview.scoring.map(s => `<div>· ${s}</div>`).join("")}</div>`;
    }
    if (W.overview && W.overview.tips) {
      html += `<div style="margin-top:8px"><b>${icon("bulb",14)} 考场建议</b>${W.overview.tips.map(t => `<div>· ${t}</div>`).join("")}</div>`;
    }
    html += `</div></div>`;
    if (W.selfCheck && W.selfCheck.groups) {
      html += `<h3>${W.selfCheck.title || (icon('layers') + " 12 步自评清单")}</h3><div class="train-steps">`;
      W.selfCheck.groups.forEach(g => {
        html += `<div class="train-step"><b>【${g.stage}】</b>` +
          g.items.map(it => `<label style="display:block;margin:5px 0;cursor:pointer"><input type="checkbox" style="margin-right:8px">${it}</label>`).join('') +
          `</div>`;
      });
      html += `</div>`;
    }
    // 万能句型
    if (W.powerPhrases && W.powerPhrases.length) {
      html += `<h3>${icon('bolt')} 万能句型库（${W.powerPhrases.length}条）</h3>`;
      const groups = {};
      W.powerPhrases.forEach(p => { if (!groups[p.type]) groups[p.type]=[];  groups[p.type].push(p); });
      Object.keys(groups).forEach(g => {
        html += `<div style="margin-bottom:10px"><div style="color:var(--gold);font-weight:800;margin-bottom:6px">${g}</div>`;
        groups[g].forEach(p => {
          html += `<div class="grammar-item" style="margin-bottom:8px">
            <div class="gr-title">${p.cn}</div>
            <div class="gr-ex">${p.en}</div>
            ${p.note ? `<div class="gr-signal">${icon("bulb",12)} ${p.note}</div>` : ""}
          </div>`;
        });
        html += `</div>`;
      });
    }
    // 三大文体
    (W.genres||[]).forEach(g => {
      html += `<h3>${icon('layers')} ${g.name}</h3>`;
      (g.types||[]).forEach(t => {
        html += `<div class="confuse-group" style="margin-bottom:14px">
          <h4>${t.name}</h4>
          <div style="font-size:13px;color:var(--sub);margin-bottom:8px">结构：${(t.structure||[]).join(" → ")}</div>
          <div style="background:rgba(255,215,0,.06);border:1px solid rgba(255,215,0,.2);border-radius:8px;padding:10px;margin-bottom:8px;font-size:13px">
            <b style="color:var(--gold)">模板：</b><pre style="white-space:pre-wrap;font-family:inherit;font-size:13px;color:var(--sub)">${t.template||""}</pre>
          </div>
          ${t.demo ? `<details><summary style="cursor:pointer;color:var(--green);font-weight:700">${icon("book",12)} 查看范文（${t.demo.topic}）</summary>
            <div style="background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:8px;padding:12px;margin-top:8px">
              <div style="font-size:14px;line-height:2;color:var(--ink)">${t.demo.essay}</div>
              <div style="color:var(--sub);font-size:12px;margin-top:8px">${icon("clip",12)} 评分要点：${t.demo.notes}</div>
            </div>
          </details>` : ""}
        </div>`;
      });
    });
    // 历年真题
    if (W.pastTopics && W.pastTopics.length) {
      html += `<h3>${icon('book')} 近5年真题题目</h3>`;
      W.pastTopics.forEach(t => {
        html += `<div class="sp-item"><span class="sp-tag">${t.year} · ${t.genre}</span>
          <div class="sp-q">${t.topic}</div>
          <div class="sp-n">要点：${(t.keypoints||[]).join(" · ")}</div>
        </div>`;
      });
    }
    body.innerHTML = html;
  },

  /* ---------- 额外真题集渲染 ---------- */
  _renderExtraReadings(body, passages) {
    let html = `<h3 style="color:var(--green);border-left-color:var(--green)">${icon('book')} 真题阅读练习（共 ${passages.length} 篇）</h3>`;
    passages.forEach((p, pi) => {
      html += `<div class="train-demo" style="margin-bottom:16px">
        <h3 style="color:var(--blue)">阅读 ${pi + 2}：${p.topic}</h3>
        <div class="demo-passage">${p.passage.replace(/\n/g, '<br>')}</div>`;
      (p.questions || []).forEach((q, qi) => {
        html += `<div class="demo-q">
          <div class="dq">${qi + 1}. ${q.q}</div>
          <div class="dopts">${q.options.map((o, oi) =>
            `<span class="${oi === q.answer ? 'dopt ok' : 'dopt'}">${String.fromCharCode(65 + oi)}. ${o}</span>`
          ).join('')}</div>
          <div class="dloc">${icon("pin",12)} 定位：${q.locate || ''}</div>
          <div class="dex">${icon("bulb",12)} ${q.explain}</div>
        </div>`;
      });
      html += `</div>`;
    });
    body.insertAdjacentHTML('beforeend', html);
  },

  _renderExtraCloze(body, sets) {
    let html = `<h3 style="color:var(--green);border-left-color:var(--green)">${icon('layers')} 完形填空练习（共 ${sets.length} 套）</h3>`;
    sets.forEach((s, si) => {
      html += `<div class="train-demo" style="margin-bottom:16px">
        <h3 style="color:var(--purple)">完形 ${si + 2}：${s.topic}</h3>
        <div class="demo-passage">${s.passage.replace(/\n/g, '<br>').replace(/___(\d+)___/g, '<b style="color:var(--gold)">___$1___</b>')}</div>`;
      (s.questions || []).forEach((q) => {
        html += `<div class="demo-q">
          <div class="dq"><b>${q.num}.</b> ${q.options.map((o, oi) => String.fromCharCode(65 + oi) + '. ' + o).join('　')}</div>
          <div class="dopts">${q.options.map((o, oi) =>
            `<span class="${oi === q.answer ? 'dopt ok' : 'dopt'}">${String.fromCharCode(65 + oi)}. ${o}</span>`
          ).join('')}</div>
          <div class="dex">${icon("bulb",12)} ${q.explain}</div>
        </div>`;
      });
      html += `</div>`;
    });
    body.insertAdjacentHTML('beforeend', html);
  },

  _renderExtraErrors(body, sets) {
    let html = `<h3 style="color:var(--green);border-left-color:var(--green)">${icon('swords')} 改错练习（共 ${sets.length} 篇）</h3>`;
    sets.forEach((s, si) => {
      html += `<div class="train-demo" style="margin-bottom:16px">
        <h3 style="color:var(--orange)">改错 ${si + 2}：${s.topic}</h3>
        <div class="demo-passage">${s.passage.replace(/\n/g, '<br>')}</div>
        <h4 style="color:var(--gold);margin:10px 0 8px;font-size:14px">${icon('layers',14)} 错误清单（${(s.errors||[]).length}处）</h4>`;
      (s.errors || []).forEach((e, ei) => {
        html += `<div class="demo-q" style="padding:8px 0">
          <div class="dq"><b>${ei + 1}.</b> <span style="color:var(--sub)">${e.line}</span></div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin:5px 0">
            <span class="dopt" style="color:var(--red)">${icon("x",12)} ${e.wrong}</span>
            <span class="dopt ok">${icon("check",12)} ${e.right}</span>
            <span class="dopt" style="color:var(--purple)">${e.type}</span>
          </div>
          <div class="dex">${icon("bulb",12)} ${e.explain}</div>
        </div>`;
      });
      html += `</div>`;
    });
    body.insertAdjacentHTML('beforeend', html);
  },

  /* ---------- 打开章节 ---------- */
  openChapter(id) {
    const ch = window.CHAPTERS.find(c => c.id === id);
    if (!ch) return;
    this.current = ch;
    document.getElementById("map-view").classList.add("hidden");
    document.getElementById("phrasal-view").classList.add("hidden");
    document.getElementById("score-view").classList.add("hidden");
    document.getElementById("syn-view").classList.add("hidden");
    document.getElementById("chapter-view").classList.remove("hidden");
    window.scrollTo(0, 0);

    document.getElementById("chapter-header").innerHTML = `
      <div class="ch-kicker ch-enter">CHAPTER ${String(ch.id).padStart(2, "0")}</div>
      <h2 class="ch-enter" style="animation-delay:80ms">${ch.title}</h2>
      <div class="ch-desc ch-enter" style="animation-delay:160ms">${ch.desc}</div>
    `;
    this.renderNav(ch);
    document.body.classList.toggle("focus-mode", !!this.state.focusMode);
    this.fx.mentor(`嗨，我是阿洛！本章有 8 个关卡，跟着顶部导航 01 → 08 一关关闯，答题时我会为你欢呼。准备好了吗？出发！`);
    this.renderStory(ch);
    this.renderWords(ch);
    this.renderConfuse(ch);
    this.renderHidden(ch);
    this.renderSentences(ch);
    this.renderPhrases(ch);
    this.renderGrammar(ch);
    this.renderQuiz(ch);
  },
  /* ---------- 吸顶模块导航条（含完成标记 + 滚动高亮 + 速刷开关） ---------- */
  renderNav(ch) {
    const old = document.getElementById("module-nav");
    if (old) old.remove();
    const nav = document.createElement("div");
    nav.id = "module-nav";
    nav.className = "module-nav";
    // 双栏模式下只显示右栏的模块（不含故事，故事在左栏固定）
    const doneMap = {
      "mod-confuse": "confuse", "mod-sentence": "sentences",
      "mod-phrase": "phrases", "mod-grammar": "grammar"
    };
    const navItems = [
      { key: "mod-words",    n: "02", t: "核心词" },
      { key: "mod-confuse",  n: "03", t: "易混词" },
      { key: "mod-hidden",   n: "04", t: "熟词生义" },
      { key: "mod-sentence", n: "05", t: "长难句" },
      { key: "mod-phrase",   n: "06", t: "短语" },
      { key: "mod-grammar",  n: "07", t: "语法" },
      { key: "mod-quiz",     n: "08", t: "测验" }
    ];
    nav.innerHTML = navItems.map(m => {
      const done = m.key === "mod-quiz" ? !!this.state.completed[ch.id]
        : (doneMap[m.key] ? this.isModuleDone(ch.id, doneMap[m.key]) : false);
      return `<a href="#${m.key}" data-key="${m.key}" class="${done ? "done" : ""}" onclick="App.scrollToMod('${m.key}');return false;"><b>${m.n}</b> ${m.t}</a>`;
    }).join("") + `<button id="focus-toggle" onclick="App.toggleFocus()" title="速刷模式：隐藏故事栏，知识点全宽复习">${icon('bolt',14)} 速刷</button>`;
    // 插到 split-right 顶部
    const right = document.querySelector(".split-right");
    if (right) right.prepend(nav);
    else document.getElementById("chapter-view").prepend(nav);
    this._spyModules();
  },
  /* 滚动监听：当前模块在导航条上高亮 */
  _spyModules() {
    const nav = document.getElementById("module-nav");
    if (!nav || !("IntersectionObserver" in window)) return;
    const links = {};
    nav.querySelectorAll("a[data-key]").forEach(a => links[a.dataset.key] = a);
    const mods = Object.keys(links).map(id => document.getElementById(id)).filter(Boolean);
    if (!this._spy) {
      this._spy = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (!en.isIntersecting) return;
          nav.querySelectorAll("a").forEach(a => a.classList.remove("active"));
          const l = links[en.target.id];
          if (l) l.classList.add("active");
        });
      }, { rootMargin: "-25% 0px -65% 0px" });
    }
    this._spy.disconnect();
    mods.forEach(m => this._spy.observe(m));
  },
  /* 速刷模式：隐藏故事栏，知识点全宽，方便及时复习 */
  toggleFocus() {
    document.body.classList.toggle("focus-mode");
    this.state.focusMode = document.body.classList.contains("focus-mode");
    this.save();
  },
  /* 词卡一键全翻 / 全复位 */
  flipAllWords(flip) {
    document.querySelectorAll("#word-cards .word-card").forEach(c =>
      c.classList.toggle("flipped", flip));
  },

  nextChapter() {
    if (!this.current) return this.goHome();
    const idx = window.CHAPTERS.findIndex(c => c.id === this.current.id);
    const next = window.CHAPTERS[idx + 1];
    if (next) {
      this.state.unlocked = Math.max(this.state.unlocked, next.id);
      this.save();
      this.openChapter(next.id);
    } else {
      alert("全部三十章通关！你已经不是当初那个看见阅读就晕的你啦。");
      this.goHome();
    }
  },

  /* ---------- 故事渲染 ---------- */
  renderStory(ch) {
    document.getElementById("story-title").textContent = "《" + ch.story.title + "》";
    const box = document.getElementById("story-text");
    // 中英对照模式：英文段落与中文译文逐段交错（译文按空行分段对齐）
    let raw = ch.story.text;
    if (this._bilingual) {
      const en = ch.story.text.split(/\n\s*\n/).filter(p => p.trim());
      const cn = ch.story.translation.split(/\n\s*\n/).filter(p => p.trim());
      raw = en.map((p, i) => p + (cn[i] ? "\n\n" + cn[i] : "")).join("\n\n");
    }
    // 1) 核心词金色高亮（数据源用 [[word]] 手工标注）
    let html = raw.replace(
      /\[\[([^\]]+)\]\]/g,
      '<span class="word-hl" data-w="$1">$1</span>'
    );
    // 2) 其余英文单词全部可点击（只处理标签之间的纯文本，不碰 HTML 属性）
    html = html.replace(/(^|>)([^<]+)/g, (m, tag, text) =>
      tag + text.replace(/\b([A-Za-z][A-Za-z'-]*)\b/g,
        '<span class="word-tap" data-w="$1">$1</span>'));
    box.innerHTML = html;
    box.querySelectorAll(".word-hl, .word-tap").forEach(el => {
      el.onclick = (e) => this.showPopup(el.dataset.w, e);
      this.mkFocus(el);
    });
    const trans = document.getElementById("story-translation");
    trans.classList.toggle("hidden", !!this._bilingual);  // 对照模式下译文已穿插，隐藏整段译文
    trans.textContent = ch.story.translation;
    this.renderStoryPoints(ch);
  },
  renderStoryPoints(ch) {
    const old = document.getElementById("story-points");
    if (old) old.remove();
    if (!ch.storyPoints || !ch.storyPoints.length) return;
    const box = document.querySelector("#mod-story .story-box");
    const div = document.createElement("div");
    div.id = "story-points";
    div.className = "story-points";
    div.innerHTML = `<div class="sp-title">${icon('target',14)} 本篇考点标注 · 读到哪学到哪</div>` +
      ch.storyPoints.map(pt => `
        <div class="sp-item">
          <span class="sp-tag">${pt.p}</span>
          <div class="sp-body">
            <div class="sp-q">「${pt.q}」</div>
            <div class="sp-n">${icon("bulb",12)} ${pt.n}</div>
          </div>
        </div>`).join("");
    box.appendChild(div);
  },
  toggleTrans() {
    document.getElementById("story-translation").classList.toggle("hidden");
  },
  // 中英对照开关：重渲染当前章，英文段落下方直接跟对应中文段落
  toggleBilingual() {
    this._bilingual = !this._bilingual;
    if (this.current) this.renderStory(this.current);
  },

  /* ---------- 词义弹层 ---------- */
  showPopup(word, e) {
    const ch = this.current;
    const lower = word.toLowerCase();
    // 不规则变形还原表（动词/名词），三级匹配前先还原
    const IRREG = {
      woke: "wake", woken: "wake", ran: "run", told: "tell", cried: "cry",
      spoke: "speak", spoken: "speak", skies: "sky", opened: "open",
      flew: "fly", fallen: "fall", felt: "feel", built: "build",
      heard: "hear", held: "hold", kept: "keep", lost: "lose", made: "make",
      meant: "mean", met: "meet", paid: "pay", sold: "sell", sent: "send",
      slept: "sleep", spent: "spend", stood: "stand", taught: "teach",
      thought: "think", understood: "understand", wore: "wear", won: "win",
      wrote: "write", read: "read", said: "say", saw: "see", ate: "eat",
      drank: "drink", drove: "drive", broke: "break", brought: "bring",
      bought: "buy", caught: "catch", chose: "choose", came: "come",
      did: "do", drew: "draw", gave: "give", went: "go",
      grew: "grow", knew: "know", led: "lead", left: "leave", lay: "lie",
      forbade: "forbid", forbidden: "forbid", forgot: "forget", forgotten: "forget",
      sought: "seek", fought: "fight", bought: "buy", caught: "catch", taught: "teach",
      struck: "strike", swept: "sweep", wept: "weep", crept: "creep", knelt: "kneel",
      leapt: "leap", lent: "lend", bent: "bend", burnt: "burn", dreamt: "dream",
      slid: "slide", hid: "hide", bit: "bite", wound: "wind", swung: "swing",
      sank: "sink", rang: "ring", sang: "sing", swam: "swim", began: "begin",
      rode: "ride", rose: "rise", shook: "shake", stole: "steal", swore: "swear",
      blew: "blow", threw: "throw", froze: "freeze", arose: "arise",
      fed: "feed", bled: "bleed", fled: "flee", dealt: "deal", bound: "bind",
      found: "find", laid: "lay", lain: "lie",
      fell: "fall", gone: "go", got: "get", had: "have", has: "have", does: "do",
      drunk: "drink", chosen: "choose", born: "bear", sprung: "spring",
      hidden: "hide", worn: "wear", written: "write", seen: "see", taken: "take",
      given: "give", driven: "drive", eaten: "eat", broken: "break", stolen: "steal",
      frozen: "freeze", thrown: "throw", drawn: "draw", grown: "grow", known: "know",
      blown: "blow", flown: "fly", shown: "show", torn: "tear", sworn: "swear",
      ridden: "ride", bitten: "bite", begun: "begin", sung: "sing", rung: "ring",
      sunk: "sink", stuck: "stick", spun: "spin", dug: "dig", hung: "hang",
      teeth: "tooth", women: "woman", oxen: "ox", phenomena: "phenomenon",
      criteria: "criterion", lives: "life", halves: "half", leaves: "leaf",
      knives: "knife", wolves: "wolf", shelves: "shelf", flights: "flight",
      am: "be", is: "be", are: "be", was: "be", were: "be", been: "be", being: "be",
      foci: "focus", men: "man", children: "child", mice: "mouse",
      indexes: "index", indices: "index", bases: "basis", crises: "crisis"
    };
    const strip = s => s.replace(/(iest|ier)$/i, "y").replace(/(ied|ies)$/i, "y").replace(/(est|ed|es|ing|ly|s)$/i, "");
    /* 屈折后缀白名单：前缀模糊匹配多出来的部分必须属于它——
       防「for → forbid / forest」这类前缀截胡（id/est 不是屈折后缀） */
    const SUF = ["", "s", "es", "ed", "d", "ing", "ly"];
    const okExtra = extra => SUF.indexOf(extra) !== -1;
    /* 词头数据清洗：剥离 "form (n./v.)" 这类词性标注尾巴 */
    const base = w => String(w || "").toLowerCase().replace(/\s*\([^)]*\)\s*$/, "").trim();
    const matchWords = a => ch.words.find(w => {
      const b = strip(base(w.w));
      if (a === b) return true;
      if (b.startsWith(a) && okExtra(b.slice(a.length))) return true;
      if (a.startsWith(b) && okExtra(a.slice(b.length))) return true;
      return false;
    });
    let hit = ch.words.find(w => base(w.w) === lower);
    if (!hit && IRREG[lower]) {
      hit = ch.words.find(w => w.w.toLowerCase() === IRREG[lower]);
    }
    if (!hit) {
      // 二级：变形词匹配（designed→design / shared→share / automatically→automatic）
      const a = strip(lower);
      if (a.length >= 3) hit = matchWords(a);
      if (!hit && lower.endsWith("s")) {
        // 回退：notes 这种 -es 词误剥成 not 时，只去 s 再试
        const a2 = lower.slice(0, -1);
        if (a2.length >= 3) hit = matchWords(a2);
      }
    }
    let isPhrase = false;
    if (!hit && lower.length >= 3 && ch.phrases) {
      // 三级：短语回退（throw→throw away / refer to 等）——要求词边界，防 for→form(词) 误配
      hit = ch.phrases.find(p => { const q = p.p.toLowerCase(); return q === lower || q.startsWith(lower + " "); });
      if (hit) isPhrase = true;
    }
    if (!hit) {
      // 四级：专升本生词库（miserable 等高中未覆盖的考纲词）
      const V = window.STORY_VOCAB || [];
      const findV = stem => V.find(v => v.w.toLowerCase() === stem);
      hit = findV(lower);
      if (!hit && IRREG[lower]) hit = findV(IRREG[lower]);
      if (!hit) {
        const a = strip(lower);
        if (a.length >= 3) hit = V.find(v => {
          const b = strip(String(v.w || "").toLowerCase().replace(/\s*\([^)]*\)\s*$/, "").trim());
          if (a === b) return true;
          if (b.startsWith(a) && okExtra(b.slice(a.length))) return true;
          if (a.startsWith(b) && okExtra(a.slice(b.length))) return true;
          return false;
        });
        if (!hit && lower.endsWith("s")) {
          const a2 = lower.slice(0, -1);
          if (a2.length >= 3) hit = findV(a2);
        }
      }
      if (hit) hit = { ...hit, fromVocab: true };
    }
    if (!hit) {
      // 五级：全站词典兜底（2968 词条：direct → 变形映射 → strip 还原 → 去尾 s）
      const FD = window.FULL_DICT;
      if (FD) {
        if (!this._dictMap) this._dictMap = new Map(FD.d.map(it => [it[0], it]));
        const fm = this._dictMap;
        let key = null;
        if (fm.has(lower)) key = lower;
        else if (FD.m[lower] && fm.has(FD.m[lower])) key = FD.m[lower];
        else {
          const a = strip(lower);
          if (a.length >= 3) {
            if (fm.has(a)) key = a;
            else if (FD.m[a] && fm.has(FD.m[a])) key = FD.m[a];
          }
          if (!key && lower.endsWith("s")) {
            const a2 = lower.slice(0, -1);
            if (a2.length >= 3 && fm.has(a2)) key = a2;
          }
          /* 前缀兜底：取词典中最短的近形词（hardest→hard / bigger→big），差值过大则放弃 */
          if (!key && a.length >= 3) {
            let best = null;
            FD.d.forEach(it => {
              const w = String(it[0] || "");
              if (w.length < 3) return;
              if (w.startsWith(a) || a.startsWith(w)) {
                if (!best || w.length < best[0].length) best = it;
              }
            });
            if (best && Math.abs(best[0].length - a.length) <= 5) key = best[0];
          }
        }
        if (key) {
          const it = fm.get(key);
          hit = { w: it[0], pos: it[1], cn: it[2], fromDict: true };
        }
      }
    }
    const popup = document.getElementById("word-popup");
    if (!hit) {
      // 全部未命中：提示是超纲词
      popup.innerHTML = `<span class="pw">${word}</span>${this.speakBtn(word)}<span class="pc" style="color:#8ab4d4">考纲外基础词，放心读</span>`;
      popup.classList.remove("hidden");
      const rect2 = e.target.getBoundingClientRect();
      const pw2 = popup.offsetWidth || 280, ph2 = popup.offsetHeight || 120;
      popup.style.left = Math.max(8, Math.min(rect2.left, window.innerWidth - pw2 - 8)) + "px";
      popup.style.top = Math.min(rect2.bottom + 8, Math.max(8, window.innerHeight - ph2 - 8)) + "px";
      return;
    }
    popup.innerHTML = isPhrase
      ? `<span class="pw">${hit.p}</span><span class="pc"><b>短语</b> ${hit.cn}</span>
         ${hit.note ? `<span class="pc" style="color:#c8d6e5">${hit.note}</span>` : ""}`
      : `<span class="pw">${hit.w}</span>${this.speakBtn(hit.w)} <span style="color:#9fb3c8">${hit.ipa || ""}</span>
         <span class="pc"><b>${hit.pos || ""}</b> ${hit.cn}</span>
         ${hit.fromVocab ? `<span class="pc" style="color:#5dade2">${icon("book",12)} 专升本生词</span>` : ""}
         ${hit.fromDict ? `<span class="pc" style="color:#8ab4d4">${icon("book",12)} 全站词典</span>` : ""}
         ${hit.ex ? `<span class="pc" style="color:#c8d6e5">${hit.ex}</span>` : ""}`;
    // 同族拓展：命中短语或动词本尊时，带出同动词家族的其他搭配
    const famHtml = this.buildFamily(isPhrase ? hit.p : (hit.w || ""), isPhrase ? hit.p : null);
    if (famHtml) popup.insertAdjacentHTML("beforeend", famHtml);
    // 本章易混家族联动：点到任一成员 → 弹层内展开整个家族（按点击词串匹配，不依赖 hit 结构）
    const confuseFam = this.buildConfuseFamily(lower);
    if (confuseFam) popup.insertAdjacentHTML("beforeend", confuseFam);
    // 本章熟词生义标记：点击词 ∈ 本章 hidden 时追加提醒
    const hs = this.findHiddenSense(lower);
    if (hs) {
      popup.insertAdjacentHTML("beforeend",
        `<div class="pv-hidden-tip">${icon("mask",12)} 熟词生义：${hs.hidden}（你以为只是 ${hs.known}）</div>`);
    }
    popup.classList.remove("hidden");
    const rect = e.target.getBoundingClientRect();
    const pw = popup.offsetWidth || 280, ph = popup.offsetHeight || 200;
    const left = Math.min(rect.left, window.innerWidth - pw - 8);
    popup.style.left = Math.max(8, left) + "px";
    const _top = Math.min(rect.bottom + 8, Math.max(8, window.innerHeight - ph - 8));
    popup.style.top = _top + "px";
  },
  // 同动词家族拓展：word 传命中词（短语或单词），exclude 传需排除的短语原文
  buildFamily(word, exclude) {
    const D = window.PHRASAL;
    if (!D || !word) return "";
    const key = word.toLowerCase().split(" ")[0];  // 短语取首词：put on → put
    const fam = D.verbs.find(v => {
      if (key === v.v) return true;                       // 动词本尊（put/turn…）
      return v.items.some(it => it.p.toLowerCase().split(" ")[0] === key); // 家族内任一短语的首词
    });
    if (!fam) return "";
    const others = fam.items.filter(it => it.p !== exclude).slice(0, 6);
    if (!others.length) return "";
    return `<div class="pv-family">
      <div class="pvf-head">${icon("link",12)} <b>${fam.v}</b> 家族拓展 · 同一个动词，换个介词换层意思</div>
      ${others.map(it => `<div class="pvf-item"><b>${it.p}</b><span>${it.cn}</span></div>`).join("")}
      <div class="pvf-more">地图页「动词短语总军团」可系统攻克 ${fam.v} 全部 ${fam.items.length} 条搭配</div>
    </div>`;
  },
  // 本章易混家族联动：lower 词串命中本章 confusions 任一组成员时，展开整个家族（复用 pv-family 样式）
  buildConfuseFamily(lower) {
    const ch = this.current;
    if (!ch || !ch.confusions || !lower) return "";
    // 归一化：小写 + 去词性括号 + 取首词，兼容 "adapt (v.)" 这类带词性标注的家族成员
    const norm = s => (s || "").toLowerCase().split(/\s*\(/)[0].trim().split(/\s+/)[0];
    const g = ch.confusions.find(grp =>
      (grp.items || []).some(it => norm(it.w) === norm(lower)));
    if (!g) return "";
    return `<div class="pv-family">
      <div class="pvf-head">${icon("swords",12)} <b>${g.group}</b> · 点到一个，一窝全端</div>
      ${(g.items || []).map(it => `<div class="pvf-item"><b>${it.w}</b><span>${it.cn}</span>${it.note ? `<em>${it.note}</em>` : ""}</div>`).join("")}
      ${g.tip ? `<div class="pvf-more">${icon("bulb",12)} ${g.tip}</div>` : ""}
    </div>`;
  },
  // 本章熟词生义标记：lower 词串 ∈ 本章 hidden 数组时返回该条，否则 null
  findHiddenSense(lower) {
    const ch = this.current;
    if (!ch || !ch.hidden || !lower) return null;
    return ch.hidden.find(h => (h.w || "").toLowerCase() === lower) || null;
  },

  /* ---------- 核心词卡片 ---------- */
  renderWords(ch) {
    const wrap = document.getElementById("word-cards");
    wrap.innerHTML = "";
    const oldBar = document.getElementById("mod-words").querySelector(".word-tools");
    if (oldBar) oldBar.remove();
    const tip = document.getElementById("mod-words").querySelector(".mod-tip");
    if (tip) tip.insertAdjacentHTML("afterend",
      `<div class="word-tools"><button onclick="App.flipAllWords(true)">${icon("refresh",14)} 全部翻面</button><button onclick="App.flipAllWords(false)">${icon("undo",14)} 全部复位</button><button onclick="App.startDict('words')">${icon("pen",14)} 单词默写</button><button onclick="App.startDict('phrases')">${icon("link",14)} 短语默写</button></div>`);
    ch.words.forEach((item, wi) => {
      const card = document.createElement("div");
      // 词卡自带 3D 翻面 transform，入场改用纯 opacity 淡入类，避免动画锁死 transform
      card.className = "word-card g-fade-in";
      card.style.setProperty("--i", wi);
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-face card-front">
            <div class="w">${item.w}</div>
            <div class="t">点击翻面</div>
          </div>
          <div class="card-face card-back">
            <div class="ipa">${item.ipa || ""}</div>
            <div class="cn">${item.pos || ""} ${item.cn}</div>
            <div class="ex">${item.ex || ""}<br>${item.excn || ""}</div>
            <div class="memo">${item.memo || ""}</div>
          </div>
        </div>`;
      card.onclick = () => {
        card.classList.toggle("flipped");
        // 翻面时按背面内容自动撑高卡片，音标/例句/助记不再被截断
        if (card.classList.contains("flipped")) {
          const back = card.querySelector(".card-back");
          const need = back ? back.scrollHeight + 22 : 0;
          card.style.height = Math.max(175, need) + "px";
        } else {
          card.style.height = "";
        }
      };
      this.mkFocus(card);
      wrap.appendChild(card);
    });
  },

  /* ---------- 动画大厂级反馈引擎 ---------- */
  fx: {
    praises: ["太棒了！", "脑子转得飞快！", "一词拿下！", "漂亮！就是它！", "你简直是个天才！", "稳！", "这波很秀！", "满分操作！", "阿洛为你鼓掌！", "卷卷都说好！"],
    nudges: ["差一点点！再想想～", "哎呀，就差一步！", "别急，再读一遍题～", "快对了，换个角度！", "错题是台阶，踩上去！", "思考的火花已经冒出来了！"],
    combo: 0,
    praiseAt(x, y) {
      const t = this.praises[Math.floor(Math.random() * this.praises.length)];
      this.bubble(t, x, y, "praise-bubble");
    },
    nudgeAt(x, y) {
      this.combo = 0;
      const t = this.nudges[Math.floor(Math.random() * this.nudges.length)];
      this.bubble(t, x, y, "soft-nudge");
    },
    bubble(text, x, y, cls) {
      const el = document.createElement("div");
      el.className = cls;
      el.textContent = text;
      el.style.left = "0px";
      el.style.top = Math.max(10, y - 46) + "px";
      document.body.appendChild(el);
      // 挂载后按真实宽度定位：水平居中于触发点，左右夹紧不溢出（移动端窄屏适配）
      const w = el.offsetWidth || 180;
      el.style.left = Math.min(Math.max(10, x - w / 2), window.innerWidth - w - 10) + "px";
      setTimeout(() => el.remove(), 1500);
    },
    stars(el) {
      const r = el.getBoundingClientRect();
      const faces = ["⭐", "✨", "🌟", "💫", "🎉"];
      for (let i = 0; i < 7; i++) {
        const s = document.createElement("span");
        s.className = "star-burst";
        s.textContent = faces[i % faces.length];
        s.style.left = (r.left + r.width / 2) + "px";
        s.style.top = (r.top + r.height / 2) + "px";
        s.style.setProperty("--dx", (Math.random() * 160 - 80) + "px");
        s.style.setProperty("--dy", (Math.random() * -120 - 20) + "px");
        s.style.setProperty("--rot", (Math.random() * 360 - 180) + "deg");
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 950);
      }
    },
    comboUp(el) {
      this.combo++;
      if (this.combo < 2) return;
      const r = el.getBoundingClientRect();
      const c = document.createElement("div");
      c.className = "combo-tag";
      c.innerHTML = icon("bolt",13) + " 连对 ×" + this.combo;
      c.style.left = (r.left + r.width / 2 - 50) + "px";
      c.style.top = (r.top - 14) + "px";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 650);
    },
    confetti() {
      const faces = ["🎉", "🎊", "⭐", "🌟", "✨", "🏆", "💛", "💙"];
      for (let i = 0; i < 36; i++) {
        const p = document.createElement("span");
        p.className = "confetti-piece";
        p.textContent = faces[i % faces.length];
        p.style.left = Math.random() * 100 + "vw";
        p.style.fontSize = (14 + Math.random() * 14) + "px";
        p.style.animationDuration = (2.2 + Math.random() * 1.8) + "s";
        p.style.animationDelay = Math.random() * 0.5 + "s";
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 4800);
      }
    },
    mentor(text) {
      const host = document.getElementById("chapter-header");
      if (!host) return;
      const d = document.createElement("div");
      d.className = "mentor-say";
      d.innerHTML = `<span class="face">${icon("mentor",20)}</span><span>${text}</span>`;
      host.appendChild(d);
    }
  },

  /* ---------- 通用小题判定 ---------- */
  markModule(chId, key) {
    if (!this.state.progress) this.state.progress = {};
    if (!this.state.progress[chId]) this.state.progress[chId] = {};
    this.state.progress[chId][key] = true;
    this.save();
  },
  isModuleDone(chId, key) {
    return !!(this.state.progress && this.state.progress[chId] && this.state.progress[chId][key]);
  },
  // 选项顺序随机化（Fisher-Yates）：返回 [0..n-1] 随机排列，杜绝"正确答案总在 A 项"的规律
  shuffledIdx(n) {
    const o = [...Array(n).keys()];
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [o[i], o[j]] = [o[j], o[i]];
    }
    return o;
  },
  drillChoice(box, q, allRight) {
    // 渲染一个挖空选择小题：q={s(句), opts, a, why}
    const row = document.createElement("div");
    row.className = "drill-q";
    const blank = '___';
    const [before, after] = q.s.split(blank);
    const order = this.shuffledIdx(q.opts.length);
    row.innerHTML = `<div class="ds"><span class="db">${before}</span><span class="dslot">${blank}</span><span class="db">${after}</span></div>
      <div class="dopts2">${order.map((orig, i) => `<button data-i="${i}">${q.opts[orig]}</button>`).join("")}</div>
      <div class="dwhy hidden"></div>`;
    const slot = row.querySelector(".dslot");
    const why = row.querySelector(".dwhy");
    row.querySelectorAll(".dopts2 button").forEach(btn => {
      btn.onclick = (e) => {
        if (row.dataset.done) return;
        const i = +btn.dataset.i;
        if (order[i] === q.a) {
          row.dataset.done = "1";
          btn.classList.add("right");
          slot.textContent = q.opts[q.a];
          slot.classList.add("filled");
          if (q.why) { why.textContent = q.why; why.classList.remove("hidden"); }
          this.fx.stars(btn);
          this.fx.praiseAt(e.clientX, e.clientY);
          this.fx.comboUp(btn);
          allRight();
        } else {
          btn.classList.add("wrong2");
          this.fx.nudgeAt(e.clientX, e.clientY);
          setTimeout(() => btn.classList.remove("wrong2"), 450);
          if (window.GCollectWrong && this.current) window.GCollectWrong({
            key: 'd:' + this.current.id + ':' + String(q.s || '').slice(0, 24),
            kind: 'drill', chId: this.current.id,
            q: q.s, options: q.opts, answer: q.a, explain: q.why || ''
          });
        }
      };
    });
    box.appendChild(row);
  },

  /* ---------- 易混词：阅读 + 选词填空小战场 ---------- */
  renderConfuse(ch) {
    const wrap = document.getElementById("confuse-list");
    wrap.innerHTML = "";
    let total = 0, right = 0;
    const done = () => { right++; if (right >= total) this.markModule(ch.id, "confuse"); };
    (ch.confusions || []).forEach((g, gi) => {
      const div = document.createElement("div");
      div.className = "confuse-group g-fade-up";
      div.style.setProperty("--i", gi);
      const rows = g.items.map(it =>
        `<div class="confuse-row">
           <div class="cw">${it.w}</div>
           <div class="cd">${it.cn}<small>${it.note || ""}</small></div>
         </div>`).join("");
      div.innerHTML = `<h4>${icon("swords",12)} ${g.group}</h4>${rows}
        <div class="confuse-tip">${icon("bulb",12)} ${g.tip}</div>`;
      wrap.appendChild(div);
      // 交互：选词填空小战场
      if (g.drill && g.drill.length) {
        const bt = document.createElement("div");
        bt.className = "drill-box";
        bt.innerHTML = `<div class="drill-title">${icon('target',14)} 选词小战场 · 全对点亮</div>`;
        g.drill.forEach(q => { total++; this.drillChoice(bt, q, done); });
        wrap.appendChild(bt);
      }
    });
  },

  /* ---------- 熟词生义：你以为的意（弱化）vs 考试爱考的生义（高亮） ---------- */
  renderHidden(ch) {
    const wrap = document.getElementById("hidden-list");
    if (!wrap) return;
    wrap.innerHTML = "";
    (ch.hidden || []).forEach((h, hi) => {
      const div = document.createElement("div");
      div.className = "hidden-item g-fade-up";
      div.style.setProperty("--i", hi);
      div.innerHTML = `
        <div class="hi-word">${h.w}</div>
        <div class="hi-cols">
          <div class="hi-know"><span class="hi-label">你以为只是</span>${h.known || ""}</div>
          <div class="hi-sense"><span class="hi-label">考试爱考的生义</span>${h.hidden || ""}</div>
        </div>
        ${h.ex ? `<div class="hi-ex">${h.ex}</div><div class="hi-excn">${h.excn || ""}</div>` : ""}
        ${h.note ? `<div class="hi-note">${icon("bulb",12)} ${h.note}</div>` : ""}`;
      wrap.appendChild(div);
    });
  },

  /* ---------- 长难句：阅读 + 句子解剖台 ---------- */
  renderSentences(ch) {
    const wrap = document.getElementById("sentence-list");
    wrap.innerHTML = "";
    let total = 0, right = 0;
    const done = () => { right++; if (right >= total) this.markModule(ch.id, "sentences"); };
    (ch.sentences || []).forEach((s, si) => {
      const div = document.createElement("div");
      div.className = "sentence-item g-fade-up";
      div.style.setProperty("--i", si);
      const lis = (s.parts || []).map(p => `<li>${p}</li>`).join("");
      div.innerHTML = `
        <div class="sentence-en">${s.en}</div>
        <ul class="sentence-struct">${lis}</ul>
        <div class="sentence-cn">${icon("check",12)} ${s.cn}</div>`;
      wrap.appendChild(div);
      if (s.slots && s.slots.length) {
        const bt = document.createElement("div");
        bt.className = "drill-box";
        bt.innerHTML = `<div class="drill-title">${icon('layers',14)} 句子解剖台 · 给片段选成分</div>`;
        s.slots.forEach(q => { total++; this.drillChoice(bt, q, done); });
        wrap.appendChild(bt);
      }
    });
  },

  /* ---------- 短语：展示 + 介词快闪 ---------- */
  renderPhrases(ch) {
    const wrap = document.getElementById("phrase-list");
    wrap.innerHTML = "";
    const oldPt = document.getElementById("phrase-tools");
    if (oldPt) oldPt.remove();
    wrap.insertAdjacentHTML("beforebegin", `<div class="word-tools" id="phrase-tools"><button onclick="App.startDict('phrases')">${icon("pen",14)} 短语默写</button></div>`);
    let total = 0, right = 0;
    const done = () => { right++; if (right >= total) this.markModule(ch.id, "phrases"); };
    (ch.phrases || []).forEach((p, pi) => {
      const div = document.createElement("div");
      div.className = "phrase-item" + (p.warn ? " warn" : "") + " g-fade-up";
      div.style.setProperty("--i", pi);
      div.innerHTML = `<span class="p">${p.p}</span> <span class="c">${p.cn}</span>
        ${p.note ? `<div class="c" style="font-size:12px">${p.note}</div>` : ""}`;
      wrap.appendChild(div);
    });
    const gaps = (ch.phrases || []).filter(p => p.gap);
    if (gaps.length) {
      const bt = document.createElement("div");
      bt.className = "drill-box";
      bt.innerHTML = `<div class="drill-title">${icon('bolt',14)} 介词快闪 · 看谁反应快</div>`;
      gaps.forEach(p => { total++; this.drillChoice(bt, p.gap, done); });
      wrap.appendChild(bt);
    }
  },

  /* ---------- 语法碉堡：规则 + 标志词快答 ---------- */
  renderGrammar(ch) {
    const wrap = document.getElementById("grammar-list");
    wrap.innerHTML = "";
    // 无 radar 字段的章：由语法点标题自动生成考点雷达，保证 30 章统一展示
    const radar = (ch.radar && ch.radar.length) ? ch.radar
      : (ch.grammar || []).map(g => (g.t || "").replace(/（.*?）/g, "").replace(/\(.*?\)/g, "").trim());
    if (radar.length) {
      const r = document.createElement("div");
      r.className = "radar-box";
      r.innerHTML = `<b>${icon('radar',14)} 本章考点雷达</b>` + radar.map(t => `<span class="radar-tag">${t}</span>`).join("");
      wrap.appendChild(r);
    }
    let total = 0, right = 0;
    const done = () => { right++; if (right >= total) this.markModule(ch.id, "grammar"); };
    (ch.grammar || []).forEach((g, gi) => {
      const div = document.createElement("div");
      div.className = "grammar-item g-fade-up";
      div.style.setProperty("--i", gi);
      div.innerHTML = `
        <h4>${icon('layers',14)} ${g.t}</h4>
        <div class="gr">${g.rule}</div>
        <div class="gex">${g.ex}<small>${g.excn || ""}</small></div>
        ${g.signal ? `<div class="gsig">${icon("target",12)} 标志词：${g.signal}</div>` : ""}`;
      wrap.appendChild(div);
      if (g.quiz) {
        const bt = document.createElement("div");
        bt.className = "drill-box";
        total++;
        this.drillChoice(bt, g.quiz, done);
        wrap.appendChild(bt);
      }
    });
  },

  /* ---------- 特训营联动按钮 ---------- */
  renderTrainingLink(ch) {
    const map = window.CHAPTER_TRAINING_MAP || {};
    const link = map[ch.id];
    const host = document.getElementById("quiz-result");
    if (!link || !host) return;
    const btn = document.createElement("button");
    btn.className = "training-link-btn";
    btn.innerHTML = icon('target',14) + " 下一步：" + link.label + " →";
    btn.onclick = () => { this.goHome(); this.goTraining(link.tab); };
    host.appendChild(btn);
  },

  /* ---------- 测验 ---------- */
  renderQuiz(ch) {
    const wrap = document.getElementById("quiz-list");
    const result = document.getElementById("quiz-result");
    wrap.innerHTML = "";
    result.classList.add("hidden");
    let answered = 0, right = 0;

    (ch.quiz || []).forEach((q, qi) => {
      const div = document.createElement("div");
      div.className = "quiz-item g-fade-up";
      div.style.setProperty("--i", qi);
      div.innerHTML = `<div class="quiz-q">${qi + 1}. ${q.q}</div>`;
      const opts = document.createElement("div");
      opts.className = "quiz-opts";
      const order = this.shuffledIdx(q.options.length);
      order.forEach((orig, oi) => {
        const btn = document.createElement("button");
        btn.className = "quiz-opt";
        btn.textContent = String.fromCharCode(65 + oi) + ". " + q.options[orig];
        btn.onclick = (e) => {
          if (div.dataset.done) return;
          div.dataset.done = "1";
          answered++;
          if (orig === q.answer) { right++; btn.classList.add("correct"); App.fx.stars(btn); App.fx.comboUp(btn); }
          else {
            btn.classList.add("wrong");
            App.fx.nudgeAt(e.clientX, e.clientY);
            opts.children[order.indexOf(q.answer)].classList.add("correct");
          }
          const ex = document.createElement("div");
          ex.className = "quiz-explain";
          ex.textContent = q.explain;
          div.appendChild(ex);
          if (answered === ch.quiz.length) this.finishQuiz(ch, right);
        };
        opts.appendChild(btn);
      });
      div.appendChild(opts);
      wrap.appendChild(div);
    });
  },
  finishQuiz(ch, right) {
    const total = ch.quiz.length;
    const score = Math.round((right / total) * 100);
    const result = document.getElementById("quiz-result");
    result.classList.remove("hidden", "pass", "fail");
    const best = this.state.scores[ch.id] ?? 0;
    this.state.scores[ch.id] = Math.max(best, score);
    if (score >= 80) {
      this.state.completed[ch.id] = true;
      this.state.unlocked = Math.max(this.state.unlocked, ch.id + 1);
      result.classList.add("pass");
      result.textContent = `通关！得分 ${score} 分（答对 ${right}/${total}）。下一章已解锁！`;
      this.fx.confetti();
      this.fx.praiseAt(window.innerWidth / 2, 160);
      this.renderTrainingLink(ch);
    } else {
      result.classList.add("fail");
      result.innerHTML = `得分 ${score} 分（答对 ${right}/${total}）。80 分通关——回炉再读一遍故事，你会发现好多词已经认识了！
        <br><button class="ghost-btn retry-btn" onclick="App.openChapter(${ch.id})">↺ 再测一次</button>`;
    }
    this.save();
    this.updateProgressBar();
  }
};
document.addEventListener("click", (e) => {
  if (!e.target.closest(".word-hl") && !e.target.closest(".word-tap") && !e.target.closest("#word-popup")) {
    document.getElementById("word-popup").classList.add("hidden");
  }
});
/* 词弹层键盘关闭：Esc 收起（可达性审计 P2 修复） */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const p = document.getElementById("word-popup");
    if (p && !p.classList.contains("hidden")) p.classList.add("hidden");
  }
});

/* ===== 星空 Canvas 背景（星穹氛围：三层景深 + 偶发流星 + 滚动视差） ===== */
(function initStars() {
  const canvas = document.getElementById("map-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  /* 颜色纪律：白 / 金 / 蓝三色，alpha 全程 ≤0.35 */
  const C = { white: "#e9eff7", gold: "#e9c46a", blue: "#5dade2" };
  const PARA = [0.06, 0.12, 0.2]; // 远 / 中 / 近 视差系数
  const PAD = 12;                 // 环绕判定余量

  function rand(min, max) { return min + Math.random() * (max - min); }
  function hexA(hex, a) {
    const n = parseInt(hex.slice(1), 16);
    return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
  }

  let W = 0, H = 0, stars = [], meteors = [];
  let rafId = 0, running = false, lastT = 0, nextMeteorAt = 0;

  /* 数量按屏幕面积缩放（每 250000px² 约 1 组），总量硬顶 140 */
  function mkStars() {
    stars = [];
    const k = Math.min(1.2, Math.max(0.4, (W * H) / 250000 / 5.76)); // 1600×900≈5.76 组为基准
    let nFar = Math.round(70 * k), nMid = Math.round(45 * k), nDust = Math.round(20 * k);
    const total = nFar + nMid + nDust;
    if (total > 140) {
      const s = 140 / total;
      nFar = Math.round(nFar * s); nMid = Math.round(nMid * s);
      nDust = Math.max(6, 140 - nFar - nMid);
    }
    /* 远景：0.4-1px 白/淡蓝，4-8s 闪烁周期，几乎不动 */
    for (let i = 0; i < nFar; i++) {
      stars.push({ layer: 0, x: rand(0, W), y: rand(0, H), r: rand(0.4, 1),
        color: Math.random() < 0.7 ? C.white : C.blue,
        base: rand(0.08, 0.26), amp: rand(0.05, 0.09),
        speed: (Math.PI * 2) / rand(4000, 8000), phase: rand(0, Math.PI * 2),
        vx: 0, vy: 0 });
    }
    /* 中景：1-1.8px 金/白，缓慢下漂 0.02-0.06px/frame，出底回顶 */
    for (let i = 0; i < nMid; i++) {
      stars.push({ layer: 1, x: rand(0, W), y: rand(0, H), r: rand(1, 1.8),
        color: Math.random() < 0.6 ? C.gold : C.white,
        base: rand(0.1, 0.28), amp: rand(0.04, 0.07),
        speed: (Math.PI * 2) / rand(3000, 7000), phase: rand(0, Math.PI * 2),
        vx: 0, vy: rand(0.02, 0.06) });
    }
    /* 近景尘埃：2-3.5px 径向光晕（峰值 alpha 0.18），极慢漂移 */
    for (let i = 0; i < nDust; i++) {
      stars.push({ layer: 2, x: rand(0, W), y: rand(0, H), r: rand(2, 3.5),
        color: Math.random() < 0.5 ? C.gold : C.blue,
        base: rand(0.06, 0.13), amp: rand(0.02, 0.05),
        speed: (Math.PI * 2) / rand(5000, 9000), phase: rand(0, Math.PI * 2),
        vx: rand(-0.008, 0.008), vy: rand(0.004, 0.012) });
    }
  }

  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    mkStars();
  }

  function twinkle(s, t) {
    return Math.max(0, Math.min(0.35, s.base + s.amp * Math.sin(t * s.speed + s.phase)));
  }

  function drawStar(s, alpha, sy) {
    let py = s.y - sy * PARA[s.layer];
    if (py > H + PAD) { s.y -= H + PAD * 2; py -= H + PAD * 2; }
    else if (py < -PAD) { s.y += H + PAD * 2; py += H + PAD * 2; }
    if (s.layer === 2) {
      const R = s.r * 4;
      const g = ctx.createRadialGradient(s.x, py, 0, s.x, py, R);
      g.addColorStop(0, hexA(s.color, Math.min(0.18, alpha)));
      g.addColorStop(1, hexA(s.color, 0));
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(s.x, py, R, 0, Math.PI * 2); ctx.fill();
    } else {
      ctx.fillStyle = hexA(s.color, alpha);
      ctx.beginPath(); ctx.arc(s.x, py, s.r, 0, Math.PI * 2); ctx.fill();
    }
  }

  /* 流星：从上方 1/3 区域以 12-18° 角划过，1.2s 消散，同时最多 1 颗 */
  function spawnMeteor(now) {
    const ang = rand(12, 18) * Math.PI / 180;
    const speed = rand(600, 900); // px/s
    meteors.push({
      x: rand(0.1, 0.9) * W, y: rand(0, H / 3),
      vx: Math.cos(ang) * speed, vy: Math.sin(ang) * speed, speed,
      tail: rand(80, 140), born: now, life: 1200
    });
  }

  function drawMeteor(m, now, f) {
    const age = now - m.born;
    if (age >= m.life) return false;
    m.x += m.vx * f; m.y += m.vy * f;
    const p = age / m.life;
    const fade = p < 0.15 ? p / 0.15 : 1 - (p - 0.15) / 0.85;
    const nx = m.vx / m.speed, ny = m.vy / m.speed;
    const tx = m.x - nx * m.tail, ty = m.y - ny * m.tail;
    const g = ctx.createLinearGradient(m.x, m.y, tx, ty);
    g.addColorStop(0, hexA(C.white, 0.35 * fade)); // 头部白
    g.addColorStop(1, hexA(C.white, 0));           // 尾部透明
    ctx.strokeStyle = g; ctx.lineWidth = 1.4; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(tx, ty); ctx.stroke();
    return true;
  }

  function frame(now) {
    rafId = requestAnimationFrame(frame);
    const dt = Math.min(50, now - lastT || 16.7);
    lastT = now;
    const f = dt / 16.7; // 归一化到 60fps 的帧因子
    const sy = window.scrollY || 0;

    ctx.clearRect(0, 0, W, H);

    for (const s of stars) {
      if (s.vx || s.vy) {
        s.x += s.vx * f; s.y += s.vy * f;
        if (s.x < -PAD) s.x += W + PAD * 2;
        else if (s.x > W + PAD) s.x -= W + PAD * 2;
      }
      drawStar(s, twinkle(s, now), sy);
    }

    if (meteors.length === 0 && now >= nextMeteorAt) {
      spawnMeteor(now);
      nextMeteorAt = now + rand(7000, 12000);
    }
    meteors = meteors.filter(m => drawMeteor(m, now, f));

    ctx.globalAlpha = 1;
  }

  function start() {
    if (running || reduced) return;
    running = true;
    lastT = 0;
    nextMeteorAt = performance.now() + rand(7000, 12000);
    rafId = requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(rafId);
  }

  /* prefers-reduced-motion：静止一帧，随滚动/缩放重绘，不闪不漂不流星 */
  function drawStatic() {
    const sy = window.scrollY || 0;
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) drawStar(s, s.base + s.amp, sy);
  }

  resize();
  if (reduced) {
    drawStatic();
    window.addEventListener("scroll", drawStatic, { passive: true });
  } else {
    start();
    document.addEventListener("visibilitychange", () => {
      document.hidden ? stop() : start();
    });
  }
  /* resize 防抖：拖拽窗口时避免每帧重建 140 粒子导致星图闪烁 */
  let _rsT = null;
  window.addEventListener("resize", () => {
    clearTimeout(_rsT);
    _rsT = setTimeout(() => {
      resize();
      if (reduced) drawStatic();
    }, 120);
  });
})();

/* ---------- 桌面端审计修复：键盘可达 / 滚动锁 / 动效降级助手 ---------- */
/* 必须在 App.load()/goHome() 首次执行前定义：buildCard 等渲染路径会调用 this.mkFocus */
/* 键盘可达：div/span+onclick 的可点击件统一补 tabIndex/role/Enter-Space 触发（WCAG 2.1.1） */
App.mkFocus = function (el) {
  if (!el || el.tagName === "BUTTON" || el.tagName === "A") return el;
  el.tabIndex = 0;
  el.setAttribute("role", "button");
  el.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); el.click(); }
  });
  return el;
};
/* 模态滚动锁：遮罩打开时锁 html 滚动，防背景跟滚/弹层错位 */
App.lockScroll = function (lock) {
  document.documentElement.style.overflow = lock ? "hidden" : "";
};
/* 动效降级：prefers-reduced-motion 下 JS 平滑滚动自动改 auto */
App.smooth = function () { return reducedMotion ? "auto" : "smooth"; };

App.load();
App.goHome();

/* ---------- 回到顶部悬浮按钮 ---------- */
(function () {
  const btn = document.createElement("button");
  btn.id = "btn-top";
  btn.textContent = "↑ 顶部";
  btn.onclick = () => window.scrollTo({ top: 0, behavior: App.smooth() });
  document.body.appendChild(btn);
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 400);
  }, { passive: true });
})();

/* ---------- 默写模式（词卡 / 短语 · 主动召回：看中文敲英文，逐字母判对错） ---------- */
App.norm = function (s) { return String(s || "").toLowerCase().trim().replace(/\s+/g, " ").replace(/[.,!?;:"]+/g, ""); };
App.speak = function (t) {
  try {
    const u = new SpeechSynthesisUtterance(String(t || ""));
    u.lang = "en-US"; u.rate = 0.9;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  } catch (e) { /* 无 TTS 环境静默 */ }
};
App.speakBtn = function (w) {
  return `<button class="pv-speak" title="发音" onclick="event.stopPropagation();App.speak('${String(w || "").replace(/'/g, "\\'")}')">` + icon('speak', 14) + `</button>`;
};
App.startDict = function (kind) {
  const ch = this.current;
  if (!ch) return;
  const clean = s => String(s || "").replace(/\s*\([^)]*\)\s*$/, "").trim();
  const typeable = t => /^[a-zA-Z][a-zA-Z' -]*$/.test(t);
  let items = [];
  if (kind === "words") {
    (ch.words || []).forEach(w => {
      const t = clean(w.w);
      if (t.length >= 2 && typeable(t)) items.push({ target: t, prompt: w.cn || "", pos: (w.pos || "").trim(), kind: "word" });
    });
  } else {
    (ch.phrases || []).forEach(p => {
      const t = clean(p.p);
      if (t.indexOf("/") < 0 && t.split(/\s+/).length >= 2 && typeable(t)) items.push({ target: t, prompt: p.cn || "", pos: "短语", kind: "phrase" });
    });
  }
  if (!items.length) { this.fx.mentor("本章没有适合默写的内容"); return; }
  for (let i = items.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const tmp = items[i]; items[i] = items[j]; items[j] = tmp; }
  this.dict = { kind: kind, chId: ch.id, items: items, idx: 0, phase: "type", hint: 0, results: [], wrong: [] };
  this.renderDictMask();
};
App.renderDictMask = function () {
  const D = this.dict;
  const old = document.getElementById("dict-mask");
  if (old) old.remove();
  const mask = document.createElement("div");
  mask.id = "dict-mask";
  mask.onclick = (e) => { if (e.target.id === "dict-mask") this.closeDict(); };
  mask.innerHTML = `<div class="dict-panel">
    <div class="dict-head">
      <span class="dict-kind">${D.kind === "words" ? "单词默写" : "短语默写"} · CH ${String(D.chId).padStart(2, "0")}</span>
      <span class="dict-prog">${Math.min(D.idx + 1, D.items.length)} / ${D.items.length}</span>
      <button class="dict-close" onclick="App.closeDict()" title="退出默写">${icon("x",12)}</button>
    </div>
    <div class="dict-body" id="dict-body"></div>
  </div>`;
  document.body.appendChild(mask);
  this.lockScroll(true);
  this.dictStage();
};
App.dictStage = function () {
  const D = this.dict;
  const body = document.getElementById("dict-body");
  const it = D.items[D.idx];
  if (!it) return this.dictEnd();
  const T = it.target;
  let hintHtml = "";
  if (D.hint > 0) {
    const revealed = T.slice(0, D.hint).split("").map(c => c === " " ? "␣" : c).join(" ");
    hintHtml = `<div class="dict-hint">${icon("bulb",12)} ${revealed}${D.hint < T.length ? " …" : ""}</div>`;
  }
  body.innerHTML = `
    <div class="dict-prompt">
      <span class="dict-pos">${it.pos || (it.kind === "phrase" ? "短语" : "")}</span>
      <div class="dict-cn">${it.prompt}</div>
      ${hintHtml}
      <div class="dict-len">${T.length} 个字符（含空格）</div>
    </div>
    <input id="dict-input" class="dict-input" autocomplete="off" spellcheck="false" placeholder="在这里敲出英文…" />
    <div id="dict-fb" class="dict-fb"></div>
    <div class="dict-btns">
      <button class="dict-btn" onclick="App.dictCheck()">检查（Enter）</button>
      <button class="dict-btn ghost2" onclick="App.dictHint()">${icon("bulb",14)} 提示一个字母</button>
      <button class="dict-btn ghost2" onclick="App.dictReveal()">看答案（记为不会）</button>
    </div>`;
  const inp = document.getElementById("dict-input");
  inp.focus();
  inp.onkeydown = (e) => {
    if (e.key === "Enter") { e.preventDefault(); if (D.phase === "type") this.dictCheck(); else this.dictNext(); }
    if (e.key === "Escape") { e.preventDefault(); this.closeDict(); }
  };
};
App.dictCheck = function () {
  const D = this.dict;
  if (!D || D.phase !== "type") return;
  const it = D.items[D.idx];
  const T = this.norm(it.target);
  const U = this.norm(document.getElementById("dict-input").value);
  const fb = document.getElementById("dict-fb");
  const spans = T.split("").map((c, i) => `<span class="${U[i] === c ? "dl-ok" : "dl-bad"}">${c === " " ? "␣" : c}</span>`).join("");
  if (U === T) {
    D.phase = "done";
    D.results.push({ ok: true });
    fb.innerHTML = `<div class="dict-verdict ok">${icon("check",14)} 完全正确</div><div class="dict-letters">${spans}</div>`;
    this.fx.praiseAt(window.innerWidth / 2, window.innerHeight / 2);
    setTimeout(() => { if (this.dict && this.dict.phase === "done") this.dictNext(); }, 700);
  } else {
    D.phase = "checked";
    fb.innerHTML = `<div class="dict-verdict bad">${icon("x",14)} 有误差（红色 = 错或漏）</div><div class="dict-letters">${spans}</div>
      <div class="dict-btns"><button class="dict-btn" onclick="App.dictRetry()">再试一次</button><button class="dict-btn ghost2" onclick="App.dictReveal()">看答案</button></div>`;
  }
};
App.dictHint = function () {
  const D = this.dict;
  if (!D || D.phase !== "type") return;
  const T = D.items[D.idx].target;
  D.hint = Math.min(D.hint + 1, T.length);
  const revealed = T.slice(0, D.hint).split("").map(c => c === " " ? "␣" : c).join(" ");
  const hl = document.querySelector("#dict-body .dict-hint");
  const line = `<div class="dict-hint">${icon("bulb",12)} ${revealed}${D.hint < T.length ? " …" : ""}</div>`;
  if (hl) hl.outerHTML = line;
  else document.querySelector("#dict-body .dict-len").insertAdjacentHTML("beforebegin", line);
  document.getElementById("dict-input").focus();
};
App.dictRetry = function () {
  const D = this.dict;
  if (!D) return;
  D.phase = "type";
  const inp = document.getElementById("dict-input");
  if (inp) { inp.value = ""; inp.focus(); }
  const fb = document.getElementById("dict-fb");
  if (fb) fb.innerHTML = "";
};
App.dictReveal = function () {
  const D = this.dict;
  if (!D || D.phase === "done") return;
  const it = D.items[D.idx];
  D.phase = "done";
  D.results.push({ ok: false });
  D.wrong.push({ w: it.target, cn: it.prompt, chId: D.chId });
  const fb = document.getElementById("dict-fb");
  fb.innerHTML = `<div class="dict-verdict bad">答案：<b>${it.target}</b></div>
    <div class="dict-btns"><button class="dict-btn" onclick="App.dictNext()">下一题（Enter）</button></div>`;
};
App.dictNext = function () {
  const D = this.dict;
  if (!D) return;
  D.idx++;
  D.phase = "type";
  D.hint = 0;
  if (D.idx >= D.items.length) return this.dictEnd();
  this.renderDictMask();
};
App.dictEnd = function () {
  const D = this.dict;
  const ok = D.results.filter(r => r.ok).length;
  const body = document.getElementById("dict-body");
  if (D.wrong.length) {
    this.state.dictMiss = (this.state.dictMiss || []).concat(D.wrong.map(w => ({ w: w.w, cn: w.cn, chId: w.chId, t: Date.now() })));
    if (this.state.dictMiss.length > 200) this.state.dictMiss = this.state.dictMiss.slice(-200);
    (D.wrong || []).forEach(w => {
      if (window.GCollectWrong) window.GCollectWrong({ key: 'w:' + w.w, kind: 'dict', q: w.cn, word: w.w, cn: w.cn, chId: w.chId });
    });
    this.save();
  }
  body.innerHTML = `<div class="dict-end">
    <div class="dict-score">${ok} / ${D.items.length}</div>
    <div class="dict-end-sub">${ok === D.items.length ? "全对！这一波全部收下了" : "错词已记入存档，下次默写优先安排"}</div>
    <div class="dict-btns">
      ${D.wrong.length ? `<button class="dict-btn" onclick="App.dictRetryWrong()">只练错词（${D.wrong.length}）</button>` : ""}
      <button class="dict-btn ghost2" onclick="App.closeDict()">完成</button>
    </div></div>`;
};
App.dictRetryWrong = function () {
  const D = this.dict;
  if (!D) return;
  const wrongTargets = D.wrong.map(w => w.w);
  const items = D.items.filter(it => wrongTargets.indexOf(it.target) !== -1);
  this.dict = { kind: D.kind, chId: D.chId, items: items, idx: 0, phase: "type", hint: 0, results: [], wrong: [] };
  this.renderDictMask();
};
App.closeDict = function () {
  const m = document.getElementById("dict-mask");
  if (m) m.remove();
  this.dict = null;
  this.lockScroll(false);
};
App.load();
App.goHome();

/* ---------- 移动端适配：topbar 实时高度写入 --topbar-h（sticky 吸顶基准动态跟随） ---------- */
App.syncTopbarH = function () {
  const tb = document.getElementById("topbar");
  if (!tb) return;
  document.documentElement.style.setProperty("--topbar-h", tb.offsetHeight + "px");
};
App.syncTopbarH();
window.addEventListener("resize", App.syncTopbarH, { passive: true });
window.addEventListener("load", App.syncTopbarH);
/* game.js 的 HUD 注入会让移动端顶栏换行变高：延时二次校准兜底 */
setTimeout(App.syncTopbarH, 300);
setTimeout(App.syncTopbarH, 1200);

/* ---------- 军火库总览：全站词条聚合（词/短语/易混/熟词生义 · 搜索筛选排序星标抽默导出） ---------- */
App.buildArsenal = function () {
  const clean = s => String(s || '').replace(/\s*\([^)]*\)\s*$/, '').trim();
  const out = [];
  (window.CHAPTERS || []).forEach(ch => {
    (ch.words || []).forEach(w => {
      const t = clean(w.w);
      if (!t) return;
      out.push({ cat: 'word', ch: ch.id, w: t, cn: (w.pos ? w.pos + ' ' : '') + (w.cn || ''), extra: [w.ex, w.excn].filter(Boolean).join('　'), note: w.memo || '', speak: t });
    });
    (ch.phrases || []).forEach(p => {
      const t = clean(p.p);
      if (!t) return;
      out.push({ cat: 'phrase', ch: ch.id, w: t, cn: p.cn || '', extra: p.note || '', warn: !!p.warn, speak: t.split(/[（(/]/)[0].trim() });
    });
    (ch.confusions || []).forEach(g => {
      const head = String(g.group || '').split('—')[0].trim();
      if (!head) return;
      const items = (g.items || []).map(it => it.w + ' ' + (it.cn || '')).join('；');
      out.push({ cat: 'confuse', ch: ch.id, w: head, cn: g.tip || '', extra: items, speak: head.split(/[（(/]/)[0].trim() });
    });
    (ch.hidden || []).forEach(h => {
      if (!h.w) return;
      out.push({ cat: 'hidden', ch: ch.id, w: h.w, cn: (h.known ? '你以为：' + h.known + ' → ' : '') + '实为 ' + (h.hidden || ''), extra: [h.ex, h.excn].filter(Boolean).join('　'), note: h.note || '', speak: h.w });
    });
  });
  /* 真题高频短语表：核心动词家族 + 介词搭配（可抽默） */
  (window.FREQ_PHRASES || []).forEach(p => {
    if (!p || !p[0]) return;
    out.push({ cat: 'freqph', ch: 0, w: p[0], cn: p[1] || '', extra: '', note: p[2] || '', speak: p[0] });
  });
  /* 真题高频词表（带频次）作为独立类别：军火库「真题高频」筛选下按频次降序 */
  (window.FREQ_WORDS || []).forEach(f => {
    if (!f || !f[0]) return;
    out.push({
      cat: 'freq', ch: 0, w: f[0], cn: (f[2] ? f[2] + ' ' : '') + (f[3] || ''),
      extra: '真题出现 ' + f[1] + ' 次', note: '', speak: f[0], freq: f[1]
    });
  });
  return out;
};
App.renderArsenal = function (container) {
  if (!this._arsenalData) this._arsenalData = this.buildArsenal();
  this._ars = this._ars || { q: '', cat: 'all', ch: 0, sort: 'plot', starOnly: false, warnOnly: false, withDict: true, page: 1 };
  const A = this._ars;
  const stars = (this.state.arsenalStars = this.state.arsenalStars || {});
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  container.innerHTML = `
    <div class="ar-bar">
      <input id="ar-q" class="ar-search" placeholder="搜索词头 / 中文 / 解析…" value="${esc(A.q)}" />
      <div class="ar-chips" id="ar-chips"></div>
      <div class="ar-row2">
        <select id="ar-ch" class="ar-select"></select>
        <select id="ar-sort" class="ar-select">
          <option value="plot">剧情序（章节顺序）</option>
          <option value="az">字母 A→Z</option>
          <option value="za">字母 Z→A</option>
        </select>
        <label class="ar-toggle"><input type="checkbox" id="ar-warn" ${A.warnOnly ? 'checked' : ''}/> 只看改错高频</label>
        <label class="ar-toggle"><input type="checkbox" id="ar-star" ${A.starOnly ? 'checked' : ''}/> 只看星标</label>
        <label class="ar-toggle"><input type="checkbox" id="ar-dict" ${A.withDict ? "checked" : ""}/> 含全站词典 4197</label>
      </div>
      <div class="ar-stats" id="ar-stats"></div>
    </div>
    <div id="ar-list" class="ar-list"></div>
    <div class="ar-pager" id="ar-pager"></div>
    <div class="ar-btns">
      <button class="dict-btn" onclick="App.arsenalQuiz()">${icon('dice', 12)} 从结果抽 5 个默写</button>
      <button class="dict-btn ghost2" onclick="App.arsenalCopy()">${icon('clip', 12)} 复制当前结果</button>
    </div>`;
  const CHIPS = [['all', '全部'], ['word', '核心词'], ['phrase', '短语'], ['confuse', '易混'], ['hidden', '熟词生义'], ['freq', '真题高频'], ['freqph', '高频短语']];
  const chips = container.querySelector('#ar-chips');
  chips.innerHTML = CHIPS.map(([v, t]) => `<button class="ar-chip ${A.cat === v ? 'on' : ''}" data-v="${v}">${t}</button>`).join('');
  chips.querySelectorAll('.ar-chip').forEach(b => b.onclick = () => { A.cat = b.dataset.v; A.page = 1; this.renderArsenal(container); });
  const chSel = container.querySelector('#ar-ch');
  let opts = '<option value="0">全部章节</option>';
  (window.CHAPTERS || []).forEach(c => { opts += `<option value="${c.id}" ${A.ch === c.id ? 'selected' : ''}>CH${String(c.id).padStart(2, '0')} ${c.title}</option>`; });
  chSel.innerHTML = opts;
  chSel.onchange = () => { A.ch = Number(chSel.value); A.page = 1; this.renderArsenal(container); };
  const sortSel = container.querySelector('#ar-sort');
  sortSel.value = A.sort;
  sortSel.onchange = () => { A.sort = sortSel.value; A.page = 1; this.renderArsenal(container); };
  const qInp = container.querySelector('#ar-q');
  let tm = null;
  qInp.oninput = () => {
    clearTimeout(tm);
    tm = setTimeout(() => {
      A.q = qInp.value; A.page = 1;
      this.renderArsenal(container);
      const q2 = container.querySelector('#ar-q');
      if (q2) { q2.focus(); q2.setSelectionRange(q2.value.length, q2.value.length); }
    }, 200);
  };
  container.querySelector('#ar-warn').onchange = e => { A.warnOnly = e.target.checked; A.page = 1; this.renderArsenal(container); };
  container.querySelector('#ar-star').onchange = e => { A.starOnly = e.target.checked; A.page = 1; this.renderArsenal(container); };
  container.querySelector('#ar-dict').onchange = e => { A.withDict = e.target.checked; A.page = 1; this.renderArsenal(container); };
  this.arsDrawList(container);
};
App.arsList = function () {
  const A = this._ars;
  const stars = this.state.arsenalStars || {};
  if (this._arsDictData === undefined) this._arsDictData = this.buildDictEntries();
    const base = A.withDict === false ? this._arsenalData : this._arsenalData.concat(this._arsDictData);
    let list = base.filter(e => {
    if (A.cat !== 'all' && e.cat !== A.cat) return false;
    if (A.ch && e.ch !== A.ch) return false;
    if (A.warnOnly && !e.warn) return false;
    if (A.starOnly && !stars[e.cat + ':' + e.ch + ':' + e.w]) return false;
    if (A.q) {
      const q = A.q.toLowerCase();
      const blob = (e.w + ' ' + e.cn + ' ' + (e.extra || '') + ' ' + (e.note || '')).toLowerCase();
      if (blob.indexOf(q) < 0) return false;
    }
    return true;
  });
  if (A.sort === 'az') list = list.slice().sort((a, b) => a.w.localeCompare(b.w));
  if (A.sort === 'za') list = list.slice().sort((a, b) => b.w.localeCompare(a.w));
  if (A.cat === 'freq') list = list.slice().sort((a, b) => (b.freq || 0) - (a.freq || 0));
  return list;
};
App.arsDrawList = function (container) {
  const A = this._ars;
  const stars = this.state.arsenalStars || {};
  const list = this.arsList();
  const PAGE = 50;
  const pages = Math.max(1, Math.ceil(list.length / PAGE));
  if (A.page > pages) A.page = pages;
  const slice = list.slice((A.page - 1) * PAGE, A.page * PAGE);
  const CATN = { word: '核心词', phrase: '短语', confuse: '易混', hidden: '熟词生义', dict: '词典', freq: '真题高频', freqph: '高频短语' };
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const stats = container.querySelector('#ar-stats');
  if (stats) { const poolN = this._arsenalData.length + (this._arsDictData || []).length; stats.innerHTML = "命中 <b>" + list.length + "</b> 条 · 第 " + A.page + "/" + pages + " 页 · 检索池 " + poolN + " 条（章节词条 + 全站词典）"; }
  const listEl = container.querySelector('#ar-list');
  listEl.innerHTML = slice.map(it => {
    const key = it.cat + ':' + it.ch + ':' + it.w;
    const star = stars[key] ? ' on' : '';
    return `<div class="ar-row" data-key="${esc(key)}">
      <div class="ar-w">${esc(it.w)}</div>
      <span class="ar-badge ar-b-${it.cat}">${CATN[it.cat]}</span>
      <span class="ar-chb">${it.cat === 'dict' ? '词库' : 'CH' + String(it.ch).padStart(2, '0')}</span>
      <div class="ar-cn">${esc(it.cn)}</div>
      <div class="ar-ops">
        <button class="ar-star${star}" data-k="${esc(key)}" title="星标收藏"><svg class="ic" width="15" height="15" viewBox="0 0 24 24" fill="${stars[key] ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg></button>
        ${it.speak ? `<button class="ar-speak" data-s="${esc(it.speak)}" title="发音">${icon('speak', 12)}</button>` : ''}
      </div>
      ${(it.extra || it.note) ? `<div class="ar-extra">${esc(it.extra || '')}${it.note ? `<div class="ar-note">${esc(it.note)}</div>` : ''}</div>` : ''}
    </div>`;
  }).join('') || `<div class="ar-empty">未找到「该词」——它不在本系统词库内（4197 考纲词 + 1044 章节词条）。核对拼写，或试试词根/近形词。</div>`;
  const pager = container.querySelector('#ar-pager');
  pager.innerHTML = pages > 1 ? `
    <button class="dict-btn ghost2" ${A.page <= 1 ? 'disabled' : ''} onclick="App.arsPage(-1)">上一页</button>
    <span class="ar-page-n">${A.page} / ${pages}</span>
    <button class="dict-btn ghost2" ${A.page >= pages ? 'disabled' : ''} onclick="App.arsPage(1)">下一页</button>` : '';
  listEl.onclick = e => {
    const st = e.target.closest('.ar-star');
    if (st) {
      const k = st.dataset.k;
      this.state.arsenalStars = this.state.arsenalStars || {};
      if (this.state.arsenalStars[k]) delete this.state.arsenalStars[k];
      else this.state.arsenalStars[k] = 1;
      this.save();
      const on = !!this.state.arsenalStars[k];
      st.classList.toggle('on', on);
      st.innerHTML = `<svg class="ic" width="15" height="15" viewBox="0 0 24 24" fill="${on ? "currentColor" : "none"}" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>`;
      return;
    }
    const sp = e.target.closest('.ar-speak');
    if (sp) { App.speak(sp.dataset.s); return; }
    const row = e.target.closest('.ar-row');
    if (row) row.classList.toggle('ar-open');
  };
};
App.arsPage = function (d) { const A = this._ars; if (!A) return; A.page += d; const c = document.getElementById('training-body'); if (c) this.arsDrawList(c); };
App.arsenalCopy = function () {
  const list = this.arsList().slice(0, 400);
  const text = list.map(e => `[CH${String(e.ch).padStart(2, '0')}·${{ word: '词', phrase: '短语', confuse: '易混', hidden: '熟词生义' }[e.cat]}] ${e.w} — ${e.cn}${e.extra ? '\n　' + e.extra : ''}`).join('\n');
  const done = () => { if (window.Game && Game.toast) Game.toast('已复制 ' + list.length + ' 条到剪贴板'); };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, () => done());
  else done();
};
App.buildDictEntries = function () {
  const FD = window.FULL_DICT;
  if (!FD || !FD.d) return [];
  const seen = new Set((this._arsenalData || []).map(e => String(e.w || '').toLowerCase()));
  return FD.d
    .filter(it => it && it[0])
    .map(it => ({ cat: "dict", ch: 0, w: it[0], cn: (it[1] ? it[1] + " " : "") + (it[2] || ""), extra: "", note: "", speak: it[0] }))
    .filter(e => !seen.has(e.w.toLowerCase()));
};
App.arsenalQuiz = function () {
  const list = this.arsList().filter(e => (e.cat === 'word' || e.cat === 'phrase' || e.cat === 'freqph') && /^[a-zA-Z][a-zA-Z' -]*$/.test(e.speak || e.w));
  if (list.length < 1) { if (window.Game && Game.toast) Game.toast('当前筛选结果里没有可默写的词条'); return; }
  for (let i = list.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const tmp = list[i]; list[i] = list[j]; list[j] = tmp; }
  const items = list.slice(0, 5).map(e => ({ target: e.speak || e.w, prompt: e.cn, pos: e.cat === 'phrase' ? '短语' : '', kind: 'word', chId: e.ch }));
  this.dict = { kind: 'arsenal', chId: 0, items: items, idx: 0, phase: 'type', hint: 0, results: [], wrong: [] };
  this.renderDictMask();
};
App.scrollToMod = function (id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: App.smooth(), block: "start" });
};
/* 残留 hash（#mod-phrase 等）不参与任何逻辑，保留在地址栏无副作用——
   不做 replaceState 清理：file:// 独立源下会触发 Unsafe attempt to load URL 警告 */
