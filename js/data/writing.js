window.TRAINING_WRITE = {
  title: "写作特训 · 20分",
  selfCheck: {
    title: "📋 写作 12 步自评清单（交卷前逐项打勾）",
    groups: [
      {
        stage: "审题与构思（动笔前 2 分钟）",
        items: [
          "① 题目类型判定：议论文 / 应用文 / 记叙文——格式选对才有基础分",
          "② 时态主轴确定：记叙过去 → 过去时；议论现状 → 一般现在时；全篇主时态只许一条主线",
          "③ 三段框架列草稿：每段首句写什么、举什么例子，动笔前标好 1-2-3"
        ]
      },
      {
        stage: "结构（写完第一遍读）",
        items: [
          "④ 首段是否点题：第一句必须回应题目关键词，别绕远",
          "⑤ 每段有主题句：段首 1 句管住整段，后文都是它的展开",
          "⑥ 衔接词到位：However / Therefore / What's more 至少 3 个，且位置自然"
        ]
      },
      {
        stage: "语言（第二遍读）",
        items: [
          "⑦ 主谓一致逐句查：三单 s、the number of、either...or 就近原则",
          "⑧ 时态全篇自查：有没有突然跳时态的句子（尤其 and 后半句）",
          "⑨ 高级句型 ≥2 个：强调句 / not only...but also / 定语从句 / 虚拟，用上加分",
          "⑩ 词汇升级至少 1 处：good → beneficial、important → essential"
        ]
      },
      {
        stage: "规范（最后 3 分钟）",
        items: [
          "⑪ 拼写与大小写：句首大写、专有名词大写，embarrass 双 r 双 s 这类细节过一遍",
          "⑫ 字数与格式：≥120 词；书信有称呼落款、通知有标题日期——格式分是白送的"
        ]
      }
    ]
  },
  overview: {
    desc: "河南专升本英语写作共20分，以议论文为主（三段汉语提纲形式给出），150词左右，30分钟内完成。",
    scoring: [
      "内容：切题、信息完整、逻辑清晰（覆盖提纲全部要点）",
      "语言：句式多样、词汇恰当、无严重语法错误",
      "结构：段落分明、衔接自然、格式规范"
    ],
    tips: [
      "先用2分钟构思框架，再动笔",
      "每段3-5句，三段式结构最稳",
      "多用连接词（However/Therefore/In addition）显示逻辑",
      "结尾呼应开头，首尾呼应加分",
      "检查时间留3分钟检查拼写和时态"
    ]
  },

  genres: [
    {
      id: "application",
      name: "应用文（书信/通知/报告）",
      types: [
        {
          name: "感谢信 Thank-you Letter",
          structure: [
            "开头段：说明写信目的（感谢对方什么）",
            "主体段：具体描述对方的帮助及其影响",
            "结尾段：再次致谢，表达回报的意愿"
          ],
          template: "Dear [收信人姓名/称呼],\n\nI am writing to express my heartfelt gratitude to you for [感谢的事情]. [对方帮助的具体描述].\n\n[详述对方帮助的意义和影响]. Thanks to your [帮助/支持/指导], I was able to [自己的收获]. Your [具体行为] made a great difference in my [生活/学习/工作].\n\nOnce again, I would like to thank you for everything you have done for me. I hope I will have the chance to repay your kindness someday. Please feel free to contact me if you need any help.\n\nYours sincerely,\n[你的姓名]",
          vocab: [
            "heartfelt gratitude 衷心的感谢",
            "express appreciation 表达感激",
            "be deeply moved 深受感动",
            "make a great difference 有很大影响",
            "go out of one's way 特意、不辞辛苦",
            "generous help 慷慨的帮助",
            "invaluable support 宝贵的支持",
            "sincere thanks 真诚的感谢",
            "repay one's kindness 回报善意",
            "be grateful for 对...感激"
          ],
          demo: {
            topic: "你的英语老师李明在你备考过程中给予了很大帮助，写一封感谢信（150词左右）",
            essay: "Dear Mr. Li,\n\nI am writing to express my heartfelt gratitude to you for all the help you gave me during my preparation for the college entrance exam.\n\nOver the past months, you spent your own time helping me with my English writing and reading skills. You patiently corrected my essays and explained every mistake in detail. You also recommended many useful books and websites, which greatly improved my ability. Thanks to your generous support, I passed the exam with a good score. I could not have made it without your guidance.\n\nI am truly grateful for everything you have done for me. Your dedication inspired me to work harder. I hope I can be as helpful to others as you have been to me. Please accept my sincere thanks once again.\n\nYours sincerely,\nWang Fang",
            notes: "评分要点：①格式正确（称呼/正文/落款）②感谢理由具体③用了过去时描述事件④结尾有回报心意⑤无明显语法错误"
          }
        },
        {
          name: "邀请信 Invitation Letter",
          structure: [
            "开头段：说明活动名称及邀请目的",
            "主体段：活动时间、地点、内容、安排",
            "结尾段：期待回复，提供联系方式"
          ],
          template: "Dear [收信人姓名],\n\nI am writing to invite you to [活动名称] which will be held on [时间] at [地点].\n\nThe event will include [活动内容1], [活动内容2], and [活动内容3]. [对活动的简要介绍和意义]. We sincerely hope you can attend this event and [预期效果].\n\nPlease let me know whether you are able to come before [回复截止日期]. If you have any questions, feel free to contact me at [联系方式]. We look forward to seeing you there.\n\nYours sincerely,\n[你的姓名]",
          vocab: [
            "sincerely invite 诚挚邀请",
            "be honored to have 荣幸邀请",
            "look forward to your presence 期待您的光临",
            "confirm attendance 确认出席",
            "RSVP 请回复（法语缩写）",
            "on behalf of 代表",
            "memorial ceremony 纪念活动",
            "cultural exchange 文化交流",
            "refreshments will be served 将提供茶点",
            "feel free to contact 随时联系"
          ],
          demo: {
            topic: "你是学生会主席，邀请外教Smith参加学校的英语文化节（English Culture Festival），写一封邀请信（150词左右）",
            essay: "Dear Mr. Smith,\n\nI am writing on behalf of the Student Union to invite you to our English Culture Festival, which will be held on November 15th at the School Auditorium.\n\nThe festival is designed to promote English learning and cultural exchange among students. It will include English speech contests, drama performances, and a cultural exhibition. We would be very honored if you could give a short speech about English-speaking cultures and share your personal experiences with our students. Your participation would inspire many students who are passionate about learning English.\n\nThe event will start at 2:00 p.m. and last about three hours. Refreshments will be served after the activities. Please let us know by November 10th if you are able to attend. You can reach me at 138-0000-0001.\n\nWe look forward to your presence.\n\nYours sincerely,\nLi Hua",
            notes: "评分要点：①以学生会名义发出正式邀请②活动信息完整（时间/地点/内容）③说明为何邀请对方④给出回复截止时间和联系方式"
          }
        },
        {
          name: "建议信 Letter of Advice",
          structure: [
            "开头段：说明写信原因及对方面临的问题",
            "主体段：提出2-3条具体建议，分别展开",
            "结尾段：表达信心，希望建议有用"
          ],
          template: "Dear [收信人],\n\nI am glad to hear that you are [对方情况]. I would like to offer some suggestions that might be helpful.\n\nFirst of all, I suggest that you [建议1]. [具体说明]. In addition, it would be a good idea to [建议2]. [具体说明]. Furthermore, you should also consider [建议3], which will [好处].\n\nI believe that if you follow these suggestions, you will [预期效果]. I am confident that you will succeed. If you have any questions, please feel free to write to me.\n\nBest wishes,\n[你的姓名]",
          vocab: [
            "offer suggestions 提出建议",
            "it would be beneficial to 有益于",
            "I strongly recommend 我强烈建议",
            "take advantage of 利用",
            "set a goal 制定目标",
            "develop a habit of 养成...的习惯",
            "make a plan 制定计划",
            "seek help from 向...寻求帮助",
            "be determined to 下决心",
            "make steady progress 稳步进步"
          ],
          demo: {
            topic: "你的朋友小红想提高英语口语水平，但不知道如何入手，写一封建议信（150词左右）",
            essay: "Dear Xiaohong,\n\nI am glad to know that you want to improve your spoken English. Here are some suggestions that I hope will be helpful.\n\nFirst of all, I suggest that you listen to English every day. You can watch English movies or TV shows, which will help you get used to natural pronunciation and expressions. In addition, it would be a great idea to practice speaking with others. You could join an English speaking club at school or find a language partner online. Speaking regularly will build your confidence. Furthermore, you should not be afraid of making mistakes. The more you speak, the better you will become.\n\nI believe that if you follow these suggestions and practice consistently, your spoken English will improve greatly in a few months. I am confident in your ability. Feel free to let me know if you need more advice.\n\nBest wishes,\nLi Ming",
            notes: "评分要点：①明确说出对方问题②三条建议清晰有序③每条建议都有理由④语气友好有鼓励⑤结尾开放（可继续沟通）"
          }
        },
        {
          name: "投诉信 Letter of Complaint",
          structure: [
            "开头段：说明投诉事项及购买/使用时间",
            "主体段：详细描述问题，造成的影响",
            "结尾段：提出解决方案，期待回应"
          ],
          template: "Dear [负责人/Sir or Madam],\n\nI am writing to complain about [投诉对象] that I purchased/used on [时间] at/from [地点/店名].\n\nThe problem is that [问题描述]. [详细说明问题]. This has caused me great inconvenience because [影响]. I have tried to [自己尝试解决的措施], but it did not work.\n\nI would appreciate it if you could [解决方案1] or [解决方案2]. I hope this matter will be dealt with as soon as possible. I look forward to your prompt reply.\n\nYours faithfully,\n[你的姓名]",
          vocab: [
            "lodge a complaint 提出投诉",
            "defective product 有缺陷的产品",
            "cause inconvenience 造成不便",
            "unsatisfactory service 不令人满意的服务",
            "demand a refund 要求退款",
            "prompt response 及时答复",
            "resolve the issue 解决问题",
            "be disappointed with 对...感到失望",
            "take responsibility 承担责任",
            "as soon as possible 尽快"
          ],
          demo: {
            topic: "你上周在网上买了一双鞋，收到后发现鞋子有质量问题（鞋底脱胶），给卖家写一封投诉信（150词左右）",
            essay: "Dear Sir or Madam,\n\nI am writing to complain about a pair of shoes I ordered from your online store last week. I am very disappointed with the quality of the product.\n\nWhen I received the shoes yesterday, I discovered that the sole of one shoe had already come apart from the upper. I have only tried them on once and have not worn them outside at all. This is clearly a quality problem and not caused by my use. The defective shoes have made me feel that I wasted my money. I tried to contact your customer service team online, but received no reply.\n\nI would appreciate it if you could either send me a replacement pair or give me a full refund. Please respond to my complaint within three working days. I hope this issue can be resolved quickly.\n\nYours faithfully,\nWang Lei",
            notes: "评分要点：①清楚说明购买时间和问题②强调非人为损坏③提出明确解决方案（换货/退款）④语气正式但不粗鲁⑤设定回复期限"
          }
        },
        {
          name: "通知 Notice",
          structure: [
            "标题：NOTICE（居中大写）",
            "正文：时间、地点、活动内容、注意事项",
            "落款：发布单位和日期"
          ],
          template: "NOTICE\n\nAll [通知对象] are hereby informed that [活动/事项] will be held on [时间] at [地点].\n\n[活动主要内容和安排]. [参与要求或注意事项]. [报名或联系方式（如需要）].\n\nEveryone is welcome/required to attend. For more information, please contact [联系人] at [联系方式].\n\n[发布单位]\n[日期]",
          vocab: [
            "hereby inform 特此通知",
            "all students concerned 所有相关学生",
            "be required to 被要求",
            "on a voluntary basis 自愿参加",
            "prior registration 提前报名",
            "limited seats available 名额有限",
            "sign up for 报名参加",
            "bring along 携带",
            "no later than 不晚于",
            "further details 更多详情"
          ],
          demo: {
            topic: "学生会举办英语演讲比赛，发布通知（150词左右）",
            essay: "NOTICE\n\nAll students are hereby informed that an English Speech Contest will be held on December 10th, 2025, in the School Auditorium (Room 101) from 2:00 p.m. to 5:00 p.m.\n\nThe theme of this year's contest is 'Technology and Our Future'. Each participant will be given five minutes to deliver a speech. The top three winners will receive certificates and prizes. Professional teachers will serve as judges and give feedback after the event.\n\nStudents who wish to participate should sign up at the Student Union Office before December 5th. Please bring a written copy of your speech when you register. The number of participants is limited to 20, so please sign up as soon as possible.\n\nEveryone is welcome to attend as an audience member. For more information, please contact Li Hua at 138-0000-0002.\n\nThe Student Union\nNovember 28th, 2025",
            notes: "评分要点：①标题NOTICE居中大写②时间地点活动内容明确③参与方式和截止时间清楚④落款有发布单位和日期⑤格式规范"
          }
        }
      ]
    },
    {
      id: "narrative",
      name: "记叙文（人物/经历描写）",
      types: [
        {
          name: "描述难忘经历 A Memorable Experience",
          structure: [
            "开头段：点明事件主题，引起读者兴趣",
            "主体段：按时间顺序描述事件经过（开始→过程→结果）",
            "结尾段：说明感受、收获或意义"
          ],
          template: "I will never forget [时间/场合], when [事件概述].\n\nIt all started when [背景/起因]. [事件发展描述]. At that moment, I felt [感受]. [具体细节]. Finally, [事件结果].\n\nThis experience taught me [收获/感悟]. I realized that [人生道理]. [总结升华].",
          vocab: [
            "unforgettable experience 难忘的经历",
            "still remember vividly 仍然清晰地记得",
            "it was a turning point 这是一个转折点",
            "make up one's mind 下定决心",
            "feel a sense of achievement 有成就感",
            "overcome difficulties 克服困难",
            "gain confidence 获得自信",
            "learn a valuable lesson 学到宝贵一课",
            "It dawned on me that 我突然意识到",
            "from that moment on 从那时起"
          ],
          demo: {
            topic: "描述一次对你有重要影响的经历（150词左右）",
            essay: "I will never forget the summer of my first year in high school, when I joined a volunteer teaching program in a rural village.\n\nIt all started when my teacher recommended this program to our class. At first, I was not sure if I was capable of teaching younger children. However, I decided to give it a try. During the two weeks in the village, I taught English to about 30 students aged 10 to 12. The children were eager to learn and always greeted me with big smiles. Although I made some mistakes in my teaching, the children were very patient. On the last day, they sang a song for me, and I was deeply moved.\n\nThis experience changed me greatly. I realized that giving is more rewarding than receiving. From that moment on, I became more confident and developed a stronger sense of responsibility toward others.",
            notes: "评分要点：①时间线清晰②有具体细节（人数/细节行为）③情感描写真实④结尾点题（经历的意义）⑤时态以过去时为主"
          }
        },
        {
          name: "描述人物 A Person I Admire",
          structure: [
            "开头段：介绍人物，说明为何值得钦佩",
            "主体段：从2-3个方面描述人物特点及具体事例",
            "结尾段：这个人对你的影响"
          ],
          template: "The person I admire most is [人物], who is [身份/关系].\n\n[人物] is [品质1]. For example, [具体事例]. [人物] is also [品质2]. [具体事例]. What impresses me most is that [最打动你的一点].\n\n[人物] has had a great influence on me. [具体影响]. I hope I can be a person like [him/her] someday.",
          vocab: [
            "admire greatly 非常敬佩",
            "dedicated to 献身于",
            "warm-hearted 热心肠的",
            "patient and caring 耐心和关爱",
            "set a good example 树立好榜样",
            "inspire someone to do 激励某人做",
            "hardworking and responsible 勤劳负责任",
            "selfless contribution 无私奉献",
            "have a positive impact on 对...有积极影响",
            "look up to 仰望，崇拜"
          ],
          demo: {
            topic: "描述一位你最敬佩的人（150词左右）",
            essay: "The person I admire most is my mother, who has always been my greatest support in life.\n\nMy mother is a very hardworking person. She works as a nurse and often takes night shifts without complaining. Even after a long day at work, she always finds time to help me with my studies. She is also incredibly warm-hearted. Whenever our neighbors face difficulties, she is the first to offer help. I remember once when our elderly neighbor fell ill, my mother visited her every day and brought her food. What impresses me most is her positive attitude. She always smiles and says that hard work will pay off.\n\nMy mother has had a great influence on me. She taught me the value of kindness and persistence. I hope I can be as strong and caring as she is someday. She is my role model.",
            notes: "评分要点：①人物特点明确（2-3个）②每个特点有具体事例支撑③情感真实④结尾有升华⑤词汇多样不重复"
          }
        }
      ]
    },
    {
      id: "argumentative",
      name: "议论文（二选一观点论证）",
      types: [
        {
          name: "支持观点型 Argumentation",
          structure: [
            "开头段：引出话题，明确表明自己的观点",
            "主体段1：第一个理由+例证",
            "主体段2：第二个理由+例证",
            "结尾段：总结观点，呼吁行动"
          ],
          template: "Nowadays, [话题背景]. Some people think [一种观点], while others believe [另一种观点]. In my opinion, [你的观点].\n\nTo begin with, [理由1]. [展开说明+例证]. For instance, [具体例子].\n\nFurthermore, [理由2]. [展开说明+例证]. As a result, [影响/结果].\n\nIn conclusion, [重申观点]. Only by [建议/行动], can we [美好结果].",
          vocab: [
            "it is widely believed that 人们普遍认为",
            "play an important role in 在...中扮演重要角色",
            "have a significant impact on 对...有重大影响",
            "on the one hand...on the other hand 一方面...另一方面",
            "what is more 更重要的是",
            "as a consequence 因此，结果",
            "it goes without saying that 不言而喻",
            "take measures to 采取措施",
            "raise awareness of 提高...意识",
            "strike a balance between 在...之间取得平衡"
          ],
          demo: {
            topic: "有人认为大学生应该积极参加志愿者活动，你是否同意？写一篇议论文（150词左右）",
            essay: "Nowadays, volunteering has become an increasingly popular topic among college students. Some people think it is a waste of time, while others believe it is very valuable. In my opinion, college students should actively take part in volunteer activities.\n\nTo begin with, volunteering helps students develop important personal qualities. Through serving others, students learn to be patient, responsible, and cooperative. These qualities are very useful in future careers. For instance, many companies prefer to hire graduates who have volunteer experience because they tend to be more team-oriented.\n\nFurthermore, volunteering allows students to gain practical experience and broaden their horizons. By working in different environments, they can discover their interests and learn skills that textbooks cannot teach.\n\nIn conclusion, volunteer activities benefit both individuals and society. I strongly encourage every college student to spare some time for volunteering. It is truly a worthwhile experience.",
            notes: "评分要点：①开头表明立场②两个理由清晰③用了For instance举例④结尾总结+呼吁⑤全文逻辑连贯"
          }
        },
        {
          name: "对比分析型 Comparison Essay",
          structure: [
            "开头段：描述两种现象/选择，提出讨论",
            "主体段1：第一种的优缺点",
            "主体段2：第二种的优缺点",
            "结尾段：综合分析，给出建议"
          ],
          template: "When it comes to [话题], people often have to choose between [选项A] and [选项B]. Both have their own advantages and disadvantages.\n\nOn one hand, [选项A] has the advantage of [优点]. However, it also has some drawbacks. [缺点说明].\n\nOn the other hand, [选项B] is [特点]. It can [优点]. But [缺点].\n\nIn my view, [综合判断]. The key is to [建议]. Only in this way can we [结果].",
          vocab: [
            "weigh the pros and cons 权衡利弊",
            "have advantages over 比...有优势",
            "be superior to 优于",
            "in contrast 相比之下",
            "while it is true that... 虽然...是真的",
            "the benefits outweigh the drawbacks 利大于弊",
            "from a long-term perspective 从长远来看",
            "adopt a balanced approach 采取平衡的方法",
            "make an informed decision 做出明智决定",
            "it depends on individual needs 取决于个人需求"
          ],
          demo: {
            topic: "有人喜欢在城市生活，有人更喜欢在农村生活。比较两种生活方式的利弊，发表你的看法（150词左右）",
            essay: "When it comes to choosing where to live, people often face a choice between city life and rural life. Both have their own advantages and disadvantages.\n\nOn one hand, city life offers many opportunities. Cities have better hospitals, schools, and job opportunities. People can enjoy a wide range of entertainment and modern conveniences. However, city life also has drawbacks. The cost of living is high, traffic is heavy, and the environment is often polluted.\n\nOn the other hand, rural life is peaceful and close to nature. The air is fresh and life moves at a slower pace. However, rural areas may lack modern facilities and career opportunities, which can be a problem for young people.\n\nIn my view, both lifestyles have their merits. The right choice depends on personal priorities. If you value career development, cities are better. If you seek peace and health, the countryside is ideal.",
            notes: "评分要点：①两种生活各有利弊②对比结构清晰③没有绝对否定任何一种④结尾有条件性建议⑤On one hand...On the other hand用法正确"
          }
        }
      ]
    },
    {
      id: "tech",
      name: "📂 科技 / AI 类议论文（2026 新趋势）",
      types: [
        {
          name: "AI 平衡使用型三段式",
          structure: [
            "引出现象+争议",
            "利与弊各两点（对仗工整）",
            "我的平衡之道+呼吁"
          ],
          template: "Para 1 引出现象+争议:\nNowadays, artificial intelligence has penetrated every corner of our life. [具体现象：在线学习/智能助手等]. AI not only [带来的好处] but also [引发的问题], which has caused a heated discussion.\n\nPara 2 利与弊各两点（对仗工整）:\nFor one thing, AI [利1：提高效率]. [展开说明]. It also [利2：提供帮助]. However, for another, overusing AI may [弊1：产生依赖]. Worse still, [弊2：隐私风险].\n\nPara 3 我的平衡之道+呼吁:\nAs far as I am concerned, it is essential that we strike a balance between [使用AI] and [保持独立思考]. We should [建议1：定时定量] and [建议2：工具定位]. Only in this way can we [美好结果].",
          vocab: [
            "artificial intelligence 人工智能",
            "penetrate every corner of our life 渗透到生活的每个角落",
            "bring great convenience 带来极大便利",
            "raise a heated debate 引发热议",
            "improve learning efficiency 提高学习效率",
            "overuse / overdependence 过度使用/过度依赖",
            "stop thinking independently 停止独立思考",
            "personal privacy 个人隐私",
            "treat AI as a tool 把AI当作工具",
            "rather than a master 而非主人"
          ],
          demo: {
            topic: "如何实现人工智能的平衡使用？",
            essay: "Nowadays, artificial intelligence has penetrated every corner of our life. From online learning to smart assistants, AI not only brings us great convenience but also raises a heated debate about how to use it properly.\n\nFor one thing, AI makes our study and work more efficient. It can answer questions instantly and offer useful suggestions, which saves us a lot of time. It also provides company for people who feel lonely. However, for another, overusing AI may cause serious problems. Some students depend on it so much that they stop thinking independently. Worse still, our personal privacy may be at risk when we share information with AI tools.\n\nAs far as I am concerned, it is essential that we strike a balance between using AI and thinking for ourselves. We should set a time limit for AI tools and treat them as helpers rather than masters. Only in this way can we enjoy the benefits of technology without losing our ability to think.",
            notes: "评分要点：切题+利弊对仗+平衡建议落地"
          }
        }
      ]
    }
  ],

  powerPhrases: [
    {
      type: "开头",
      cn: "引出话题背景",
      en: "In recent years, more and more people have come to realize that...",
      note: "适用于议论文开头，引出当前趋势"
    },
    {
      type: "开头",
      cn: "说明写信目的（书信开头）",
      en: "I am writing to express my... / I am writing on behalf of...",
      note: "所有书信开头万能公式，填入目的即可"
    },
    {
      type: "开头",
      cn: "提出问题，引发思考",
      en: "Have you ever wondered why...? / It is a question worth considering.",
      note: "用反问句开头，吸引读者注意"
    },
    {
      type: "开头",
      cn: "描述对比现象",
      en: "While some people believe that..., others hold the opposite view that...",
      note: "二选一议论文开头专用，两种观点均提出"
    },
    {
      type: "开头",
      cn: "点明主旨（记叙文）",
      en: "I will never forget the day when... / That experience changed my life completely.",
      note: "记叙文开头，直接点题抓住读者"
    },
    {
      type: "转折递进",
      cn: "表示递进关系",
      en: "In addition / Furthermore / What is more / Besides",
      note: "列举第二、三个理由时使用，替换and"
    },
    {
      type: "转折递进",
      cn: "表示转折",
      en: "However / Nevertheless / On the contrary / Despite this",
      note: "承认对方观点后转折到自己观点"
    },
    {
      type: "转折递进",
      cn: "表示结果",
      en: "As a result / Therefore / Consequently / Thus",
      note: "描述原因后引出结果，逻辑更清晰"
    },
    {
      type: "转折递进",
      cn: "举例说明",
      en: "For example / For instance / To illustrate / Take...as an example",
      note: "论据举例时使用，增加说服力"
    },
    {
      type: "转折递进",
      cn: "强调重点",
      en: "Most importantly / Above all / What matters most is that...",
      note: "强调最核心观点时放在段落中间或结尾"
    },
    {
      type: "结尾",
      cn: "总结全文观点",
      en: "In conclusion / To sum up / In summary / All in all",
      note: "结尾段第一句固定句型，信号词告知读者要总结了"
    },
    {
      type: "结尾",
      cn: "重申立场",
      en: "I firmly believe that... / It is my conviction that...",
      note: "比简单说I think更有力，适合议论文结尾"
    },
    {
      type: "结尾",
      cn: "呼吁行动",
      en: "I strongly encourage everyone to... / It is high time that we...",
      note: "议论文结尾呼吁读者行动，升华主题"
    },
    {
      type: "结尾",
      cn: "书信结尾期待回复",
      en: "I look forward to your early reply. / I hope to hear from you soon.",
      note: "所有需要对方回复的书信结尾必备"
    },
    {
      type: "结尾",
      cn: "表达感谢与期望（书信）",
      en: "Thank you for your time and consideration. / Your help would be greatly appreciated.",
      note: "投诉信/建议信结尾，礼貌结束"
    },
    {
      type: "特殊表达",
      cn: "描述困难但克服",
      en: "Although it was not easy, I managed to... / With great effort, I finally...",
      note: "记叙文描述克服困难时使用，展现成长"
    },
    {
      type: "特殊表达",
      cn: "表达感受变化",
      en: "At first I felt nervous, but gradually I became more confident.",
      note: "描述心理变化，体现情感丰富"
    },
    {
      type: "特殊表达",
      cn: "数据引用（增加说服力）",
      en: "According to a recent survey, over 70% of... / Statistics show that...",
      note: "议论文中引用数据，即使是虚构的也能加分"
    },
    {
      type: "特殊表达",
      cn: "表示普遍认同",
      en: "It is universally acknowledged that... / There is no doubt that...",
      note: "比It is known that更有分量，体现语言多样性"
    },
    {
      type: "特殊表达",
      cn: "条件句提建议",
      en: "Only by doing..., can we... / If we fail to..., the consequences will be serious.",
      note: "倒装条件句，语法高级，阅卷老师喜欢"
    },
    {
      type: "科技/AI 万能句",
      cn: "点明AI普及现象",
      en: "Artificial intelligence has penetrated every corner of our life.",
      note: "科技类议论文开头第一句，直接引出话题"
    },
    {
      type: "科技/AI 万能句",
      cn: "AI应为人服务",
      en: "We should let AI serve us rather than enslave us.",
      note: "表达立场金句，可用于结尾段升华"
    },
    {
      type: "科技/AI 万能句",
      cn: "平衡使用之道",
      en: "We should strike a balance between using AI and thinking independently.",
      note: "点题句，呼应2026真题核心立意"
    },
    {
      type: "科技/AI 万能句",
      cn: "工具定位建议",
      en: "It is essential that we treat AI as a tool rather than a master.",
      note: "虚拟语气+对仗，句式高级，建议落地"
    },
    {
      type: "科技/AI 万能句",
      cn: "利弊并存过渡",
      en: "AI brings us convenience, but it also brings challenges we cannot ignore.",
      note: "承上启下，从利转弊的过渡句"
    },
    {
      type: "科技/AI 万能句",
      cn: "倒装呼吁结尾",
      en: "Only in this way can we enjoy the benefits of technology without losing ourselves.",
      note: "倒装句收尾，科技类议论文高分结尾"
    }
  ],

  pastTopics: [
    {
      year: "2026",
      genre: "议论文",
      topic: "如何实现人工智能的平衡使用？（150词）",
      keypoints: [
        "AI 带来的便利（学习/效率/陪伴）",
        "过度使用的问题（依赖/隐私/思维惰性）",
        "平衡之道：定时定量/工具定位/保持独立思考"
      ]
    },
    {
      year: "2025",
      genre: "议论文",
      topic: "How to Improve Our Cultural Literacy（如何提升文化素养），结合所给材料写作，至少120词。",
      keypoints: [
        "材料背景：图书馆/文化馆/美术馆等公共文化设施激增（如博物馆已达5788家）",
        "开头：点明文化素养的重要性（可用 There is no doubt that...）",
        "主体：分点论述提升途径（多阅读/善用公共文化设施/批判性甄别信息）",
        "结尾：重申观点并呼吁行动"
      ]
    },
    {
      year: "2024",
      topic: "随着互联网的发展，越来越多的人选择网上购物。请写一篇文章，说明网上购物的利与弊，并给出你的建议。（150词）",
      genre: "议论文",
      keypoints: [
        "优点：方便快捷、价格便宜、选择多样",
        "缺点：无法看到实物、物流风险、退换货麻烦",
        "建议：选择信誉好的平台、仔细阅读商品描述",
        "结尾要有个人立场，不能只列优缺点"
      ]
    },
    {
      year: "2023",
      topic: "你的大学室友即将去参加一场重要的英语面试，感到非常紧张和担心。请给他/她写一封信，提供3条备考建议。（150词）",
      genre: "建议信",
      keypoints: [
        "格式：信件格式，Dear + 正文 + Best wishes",
        "建议1：提前准备常见面试问题",
        "建议2：多练习口语，可以对着镜子练习",
        "建议3：保持良好心态，相信自己",
        "语气要友好鼓励，不能太正式"
      ]
    },
    {
      year: "2022",
      topic: "请描述一次让你印象深刻的志愿者活动经历，说明活动内容以及对你的影响。（150词）",
      genre: "记叙文",
      keypoints: [
        "交代时间、地点、活动类型",
        "具体描述做了什么（不要太笼统）",
        "描述活动中遇到的困难或感动的细节",
        "结尾必须写出这次经历对自己的影响或收获"
      ]
    },
    {
      year: "2021",
      topic: "学校图书馆将延长开放时间（从晚上8点延长至10点），请以学生会的名义写一则通知，告知全体同学。（150词）",
      genre: "通知",
      keypoints: [
        "标题NOTICE必须写，居中大写",
        "说明变化内容（延长时间）和生效日期",
        "提醒同学遵守图书馆规定（保持安静/爱护书籍）",
        "落款：学生会 + 日期"
      ]
    },
    {
      year: "2020",
      topic: "你购买的一台笔记本电脑在使用一个月后出现故障，售后服务态度很差，问题迟迟未解决。请给该公司客服写一封投诉信。（150词）",
      genre: "投诉信",
      keypoints: [
        "说明购买时间和产品",
        "描述故障详情（开不了机/屏幕黑屏等具体问题）",
        "描述售后态度差的具体表现",
        "提出明确要求：修复/换货/退款，给出期限",
        "语气要正式，不能有粗鲁语言"
      ]
    }
  ]
};
