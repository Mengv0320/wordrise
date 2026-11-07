/* ===== 同义替换弹药库 · 出题人设选项的核心手法库 =====
   完形/阅读判断/选词填空的选项，本质就是原词的"换装"。
   记住 base → syn 的映射，选项一眼识破。 */
window.SYNONYMS = {
  title: "🔁 同义替换弹药库",
  intro: "出题人不会把原文词直接搬进选项——完形、判断题、选词填空的每一个正确选项，都是原文关键词的同义换装。这 70 组就是他们的『换装手册』：看到 base 想到 syn，回原文定位即破题。注意：替换词不止要认识，还要留意词性和搭配是否吻合（如 a lot of 换 a great deal of 只能接不可数名词）。",
  cats: [
    {
      name: "⚡ 动词类 · 完形选项高频换装",
      items: [
        { base: "get（得到）", syn: "obtain / acquire / gain", note: "完形选项把 get 换成 obtain，回原文定位即可；acquire 更书面，强调『习得』" },
        { base: "help（帮助）", syn: "assist / aid / facilitate", note: "facilitate 是判断题最爱：原文 help，选项用 facilitate 偷换概念不算错" },
        { base: "show（表明）", syn: "demonstrate / reveal / indicate", note: "完形选项把 show 换成 reveal，回原文定位即可；indicate 语气弱一点" },
        { base: "think（认为）", syn: "hold / maintain / argue", note: "议论文里 argue 不指『争吵』而是『主张』，作者观点题常见这层替换" },
        { base: "improve（改善）", syn: "enhance / boost / promote", note: "enhance 多配抽象名词（quality/ability），boost 多配数据类（economy/sales）" },
        { base: "attract（吸引）", syn: "capture / draw / appeal to", note: "appeal to 是不及物短语，选词填空里看到空后有 to 就优先它" },
        { base: "prevent（阻止）", syn: "keep...from / stop / deter", note: "keep sb from doing 与 prevent sb from doing 同型，改错爱考 from 漏写" },
        { base: "solve（解决）", syn: "settle / address / tackle", note: "address the problem 是完形高频：address 本义『地址』，这里取『处理』" },
        { base: "begin（开始）", syn: "commence / launch / initiate", note: "launch 多配 campaign/project，initiate 多配 process/program" },
        { base: "end（结束）", syn: "terminate / conclude / wrap up", note: "conclude 还兼『下结论』，判断题里 conclude from the data 就考这层" },
        { base: "use（使用）", syn: "employ / utilize / apply", note: "employ 不只『雇佣』，完形用它替换 use 时考生常误排除" },
        { base: "change（改变）", syn: "alter / transform / shift", note: "transform 指『彻底变样』，shift 指『转移/偏移』，程度不同别混选" },
        { base: "consider（认为/考虑）", syn: "regard / deem / contemplate", note: "regard...as / deem...（形）是固定结构，选词填空看搭配定它" },
        { base: "support（支持）", syn: "back / uphold / advocate", note: "advocate 后直接接名词或 doing，不加 to，选词填空常拿这个设干扰" },
        { base: "oppose（反对）", syn: "object to / be against / resist", note: "object to 中 to 是介词后接 doing——改错最爱在这里挖坑" },
        { base: "damage（损害）", syn: "harm / undermine / ruin", note: "undermine 本义『挖墙脚』，引申『暗中削弱』，搭配 confidence/trust" },
        { base: "increase（增加）", syn: "raise / soar / climb", note: "soar/climb 指『猛涨』，配数字图表；rise 是不及物，raise 是及物，改错常考" },
        { base: "decrease（减少）", syn: "decline / drop / shrink", note: "decline 兼『婉拒』，完形双义词高频：The offer was declined 不是『下降』" }
      ]
    },
    {
      name: "📦 名词类 · 阅读判断偷换概念的原料",
      items: [
        { base: "importance（重要性）", syn: "significance / vitality", note: "significance 兼『意义』，标题题里 be of great significance = very important" },
        { base: "problem（问题）", syn: "issue / challenge / dilemma", note: "dilemma 特指『两难』，判断题把 problem 换成 dilemma 时程度被夸大——设错经典手法" },
        { base: "way（方法）", syn: "approach / means / method", note: "approach to doing（to 是介词）、means of doing，介词搭配是选词填空考点" },
        { base: "advantage（优势）", syn: "merit / strength / upside", note: "merit 多用于书面议论文，strength 兼『力量』，完形双义高频" },
        { base: "disadvantage（劣势）", syn: "drawback / shortcoming / downside", note: "drawback of doing 是固定结构，判断题反着设错常见" },
        { base: "chance（机会）", syn: "opportunity / possibility", note: "opportunity 强调『可把握』，possibility 只指『可能性』——程度偷换点" },
        { base: "purpose（目的）", syn: "aim / objective / goal", note: "作者意图题的题干就用 purpose/aim 问，选项即原文的名词化改写" },
        { base: "result（结果）", syn: "consequence / outcome", note: "consequence 常带贬义（不良后果），完形语境题靠感情色彩选它" },
        { base: "fame（名声）", syn: "reputation / prestige", note: "reputation 可好可坏（bad reputation），prestige 只指『声望/威望』" },
        { base: "hobby（爱好）", syn: "pastime / recreation", note: "pastime 完形里出现即对应原文 hobby，回定位直接选" },
        { base: "disease（疾病）", syn: "illness / sickness", note: "disease 指具体病名，illness 指患病状态，医学语篇完形常混设" },
        { base: "cost（花费）", syn: "expense / expenditure", note: "expenditure 是大账目（财政类），expense 是日常开销，选词填空按语境筛" },
        { base: "job（工作）", syn: "occupation / profession / career", note: "profession 指『需要专业训练的』（医生律师），范围偷换是判断题设错点" },
        { base: "idea（想法）", syn: "notion / concept", note: "notion 常配 the notion that...，选词填空看同位语从句识别" },
        { base: "view（观点）", syn: "opinion / perspective / standpoint", note: "from my perspective 与 in my opinion 同义，观点态度题选项高频" },
        { base: "influence（影响）", syn: "impact / effect", note: "have an impact on = have an effect on，介词 on 固定，改错爱挖 in" }
      ]
    },
    {
      name: "🎨 形容词/副词类 · 感情色彩与程度设错",
      items: [
        { base: "important（重要的）", syn: "vital / essential / crucial", note: "vital/essential 后接 that 从句要虚拟语气，完形语法题常考 It is essential that he (should) do" },
        { base: "good（好的）", syn: "beneficial / favorable / positive", note: "beneficial to（对...有益），判断题把 good 换 beneficial 属正确同义改写" },
        { base: "bad（坏的）", syn: "harmful / adverse / negative", note: "adverse effects 是固定搭配，完形选项常见；harmful 多配 to" },
        { base: "many（许多）", syn: "numerous / a sea of / plenty of", note: "numerous 修饰可数复数，选词填空用词性排除法先筛" },
        { base: "big（大的）", syn: "enormous / tremendous / massive", note: "tremendous 多配抽象事物（success/effort），big 的升级替换首选" },
        { base: "small（小的）", syn: "tiny / minor / negligible", note: "negligible 指『小到可以忽略』，完形靠程度设错：minor ≠ negligible" },
        { base: "famous（著名的）", syn: "renowned / noted / celebrated", note: "renowned 比 famous 更书面，判断题同义改写不算偷换" },
        { base: "clever（聪明的）", syn: "brilliant / smart / intelligent", note: "brilliant 程度最高（才华横溢），smart 偏机灵——程度梯度是设错原料" },
        { base: "happy（高兴的）", syn: "delighted / cheerful / pleased", note: "delighted 程度深（非常高兴），be delighted to do 搭配完形常考" },
        { base: "sad（悲伤的）", syn: "depressed / gloomy / upset", note: "depressed 指长期抑郁，upset 偏短暂不安，完形情绪词按程度选" },
        { base: "fast（快的）", syn: "rapid / swift / speedy", note: "rapid 常配变化/增长（rapid growth），图表类完形首选" },
        { base: "difficult（困难的）", syn: "tough / demanding / challenging", note: "demanding 兼『要求高的』，指任务/工作累人，语境题爱用" },
        { base: "clear（清楚的）", syn: "obvious / apparent / evident", note: "It is obvious that... 常作句子主干，选词填空看 it 形式主语结构" },
        { base: "enough（足够的）", syn: "adequate / sufficient / abundant", note: "sufficient/adequate 是『够用』，abundant 是『过剩』——程度偷换设错点" },
        { base: "cheap（便宜的）", syn: "inexpensive / affordable", note: "affordable 强调『买得起』（afford 的形容词化），完形经济语篇高频" },
        { base: "nowadays（如今）", syn: "currently / these days", note: "写作换装三件套：nowadays→currently/these days，作文提分即用" },
        { base: "finally（最终）", syn: "eventually / ultimately", note: "eventually 强调『经过等待终于』，完形时序逻辑词题考点" },
        { base: "also（也）", syn: "additionally / furthermore / what's more", note: "furthermore 表递进更正式，写作里替换 also 直接升级句式" }
      ]
    },
    {
      name: "🔗 短语类 · 完形与改错的双料考点",
      items: [
        { base: "because of（因为）", syn: "due to / owing to / thanks to", note: "due to 可作表语（His delay was due to...），because of 不行，改错考辨析" },
        { base: "in fact（事实上）", syn: "as a matter of fact / actually", note: "转折语气标志词，完形里前文说一套后文 in fact 翻转——逻辑题定位点" },
        { base: "pay attention to（注意）", syn: "attach importance to / focus on", note: "attach importance to 中 to 是介词，后接 doing——改错高频雷区" },
        { base: "be good at（擅长）", syn: "excel in / have a good command of", note: "have a good command of（精通/掌握）完形选项常见，of 后接名词" },
        { base: "take part in（参加）", syn: "participate in / join in", note: "participate in 更正式，join in 多指临时加入活动，join 多指加入组织" },
        { base: "a lot of（许多）", syn: "a great deal of（不可数）/ quantities of", note: "a great deal of 只接不可数名词——选词填空看空后名词可数性直接筛" },
        { base: "look forward to（期待）", syn: "anticipate / expect", note: "look forward to doing（to 是介词）是改错第一雷区：to look 必错" },
        { base: "come up with（想出）", syn: "put forward / propose", note: "put forward 的宾语可以是 suggestion/plan，完形搭配题常考" },
        { base: "be made up of（由...组成）", syn: "consist of / comprise", note: "consist of 不用被动（is consisted of 必错），改错年年考" },
        { base: "depend on（依靠）", syn: "rely on / count on", note: "count on 更口语；dependent 是形容词，independent of 搭配改错常设" },
        { base: "deal with（处理）", syn: "cope with / handle / address", note: "cope with 强调『应付得来』，完形语境：能否 cope with pressure" },
        { base: "run out of（用完）", syn: "use up / exhaust", note: "run out of 及物、run out 不及物（The money ran out）——改错辨析点" },
        { base: "catch up with（赶上）", syn: "keep pace with / keep up with", note: "keep pace with 指『并驾齐驱』，catch up with 指『落后后追上』，程度有别" },
        { base: "be interested in（对...感兴趣）", syn: "be keen on / be fond of", note: "keen on + doing / fond of + doing，介词后动名词，改错设坑点" },
        { base: "take the place of（取代）", syn: "replace / substitute for", note: "substitute A for B（用A替B）方向别搞反，完形语义题考点" },
        { base: "in the end（最终）", syn: "eventually / at last / finally", note: "四选一同义池：完形判断均可互换，注意 eventually 不接 of（≠ at the end of）" },
        { base: "at once（立刻）", syn: "immediately / right away", note: "at once 还有『同时』义，双义陷阱：Don't all speak at once 不是『立刻』" },
        { base: "more and more（越来越）", syn: "increasingly", note: "写作秒升格：more and more popular → increasingly popular，一字顶三词" }
      ]
    }
  ]
};

/* ===== 扩展包：写作升级（新类）+ 阅读改写（新类）+ 四类补强 ===== */
(function () {
  const S = window.SYNONYMS;
  if (!S || !S.cats) return;
  S.cats.push({
    name: '✍️ 写作升级替换 · 低阶词高级化（阅卷老师的加分雷达）',
    items: [
      { base: 'good（好的）', syn: 'beneficial / positive / favorable', note: 'a beneficial influence on 对……有益的影响；positive 偏态度积极' },
      { base: 'bad（坏的）', syn: 'harmful / adverse / negative', note: 'adverse effects 不利影响（正式）；harmful to health' },
      { base: 'many（许多）', syn: 'numerous / a large number of', note: '后接可数名词复数；amount 只配不可数' },
      { base: 'very（非常）', syn: 'extremely / highly', note: 'very 是低分作文标志词；extremely important 更稳' },
      { base: 'I think（我认为）', syn: 'From my perspective / As far as I am concerned', note: '议论文亮观点句式，比 I think 高一档' },
      { base: 'think（认为/主张）', syn: 'hold the view that / maintain that', note: 'hold the view that + 从句；议论文主体段开头' },
      { base: 'important（重要的）', syn: 'essential / vital / crucial', note: '三个轮换用；be essential to 对……必不可少' },
      { base: 'get（得到）', syn: 'obtain / acquire / gain', note: 'obtain a degree 获得学位；acquire knowledge 习得知识' },
      { base: 'help（帮助）', syn: 'assist / facilitate', note: 'facilitate 意为促进、使便利，更书面' },
      { base: 'use（使用）', syn: 'utilize / employ / apply', note: 'employ methods 采用方法；apply…to 应用于' },
      { base: 'show（表明）', syn: 'demonstrate / illustrate / reveal', note: '图表作文：The chart demonstrates that...' },
      { base: 'big（大的）', syn: 'enormous / substantial / considerable', note: 'a considerable number of 相当多的' },
      { base: 'small（小的）', syn: 'minor / slight / insignificant', note: 'minor 次要的；slight 轻微的' },
      { base: 'happy（高兴的）', syn: 'delighted / pleased / content', note: 'be delighted to do 乐于做；be content with 满足于' },
      { base: 'difficult（困难的）', syn: 'challenging / tough / demanding', note: 'challenging 中性偏褒，作文更讨喜' },
      { base: 'solve（解决）', syn: 'tackle / address / settle', note: 'tackle a problem 着手解决；address 侧重应对' },
      { base: 'more and more（越来越）', syn: 'an increasing number of / increasingly', note: 'an increasing number of students；increasingly important' },
      { base: 'because（因为）', syn: 'owing to / in that / in view of', note: 'owing to + 名词（≠ because + 句子）' },
      { base: 'so（所以）', syn: 'therefore / consequently / thus', note: '写作逻辑衔接词，三段式必备' },
      { base: 'but（但是）', syn: 'however / nevertheless / whereas', note: 'however 后加逗号；whereas 表对比' },
      { base: 'in the end（最后）', syn: 'ultimately / eventually / in conclusion', note: '议论文结尾：In conclusion, ...' },
      { base: 'now（现在）', syn: 'currently / at present / nowadays', note: '作文开头谈现状：Currently, ...' },
      { base: 'also（也/此外）', syn: 'in addition / moreover / furthermore', note: '递进顺序：also < in addition < moreover' },
      { base: 'so...that（如此……以至于）', syn: 'such...that / to such an extent that', note: 'so + adj.；such + n.——both 句型可升级' }
    ]
  });
  S.cats.push({
    name: '🔍 阅读判断改写 · 选项对原文的换装手法（定位同义，防偷换）',
    items: [
      { base: 'cause（引起）', syn: 'lead to / result in / give rise to', note: '选项常见换装；主语是原因才用 result in' },
      { base: 'result from（由……引起）', syn: 'arise from / stem from', note: '主语是结果——与 result in 方向相反，判断题高频陷阱' },
      { base: 'increase（增加）', syn: 'rise / grow / climb', note: 'rise 不及物；选项把 rise 换成 increase 意思不变' },
      { base: 'raise（举起/提高）', syn: 'boost / lift / enhance', note: 'raise 及物——raise/rise 是改错必考对' },
      { base: 'decrease（减少）', syn: 'decline / drop / fall', note: 'decline 可指数量下降也可指谢绝' },
      { base: 'need（需要）', syn: 'require / call for / demand', note: 'call for 需要（= require）；demand 语气强' },
      { base: 'stop sb.（阻止）', syn: 'prevent / prohibit / keep from', note: 'prevent sb. from doing；prohibit 更正式' },
      { base: 'allow（允许）', syn: 'permit / authorize', note: 'permit doing / permit sb. to do' },
      { base: 'keep（保持）', syn: 'maintain / preserve / retain', note: 'maintain order 维持秩序；preserve 保护保存' },
      { base: 'choose（选择）', syn: 'select / opt for', note: 'opt for 选择并支持；select 挑选（精致）' },
      { base: 'change（改变）', syn: 'alter / transform / shift', note: 'transform 彻底改变；alter 局部修改' },
      { base: 'take part in（参加）', syn: 'participate in / engage in / be involved in', note: 'participate in 最稳；engage in 从事' },
      { base: 'look after（照顾）', syn: 'take care of / attend to / care for', note: 'care for 还有『喜欢』义——一词多义陷阱' },
      { base: 'most people（大多数人）', syn: 'the majority of people / most of the public', note: '判断题常把 majority 偷换成 all（以偏概全）' },
      { base: 'agree（同意）', syn: 'approve of / be in favor of', note: 'be in favor of 支持（≠ agree with 同意某人）' },
      { base: 'disagree（不同意）', syn: 'oppose / object to', note: 'object to 后接 doing；oppose doing' },
      { base: 'famous（著名的）', syn: 'renowned / celebrated / well-known', note: 'be renowned for 以……闻名' },
      { base: 'main（主要的）', syn: 'primary / principal / foremost', note: 'principal 最主要的（≠ principle 原则）拼写陷阱' },
      { base: 'solve（解决）', syn: 'settle / resolve / work out', note: 'resolve a conflict 化解冲突；settle a dispute' },
      { base: 'find（发现）', syn: 'discover / identify / detect', note: 'identify 识别出；detect 察觉（隐蔽事物）' }
    ]
  });
  /* 四类补强 */
  S.cats[0].items.push(
    { base: 'get rid of（摆脱）', syn: 'eliminate / remove / dispose of', note: 'eliminate 彻底消除；dispose of 处理掉' },
    { base: 'put off（推迟）', syn: 'postpone / delay / defer', note: 'postpone doing sth；delay 也可作名词' },
    { base: 'figure out（弄明白）', syn: 'work out / make sense of', note: 'work out 还有『锻炼/算出』义——一词多义陷阱' }
  );
  S.cats[1].items.push(
    { base: 'chance（机会）', syn: 'opportunity / likelihood', note: 'opportunity 良机；likelihood 可能性（概率）' },
    { base: 'way（方法）', syn: 'approach / method / means', note: 'approach to doing sth；means 单复数同形' },
    { base: 'problem（问题）', syn: 'issue / dilemma / trouble', note: 'issue 争议话题；dilemma 两难困境' }
  );
  S.cats[2].items.push(
    { base: 'finally（最后）', syn: 'eventually / ultimately', note: 'eventually 经过努力最终；finally 顺序最后' },
    { base: 'quickly（迅速地）', syn: 'rapidly / swiftly / promptly', note: 'promptly 立刻（时间上）；rapidly 速度快' },
    { base: 'clearly（清楚地）', syn: 'evidently / apparently / obviously', note: 'apparently 还有『表面上看来』义——判断题陷阱' }
  );
  S.cats[3].items.push(
    { base: 'in fact（事实上）', syn: 'as a matter of fact / actually / in reality', note: 'actually 还有『居然』惊讶义' },
    { base: 'at last（终于）', syn: 'eventually / in the end / finally', note: '作文叙事段收尾常用' },
    { base: 'by accident（偶然）', syn: 'by chance / accidentally', note: '反义 on purpose（故意）——改错对比考点' }
  );
})();
