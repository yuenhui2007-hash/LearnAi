// IELTS Smart Marker
// Provides model answers, pinpoints errors, and estimates band scores
// Pure client-side, rule-based analysis

const IELTSMarker = {
  // Band descriptor criteria
  bandDescriptors: {
    writing: {
      task1: {
        taskAchievement: [
          { band: 9, desc: 'Fully satisfies all requirements. Clearly presents all key features.' },
          { band: 8, desc: 'Covers all requirements. Key features are clearly presented.' },
          { band: 7, desc: 'Covers requirements. Presents clear overview. Key features highlighted.' },
          { band: 6, desc: 'Addresses requirements. Presents overview. Information selected.' },
          { band: 5, desc: 'Generally addresses task. No clear overview. Limited data support.' },
          { band: 4, desc: 'Attempts to address task. No data or very limited.' },
          { band: 3, desc: 'Fails to address task. Copied from input.' },
        ],
        coherence: [
          { band: 9, desc: 'Skillfully managed. Clear progression throughout. Cohesive devices used naturally.' },
          { band: 8, desc: 'Information logically sequenced. Wide range of cohesive devices.' },
          { band: 7, desc: 'Clear progression. Good range of cohesive devices. Paragraphing appropriate.' },
          { band: 6, desc: 'Arranged coherently. Effective cohesive devices. Some faulty mechanical errors.' },
          { band: 5, desc: 'Some organisation. Limited cohesive devices. Repetition of ideas.' },
          { band: 4, desc: 'Little organisation. Basic cohesive devices. Unclear progression.' },
        ],
        lexical: [
          { band: 9, desc: 'Wide range used with full flexibility. Rare minor slips.' },
          { band: 8, desc: 'Wide range used fluently. Skillful use of uncommon lexical items.' },
          { band: 7, desc: 'Sufficient range. Some less common items. Awareness of style and collocation.' },
          { band: 6, desc: 'Adequate range. Meaning generally clear despite inappropriacies.' },
          { band: 5, desc: 'Limited range. Frequent errors in word formation/spelling.' },
          { band: 4, desc: 'Basic vocabulary. Frequent errors may impede meaning.' },
        ],
        grammar: [
          { band: 9, desc: 'Wide range of structures used with full flexibility. Error-free sentences.' },
          { band: 8, desc: 'Wide range used flexibly. Majority of sentences error-free.' },
          { band: 7, desc: 'Variety of complex structures. Good control. Occasional errors.' },
          { band: 6, desc: 'Mix of simple and complex sentences. Some errors but rarely impede meaning.' },
          { band: 5, desc: 'Limited range of structures. Frequent errors may cause difficulty.' },
          { band: 4, desc: 'Very limited range. Frequent errors. Rarely error-free sentences.' },
        ],
      },
      task2: {
        taskResponse: [
          { band: 9, desc: 'Fully addresses all parts. Position fully developed and well-supported.' },
          { band: 8, desc: 'Sufficiently addresses all parts. Position well-developed.' },
          { band: 7, desc: 'Addresses all parts. Clear position throughout. Main ideas extended.' },
          { band: 6, desc: 'Addresses all parts. Position may be unclear. Some main ideas.' },
          { band: 5, desc: 'Addresses task only partially. Position may be unclear. Limited ideas.' },
          { band: 4, desc: 'Responds to task in minimal way. Position unclear. Few ideas.' },
        ],
        coherence: [
          { band: 9, desc: 'Logically organised. Seamless progression. Cohesive devices used masterfully.' },
          { band: 8, desc: 'Well-sequenced. Manages all aspects of cohesion well.' },
          { band: 7, desc: 'Clear progression. Good range of cohesive devices. Paragraphing logical.' },
          { band: 6, desc: 'Coherently arranged. Effective cohesive devices. Paragraphing used.' },
          { band: 5, desc: 'Some organisation. Limited cohesive devices. Mechanical errors.' },
          { band: 4, desc: 'Little organisation. Basic cohesive devices. Unclear progression.' },
        ],
        lexical: [
          { band: 9, desc: 'Wide range used with natural sophistication. Rare minor errors.' },
          { band: 8, desc: 'Wide range used with very natural precision.' },
          { band: 7, desc: 'Sufficient range. Some less common vocabulary. Flexibility evident.' },
          { band: 6, desc: 'Adequate range. Meaning generally clear despite errors.' },
          { band: 5, desc: 'Limited range. Noticeable errors in word formation/spelling.' },
          { band: 4, desc: 'Basic range. Frequent errors may impede meaning.' },
        ],
        grammar: [
          { band: 9, desc: 'Wide range of structures with full flexibility. Error-free sentences.' },
          { band: 8, desc: 'Wide range. Most sentences error-free. Occasional minor slips.' },
          { band: 7, desc: 'Variety of complex structures. Good control. Some errors.' },
          { band: 6, desc: 'Mix of simple and complex. Some errors but meaning clear.' },
          { band: 5, desc: 'Limited range. Frequent errors may cause difficulty.' },
          { band: 4, desc: 'Very limited range. Frequent errors. Rarely error-free.' },
        ],
      }
    },
    speaking: {
      fluency: [
        { band: 9, desc: 'Speaks fluently with only rare repetition/self-correction.' },
        { band: 8, desc: 'Speaks fluently with only occasional repetition/self-correction.' },
        { band: 7, desc: 'Willing to speak at length. Some hesitation/repetition for language/search.' },
        { band: 6, desc: 'Willing to speak at length. Some loss of coherence at times.' },
        { band: 5, desc: 'Keeps going but overuses certain connectives/discourse markers.' },
        { band: 4, desc: 'Cannot respond without noticeable pauses.' },
      ],
      lexical: [
        { band: 9, desc: 'Uses vocabulary with full flexibility. Uses idiomatic language naturally.' },
        { band: 8, desc: 'Uses a wide vocabulary resource readily. Uses less common idiomatic items.' },
        { band: 7, desc: 'Uses vocabulary resource flexibly. Uses some less common items.' },
        { band: 6, desc: 'Has a wide enough vocabulary to discuss topics. Paraphrases when necessary.' },
        { band: 5, desc: 'Manages to talk about familiar topics. Vocabulary limited for unfamiliar.' },
        { band: 4, desc: 'Basic vocabulary for familiar topics. Cannot discuss unfamiliar.' },
      ],
      grammar: [
        { band: 9, desc: 'Uses a full range of structures naturally and appropriately.' },
        { band: 8, desc: 'Uses a wide range of structures flexibly. Majority error-free.' },
        { band: 7, desc: 'Uses a range of complex structures with some flexibility.' },
        { band: 6, desc: 'Uses a mix of simple and complex structures. Some errors.' },
        { band: 5, desc: 'Uses basic sentence forms. Tries complex sentences but errors common.' },
        { band: 4, desc: 'Uses basic structures. Rarely uses complex sentences.' },
      ],
      pronunciation: [
        { band: 9, desc: 'Uses a full range of pronunciation features with precision.' },
        { band: 8, desc: 'Uses a wide range of features with good control.' },
        { band: 7, desc: 'Shows all positive features with some lapses.' },
        { band: 6, desc: 'Uses a range of features but not consistently.' },
        { band: 5, desc: 'Shows some positive features but problems are noticeable.' },
        { band: 4, desc: 'Uses a limited range. Intonation often flat.' },
      ]
    }
  },

  // Model answers database
  modelAnswers: {
    writing: {
      'writing-1': {
        task1: `The bar chart illustrates the number of international students enrolled in universities across five countries (USA, UK, Australia, Canada, and Germany) over an eight-year period from 2015 to 2023.

Overall, it is evident that while the USA maintained its position as the most popular destination for international students in 2015, its numbers declined significantly by 2023. Conversely, the UK, Australia, and Canada experienced substantial growth in their international student populations during this period.

In 2015, the USA hosted the highest number of international students at approximately 975,000, followed by the UK with 436,000. However, by 2023, the USA's figures had dropped to 948,000, representing a decrease of around 27,000 students. In contrast, the UK saw a remarkable surge, with its international student population rising from 436,000 in 2015 to 679,000 in 2023—an increase of nearly 56%.

Australia and Canada demonstrated the most dramatic growth. Australia's numbers more than doubled, climbing from 278,000 in 2015 to 713,000 in 2023. Similarly, Canada's international student enrolment skyrocketed from 208,000 to 682,000 over the same period. Germany, while starting with 302,000 students in 2015, experienced more modest growth, reaching 458,000 by 2023.

In summary, the traditional dominance of the USA in attracting international students has been challenged by rapidly growing alternatives, particularly Australia and Canada, which have emerged as increasingly attractive destinations.`,
        task2: `The integration of technology into education has been a topic of considerable debate, with proponents highlighting its accessibility and effectiveness, while critics point to emerging inequalities and distractions. This essay will examine both perspectives before presenting my own view.

On the one hand, technology has undeniably revolutionised education by making it more accessible than ever before. Online platforms such as Khan Academy, Coursera, and YouTube provide free or affordable learning resources to millions worldwide, regardless of geographical location or socioeconomic status. Students in remote villages can now access lectures from prestigious universities, and individuals with disabilities can utilise assistive technologies to overcome traditional barriers. Furthermore, technology enables personalised learning experiences through adaptive algorithms that cater to individual student needs, potentially improving educational outcomes.

On the other hand, critics argue that technology has created new forms of inequality. The "digital divide" remains a significant issue, as students from low-income families may lack reliable internet access or modern devices, placing them at a disadvantage compared to their wealthier peers. Additionally, the proliferation of smartphones and laptops in classrooms has introduced unprecedented levels of distraction. Studies have shown that students who use devices during lectures retain significantly less information than those who take notes by hand. Social media notifications and the temptation to multitask can severely undermine concentration and learning depth.

In my opinion, while the concerns about inequality and distraction are valid, the benefits of technology in education far outweigh its drawbacks. The key lies in responsible implementation. Governments and educational institutions must invest in digital infrastructure to bridge the digital divide, while teachers should establish clear guidelines for device usage to minimise distractions. When used thoughtfully, technology can democratise education and prepare students for an increasingly digital world.

In conclusion, technology has transformed education in profound ways. By addressing its challenges through strategic policy and mindful usage, society can harness its potential to create a more equitable and effective educational landscape.`
      },
      'writing-2': {
        task1: `The diagram illustrates the process of recycling aluminium cans, from collection to the manufacturing of new cans.

Overall, the process consists of eight distinct stages, beginning with the collection of used cans and culminating in the production of new aluminium containers. Notably, the entire cycle takes approximately six weeks and consumes 95% less energy than producing aluminium from raw materials.

In the first stage, used aluminium cans are collected from homes and businesses. These are then transported to a recycling facility where they undergo sorting to separate them from other materials. Following this, the cans are thoroughly cleaned to remove any labels and contaminants that might interfere with the recycling process.

The next stage involves shredding the clean cans into small pieces, which makes them easier to melt. The shredded aluminium is then heated to a temperature of 700°C in a furnace until it becomes liquid. This molten aluminium is subsequently poured into moulds to form large blocks called ingots.

In the penultimate stage, these ingots are rolled into thin sheets of aluminium. Finally, these sheets are transported to manufacturing plants where they are used to produce new aluminium cans, thus completing the recycling loop.

In summary, aluminium can recycling is a well-organised, multi-stage process that significantly reduces energy consumption and promotes sustainability.`,
        task2: `Environmental degradation is one of the most pressing challenges of our time, and opinions differ on who bears the primary responsibility for addressing it—individuals or governments and large corporations. While both perspectives have merit, I believe that a collaborative approach is essential.

Those who argue that individuals should take action point out that collective small changes can have significant impacts. If every person reduced their plastic consumption, used public transport, and conserved energy, the cumulative effect would be substantial. Individual choices drive market demand; when consumers prioritise eco-friendly products, companies are incentivised to adopt sustainable practices. Moreover, grassroots movements have historically been powerful catalysts for change, pressuring policymakers to act.

Conversely, others contend that only governments and large companies possess the resources and authority to make meaningful change. Multinational corporations are responsible for the majority of global emissions, and without regulatory frameworks, they have little incentive to reduce their environmental footprint. Governments can implement carbon taxes, invest in renewable energy infrastructure, and establish international agreements like the Paris Accord. Individual actions, while commendable, are insufficient to address systemic issues such as industrial pollution and deforestation.

In my view, both individuals and institutions must share responsibility. Governments should create enabling environments through legislation and incentives, while corporations must be held accountable for their environmental impact. Simultaneously, individuals should make conscious lifestyle choices and use their purchasing power to support sustainable businesses. Neither approach alone is sufficient.

In conclusion, solving environmental problems requires a multi-faceted strategy involving individual commitment, corporate accountability, and governmental leadership. Only through collective action can we hope to preserve our planet for future generations.`
      },
      'writing-3': {
        task1: `The line graph compares average life expectancy in developed and developing countries from 1950 to 2020.

Overall, life expectancy increased significantly in both groups over the 70-year period, though developed countries consistently maintained higher figures. Notably, the gap between the two narrowed considerably, with developing countries showing faster relative improvement.

In 1950, people in developed countries could expect to live to approximately 66 years, whereas those in developing countries had a much lower average life expectancy of just 41 years—a gap of 25 years. By 1970, this disparity had begun to decrease, with developed countries reaching 71 years and developing countries improving to 51.

The trend continued over the following decades. By 1990, life expectancy in developed nations had risen to 75 years, while developing countries reached 62. The gap had now narrowed to 13 years. In 2010, developed countries recorded 79 years, compared to 68 in developing countries.

By 2020, the gap had further reduced to just 9 years, with developed countries at 80 years and developing countries at 71. This represents a remarkable increase of 30 years for developing nations over the entire period, compared to a 14-year increase for developed countries.

In summary, while developed countries have maintained higher life expectancy throughout the period, developing countries have made dramatic strides in catching up, suggesting significant improvements in healthcare, nutrition, and living standards.`,
        task2: `The rise of remote work has transformed the modern workplace, accelerated by technological advancements and recent global events. While this trend offers numerous benefits, it also presents significant challenges that must be carefully considered.

One of the primary advantages of working from home is increased flexibility. Employees can structure their days around personal commitments, leading to improved work-life balance. This flexibility is particularly beneficial for parents, caregivers, and individuals with health conditions. Furthermore, eliminating daily commutes saves time and money while reducing carbon emissions, contributing positively to environmental sustainability. From an employer's perspective, remote work can reduce overhead costs associated with office space and expand the talent pool beyond geographical constraints.

However, remote work is not without its drawbacks. The blurring of boundaries between professional and personal life can lead to overworking and burnout. Many employees report difficulty "switching off" when their home becomes their workplace. Additionally, the lack of face-to-face interaction can diminish team cohesion and spontaneous collaboration. Junior employees may miss out on valuable mentorship opportunities that naturally occur in office environments. There are also concerns about data security when employees access company systems from home networks.

Another significant issue is the potential for inequality. Not all workers have access to suitable home office setups or reliable internet connections. This digital divide can disadvantage certain demographics and create disparities in productivity and career advancement opportunities.

In conclusion, while remote work offers compelling benefits in terms of flexibility, cost savings, and environmental impact, its challenges regarding work-life balance, collaboration, and equity cannot be ignored. The most effective approach may be hybrid models that combine the best aspects of both remote and in-office work.`,
      }
    },
    speaking: {
      'speaking-1': {
        part2Model: `I'd like to talk about a memorable journey I took to Japan last summer with my best friend, Alex. We spent two weeks travelling across the country, and it was truly an experience I'll never forget.

We started our trip in Tokyo, where we explored the bustling Shibuya Crossing and visited ancient temples like Senso-ji. What struck me most was the fascinating contrast between ultra-modern technology and centuries-old tradition—you could see a skyscraper right next to a peaceful zen garden.

After Tokyo, we took the bullet train to Kyoto, which was the highlight of our journey. We stayed in a traditional ryokan, slept on futons, and enjoyed authentic kaiseki cuisine. We also visited Fushimi Inari Shrine with its thousands of orange torii gates stretching up the mountain.

This journey was particularly memorable because it was my first time experiencing a culture so different from my own. I learned to appreciate the Japanese values of respect, precision, and harmony with nature. The food was incredible too—I discovered flavours I never knew existed.

What made it truly special, though, was sharing it with Alex. We navigated language barriers together, got lost in Tokyo's subway system, and laughed about our mistakes. Those shared challenges brought us closer together.

I would absolutely love to make a similar journey again. In fact, I'm already saving up to visit South Korea next year. I think what makes a journey truly memorable is the combination of new experiences, personal growth, and good company.`
      },
      'speaking-2': {
        part2Model: `The piece of technology that has genuinely transformed my life is my smartphone, specifically when I started using it systematically about six years ago.

Before I got serious about using my phone productively, I was quite disorganised. I would miss appointments, forget birthdays, and struggle to keep track of my university assignments. Everything changed when I started using calendar apps, note-taking tools like Evernote, and productivity applications.

The most significant change has been in my academic and professional life. I use my phone to set reminders for deadlines, record lecture notes, and access academic papers through university databases. During my commute, I listen to educational podcasts and language learning apps. This has allowed me to turn previously wasted time into productive learning opportunities.

Socially, my phone has helped me maintain long-distance relationships. Video calls with family abroad, instant messaging with friends across different time zones, and sharing photos has made the world feel much smaller and more connected.

However, I must acknowledge that this change isn't entirely positive. I've noticed that I sometimes struggle to disconnect, and I find myself instinctively reaching for my phone during conversations. Social media can also be a significant distraction and source of anxiety.

On balance, I believe the positive changes outweigh the negatives, provided one uses the technology mindfully. The key is intentional usage rather than passive consumption.`
      },
      'speaking-3': {
        part2Model: `A skill I would really like to learn in the future is playing the piano. I've always been fascinated by how pianists can create such beautiful, complex music using just their hands and a keyboard.

The main reason I want to learn piano is that music has always been a significant part of my life. I listen to various genres daily, and I feel that understanding how music is constructed would deepen my appreciation enormously. Additionally, research suggests that learning an instrument improves cognitive function and reduces stress, which would benefit both my studies and mental wellbeing.

I plan to start by taking weekly lessons with a qualified teacher who can guide me through proper technique and theory. I believe having structured instruction initially is crucial to avoid developing bad habits. Alongside lessons, I intend to practice for at least thirty minutes every day, as consistency is more important than intensity when learning an instrument.

I've already purchased a digital piano for my apartment, and I've bookmarked several online resources and tutorial channels for supplementary learning. I also plan to join a local music group once I reach an intermediate level, as playing with others would motivate me and accelerate my progress.

This skill would benefit me in numerous ways. Beyond the personal satisfaction of making music, it would give me a creative outlet outside of my academic work. It could also become a social activity if I play with others, and perhaps one day I could perform for friends and family, which would be incredibly rewarding.`
      }
    }
  },

  // Linking words for coherence check
  linkingWords: [
    'however', 'therefore', 'furthermore', 'moreover', 'nevertheless', 'nonetheless',
    'consequently', 'additionally', 'similarly', 'conversely', 'meanwhile', 'subsequently',
    'in contrast', 'on the other hand', 'for example', 'for instance', 'in addition',
    'as a result', 'in conclusion', 'to summarise', 'firstly', 'secondly', 'finally',
    'although', 'despite', 'whereas', 'while', 'because', 'since', 'due to', 'owing to'
  ],

  // Common spelling mistakes
  commonMisspellings: {
    'accomodate': 'accommodate',
    'occured': 'occurred',
    'seperate': 'separate',
    'definately': 'definitely',
    'enviroment': 'environment',
    'goverment': 'government',
    'occurence': 'occurrence',
    'recieve': 'receive',
    'wich': 'which',
    'untill': 'until',
    'publically': 'publicly',
    'truely': 'truly',
    'beleive': 'believe',
    'neccessary': 'necessary',
    'reccomend': 'recommend',
    'successfull': 'successful',
    'ocassion': 'occasion',
    'arguement': 'argument',
    'independant': 'independent',
    'occurance': 'occurrence'
  },

  // Analyse writing task
  analyseWriting(taskNum, text, taskInfo) {
    if (!text || text.trim().length === 0) {
      return {
        wordCount: 0,
        bandEstimate: 0,
        feedback: ['No answer submitted.'],
        improvements: ['Please write an answer to receive feedback.'],
        strengths: [],
        issues: []
      };
    }

    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const issues = [];
    const strengths = [];
    const feedback = [];
    const improvements = [];

    // 1. Word count check
    const minWords = taskNum === 1 ? 150 : 250;
    if (wordCount < minWords) {
      issues.push({
        type: 'word_count',
        severity: 'high',
        message: `Word count (${wordCount}) is below the minimum requirement (${minWords}).`,
        suggestion: `Aim for at least ${minWords} words. Add more detail, examples, or analysis.`
      });
    } else if (wordCount < minWords * 1.1) {
      issues.push({
        type: 'word_count',
        severity: 'medium',
        message: `Word count (${wordCount}) barely meets the minimum.`,
        suggestion: 'Consider adding more supporting details to strengthen your response.'
      });
    } else {
      strengths.push(`Good word count: ${wordCount} words (exceeds minimum of ${minWords}).`);
    }

    // 2. Paragraph structure
    const paragraphs = text.split('\n').filter(p => p.trim().length > 0);
    if (paragraphs.length < 3) {
      issues.push({
        type: 'structure',
        severity: 'medium',
        message: 'Your answer has very few paragraphs.',
        suggestion: taskNum === 1
          ? 'Use an introduction, overview paragraph, and detail paragraphs.'
          : 'Use an introduction, 2-3 body paragraphs, and a conclusion.'
      });
    } else {
      strengths.push(`Good paragraph structure with ${paragraphs.length} paragraphs.`);
    }

    // 3. Coherence - linking words
    const textLower = text.toLowerCase();
    const foundLinks = this.linkingWords.filter(w => textLower.includes(w.toLowerCase()));
    if (foundLinks.length < 3) {
      issues.push({
        type: 'coherence',
        severity: 'medium',
        message: `Only ${foundLinks.length} linking words detected.`,
        suggestion: 'Use more cohesive devices: however, furthermore, consequently, in contrast, etc.'
      });
    } else if (foundLinks.length > 10) {
      strengths.push(`Excellent use of ${foundLinks.length} cohesive devices.`);
    } else {
      strengths.push(`Good use of ${foundLinks.length} linking words.`);
    }

    // 4. Sentence variety
    const avgLength = sentences.length > 0 ? wordCount / sentences.length : 0;
    const longSentences = sentences.filter(s => s.split(/\s+/).length > 20).length;
    const shortSentences = sentences.filter(s => s.split(/\s+/).length < 5).length;

    if (avgLength < 10) {
      issues.push({
        type: 'sentence_variety',
        severity: 'medium',
        message: 'Sentences are mostly short and simple.',
        suggestion: 'Combine some sentences using subordinating conjunctions (although, because, while).'
      });
    } else if (longSentences > sentences.length * 0.5) {
      issues.push({
        type: 'sentence_variety',
        severity: 'low',
        message: 'Many very long sentences detected.',
        suggestion: 'Break some long sentences into shorter ones for clarity.'
      });
    } else {
      strengths.push(`Good sentence variety (avg ${avgLength.toFixed(1)} words per sentence).`);
    }

    // 5. Vocabulary analysis
    const uniqueWords = new Set(words.map(w => w.toLowerCase().replace(/[^a-z]/g, ''))).size;
    const lexicalDiversity = wordCount > 0 ? uniqueWords / wordCount : 0;

    if (lexicalDiversity < 0.4) {
      issues.push({
        type: 'vocabulary',
        severity: 'medium',
        message: 'Vocabulary may be repetitive.',
        suggestion: 'Use synonyms and varied expressions. Avoid repeating the same words.'
      });
    } else if (lexicalDiversity > 0.6) {
      strengths.push(`Excellent vocabulary range (diversity: ${(lexicalDiversity * 100).toFixed(0)}%).`);
    } else {
      strengths.push(`Good vocabulary range (diversity: ${(lexicalDiversity * 100).toFixed(0)}%).`);
    }

    // 6. Spelling check
    const spellingErrors = [];
    words.forEach(word => {
      const clean = word.toLowerCase().replace(/[^a-z]/g, '');
      if (this.commonMisspellings[clean]) {
        spellingErrors.push({ wrong: word, correct: this.commonMisspellings[clean] });
      }
    });
    if (spellingErrors.length > 0) {
      issues.push({
        type: 'spelling',
        severity: 'medium',
        message: `${spellingErrors.length} potential spelling error(s) found.`,
        suggestion: spellingErrors.slice(0, 3).map(e => `"${e.wrong}" → "${e.correct}"`).join(', ')
      });
    }

    // 7. Task-specific checks
    if (taskNum === 1) {
      // Check for overview
      const overviewWords = ['overall', 'in general', 'in summary', 'to summarise', 'main trend'];
      const hasOverview = overviewWords.some(w => textLower.includes(w));
      if (!hasOverview) {
        issues.push({
          type: 'task_achievement',
          severity: 'high',
          message: 'No clear overview detected.',
          suggestion: 'Start your second paragraph with "Overall,..." summarising the main trends.'
        });
      } else {
        strengths.push('Clear overview paragraph present.');
      }

      // Check for data references
      const hasNumbers = /\d/.test(text);
      if (!hasNumbers) {
        issues.push({
          type: 'task_achievement',
          severity: 'high',
          message: 'No numerical data referenced.',
          suggestion: 'Include specific figures from the chart/graph to support your descriptions.'
        });
      } else {
        strengths.push('Data references included.');
      }
    } else {
      // Task 2 checks
      // Check for clear position
      const opinionWords = ['i believe', 'in my opinion', 'i think', 'i agree', 'i disagree', 'my view'];
      const hasOpinion = opinionWords.some(w => textLower.includes(w));
      if (!hasOpinion) {
        issues.push({
          type: 'task_response',
          severity: 'medium',
          message: 'Your personal position may be unclear.',
          suggestion: 'Explicitly state your opinion, e.g., "In my opinion,..." or "I believe..."'
        });
      } else {
        strengths.push('Clear personal position stated.');
      }

      // Check for examples
      const exampleWords = ['for example', 'for instance', 'such as', 'to illustrate'];
      const hasExample = exampleWords.some(w => textLower.includes(w));
      if (!hasExample) {
        issues.push({
          type: 'task_response',
          severity: 'medium',
          message: 'No specific examples detected.',
          suggestion: 'Support your arguments with concrete examples from your experience or knowledge.'
        });
      } else {
        strengths.push('Examples used to support arguments.');
      }
    }

    // Calculate estimated band
    const bandEstimate = this.calculateWritingBand(taskNum, wordCount, minWords, issues, strengths, sentences.length);

    // Build feedback
    feedback.push(`Word count: ${wordCount} / ${minWords}+ required`);
    feedback.push(`Paragraphs: ${paragraphs.length}`);
    feedback.push(`Sentences: ${sentences.length} (avg ${avgLength.toFixed(1)} words)`);
    feedback.push(`Linking words: ${foundLinks.length} used`);
    feedback.push(`Vocabulary diversity: ${(lexicalDiversity * 100).toFixed(0)}%`);

    // Build improvements
    issues.forEach(issue => {
      improvements.push(`${issue.severity.toUpperCase()}: ${issue.message} → ${issue.suggestion}`);
    });

    return {
      wordCount,
      bandEstimate,
      feedback,
      improvements,
      strengths,
      issues,
      foundLinks,
      lexicalDiversity,
      avgSentenceLength: avgLength
    };
  },

  calculateWritingBand(taskNum, wordCount, minWords, issues, strengths, sentenceCount) {
    let band = 4.0; // Start lower — must earn higher bands

    // Word count penalty (strict)
    if (wordCount < minWords * 0.5) band -= 2.0;
    else if (wordCount < minWords * 0.7) band -= 1.0;
    else if (wordCount < minWords * 0.9) band -= 0.5;
    else if (wordCount >= minWords * 1.2) band += 0.25;

    // Issue penalties (harsher)
    const highIssues = issues.filter(i => i.severity === 'high').length;
    const medIssues = issues.filter(i => i.severity === 'medium').length;
    const lowIssues = issues.filter(i => i.severity === 'low').length;
    band -= highIssues * 0.75;
    band -= medIssues * 0.5;
    band -= lowIssues * 0.25;

    // Strength bonuses (smaller — must truly excel)
    band += strengths.length * 0.1;

    // Sentence variety bonus (harder threshold)
    if (sentenceCount >= (taskNum === 1 ? 12 : 18)) band += 0.15;

    // Vocabulary diversity bonus (strict)
    const lexicalDiversity = strengths.find(s => s.includes('diversity')) ? 0.5 : 0;
    if (lexicalDiversity > 0.6) band += 0.15;

    // Clamp
    return Math.max(2.5, Math.min(9.0, Math.round(band * 2) / 2));
  },

  // Analyse speaking (text-based assessment)
  analyseSpeaking(testId, partNum, text) {
    if (!text || text.trim().length === 0) {
      return {
        wordCount: 0,
        bandEstimate: 0,
        feedback: ['No answer submitted.'],
        improvements: ['Please record or type your response for feedback.'],
        strengths: [],
        issues: []
      };
    }

    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
    const issues = [];
    const strengths = [];
    const feedback = [];
    const improvements = [];

    // Length check
    if (partNum === 2) {
      if (wordCount < 150) {
        issues.push({
          type: 'length',
          severity: 'medium',
          message: `Response is ${wordCount} words. Target for Part 2 is 150-250 words (1-2 min).`,
          suggestion: 'Extend your answer with more detail, examples, and personal feelings.'
        });
      } else if (wordCount > 300) {
        strengths.push('Good detailed response for Part 2.');
      }
    }

    // Fluency markers
    const textLower = text.toLowerCase();
    const fillers = ['um', 'uh', 'erm', 'like', 'you know', 'sort of', 'kind of'];
    const foundFillers = fillers.filter(f => textLower.includes(f));
    if (foundFillers.length > 3) {
      issues.push({
        type: 'fluency',
        severity: 'low',
        message: `Frequent fillers detected: ${foundFillers.join(', ')}.`,
        suggestion: 'Practice speaking without fillers. Pause instead of using "um" or "like".'
      });
    }

    // Coherence
    const discourseMarkers = ['firstly', 'secondly', 'also', 'moreover', 'however', 'in addition', 'finally'];
    const foundMarkers = discourseMarkers.filter(m => textLower.includes(m));
    if (foundMarkers.length < 2) {
      issues.push({
        type: 'coherence',
        severity: 'medium',
        message: 'Few discourse markers detected.',
        suggestion: 'Use words like "firstly", "also", "however" to structure your speech.'
      });
    } else {
      strengths.push(`Good use of discourse markers (${foundMarkers.length}).`);
    }

    // Vocabulary
    const uniqueWords = new Set(words.map(w => w.toLowerCase().replace(/[^a-z]/g, ''))).size;
    const diversity = wordCount > 0 ? uniqueWords / wordCount : 0;
    if (diversity > 0.55) {
      strengths.push('Good vocabulary range.');
    } else {
      issues.push({
        type: 'vocabulary',
        severity: 'low',
        message: 'Vocabulary may be repetitive.',
        suggestion: 'Try using synonyms and less common words.'
      });
    }

    // Grammar complexity
    const complexStructures = ['although', 'despite', 'whereas', 'if', 'unless', 'because', 'since', 'which', 'who', 'that'];
    const foundComplex = complexStructures.filter(c => textLower.includes(c));
    if (foundComplex.length < 2) {
      issues.push({
        type: 'grammar',
        severity: 'medium',
        message: 'Limited complex sentence structures.',
        suggestion: 'Use complex sentences: "Although X, Y" or "If X, then Y".'
      });
    } else {
      strengths.push(`Good use of complex structures (${foundComplex.length}).`);
    }

    // Band estimate (strict)
    let band = 4.0;
    if (wordCount > 180) band += 0.25;
    if (foundMarkers.length >= 4) band += 0.25;
    else if (foundMarkers.length < 2) band -= 0.5;
    if (foundComplex.length >= 4) band += 0.25;
    else if (foundComplex.length < 2) band -= 0.5;
    if (diversity > 0.6) band += 0.25;
    else if (diversity < 0.4) band -= 0.5;
    band -= issues.filter(i => i.severity === 'high').length * 0.75;
    band -= issues.filter(i => i.severity === 'medium').length * 0.5;
    band -= issues.filter(i => i.severity === 'low').length * 0.25;
    band += strengths.length * 0.1;

    band = Math.max(2.5, Math.min(9.0, Math.round(band * 2) / 2));

    feedback.push(`Word count: ${wordCount}`);
    feedback.push(`Discourse markers: ${foundMarkers.length}`);
    feedback.push(`Complex structures: ${foundComplex.length}`);
    feedback.push(`Vocabulary diversity: ${(diversity * 100).toFixed(0)}%`);

    issues.forEach(issue => {
      improvements.push(`${issue.severity.toUpperCase()}: ${issue.message} → ${issue.suggestion}`);
    });

    return {
      wordCount,
      bandEstimate: band,
      feedback,
      improvements,
      strengths,
      issues,
      foundMarkers,
      foundComplex,
      diversity
    };
  },

  // Generate model answer display
  getModelAnswer(testId, skill, taskNum) {
    if (skill === 'writing') {
      const test = this.modelAnswers.writing[testId];
      return test ? test[`task${taskNum}`] : null;
    }
    if (skill === 'speaking') {
      const test = this.modelAnswers.speaking[testId];
      return test ? test.part2Model : null;
    }
    return null;
  }
};
