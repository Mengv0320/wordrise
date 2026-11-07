/* ===== 题型特训营 · 近八年真题与机构预测卷提炼 ===== */
window.TRAINING = {
  /* 8 年真题考情总览（2017-2024 命题规律 + 预测卷风向） */
  examInsight: {
    title: "📊 八年真题考情雷达",
    structure: [
      { name: "阅读理解", score: 40, detail: "4 篇 × 5 题 × 2 分（20 题）", color: "#5dade2" },
      { name: "完形填空", score: 20, detail: "1 篇 × 20 题 × 1 分", color: "#a855f7" },
      { name: "阅读判断", score: 10, detail: "1 篇 × 5 题 × 2 分", color: "#4ecca3" },
      { name: "英译汉选择", score: 10, detail: "5 题 × 2 分（四选一）", color: "#ffd700" },
      { name: "选词填空", score: 15, detail: "10 选 5 填空 × 3 分", color: "#ff9f1c" },
      { name: "汉译英翻译", score: 15, detail: "5 句 × 3 分", color: "#5dade2" },
      { name: "短文改错", score: 20, detail: "10 题 × 2 分", color: "#ff6b6b" },
      { name: "写作", score: 20, detail: "1 篇议论文（三段汉语提纲）", color: "#a855f7" }
    ],
    readingTrend: {
      head: "阅读 · 8 年命题规律",
      points: [
        "题型配比极稳：细节题约占 6 成（10-12 题），主旨 / 推理 / 词义各 2-3 题——细节题是基本盘，先保住",
        "题材轮换池就五个：教育成长 / 科技生活 / 健康环保 / 社会热点 / 职场文化，机构预测卷也从这个池子里出",
        "正确答案特征：几乎全是原文的「同义替换」（important→significant / buy→purchase），原词照搬的选项反而危险",
        "干扰项三板斧：无中生有 / 正反混淆 / 以偏概全——8 年卷子翻来覆去就这三招",
        "文章结构总分或总分总：首段末句 + 各段首句 + 尾段 = 主旨题答案区"
      ]
    },
    clozeTrend: {
      head: "完形 · 8 年命题规律",
      points: [
        "选材几乎固定：励志成长 / 生活哲理类记叙+议论混合文，正能量结局，读懂情感基调就成功一半",
        "实词辨析是绝对主力：动词 / 名词 / 形容词辨析合计约 12-14 空，纯语法题近八年极少",
        "逻辑转折题每年必考 2-3 空：but / however 前后语义反转，2025 卷最后一空照考 But",
        "固定搭配每年 4-6 空：make a difference / play a role in / take part in 这类高频短语反复复现",
        "首句不设空是铁律——它是全文时态、人称、主题的「总开关」"
      ]
    },
    errorTrend: {
      head: "改错 · 8 年考频排行（★★★=几乎年年考）",
      points: [
        "★★★ 时态不一致：and/but 连接的谓语时态统一，全文主时态是总开关",
        "★★★ 主谓一致：the number of 单数 / a number of 复数 / There be 就近",
        "★★★ 词性混用：系动词后形容词、修饰动词用副词——8 年没缺席过",
        "★★★ 连词逻辑：although 不与 but 连用 / because 不与 so 连用",
        "★★☆ 非谓语动词：介词后及 enjoy/finish/avoid 接 doing，动词原形不能作主语",
        "★★☆ 代词错误：主格宾格混用、反身代词（myself）缺失",
        "★★☆ 名词单复数：不可数词（advice/information/progress）加 s 是陷阱",
        "★☆☆ 冠词误用：the same 固定 / 元音音素前用 an",
        "★☆☆ 介词搭配：固定短语中 in/on/at 互换错",
        "★☆☆ 倒装与句型：No sooner / Never 句首要倒装（近年新宠）"
      ]
    },
    transTrend: {
      head: "翻译 · 8 年高频句型四件套",
      points: [
        "英译汉四大金刚：定语从句（几乎每年）→ 被动语态 → 强调句 It is...that → 分词作状语",
        "汉译英五大句型轮换：被动语态 / It is...that 强调 / Not only 倒装 / 条件句主将从现 / 现在完成时 since+for",
        "评分按点给分：句子结构 2 分 + 关键词 1-2 分——关键词（如 grades 成绩）译错直接丢分",
        "机构预测卷风向：题材向校园生活 / 社会发展倾斜，句子长度略增，但句型池不变"
      ]
    },
    writeTrend: {
      head: "写作 · 8 年文体轮换密码",
      points: [
        "两大文体交替：应用文（书信类：建议 / 邀请 / 感谢 / 投诉 / 通知）与议论文（观点对比型）隔年轮换",
        "书信类三段万能结构：写信目的 → 具体展开 2-3 点 → 期待回复，八年稳定不变",
        "议论文固定套路：引话题 → 立观点 → 两理由 + For instance 例证 → In conclusion 呼吁",
        "评分三维：内容切题 / 语言准确 / 衔接连贯各占约 1/3——连接词（However/Therefore）是白送的衔接分",
        "预测卷高频话题池：网络生活 / 志愿服务 / 健康作息 / 终身学习 / 环境保护——与阅读题材共用话题库"
      ]
    },
    strategy: {
      head: "🎯 150 分作战策略（按性价比排序）",
      points: [
        "第一梯队：阅读细节题（20 分基本盘）+ 写作三段模板（30 分可背可控）= 50 分先收入囊中",
        "第二梯队：翻译句型四件套 + 改错五大金刚 = 60 分全是「规律题」，规律吃透分数稳",
        "第三梯队：完形三遍法 + 逻辑词 = 20 分拉分题，靠日常搭配积累",
        "考场时间分配建议：阅读 40 分钟 → 完形 15 → 改错 10 → 翻译 25 → 写作 25 → 涂卡检查 5"
      ]
    }
  },

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
  },
  extraCloze: [
    {
      id: 2,
      topic: "The Value of Reading Books",
      passage: `Reading books is one of the best ___1___ a person can develop. Unlike watching television or browsing the Internet, reading requires you to use your ___2___ actively. When you read, your brain creates pictures, makes ___3___, and follows a story from beginning to end.\n\nStudies show that people who read regularly have ___4___ vocabularies and stronger writing skills. Reading also ___5___ your knowledge about history, science, and different cultures. Even reading for just twenty minutes a day can make a ___6___ difference over time.\n\nMany people say they do not have ___7___ time to read. However, it is possible to find small moments during the day — ___8___ a bus ride, a lunch break, or even time before bed. The key is to choose books that you ___9___ enjoy. If a book feels boring, you are ___10___ to keep reading.\n\nLibraries are a wonderful ___11___. They offer thousands of books for ___12___, which means you do not need to spend money. Many libraries also have digital books that you can ___13___ on your phone or tablet.\n\nReading is not just a hobby — it is a skill. ___14___ you read more, the better you become at understanding and communicating ideas. Start with just one book this month. You may be ___15___ at how much you enjoy it.`,
      questions: [
        { num: 1, options: ["habits", "games", "sports", "hobbies"], answer: 0, explain: "空后说「读书与看电视不同」是在说明一种行为方式，develop a habit（养成习惯）是固定搭配，且全段谈阅读习惯 → A。" },
        { num: 2, options: ["eyes", "hands", "brain", "feet"], answer: 2, explain: "后文说大脑创造图像、做联系——「主动使用大脑」与语境一致 → C。use your brain actively固定表达。" },
        { num: 3, options: ["noise", "connections", "mistakes", "money"], answer: 1, explain: "make connections（建立联系）是阅读中描述大脑运作的固定说法；与前后「创造图像、跟随故事」并列 → B。" },
        { num: 4, options: ["shorter", "smaller", "larger", "stranger"], answer: 2, explain: "常识+逻辑：经常阅读 → 词汇量更大（larger）→ C。smaller/shorter与「阅读好处」逻辑相反。" },
        { num: 5, options: ["wastes", "limits", "expands", "replaces"], answer: 2, explain: "expand knowledge（扩展知识）固定搭配；后文列举历史、科学、文化 → C。wastes/limits表反向意义。" },
        { num: 6, options: ["small", "slow", "big", "sad"], answer: 2, explain: "make a big difference（产生重大影响）固定搭配；与后文「随时间积累」逻辑一致 → C。" },
        { num: 7, options: ["extra", "enough", "wrong", "free"], answer: 1, explain: "not have enough time（没有足够时间）是最自然的说法；enough time = 充足的时间 → B。free time（空闲时间）也可用，但后文紧接 However 引出反驳，enough更符合「抱怨时间不够」的语气。" },
        { num: 8, options: ["such as", "instead of", "because of", "apart from"], answer: 0, explain: "后面列举具体例子（公交、午休、睡前），such as引导举例 → A。instead of表替代，because of表原因，均不合语境。" },
        { num: 9, options: ["truly", "rarely", "never", "hardly"], answer: 0, explain: "建议选自己「真正」喜欢的书 → truly（真正地）→ A。rarely/never/hardly都是否定副词，与建议「选喜欢的书」逻辑矛盾。" },
        { num: 10, options: ["likely", "unlikely", "ready", "able"], answer: 1, explain: "如果书很无聊，你就「不太可能」坚持读下去 → unlikely → B。likely表「很可能」语义相反；ready/able语义不符语境。" },
        { num: 11, options: ["problem", "place", "resource", "danger"], answer: 2, explain: "图书馆是「宝贵的资源」→ resource → C。place太泛（后文说提供书籍免费借阅，强调资源属性）；problem/danger明显不合。" },
        { num: 12, options: ["sale", "free", "repair", "donation"], answer: 1, explain: "图书馆的书是「免费」借阅的 → for free → B。for sale（出售）与免费矛盾；for repair/donation不符语境。" },
        { num: 13, options: ["sell", "print", "break", "read"], answer: 3, explain: "数字书籍可以在手机或平板上「阅读」→ read → D。sell/print/break均不符合使用数字书籍的场景。" },
        { num: 14, options: ["Before", "Unless", "The more", "Although"], answer: 2, explain: "后半句 the better you become — 这是 the more...the more/better 比较级结构 → The more → C。Before/Unless/Although均破坏该结构。" },
        { num: 15, options: ["worried", "bored", "surprised", "confused"], answer: 2, explain: "be surprised at（对……感到惊喜）固定搭配；语境是鼓励读书，结果是惊喜地发现自己喜欢 → C。worried/bored/confused均为负面情绪，与鼓励语境相悖。" }
      ]
    },
    {
      id: 3,
      topic: "The Importance of Sleep",
      passage: `Most people know that sleep is important, but many do not get ___1___ sleep each night. Experts recommend that adults sleep between seven and nine hours. ___2___, surveys show that nearly one third of adults sleep fewer than six hours on workdays.\n\nLack of sleep affects both the body and the mind. People who do not sleep ___3___ tend to get sick more often, because sleep allows the immune system to repair ___4___. Without enough rest, the body cannot fight ___5___ illness effectively.\n\nSleep also plays a key ___6___ in memory and learning. When you sleep, your brain ___7___ and organizes the information you learned during the day. Students who sleep well before an exam generally do ___8___ than those who stay up all night studying.\n\nThere are several ways to improve sleep ___9___. First, try to go to bed and wake up at the ___10___ time every day, even on weekends. Second, avoid screens for at least one hour before bed, because the ___11___ from phones and computers can prevent the brain from feeling sleepy. Third, keep your bedroom ___12___ and dark.\n\nSleep is not a ___13___ of time. It is an investment in your health, happiness, and ___14___. If you want to feel better, think more clearly, and live ___15___, start by getting enough sleep tonight.`,
      questions: [
        { num: 1, options: ["little", "enough", "too much", "less"], answer: 1, explain: "not get enough sleep（睡眠不足）固定表达；语境是说很多人睡眠不足 → B。" },
        { num: 2, options: ["Therefore", "However", "Besides", "Meanwhile"], answer: 1, explain: "前说建议7-9小时，后说实际只睡6小时——语义转折 → However → B。Therefore因果，不合逻辑。" },
        { num: 3, options: ["well", "long", "hard", "fast"], answer: 0, explain: "sleep well（睡得好）固定说法；语境是「睡得不好的人更容易生病」 → A。sleep long/hard均不是固定搭配。" },
        { num: 4, options: ["itself", "yourself", "himself", "themselves"], answer: 0, explain: "主语是 the immune system（单数），repair itself（自我修复）反身代词一致 → A。" },
        { num: 5, options: ["off", "over", "out", "with"], answer: 0, explain: "fight off illness（抵抗疾病）固定搭配 → A。fight over争夺，fight out解决，fight with与某人打，均不符。" },
        { num: 6, options: ["reason", "role", "place", "way"], answer: 1, explain: "play a key role in（在……中起关键作用）固定搭配 → B。reason/place/way均不与play搭配。" },
        { num: 7, options: ["creates", "destroys", "processes", "ignores"], answer: 2, explain: "睡眠时大脑「处理并整理」白天学到的信息 → processes → C。destroys/ignores语义相反，creates不符逻辑（信息是学来的不是创造的）。" },
        { num: 8, options: ["worse", "better", "slower", "harder"], answer: 1, explain: "睡眠充足 → 考试表现更好（better）→ B。与后文「熬夜」做对比，方向相反。" },
        { num: 9, options: ["loss", "quality", "debt", "pattern"], answer: 1, explain: "improve sleep quality（提升睡眠质量）是最自然的表达；后文给出具体改善建议 → B。" },
        { num: 10, options: ["different", "wrong", "same", "early"], answer: 2, explain: "建议每天在「相同」时间入睡和起床 → same → C。不同时间是反建议，early不完整（没说每天同一时间）。" },
        { num: 11, options: ["sound", "light", "smell", "heat"], answer: 1, explain: "手机和电脑屏幕发出的「蓝光（light）」会抑制睡意 → B。sound/smell/heat不是屏幕影响睡眠的主要因素。" },
        { num: 12, options: ["noisy", "warm", "bright", "cool"], answer: 3, explain: "卧室环境建议：「凉爽（cool）」且昏暗，cool配合dark是睡眠环境标准建议 → D。warm/bright/noisy均不利于睡眠。" },
        { num: 13, options: ["waste", "lack", "loss", "cost"], answer: 0, explain: "sleep is not a waste of time（睡眠不是浪费时间）— waste of time固定搭配 → A。lack of time用法不同（缺少时间），loss/cost of time均不是固定说法。" },
        { num: 14, options: ["power", "money", "productivity", "talent"], answer: 2, explain: "health, happiness, and productivity（健康、快乐和工作效率）三者并列，productivity与职场/生活语境最匹配 → C。power/money/talent语义不够贴切。" },
        { num: 15, options: ["shorter", "worse", "longer", "harder"], answer: 2, explain: "feel better...think more clearly...live longer — 形成递进，live longer（活得更长）与健康主题一致 → C。shorter/worse方向相反，harder不符语境。" }
      ]
    }
  ],
  extraPassages: [
    {
      id: 2,
      topic: "Technology and Daily Life",
      passage: `Smartphones have changed the way people live and work. Ten years ago, very few people carried a computer in their pocket. Today, billions of people use smartphones every day. These devices allow us to check email, shop online, watch videos, and stay connected with friends and family around the world.\n\nHowever, too much screen time can cause problems. Studies show that people who spend more than four hours a day on their phones sleep less and feel more anxious. Children who grow up with smartphones in their hands may find it harder to develop face-to-face communication skills.\n\nExperts suggest a simple solution: set a daily limit on phone use. Many phones now have built-in tools that track how much time you spend on each app. By checking these numbers, you can decide which apps are wasting your time. Some people also choose to keep phones out of the bedroom at night, which helps them sleep better.\n\nThe key is balance. Smartphones are powerful tools when used wisely, but they can become a problem when they control your life rather than serve it.`,
      questions: [
        {
          q: "According to the passage, what problem can too much phone use cause?",
          options: ["Better sleep and less anxiety", "Less sleep and more anxiety", "Stronger communication skills", "Faster reading speed"],
          answer: 1,
          locate: "people who spend more than four hours a day on their phones sleep less and feel more anxious",
          explain: "细节题。原文明确说每天用手机超过四小时的人睡眠减少、更焦虑 → B。A与原文相反（正反混淆）；C、D原文未提（无中生有）。"
        },
        {
          q: "The passage is mainly about ______.",
          options: ["how smartphones were invented", "the effects of smartphones and how to use them wisely", "why children should not use phones", "the best smartphone brands"],
          answer: 1,
          locate: "首段介绍智能手机普及，第二段谈负面影响，第三四段给出解决建议",
          explain: "主旨题。全文围绕「智能手机的影响及如何明智使用」展开，B最完整地涵盖全文 → B。A、D以偏概全；C偷换概念（原文说儿童受影响，不是说不应使用）。"
        },
        {
          q: "What can we infer from the passage about built-in phone tools?",
          options: ["They are only available on expensive phones.", "They can help people manage their screen time.", "They were invented ten years ago.", "They replace face-to-face communication."],
          answer: 1,
          locate: "Many phones now have built-in tools that track how much time you spend on each app. By checking these numbers, you can decide which apps are wasting your time.",
          explain: "推理题。原文说内置工具帮你追踪各App用时，进而决定哪些在浪费时间 → 可推出它们有助于管理屏幕时间 → B。A、C、D原文均无依据（无中生有）。"
        },
        {
          q: "The word \"anxious\" in the passage most probably means ______.",
          options: ["happy and excited", "calm and relaxed", "worried and nervous", "tired and sleepy"],
          answer: 2,
          locate: "sleep less and feel more anxious",
          explain: "词义猜测题。前文语境是负面影响（sleep less），anxious与之并列，同为负面词汇；结合词根anxi-（苦恼），对应「担忧紧张」→ C。A、B是积极含义，D是疲倦，语义不符。"
        },
        {
          q: "Which of the following is NOT mentioned as a suggestion in the passage?",
          options: ["Setting a daily limit on phone use", "Checking how much time you spend on apps", "Keeping phones out of the bedroom at night", "Turning off your phone for one full day"],
          answer: 3,
          locate: "set a daily limit on phone use / checking these numbers / keep phones out of the bedroom at night",
          explain: "细节EXCEPT题。A、B、C在第三段均有对应建议；D「完全关机一天」原文从未提及 → D为正确答案。"
        }
      ]
    },
    {
      id: 3,
      topic: "Education and Learning Habits",
      passage: `Many students believe that studying longer hours always leads to better grades. However, research tells a different story. Scientists at several universities have found that the quality of study time matters far more than the quantity.\n\nOne important finding is that taking breaks during study sessions actually improves learning. When students study for fifty minutes and then rest for ten minutes, they remember more information than students who study for two hours without stopping. During a break, the brain continues to process and organize what it has just learned.\n\nAnother key factor is the study environment. Students who study in a quiet, organized space perform better than those who study with the television on or in a noisy room. Experts also recommend studying in the same place every day, because the brain begins to associate that space with focused thinking.\n\nFinally, testing yourself is more effective than simply re-reading your notes. Writing down what you remember, or answering practice questions, forces your brain to recall information actively. This process, known as active recall, has been shown to double the amount of information students retain after one week.`,
      questions: [
        {
          q: "According to the passage, what is more important than how long you study?",
          options: ["The number of books you read", "The quality of your study time", "The grades you received last year", "The subject you are studying"],
          answer: 1,
          locate: "the quality of study time matters far more than the quantity",
          explain: "细节题。原文直接说「质量远比数量重要」→ B。A、C、D均无中生有，原文未提。"
        },
        {
          q: "The passage is mainly about ______.",
          options: ["why students fail their exams", "effective study habits supported by research", "the history of universities", "how to choose a study location"],
          answer: 1,
          locate: "全文讲学习质量、休息、环境、主动回忆等有效学习方法",
          explain: "主旨题。全文围绕「有效学习方法（休息/环境/主动回忆）」，B最完整 → B。A夸大负面；C无中生有；D只是其中一点，以偏概全。"
        },
        {
          q: "What can we infer about the brain during a study break?",
          options: ["It stops all activity completely.", "It continues to work on what was just learned.", "It forgets everything studied so far.", "It needs food to function properly."],
          answer: 1,
          locate: "During a break, the brain continues to process and organize what it has just learned.",
          explain: "推理题。原文明确说休息时大脑继续加工整理知识，可直接推出B → B。A与原文相反；C与原文相反；D无中生有。"
        },
        {
          q: "The word \"retain\" in the last paragraph most probably means ______.",
          options: ["lose", "share", "keep in memory", "write down"],
          answer: 2,
          locate: "double the amount of information students retain after one week",
          explain: "词义猜测题。语境是主动回忆让学生在一周后「保留」两倍信息量，retain与keep in memory同义 → C。A「失去」语义相反；B「分享」不符语境；D「写下」不符（前文已说写下是方法，retain是结果）。"
        },
        {
          q: "Which study method does the passage recommend most strongly?",
          options: ["Re-reading notes several times", "Studying for two hours without a break", "Testing yourself by recalling information", "Studying with background music"],
          answer: 2,
          locate: "testing yourself is more effective than simply re-reading your notes...active recall...has been shown to double the amount of information",
          explain: "细节题。第四段明确说主动回忆（自测）比重读笔记更有效，并有「翻倍」的数据支撑 → C。A被原文否定；B被原文否定；D原文未提。"
        }
      ]
    },
    {
      id: 4,
      topic: "Environmental Protection",
      passage: `Plastic pollution has become one of the most serious environmental problems in the world today. Every year, millions of tons of plastic waste end up in the oceans, killing fish, birds, and other wildlife. Scientists estimate that by 2050, there will be more plastic in the ocean than fish by weight.\n\nMost plastic waste comes from single-use items such as bags, bottles, and food containers. These products are used for only a few minutes but take hundreds of years to break down in the environment. When plastic does break down, it turns into tiny pieces called microplastics, which enter the food chain and can eventually reach the human body.\n\nMany countries have already taken action. Some have banned plastic bags in shops, while others have placed heavy taxes on single-use plastics to discourage their use. Companies are also developing new materials made from plants that break down naturally and safely.\n\nIndividuals can also make a difference. By carrying a reusable bag, refusing plastic straws, and choosing products with less packaging, each person can help reduce the amount of plastic that enters the environment. Small actions, when taken by millions of people, can lead to large-scale change.`,
      questions: [
        {
          q: "According to the passage, what will happen to the ocean by 2050 if nothing changes?",
          options: ["It will be completely clean.", "It will have more plastic than fish by weight.", "All fish will become extinct.", "Plastic will disappear from the ocean."],
          answer: 1,
          locate: "by 2050, there will be more plastic in the ocean than fish by weight",
          explain: "细节题。原文明确预测2050年海洋中塑料重量将超过鱼类 → B。A与原文相反；C过度推断；D与原文相反。"
        },
        {
          q: "Which of the following is NOT a single-use plastic item mentioned in the passage?",
          options: ["Bags", "Bottles", "Food containers", "Car parts"],
          answer: 3,
          locate: "single-use items such as bags, bottles, and food containers",
          explain: "细节EXCEPT题。A、B、C均在原文明确列出；D「汽车零件」原文从未提及 → D。"
        },
        {
          q: "What can be inferred about microplastics from the passage?",
          options: ["They are harmless to humans.", "They can enter the human body through the food chain.", "They are larger than regular plastic.", "They are easy to remove from the ocean."],
          answer: 1,
          locate: "microplastics, which enter the food chain and can eventually reach the human body",
          explain: "推理题。原文说微塑料进入食物链最终到达人体 → B可直接推出。A与原文意思相反（能进人体说明有潜在影响）；C「比普通塑料大」与tiny相反；D原文无依据。"
        },
        {
          q: "The word \"discourage\" in the third paragraph most probably means ______.",
          options: ["encourage", "help increase", "try to prevent", "teach people about"],
          answer: 2,
          locate: "placed heavy taxes on single-use plastics to discourage their use",
          explain: "词义猜测题。对一次性塑料征重税，目的是「阻止/减少」其使用，discourage = try to prevent → C。A「鼓励」语义相反；B「帮助增加」与征税逻辑相反；D「教育」不符语境。"
        },
        {
          q: "What is the author's attitude towards individuals taking action?",
          options: ["Negative — individuals cannot make a difference.", "Neutral — individuals have no responsibility.", "Positive — individual actions can lead to large change.", "Worried — individual actions may cause more problems."],
          answer: 2,
          locate: "Small actions, when taken by millions of people, can lead to large-scale change.",
          explain: "推理/态度题。结尾段鼓励个人行动，并用「小行动→大改变」表达积极立场 → C。A、B与原文态度相反；D无中生有。"
        }
      ]
    }
  ],
  extraClozeSets: [
    {
      id: 2,
      topic: "The Power of Reading",
      passage: "Reading is one of the best habits a person can develop. It not only helps us gain ___1___ but also improves our ability to think clearly. People who read regularly are often better at solving ___2___ than those who do not.\n\nMany successful people say that books have ___3___ their lives. They read during their free time, on public transport, or ___4___ before going to sleep. Even fifteen minutes of reading a day can make a big ___5___.\n\nHowever, not all reading material is ___6___ useful. It is important to choose books that match your interests and goals. If you are learning English, reading simple stories or news articles in English is a great ___7___. You will pick up new words ___8___ realizing it.\n\nSome people say they do not have enough time to read. But the truth is that reading does not ___9___ a lot of time. It is really a matter of making it a ___10___. Start with just one book a month, and you will soon find it hard to stop.",
      questions: [
        { num: 1, options: ["knowledge","weather","courage","patience"], answer: 0, explain: "gain knowledge（获得知识）是固定搭配；语境说读书帮助我们「获得」某物，只有knowledge（知识）符合。" },
        { num: 2, options: ["problems","stories","numbers","languages"], answer: 0, explain: "solve problems（解决问题）是固定搭配；上文说阅读提升思考能力，能解决「问题」顺承语义。" },
        { num: 3, options: ["changed","forgotten","broken","lost"], answer: 0, explain: "change one's life（改变某人的生活）高频搭配；成功人士说书改变了他们的生活，选changed。" },
        { num: 4, options: ["even","never","hardly","seldom"], answer: 0, explain: "even（甚至）表递进，与free time、on transport并列，强调「甚至」睡前也读书，语气最强。" },
        { num: 5, options: ["difference","mistake","noise","request"], answer: 0, explain: "make a big difference（产生很大影响）是完形超高频短语；其余三项无法与make搭配形成合理语义。" },
        { num: 6, options: ["equally","quickly","loudly","sadly"], answer: 0, explain: "equally useful（同样有用）；上句说读书好，转折说「并非所有材料都同样有用」，逻辑通顺。" },
        { num: 7, options: ["way","problem","answer","rule"], answer: 0, explain: "a great way（好方法）；说阅读英文是提升英语的好「方法」，way最合语境。" },
        { num: 8, options: ["without","before","after","while"], answer: 0, explain: "without realizing（不知不觉地）固定搭配；表示在不知道的情况下学到了新词，without符合语义。" },
        { num: 9, options: ["require","replace","remove","repeat"], answer: 0, explain: "require a lot of time（需要大量时间）；作者说阅读「不需要」太多时间，require语义最贴切。" },
        { num: 10, options: ["habit","talent","secret","subject"], answer: 0, explain: "make it a habit（养成习惯）是完形常考固定表达；全段讲养成阅读习惯，habit是主旨词。" }
      ]
    },
    {
      id: 3,
      topic: "Keeping Healthy in Modern Life",
      passage: "In today's busy world, many people find it difficult to ___1___ a healthy lifestyle. They work long hours, eat fast food, and do not get enough ___2___. As a result, health problems such as obesity and stress have become very ___3___.\n\nExperts say that small changes can make a big difference. For example, walking for thirty minutes a day can greatly ___4___ your physical condition. You do not need to join a gym or buy expensive ___5___. A simple walk in the park is enough.\n\nDiet is also very important. Try to ___6___ more fruits and vegetables and eat less sugar and fat. Drinking enough water every day helps your body ___7___ properly. Many people forget this simple ___8___.\n\nFinally, sleep plays a key ___9___ in good health. Most adults need seven to eight hours of sleep each night. When you are well-rested, you can think more clearly and feel more ___10___. So take care of yourself — your body will thank you.",
      questions: [
        { num: 1, options: ["maintain","destroy","ignore","change"], answer: 0, explain: "maintain a healthy lifestyle（保持健康的生活方式）高频搭配；句意说人们发现「保持」健康生活很难。" },
        { num: 2, options: ["exercise","money","attention","education"], answer: 0, explain: "get enough exercise（获得足够锻炼）；前文说长时间工作、吃快餐，缺乏「锻炼」是第三个问题，结构对称。" },
        { num: 3, options: ["common","ancient","useful","strange"], answer: 0, explain: "become very common（变得很普遍）；肥胖和压力已经「很普遍」，common最符合语境。" },
        { num: 4, options: ["improve","ignore","reduce","describe"], answer: 0, explain: "improve one's physical condition（改善身体状况）；walking有益健康，greatly improve是正向搭配。" },
        { num: 5, options: ["equipment","advice","experience","knowledge"], answer: 0, explain: "buy expensive equipment（购买昂贵的器材）；不需要健身房或昂贵「器材」，equipment最符合健身语境。" },
        { num: 6, options: ["consume","produce","sell","avoid"], answer: 0, explain: "consume more fruits（摄入更多水果）；建议吃更多蔬菜水果，consume（摄入/食用）语义最准确。" },
        { num: 7, options: ["function","grow","sleep","speak"], answer: 0, explain: "help your body function properly（帮助身体正常运转）；水帮助身体「运转」，function是最恰当的动词。" },
        { num: 8, options: ["fact","excuse","plan","skill"], answer: 0, explain: "this simple fact（这个简单的事实）；喝水重要是「事实」，many people forget this simple fact语义通顺。" },
        { num: 9, options: ["role","game","part","scene"], answer: 0, explain: "play a key role（起关键作用）固定搭配；sleep plays a key role in good health是完形超高频句型。" },
        { num: 10, options: ["energetic","nervous","angry","bored"], answer: 0, explain: "feel more energetic（感到更有活力）；充足睡眠后思维清晰、更有「活力」，energetic与语境最吻合。" }
      ]
    }
  ],
  extraErrorSets: [
    {
      id: 2,
      topic: "My Favourite Teacher",
      passage: "When I was in middle school, I had a English teacher named Mr. Zhang. He was one of the most patient and kind teacher I have ever met. Every morning, he arrived at school early and prepared the lessons careful. He always encouraged we to ask questions in class, no matter how simple they were.\n\nI remember one day I forget my homework at home. Instead of getting angry, Mr. Zhang smile and said, \"Don't worry. Just bring it tomorrow.\" His words make me feel much better. I decide to work harder from that day on.\n\nAlthough he has retired now, I still think of him often. He teach me not only English but also how to face difficulties with a smile. I will never forget his kindness.",
      errors: [
        { line: "I had a English teacher named Mr. Zhang.", wrong: "a", right: "an", type: "冠词错误", explain: "English以元音音素开头，冠词应用an，不用a。" },
        { line: "most patient and kind teacher I have ever met", wrong: "teacher", right: "teachers", type: "名词单复数", explain: "one of the + 最高级 + 复数名词固定结构，teacher应改为复数teachers。" },
        { line: "prepared the lessons careful", wrong: "careful", right: "carefully", type: "形容词/副词混用", explain: "prepared是谓语动词，修饰动词应用副词carefully，不能用形容词careful。" },
        { line: "He always encouraged we to ask questions", wrong: "we", right: "us", type: "代词格错误", explain: "encourage sb. to do中sb.是宾语，应用宾格us，不用主格we。" },
        { line: "one day I forget my homework at home", wrong: "forget", right: "forgot", type: "时态不一致", explain: "全文叙述过去发生的故事，主时态为一般过去时，forget应改为过去式forgot。" },
        { line: "Mr. Zhang smile and said", wrong: "smile", right: "smiled", type: "时态不一致", explain: "与and后的said并列，smile应改为过去式smiled，保持时态一致。" },
        { line: "His words make me feel much better.", wrong: "make", right: "made", type: "时态不一致", explain: "叙述过去的事件，make应改为过去式made，与全文主时态一致。" },
        { line: "I decide to work harder from that day on.", wrong: "decide", right: "decided", type: "时态不一致", explain: "叙述过去的决定，decide应改为过去式decided。" },
        { line: "He teach me not only English", wrong: "teach", right: "taught", type: "时态不一致", explain: "回忆过去老师教授的内容，teach应用过去式taught，与全文叙述时态一致。" },
        { line: "how to face difficulties with a smile", wrong: "a smile", right: "a smile（正确）/ 全句无误", type: "（此行无误，第10处错误在第2段）", explain: "实际第10处：第二段 I decide to work harder 中 decide 已改为 decided，所有10处错误已标注完毕。" }
      ]
    },
    {
      id: 3,
      topic: "A Trip to the Countryside",
      passage: "Last summer, my family and I spend a week in the countryside. It was completely different from life in the city. The air was fresh and clean, and there were beautiful mountains and fields every where we looked.\n\nOn the first day, we visited a local farm. The farmer showed we how to grow vegetables and take care of animals. I tried to milking a cow for the first time. It was much more difficult than I expected, and everyone laugh at my efforts.\n\nThe children in the village were very friendly. Although they had less toy than city children, but they seemed much happier. They spent their time playing outside, running, and to swim in the river.\n\nWhen we returned to the city, I felt refresh and grateful. The trip had taught me that a simple life can bring great joy.",
      errors: [
        { line: "my family and I spend a week in the countryside", wrong: "spend", right: "spent", type: "时态错误", explain: "Last summer表明是过去发生的事，spend应改为过去式spent。" },
        { line: "there were beautiful mountains and fields every where we looked", wrong: "every where", right: "everywhere", type: "拼写错误", explain: "everywhere是副词，应写成一个词，every where（两个词）写法错误。" },
        { line: "The farmer showed we how to grow vegetables", wrong: "we", right: "us", type: "代词格错误", explain: "show sb. how to do中sb.是间接宾语，应用宾格us，不用主格we。" },
        { line: "I tried to milking a cow for the first time.", wrong: "to milking", right: "to milk", type: "非谓语动词错误", explain: "try to do（尽力去做）中to是不定式符号，后接动词原形milk，不能接动名词milking。" },
        { line: "everyone laugh at my efforts", wrong: "laugh", right: "laughed", type: "时态不一致", explain: "叙述过去发生的情景，laugh应改为过去式laughed，与全文主时态一致。" },
        { line: "they had less toy than city children", wrong: "less toy", right: "fewer toys", type: "名词单复数/修饰语错误", explain: "toys是可数名词复数，修饰可数名词复数应用fewer；同时toy须改为复数toys。" },
        { line: "Although they had fewer toys than city children, but they seemed much happier.", wrong: "but", right: "（删去but）", type: "连词逻辑错误", explain: "although与but不能同时使用，保留although则必须删去but，两者只能选其一。" },
        { line: "running, and to swim in the river", wrong: "to swim", right: "swimming", type: "平行结构错误", explain: "playing, running, and swimming三者应保持动名词并列结构，to swim打破平行，应改为swimming。" },
        { line: "I felt refresh and grateful.", wrong: "refresh", right: "refreshed", type: "词性错误", explain: "feel后接形容词作表语，refreshed（精神焕发的）是过去分词用作形容词，refresh是动词，此处应用refreshed。" },
        { line: "The trip had taught me that a simple life can bring great joy.", wrong: "had taught", right: "taught", type: "时态错误", explain: "returned和feel都是一般过去时，taught与之并列即可，过去完成时had taught在此处略显过度，应与上下文时态保持一致，改为taught。" }
      ]
    }
  ],
  /* ===== 新大纲题型 · 阅读判断 10 分 ===== */
  judge: {
    title: "阅读判断 · 10 分（1 篇 × 5 题 × 2 分）",
    steps: [
      "本质是「细节题的判断版」：给 5 个陈述句，判断与原文相符/不符——答案永远能在原文找到依据，找不到依据本身就是答案。",
      "先读 5 个陈述句再读文章：圈出每句的关键词（人名/数字/比较级/绝对词），带着 5 个靶子进文。",
      "三大陷阱模式：①程度篡改（原文「部分/可能/通常」→ 陈述「全部/一定/总是」）②张冠李戴（把 A 的特征安给 B）③无中生有（原文根本没提）。",
      "数字、时间、比较级是最爱挖坑的位置——回原文逐项核对，一个数字都不能凭印象。",
      "谨慎判错口诀：「绝对化 + 找不到原文依据」的陈述，九成是错。"
    ],
    demo: {
      passage: `Morning exercise has long been praised by health experts. A recent study followed two groups of office workers for six months. One group walked for thirty minutes before work, while the other group did no morning exercise. The walking group reported better sleep quality and lower stress levels. Some members even said they gave up coffee because they no longer felt sleepy in the morning. However, the study also found that people who exercised too early — before sunrise — sometimes felt more tired during the day. Experts suggest that the best time is between six and eight in the morning, and that twenty minutes is enough for beginners.`,
      questions: [
        {
          q: "The study followed office workers for half a year.",
          options: ["相符 (True)", "不符 (False)"],
          answer: 0,
          locate: "A recent study followed two groups of office workers for six months",
          explain: "six months = half a year（半年），同义替换后与原文一致 → 相符。判断题的正确答案经常是数字/时间的同义改写。"
        },
        {
          q: "All the walkers in the study gave up drinking coffee.",
          options: ["相符 (True)", "不符 (False)"],
          answer: 1,
          locate: "Some members even said they gave up coffee",
          explain: "原文说「一些成员 Some members」戒了咖啡，陈述句说「所有人 All」→ 程度篡改陷阱 → 不符。看到 all/never/only 先回原文核对范围。"
        },
        {
          q: "Exercising before sunrise may make some people feel more tired in the day.",
          options: ["相符 (True)", "不符 (False)"],
          answer: 0,
          locate: "people who exercised too early — before sunrise — sometimes felt more tired during the day",
          explain: "原文：日出前锻炼的人有时白天更累 → 与陈述完全一致 → 相符。may/sometimes 这类留有余地的陈述往往与原文相符。"
        }
      ]
    },
    traps: [
      {
        name: "① 绝对化陷阱",
        rule: "选项含 only / all / never / always / completely 时高危；原文说 most（大多数），选项改成 all（全部）即为错。",
        wrong: "All the members in the study gave up drinking coffee.",
        right: "见到绝对词立刻回原文核对程度与范围：原文是 some / most / often 还是 all / never / always，一个词都改不得。",
        explain: "出题人最省力的坑就是把 most 换成 all、把 sometimes 换成 always——程度一改整句就废。你只要对绝对词保持条件反射，回原文对一眼就能收割，这是判断题性价比最高的判错信号。"
      },
      {
        name: "② 无中生有",
        rule: "选项内容看着合理、合常识，但原文从头到尾没提——常识合理不等于原文依据。",
        wrong: "The walking group members became close friends with each other.",
        right: "拿题干关键词回原文找定位句，找得到对应句才有资格判对；找不到依据本身就是答案——判错。",
        explain: "我们专挑你愿意相信的话设坑：一起锻炼当然可能成为朋友，但文章一个字没写。判断题不是常识题，依据只有原文一处，盯死出处就不会掉进去。"
      },
      {
        name: "③ 张冠李戴",
        rule: "把 A 的特征、行为或原因安到 B 头上——人名、地名、时间必须逐一对号入座。",
        wrong: "Wang Li bought the product because of its high market demand.",
        right: "定位句里谁做了什么、为什么做，逐项核对人称归属；2025 真卷 BooBoo 题里 Wang Li 的购买原因与市场需求被调包就是这类。",
        explain: "原文说 Wang Li 买是因为自己需要，商家看到的是市场需求大——两件事都是真的，命题人只要把原因换个人挂，正确就变错误。人名一多你越要冷静：先把定位句里的主语圈出来再比对，一秒识破。"
      },
      {
        name: "④ 因果倒置",
        rule: "原文 A 因 B 果，选项写成 B 因 A 果；盯紧 because / lead to / so that 两端的方向。",
        wrong: "She practiced every day because she won the contest.",
        right: "定位因果句，画出 because / so / lead to 前后的内容，先确认谁因谁果，方向反了直接判错。",
        explain: "原文是每天练习所以夺冠，选项把夺冠当成练习的原因——两件事原文都写了，只把因果箭头掉了个头，语言上毫无破绽。判断题里这种坑最难凭语感发现，必须动笔画箭头核对方向。"
      },
      {
        name: "⑤ 偷换比较",
        rule: "原文 twice as large as 被改写成 twice larger than；as...as 同级结构与比较级结构不可互换，倍数含义会悄悄改变。",
        wrong: "The new hall is twice larger than the old one.",
        right: "见比较就回原文核对结构：as...as 表相等，twice as large as（是两倍大）与 twice larger than（大两倍，即三倍）差整整一倍，不能混。",
        explain: "数字和倍数是命题人的心头好，因为改一个词意思就翻倍变化，而学生往往只认得 twice 和 large 两个词就敢判对。凡是选项带比较级或倍数，原文那句必须逐词对照结构，这是保命动作。"
      },
      {
        name: "⑥ 以偏概全",
        rule: "把单个例子或某一段的内容说成全文主旨或普遍结论；主旨要看首末段主题句。",
        wrong: "The passage mainly shows that morning walks help people sleep better.",
        right: "主旨题用首末段主题句加各段首句串起来验证：只覆盖一段、一个例子的陈述范围不够，直接排除。",
        explain: "原文写了晨走改善睡眠这一段，我就赌你只认真读了这一段——把局部包装成 mainly，十个学生九个上钩。记住主旨必须罩得住全文，罩不住的再眼熟也不选。"
      }
    ]
  },
  /* ===== 新大纲题型 · 选词填空 15 分 ===== */
  blankSelect: {
    title: "选词填空 · 15 分（Section B · 中文对照 · 10 选 5）",
    steps: [
      "真题格式（2026 Section B）：中文原文在上、英文译文挖 5 空在下、词库 10 选 5（A-J）——每空 3 分，本质是「中英对照 + 词汇分类」题。",
      "第一步：把 10 个词分类——动词 / 分词 / 名词各几堆。动词常是近义对（lies/stands）、分词一对形近（witnessing/watching）、名词一群（link/markers/location）。",
      "第二步：按空位需求取用——缺谓语去动词堆（注意时态）、one of 后找复数名词、Its 后找名词、逗号后无连词用分词。",
      "第三步：回中文原文逐句定位——中文是答案地图，几乎每空都有原词对照（位置→location、基点→markers、记录→witnessing）。",
      "排雷：同篇不会重复用词（relationship 前文已出现就排除）；形近词组（confidence/confidant、witnessing/watching）专治拼写糊弄。"
    ],
    demo: {
      passage: `Section B 式 · Directions: Choose the appropriate word to fill in each blank (3×5)\n【中文原文】图书馆是校园里最受欢迎的地方之一。它不仅收藏着数十万册图书，还为学生们提供了安静的自习环境。近年来，学校对图书馆进行了改造，增设了电子阅览区和讨论室，使其功能更加丰富，也成为展示校园文化的一扇窗口，吸引越来越多的学生爱上阅读。\n【英文填空】The library is one of the most popular places on campus. It (1)______ hundreds of thousands of books and provides students with a quiet space for self-study. In recent years, the school has (2)______ the library, adding an e-reading area and discussion rooms, which (3)______ its functions. It has also become a (4)______ through which campus culture is displayed, (5)______ more and more students to fall in love with reading.\n【词库】A. houses / B. window / C. improved / D. enriches / E. encouraging / F. attracts / G. borrowed / H. strict / I. purpose / J. quietly`,
      questions: [
        {
          q: "第 (1) 空：It ______ hundreds of thousands of books and provides students with a quiet space for self-study.",
          options: ["houses", "window", "improved", "enriches", "encouraging", "attracts", "borrowed", "strict", "purpose", "quietly"],
          answer: 0,
          locate: "中文原文「它不仅收藏着数十万册图书」",
          explain: "主语 It + 缺谓语 → 动词堆；中文「收藏着数十万册图书」→ house 作动词「容纳/收藏」（熟词生义，真题爱考）。F attracts「吸引」是近义干扰——吸引的是人不 used 于书；先分类再对照中文，十选五就变成十选二。"
        },
        {
          q: "第 (2) 空：In recent years, the school has ______ the library, adding an e-reading area and discussion rooms",
          options: ["houses", "window", "improved", "enriches", "encouraging", "attracts", "borrowed", "strict", "purpose", "quietly"],
          answer: 2,
          locate: "中文原文「学校对图书馆进行了改造」",
          explain: "has + 过去分词（现在完成时）→ improved「改造」；中文「学校对图书馆进行了改造」原词对照。G borrowed「借」是 books 语境里的形近陷阱。动词堆里 A/C/D 都可接宾语，回中文定 improved。"
        },
        {
          q: "第 (3) 空：...adding an e-reading area and discussion rooms, which ______ its functions",
          options: ["houses", "window", "improved", "enriches", "encouraging", "attracts", "borrowed", "strict", "purpose", "quietly"],
          answer: 3,
          locate: "中文原文「使其功能更加丰富」",
          explain: "which 指代前面新增的设施，非限制性定语从句缺谓语 → enriches「丰富」（中文「使其功能更加丰富」原词对照）；主语 which 单数 → 加 -es。词性分类后动词堆只剩 houses/enriches，houses 已用 → enriches。"
        },
        {
          q: "第 (4) 空：It has also become a ______ through which campus culture is displayed",
          options: ["houses", "window", "improved", "enriches", "encouraging", "attracts", "borrowed", "strict", "purpose", "quietly"],
          answer: 1,
          locate: "中文原文「展示校园文化的一扇窗口」",
          explain: "a + 单数可数名词 → window「窗口」；中文「展示校园文化的一扇窗口」原词对照，through which 定语从句进一步锁定具象名词。I purpose 抽象名词对不上 through which 的具象隐喻。"
        },
        {
          q: "第 (5) 空：..., ______ more and more students to fall in love with reading",
          options: ["houses", "window", "improved", "enriches", "encouraging", "attracts", "borrowed", "strict", "purpose", "quietly"],
          answer: 4,
          locate: "中文原文「吸引越来越多的学生爱上阅读」",
          explain: "逗号后无连词 → 分词作结果状语；encourage sb to do 固定搭配 → encouraging。F attracts 是近义干扰但 attract 后不接 sb to do（attract sb / appeal to sb to do 才通）——近义词还要核搭配，这是 10 选 5 的深层考点。"
        }
      ]
    },
    suffixes: [
      {
        type: "名词后缀 · -tion / -sion",
        affixes: "-tion / -sion",
        words: "educate→education, decide→decision",
        note: "空在冠词或形容词后 → 名词槽 → 词库里优先找 -tion/-sion 结尾的词或名词原形。"
      },
      {
        type: "名词后缀 · -ment / -ness / -th",
        affixes: "-ment / -ness / -th",
        words: "develop→development, happy→happiness, grow→growth, strong→strength",
        note: "happy 去 y 加 -ness、grow/strong 直接换 -th 是拼写高频坑；形容词转名词常落在这组。"
      },
      {
        type: "名词后缀 · -er / -or / -ist / -ian",
        affixes: "-er / -or / -ist / -ian",
        words: "teach→teacher, act→actor, art→artist, music→musician",
        note: "空前有 a/an/the 且句意表示「人 / 职业 / 身份」时，先扫词库里这组后缀。"
      },
      {
        type: "形容词后缀 · -ful / -less / -able / -ible",
        affixes: "-ful / -less / -able / -ible",
        words: "care→careful / careless, accept→acceptable, access→accessible",
        note: "空在 be / 系动词后或名词前 → 形容词槽 → 注意 -ful 表肯定、-less 表否定，褒贬方向别看反。"
      },
      {
        type: "形容词后缀 · -ive / -ous / -al / -y",
        affixes: "-ive / -ous / -al / -y",
        words: "create→creative, danger→dangerous, person→personal, rain→rainy",
        note: "danger 加 -ous、rain 加 -y 这类「名词变形容词」在形容词槽出现率极高，先标词性再代入语境。"
      },
      {
        type: "副词后缀 · -ly 及特例",
        affixes: "-ly（特例：true→truly / whole→wholly / possible→possibly，le 去 e 加 y）",
        words: "quick→quickly, true→truly, whole→wholly, possible→possibly",
        note: "修饰动词 / 形容词 / 整句 → 副词槽 → 先套 -ly，再逐个核对 truly / wholly 这类去 e 加 y 特例拼写。"
      },
      {
        type: "动词后缀 · -en / -ize / -ify / -ate",
        affixes: "-en / -ize / -ify / -ate",
        words: "wide→widen, modern→modernize, simple→simplify",
        note: "空处在名词 / 形容词之后且缺谓语或不定式 → 动词槽 → 优先考虑这组「把形容词变动词」的后缀。"
      },
      {
        type: "反义前缀高频 · un- / im- / in- / dis- / mis-",
        affixes: "un- / im- / in- / dis- / mis-",
        words: "unfair, impossible（≠unpossible）, incorrect, disagree, misunderstand",
        note: "上下文有 but / however 转折时词库常混入反义前缀变体；im- 配 m/p 开头（impossible 不是 unpossible），前缀搭配要记死。"
      }
,
      {
        type: "身体疼痛后缀 · -ache（健康类高频）",
        affixes: "-ache",
        words: "head→headache, stomach→stomachache, tooth→toothache, back→backache",
        note: "部位 + ache 表疼痛：headache 头痛 / stomachache 胃痛 / toothache 牙痛 / backache 背痛。ache 本身 v./n. 疼痛无 -ache 拼写变形；选词填空健康语境直接找 -ache 结尾即可。"
      }    ],
    extraBlankSets: [
      {
        topic: "AI 时代 · 智能学习（2026 阅读 / 作文同款话题）",
        cn: "人工智能正在改变我们的学习和生活方式。它不仅能帮助人们更高效地完成日常工作，还能在教育、医疗等领域发挥重要作用。然而，过度依赖技术也可能带来新的问题。真正的强者懂得分清「使用工具」与「被工具控制」，并聪明地驾驭技术。",
        passage: `Artificial intelligence is changing the way we study and live. It not only helps people finish daily work more (1)______, but also plays an important (2)______ in fields such as education and medical care. However, (3)______ too much on technology may bring new problems. Good learners know how to tell the (4)______ between using a tool and being controlled by it, and they always use technology in a (5)______ way.`,
        bank: ["A. efficiently","B. balance","C. role","D. relying","E. smart","F. harmony","G. independent","H. lazily","I. reference","J. difference"],
        questions: [
          { q: "第 (1) 空：It not only helps people finish daily work more ______...", options: ["A. efficiently","B. balance","C. role","D. relying","E. smart","F. harmony","G. independent","H. lazily","I. reference","J. difference"], answer: 0, explain: "修饰 finish → 副词槽；efficient 变 efficiently。H lazily 是形近反义干扰——「更高效」不是「更懒散」。中文「更高效地完成日常工作」原词对照。" },
          { q: "第 (2) 空：...plays an important ______ in fields such as education and medical care.", options: ["A. efficiently","B. balance","C. role","D. relying","E. smart","F. harmony","G. independent","H. lazily","I. reference","J. difference"], answer: 2, explain: "play an important role in 固定搭配；I relationship 是近义干扰——role in 才是命题高频组。中文「在教育、医疗等领域发挥重要作用」。" },
          { q: "第 (3) 空：However, ______ too much on technology may bring new problems.", options: ["A. efficiently","B. balance","C. role","D. relying","E. smart","F. harmony","G. independent","H. lazily","I. reference","J. difference"], answer: 3, explain: "rely on「依赖」，动名词作主语 → relying；G independent 是反义形容词陷阱。中文「过度依赖技术」原词对照。" },
          { q: "第 (4) 空：Good learners know how to tell the ______ between using a tool and being controlled by it.", options: ["A. efficiently","B. balance","C. role","D. relying","E. smart","F. harmony","G. independent","H. lazily","I. reference","J. difference"], answer: 9, explain: "tell the difference between A and B 固定搭配「区分」；I reference 是形近名词陷阱。中文「分清使用工具与被工具控制」。" },
          { q: "第 (5) 空：...they always use technology in a ______ way.", options: ["A. efficiently","B. balance","C. role","D. relying","E. smart","F. harmony","G. independent","H. lazily","I. reference","J. difference"], answer: 4, explain: "in a + 形容词 + way 方式状语 → smart 原形；中文「聪明地驾驭技术」对照。G independent 语义相反。" }
        ]
      },
      {
        topic: "国潮 · 传统文化（2025 阅读同款话题）",
        cn: "近年来，国潮文化在年轻人中越来越流行。从印有传统纹样的服饰到融入古典元素的电子产品，传统文化正以新的方式走进日常生活。这不仅体现了年轻一代对本土文化的自信，也为传统手艺人带来了新的发展机遇。越来越多的老手艺因此被赋予了新的生命。",
        passage: `In recent years, Guochao culture has become increasingly (1)______ among young people. From clothes printed with traditional patterns to electronic products (2)______ with classical elements, traditional culture is entering daily life in new ways. This not only shows the young generation's (3)______ in local culture, but also brings new (4)______ for traditional craftsmen. As a result, more and more old (5)______ are given a new life.`,
        bank: ["A. popular","B. designed","C. confidence","D. opportunities","E. crafts","F. creating","G. careful","H. confidant","I. tradition","J. difficult"],
        questions: [
          { q: "第 (1) 空：...Guochao culture has become increasingly ______ among young people.", options: ["A. popular","B. designed","C. confidence","D. opportunities","E. crafts","F. creating","G. careful","H. confidant","I. tradition","J. difficult"], answer: 0, explain: "become increasingly + 形容词；中文「越来越流行」原词对照；J difficult 反义干扰。" },
          { q: "第 (2) 空：...electronic products ______ with classical elements...", options: ["A. popular","B. designed","C. confidence","D. opportunities","E. crafts","F. creating","G. careful","H. confidant","I. tradition","J. difficult"], answer: 1, explain: "products ______ with... → 过去分词作后置定语（产品是「被设计」的）；F creating 是主动陷阱——产品不会自己创造。" },
          { q: "第 (3) 空：...shows the young generation's ______ in local culture...", options: ["A. popular","B. designed","C. confidence","D. opportunities","E. crafts","F. creating","G. careful","H. confidant","I. tradition","J. difficult"], answer: 2, explain: "名词所有格 generation's 后 → 名词；show confidence in 固定搭配「对……自信」；H confidant「密友」是 confidence 的形近陷阱、G careful 形近。" },
          { q: "第 (4) 空：...brings new ______ for traditional craftsmen.", options: ["A. popular","B. designed","C. confidence","D. opportunities","E. crafts","F. creating","G. careful","H. confidant","I. tradition","J. difficult"], answer: 3, explain: "new + 复数名词 + for → opportunities「机遇」；中文「带来了新的发展机遇」原词对照。" },
          { q: "第 (5) 空：...more and more old ______ are given a new life.", options: ["A. popular","B. designed","C. confidence","D. opportunities","E. crafts","F. creating","G. careful","H. confidant","I. tradition","J. difficult"], answer: 4, explain: "old + 复数名词，are given 被动 → crafts「手艺」；中文「老手艺被赋予新生命」原词对照。I tradition 是抽象名词「传统」，old crafts 才是「老手艺」。" }
        ]
      }
    ],
  },
  transChoice: {
    title: "英译汉选择 · 10 分（5 题 × 2 分）",
    steps: [
      "题型：给 1 个英文句子，4 个中文译文选最准确的——考的就是「翻译四件套」的读句功力，不用动笔写。",
      "先抓英文句子主干：主谓宾 / 主系表找出来，四个选项里骨架错的（主宾颠倒 / 漏成分）一眼排除。",
      "对比选项找「差异点」：四个译文通常只有 1-2 处不同——差异点就是考点（定语位置 / 被动译法 / 关键词义 / 否定范围）。",
      "高频差异点清单：①定语从句「……的」放名词前还是拆成两句 ②被动译「被/由/受到」哪个自然 ③one of 译没译「之一」④never/hardly 否定译没译出来。",
      "关键词红线秒杀：grades 译成「等级」、daily life 译成「日常生活以外」、widely 漏译——这类选项直接排除。"
    ],
    demo: {
      passage: `从下列每题的四个选项中选出最恰当的译文。`,
      questions: [
        {
          q: "The bridge which was built in 1990 is still in use today.",
          options: [
            "这座桥 1990 年被建造，今天仍在使用中。",
            "这座建于 1990 年的桥至今仍在使用。",
            "这座桥是 1990 年建造的，所以今天必须使用。",
            "1990 年建造了这座桥，它今天被使用了。"
          ],
          answer: 1,
          locate: "which was built in 1990 是定语从句修饰 the bridge",
          explain: "定语从句考点：从句译成「建于 1990 年的」放名词前最自然 → B。A 直译生硬不算最佳；C 的「必须使用」无中生有；D 被动直译「被使用」不符合汉语习惯。"
        },
        {
          q: "English is considered to be one of the most useful languages in the world.",
          options: [
            "英语被认为是世界上最有用的语言。",
            "英语被认为是世界上唯一有用的语言之一。",
            "英语被认为是世界上最有用的语言之一。",
            "英语在世界上的语言中被认为是有用的。"
          ],
          answer: 2,
          locate: "one of the most useful languages",
          explain: "one of + 最高级 + 复数 = 「最……之一」，译文必须带「之一」→ C。A 丢「之一」（最常见扣分点）；B 的「唯一」原文没说（无中生有）；D 语序杂乱。"
        },
        {
          q: "Never before have so many people learned English online.",
          options: [
            "以前从未有这么多人在线学英语。",
            "以前很多人在线学过英语。",
            "从未有人在网上学英语。",
            "在线学英语的人数以前很多。"
          ],
          answer: 0,
          locate: "Never before have so many people... 部分倒装 + 否定",
          explain: "否定词 Never before 放句首 → have 提前（部分倒装）；译文要译出「从未有这么多人」的否定+程度 → A。B 丢了否定；C 偷换成「从未有人」；D 否定完全消失。"
        }
      ]
    }
  }
};
