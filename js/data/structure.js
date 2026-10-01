/* ===== 课程架构配置 · 四大陆 ===== */
window.STAGES = [
  {
    id: "stone",
    cls: "s1",
    emoji: "🏕️",
    name: "基石大陆 · 石桥村",
    desc: "校园、日常、职场、科技——高频词汇 + 基础语法，把地基打牢。",
    chapters: [1, 2, 3, 4, 5, 6, 7, 8],
    color: "#ff6b6b"
  },
  {
    id: "island",
    cls: "s2",
    emoji: "🏝️",
    name: "技巧群岛",
    desc: "阅读、改错、人文、交通——学方法，练套路，题型全通关。",
    chapters: [9, 10, 11, 12, 13, 14],
    color: "#ffd700"
  },
  {
    id: "throne",
    cls: "s3",
    emoji: "🏔️",
    name: "王座山 · 冲刺大陆",
    desc: "体育、旅行、网络、励志——综合冲刺，模考节奏，全真演练。",
    chapters: [15, 16, 17, 18, 19, 20, 21],
    color: "#4ecca3"
  },
  {
    id: "newland",
    cls: "s4",
    emoji: "🏯",
    name: "新大陆 · 核心词海",
    desc: "大学城、职场、海边、科技——500+ 核心词全部织进故事。",
    chapters: [22, 23, 24, 25, 26, 27, 28, 29, 30],
    color: "#a855f7"
  }
];

/* 章节页模块导航（编号导航条，替代「第X幕」叙事命名） */
window.MODULE_NAV = [
  { key: "mod-story",    n: "01", t: "故事剧场" },
  { key: "mod-words",    n: "02", t: "核心词" },
  { key: "mod-confuse",  n: "03", t: "易混对决" },
  { key: "mod-sentence", n: "04", t: "句子工坊" },
  { key: "mod-phrase",   n: "05", t: "短语弹药" },
  { key: "mod-grammar",  n: "06", t: "语法碉堡" },
  { key: "mod-quiz",     n: "07", t: "闯关测验" }
];

/* 学完哪章 → 跳哪个题型特训页签 */
window.CHAPTER_TRAINING_MAP = {
  9:  { tab: "reading", label: "阅读理解特训" },
  13: { tab: "reading", label: "阅读理解特训（二刷）" },
  10: { tab: "error",   label: "短文改错特训" },
  20: { tab: "all",     label: "全题型模考" }
};
