/* ===== 专升本英语进化之路 · 主逻辑 ===== */
window.CHAPTERS = window.CHAPTERS || [];

const App = {
  current: null,
  state: { unlocked: 1, completed: {}, scores: {} },

  /* ---------- 存档 ---------- */
  load() {
    try {
      const raw = localStorage.getItem("zsb_english_save");
      if (raw) this.state = { ...this.state, ...JSON.parse(raw) };
    } catch (e) { /* 忽略坏存档 */ }
  },
  save() { localStorage.setItem("zsb_english_save", JSON.stringify(this.state)); },
  resetProgress() {
    if (!confirm("确定要删除全部进度重新开始吗？")) return;
    localStorage.removeItem("zsb_english_save");
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
        <span class="stage-emoji">${st.emoji || "🗺"}</span>
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
      <span class="ch-status">${done ? "🏆" : locked ? "🔒" : "▶️"}</span>
      <div class="ch-num" style="color:${stColor}">CHAPTER ${String(ch.id).padStart(2, "0")}</div>
      <h3>${ch.title}</h3>
      <p>${ch.desc}</p>
      <span class="ch-tag" style="background:rgba(0,0,0,.2);color:${stColor};border-color:${stColor}40">${ch.tag}</span>
      ${done ? `<span class="ch-tag" style="background:rgba(255,215,0,.1);color:var(--gold);border-color:var(--gold)40">✔ ${this.state.scores[ch.id] ?? "--"}分</span>` : ""}`;
    if (!locked) card.onclick = () => this.openChapter(ch.id);
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
    document.getElementById("training-view").classList.remove("hidden");
    window.scrollTo(0, 0);
    this.switchTraining(tab || "reading");
  },
  switchTraining(key) {
    document.querySelectorAll(".t-tab").forEach(b =>
      b.classList.toggle("active", b.dataset.t === key));
    const T = window.TRAINING;
    if (!T || !T[key]) return;
    const body = document.getElementById("training-body");
    body.innerHTML = "";
    const sec = T[key];

    // 方法步骤
    const stepBox = document.createElement("div");
    stepBox.className = "train-steps";
    stepBox.innerHTML = `<h3>🧭 解题流程</h3>` + sec.steps.map((s, i) =>
      `<div class="train-step"><b>第${i + 1}步</b> ${s}</div>`).join("");
    body.appendChild(stepBox);

    // 阅读四大题型 / 完形逻辑词表 / 改错十雷区
    if (sec.types) {
      const tBox = document.createElement("div");
      tBox.innerHTML = `<h3>🔍 四大题型逐个击破</h3>` + sec.types.map(t => `
        <div class="train-type">
          <h4>${t.name}</h4>
          <div class="tq">🗣 常见提问：${t.signal}</div>
          <div class="th">📐 怎么做：${t.howto}</div>
          <div class="tt">⚠️ 陷阱：${t.traps}</div>
        </div>`).join("");
      body.appendChild(tBox);
    }
    if (sec.logic) {
      const lBox = document.createElement("div");
      lBox.innerHTML = `<h3>🔗 逻辑关系词 = 隐形线索</h3>` + sec.logic.map(l => `
        <div class="train-logic"><b>${l.type}</b> ${l.words}<small>${l.tip}</small></div>`).join("");
      body.appendChild(lBox);
    }
    if (sec.collos) {
      const cBox = document.createElement("div");
      cBox.className = "train-collos";
      cBox.innerHTML = `<h3>💊 30 高频搭配速查（完形秒选题）</h3>` +
        sec.collos.map(c => `<div class="col-item"><b>${c.p}</b> ${c.cn}<small>${c.note}</small></div>`).join("");
      body.appendChild(cBox);
    }
    if (sec.zones) {
      const zBox = document.createElement("div");
      zBox.innerHTML = `<h3>💣 改错十雷区（每区一个真题式例句）</h3>` + sec.zones.map(z => `
        <div class="train-zone">
          <h4>${z.name}</h4>
          <div class="zr">${z.rule}</div>
          <div class="zw">❌ ${z.wrong}</div>
          <div class="zg">✅ ${z.right}</div>
          <div class="zx">💡 ${z.explain}</div>
        </div>`).join("");
      body.appendChild(zBox);
    }

    // 真题示范
    if (sec.demo) {
      const dBox = document.createElement("div");
      dBox.className = "train-demo";
      let html = `<h3>🎖 真题风格示范 · 逐题拆解</h3><div class="demo-passage">${sec.demo.passage}</div>`;
      (sec.demo.questions || []).forEach((q, i) => {
        html += `<div class="demo-q">
          <div class="dq">${i + 1}. ${q.q}</div>
          <div class="dopts">${q.options.map((o, oi) =>
            `<span class="${oi === q.answer ? "dopt ok" : "dopt"}">${String.fromCharCode(65 + oi)}. ${o}</span>`).join("")}</div>
          <div class="dloc">📍 定位：${q.locate}</div>
          <div class="dex">💡 解析：${q.explain}</div>
        </div>`;
      });
      (sec.demo.blanks || []).forEach(b => {
        html += `<div class="demo-q">
          <div class="dq"><b>${b.n}.</b> ${b.q}</div>
          <div class="dopts">${b.options.map((o, oi) =>
            `<span class="${oi === b.answer ? "dopt ok" : "dopt"}">${String.fromCharCode(65 + oi)}. ${o}</span>`).join("")}</div>
          <div class="dex">💡 ${b.explain}</div>
        </div>`;
      });
      dBox.innerHTML = html;
      body.appendChild(dBox);
    }

    // ===== 翻译特训渲染 =====
    if (key === "translation" && window.TRAINING_TRANS) {
      this._renderTranslation(body);
      return;
    }
    // ===== 写作特训渲染 =====
    if (key === "writing" && window.TRAINING_WRITE) {
      this._renderWriting(body);
      return;
    }
    // ===== 额外真题集（阅读/完形/改错）=====
    const TT = window.TRAINING;
    if (key === "reading" && TT && TT.extraPassages && TT.extraPassages.length) {
      this._renderExtraReadings(body, TT.extraPassages);
    }
    if (key === "cloze" && TT && TT.extraClozeSets && TT.extraClozeSets.length) {
      this._renderExtraCloze(body, TT.extraClozeSets);
    }
    if (key === "error" && TT && TT.extraErrorSets && TT.extraErrorSets.length) {
      this._renderExtraErrors(body, TT.extraErrorSets);
    }
  },

  /* ---------- 翻译特训渲染 ---------- */
  _renderTranslation(body) {
    const T = window.TRAINING_TRANS;
    if (!T) { body.innerHTML = "<p style='color:var(--sub);padding:20px'>数据加载中...</p>"; return; }
    // 英译汉
    const e2c = T.e2c;
    let html = `<h3>🇬🇧→🇨🇳 英译汉 · 20分</h3>`;
    html += `<div class="train-steps">`;
    (e2c.skills||[]).forEach(s => {
      html += `<div class="train-step"><b>【${s.name}】</b> ${s.rule}<br><span style="color:var(--blue);font-style:italic">${s.ex}</span><br><span style="color:var(--sub);font-size:12px">${s.excn}</span></div>`;
    });
    html += `</div>`;
    html += `<h3>📝 英译汉练习句（${(e2c.sentences||[]).length}句）</h3>`;
    (e2c.sentences||[]).forEach((s,i) => {
      html += `<div class="sentence-item" style="margin-bottom:12px">
        <div class="sen-en" style="margin-bottom:8px"><b>${i+1}.</b> ${s.en}</div>
        <div style="font-size:12px;color:var(--gold);margin-bottom:6px">📌 句型：${s.type}</div>
        <details style="margin-bottom:6px"><summary style="cursor:pointer;color:var(--blue);font-size:13px">查看拆解步骤</summary>
          <div class="sen-parts">${(s.steps||[]).map(p=>`<p>${p}</p>`).join("")}</div>
        </details>
        <details><summary style="cursor:pointer;color:var(--green);font-size:13px">查看参考译文</summary>
          <div class="sen-cn" style="margin-top:6px">${s.cn}</div>
          ${s.tips ? `<div style="color:var(--red);font-size:12px;margin-top:4px">⚠️ ${s.tips}</div>` : ""}
        </details>
      </div>`;
    });
    // 汉译英
    const c2e = T.c2e;
    html += `<h3>🇨🇳→🇬🇧 汉译英 · 20分</h3>`;
    html += `<div class="train-steps">`;
    (c2e.templates||[]).forEach(t => {
      html += `<div class="train-step"><b>【${t.name}】</b> <code style="background:rgba(255,215,0,.1);padding:2px 6px;border-radius:4px">${t.pattern}</code><br><span style="color:var(--sub);font-size:12.5px">例：${t.ex_cn} → <em style="color:var(--blue)">${t.ex_en}</em></span>${t.note ? `<br><span style="color:var(--orange);font-size:11.5px">💡 ${t.note}</span>` : ""}</div>`;
    });
    html += `</div>`;
    html += `<h3>📝 汉译英练习句（${(c2e.sentences||[]).length}句）</h3>`;
    (c2e.sentences||[]).forEach((s,i) => {
      html += `<div class="sentence-item" style="margin-bottom:12px">
        <div style="font-size:14.5px;font-weight:700;color:var(--ink);margin-bottom:6px"><b>${i+1}.</b> ${s.cn}</div>
        <div style="font-size:12px;color:var(--gold);margin-bottom:6px">📌 考点：${s.type}</div>
        <details><summary style="cursor:pointer;color:var(--green);font-size:13px">查看参考译文</summary>
          <div class="sen-cn" style="margin-top:6px"><em>${s.en}</em></div>
          <div style="color:var(--blue);font-size:12px;margin-top:4px">🔑 ${s.keypoint}</div>
          ${s.traps ? `<div style="color:var(--red);font-size:12px;margin-top:2px">⚠️ 易错：${s.traps}</div>` : ""}
        </details>
      </div>`;
    });
    body.innerHTML = html;
  },

  /* ---------- 写作特训渲染 ---------- */
  _renderWriting(body) {
    const W = window.TRAINING_WRITE;
    if (!W) { body.innerHTML = "<p style='color:var(--sub);padding:20px'>数据加载中...</p>"; return; }
    let html = `<h3>✍️ 写作概览</h3><div class="train-steps"><div class="train-step">${W.overview||"30分，120-150词，书写工整，结构清晰。"}</div></div>`;
    // 万能句型
    if (W.powerPhrases && W.powerPhrases.length) {
      html += `<h3>💡 万能句型库（${W.powerPhrases.length}条）</h3>`;
      const groups = {};
      W.powerPhrases.forEach(p => { if (!groups[p.type]) groups[p.type]=[];  groups[p.type].push(p); });
      Object.keys(groups).forEach(g => {
        html += `<div style="margin-bottom:10px"><div style="color:var(--gold);font-weight:800;margin-bottom:6px">${g}</div>`;
        groups[g].forEach(p => {
          html += `<div class="grammar-item" style="margin-bottom:8px">
            <div class="gr-title">${p.cn}</div>
            <div class="gr-ex">${p.en}</div>
            ${p.note ? `<div class="gr-signal">💡 ${p.note}</div>` : ""}
          </div>`;
        });
        html += `</div>`;
      });
    }
    // 三大文体
    (W.genres||[]).forEach(g => {
      html += `<h3>📂 ${g.name}</h3>`;
      (g.types||[]).forEach(t => {
        html += `<div class="confuse-group" style="margin-bottom:14px">
          <h4>${t.name}</h4>
          <div style="font-size:13px;color:var(--sub);margin-bottom:8px">结构：${(t.structure||[]).join(" → ")}</div>
          <div style="background:rgba(255,215,0,.06);border:1px solid rgba(255,215,0,.2);border-radius:8px;padding:10px;margin-bottom:8px;font-size:13px">
            <b style="color:var(--gold)">模板：</b><pre style="white-space:pre-wrap;font-family:inherit;font-size:13px;color:var(--sub)">${t.template||""}</pre>
          </div>
          ${t.demo ? `<details><summary style="cursor:pointer;color:var(--green);font-weight:700">📄 查看范文（${t.demo.topic}）</summary>
            <div style="background:rgba(255,255,255,.03);border:1px solid var(--border);border-radius:8px;padding:12px;margin-top:8px">
              <div style="font-size:14px;line-height:2;color:var(--ink)">${t.demo.essay}</div>
              <div style="color:var(--sub);font-size:12px;margin-top:8px">📋 评分要点：${t.demo.notes}</div>
            </div>
          </details>` : ""}
        </div>`;
      });
    });
    // 历年真题
    if (W.pastTopics && W.pastTopics.length) {
      html += `<h3>📅 近5年真题题目</h3>`;
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
    let html = `<h3 style="color:var(--green);border-left-color:var(--green)">📚 真题阅读练习（共 ${passages.length} 篇）</h3>`;
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
          <div class="dloc">📍 定位：${q.locate || ''}</div>
          <div class="dex">💡 ${q.explain}</div>
        </div>`;
      });
      html += `</div>`;
    });
    body.insertAdjacentHTML('beforeend', html);
  },

  _renderExtraCloze(body, sets) {
    let html = `<h3 style="color:var(--green);border-left-color:var(--green)">📝 完形填空练习（共 ${sets.length} 套）</h3>`;
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
          <div class="dex">💡 ${q.explain}</div>
        </div>`;
      });
      html += `</div>`;
    });
    body.insertAdjacentHTML('beforeend', html);
  },

  _renderExtraErrors(body, sets) {
    let html = `<h3 style="color:var(--green);border-left-color:var(--green)">✏️ 改错练习（共 ${sets.length} 篇）</h3>`;
    sets.forEach((s, si) => {
      html += `<div class="train-demo" style="margin-bottom:16px">
        <h3 style="color:var(--orange)">改错 ${si + 2}：${s.topic}</h3>
        <div class="demo-passage">${s.passage.replace(/\n/g, '<br>')}</div>
        <h4 style="color:var(--gold);margin:10px 0 8px;font-size:14px">📋 错误清单（${(s.errors||[]).length}处）</h4>`;
      (s.errors || []).forEach((e, ei) => {
        html += `<div class="demo-q" style="padding:8px 0">
          <div class="dq"><b>${ei + 1}.</b> <span style="color:var(--sub)">${e.line}</span></div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin:5px 0">
            <span class="dopt" style="color:var(--red)">❌ ${e.wrong}</span>
            <span class="dopt ok">✅ ${e.right}</span>
            <span class="dopt" style="color:var(--purple)">${e.type}</span>
          </div>
          <div class="dex">💡 ${e.explain}</div>
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
    document.getElementById("chapter-view").classList.remove("hidden");
    window.scrollTo(0, 0);

    document.getElementById("chapter-header").innerHTML = `
      <div class="ch-kicker">CHAPTER ${String(ch.id).padStart(2, "0")}</div>
      <h2>${ch.title}</h2>
      <div class="ch-desc">${ch.desc}</div>
    `;
    this.renderNav(ch);
    this.fx.mentor(`嗨，我是阿洛！本章有 7 个关卡，跟着顶部导航 01 → 07 一关关闯，答题时我会为你欢呼。准备好了吗？出发！`);
    this.renderStory(ch);
    this.renderWords(ch);
    this.renderConfuse(ch);
    this.renderSentences(ch);
    this.renderPhrases(ch);
    this.renderGrammar(ch);
    this.renderQuiz(ch);
  },
  /* ---------- 吸顶模块导航条 ---------- */
  renderNav(ch) {
    const old = document.getElementById("module-nav");
    if (old) old.remove();
    const nav = document.createElement("div");
    nav.id = "module-nav";
    nav.className = "module-nav";
    // 双栏模式下只显示右栏的模块（不含故事，故事在左栏固定）
    const navItems = [
      { key: "mod-words",    n: "02", t: "核心词" },
      { key: "mod-confuse",  n: "03", t: "易混词" },
      { key: "mod-sentence", n: "04", t: "长难句" },
      { key: "mod-phrase",   n: "05", t: "短语" },
      { key: "mod-grammar",  n: "06", t: "语法" },
      { key: "mod-quiz",     n: "07", t: "测验" }
    ];
    nav.innerHTML = navItems.map(m =>
      `<a href="#${m.key}"><b>${m.n}</b> ${m.t}</a>`).join("");
    // 插到 split-right 顶部
    const right = document.querySelector(".split-right");
    if (right) right.prepend(nav);
    else document.getElementById("chapter-view").prepend(nav);
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
      alert("🎉 全部二十一章通关！你已经不是当初那个看见阅读就晕的你啦。");
      this.goHome();
    }
  },

  /* ---------- 故事渲染 ---------- */
  renderStory(ch) {
    document.getElementById("story-title").textContent = "《" + ch.story.title + "》";
    const box = document.getElementById("story-text");
    box.innerHTML = ch.story.text.replace(
      /\[\[([^\]]+)\]\]/g,
      '<span class="word-hl" data-w="$1">$1</span>'
    );
    box.querySelectorAll(".word-hl").forEach(el => {
      el.onclick = (e) => this.showPopup(el.dataset.w, e);
    });
    const trans = document.getElementById("story-translation");
    trans.classList.add("hidden");
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
    div.innerHTML = `<div class="sp-title">📍 本篇考点标注 · 读到哪学到哪</div>` +
      ch.storyPoints.map(pt => `
        <div class="sp-item">
          <span class="sp-tag">${pt.p}</span>
          <div class="sp-body">
            <div class="sp-q">「${pt.q}」</div>
            <div class="sp-n">💡 ${pt.n}</div>
          </div>
        </div>`).join("");
    box.appendChild(div);
  },
  toggleTrans() {
    document.getElementById("story-translation").classList.toggle("hidden");
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
      grew: "grow", knew: "know", led: "lead", left: "leave", lay: "lie"
    };
    const strip = s => s.replace(/(ied|ies|ed|es|ing|ly|s)$/, "");
    const matchWords = a => ch.words.find(w => {
      const b = strip(w.w.toLowerCase());
      return a === b || b.startsWith(a) || a.startsWith(b);
    });
    let hit = ch.words.find(w => w.w.toLowerCase() === lower);
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
      // 三级：短语回退（throw→throw away / refer to 等）
      hit = ch.phrases.find(p => p.p.toLowerCase().startsWith(lower));
      if (hit) isPhrase = true;
    }
    const popup = document.getElementById("word-popup");
    if (!hit) { popup.classList.add("hidden"); return; }
    popup.innerHTML = isPhrase
      ? `<span class="pw">${hit.p}</span><span class="pc"><b>短语</b> ${hit.cn}</span>
         ${hit.note ? `<span class="pc" style="color:#c8d6e5">${hit.note}</span>` : ""}`
      : `<span class="pw">${hit.w}</span> <span style="color:#9fb3c8">${hit.ipa || ""}</span>
         <span class="pc"><b>${hit.pos || ""}</b> ${hit.cn}</span>
         ${hit.ex ? `<span class="pc" style="color:#c8d6e5">${hit.ex}</span>` : ""}`;
    popup.classList.remove("hidden");
    const rect = e.target.getBoundingClientRect();
    const left = Math.min(rect.left, window.innerWidth - 320);
    popup.style.left = Math.max(8, left) + "px";
    popup.style.top = (rect.bottom + window.scrollY + 8) + "px";
  },

  /* ---------- 核心词卡片 ---------- */
  renderWords(ch) {
    const wrap = document.getElementById("word-cards");
    wrap.innerHTML = "";
    ch.words.forEach(item => {
      const card = document.createElement("div");
      card.className = "word-card";
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
      card.onclick = () => card.classList.toggle("flipped");
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
      el.style.left = Math.min(Math.max(10, x - 80), window.innerWidth - 220) + "px";
      el.style.top = (y - 46) + "px";
      document.body.appendChild(el);
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
      c.textContent = "🔥 连对 ×" + this.combo;
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
      d.innerHTML = `<span class="face">🧑‍🎓</span><span>${text}</span>`;
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
  drillChoice(box, q, allRight) {
    // 渲染一个挖空选择小题：q={s(句), opts, a, why}
    const row = document.createElement("div");
    row.className = "drill-q";
    const blank = '___';
    const [before, after] = q.s.split(blank);
    row.innerHTML = `<div class="ds"><span class="db">${before}</span><span class="dslot">${blank}</span><span class="db">${after}</span></div>
      <div class="dopts2">${q.opts.map((o, i) => `<button data-i="${i}">${o}</button>`).join("")}</div>
      <div class="dwhy hidden"></div>`;
    const slot = row.querySelector(".dslot");
    const why = row.querySelector(".dwhy");
    row.querySelectorAll(".dopts2 button").forEach(btn => {
      btn.onclick = (e) => {
        if (row.dataset.done) return;
        const i = +btn.dataset.i;
        if (i === q.a) {
          row.dataset.done = "1";
          btn.classList.add("right");
          slot.textContent = q.opts[q.a];
          slot.classList.add("filled");
          if (q.why) { why.textContent = "💡 " + q.why; why.classList.remove("hidden"); }
          this.fx.stars(btn);
          this.fx.praiseAt(e.clientX, e.clientY);
          this.fx.comboUp(btn);
          allRight();
        } else {
          btn.classList.add("wrong2");
          this.fx.nudgeAt(e.clientX, e.clientY);
          setTimeout(() => btn.classList.remove("wrong2"), 450);
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
    (ch.confusions || []).forEach(g => {
      const div = document.createElement("div");
      div.className = "confuse-group";
      const rows = g.items.map(it =>
        `<div class="confuse-row">
           <div class="cw">${it.w}</div>
           <div class="cd">${it.cn}<small>${it.note || ""}</small></div>
         </div>`).join("");
      div.innerHTML = `<h4>⚔️ ${g.group}</h4>${rows}
        <div class="confuse-tip">💡 ${g.tip}</div>`;
      wrap.appendChild(div);
      // 交互：选词填空小战场
      if (g.drill && g.drill.length) {
        const bt = document.createElement("div");
        bt.className = "drill-box";
        bt.innerHTML = `<div class="drill-title">🎯 选词小战场 · 全对点亮</div>`;
        g.drill.forEach(q => { total++; this.drillChoice(bt, q, done); });
        wrap.appendChild(bt);
      }
    });
  },

  /* ---------- 长难句：阅读 + 句子解剖台 ---------- */
  renderSentences(ch) {
    const wrap = document.getElementById("sentence-list");
    wrap.innerHTML = "";
    let total = 0, right = 0;
    const done = () => { right++; if (right >= total) this.markModule(ch.id, "sentences"); };
    (ch.sentences || []).forEach(s => {
      const div = document.createElement("div");
      div.className = "sentence-item";
      const lis = (s.parts || []).map(p => `<li>${p}</li>`).join("");
      div.innerHTML = `
        <div class="sentence-en">${s.en}</div>
        <ul class="sentence-struct">${lis}</ul>
        <div class="sentence-cn">✅ ${s.cn}</div>`;
      wrap.appendChild(div);
      if (s.slots && s.slots.length) {
        const bt = document.createElement("div");
        bt.className = "drill-box";
        bt.innerHTML = `<div class="drill-title">🔬 句子解剖台 · 给片段选成分</div>`;
        s.slots.forEach(q => { total++; this.drillChoice(bt, q, done); });
        wrap.appendChild(bt);
      }
    });
  },

  /* ---------- 短语：展示 + 介词快闪 ---------- */
  renderPhrases(ch) {
    const wrap = document.getElementById("phrase-list");
    wrap.innerHTML = "";
    let total = 0, right = 0;
    const done = () => { right++; if (right >= total) this.markModule(ch.id, "phrases"); };
    (ch.phrases || []).forEach(p => {
      const div = document.createElement("div");
      div.className = "phrase-item" + (p.warn ? " warn" : "");
      div.innerHTML = `<span class="p">${p.p}</span> <span class="c">${p.cn}</span>
        ${p.note ? `<div class="c" style="font-size:12px">${p.note}</div>` : ""}`;
      wrap.appendChild(div);
    });
    const gaps = (ch.phrases || []).filter(p => p.gap);
    if (gaps.length) {
      const bt = document.createElement("div");
      bt.className = "drill-box";
      bt.innerHTML = `<div class="drill-title">⚡ 介词快闪 · 看谁反应快</div>`;
      gaps.forEach(p => { total++; this.drillChoice(bt, p.gap, done); });
      wrap.appendChild(bt);
    }
  },

  /* ---------- 语法碉堡：规则 + 标志词快答 ---------- */
  renderGrammar(ch) {
    const wrap = document.getElementById("grammar-list");
    wrap.innerHTML = "";
    if (ch.radar && ch.radar.length) {
      const r = document.createElement("div");
      r.className = "radar-box";
      r.innerHTML = `<b>📡 本章考点雷达</b>` + ch.radar.map(t => `<span class="radar-tag">${t}</span>`).join("");
      wrap.appendChild(r);
    }
    let total = 0, right = 0;
    const done = () => { right++; if (right >= total) this.markModule(ch.id, "grammar"); };
    (ch.grammar || []).forEach(g => {
      const div = document.createElement("div");
      div.className = "grammar-item";
      div.innerHTML = `
        <h4>📐 ${g.t}</h4>
        <div class="gr">${g.rule}</div>
        <div class="gex">${g.ex}<small>${g.excn || ""}</small></div>
        ${g.signal ? `<div class="gsig">🎯 标志词：${g.signal}</div>` : ""}`;
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
    btn.textContent = "🎯 下一步：" + link.label + " →";
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
      div.className = "quiz-item";
      div.innerHTML = `<div class="quiz-q">${qi + 1}. ${q.q}</div>`;
      const opts = document.createElement("div");
      opts.className = "quiz-opts";
      q.options.forEach((opt, oi) => {
        const btn = document.createElement("button");
        btn.className = "quiz-opt";
        btn.textContent = String.fromCharCode(65 + oi) + ". " + opt;
        btn.onclick = (e) => {
          if (div.dataset.done) return;
          div.dataset.done = "1";
          answered++;
          if (oi === q.answer) { right++; btn.classList.add("correct"); App.fx.stars(btn); App.fx.comboUp(btn); }
          else {
            btn.classList.add("wrong");
            App.fx.nudgeAt(e.clientX, e.clientY);
            opts.children[q.answer].classList.add("correct");
          }
          const ex = document.createElement("div");
          ex.className = "quiz-explain";
          ex.textContent = "📖 " + q.explain;
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
      result.textContent = `🏆 通关！得分 ${score} 分（答对 ${right}/${total}）。下一章已解锁！`;
      this.fx.confetti();
      this.fx.praiseAt(window.innerWidth / 2, 160);
      this.renderTrainingLink(ch);
    } else {
      result.classList.add("fail");
      result.innerHTML = `💪 得分 ${score} 分（答对 ${right}/${total}）。80 分通关——回炉再读一遍故事，你会发现好多词已经认识了！
        <br><button class="ghost-btn retry-btn" onclick="App.openChapter(${ch.id})">↺ 再测一次</button>`;
    }
    this.save();
    this.updateProgressBar();
  }
};
document.addEventListener("click", (e) => {
  if (!e.target.closest(".word-hl") && !e.target.closest("#word-popup")) {
    document.getElementById("word-popup").classList.add("hidden");
  }
});

/* ===== 星空 Canvas 背景 ===== */
(function initStars() {
  const canvas = document.getElementById("map-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let stars = [];
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function mkStars() {
    stars = [];
    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        a: Math.random(),
        da: (Math.random() - 0.5) * 0.006,
        color: ['#ffd700','#5dade2','#4ecca3','#a855f7','#ff9f1c'][Math.floor(Math.random()*5)]
      });
    }
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.a += s.da;
      if (s.a < 0.1) s.da = Math.abs(s.da);
      if (s.a > 1)   s.da = -Math.abs(s.da);
      ctx.globalAlpha = s.a * 0.6;
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  resize();
  mkStars();
  draw();
  window.addEventListener("resize", () => { resize(); mkStars(); });
})();

App.load();
App.goHome();
