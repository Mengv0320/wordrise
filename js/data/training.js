/* ===== 题型特训营 · 近五年真题与预测卷提炼 ===== */
window.TRAINING = {
  reading: {
    title: "阅读理解 · 40 分（4 篇 × 20 题）",
    steps: [
      "先题后文：花 1-2 分钟浏览全部题干，圈出关键词（人名、数字、专有名词、核心动词），暂时不看选项，避免被错误选项先入为主。",
      "速读全文抓主旨：重点看首段、尾段和每段首句（专升本文章多为总分/总分总结构）。遇到关键词所在句放慢，无关内容一扫而过，不纠结生词。",
      "带题寻读定位：题目顺序与行文顺序基本一致，可按段落顺序缩小搜索范围；用题干中的专有名词、数字、年份快速锁定原文句子。",
      "比对选项排除：警惕绝对化用词（all / never / must / only），原文说「部分」选项说「全部」= 偷换概念直接排除；正确答案往往是原文的同义替换，不是原句照搬。"
    ],
    types: [
      {
        name: "① 细节理解题（占比最高，先保住分）",
        signal: "According to the passage... / Which of the following is true? / ...EXCEPT",
        howto: "圈题干关键词 → 回原文找原词或同义替换（important→significant 这类）→ 精读定位句前后一共两三句 → 与选项逐一比对。答案一般能在原文直接找到。",
        traps: "「合理但不正确」的选项最坑——凭常识觉得对，但原文没说；EXCEPT 题要逐个回原文验证；程度副词（only / all / completely）一出现先画问号。"
      },
      {
        name: "② 主旨大意题（抓首尾，防以偏概全）",
        signal: "What is the main idea...? / The best title... / The passage is mainly about...",
        howto: "首段首句 + 尾段尾句 + 各段首句串起来 = 全文主旨；标题要「短小、涵盖全文、范围精确」。说明文抓说明对象及特征，议论文抓论点。",
        traps: "只概括某一段的选项 = 以偏概全；范围太大、包含文中没提内容的选项 = 过度延伸；个别单词特别眼熟的选项不代表对——要覆盖全文才算。"
      },
      {
        name: "③ 推理判断题（答案藏在字里行间）",
        signal: "It can be inferred... / The author implies... / We may conclude that...",
        howto: "推理题答案 = 原文可推但未明说的内容，只推一步：细节推理找原句理解后延伸；态度推理抓感情色彩词（fortunately / sadly / unfortunately）；来源题看文体特征。转折词（but / however）、因果词（so / therefore）后面常出答案。",
        traps: "选项和原文句子完全一致 = 必错（推理题答案不是原文原句）；推得太远（原文说「某现象普遍」选项说「将引发严重后果」）= 过度推断。"
      },
      {
        name: "④ 词义猜测题（看邻居，不靠词典）",
        signal: "The word ... in Paragraph X most probably means...",
        howto: "看生词前后的句子：找同义线索（and / also / or）、反义线索（but / while / however）、举例线索（for example / such as）；定语从句和同位语常常就是解释；un- / -tion / -less 等词根词缀可辅助。",
        traps: "熟词僻义是高频坑：plant 不只是植物还能是「工厂」，course 不只是课程还能是「航线」；简单词的正确答案往往不是它的常见义。"
      }
    ],
    demo: {
      passage: `Most of us know that regular exercise is good for the body. But fewer people realize how strongly physical activity affects the brain. Scientists have found that people who exercise three times a week perform better on memory tests than those who do not. Exercise increases blood flow to the brain, which helps brain cells stay healthy. It also reduces stress, and lower stress makes it easier to concentrate. You do not have to run a marathon — a thirty-minute walk, five days a week, is enough to see the difference. In fact, walking with friends may work even better, because talking while walking exercises the brain twice.`,
      questions: [
        {
          q: "According to the passage, people who exercise regularly ______.",
          options: ["have better memory test results", "never get sick", "run marathons every week", "need less sleep than others"],
          answer: 0,
          locate: "people who exercise three times a week perform better on memory tests than those who do not",
          explain: "细节题。定位句直接说每周锻炼三次的人在记忆测试中表现更好 → A。B「从不生病」、D「需要更少睡眠」原文未提（无中生有）；C「每周跑马拉松」与原文「你不必跑马拉松」相反（正反混淆）。"
        },
        {
          q: "The passage is mainly about ______.",
          options: ["how to run a marathon", "the benefits of exercise for the brain", "the best time to do sports", "famous scientists in history"],
          answer: 1,
          locate: "首段主题句：regular exercise is good for the body. But fewer people realize how strongly physical activity affects the brain.",
          explain: "主旨题。首段转折词 but 之后是全文核心——锻炼对大脑的影响；后文记忆测试、血流、减压、专注力全部围绕大脑展开 → B。A、C、D 均以偏概全或无中生有。"
        },
        {
          q: "What can we infer from the last sentence of the passage?",
          options: ["Walking alone is useless.", "Talking is a kind of brain exercise.", "Exercise always needs friends.", "Walking is better than running."],
          answer: 1,
          locate: "walking with friends may work even better, because talking while walking exercises the brain twice",
          explain: "推理题。原文说边走边聊让大脑得到双重锻炼——可推出「说话也是一种大脑锻炼」→ B。A「独自走路没用」推得太远；C「总要朋友」过度推断；D 原文未比较走路和跑步。"
        },
        {
          q: "The word \"reduces\" in the passage most probably means ______.",
          options: ["increases", "causes", "makes smaller", "needs"],
          answer: 2,
          locate: "It also reduces stress, and lower stress makes it easier to concentrate.",
          explain: "词义猜测题。看后半句 lower stress（更低的压力）——reduces 的结果就是压力变低，前后互为解释 → makes smaller。A「增加」与下文 lower 矛盾，属反义干扰。"
        }
      ]
    }
  },
  cloze: {
    title: "完形填空 · 20 分（1 篇 × 20 空）",
    steps: [
      "第一遍 通读全文（1-2 分钟，不选题）：首句几乎不设空，是文章的「身份证」——读懂首句就知道文体、主题、时态基调；尾句常是总结升华。先建立整体认知，避免「单词都对，语境全错」。",
      "第二遍 逐句精读按序作答：严格按顺序做，绝不跳题（空与空之间有逻辑链，跳题会断链）；遇到拿不准的先圈出来继续往下做，做完全文回头再看，往往豁然开朗。",
      "第三遍 带入答案复读：把所有选项填回去当一篇完整文章读——查三件事：语句是否通顺、语法是否正确（时态/单复数/主谓一致/词性）、上下文逻辑是否连贯（转折因果有没有接反）。"
    ],
    logic: [
      { type: "转折", words: "but / however / though / while / on the contrary", tip: "空格前后意思相反。前句夸，转折后必贬——选词方向直接反转。完形最高频逻辑，2025 真题最后空就考 But。" },
      { type: "因果", words: "because / so / therefore / thus / due to / as a result (of)", tip: "由因推果或由果找因。空格前有 because 后面接原因；as a result 后面接结果。每年必考。" },
      { type: "递进", words: "and / besides / moreover / in addition / what's more", tip: "前后同向加强，选词与前面语义一致且更进一层。" },
      { type: "让步", words: "although / even if / while / despite", tip: "「虽然……但是……」——主句方向与从句相反，虽然引导词让步，重点在主句。" },
      { type: "条件", words: "if / unless / once / in case / on condition that", tip: "unless = if not（除非）；主将从现——从句用一般现在时，主句用将来时。" }
    ],
    collos: [
      { p: "take into account", cn: "把……考虑在内", note: "= consider；完形因果/转折题高频" },
      { p: "take advantage of", cn: "利用；占便宜", note: "advantage 是 ch 系章核心词" },
      { p: "pay attention to", cn: "注意；重视", note: "to 是介词，后接名词/doing" },
      { p: "take care of", cn: "照顾；负责", note: "= look after" },
      { p: "catch sight of", cn: "看见；瞥见", note: "反义 lose sight of 看不见；忽略" },
      { p: "lose sight of", cn: "看不见；忽略目标", note: "常考比喻义：忘记初心" },
      { p: "make up for", cn: "弥补；补偿", note: "make up for lost time 弥补失去的时间" },
      { p: "consist of", cn: "由……组成", note: "⚠️ 无被动：is consisted ❌；2025 真题考 consisting of" },
      { p: "depend on", cn: "依靠；取决于", note: "= rely on；It depends. 看情况" },
      { p: "devote oneself to", cn: "献身于；致力于", note: "⚠️ to 是介词：devote to helping" },
      { p: "apply for / apply to", cn: "申请（事物）/ 向……申请", note: "复现 ch01：for 接事物，to 接机构" },
      { p: "be involved in", cn: "卷入；参与", note: "2025 真题语境高频" },
      { p: "suffer from", cn: "遭受；患（病）", note: "suffer the loss 承受损失" },
      { p: "be familiar with", cn: "对……熟悉（人作主语）", note: "be familiar to 为……所熟悉（物作主语）" },
      { p: "be proud of", cn: "为……自豪", note: "= take pride in；复现 ch11" },
      { p: "be fond of", cn: "喜欢", note: "比 like 正式；of 后接名词/doing" },
      { p: "be tired of", cn: "厌倦", note: "be tired with/from 因……疲劳（语义不同）" },
      { p: "be full of", cn: "充满", note: "= be filled with" },
      { p: "be short of", cn: "缺乏；短缺", note: "short of money 缺钱" },
      { p: "in charge of", cn: "负责；掌管（主动）", note: "in the charge of 由……负责（被动）" },
      { p: "in fact", cn: "事实上", note: "转折逻辑信号词，前后语义反转" },
      { p: "in addition (to)", cn: "此外（除……之外）", note: "递进逻辑；to 是介词" },
      { p: "on the contrary", cn: "相反", note: "对立转折，完形最高频之一" },
      { p: "as a result (of)", cn: "因此（由于）", note: "因果逻辑，每年必考" },
      { p: "in conclusion", cn: "总之", note: "总结逻辑，完形结尾常考 = in short" },
      { p: "make up one's mind", cn: "下定决心", note: "复现 ch18/ch19" },
      { p: "have no choice but to do", cn: "别无选择只能做", note: "复现 ch01；but 后带 to" },
      { p: "by no means", cn: "绝不", note: "复现 ch01；放句首要倒装" },
      { p: "succeed in doing", cn: "成功做成", note: "复现 ch08/ch18：in 后接 doing" },
      { p: "prevent...from doing", cn: "阻止……做", note: "= stop...from doing；from 可省（主动句）" }
    ],
    demo: {
      passage: `Regular exercise is good for the body, but it also helps the mind. Scientists say that people who move a lot sleep (1)______ at night. Good sleep, (2)______, makes it easier to focus the next day. Exercise does not have to be hard: walking, dancing and even housework all (3)______. The key is to keep moving. Many students (4)______ that they are too busy to exercise, (5)______ the truth is that a short walk can save time — it (6)______ energy and improves memory. So (7)______ up your phone for thirty minutes a day and take a walk. Your body will thank you, and (8)______ will your grades.`,
      blanks: [
        { n: 1, q: "sleep ______ at night", options: ["badly", "better", "less", "later"], answer: 1, explain: "前文说锻炼有好处，同向递进 → 睡得更好 better。badly/less 与「好处」逻辑相反。" },
        { n: 2, q: "Good sleep, ______, makes it easier to focus", options: ["however", "therefore", "although", "instead"], answer: 1, explain: "好睡眠 → 专注力好是因果关系 → therefore。however 表转折，与句内因果矛盾。" },
        { n: 3, q: "walking, dancing and even housework all ______", options: ["cost", "count", "hold", "pass"], answer: 1, explain: "count「算数、起作用」：散步跳舞做家务都算数。cost 花费（主语是物但语义不合）、hold 握住、pass 通过，都不合语境。" },
        { n: 4, q: "Many students ______ that they are too busy", options: ["complain", "promise", "forget", "doubt"], answer: 0, explain: "后文 but 转折引出真相——他们是在「抱怨」太忙没时间 → complain。promise 承诺、forget 忘记、doubt 怀疑，与 too busy 的抱怨语气不搭。" },
        { n: 5, q: "too busy to exercise, ______ the truth is...", options: ["but", "so", "or", "for"], answer: 0, explain: "前说太忙没空锻炼，后说短走省时间——语义反转 → but。2025 真题完形最后一空同样考 But。" },
        { n: 6, q: "it ______ energy and improves memory", options: ["wastes", "saves", "loses", "borrows"], answer: 1, explain: "and 并列结构，与 improves 同向积极 → saves energy 提神蓄能。wastes/loses 消极，borrow 借（非搭配）。" },
        { n: 7, q: "So ______ up your phone for thirty minutes", options: ["bring", "put", "pick", "give"], answer: 1, explain: "put up 固定搭配此处义为「收起」：放下手机去散步。give up 后不接 up your phone 结构。" },
        { n: 8, q: "Your body will thank you, and ______ will your grades.", options: ["so", "such", "neither", "nor"], answer: 0, explain: "so + 倒装表「……也一样」：and so will your grades 成绩也会。neither/nor 用于否定句，与前句肯定矛盾。" }
      ]
    }
  },
  error: {
    title: "短文改错 · 20 分（10 题）",
    steps: [
      "第一步 快速浏览全文：把握文章的主时态、人称和主旨大意，顺手标记一眼就能看出的错误。主时态是改错的「总开关」——全文一般过去时，突然冒出的现在时要高度警惕。",
      "第二步 细读找错并改正：逐句分析，优先检查动词（时态/语态/主谓一致/非谓语）、名词单复数、代词指代、冠词、介词搭配、连词逻辑。错误类型一般不重复考。",
      "第三步 代入正确答案通读：确认修改后语法正确、语义通顺、原意不变。错项比例参考「1:1:8」——多词 1 个、缺词 1 个、错词 8 个；改动以最少为原则，虚词添加删除、实词改变词形。"
    ],
    zones: [
      { name: "雷区① 时态不一致", rule: "and / but 连接的前后谓语时态必须一致；全文主时态决定每个动词。", wrong: "They did not want me to do any work at home; they want me to devote all my time to my studies.", right: "want → wanted", explain: "前半句 did not want 是过去时，分号后主语相同、语境延续 → 统一过去式 wanted。" },
      { name: "雷区② 主谓一致", rule: "the number of + 复数名词谓语用单数；a number of + 复数名词谓语用复数；either...or / neither...nor 就近一致。", wrong: "There were a football game on TV last Saturday evening.", right: "were → was", explain: "真正的主语是 a football game（单数），There be 句型谓语就近单复数 → was。" },
      { name: "雷区③ 名词单复数", rule: "不可数名词（advice / information / news / equipment / progress）永远无复数；one of 后接复数；具体数字后 hundred/thousand 不加 s。", wrong: "I will get good marks in all my subject. / We have two hundreds books.", right: "subject → subjects；hundreds → hundred", explain: "all my 后接复数 subjects；具体数字 two 后 hundred 用单数，只有泛指「成百上千」才加 s。" },
      { name: "雷区④ 冠词误用", rule: "a/an 看音素不看字母；the same 是固定搭配；go to school / after school 等短语中冠词多余。", wrong: "We may be one family and live under a same roof.", right: "a → the", explain: "the same 是固定搭配，same 前永远用 the——2024 真题改错同款。" },
      { name: "雷区⑤ 形容词副词混用", rule: "系动词（be / become / feel / smell / sound）后用形容词；修饰动词用副词、修饰名词用形容词。", wrong: "My pronunciation was terribly. / I will have a wonderfully time.", right: "terribly → terrible；wonderfully → wonderful", explain: "was 后接表语用形容词 terrible；time 是名词，前面要用形容词 wonderful 修饰。" },
      { name: "雷区⑥ 代词错误", rule: "主格宾格分清（I/me）；动作回到自身用反身代词（myself）；指代前文内容用 it/that。", wrong: "I began to enjoy talking to myself on paper as I was learning to express me in simple English.", right: "me → myself", explain: "表达的是「我自己」→ 反身代词 myself，与前面 talking to myself 呼应。" },
      { name: "雷区⑦ 非谓语动词", rule: "enjoy / finish / practice / mind / suggest / avoid 后接 doing；介词后接 doing；句首作主语用 doing；被动关系用 done。", wrong: "But his parents think go to college is more important than playing sports.", right: "go → going", explain: "动词原形不能作主语——「上大学」这件事作主语要用动名词 going。" },
      { name: "雷区⑧ 介词错误", rule: "固定搭配记牢：get rid of / be different from / be popular with / in my family；because of 接名词、because 接句子。", wrong: "There are too many people among my family.", right: "among → in", explain: "in my family 是固定说法「在我家」；among 强调「在（三者以上）之间」的群体关系，不用于家庭内部归属。" },
      { name: "雷区⑨ 连词逻辑", rule: "although / though 不与 but 连用（二选一）；because 不与 so 连用；并列句之间不能只用逗号。", wrong: "Although it was late, but he kept working.", right: "去掉 but（或去掉 although）", explain: "英语一个句子只允许一个引导词——「虽然但是」在中文成立，在英语里 although 和 but 只能留一个。" },
      { name: "雷区⑩ 特殊句型", rule: "No sooner / Hardly / Never 等否定词开头要倒装；It is...that 是强调句；whether...or not 固定搭配。", wrong: "No sooner she had arrived home than the phone rang.", right: "she had → had she", explain: "No sooner 置于句首，后面必须部分倒装：had she arrived。than 后才是正常语序。" }
    ]
  }
};
