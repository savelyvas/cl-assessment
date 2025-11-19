const themeDescriptions = {
  achiever: {
    name: 'Achiever',
    domain: 'Executing',
    tagline: 'People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina.',
    description: 'Your Achiever theme helps explain your drive. Achiever describes a constant need for achievement. You feel as if every day starts at zero. By the end of the day you must achieve something tangible in order to feel good about yourself. And by "every day" you mean every single day—workdays, weekends, vacations.',
    strengths: [
      'High productivity and work ethic',
      'Strong sense of accomplishment',
      'Self-motivated and driven',
      'Reliable and consistent',
      'Sets and achieves goals regularly'
    ],
    challenges: [
      'May struggle with work-life balance',
      'Can feel guilty during downtime',
      'Might overcommit to tasks',
      'May measure self-worth by productivity',
      'Can experience burnout from constant drive'
    ]
  },
  activator: {
    name: 'Activator',
    domain: 'Influencing',
    tagline: 'People exceptionally talented in the Activator theme can make things happen by turning thoughts into action.',
    description: 'You make things happen. You are the one who makes things happen. You are impatient for action. You may concede that analysis has its uses or that debate and discussion can occasionally yield some valuable insights, but deep down you know that only action is real.',
    strengths: [
      'Turns ideas into action quickly',
      'Energizes others to start projects',
      'Decisive and bold',
      'Overcomes inertia effectively',
      'Creates momentum and urgency'
    ],
    challenges: [
      'May act before fully planning',
      'Can be impatient with deliberation',
      'Might start too many projects',
      'May struggle with detailed analysis',
      'Can push others too quickly'
    ]
  }
};

themeDescriptions.adaptability = {
  name: 'Adaptability',
  domain: 'Relationship Building',
  tagline: 'People exceptionally talented in the Adaptability theme prefer to go with the flow.',
  description: 'You live in the moment. You don\'t see the future as a fixed destination. Instead, you see it as a place that you create out of the choices that you make right now. And so you discover your future one choice at a time.',
  strengths: [
    'Flexible and responsive to change',
    'Stays calm in unexpected situations',
    'Lives in the present moment',
    'Adjusts plans easily',
    'Handles multiple demands well'
  ],
  challenges: [
    'May lack long-term planning',
    'Can appear unfocused to others',
    'Might struggle with rigid structures',
    'May have difficulty saying no',
    'Can be seen as lacking direction'
  ]
};

themeDescriptions.analytical = {
  name: 'Analytical',
  domain: 'Strategic Thinking',
  tagline: 'People exceptionally talented in the Analytical theme search for reasons and causes.',
  description: 'Your Analytical theme challenges other people: "Prove it. Show me why what you are claiming is true." In the face of this kind of questioning some will find that their brilliant theories wither and die.',
  strengths: [
    'Logical and objective thinking',
    'Identifies patterns and causes',
    'Makes data-driven decisions',
    'Asks probing questions',
    'Validates theories with evidence'
  ],
  challenges: [
    'May overanalyze situations',
    'Can be skeptical of intuition',
    'Might slow down decision-making',
    'May appear overly critical',
    'Can struggle with ambiguity'
  ]
};

themeDescriptions.arranger = {
  name: 'Arranger',
  domain: 'Executing',
  tagline: 'People exceptionally talented in the Arranger theme can organize, but they also have a flexibility that complements this ability.',
  description: 'You are a conductor. When faced with a complex situation involving many factors, you enjoy managing all of the variables, aligning and realigning them until you are sure you have arranged them in the most productive configuration possible.',
  strengths: [
    'Organizes resources efficiently',
    'Flexible in approach',
    'Coordinates multiple elements',
    'Optimizes configurations',
    'Handles complexity well'
  ],
  challenges: [
    'May constantly reorganize',
    'Can overwhelm others with changes',
    'Might struggle with fixed processes',
    'May appear indecisive',
    'Can lose sight of simplicity'
  ]
};

themeDescriptions.belief = {
  name: 'Belief',
  domain: 'Executing',
  tagline: 'People exceptionally talented in the Belief theme have certain core values that are unchanging.',
  description: 'If you possess a strong Belief theme, you have certain core values that are enduring. These values vary from one person to another, but ordinarily your Belief theme causes you to be family-oriented, altruistic, even spiritual, and to value responsibility and high ethics.',
  strengths: [
    'Strong core values guide decisions',
    'Passionate and purposeful',
    'Provides stability and direction',
    'Inspires trust in others',
    'Committed to meaningful work'
  ],
  challenges: [
    'May be inflexible on values',
    'Can judge others harshly',
    'Might struggle with compromise',
    'May appear rigid',
    'Can have difficulty with moral ambiguity'
  ]
};

themeDescriptions.command = {
  name: 'Command',
  domain: 'Influencing',
  tagline: 'People exceptionally talented in the Command theme have presence and can take control of a situation.',
  description: 'Command leads you to take charge. Unlike some people, you feel no discomfort with imposing your views on others. On the contrary, once your opinion is formed, you need to share it with others.',
  strengths: [
    'Takes charge naturally',
    'Makes tough decisions',
    'Confronts issues directly',
    'Provides clarity in chaos',
    'Speaks up for others'
  ],
  challenges: [
    'May be too direct or blunt',
    'Can intimidate others',
    'Might dominate conversations',
    'May struggle with collaboration',
    'Can appear aggressive'
  ]
};

themeDescriptions.communication = {
  name: 'Communication',
  domain: 'Influencing',
  tagline: 'People exceptionally talented in the Communication theme generally find it easy to put their thoughts into words.',
  description: 'You like to explain, to describe, to host, to speak in public, and to write. This is your Communication theme at work. Ideas are a dry beginning. Events are static. You feel a need to bring them to life, to energize them, to make them exciting and vivid.',
  strengths: [
    'Articulates ideas clearly',
    'Engages audiences effectively',
    'Uses stories and examples well',
    'Makes complex ideas accessible',
    'Energizes through words'
  ],
  challenges: [
    'May talk too much',
    'Can dominate discussions',
    'Might oversimplify complex topics',
    'May struggle with listening',
    'Can be seen as attention-seeking'
  ]
};

themeDescriptions.competition = {
  name: 'Competition',
  domain: 'Influencing',
  tagline: 'People exceptionally talented in the Competition theme measure their progress against the performance of others.',
  description: 'Competition is rooted in comparison. When you look at the world, you are instinctively aware of other people\'s performance. Their performance is the ultimate yardstick. No matter how hard you tried, no matter how worthy your intentions, if you reached your goal but did not outperform your peers, the achievement feels hollow.',
  strengths: [
    'Driven to win and excel',
    'Motivated by comparison',
    'Pushes for high performance',
    'Thrives in competitive environments',
    'Sets ambitious goals'
  ],
  challenges: [
    'May focus too much on winning',
    'Can create unnecessary competition',
    'Might struggle with collaboration',
    'May take losses personally',
    'Can alienate teammates'
  ]
};

themeDescriptions.connectedness = {
  name: 'Connectedness',
  domain: 'Relationship Building',
  tagline: 'People exceptionally talented in the Connectedness theme have faith in the links among all things.',
  description: 'Things happen for a reason. You are sure of it. You are sure of it because in your soul you know that we are all connected. Yes, we are individuals, responsible for our own judgments and in possession of our own free will, but nonetheless we are part of something larger.',
  strengths: [
    'Sees the bigger picture',
    'Builds bridges between people',
    'Provides perspective and calm',
    'Values diversity and inclusion',
    'Finds meaning in events'
  ],
  challenges: [
    'May appear too philosophical',
    'Can struggle with practical details',
    'Might avoid conflict',
    'May have difficulty with boundaries',
    'Can be seen as unrealistic'
  ]
};

themeDescriptions.consistency = {
  name: 'Consistency',
  domain: 'Executing',
  tagline: 'People exceptionally talented in the Consistency theme are keenly aware of the need to treat people the same.',
  description: 'Balance is important to you. You are keenly aware of the need to treat people the same, no matter what their station in life, so you do not want to see the scales tipped too far in any one person\'s favor.',
  strengths: [
    'Ensures fair treatment',
    'Creates clear rules and processes',
    'Provides stability',
    'Values equality',
    'Maintains consistent standards'
  ],
  challenges: [
    'May be inflexible with rules',
    'Can overlook individual needs',
    'Might resist necessary exceptions',
    'May appear rigid',
    'Can struggle with customization'
  ]
};

themeDescriptions.context = {
  name: 'Context',
  domain: 'Strategic Thinking',
  tagline: 'People exceptionally talented in the Context theme enjoy thinking about the past and understanding the present by researching its history.',
  description: 'You look back. You look back because that is where the answers lie. You look back to understand the present. From your vantage point the present is unstable, a confusing clamor of competing voices.',
  strengths: [
    'Learns from history',
    'Provides valuable perspective',
    'Understands root causes',
    'Makes informed decisions',
    'Values experience and tradition'
  ],
  challenges: [
    'May dwell on the past',
    'Can resist change',
    'Might miss future opportunities',
    'May appear backward-looking',
    'Can struggle with innovation'
  ]
};

themeDescriptions.deliberative = {
  name: 'Deliberative',
  domain: 'Executing',
  tagline: 'People exceptionally talented in the Deliberative theme are best described by the serious care they take in making decisions or choices.',
  description: 'You are careful. You are vigilant. You are a private person. You know that the world is an unpredictable place. Everything may seem in order, but beneath the surface you sense the many risks.',
  strengths: [
    'Makes careful decisions',
    'Identifies risks effectively',
    'Thinks before acting',
    'Protects against problems',
    'Values privacy and discretion'
  ],
  challenges: [
    'May be slow to decide',
    'Can appear overly cautious',
    'Might miss opportunities',
    'May frustrate action-oriented people',
    'Can be seen as negative'
  ]
};

themeDescriptions.developer = {
  name: 'Developer',
  domain: 'Relationship Building',
  tagline: 'People exceptionally talented in the Developer theme recognize and cultivate the potential in others.',
  description: 'You see the potential in others. Very often, in fact, potential is all you see. In your view no individual is fully formed. On the contrary, each individual is a work in progress, alive with possibilities.',
  strengths: [
    'Recognizes potential in others',
    'Patient with growth process',
    'Celebrates small improvements',
    'Invests in people development',
    'Provides encouragement'
  ],
  challenges: [
    'May invest in wrong people',
    'Can be disappointed by lack of growth',
    'Might neglect own development',
    'May appear too patient',
    'Can struggle with accountability'
  ]
};

themeDescriptions.discipline = {
  name: 'Discipline',
  domain: 'Executing',
  tagline: 'People exceptionally talented in the Discipline theme enjoy routine and structure.',
  description: 'Your world needs to be predictable. It needs to be ordered and planned. So you instinctively impose structure on your world. You set up routines. You focus on timelines and deadlines.',
  strengths: [
    'Creates order and structure',
    'Follows through consistently',
    'Plans and organizes effectively',
    'Values punctuality',
    'Maintains high standards'
  ],
  challenges: [
    'May be inflexible with routines',
    'Can struggle with spontaneity',
    'Might frustrate flexible people',
    'May appear rigid',
    'Can resist necessary changes'
  ]
};

themeDescriptions.empathy = {
  name: 'Empathy',
  domain: 'Relationship Building',
  tagline: 'People exceptionally talented in the Empathy theme can sense other people\'s feelings by imagining themselves in others\' lives or situations.',
  description: 'You can sense the emotions of those around you. You can feel what they are feeling as though their feelings are your own. Intuitively, you are able to see the world through their eyes and share their perspective.',
  strengths: [
    'Understands others\' emotions',
    'Provides emotional support',
    'Builds strong connections',
    'Anticipates needs',
    'Creates safe environments'
  ],
  challenges: [
    'May absorb others\' emotions',
    'Can be emotionally drained',
    'Might struggle with boundaries',
    'May avoid necessary conflict',
    'Can take things personally'
  ]
};

themeDescriptions.focus = {
  name: 'Focus',
  domain: 'Executing',
  tagline: 'People exceptionally talented in the Focus theme can take a direction, follow through and make the corrections necessary to stay on track.',
  description: 'You need a clear destination. Lacking one, your life and your work can quickly become frustrating. And so each year, each month, and even each week you set goals.',
  strengths: [
    'Maintains clear priorities',
    'Stays on track',
    'Filters distractions',
    'Achieves goals efficiently',
    'Provides direction'
  ],
  challenges: [
    'May be inflexible with goals',
    'Can miss peripheral opportunities',
    'Might appear single-minded',
    'May struggle with multitasking',
    'Can be impatient with tangents'
  ]
};

themeDescriptions.futuristic = {
  name: 'Futuristic',
  domain: 'Strategic Thinking',
  tagline: 'People exceptionally talented in the Futuristic theme are inspired by the future and what could be.',
  description: 'You are a dreamer who sees visions of what could be and who cherishes those visions. When the present proves too frustrating and the people around you too pragmatic, you conjure up your visions of the future and they energize you.',
  strengths: [
    'Envisions possibilities',
    'Inspires others with vision',
    'Anticipates future trends',
    'Provides hope and direction',
    'Thinks long-term'
  ],
  challenges: [
    'May neglect present realities',
    'Can appear unrealistic',
    'Might struggle with details',
    'May frustrate practical people',
    'Can be impatient with current state'
  ]
};

themeDescriptions.harmony = {
  name: 'Harmony',
  domain: 'Relationship Building',
  tagline: 'People exceptionally talented in the Harmony theme look for consensus and try to minimize conflict.',
  description: 'You look for areas of agreement. In your view there is little to be gained from conflict and friction, so you seek to hold them to a minimum. When you know that the people around you hold differing views, you try to find the common ground.',
  strengths: [
    'Seeks consensus',
    'Reduces conflict',
    'Finds common ground',
    'Creates peaceful environments',
    'Values cooperation'
  ],
  challenges: [
    'May avoid necessary conflict',
    'Can appear indecisive',
    'Might compromise too much',
    'May struggle with confrontation',
    'Can enable dysfunction'
  ]
};

themeDescriptions.ideation = {
  name: 'Ideation',
  domain: 'Strategic Thinking',
  tagline: 'People exceptionally talented in the Ideation theme are fascinated by ideas and can find connections between seemingly disparate phenomena.',
  description: 'You are fascinated by ideas. What is an idea? An idea is a concept, the best explanation of the most events. You are delighted when you discover beneath the complex surface an elegantly simple concept to explain why things are the way they are.',
  strengths: [
    'Generates creative ideas',
    'Connects disparate concepts',
    'Thinks innovatively',
    'Energizes brainstorming',
    'Sees new possibilities'
  ],
  challenges: [
    'May have too many ideas',
    'Can struggle with execution',
    'Might appear scattered',
    'May lose interest quickly',
    'Can overwhelm with options'
  ]
};

themeDescriptions.includer = {
  name: 'Includer',
  domain: 'Relationship Building',
  tagline: 'People exceptionally talented in the Includer theme accept others and show awareness of those who feel left out.',
  description: 'You notice those who feel left out, and you make an effort to include them. You sense their loneliness. You know what it feels like to stand on the outside looking in. You want to draw them in so that they can feel the warmth of the group.',
  strengths: [
    'Includes everyone',
    'Expands the circle',
    'Values diversity',
    'Makes others feel welcome',
    'Breaks down barriers'
  ],
  challenges: [
    'May include too indiscriminately',
    'Can dilute group effectiveness',
    'Might struggle with exclusivity',
    'May avoid necessary boundaries',
    'Can be taken advantage of'
  ]
};

themeDescriptions.individualization = {
  name: 'Individualization',
  domain: 'Relationship Building',
  tagline: 'People exceptionally talented in the Individualization theme are intrigued with the unique qualities of each person.',
  description: 'Your Individualization theme leads you to be intrigued by the unique qualities of each person. You are impatient with generalizations or "types" because you don\'t want to obscure what is special and distinct about each person.',
  strengths: [
    'Recognizes individual uniqueness',
    'Customizes approach to people',
    'Builds effective teams',
    'Values differences',
    'Brings out individual strengths'
  ],
  challenges: [
    'May struggle with standardization',
    'Can appear to play favorites',
    'Might resist general policies',
    'May take too long to decide',
    'Can overcomplicate simple situations'
  ]
};

themeDescriptions.input = {
  name: 'Input',
  domain: 'Strategic Thinking',
  tagline: 'People exceptionally talented in the Input theme have a need to collect and archive.',
  description: 'You are inquisitive. You collect things. You might collect information—words, facts, books, and quotations. Or you might collect tangible objects such as butterflies, baseball cards, porcelain dolls, or sepia photographs.',
  strengths: [
    'Gathers valuable information',
    'Creates useful resources',
    'Stays informed',
    'Provides relevant data',
    'Values knowledge'
  ],
  challenges: [
    'May collect too much',
    'Can struggle with organization',
    'Might hoard information',
    'May get lost in research',
    'Can delay action for more input'
  ]
};

themeDescriptions.intellection = {
  name: 'Intellection',
  domain: 'Strategic Thinking',
  tagline: 'People exceptionally talented in the Intellection theme are characterized by their intellectual activity.',
  description: 'You like to think. You like mental activity. You like exercising the "muscles" of your brain, stretching them in multiple directions. This need for mental activity may be focused; for example, you may be trying to solve a problem or develop an idea or understand another person\'s feelings.',
  strengths: [
    'Thinks deeply',
    'Enjoys intellectual discussions',
    'Reflects before acting',
    'Generates insights',
    'Values alone time for thinking'
  ],
  challenges: [
    'May overthink situations',
    'Can appear detached',
    'Might struggle with action',
    'May seem aloof',
    'Can get lost in thought'
  ]
};

themeDescriptions.learner = {
  name: 'Learner',
  domain: 'Strategic Thinking',
  tagline: 'People exceptionally talented in the Learner theme have a great desire to learn and want to continuously improve.',
  description: 'You love to learn. The subject matter that interests you most will be determined by your other themes and experiences, but whatever the subject, you will always be drawn to the process of learning.',
  strengths: [
    'Continuously improves',
    'Embraces new challenges',
    'Energized by learning',
    'Adapts to change',
    'Values growth'
  ],
  challenges: [
    'May focus on learning over doing',
    'Can start but not finish',
    'Might appear unfocused',
    'May struggle with expertise',
    'Can be impatient with repetition'
  ]
};

themeDescriptions.maximizer = {
  name: 'Maximizer',
  domain: 'Influencing',
  tagline: 'People exceptionally talented in the Maximizer theme focus on strengths as a way to stimulate personal and group excellence.',
  description: 'Excellence, not average, is your measure. Taking something from below average to slightly above average takes a great deal of effort and in your opinion is not very rewarding. Transforming something strong into something superb takes just as much effort but is much more thrilling.',
  strengths: [
    'Focuses on strengths',
    'Pursues excellence',
    'Optimizes performance',
    'Celebrates success',
    'Develops talent'
  ],
  challenges: [
    'May neglect weaknesses',
    'Can appear elitist',
    'Might be impatient with average',
    'May struggle with basics',
    'Can set unrealistic standards'
  ]
};

themeDescriptions.positivity = {
  name: 'Positivity',
  domain: 'Relationship Building',
  tagline: 'People exceptionally talented in the Positivity theme have contagious enthusiasm and can get others excited about what they are going to do.',
  description: 'You are generous with praise, quick to smile, and always on the lookout for the positive in the situation. Some call you lighthearted. Others just wish that their glass were as full as yours seems to be.',
  strengths: [
    'Brings enthusiasm',
    'Lifts others\' spirits',
    'Celebrates successes',
    'Creates positive environments',
    'Finds the good in situations'
  ],
  challenges: [
    'May appear unrealistic',
    'Can minimize real problems',
    'Might avoid negative emotions',
    'May frustrate cynics',
    'Can be seen as superficial'
  ]
};

themeDescriptions.relator = {
  name: 'Relator',
  domain: 'Relationship Building',
  tagline: 'People exceptionally talented in the Relator theme enjoy close relationships with others.',
  description: 'Relator describes your attitude toward your relationships. In simple terms, the Relator theme pulls you toward people you already know. You do not necessarily shy away from meeting new people, but you do derive a great deal of pleasure and strength from being around your close friends.',
  strengths: [
    'Builds deep relationships',
    'Values authenticity',
    'Loyal and trustworthy',
    'Creates genuine connections',
    'Invests in close friendships'
  ],
  challenges: [
    'May have limited network',
    'Can be slow to trust',
    'Might appear exclusive',
    'May struggle with networking',
    'Can be overly selective'
  ]
};

themeDescriptions.responsibility = {
  name: 'Responsibility',
  domain: 'Executing',
  tagline: 'People exceptionally talented in the Responsibility theme take psychological ownership of what they say they will do.',
  description: 'Your Responsibility theme forces you to take psychological ownership for anything you commit to, and whether large or small, you feel emotionally bound to follow it through to completion.',
  strengths: [
    'Follows through on commitments',
    'Takes ownership',
    'Highly dependable',
    'Values integrity',
    'Earns trust'
  ],
  challenges: [
    'May overcommit',
    'Can struggle to delegate',
    'Might take on others\' work',
    'May feel guilty saying no',
    'Can experience stress from obligations'
  ]
};

themeDescriptions.restorative = {
  name: 'Restorative',
  domain: 'Executing',
  tagline: 'People exceptionally talented in the Restorative theme are adept at dealing with problems and good at figuring out what is wrong and resolving it.',
  description: 'You love to solve problems. Whereas some are dismayed when they encounter yet another breakdown, you can be energized by it. You enjoy the challenge of analyzing the symptoms, identifying what is wrong, and finding the solution.',
  strengths: [
    'Solves problems effectively',
    'Identifies root causes',
    'Fixes what\'s broken',
    'Energized by challenges',
    'Improves situations'
  ],
  challenges: [
    'May focus too much on problems',
    'Can appear negative',
    'Might overlook what works',
    'May create problems to solve',
    'Can be critical'
  ]
};

themeDescriptions['self-assurance'] = {
  name: 'Self-Assurance',
  domain: 'Influencing',
  tagline: 'People exceptionally talented in the Self-Assurance theme feel confident in their ability to take risks and manage their own lives.',
  description: 'Self-Assurance is similar to self-confidence. In the deepest part of you, you have faith in your strengths. You know that you are able—able to take risks, able to meet new challenges, able to stake claims, and, most important, able to deliver.',
  strengths: [
    'Confident in abilities',
    'Takes calculated risks',
    'Trusts own judgment',
    'Independent decision-maker',
    'Provides certainty'
  ],
  challenges: [
    'May appear arrogant',
    'Can ignore others\' input',
    'Might take excessive risks',
    'May struggle with feedback',
    'Can be seen as stubborn'
  ]
};

themeDescriptions.significance = {
  name: 'Significance',
  domain: 'Influencing',
  tagline: 'People exceptionally talented in the Significance theme want to make a big impact and be recognized for their contributions.',
  description: 'You want to be very significant in the eyes of other people. In the truest sense of the word you want to be recognized. You want to be heard. You want to stand out. You want to be known.',
  strengths: [
    'Driven to make an impact',
    'Sets ambitious goals',
    'Inspires others',
    'Values recognition',
    'Pursues meaningful work'
  ],
  challenges: [
    'May seek attention excessively',
    'Can appear self-centered',
    'Might struggle with small tasks',
    'May need constant validation',
    'Can be disappointed by lack of recognition'
  ]
};

themeDescriptions.strategic = {
  name: 'Strategic',
  domain: 'Strategic Thinking',
  tagline: 'People exceptionally talented in the Strategic theme create alternative ways to proceed and can quickly spot relevant patterns and issues.',
  description: 'The Strategic theme enables you to sort through the clutter and find the best route. It is not a skill that can be taught. It is a distinct way of thinking, a special perspective on the world at large.',
  strengths: [
    'Sees patterns and pathways',
    'Anticipates obstacles',
    'Creates alternative plans',
    'Makes quick decisions',
    'Finds optimal routes'
  ],
  challenges: [
    'May change direction too often',
    'Can appear scattered',
    'Might confuse others with options',
    'May struggle with details',
    'Can be impatient with linear thinking'
  ]
};

themeDescriptions.woo = {
  name: 'Woo',
  domain: 'Influencing',
  tagline: 'People exceptionally talented in the Woo theme love the challenge of meeting new people and winning them over.',
  description: 'Woo stands for winning others over. You enjoy the challenge of meeting new people and getting them to like you. Strangers are rarely intimidating to you. On the contrary, strangers can be energizing.',
  strengths: [
    'Connects with new people easily',
    'Expands networks',
    'Breaks the ice',
    'Energizes social situations',
    'Builds rapport quickly'
  ],
  challenges: [
    'May have shallow relationships',
    'Can appear insincere',
    'Might neglect deep connections',
    'May struggle with follow-through',
    'Can be seen as superficial'
  ]
};
