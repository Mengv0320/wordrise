/* ===== 课程架构配置 · 《词力觉醒》三卷四篇 ===== */
window.STAGES = [
  {
    id: "awaken1",
    cls: "s1",
    emoji: "🏕️",
    name: "觉醒篇 · 上（ch01-05）",
    desc: "测词为零的废柴阿洛，在青盟学院翻开空白书页——词林狩猎、镜像城邦升阶，觉醒第一步！",
    chapters: [1, 2, 3, 4, 5],
    color: "#ff6b6b"
  },
  {
    id: "awaken2",
    cls: "s2",
    emoji: "🏝️",
    name: "觉醒篇 · 下（ch06-10）",
    desc: "词魂黑市暗流涌动，雾潮攻城背水一战——卷一终章，阿洛晋阶词师！",
    chapters: [6, 7, 8, 9, 10],
    color: "#ffd700"
  },
  {
    id: "secret",
    cls: "s3",
    emoji: "🏔️",
    name: "秘境篇 · 五关试炼（ch11-20）",
    desc: "完形迷宫、改错修罗场、阅读判断哨塔、英译汉集市、选词填空猎场、汉译英高塔、写作圣殿——专升本题型全通关，步步逼近十年前「词力清零案」真相！",
    chapters: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    color: "#4ecca3"
  },
  {
    id: "emperor",
    cls: "s4",
    emoji: "🏯",
    name: "词帝篇 · 新大陆决战（ch21-30）",
    desc: "追凶渡海闯新大陆——大学城、职场街、科技城步步为营，词帝塔决战教务长，词帝加冕！",
    chapters: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    color: "#a855f7"
  }
];

/* 学完哪章 → 跳哪个题型特训页签 */
window.CHAPTER_TRAINING_MAP = {
  9:  { tab: "reading", label: "阅读理解特训" },
  12: { tab: "error",   label: "短文改错特训" },
  13: { tab: "reading", label: "阅读理解特训（二刷）" },
  20: { tab: "all",     label: "全题型模考" }
};
