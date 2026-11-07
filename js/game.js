/* ===== 游戏层 · 词力觉醒 Game Layer（一期 + 二期 · 注入式插件）===== */
/* 不修改 app.js / style.css：全部样式动态注入，全部行为通过运行时包装 App 实现 */
(function () {
  'use strict';

  /* ---------- 0. 内联 SVG 图标（UI chrome 专用：stroke=currentColor · 24 网格 · 1.8 描边） ---------- */
  const ic = (p) => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  const ICONS = {
    sword: ic('<path d="M18 3l3 3L9.5 17.5 5 19l1.5-4.5L18 3z"/><path d="M14 6.5l3.5 3.5"/>'),
    shield: ic('<path d="M12 3l7 2.5V11c0 4.8-3 8-7 10-4-2-7-5.2-7-10V5.5L12 3z"/>'),
    crown: ic('<path d="M3 17l2-9 4 4 3-7 3 7 4-4 2 9z"/>'),
    lock: ic('<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
    skull: ic('<path d="M12 3a7 7 0 0 0-7 7c0 2.6 1.4 4.5 3 5.5V19h8v-3.5c1.6-1 3-2.9 3-5.5a7 7 0 0 0-7-7z"/><circle cx="9.5" cy="10.5" r="1.2"/><circle cx="14.5" cy="10.5" r="1.2"/>'),
    gift: ic('<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M4 10h16M12 10v10"/><path d="M12 10c-1.5 0-4-.5-4-2.5C8 6.2 9 5.5 10 5.5c1.8 0 2 4.5 2 4.5zm0 0c1.5 0 4-.5 4-2.5 0-1.3-1-2-2-2-1.8 0-2 4.5-2 4.5z"/>'),
    map: ic('<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>'),
    ff: ic('<path d="M4 6l7 6-7 6V6z"/><path d="M13 6l7 6-7 6V6z"/>'),
    play: ic('<path d="M7 5l12 7-12 7V5z"/>'),
    pause: ic('<path d="M9 5v14M15 5v14"/>'),
    clapper: ic('<rect x="3" y="10" width="18" height="10" rx="2"/><path d="M3 10l2-5 16 2-1.5 3"/><path d="M9 5.8l1 3M14 6.5l1 3"/>'),
    moon: ic('<path d="M20 13A8 8 0 1 1 11 4a6.5 6.5 0 0 0 9 9z"/>'),
    sun: ic('<circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/>'),
    check: ic('<path d="M5 13l4 4L19 7"/>'),
    bolt: ic('<path d="M13 2L4 14h6l-1 8 9-12h-6z"/>'),
    star: ic('<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>')
  };

  /* ---------- 1. 注入全部新样式（g- 前缀） ---------- */
  const css = `
/* ===== 游戏层 HUD ===== */
#g-hud { display:flex; align-items:center; gap:10px; min-width:260px; }
.ic { width:1.1em; height:1.1em; flex:none; vertical-align:-.18em; }
.g-rank-badge {
  display:inline-flex; align-items:center; gap:6px;
  background:var(--glass-bg);
  border:1px solid var(--glass-line); color:var(--gold);
  border-radius:12px; padding:4px 14px;
  font-size:13px; font-weight:900; letter-spacing:1px;
  backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px);
  box-shadow:0 0 12px rgba(255,215,0,.12), inset 0 1px 0 rgba(255,255,255,.08);
  transition:all var(--t-fast) var(--ease);
}
/* 徽章图标：鎏金渐变描边（引用页内注入的 g-gold-grad 渐变） */
.g-rank-badge .ic { stroke:url(#g-gold-grad) currentColor; filter:drop-shadow(0 0 4px rgba(233,196,106,.45)); }
.g-rank-badge:hover { transform:translateY(-1px); }
.g-xp-wrap { flex:1; display:flex; align-items:center; gap:8px; min-width:170px; }
.g-xp-bar {
  flex:1; height:10px; background:var(--glass-bg);
  border:1px solid var(--glass-line); border-radius:6px; overflow:hidden;
  backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px);
}
.g-xp-fill {
  height:100%; width:0%;
  background:var(--gold-grad);
  border-radius:6px; transition:width var(--t-mid) var(--ease);
}
.g-xp-num { font-size:11px; color:var(--sub); white-space:nowrap; font-weight:700; font-feature-settings:'tnum'; }

/* ===== 蜿蜒大地图 ===== */
.g-road { position:relative; max-width:760px; margin:0 auto; }
.g-road-svg { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; }
/* 双线路径：首条 path 为辉光层（像素空间 blur，避免 viewBox 非均匀拉伸下 SVG 滤镜变形） */
.g-road-svg path:first-of-type { filter:blur(4px); }
/* 蜿蜒地图路径：实线，描线入场由 buildRoad 里 JS 按真实长度驱动 */
/* 节点 stagger 入场：覆盖通用 fade-up，保留 translate(-50%,-50%) 定位 */
.g-node.g-fade-up {
  animation:g-node-in .45s var(--ease) both;
  animation-delay:calc(var(--i,0) * 60ms);
}
@keyframes g-node-in {
  from { opacity:0; transform:translate(-50%,calc(-50% + 18px)); }
  to { opacity:1; transform:translate(-50%,-50%); }
}
.g-node {
  position:absolute; transform:translate(-50%,-50%);
  display:flex; flex-direction:column; align-items:center; gap:4px;
  z-index:2; cursor:pointer;
}
.g-node-dot {
  width:54px; height:54px; border-radius:50%;
  display:flex; align-items:center; justify-content:center;
  background:var(--card2);
  border:2px solid var(--line2); color:var(--sub);
  box-shadow:0 10px 28px rgba(0,0,0,.38);
  transition:transform var(--t-fast) var(--ease), border-color var(--t-fast), color var(--t-fast), box-shadow var(--t-fast) var(--ease);
}
.g-node:hover .g-node-dot { transform:scale(1.08); border-color:var(--gold); color:var(--gold); }
/* 已通关节点：金色外圈光环 */
.g-node.done .g-node-dot {
  border-color:var(--gold); color:var(--gold); font-weight:900;
  box-shadow:0 0 0 3px rgba(233,196,106,.15), 0 10px 28px rgba(0,0,0,.38);
}
.g-node.locked { cursor:not-allowed; opacity:.5; }
.g-node.locked .g-node-dot { filter:grayscale(.6); }
.g-node.locked:hover .g-node-dot { transform:none; border-color:var(--line2); color:var(--sub); }
.g-node.current .g-node-dot { border-color:var(--green); color:var(--green); animation:g-pulse 1.6s ease-out infinite; }
.g-node.boss .g-node-dot { width:70px; height:70px; }
@keyframes g-pulse {
  0% { box-shadow:0 0 0 0 color-mix(in srgb,var(--green) 55%,transparent); }
  70% { box-shadow:0 0 0 16px color-mix(in srgb,var(--green) 0%,transparent); }
  100% { box-shadow:0 0 0 0 color-mix(in srgb,var(--green) 0%,transparent); }
}
.g-node-ch { font-size:11px; color:var(--sub); font-weight:800; letter-spacing:1px; }
.g-node-stars { font-size:13px; color:var(--gold); letter-spacing:2px; }
.g-node-crown {
  position:absolute; top:-20px; font-size:12px; font-weight:900; color:var(--gold);
  background:var(--card); padding:2px 8px; border-radius:12px;
  border:1px solid var(--line2); white-space:nowrap;
  display:inline-flex; align-items:center; gap:4px;
}
/* 地图 BOSS 徽章：金色 L 形角标（签名角标 · 对角双 L） */
.g-node-crown::before {
  content:''; position:absolute; top:-5px; left:-5px; width:9px; height:9px;
  border-top:2px solid var(--gold); border-left:2px solid var(--gold); opacity:.9; pointer-events:none;
}
.g-node-crown::after {
  content:''; position:absolute; bottom:-5px; right:-5px; width:9px; height:9px;
  border-bottom:2px solid var(--gold); border-right:2px solid var(--gold); opacity:.9; pointer-events:none;
}
.g-node-title { font-size:11px; color:var(--sub); max-width:150px; text-align:center; line-height:1.3; }

/* ===== Boss 血条 ===== */
.g-boss-head {
  position:relative;
  background:linear-gradient(135deg,color-mix(in srgb,var(--red) 30%,transparent),var(--card2));
  border:1px solid var(--line2); border-radius:16px;
  padding:10px 14px; margin-bottom:14px;
  box-shadow:0 10px 28px rgba(0,0,0,.38);
}
/* Boss 头条：金色 L 形角标（签名角标 · 对角双 L，与地图 BOSS 徽章/结算面板同款） */
.g-boss-head::before {
  content:''; position:absolute; top:7px; left:7px; width:13px; height:13px;
  border-top:2px solid var(--gold); border-left:2px solid var(--gold);
  border-top-left-radius:3px; opacity:.9; pointer-events:none;
}
.g-boss-head::after {
  content:''; position:absolute; bottom:7px; right:7px; width:13px; height:13px;
  border-bottom:2px solid var(--gold); border-right:2px solid var(--gold);
  border-bottom-right-radius:3px; opacity:.9; pointer-events:none;
}
.g-boss-top { display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; gap:10px; }
.g-boss-name { display:inline-flex; align-items:center; gap:6px; font-weight:900; font-size:15px; color:var(--red); letter-spacing:1px; }
.g-boss-hp-text { font-size:12px; color:var(--sub); font-weight:700; white-space:nowrap; font-feature-settings:'tnum'; }
.g-boss-hp {
  height:12px; background:var(--glass-bg); border-radius:6px; overflow:hidden;
  border:1px solid var(--glass-line);
}
.g-boss-hp-fill {
  height:100%; width:100%;
  background:var(--gold-grad);
  box-shadow:inset 0 1px 0 rgba(255,255,255,.45);
  border-radius:6px; transition:width var(--t-mid) var(--ease);
  position:relative;
}
/* 受击白闪：复用现有 .g-shake 受击信号（.g-boss-head 摇晃时血条闪白 120ms） */
.g-boss-hp-fill::after {
  content:''; position:absolute; inset:0; border-radius:6px;
  background:#fff; opacity:0; pointer-events:none;
}
.g-boss-head.g-shake .g-boss-hp-fill::after { animation:g-hp-flash .12s linear; }
@keyframes g-hp-flash { 0% { opacity:.3; } 100% { opacity:0; } }
.g-combo-line { min-height:18px; margin-top:5px; font-size:13px; font-weight:900; color:var(--orange); }
.g-shake { animation:g-shake .3s; }
@keyframes g-shake {
  0%,100% { transform:translateX(0); }
  20% { transform:translateX(-3.5px); }
  40% { transform:translateX(3px); }
  60% { transform:translateX(-2px); }
  80% { transform:translateX(1.5px); }
}
.g-boss-dead { animation:g-boss-die 1.2s forwards; }
@keyframes g-boss-die { to { transform:rotate(18deg) translateY(24px); opacity:0; } }

@media (prefers-reduced-motion: reduce) {
  .g-boss-head.g-shake .g-boss-hp-fill::after { animation:none; }
}
`;
  document.head.appendChild(Object.assign(document.createElement('style'), { textContent: css }));

  /* 全局 SVG 渐变资源：g-gold-grad（与 --gold-grad 同色），供徽章图标 stroke:url() 引用 */
  document.head.insertAdjacentHTML('beforeend',
    `<svg id='g-svg-defs' width='0' height='0' style='position:absolute' aria-hidden='true' focusable='false'>` +
    `<defs><linearGradient id='g-gold-grad' x1='0' y1='0' x2='1' y2='1'>` +
    `<stop offset='0' stop-color='#f6d98a'/><stop offset='.45' stop-color='#e9c46a'/><stop offset='1' stop-color='#c99a3f'/>` +
    `</linearGradient></defs></svg>`);

  /* ---------- 2. 注入结算面板 + 视觉小说样式 ---------- */
  const css2 = `
/* ===== 通关星级结算 ===== */
.g-settle-mask {
  position:fixed; inset:0; z-index:4000;
  background:rgba(5,10,20,.82);
  display:flex; align-items:center; justify-content:center;
  animation:g-fade-in .25s; padding:20px;
}
.g-settle {
  width:min(480px,94vw);
  background-color:var(--glass-bg);
  /* 四角 L 形金色角标（签名角标 · background 多渐变实现，与 Boss 头条/地图 BOSS 徽章同款） */
  background-image:
    linear-gradient(var(--gold),var(--gold)),linear-gradient(var(--gold),var(--gold)),
    linear-gradient(var(--gold),var(--gold)),linear-gradient(var(--gold),var(--gold)),
    linear-gradient(var(--gold),var(--gold)),linear-gradient(var(--gold),var(--gold)),
    linear-gradient(var(--gold),var(--gold)),linear-gradient(var(--gold),var(--gold));
  background-repeat:no-repeat;
  background-size:16px 2px,2px 16px,16px 2px,2px 16px,16px 2px,2px 16px,16px 2px,2px 16px;
  background-position:12px 12px,12px 12px,calc(100% - 12px) 12px,calc(100% - 12px) 12px,
    12px calc(100% - 12px),12px calc(100% - 12px),calc(100% - 12px) calc(100% - 12px),calc(100% - 12px) calc(100% - 12px);
  border:1px solid var(--glass-line); border-radius:16px;
  padding:28px 26px; text-align:center; position:relative;
  backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px);
  /* 鎏金双线：内嵌 1px glass-line 边框 + 外圈 1px gold 40% */
  box-shadow:0 0 0 1px color-mix(in srgb,var(--gold) 40%,transparent), 0 14px 40px rgba(0,0,0,.45);
  animation:g-pop-in var(--t-mid) var(--ease);
}
.g-settle-tag {
  font-size:11px; font-weight:800; letter-spacing:3px; margin-bottom:10px;
  background:var(--gold-grad);
  -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
}
.g-settle-head { font-size:24px; font-weight:900; letter-spacing:3px; margin-bottom:12px; color:var(--ink); }
.g-perfect {
  display:inline-block; padding:2px 18px;
  border:1px solid var(--gold); border-radius:12px; color:var(--gold);
  background:color-mix(in srgb,var(--gold) 10%,transparent); animation:g-shimmer 2s linear infinite;
}
@keyframes g-shimmer { 0%,100% { filter:brightness(1); } 50% { filter:brightness(1.35); } }
.g-settle-stars { display:flex; justify-content:center; gap:14px; margin:12px 0 6px; }
.g-star { width:46px; height:46px; color:var(--sub); opacity:.35; transition:opacity var(--t-fast) var(--ease); }
.g-star svg { display:block; width:100%; height:100%; }
.g-star svg path { fill:currentColor; stroke:none; }
.g-star.lit {
  opacity:1;
  animation:g-star-pop var(--t-mid) cubic-bezier(.34,1.56,.64,1);
}
.g-star.lit svg path { fill:url(#g-gold-grad); }
@keyframes g-star-pop {
  0% { transform:scale(.3) rotate(-40deg); }
  60% { transform:scale(1.3) rotate(8deg); }
  100% { transform:scale(1); }
}
.g-settle-score { color:var(--ink); font-weight:800; margin-bottom:4px; font-feature-settings:'tnum'; }
.g-xp-float { color:var(--green); font-weight:900; font-size:18px; animation:g-float-up 1.8s ease-out forwards; }
@keyframes g-float-up {
  0% { opacity:0; transform:translateY(10px); }
  25% { opacity:1; }
  100% { opacity:0; transform:translateY(-26px); }
}
.g-settle-drops { margin:10px 0 14px; }
.g-drop-title { font-size:12px; color:var(--sub); margin-bottom:8px; display:flex; align-items:center; justify-content:center; gap:6px; }
.g-drop-list { display:flex; flex-wrap:wrap; gap:8px; justify-content:center; }
.g-drop {
  background:color-mix(in srgb,var(--gold) 8%,transparent); border:1px solid color-mix(in srgb,var(--gold) 30%,transparent);
  border-radius:12px; padding:6px 12px; font-size:13px;
  font-weight:800; color:var(--gold); cursor:pointer;
  transition:transform var(--t-fast) var(--ease);
}
.g-drop:hover { transform:translateY(-2px); }
.g-drop i { display:block; font-style:normal; font-weight:400; font-size:11px; color:var(--sub); }
.g-drop-none { font-size:12px; color:var(--sub); }
.g-settle-btns { display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-top:6px; }
@keyframes g-pop-in { from { transform:scale(.7); opacity:0; } to { transform:scale(1); opacity:1; } }
@keyframes g-fade-in { from { opacity:0; } to { opacity:1; } }

/* ===== 视觉小说演出层 ===== */
.g-vn-mask {
  position:fixed; inset:0; z-index:3000;
  background:radial-gradient(ellipse at center,rgba(13,27,42,.94),rgba(5,10,18,.98));
  display:flex; flex-direction:column; justify-content:flex-end;
  animation:g-fade-in var(--t-mid);
}
/* 电影 letterbox：上下 8% 渐隐黑条 */
.g-vn-mask::before {
  content:''; position:absolute; top:0; left:0; right:0; height:8%;
  background:linear-gradient(to bottom,rgba(0,0,0,.9),transparent);
  pointer-events:none; z-index:1;
}
.g-vn-mask::after {
  content:''; position:absolute; bottom:0; left:0; right:0; height:8%;
  background:linear-gradient(to top,rgba(0,0,0,.9),transparent);
  pointer-events:none; z-index:1;
}
.g-vn-title {
  position:absolute; top:36%; left:0; right:0; text-align:center;
  font-size:26px; font-weight:900; color:var(--gold); letter-spacing:2px;
  opacity:0; transition:opacity var(--t-mid) var(--ease);
  padding:0 20px; z-index:2;
}
.g-vn-title.show { opacity:1; }
.g-vn-prog { position:absolute; top:16px; right:20px; color:var(--sub); font-size:12px; font-feature-settings:'tnum'; z-index:2; }
.g-vn-dialog {
  position:relative; z-index:2;
  max-width:860px; width:92vw; margin:0 auto 18px;
  background:var(--glass-bg);
  border:1px solid var(--glass-line); border-radius:16px;
  padding:16px 20px 20px; min-height:150px;
  box-shadow:0 10px 28px rgba(0,0,0,.38);
  backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px);
  cursor:pointer;
}
.g-vn-name {
  display:inline-block;
  background:var(--gold-grad);
  -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
  font-weight:900; font-size:13px;
  margin-bottom:10px;
}
/* 打字机光标：鎏金闪烁竖线 */
.g-vn-text { font-size:16px; line-height:1.9; color:var(--ink); min-height:60px; }
.g-vn-text::after {
  content:''; display:inline-block; width:2px; height:1em;
  margin-left:3px; vertical-align:-.12em;
  background:var(--gold-grad);
  animation:g-caret 1s infinite;
}
@keyframes g-caret { 0%,50% { opacity:1; } 50.01%,100% { opacity:0; } }
.g-vn-text .word-hl { cursor:pointer; }
.g-vn-btns { position:relative; z-index:2; max-width:860px; width:92vw; margin:0 auto 22px; display:flex; justify-content:space-between; }
.g-vn-ctl {
  display:inline-flex; align-items:center; gap:6px;
  background:var(--card2); border:1px solid var(--line2);
  color:var(--sub); border-radius:12px; padding:7px 16px;
  font-size:13px; font-weight:700;
  transition:all var(--t-fast) var(--ease);
}
.g-vn-ctl:hover { border-color:var(--gold); color:var(--gold); }

@media (prefers-reduced-motion: reduce) {
  .g-vn-text::after { animation:none; }
}
`;
  document.head.appendChild(Object.assign(document.createElement('style'), { textContent: css2 }));

  /* ---------- 3. 注入图鉴 / 成就墙 / Toast 样式 ---------- */
  const css3 = `
/* ===== 词卡图鉴 / 成就墙 公共页 ===== */
.g-page { max-width:1100px; margin:0 auto; padding:30px 20px 80px; }
.g-page-head { text-align:center; margin-bottom:22px; }
.g-page-head h2 {
  font-size:22px; font-weight:900; margin-bottom:12px; letter-spacing:2px;
  background:linear-gradient(90deg,var(--gold),var(--gold2));
  -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
}
.g-page-head p { font-size:13px; color:var(--sub); font-weight:700; }
.g-dex-bar { max-width:520px; margin:0 auto 8px; display:flex; align-items:center; gap:10px; }
.g-dex-track {
  flex:1; height:14px; background:var(--bg2);
  border:1px solid var(--line2); border-radius:8px; overflow:hidden;
}
.g-dex-fill {
  height:100%; width:0%;
  background:linear-gradient(90deg,var(--gold),var(--gold2));
  border-radius:8px; transition:width var(--t-mid) var(--ease);
}
#g-dex-num { font-size:13px; color:var(--gold); font-weight:800; white-space:nowrap; font-feature-settings:'tnum'; }
.g-dex-tabs { display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin:14px 0 18px; }
.g-dex-tab {
  background:var(--card2); border:1px solid var(--line2);
  color:var(--sub); border-radius:12px; padding:6px 16px;
  font-size:13px; font-weight:700;
  transition:all var(--t-fast) var(--ease);
}
.g-dex-tab.active { border-color:var(--gold); color:var(--gold); background:color-mix(in srgb,var(--gold) 10%,transparent); }
.g-dex-tab:hover { border-color:var(--gold); color:var(--gold); }
.g-dex-ch { background:var(--card); border:1px solid var(--line2); border-radius:16px; padding:14px 16px; margin-bottom:14px; }
.g-dex-ch.off { opacity:.6; }
.g-dex-ch-head { font-weight:900; margin-bottom:10px; color:var(--ink); display:flex; justify-content:space-between; gap:10px; flex-wrap:wrap; }
.g-dex-cnt { font-size:12px; color:var(--sub); font-weight:700; }
.g-dex-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(150px,1fr)); gap:8px; }
.g-dex-card { border-radius:12px; padding:8px 10px; font-size:13px; }
.g-dex-card.on {
  background:color-mix(in srgb,var(--gold) 7%,transparent); border:1px solid color-mix(in srgb,var(--gold) 35%,transparent);
  color:var(--gold); font-weight:800; cursor:pointer; transition:all var(--t-fast) var(--ease);
}
.g-dex-card.on:hover { transform:translateY(-2px); box-shadow:0 10px 28px rgba(0,0,0,.38); }
.g-dex-card.on i { display:block; font-style:normal; font-weight:400; font-size:11px; color:var(--sub); margin-top:2px; }
.g-dex-card.off {
  background:var(--card2); border:1px dashed var(--line2);
  color:var(--sub); text-align:center; letter-spacing:3px;
}
.g-ach-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(210px,1fr)); gap:12px; }
.g-ach-card { background:var(--card); border:1px solid var(--line2); border-radius:16px; padding:16px; text-align:center; }
.g-ach-card.on {
  border-color:var(--gold);
  background:linear-gradient(160deg,color-mix(in srgb,var(--gold) 8%,transparent),var(--card));
}
.g-ach-card.off { opacity:.55; filter:grayscale(.4); }
.g-ach-icon { font-size:30px; display:block; margin-bottom:6px; }
.g-ach-card b { color:var(--ink); font-size:14px; }
.g-ach-card.off b { color:var(--sub); }
.g-ach-card p { font-size:12px; color:var(--sub); margin-top:4px; line-height:1.5; }

/* ===== Toast ===== */
.g-toast {
  position:fixed; left:50%; bottom:max(36px, calc(20px + env(safe-area-inset-bottom))); transform:translateX(-50%); z-index:6000;
  background:var(--card);
  border:1px solid var(--gold); color:var(--gold);
  border-radius:12px; padding:10px 22px;
  font-size:13px; font-weight:800; max-width:min(86vw,560px); text-align:center;
  box-shadow:0 10px 28px rgba(0,0,0,.38);
  animation:g-toast-in var(--t-mid) var(--ease);
}
@keyframes g-toast-in {
  from { opacity:0; transform:translateX(-50%) translateY(16px); }
  to { opacity:1; transform:translateX(-50%) translateY(0); }
}

/* 弹层要盖过演出层与结算层（game.js 注入晚于 style.css，同特异性自动胜出，无需 !important） */
#word-popup { z-index:8000; }

@media (max-width:600px) {
  #g-hud { min-width:100%; order:5; }
  .g-node-title { display:none; }
  .g-node-dot { width:46px; height:46px; }
  .g-node.boss .g-node-dot { width:56px; height:56px; }
  .g-node-stars { font-size:11px; letter-spacing:1px; }
  .g-node-crown { font-size:10px; padding:1px 6px; top:-16px; }
  /* 视觉小说：小屏收紧行高与字号 */
  .g-vn-dialog { padding:12px 14px 16px; min-height:110px; }
  .g-vn-text { font-size:15px; min-height:54px; }
  .g-vn-title { font-size:20px; top:28%; }
  .g-vn-btns { margin-bottom:16px; }
  /* 结算面板 */
  .g-settle { padding:20px 14px; }
  .g-settle-head { font-size:20px; }
  .g-star { font-size:36px; }
  .g-drop-list { gap:6px; }
  /* 图鉴/成就页密度 */
  .g-page { padding:22px 12px 60px; }
  .g-dex-grid { grid-template-columns:repeat(auto-fill,minmax(118px,1fr)); }
  .g-ach-grid { grid-template-columns:repeat(auto-fill,minmax(148px,1fr)); }
}

/* 触屏设备触控目标（Apple HIG 44pt 基准） */
@media (pointer: coarse) {
  .g-vn-ctl, .g-dex-tab, .g-drop { min-height:44px; }
  .g-vn-ctl { padding:10px 16px; }
  .g-dex-tab { padding:9px 16px; }
  .g-node-dot { min-width:46px; min-height:46px; }
}
`;
  document.head.appendChild(Object.assign(document.createElement('style'), { textContent: css3 }));

  /* ---------- 3.5 暗亮主题：切换按钮 + 亮色变量组 + 亮色大底覆盖 ---------- */
  const css4 = `
/* ===== 主题切换按钮（已下线）===== */

/* ===== 亮色主题变量组 ===== */
[data-theme="light"] {
  --bg:#f3f6fb; --bg2:#e9eef6; --card:#ffffff; --card2:#f7f9fd;
  --line:rgba(15,35,60,.08); --line2:rgba(15,35,60,.15);
  --ink:#16283c; --sub:#51637a; --faint:#8496ab;
  --gold:#b8860b; --gold2:#d4a017;
  --blue:#2b6cb0; --green:#2f855a; --red:#c0532f;
  --purple:#6b46c1; --orange:#c05621;
}

/* ===== 注入 CSS 里写死深色大底的亮色对应 ===== */
[data-theme="light"] .g-vn-mask {
  background:radial-gradient(ellipse at center,rgba(240,246,252,.94),rgba(219,231,244,.98));
}
[data-theme="light"] .g-settle-mask { background:rgba(90,120,160,.38); }
[data-theme="light"] .g-vn-name { color:#ffffff; }
[data-theme="light"] .g-node-dot { box-shadow:0 8px 20px rgba(30,60,100,.14); }
[data-theme="light"] .g-boss-head { box-shadow:0 8px 20px rgba(30,60,100,.12); }
`;
  document.head.appendChild(Object.assign(document.createElement('style'), { textContent: css4 }));

  /* ---------- 4. 段位与 Game 核心 ---------- */
  const RANKS = [
    { name: '词士', min: 0, icon: ICONS.sword },
    { name: '词师', min: 750, icon: ICONS.shield },
    { name: '词帝', min: 1600, icon: ICONS.crown }
  ];

  const Game = {
    /* --- 存档兼容：老存档读时惰性补新字段 --- */
    ensureState() {
      const s = App.state;
      if (s.xp === undefined) s.xp = 0;
      if (s.xpBonus === undefined) s.xpBonus = 0;
      if (!s.stars) s.stars = {};
      if (!s.drops) s.drops = [];
      if (!s.counters) s.counters = {};
      if (!s.vnDone) s.vnDone = {};
    },

    /* --- XP：Σ 各章最佳分 + 每星 25 + 演出奖励 --- */
    getXp() {
      const s = App.state;
      let xp = s.xpBonus || 0;
      Object.keys(s.scores || {}).forEach(k => { xp += s.scores[k] || 0; });
      Object.keys(s.stars || {}).forEach(k => { xp += (s.stars[k] || 0) * 25; });
      s.xp = xp;
      return xp;
    },
    rankOf(xp) {
      let r = RANKS[0];
      RANKS.forEach(x => { if (xp >= x.min) r = x; });
      return r;
    },
    nextRank(xp) { return RANKS.find(r => xp < r.min) || null; },

    /* --- 功能 1 · HUD 常驻层 --- */
    injectHUD() {
      const host = document.querySelector('.topbar-inner');
      if (!host || document.getElementById('g-hud')) return;
      const div = document.createElement('div');
      div.id = 'g-hud';
      div.innerHTML = `<button class='g-rank-badge' id='g-rank-badge' title='段位规则'>${ICONS.sword}<span>词士</span></button>` +
        `<div class='g-xp-wrap'><div class='g-xp-bar'><div class='g-xp-fill' id='g-xp-fill'></div></div><span class='g-xp-num' id='g-xp-num'></span></div>`;
      host.appendChild(div);
      document.getElementById('g-rank-badge').onclick = () => {
        Game.toast('段位规则：XP = 各章最佳分总和 + 每颗星 25 XP。词士 0-749 → 词师 750-1599 → 词帝 1600+。冲高分、集三星即可晋阶！');
      };
      this.updateHUD();
    },
    updateHUD() {
      const badge = document.getElementById('g-rank-badge');
      const fill = document.getElementById('g-xp-fill');
      const num = document.getElementById('g-xp-num');
      if (!badge || !fill || !num) return;
      const xp = this.getXp();
      const r = this.rankOf(xp);
      const next = this.nextRank(xp);
      badge.innerHTML = `${r.icon}<span>${r.name}</span>`;
      if (next) {
        const pct = Math.min(100, Math.max(0, Math.round((xp - r.min) / (next.min - r.min) * 100)));
        fill.style.width = pct + '%';
        num.textContent = `${xp} XP · 距 ${next.name} 还差 ${next.min - xp}`;
      } else {
        fill.style.width = '100%';
        num.textContent = `${xp} XP · 已至词帝之巅`;
      }
    },

    /* --- 轻提示 --- */
    toast(text) {
      const old = document.querySelector('.g-toast');
      if (old) old.remove();
      const t = document.createElement('div');
      t.className = 'g-toast';
      t.textContent = text;
      document.body.appendChild(t);
      setTimeout(() => t.remove(), 3000);
    },

    /* --- 新视图统一隐藏 --- */
    hideGameViews() {
      ['g-dex-view', 'g-ach-view'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
      });
    },

    /* --- 数字滚动：requestAnimationFrame + easeOutCubic，从 0 滚到 target --- */
    countUp(el, target, dur) {
      if (!el) return;
      /* prefers-reduced-motion：数字直出，不做滚动动画 */
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = Math.round(target); return;
      }
      const t0 = performance.now();
      const D = dur || 600;
      const step = (now) => {
        const p = Math.min(1, (now - t0) / D);
        const e = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * e);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    },

    /* --- 功能 2 · 蜿蜒大地图 --- */
    buildRoad(st) {
      const CH = window.CHAPTERS;
      const nodes = st.chapters.map(id => CH.find(c => c.id === id)).filter(Boolean);
      const n = nodes.length;
      const road = document.createElement('div');
      road.className = 'g-road';
      const H = Math.max(n * 90, 260);
      road.style.height = H + 'px';
      const pts = nodes.map((ch, i) => ({
        xPct: i === n - 1 ? 50 : 50 + (i % 2 ? 14 : -14) + ((i * 37) % 7 - 3),
        yPct: (i + 0.5) / n * 100
      }));
      /* 像素空间渲染：同步建 SVG 骨架（杜绝连线消失），进 DOM 后实测宽度填路径；
         走过的路段亮金 + 辉光，未走段暗金；getTotalLength 异常时自动降级静态渲染 */
      const buildD = (W, Hh, stop) => {
        const P = pts.slice(0, stop).map(p => ({ x: p.xPct / 100 * W, y: p.yPct / 100 * Hh }));
        if (P.length < 2) return '';
        let d = `M ${P[0].x.toFixed(1)} ${P[0].y.toFixed(1)}`;
        for (let i = 1; i < P.length; i++) {
          const p0 = P[i - 1], p1 = P[i];
          const pm = P[i - 2] || p0, pn = P[i + 1] || p1;
          const c1x = p0.x + (pn.x - pm.x) / 6, c1y = p0.y + (pn.y - pm.y) / 6;
          const c2x = p1.x - (pn.x - pm.x) / 6, c2y = p1.y - (pn.y - pm.y) / 6;
          d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`;
        }
        return d;
      };
      road.innerHTML = "<svg class='g-road-svg' width='100%' height='100%'>" +
        "<defs><filter id='g-blur' x='-50%' y='-50%' width='200%' height='200%'><feGaussianBlur stdDeviation='3'/></filter></defs>" +
        "<path class='g-done-glow' fill='none' stroke='var(--gold)' stroke-opacity='.22' stroke-width='5' stroke-linecap='round' filter='url(#g-blur)'/>" +
        "<path class='g-done-line' fill='none' stroke='var(--gold)' stroke-opacity='.55' stroke-width='2.5' stroke-linecap='round'/>" +
        "<path class='g-full-line' fill='none' stroke='var(--gold)' stroke-opacity='.16' stroke-width='2.5' stroke-linecap='round'/></svg>";
      const applyPaths = (animate) => {
        try {
          const W = road.clientWidth || 600;
          const svg = road.querySelector('svg');
          svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
          const k = nodes.findIndex(c => !App.state.completed[c.id]);
          const stop = k < 0 ? n : k + 1;
          const dDone = stop >= 2 ? buildD(W, H, stop) : '';
          const dAll = buildD(W, H, n);
          svg.querySelector('.g-done-glow').setAttribute('d', dDone);
          svg.querySelector('.g-done-line').setAttribute('d', dDone);
          svg.querySelector('.g-full-line').setAttribute('d', dAll);
          if (animate && W > 0) {
            svg.querySelectorAll('path').forEach(p => {
              const L = p.getTotalLength();
              p.style.strokeDasharray = L;
              p.style.strokeDashoffset = L;
            });
            road.getBoundingClientRect();
            svg.querySelectorAll('path').forEach(p => {
              p.style.transition = 'stroke-dashoffset .9s cubic-bezier(.22,.61,.36,1)';
              requestAnimationFrame(() => { p.style.strokeDashoffset = '0'; });
            });
          }
        } catch (e) {
          console.warn('[road] 描线动画降级为静态:', e && e.message);
          try {
            const W = road.clientWidth || 600;
            const svg = road.querySelector('svg');
            svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
            const k = nodes.findIndex(c => !App.state.completed[c.id]);
            const stop = k < 0 ? n : k + 1;
            const dDone = stop >= 2 ? buildD(W, H, stop) : '';
            svg.querySelector('.g-done-glow').setAttribute('d', dDone);
            svg.querySelector('.g-done-line').setAttribute('d', dDone);
            svg.querySelector('.g-full-line').setAttribute('d', buildD(W, H, n));
            svg.querySelectorAll('path').forEach(p => { p.style.strokeDasharray = ''; p.style.strokeDashoffset = ''; p.style.transition = ''; });
          } catch (e2) { /* 静默：骨架本身已可见 */ }
        }
      };
      requestAnimationFrame(() => applyPaths(true));
      if (!window.__gRoadResize) {
        window.__gRoadResize = true;
        let tm = null;
        window.addEventListener('resize', () => {
          clearTimeout(tm);
          tm = setTimeout(() => document.querySelectorAll('.g-road').forEach(r => { if (r.__apply) r.__apply(false); }), 180);
        }, { passive: true });
      }
      road.__apply = () => applyPaths(false);
      nodes.forEach((ch, i) => {
        const idx = CH.findIndex(c => c.id === ch.id);
        const locked = (idx + 1) > App.state.unlocked;
        const done = !!App.state.completed[ch.id];
        const isBoss = i === n - 1;
        const stars = (App.state.stars || {})[ch.id] || 0;
        const node = document.createElement('div');
        node.className = 'g-node' + (done ? ' done' : '') + (locked ? ' locked' : '') +
          (!done && !locked ? ' current' : '') + (isBoss ? ' boss' : '') + ' g-fade-up';
        node.style.left = pts[i].xPct + '%';
        node.style.top = pts[i].yPct + '%';
        node.style.setProperty('--i', i);
        const starSvg = lit => `<svg class='ic' width='12' height='12' viewBox='0 0 24 24' aria-hidden='true' focusable='false'><path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z' fill='${lit ? "url(#g-gold-grad)" : "none"}' stroke='${lit ? "none" : "currentColor"}' stroke-width='2' stroke-linejoin='round'/></svg>`;
        const starStr = done
          ? `<span class='g-node-stars'>${starSvg(true).repeat(stars)}${starSvg(false).repeat(Math.max(0, 3 - stars))}</span>`
          : `<span class='g-node-ch'>CH ${String(ch.id).padStart(2, '0')}</span>`;
        node.innerHTML = `<span class='g-node-dot'>${done ? ICONS.check : locked ? ICONS.lock : ICONS.sword}</span>${starStr}` +
          `${isBoss ? `<span class='g-node-crown'>${ICONS.crown} BOSS</span>` : ''}` +
          `<span class='g-node-title'>${locked ? '？？?' : ch.title}</span>`;
        node.title = locked ? '通关上一章解锁' : ch.title;
        if (!locked) { node.onclick = () => App.openChapter(ch.id); App.mkFocus(node); }
        else node.setAttribute('aria-disabled', 'true');
        road.appendChild(node);
      });
      return road;
    },

    /* --- 功能 6/7 · 地图入口按钮（已按用户要求下架：图鉴/成就墙入口不再显示） --- */
    injectMapEntries() {
      ['g-dex-entry', 'g-ach-entry'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    },
    refreshMapEntries() {
      const CH = window.CHAPTERS;
      if (!CH) return;
      const total = CH.reduce((n, c) => n + (c.words || []).length, 0);
      const got = CH.reduce((n, c) => n + (App.state.completed[c.id] ? (c.words || []).length : 0), 0);
      const d = document.getElementById('g-dex-entry');
      if (d) d.textContent = `词卡图鉴 · 已收集 ${got}/${total}`;
      const list = this.getAchs();
      const unlocked = list.filter(a => this.achStat(a.cond.type) >= (a.cond.value || 1)).length;
      const a = document.getElementById('g-ach-entry');
      if (a) a.textContent = `成就墙 · ${unlocked}/${list.length}`;
    },

    /* --- 功能 6 · 词卡图鉴 --- */
    _dexTab: null,
    injectViews() {
      const app = document.getElementById('app');
      const anchor = document.getElementById('word-popup');
      if (!app || document.getElementById('g-dex-view')) return;
      const dex = document.createElement('main');
      dex.id = 'g-dex-view';
      dex.className = 'g-page hidden';
      dex.innerHTML = `<div class='g-page-head'><h2>词卡图鉴</h2>` +
        `<div class='g-dex-bar'><div class='g-dex-track'><div class='g-dex-fill' id='g-dex-fill'></div></div><span id='g-dex-num'></span></div>` +
        `<div class='g-dex-tabs' id='g-dex-tabs'></div></div>` +
        `<div id='g-dex-body'></div>` +
        `<div class='chapter-nav'><button class='nav-btn' onclick='App.goHome()'>${ICONS.map} 回地图</button></div>`;
      const ach = document.createElement('main');
      ach.id = 'g-ach-view';
      ach.className = 'g-page hidden';
      ach.innerHTML = `<div class='g-page-head'><h2>成就墙</h2><p id='g-ach-num'></p></div>` +
        `<div id='g-ach-grid' class='g-ach-grid'></div>` +
        `<div class='chapter-nav'><button class='nav-btn' onclick='App.goHome()'>${ICONS.map} 回地图</button></div>`;
      app.insertBefore(dex, anchor);
      app.insertBefore(ach, anchor);
    },
    goDex() {
      this.ensureState();
      this.hideGameViews();
      const v = document.getElementById('g-dex-view');
      if (v) v.classList.remove('hidden');
      window.scrollTo(0, 0);
      this.renderDex();
    },
    renderDex() {
      const CH = window.CHAPTERS;
      const stages = window.STAGES || [];
      if (!CH || !stages.length) return;
      if (!this._dexTab) this._dexTab = stages[0].id;
      const total = CH.reduce((n, c) => n + (c.words || []).length, 0);
      const got = CH.reduce((n, c) => n + (App.state.completed[c.id] ? (c.words || []).length : 0), 0);
      const fill = document.getElementById('g-dex-fill');
      const num = document.getElementById('g-dex-num');
      if (fill) fill.style.width = (total ? Math.round(got / total * 100) : 0) + '%';
      if (num) num.textContent = `已收集 ${got} / ${total}`;
      const tabs = document.getElementById('g-dex-tabs');
      if (tabs) {
        tabs.innerHTML = stages.map(st =>
          `<button class='g-dex-tab ${st.id === this._dexTab ? 'active' : ''}' data-id='${st.id}'>${st.emoji || ''} ${st.name.split('（')[0]}</button>`
        ).join('');
        tabs.querySelectorAll('.g-dex-tab').forEach(b => {
          b.onclick = () => { this._dexTab = b.dataset.id; this.renderDex(); };
        });
      }
      const st = stages.find(s => s.id === this._dexTab);
      const body = document.getElementById('g-dex-body');
      if (!body) return;
      let html = '';
      (st ? st.chapters : []).forEach(id => {
        const ch = CH.find(c => c.id === id);
        if (!ch) return;
        const done = !!App.state.completed[id];
        const cnt = done
          ? `<span class='g-dex-cnt'>${(ch.words || []).length} 词已入册</span>`
          : `<span class='g-dex-cnt'>通关后解锁</span>`;
        html += `<div class='g-dex-ch ${done ? 'on' : 'off'}' data-ch='${ch.id}'>` +
          `<div class='g-dex-ch-head'><span>CH ${String(ch.id).padStart(2, '0')} · ${ch.title}</span>${cnt}</div>` +
          `<div class='g-dex-grid'>`;
        (ch.words || []).forEach(item => {
          html += done
            ? `<span class='g-dex-card on word-hl' data-w='${item.w}'>${item.w}<i>${item.cn}</i></span>`
            : `<span class='g-dex-card off'>???</span>`;
        });
        html += `</div></div>`;
      });
      body.innerHTML = html;
      body.querySelectorAll('.g-dex-card.on').forEach(el => {
        el.onclick = (e) => {
          const box = el.closest('.g-dex-ch');
          const ch = CH.find(c => c.id === +box.dataset.ch);
          App.current = ch;
          App.showPopup(el.dataset.w, e);
        };
      });
    },

    /* --- 功能 7 · 成就墙视图 --- */
    goAch() {
      this.ensureState();
      this.hideGameViews();
      const v = document.getElementById('g-ach-view');
      if (v) v.classList.remove('hidden');
      window.scrollTo(0, 0);
      this.renderAch();
    },

    /* --- 功能 3 · Boss 命名与血条 --- */
    _bossTotal: 0,
    bossName(ch) {
      if (ch.id === 30) return '词噬魔';
      if (ch.id === 20) return '考官巨龙';
      if ((ch.title || '').indexOf('雾') >= 0) return '遗忘之雾';
      return '词魅 · ' + ch.title;
    },
    updateBoss(hp) {
      const fill = document.getElementById('g-boss-hp-fill');
      const txt = document.getElementById('g-boss-hp-text');
      if (!fill || !txt) return;
      hp = Math.max(0, hp);
      const t = this._bossTotal || 1;
      fill.style.width = Math.min(100, hp / t * 100) + '%';
      const disp = hp % 1 ? hp.toFixed(1) : String(hp);
      txt.textContent = `HP ${disp} / ${t}`;
      const cl = document.getElementById('g-combo-line');
      if (cl) cl.innerHTML = App.fx.combo >= 3 ? `${ICONS.bolt} 连击 ×${App.fx.combo}` : '';
    },

    /* --- 功能 4 · 掉落与结算 --- */
    pickDrops(ch) {
      const pool = [...(ch.words || [])];
      const out = [];
      const cnt = 2 + Math.floor(Math.random() * 2);
      while (out.length < cnt && pool.length) out.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
      this.ensureState();
      out.forEach(d => App.state.drops.push({ ch: ch.id, w: d.w }));
      return out;
    },
    showSettle(ch, score, right, total, prevScore, prevStars, newStars, linkBtn) {
      const old = document.getElementById('g-settle-mask');
      if (old) old.remove();
      const delta = Math.max(0, score - prevScore) + 25 * (newStars - prevStars);
      const drops = this.pickDrops(ch);
      const mask = document.createElement('div');
      mask.id = 'g-settle-mask';
      mask.className = 'g-settle-mask';
      mask.innerHTML = `<div class='g-settle'>` +
        `<div class='g-settle-tag'>CHAPTER CLEAR</div>` +
        `<div class='g-settle-head'>${score === 100 ? `<span class='g-perfect'>PERFECT</span>` : `${ICONS.sword} BOSS 击破`}</div>` +
        `<div class='g-settle-stars'><span class='g-star'>${ICONS.star}</span><span class='g-star'>${ICONS.star}</span><span class='g-star'>${ICONS.star}</span></div>` +
        `<div class='g-settle-score'>得分 <span id='g-settle-score-num'>0</span> 分 · 答对 ${right}/${total}</div>` +
        `<div class='g-xp-float'>+<span id='g-settle-xp-num'>0</span> XP</div>` +
        `<div class='g-settle-drops'><div class='g-drop-title'>${ICONS.gift} 掉落词卡 · 收入囊中</div><div class='g-drop-list'>` +
        (drops.map(d => `<span class='g-drop word-hl' data-w='${d.w}'>${d.w}<i>${d.cn}</i></span>`).join('') ||
          `<span class='g-drop-none'>本次没有掉落</span>`) +
        `</div></div>` +
        `<div class='g-settle-btns' id='g-settle-btns'><button class='nav-btn next' id='g-settle-next'>下一章 →</button>` +
        `<button class='nav-btn' id='g-settle-home'>${ICONS.map} 回地图</button></div></div>`;
      document.body.appendChild(mask);
      App.lockScroll(true);
      this.countUp(document.getElementById('g-settle-score-num'), score, 600);
      this.countUp(document.getElementById('g-settle-xp-num'), delta, 600);
      const starEls = mask.querySelectorAll('.g-star');
      for (let i = 0; i < newStars; i++) {
        setTimeout(() => { if (starEls[i]) starEls[i].classList.add('lit'); }, 200 + i * 260);
      }
      mask.querySelectorAll('.g-drop').forEach(el => {
        el.onclick = (e) => {
          App.current = window.CHAPTERS.find(c => c.id === ch.id);
          App.showPopup(el.dataset.w, e);
        };
      });
      document.getElementById('g-settle-next').onclick = () => { mask.remove(); App.lockScroll(false); App.nextChapter(); };
      document.getElementById('g-settle-home').onclick = () => { mask.remove(); App.lockScroll(false); App.goHome(); };
      if (linkBtn) {
        const row = document.getElementById('g-settle-btns');
        row.insertBefore(linkBtn, document.getElementById('g-settle-next'));
      }
    },

    /* --- 功能 5 · 视觉小说演出层 --- */
    _vnState: null,
    _vnAuto: false,
    _vnAutoT: null,
    _vnKeyHandler: null,
    injectVNButton() {
      const box = document.querySelector('#mod-story .story-box');
      if (!box) return;
      const trans = box.querySelector('.story-trans');
      if (!trans || document.getElementById('g-vn-btn')) return;
      const btn = document.createElement('button');
      btn.id = 'g-vn-btn';
      btn.className = 'ghost-btn';
      btn.innerHTML = `${ICONS.clapper} 演出模式`;
      btn.onclick = () => Game.playVN(App.current);
      trans.insertBefore(btn, trans.firstChild);
    },
    splitSentences(raw) {
      const flat = String(raw).replace(/\s+/g, ' ').trim();
      const parts = flat.match(/[^.!?。！？]+[.!?。！？]+|[^.!?。！？]+$/g) || [flat];
      return parts.map(s => s.trim()).filter(s => s.length > 1);
    },
    detectName(text) {
      const MAP = [
        [/A-Luo|阿洛/, '阿洛'],
        [/Zhou Qing|周擎/, '周擎'],
        [/Su Nian|苏念/, '苏念'],
        [/Grandpa Sha|the old man|扫爷/, '扫爷'],
        [/the Dean|教务长/, '教务长']
      ];
      for (const [re, name] of MAP) { if (re.test(text)) return name; }
      return '旁白';
    },
    buildSegs(sentence) {
      const segs = [];
      const re = /\[\[([^\]]+)\]\]/g;
      let last = 0, m;
      while ((m = re.exec(sentence))) {
        if (m.index > last) segs.push({ t: sentence.slice(last, m.index) });
        segs.push({ w: m[1] });
        last = m.index + m[0].length;
      }
      if (last < sentence.length) segs.push({ t: sentence.slice(last) });
      return segs;
    },
    playVN(ch) {
      if (!ch || !ch.story || !ch.story.text) { this.toast('本章没有可演出的故事'); return; }
      this.vnClose();
      const sentences = this.splitSentences(ch.story.text);
      const mask = document.createElement('div');
      mask.id = 'g-vn-mask';
      mask.className = 'g-vn-mask';
      mask.innerHTML = `<div class='g-vn-title' id='g-vn-title'>《${ch.story.title}》</div>` +
        `<div class='g-vn-prog' id='g-vn-prog'></div>` +
        `<div class='g-vn-dialog' id='g-vn-dialog'><div class='g-vn-name' id='g-vn-name'>旁白</div>` +
        `<div class='g-vn-text' id='g-vn-text'></div></div>` +
        `<div class='g-vn-btns'><button class='g-vn-ctl' id='g-vn-skip'>${ICONS.ff} 跳过</button>` +
        `<button class='g-vn-ctl' id='g-vn-auto'>${ICONS.play} 自动播放</button></div>`;
      document.body.appendChild(mask);
      App.lockScroll(true);
      mask.addEventListener('click', (e) => {
        if (e.target.closest('.g-vn-ctl') || e.target.closest('.word-hl') || e.target.closest('.word-tap')) return;
        this.vnNext();
      });
      document.getElementById('g-vn-skip').onclick = () => this.vnClose();
      document.getElementById('g-vn-auto').onclick = (e) => {
        this._vnAuto = !this._vnAuto;
        e.currentTarget.innerHTML = this._vnAuto ? `${ICONS.pause} 自动中` : `${ICONS.play} 自动播放`;
        if (this._vnAuto) this.vnScheduleAuto();
      };
      this._vnAuto = false;
      this._vnKeyHandler = (e) => {
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); this.vnNext(); }
        else if (e.key === 'Escape') this.vnClose();
      };
      document.addEventListener('keydown', this._vnKeyHandler);
      this._vnState = { ch, sentences, idx: -1, done: false, finished: false, segs: [], si: 0, ci: 0, timer: null };
      const titleEl = document.getElementById('g-vn-title');
      titleEl.classList.add('show');
      setTimeout(() => {
        titleEl.classList.remove('show');
        this.vnPlayNext();
      }, 1600);
    },
    vnPlayNext() {
      const v = this._vnState;
      if (!v || v.finished) return;
      v.idx++;
      if (v.idx >= v.sentences.length) { this.vnEnd(); return; }
      const nameEl = document.getElementById('g-vn-name');
      const textEl = document.getElementById('g-vn-text');
      const s = v.sentences[v.idx];
      if (nameEl) nameEl.textContent = this.detectName(s);
      if (textEl) textEl.innerHTML = '';
      v.segs = this.buildSegs(s);
      v.si = 0; v.ci = 0; v.done = false;
      clearInterval(v.timer);
      v.timer = setInterval(() => this.vnTick(), 25);
      const pg = document.getElementById('g-vn-prog');
      if (pg) pg.textContent = `${v.idx + 1} / ${v.sentences.length}`;
    },
    vnTick() {
      const v = this._vnState;
      if (!v || v.done) {
        if (v && v.done && this._vnAuto) this.vnScheduleAuto();
        return;
      }
      const textEl = document.getElementById('g-vn-text');
      const seg = v.segs[v.si];
      if (!seg) {
        v.done = true;
        clearInterval(v.timer);
        v.timer = null;
        if (this._vnAuto) this.vnScheduleAuto();
        return;
      }
      if (seg.w) {
        const span = document.createElement('span');
        span.className = 'word-hl';
        span.dataset.w = seg.w;
        span.textContent = seg.w;
        span.onclick = (e) => App.showPopup(seg.w, e);
        textEl.appendChild(span);
        v.si++; v.ci = 0;
      } else if (v.ci < seg.t.length) {
        textEl.appendChild(document.createTextNode(seg.t.charAt(v.ci)));
        v.ci++;
      } else {
        v.si++; v.ci = 0;
      }
    },
    vnFinishSentence() {
      const v = this._vnState;
      if (!v || v.done) return;
      clearInterval(v.timer);
      v.timer = null;
      const textEl = document.getElementById('g-vn-text');
      textEl.innerHTML = '';
      v.segs.forEach(seg => {
        if (seg.w) {
          const span = document.createElement('span');
          span.className = 'word-hl';
          span.dataset.w = seg.w;
          span.textContent = seg.w;
          span.onclick = (e) => App.showPopup(seg.w, e);
          textEl.appendChild(span);
        } else {
          textEl.appendChild(document.createTextNode(seg.t));
        }
      });
      v.si = v.segs.length;
      v.done = true;
      if (this._vnAuto) this.vnScheduleAuto();
    },
    vnNext() {
      const v = this._vnState;
      if (!v || v.finished) return;
      if (!v.done) { this.vnFinishSentence(); return; }
      this.vnPlayNext();
    },
    vnScheduleAuto() {
      const v = this._vnState;
      if (!v || v.finished || !v.done) return;
      clearTimeout(this._vnAutoT);
      this._vnAutoT = setTimeout(() => { if (this._vnAuto) this.vnPlayNext(); }, 1000);
    },
    vnEnd() {
      const v = this._vnState;
      if (!v) return;
      v.finished = true;
      const ch = v.ch;
      let bonus = '';
      this.ensureState();
      if (!App.state.vnDone[ch.id]) {
        App.state.vnDone[ch.id] = true;
        App.state.xpBonus = (App.state.xpBonus || 0) + 10;
        App.save();
        this.updateHUD();
        bonus = ' · 首演奖励 +10 XP';
      }
      const nameEl = document.getElementById('g-vn-name');
      const textEl = document.getElementById('g-vn-text');
      if (nameEl) nameEl.textContent = '演出';
      if (textEl) {
        textEl.innerHTML = `—— 本章演出完${bonus} ——<br><button class='ghost-btn' id='g-vn-back'>↩ 返回阅读</button>`;
        const back = document.getElementById('g-vn-back');
        if (back) back.onclick = () => this.vnClose();
      }
    },
    vnClose() {
      clearTimeout(this._vnAutoT);
      const v = this._vnState;
      if (v && v.timer) clearInterval(v.timer);
      this._vnState = null;
      if (this._vnKeyHandler) {
        document.removeEventListener('keydown', this._vnKeyHandler);
        this._vnKeyHandler = null;
      }
      const m = document.getElementById('g-vn-mask');
      if (m) m.remove();
      App.lockScroll(false);
    },

    /* --- 功能 7 · 成就数据与评估 --- */
    _known: null,
    getAchs() {
      if (window.ACHIEVEMENTS && window.ACHIEVEMENTS.list && window.ACHIEVEMENTS.list.length) {
        return window.ACHIEVEMENTS.list;
      }
      /* 兜底成就（并行 achievements.js 未就绪时保证页面不空） */
      return [
        { id: 'first', icon: '🌱', name: '初出茅庐', desc: '通关第 1 章', cond: { type: 'chapters', value: 1 } },
        { id: 'ch5', icon: '🔥', name: '小有所成', desc: '累计通关 5 章', cond: { type: 'chapters', value: 5 } },
        { id: 'ch10', icon: '🌟', name: '卷一毕业', desc: '累计通关 10 章', cond: { type: 'chapters', value: 10 } },
        { id: 'ch20', icon: '🏔️', name: '秘境征服者', desc: '累计通关 20 章', cond: { type: 'chapters', value: 20 } },
        { id: 'full30', icon: '👑', name: '词帝加冕', desc: '通关全部 30 章', cond: { type: 'chapters', value: 30 } },
        { id: 'perfect1', icon: '💯', name: '一次全对', desc: '测验拿到 1 次 100 分', cond: { type: 'score100', value: 1 } },
        { id: 'perfect5', icon: '🎯', name: '满分收割机', desc: '测验拿到 5 次 100 分', cond: { type: 'score100', value: 5 } },
        { id: 'star3', icon: '⭐', name: '摘星者', desc: '集齐 1 个三星章节', cond: { type: 'stars3', value: 1 } },
        { id: 'star9', icon: '🌠', name: '三星满贯', desc: '集齐 9 个三星章节', cond: { type: 'stars3', value: 9 } },
        { id: 'focus', icon: '⚡', name: '速刷骑士', desc: '开启 1 次速刷模式', cond: { type: 'focus', value: 1 } },
        ,
        { id: 'syn', icon: '🔁', name: '弹药军需官', desc: '打开过同义替换库', cond: { type: 'syn', value: 1 } },
        { id: 'combo5', icon: '🔥', name: '五连燃烧', desc: '单章测验连对 5 题', cond: { type: 'combo5', value: 1 } }
      ];
    },
    achStat(type) {
      const s = App.state;
      if (type === 'chapters') return Object.keys(s.completed || {}).length;
      if (type === 'score100') return Object.values(s.scores || {}).filter(v => v >= 100).length;
      if (type === 'stars3') return Object.values(s.stars || {}).filter(v => v >= 3).length;
      return (s.counters || {})[type] || 0;
    },
    evaluate() {
      this.ensureState();
      const list = this.getAchs();
      if (!this._known) {
        this._known = new Set(list.filter(a => this.achStat(a.cond.type) >= (a.cond.value || 1)).map(a => a.id));
        return;
      }
      list.forEach(a => {
        const ok = this.achStat(a.cond.type) >= (a.cond.value || 1);
        if (ok && !this._known.has(a.id)) {
          this._known.add(a.id);
          this.toast(`成就解锁：${a.name} —— ${a.desc}`);
        }
      });
    },
    renderAch() {
      const list = this.getAchs();
      const grid = document.getElementById('g-ach-grid');
      const num = document.getElementById('g-ach-num');
      if (!grid) return;
      const unlocked = list.filter(a => this.achStat(a.cond.type) >= (a.cond.value || 1)).length;
      if (num) num.textContent = `已解锁 ${unlocked} / ${list.length}`;
      grid.innerHTML = list.map(a => {
        const ok = this.achStat(a.cond.type) >= (a.cond.value || 1);
        return `<div class='g-ach-card ${ok ? 'on' : 'off'}'>` +
          `<span class='g-ach-icon'>${ok ? a.icon : '🔒'}</span><b>${a.name}</b><p>${a.desc}</p></div>`;
      }).join('');
    },

    /* --- 方法包装：全部扩展入口 --- */
    wrapAll() {
      const G = this;

      /* 功能 2 · renderMap 整替换：蜿蜒路径版（保留分组/解锁/文案/进度） */
      App.renderMap = function () {
        const grid = document.getElementById('chapter-grid');
        grid.innerHTML = '';
        const stages = window.STAGES;
        if (!stages) { App.renderFlatMap(grid); return; }
        stages.forEach(st => {
          const doneInStage = st.chapters.filter(id => App.state.completed[id]).length;
          const wrap = document.createElement('div');
          wrap.className = 'stage-block';
          const head = document.createElement('div');
          head.className = 'stage-head ' + (st.cls || '');
          head.innerHTML = `` +
            `<div class='stage-info'><h3 style='color:${st.color}'>${st.name}</h3><p>${st.desc}</p></div>` +
            `<span class='stage-pct' style='color:${st.color}'>${doneInStage}/${st.chapters.length}</span>`;
          wrap.appendChild(head);
          wrap.appendChild(G.buildRoad(st));
          grid.appendChild(wrap);
        });
        App.updateProgressBar();
        G.refreshMapEntries();
      };

      /* 功能 3 · renderQuiz 整替换：原逻辑 + Boss 战斗皮 */
      App.renderQuiz = function (ch) {
        const wrap = document.getElementById('quiz-list');
        const result = document.getElementById('quiz-result');
        wrap.innerHTML = '';
        result.classList.add('hidden');
        let answered = 0, right = 0;
        const total = (ch.quiz || []).length;
        const mod = document.getElementById('mod-quiz');
        const oldBoss = document.getElementById('g-boss-head');
        if (oldBoss) oldBoss.remove();
        const boss = document.createElement('div');
        boss.id = 'g-boss-head';
        boss.className = 'g-boss-head';
        boss.innerHTML = `<div class='g-boss-top'><span class='g-boss-name'>${ICONS.skull} ${G.bossName(ch)}</span>` +
          `<span class='g-boss-hp-text' id='g-boss-hp-text'></span></div>` +
          `<div class='g-boss-hp'><div class='g-boss-hp-fill' id='g-boss-hp-fill'></div></div>` +
          `<div class='g-combo-line' id='g-combo-line'></div>`;
        mod.insertBefore(boss, wrap);
        G._bossTotal = total;
        G.updateBoss(total);
        (ch.quiz || []).forEach((q, qi) => {
          const div = document.createElement('div');
          div.className = 'quiz-item';
          div.innerHTML = `<div class='quiz-q'>${qi + 1}. ${q.q}</div>`;
          const opts = document.createElement('div');
          opts.className = 'quiz-opts';
          const order = App.shuffledIdx(q.options.length);
          order.forEach((orig, oi) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-opt';
            btn.textContent = String.fromCharCode(65 + oi) + '. ' + q.options[orig];
            btn.onclick = (e) => {
              if (div.dataset.done) return;
              div.dataset.done = '1';
              answered++;
              if (orig === q.answer) {
                right++;
                btn.classList.add('correct');
                App.fx.stars(btn);
                App.fx.comboUp(btn);
              } else {
                btn.classList.add('wrong');
                App.fx.nudgeAt(e.clientX, e.clientY);
                opts.children[order.indexOf(q.answer)].classList.add('correct');
                boss.classList.add('g-shake');
                setTimeout(() => boss.classList.remove('g-shake'), 500);
              }
              /* Boss 血条：满血 = 题目数，答对 -1，答错回血 0.5 */
              G.updateBoss(total - right + (answered - right) * 0.5);
              const ex = document.createElement('div');
              ex.className = 'quiz-explain';
              ex.textContent = q.explain;
              div.appendChild(ex);
              if (answered === total) App.finishQuiz(ch, right);
            };
            opts.appendChild(btn);
          });
          div.appendChild(opts);
          wrap.appendChild(div);
        });
      };

      /* 功能 3/4 · finishQuiz 整替换：原判定 + 结算演出 */
      App.finishQuiz = function (ch, right) {
        const total = ch.quiz.length;
        const score = Math.round((right / total) * 100);
        const result = document.getElementById('quiz-result');
        result.classList.remove('hidden', 'pass', 'fail');
        G.ensureState();
        const prevScore = App.state.scores[ch.id] ?? 0;
        const prevStars = App.state.stars[ch.id] || 0;
        App.state.scores[ch.id] = Math.max(prevScore, score);
        if (score >= 80) {
          App.state.completed[ch.id] = true;
          App.state.unlocked = Math.max(App.state.unlocked, ch.id + 1);
          result.classList.add('pass');
          result.textContent = `通关！得分 ${score} 分（答对 ${right}/${total}）。下一章已解锁！`;
          App.fx.confetti();
          App.fx.praiseAt(window.innerWidth / 2, 160);
          App.renderTrainingLink(ch);
          const linkBtn = result.querySelector('.training-link-btn');
          const newStars = Math.max(prevStars, score >= 90 ? 3 : 2);
          App.state.stars[ch.id] = newStars;
          const bossHead = document.getElementById('g-boss-head');
          if (bossHead && score === 100) {
            bossHead.classList.add('g-boss-dead');
            setTimeout(() => bossHead.remove(), 1300);
          }
          G.showSettle(ch, score, right, total, prevScore, prevStars, newStars, linkBtn);
        } else {
          result.classList.add('fail');
          result.innerHTML = `得分 ${score} 分（答对 ${right}/${total}）。80 分通关——回炉再读一遍故事，你会发现好多词已经认识了！` +
            `<br><button class='ghost-btn retry-btn' onclick='App.openChapter(${ch.id})'>↺ 再测一次</button>`;
        }
        App.save();
        App.updateProgressBar();
        G.updateHUD();
        G.evaluate();
      };

      const _goSyn = App.goSynonyms.bind(App);
      App.goSynonyms = function () {
        _goSyn();
        G.ensureState();
        App.state.counters.syn = (App.state.counters.syn || 0) + 1;
        G.evaluate();
        G.updateHUD();
        G.hideGameViews();
      };

      /* 隐藏型 wrap：goHome / goTraining / goPhrasal / goScore */
      ['goHome', 'goTraining', 'goPhrasal', 'goScore'].forEach(k => {
        const orig = App[k].bind(App);
        App[k] = function (...args) {
          const r = orig(...args);
          G.hideGameViews();
          G.updateHUD();
          return r;
        };
      });

      /* openChapter：追加隐藏新视图 + 注入演出按钮 */
      const _open = App.openChapter.bind(App);
      App.openChapter = function (id) {
        _open(id);
        G.hideGameViews();
        G.injectVNButton();
      };

      /* toggleFocus：速刷计数 */
      const _focus = App.toggleFocus.bind(App);
      App.toggleFocus = function () {
        const before = document.body.classList.contains('focus-mode');
        _focus();
        const after = document.body.classList.contains('focus-mode');
        if (!before && after) {
          G.ensureState();
          App.state.counters.focus = (App.state.counters.focus || 0) + 1;
          G.evaluate();
        }
      };

      /* fx.comboUp：单章连击 ≥5 记 combo5 */
      const _comboUp = App.fx.comboUp.bind(App.fx);
      App.fx.comboUp = function (el) {
        _comboUp(el);
        if (App.fx.combo >= 5) {
          G.ensureState();
          if (!App.state.counters.combo5) {
            App.state.counters.combo5 = 1;
            G.evaluate();
          }
        }
      };

      /* save：存档前补齐新字段 */
      const _save = App.save.bind(App);
      App.save = function () {
        G.ensureState();
        _save();
      };

      /* 新视图导航 */
      App.goDex = () => G.goDex();
      App.goAch = () => G.goAch();
    },

    /* --- 启动 --- */
    init() {
      App.load();
      this.ensureState();
      this.evaluate();          /* 静默建立成就基线，不弹历史 toast */
      this.injectViews();
      this.injectMapEntries();
      this.wrapAll();
      this.injectHUD();
      App.goHome();             /* app.js 已跑过一次旧渲染，包装后重渲染 */
    }
  };

  Game.init();
  /* 暴露到全局：文件尾部的复习闭环扩展块需要访问 Game 与 ICONS */
  window.Game = Game;
  window.ICONS = ICONS;
})();

/* --- 速刷模式恢复入口：防止「故事不见了」找不到开关 --- */
(function () {
  const st = document.createElement('style');
  st.textContent = '#g-focus-pill{position:fixed;left:14px;bottom:14px;z-index:9000;display:none;' +
    'background:color-mix(in srgb,var(--gold) 10%,transparent);border:1px solid color-mix(in srgb,var(--gold) 40%,transparent);color:var(--gold);' +
    'border-radius:12px;padding:8px 14px;font-size:12px;font-weight:700;cursor:pointer;' +
    'box-shadow:0 10px 28px rgba(0,0,0,.38)}' +
    '#g-focus-pill:hover{background:color-mix(in srgb,var(--gold) 18%,transparent)}' +
    'body.focus-mode #g-focus-pill{display:block}';
  document.head.appendChild(st);
  const pill = document.createElement('button');
  pill.id = 'g-focus-pill';
  pill.textContent = '故事已收起 · 速刷模式中 · 点击恢复';
  pill.onclick = () => { if (window.App && App.toggleFocus) App.toggleFocus(); };
  document.body.appendChild(pill);
})();

/* ===== 复习闭环 · 错题回炉 + TTS ===== */
(function () {
  const st = document.createElement('style');
  st.textContent = `
  .g-review-view { max-width: 860px; margin: 0 auto; }
  .rv-item { background: var(--card); border: 1px solid var(--line2); border-radius: var(--r-l); padding: 18px 20px; margin-bottom: 14px; }
  .rv-q { font-size: 15px; font-weight: 700; color: var(--ink); line-height: 1.6; margin-bottom: 12px; }
  .rv-meta { font-size: 11px; color: var(--faint); margin-bottom: 8px; letter-spacing: 1px; }
  .rv-exp { margin-top: 10px; font-size: 12.5px; color: var(--sub); line-height: 1.6; border-left: 2px solid var(--gold); padding-left: 10px; }
  .pv-speak { background: none; border: 1px solid var(--line2); border-radius: 8px; color: var(--sub); cursor: pointer; padding: 2px 6px; margin-left: 8px; vertical-align: middle; transition: color var(--t-fast) var(--ease), border-color var(--t-fast) var(--ease); }
  .pv-speak:hover { color: var(--gold); border-color: var(--gold); }
  .dict-ansline { display: flex; align-items: center; gap: 10px; }
  .entry-badge { display: inline-block; min-width: 20px; text-align: center; background: var(--gold); color: #0b1522; border-radius: 999px; font-size: 11px; font-weight: 800; padding: 1px 7px; margin: 0 2px; font-feature-settings: 'tnum'; }
  [data-theme='light'] .entry-badge { color: #fff; }
  `;
  document.head.appendChild(st);
})();

/* --- 数据层：错题池 + 间隔调度 --- */
Game.INTERVALS = [1, 3, 7, 14];
Game.today = () => new Date().toISOString().slice(0, 10);
Game.collectWrong = function (rec) {
  if (!rec || !rec.key) return;
  this.ensureState();
  const pool = (App.state.wrongPool = App.state.wrongPool || []);
  const ex = pool.find(r => r.key === rec.key);
  if (ex) { ex.streak = 0; ex.due = Date.now() + 864e5; ex.last = Date.now(); }
  else pool.push(Object.assign({ streak: 0, last: Date.now(), due: Date.now() + 864e5 }, rec));
  if (pool.length > 300) pool.splice(0, pool.length - 300);
  App.save();
  this.updateEntryCounts();
};
Game.dueList = function () {
  this.ensureState();
  const now = Date.now();
  return (App.state.wrongPool || []).filter(r => now >= (r.due || 0));
};
Game.graduate = function (key) {
  const pool = (App.state.wrongPool = App.state.wrongPool || []);
  const i = pool.findIndex(r => r.key === key);
  if (i >= 0) pool.splice(i, 1);
  App.save();
};
Game.schedule = function (key, ok) {
  const pool = (App.state.wrongPool = App.state.wrongPool || []);
  const r = pool.find(x => x.key === key);
  if (!r) return;
  if (ok) {
    r.streak = (r.streak || 0) + 1;
    if (r.streak >= 2) { pool.splice(pool.indexOf(r), 1); }
    else r.due = Date.now() + Game.INTERVALS[Math.min(r.streak, 3)] * 864e5;
  } else { r.streak = 0; r.due = Date.now() + 864e5; }
  r.last = Date.now();
  App.save();
};

/* --- 错题回炉 --- */
Game.reviewSession = null;
Game.openReview = function () {
  this.ensureState();
  this.hideGameViews();
  const v = document.getElementById('g-review-view');
  if (v) v.classList.remove('hidden');
  window.scrollTo(0, 0);
  const due = this.dueList().slice(0, 10);
  this.reviewSession = { items: due, idx: 0 };
  if (!due.length) { this.renderReviewEmpty(); return; }
  this.renderReview();
};
Game.renderReviewEmpty = function () {
  const b = document.getElementById('g-review-body');
  if (b) b.innerHTML = `<div class='rv-item' style='text-align:center'>当前没有到期的错题——去刷章测验和特训营，错题会自动回到这里。</div>`;
};
Game.renderReview = function () {
  const S = this.reviewSession;
  const body = document.getElementById('g-review-body');
  const rec = S.items[S.idx];
  let html = `<div class='rv-item'>
    <div class='rv-meta'>错题回炉 ${S.idx + 1}/${S.items.length} · CH ${String(rec.chId).padStart(2, '0')} · 连对 ${rec.streak || 0}/2 次毕业</div>
    <div class='rv-q'>${rec.q}</div>`;
  if (rec.kind === 'dict') {
    html += `<input id='rv-input' class='dict-input' autocomplete='off' spellcheck='false' placeholder='敲出这个单词…' />
      <div class='dict-btns'><button class='dict-btn' onclick='App.rvCheck()'>检查（Enter）</button>
      <button class='dict-btn ghost2' onclick='App.rvShow()'>看答案</button></div><div id='rv-fb'></div>`;
  } else {
    html += `<div class='quiz-opts'>${(rec.options || []).map((o, oi) =>
      `<button class='quiz-opt' onclick='App.rvPick(${oi})'>${String.fromCharCode(65 + oi)}. ${o}</button>`).join('')}</div>
      <div id='rv-fb'></div>`;
  }
  html += `</div><div class='chapter-nav' style='justify-content:center'><button class='nav-btn' onclick='Game.rvSkip()'>跳过这题</button><button class='nav-btn' onclick='App.goHome()'>完成本轮</button></div>`;
  body.innerHTML = html;
  const inp = document.getElementById('rv-input');
  if (inp) {
    inp.focus();
    inp.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); App.rvCheck(); } };
  }
};
App.rvPick = function (oi) { Game.rvAnswer(oi, null); };
App.rvCheck = function () {
  const S = Game.reviewSession; if (!S) return;
  const rec = S.items[S.idx];
  const U = App.norm(document.getElementById('rv-input').value);
  Game.rvAnswer(-1, U, U);
};
App.rvShow = function () { Game.rvAnswer(-2, null, null, true); };
Game.rvAnswer = function (oi, typed, U, revealOnly) {
  const S = this.reviewSession; if (!S) return;
  const rec = S.items[S.idx];
  const fb = document.getElementById('rv-fb');
  let ok, ansText;
  if (rec.kind === 'dict') {
    ok = typed === App.norm(rec.word);
    ansText = rec.word;
    fb.innerHTML = `<div class='rv-exp'>✅ 参考拼写：<b>${rec.word}</b> —— ${rec.cn || ''}</div>`;
  } else {
    ok = oi === rec.answer;
    ansText = (rec.options || [])[rec.answer] || '';
    fb.innerHTML = `<div class='rv-exp'>✅ 正确答案：<b>${ansText}</b> —— ${rec.explain || ''}</div>`;
  }
  this.schedule(rec.key, ok);
  if (ok) { App.state.xpBonus = (App.state.xpBonus || 0) + 5; App.save(); this.updateHUD(); }
  this.reviewSession.results = (this.reviewSession.results || []);
  this.reviewSession.results.push(ok);
  fb.insertAdjacentHTML('afterbegin', `<div style='font-weight:800;color:${ok ? 'var(--green)' : 'var(--red)'};margin-bottom:6px'>${ok ? '答对了，+5 XP' : '再错一次，明天见'}</div>`);
  fb.insertAdjacentHTML('beforeend', `<div class='dict-btns'><button class='dict-btn' onclick='Game.rvNext()'>下一题（Enter）</button></div>`);
  document.querySelectorAll('#g-review-view .quiz-opt').forEach(b => b.disabled = true);
  const inp = document.getElementById('rv-input');
  if (inp) { inp.disabled = true; inp.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); Game.rvNext(); } }; }
  this.rvKeyHandler = e => { if (e.key === 'Enter') { e.preventDefault(); Game.rvNext(); } };
  document.addEventListener('keydown', this.rvKeyHandler);
};
Game.rvNext = function () {
  if (this.rvKeyHandler) { document.removeEventListener('keydown', this.rvKeyHandler); this.rvKeyHandler = null; }
  const S = this.reviewSession; if (!S) return;
  S.idx++;
  if (S.idx >= S.items.length) {
    const ok = (S.results || []).filter(Boolean).length;
    document.getElementById('g-review-body').innerHTML =
      `<div class='rv-item' style='text-align:center'><div class='dict-score'>${ok} / ${S.items.length}</div>
       <div class='dict-end-sub'>答对的题已排到下个复习周期；连续答对两次的已毕业出池。</div>
       <div class='dict-btns' style='justify-content:center'><button class='dict-btn' onclick='App.openReview()'>再轮一轮</button>
       <button class='dict-btn ghost2' onclick='App.goHome()'>回地图</button></div></div>`;
    this.updateEntryCounts();
    return;
  }
  this.renderReview();
};
Game.rvSkip = function () { Game.rvNext(); };

/* --- 错题回炉地图入口 --- */
Game.buildMapEntries = function () {
  const host = document.querySelector('.map-intro');
  if (!host || document.getElementById('g-review-entry')) return;
  const mk = (id, cls, svg, html) => {
    const b = document.createElement('button');
    b.id = id; b.className = 'training-entry ' + cls;
    b.innerHTML = svg + ' ' + html;
    host.appendChild(b);
    return b;
  };
  const pin = `<svg class='ic' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round'><circle cx='12' cy='9' r='3'/><path d='M12 12v9'/></svg>`;
  const bolt = `<svg class='ic' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'><path d='M13 2L4 14h6l-1 8 9-12h-6z'/></svg>`;
  mk('g-review-entry', 'review-entry', pin, '错题回炉 · <span id="g-review-n">0</span> 题到期').onclick = () => Game.openReview();
  this.updateEntryCounts();
};
Game.updateEntryCounts = function () {
  this.ensureState();
  const r = document.getElementById('g-review-n');
  if (r) { const n = this.dueList().length; r.textContent = n; const host = r.closest && r.closest('.training-entry'); if (host) host.style.display = n > 0 ? '' : 'none'; }
};
/* 覆盖 hideGameViews：纳入新视图 */
const _hgv = Game.hideGameViews.bind(Game);
Game.hideGameViews = function () {
  _hgv();
  ['g-review-view'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
};
/* 视图注入 */
Game.injectReviewViews = function () {
  const app = document.getElementById('app');
  const anchor = document.getElementById('word-popup');
  if (!app || !anchor || document.getElementById('g-review-view')) return;
  const rv = document.createElement('main');
  rv.id = 'g-review-view'; rv.className = 'g-page hidden';
  rv.innerHTML = `<div class='g-page-head'><h2>错题回炉</h2><p id='g-review-sub'>间隔重测：1 天 → 3 天 → 7 天，连对 2 次毕业出池</p></div><div id='g-review-body'></div>
    <div class='chapter-nav'><button class='nav-btn' onclick='App.goHome()'>回地图</button></div>`;
  app.insertBefore(rv, anchor);
};
Game.injectReviewViews();
Game.buildMapEntries();
/* goHome 后刷新入口计数 */
const _goh = App.goHome.bind(App);
App.goHome = function () { _goh(); Game.updateEntryCounts(); };
