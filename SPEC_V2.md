# 专升本英语 20 章扩容规范 v2（真题驱动）

目标：把每章从「18词+10短语」扩到「24词+16短语+3语法点+8测验题+400-500词长故事」，词汇短语总量冲「几百上千」，全面覆盖河南专升本真题考点。

## 一、数据格式（严格遵守）

每章文件 `js/data/chXX.js`，结构：

```js
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: N,
  title: "中文名 · 副题",
  desc: "一句话导语（有梗有钩子）",
  tag: "xx类高频词",
  story: {
    title: "English Title 中文名",
    text: `400-500词英文故事，三幕结构（起/转/合），对话+吐槽+反转风格。[[word]] 标记本章 words 表内的词（含变形，如 [[scored]]、[[chosen]]），标记 20-26 处。字符串内禁用半角双引号，对话用 " ？" 需改成 — 或改写。`,
    translation: `全文中文翻译，段落对应。`
  },
  words: [ /* 恰好 24 条：12 新词 + 12 复现词(ch01 除外=18旧+6新) */
    { w: "word", ipa: "/.../", pos: "n.", cn: "中文", ex: "English example.", excn: "中文翻译", memo: "搭配/考点/复现标注" }
  ],
  confusions: [ /* 恰好 3 组 */
    { group: "A / B / C — 一句话题眼", items: [ { w: "a", cn: "区别", note: "例" } ], tip: "口诀+考点" }
  ],
  sentences: [ /* 恰好 2 句 */
    { en: "长难句，核心词用 <mark>word</mark> 包裹", parts: ["拆解1","拆解2","拆解3","拆解4"], cn: "翻译" }
  ],
  phrases: [ /* 恰好 16 条 */
    { p: "phrase", cn: "中文", note: "用法+坑；改错雷区加 warn:true" }
  ],
  grammar: [ /* 恰好 3 条，按下方《语法分配表》 */
    { t: "语法点标题", rule: "规则讲人话", ex: "English example.", excn: "中文", signal: "标志词/形近坑" }
  ],
  quiz: [ /* 恰好 8 题：2词汇+1易混+2语法(对应本章grammar)+1改错+1翻译+1完形逻辑/搭配 */
    { q: "题干", options: ["A","B","C","D"], answer: 0, explain: "解析，讲清为什么" }
  ]
});
```

铁律：
1. 字符串内 NEVER 半角双引号（用「」或改写）；Write/Edit 单次 ≤150/50 行，分步追加
2. quiz ≥80 分解锁机制不变；answer 是选项索引（0 起）
3. memo 里标「复现 chXX」的词，必须真实存在于该章 words 数组（写前 grep 查证 `w: "word"`）
4. 写完必跑 `node --check js/data/chXX.js`
5. 故事 [[标记]] 的词必须能在本章 words（含变形三级匹配）或 phrases 命中

## 二、语法分配表（每章 3 条，禁改动）

| 章 | grammar 三条 |
|----|-------------|
| 1 | ①一般现在/过去/将来三大时态+标志词 ②现在完成时 since/for/in the last few years/already/yet ③It takes sb...to do / It's time to do / It is+adj+to do |
| 2 | ①冠词 a/an/the（音素定 a/an、the same、go to school 特例）②频率副词与一般现在时 ③spend/cost/pay/take 四花费 |
| 3 | ①可数不可数名词（advice/information/news/equipment/experience 经验）②名词所有格 's 与 of ③many/much/few/little/whole 修饰语矩阵 |
| 4 | ①it 用法：形式主语/It is...that 强调初识 ②one/it/that/those 指代区别 ③物主代词+反身代词 enjoy oneself |
| 5 | ①形容词↔副词转换与位置 ②比较级最高级（much/even 修饰比较级、fewer/less）③so...that 与 such...that |
| 6 | ①并列连词 and/but/or/so；although 不与 but 连用 ②because vs because of ③时间状语从句 when/while/as soon as/before |
| 7 | ①V+doing（enjoy/finish/practice/mind/suggest）②V+to do（want/decide/hope/refuse/ afford）③make/let/have sb do 使役+原形 |
| 8 | ①被动语态 be done 各时态 ②无被动动词 take place/happen/consist of/come true ③情态动词+be done |
| 9 | ①定语从句 who/which/that ②关系副词 where/when/why ③whose 与介词+whom |
| 10 | ①宾语从句陈述语序 ②that vs what ③if/whether 及否定前移 |
| 11 | ①主语从句 what 引导 ②同位语从句 belief/doubt/idea/news + that ③It is believed that / It is said that |
| 12 | ①现在分词 doing 作状语（主动/进行）②过去分词 done 作定语（被动/完成）③have difficulty/trouble (in) doing |
| 13 | ①过去完成时（by the time/before 过去的过去）②hardly...when / no sooner...than ③过去进行时 was/were doing + when |
| 14 | ①感官系动词 look/sound/smell/taste/feel + adj ②get sth done / have sth done ③would rather do (than do) |
| 15 | ①过去进行时 vs 一般过去（while 两长一短）②play/go/do 运动搭配 ③不定式作目的状语 in order to/so as to |
| 16 | ①将来时家族 will/be going to/be about to/plan to ②主将从现（时间/条件从句）③现在完成时复习+for 段 since 点 |
| 17 | ①宾语从句时态呼应（主过从过/客观真理现在）②直接引语→间接引语（时态前移+人称变化）③would like sb to do / look forward to doing |
| 18 | ①wish + 过去式虚拟 ②It is high time that + did ③as if/as though 虚拟 |
| 19 | ①if 虚拟三态（与现在/过去/将来相反）②suggest/demand/order + (should) do ③unless/once/in case 条件句 |
| 20 | ①Only+状语 倒装 / Never 等否定副词倒装 ②强调句 It is/was...that/who ③改错十雷区总复习（时态/主谓一致/冠词/代词/非谓语/介词/连词/名词数/词性/平行结构） |

## 三、真题考点弹药库（2024/2025 真题提炼，各章择机分配进 words/phrases/quiz）

完形高频搭配（优先入 phrases）：take into account / take advantage of / pay attention to / take care of / catch sight of / lose sight of / make up for / consist of(无被动) / depend on / devote oneself to doing / apply for / apply to / be involved in / suffer from / be afraid of / be familiar with(to) / be proud of / be fond of / be tired of / be full of / be short of / in charge of / in fact / in addition to / on the contrary / as a result of / in conclusion / due to / focus on / more than ever

逻辑信号词（完形/阅读必考）：but/however/so/therefore/instead/as a result/in fact/in addition/above all/after all/at all/in all

真题词（2024-25 卷面出现，分章入 words）：pose(a risk) / bother to do / indicate / be prone to / enable sb to do / instant access / a rich source of / capture attention / commitment / equality / promote / integration / maintain / be known for / medal / journey / athlete / approach / potential / diverse / contribute to / benefit from / efficient / account for / access / device / bacteria / contamination / prevent / regular / abundant / indispensable

改错十雷区（quiz 改错题轮着考）：①时态不一致（and 前后）②主谓一致（the number of 单/a number of 复；either...or 就近）③名词单复数（one of + 复数）④冠词（a/an 音素、the same、after school）⑤词性（系动词后 adj、修饰名词 adj/动词 adv）⑥代词（主宾格、反身 oneself）⑦非谓语（enjoy+doing、介词后 doing、done 表被动）⑧介词（固定搭配、because of+名词）⑨连词逻辑（but/because/although）⑩平行结构（not only...but also 对等）

写作模板句（quiz 翻译题轮着考）：With the development of... / As far as I'm concerned... / For one thing...for another... / What's more... / In conclusion... / It is high time that... / Only in this way can we... / There is no denying that...

## 四、词汇复现策略（每章 12 复现词）

- 每章 words = 12 新词（本章主题）+ 12 复现词（从 ch01 起历史章核心词回填，memo 标「复现 chXX：……」）
- 复现词挑选原则：本章故事情节能自然用到；跨章间隔越远越好（间隔重复）；同族词优先（如 goal→achieve）
- 复现词出处写前必 grep 查证：`Grep pattern 'w: "目标词"' path js/data` 确认存在哪章
- ch01 特殊：18 旧词保留 + 新增 6 真题高频词（benefit/access/contribute/efficient/account/improve）

## 五、故事规范

- 400-500 词，三幕：开场（场景+人物）→ 转折（冲突/意外）→ 收尾（反转/金句/呼应旧章）
- 角色宇宙：阿洛（主角）、卷卷（智慧担当）、扫爷（ scanner 眼）、胖达（吃货）、飞哥（夜猫子）、钱少（剁手党）、肌肉哥（体育担当）、瓶爷（冷静毒舌）
- 风格：对话推进 + 互相吐槽 + 每章一个小反转；考点词藏进对话和吐槽里
- [[标记]] 20-26 处，只标本章 words 内的词（变形可：[[struggled]]、[[received]]）
- 每章结尾埋下一章钩子

## 六、验证（每章写完必跑）

```
node --check js/data/chXX.js
```

全量校验脚本（chapter checker 由主控执行）检查：words=24、confusions=3、sentences=2、phrases=16、grammar=3、quiz=8、story.translation 存在。

## 七、样板章

ch01 为样板：js/data/ch01.js —— 格式、口吻、结构以它为准。

## 八、v3 交互数据规范（app.js 已支持，数据层补齐）

app.js 渲染器已改造：数据有新字段就渲染交互，没有就回退纯阅读。四个可选字段：

1. `confusions[i].drill`（选词小战场）：数组，每组 1-2 条
   `{ s: "Smoking ___ your health.", opts: ["affect", "effect", "effort"], a: 0, why: "空前缺动词→affect" }`
   - s 内用 `___` 标挖空位（三个下划线）；opts 从本组易混词取，2-4 个；why 一句话讲思路
2. `sentences[i].slots`（句子解剖台）：数组，每句 1-2 条
   `{ s: "that the effort they make... is 表语从句。___ 引导表语从句。", opts: ["that", "what", "which"], a: 0, why: "从句完整→that" }`
3. `phrases[i].gap`（介词快闪）：对象，每章挑 5 条短语
   `{ s: "pay attention ___ the details", opts: ["at", "to", "on"], a: 1, why: "固定搭配 to" }`
4. `grammar[i].quiz`（标志词快答）：对象，每条语法配 1 题
   `{ s: "She ___ (live) here since 2019. → ___", opts: ["lived", "has lived", "will live"], a: 1, why: "since+过去点→现在完成" }`

5. `words` 扩到 26 条：第 25/26 条是真题高频词（分配表见下），memo 标「真题高频」+ 搭配

### 真题高频词分配表（每章 +2）
ch02 decide/condition · ch03 confident/responsible · ch04 solve/effective · ch05 avoid/essential · ch06 promote/various · ch07 popular/complex · ch08 anxiety/problem · ch09 familiar/potential · ch10 important/impossible · ch11 ordinary/contribution · ch12 attract/adapt · ch13 different/however · ch14 especially/adjust · ch15 convince/greatly · ch16 available/actually · ch17 persuade/resource

注意：drill 的 s 字段内容必须与本章词汇/语法呼应；为什么写 why；所有交互题答案必须唯一且正确。

## 九、v4 新大陆篇规范（ch22-30 · 核心800词织入故事）

目标：读故事=学生词。所有核心词必须在故事正文出现并 [[标注]]，点击弹释义。不搞单独背诵。

### 数据格式（每章）
- words：55-60 条（本章全部织入词，每条 w/ipa/pos/cn/ex/excn/memo——story 中 [[w]] 点击就靠它弹层；基础词也必须有词条）
- story.text：550-650 词，[[标注]] 55+ 处；故事词汇超出 words 数组的生僻词一律换掉或收进 words
- story.translation：全文中文翻译
- grammar：3 条考点（规则+例句+标志词），**例句结构必须在故事正文真实出现**（织进情节）
- radar 字段（章级）：`radar: ["一般现在时", "定语从句", ...]` 列出本章故事覆盖的考点清单（3-5 个），app.js 在语法区顶部渲染「本章考点雷达」
- confusions 2-3 组 / phrases 12 条 / quiz 8 题 / sentences 2 句

### 语法考点分配（9 章全覆盖拼图）
ch22 大学城: 一般现在+频率副词、现在完成进行、过去完成
ch23 城市漫步: there be、方位介词、定语从句
ch24 美食厨房: 感官系动词、可数不可数、so/such
ch25 职场实习: 一般过去vs过去进行、used to、宾语从句
ch26 旅行日记: 将来时家族、主将从现、时间状语从句
ch27 情感四季: -ing/-ed 情感形容、wish 虚拟、感叹句
ch28 科技新世界: 被动语态全时态、情态被动、get done
ch29 自然科学: 比较级最高级、if 条件三态、祈使句
ch30 决战时刻: 倒装、强调句、主谓一致+非谓语综合

### 剧情线（连贯不断空）
ch21 时间管理局后，阿洛成功上岸本科进入「新大陆」：22 大学城选课风云 → 23 城市漫步迷路记 → 24 美食厨房大乱斗 → 25 职场实习第一天 → 26 旅行日记·海边 → 27 情感四季·心事 → 28 科技新世界·机器人室友 → 29 自然科学·登山科考 → 30 决战时刻·毕业答辩（大结局，呼应 ch01 知识银行）
角色延续：阿洛、卷卷、胖达、飞哥、钱少、肌肉哥、扫爷；每章结尾钩子引出下一章。
