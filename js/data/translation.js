window.TRAINING_TRANS = {
  // 英译汉
  e2c: {
    title: '英译汉 · 20分（长难句拆解还原）',
    skills: [
      {
        name: '定语从句还原法',
        rule: '找 which/who/that/where/when 引导的从句，先翻译被修饰名词，再把从句内容贴上去用"……的"连接',
        ex: 'The book which he recommended is very useful.',
        excn: '他推荐的那本书非常有用。'
      },
      {
        name: '被动语态转换法',
        rule: 'is/are/was/were + 过去分词，汉语通常译为"被……""受到……""由……完成"，有时可以直接转成主动句意更顺',
        ex: 'The project was completed by the team in three months.',
        excn: '这个项目由团队在三个月内完成。'
      },
      {
        name: '强调句还原法',
        rule: 'It is/was...that/who 结构，去掉 It is/was 和 that/who，剩余部分就是原句意思，被强调成分单独翻译',
        ex: 'It was in the library that he found the answer.',
        excn: '正是在图书馆里，他找到了答案。'
      },
      {
        name: '虚拟语气辨别法',
        rule: 'If + 过去式/had done，主句用 would/could/might + have done，表示与事实相反的假设，译为"如果……就会……"',
        ex: 'If he had studied harder, he would have passed the exam.',
        excn: '如果他当时更努力学习，他就会通过考试。'
      },
      {
        name: '分词作状语拆解法',
        rule: '句首或句末的现在分词/过去分词短语，先找逻辑主语（通常是主句主语），再判断表示时间/原因/结果/伴随，加上对应连词翻译',
        ex: 'Having finished the homework, she went out to play.',
        excn: '完成作业之后，她出去玩了。'
      },
      {
        name: '长定语后置处理法',
        rule: '名词后面跟着介词短语、分词短语等多重修饰时，按照汉语习惯把修饰成分移到名词前面，用"……的"连接',
        ex: 'The man standing by the window is my teacher.',
        excn: '站在窗边的那个人是我的老师。'
      }
    ],
    sentences: [
      {
        en: 'The students who work hard in class will get better grades in the final examination.',
        type: '限制性定语从句',
        steps: [
          '找主句：The students...will get better grades in the final examination',
          '找从句：who work hard in class（修饰 The students）',
          '合并：把从句译为"在课堂上努力学习的"，置于名词前'
        ],
        cn: '在课堂上努力学习的学生将在期末考试中取得更好的成绩。',
        tips: '"grades" 译为"成绩"不要漏，"final examination" 是"期末考试"，写成"最终考试"会扣分'
      },
      {
        en: 'The technology which was developed by scientists twenty years ago is now widely used in our daily life.',
        type: '定语从句 + 被动语态',
        steps: [
          '主句：The technology...is now widely used in our daily life',
          '从句：which was developed by scientists twenty years ago（被动，修饰 technology）',
          '从句译为"二十年前由科学家开发的"，置于 technology 前',
          'is widely used 是被动语态，译为"被广泛应用"或"广泛应用于"'
        ],
        cn: '二十年前由科学家开发的这项技术，如今已被广泛应用于我们的日常生活中。',
        tips: '"daily life" 要译为"日常生活"，"widely" 漏译直接扣1分'
      },
      {
        en: 'A large number of trees were planted along the road by the local government last spring.',
        type: '被动语态',
        steps: [
          '识别被动：were planted（种植）',
          '施动者：by the local government',
          '时间：last spring；地点：along the road',
          '汉语转主动：当地政府去年春天沿路种了大量树木'
        ],
        cn: '去年春天，当地政府在路边种植了大量树木。',
        tips: '"a large number of" 注意译为"大量的"，不是"一大数量的"；时间状语放句首更自然'
      },
      {
        en: 'English is considered to be one of the most important languages in the world today.',
        type: '被动语态 + 不定式',
        steps: [
          '被动结构：is considered to be（被认为是）',
          '"one of the most important" 是最高级，译为"最重要的……之一"',
          '整句组装：英语被认为是当今世界上最重要的语言之一'
        ],
        cn: '英语被认为是当今世界上最重要的语言之一。',
        tips: '"one of the most important" 后面名词必须用复数，翻译时不要丢掉"之一"'
      },
      {
        en: 'It is the effort that you make every day that determines your future success.',
        type: '强调句（It is...that）',
        steps: [
          '识别强调句：It is...that 结构',
          '被强调成分：the effort that you make every day（你每天付出的努力）',
          '去掉强调结构还原：Your effort every day determines your future success',
          '译为：正是你每天付出的努力决定了你未来的成功'
        ],
        cn: '正是你每天付出的努力，决定了你未来的成功。',
        tips: '"determines" 是单数第三人称，"effort" 译为"努力"不要译为"效果"'
      },
      {
        en: 'If the weather were fine tomorrow, we would go on a picnic in the park.',
        type: '虚拟语气（与将来事实相反）',
        steps: [
          '识别虚拟：if + were（过去式），主句 would + 动词原形',
          '表示对将来的假设，不是真实条件',
          '译为：如果明天天气好（的话），我们就会去公园野餐'
        ],
        cn: '如果明天天气好的话，我们就会去公园野餐。',
        tips: '"were fine" 是虚拟语气，不是时态错误；"go on a picnic" 译为"去野餐"或"去郊游"均可'
      },
      {
        en: 'Having lived in Beijing for ten years, she knows the city very well.',
        type: '现在完成分词作状语（表原因/时间）',
        steps: [
          'Having lived... 是完成分词短语，逻辑主语是 she',
          '表示先发生的动作（住了十年），再发生主句动作',
          '译为：由于在北京生活了十年，她对这座城市非常了解'
        ],
        cn: '由于在北京生活了十年，她对这座城市非常了解。',
        tips: '"Having + done" 表示先发生的动作，不要译成"正在……的时候"'
      },
      {
        en: 'Encouraged by his teacher\'s words, the boy decided to work harder than before.',
        type: '过去分词作状语（表原因）',
        steps: [
          'Encouraged by... 是过去分词短语，被动含义，主语是 the boy',
          '表示原因：因为受到老师话语的鼓励',
          '主句：the boy decided to work harder than before'
        ],
        cn: '受到老师话语的鼓励，这个男孩决定比以前更加努力学习。',
        tips: '"harder than before" 是比较级，"比以前更努力"不要漏掉"更"字'
      },
      {
        en: 'The book written by the famous professor attracted the attention of millions of readers around the world.',
        type: '过去分词作后置定语（长定语修饰）',
        steps: [
          '"written by the famous professor" 是过去分词短语，修饰 The book',
          '按汉语习惯前置：那位著名教授写的书',
          '主句：...attracted the attention of millions of readers around the world',
          '全句组合'
        ],
        cn: '那位著名教授写的这本书吸引了全世界数百万读者的关注。',
        tips: '"millions of" 译为"数百万"，"attract attention" 译为"吸引注意力/关注"'
      },
      {
        en: 'The university located in the center of the city provides students with excellent learning resources and modern facilities.',
        type: '分词作后置定语（长定语修饰）',
        steps: [
          '"located in the center of the city" 是过去分词短语，修饰 The university',
          '前置翻译：位于市中心的这所大学',
          '"provides...with" 译为"为……提供"',
          '"learning resources" 学习资源，"modern facilities" 现代化设施'
        ],
        cn: '这所位于市中心的大学为学生提供了优质的学习资源和现代化设施。',
        tips: '"provides...with" 结构，"with" 后面是提供的内容，不要翻译成"用……提供"'
      }
    ]
  },
  // 汉译英
  c2e: {
    title: '汉译英 · 20分（模板句型套用）',
    templates: [
      {
        name: 'It is...that 强调句',
        pattern: 'It is/was + 被强调成分 + that/who + 其余部分',
        ex_cn: '正是努力工作使他取得了成功。',
        ex_en: 'It is hard work that made him successful.',
        note: '被强调成分是名词/代词时接 that/who，时态与原句一致'
      },
      {
        name: '被动语态基本句型',
        pattern: '主语 + be + 过去分词 + (by + 施动者)',
        ex_cn: '这座桥是三年前建造的。',
        ex_en: 'The bridge was built three years ago.',
        note: 'be 动词时态与主句时态一致，有施动者时加 by，无则省略'
      },
      {
        name: '不定式作目的状语',
        pattern: '主语 + 动词 + to do sth. (in order to do sth.)',
        ex_cn: '他努力学习是为了通过考试。',
        ex_en: 'He studied hard in order to pass the exam.',
        note: '目的状语用 to do 或 in order to do，in order to 语气更正式'
      },
      {
        name: '宾语从句',
        pattern: '主句 + that/whether/疑问词 + 从句（陈述句语序）',
        ex_cn: '我认为他是对的。',
        ex_en: 'I think that he is right.',
        note: '从句一律用陈述句语序，主句是过去时从句通常要时态呼应'
      },
      {
        name: '比较级句型',
        pattern: '主语 + be + 形容词比较级 + than + 比较对象',
        ex_cn: '健康比金钱更重要。',
        ex_en: 'Health is more important than money.',
        note: '单音节/部分双音节形容词加 -er，多音节用 more；than 后用宾格代词'
      },
      {
        name: '条件句（真实条件）',
        pattern: 'If + 一般现在时，主句用 will/can/may + 动词原形',
        ex_cn: '如果你努力学习，你就会通过考试。',
        ex_en: 'If you study hard, you will pass the exam.',
        note: '条件从句不能用 will，主句用 will 表将来；非真实条件用虚拟语气'
      },
      {
        name: '部分倒装（否定词前置）',
        pattern: 'Never/Seldom/Hardly + 助动词/be + 主语 + 谓语',
        ex_cn: '他从不迟到。（强调）',
        ex_en: 'Never is he late for class.',
        note: '否定副词置于句首时，主谓要倒装；only 位于句首修饰状语也需倒装'
      },
      {
        name: '现在完成时',
        pattern: '主语 + have/has + 过去分词 (+ since/for...)',
        ex_cn: '自从2020年以来，我们的生活发生了很大变化。',
        ex_en: 'Our life has changed a lot since 2020.',
        note: 'since + 时间点，for + 时间段；have/has 根据主语人称选择'
      }
    ],
    sentences: [
      {
        cn: '正是这所学校的良好环境使他爱上了学习。',
        type: 'It is...that 强调句',
        en: 'It is the good environment of this school that made him fall in love with learning.',
        keypoint: 'It is + 被强调成分（the good environment of this school）+ that + 其余部分',
        traps: '很多人写成 "It is...which"，强调句中人用 who，其他用 that，不用 which'
      },
      {
        cn: '这项新政策已经被政府批准了。',
        type: '被动语态（现在完成时）',
        en: 'The new policy has been approved by the government.',
        keypoint: 'has been + 过去分词，表示现在完成时的被动',
        traps: '写成 "has approved by" 漏掉 been，这是最常见错误；approve 不要拼成 appove'
      },
      {
        cn: '许多年轻人去大城市是为了寻找更好的工作机会。',
        type: '不定式作目的状语',
        en: 'Many young people go to big cities to find better job opportunities.',
        keypoint: 'to find... 作目的状语，修饰 go to big cities',
        traps: '"job opportunities" 不要写成 "work opportunities"，后者不地道；better 是比较级，不要用 more good'
      },
      {
        cn: '我们都知道锻炼对健康很重要。',
        type: '宾语从句',
        en: 'We all know that exercise is important to health.',
        keypoint: 'know + that 引导宾语从句，从句用陈述句语序',
        traps: '"important to" 和 "important for" 均可；exercise 是不可数名词，不用加 s'
      },
      {
        cn: '他的学习成绩比他的同学好得多。',
        type: '比较级',
        en: 'His academic performance is much better than that of his classmates.',
        keypoint: 'better than 是 good 的比较级；用 much 修饰比较级表示"……得多"；that of 代指 academic performance',
        traps: '很多人写 "better than his classmates\' "，不如 "better than that of his classmates" 规范；much 不能换成 very'
      },
      {
        cn: '如果明天天气好，我们将去爬山。',
        type: '真实条件句',
        en: 'If the weather is fine tomorrow, we will go climbing.',
        keypoint: 'if 条件从句用一般现在时，主句用 will + 动词原形',
        traps: '条件从句里不能用 will：if the weather will be fine 是错误的；go climbing 表示去爬山'
      },
      {
        cn: '他从未想到自己有一天会成为一名优秀的教师。',
        type: '否定倒装（Never）',
        en: 'Never did he think that he would become an excellent teacher one day.',
        keypoint: 'Never 置于句首，主谓倒装：Never + 助动词 did + 主语 he + 原形动词 think',
        traps: '倒装时助动词要与时态一致，过去时用 did；从句 that 可以省略但建议保留'
      },
      {
        cn: '自从上大学以来，他已经读了超过五十本书。',
        type: '现在完成时（since + 从句）',
        en: 'He has read more than fifty books since he went to college.',
        keypoint: 'has read 是现在完成时，since 引导时间状语，since 从句用一般过去时',
        traps: '"more than fifty" 不要写成 "more than fiftys"；since 后面从句动词用过去时 went，不是 has gone'
      },
      {
        cn: '我们相信互联网技术在未来将会带来更大的变化。',
        type: '宾语从句（that 从句）',
        en: 'We believe that Internet technology will bring greater changes in the future.',
        keypoint: 'believe + that 宾语从句；greater 是 great 的比较级；in the future 表示"在未来"',
        traps: '"Internet technology" 注意 Internet 要大写；changes 用复数；greater 不要写成 more great'
      },
      {
        cn: '这份报告是由三位专家用两个星期完成的。',
        type: '被动语态',
        en: 'This report was completed by three experts in two weeks.',
        keypoint: 'was completed 是一般过去时的被动语态；by 后面接施动者；in two weeks 表示"用了两周时间"',
        traps: '"in two weeks" 和 "within two weeks" 均可；complete 不要写成 finish（两者都可，但 complete 更正式）'
      }
    ]
  }
};
