// S-Strengths 34 Themes organized by domains:
// EXECUTING: Achiever, Arranger, Belief, Consistency, Deliberative, Discipline, Focus, Responsibility, Restorative
// INFLUENCING: Activator, Command, Communication, Competition, Maximizer, Self-Assurance, Significance, Woo
// RELATIONSHIP BUILDING: Adaptability, Connectedness, Developer, Empathy, Harmony, Includer, Individualization, Positivity, Relator
// STRATEGIC THINKING: Analytical, Context, Futuristic, Ideation, Input, Intellection, Learner, Strategic

const questions = [
  // Achiever
  {
    text: "I feel most satisfied when I:",
    options: [
      { label: "A", text: "Complete multiple tasks in a day", theme: "achiever", value: 5 },
      { label: "B", text: "Help someone develop their skills", theme: "developer", value: 3 },
      { label: "C", text: "Come up with innovative ideas", theme: "ideation", value: 4 },
      { label: "D", text: "Win or outperform others", theme: "competition", value: 2 }
    ]
  },
  
  // Activator
  {
    text: "When starting a new project, I prefer to:",
    options: [
      { label: "A", text: "Jump in and start immediately", theme: "activator", value: 5 },
      { label: "B", text: "Carefully plan every detail first", theme: "deliberative", value: 3 },
      { label: "C", text: "Research and gather information", theme: "input", value: 4 },
      { label: "D", text: "Understand the historical context", theme: "context", value: 2 }
    ]
  },

  // Adaptability
  {
    text: "When plans change unexpectedly, I:",
    options: [
      { label: "A", text: "Go with the flow easily", theme: "adaptability", value: 5 },
      { label: "B", text: "Prefer to stick to the original plan", theme: "discipline", value: 3 },
      { label: "C", text: "Analyze why the change occurred", theme: "analytical", value: 4 },
      { label: "D", text: "Take charge of the new direction", theme: "command", value: 2 }
    ]
  },

  // Analytical
  {
    text: "I make decisions based on:",
    options: [
      { label: "A", text: "Data, facts, and logical analysis", theme: "analytical", value: 5 },
      { label: "B", text: "My core values and beliefs", theme: "belief", value: 3 },
      { label: "C", text: "How it affects people's feelings", theme: "empathy", value: 4 },
      { label: "D", text: "My gut instinct and confidence", theme: "self-assurance", value: 2 }
    ]
  },

  // Arranger
  {
    text: "When managing multiple tasks, I:",
    options: [
      { label: "A", text: "Constantly reorganize for maximum efficiency", theme: "arranger", value: 5 },
      { label: "B", text: "Follow a consistent routine", theme: "discipline", value: 3 },
      { label: "C", text: "Focus on one thing at a time", theme: "focus", value: 4 },
      { label: "D", text: "Delegate to the right people", theme: "individualization", value: 2 }
    ]
  },

  // Belief
  {
    text: "What drives me most is:",
    options: [
      { label: "A", text: "Living according to my core values", theme: "belief", value: 5 },
      { label: "B", text: "Achieving tangible results", theme: "achiever", value: 3 },
      { label: "C", text: "Making a significant impact", theme: "significance", value: 4 },
      { label: "D", text: "Continuous learning and growth", theme: "learner", value: 2 }
    ]
  },

  // Command
  {
    text: "In group situations, I tend to:",
    options: [
      { label: "A", text: "Take control and direct others", theme: "command", value: 5 },
      { label: "B", text: "Ensure everyone's voice is heard", theme: "includer", value: 3 },
      { label: "C", text: "Keep the peace and reduce conflict", theme: "harmony", value: 4 },
      { label: "D", text: "Inspire and motivate the group", theme: "woo", value: 2 }
    ]
  },

  // Communication
  {
    text: "I am best at:",
    options: [
      { label: "A", text: "Explaining ideas through stories and examples", theme: "communication", value: 5 },
      { label: "B", text: "Listening and understanding others", theme: "empathy", value: 3 },
      { label: "C", text: "Analyzing complex information", theme: "analytical", value: 4 },
      { label: "D", text: "Getting things done efficiently", theme: "achiever", value: 2 }
    ]
  },

  // Competition
  {
    text: "I measure my success by:",
    options: [
      { label: "A", text: "How I compare to others", theme: "competition", value: 5 },
      { label: "B", text: "Personal growth and improvement", theme: "learner", value: 3 },
      { label: "C", text: "The number of tasks completed", theme: "achiever", value: 4 },
      { label: "D", text: "The quality and excellence achieved", theme: "maximizer", value: 2 }
    ]
  },

  // Connectedness
  {
    text: "I believe that:",
    options: [
      { label: "A", text: "Everything happens for a reason and is connected", theme: "connectedness", value: 5 },
      { label: "B", text: "We create our own destiny through action", theme: "activator", value: 3 },
      { label: "C", text: "Logic and reason explain most things", theme: "analytical", value: 4 },
      { label: "D", text: "The future holds unlimited possibilities", theme: "futuristic", value: 2 }
    ]
  },

  // Consistency (Fairness)
  {
    text: "I value:",
    options: [
      { label: "A", text: "Equal treatment and clear rules for everyone", theme: "consistency", value: 5 },
      { label: "B", text: "Recognizing each person's unique qualities", theme: "individualization", value: 3 },
      { label: "C", text: "Flexibility and adapting to situations", theme: "adaptability", value: 4 },
      { label: "D", text: "Excellence and pushing beyond standards", theme: "maximizer", value: 2 }
    ]
  },

  // Context
  {
    text: "To understand the present, I:",
    options: [
      { label: "A", text: "Look to the past and learn from history", theme: "context", value: 5 },
      { label: "B", text: "Focus on future possibilities", theme: "futuristic", value: 3 },
      { label: "C", text: "Analyze current data and trends", theme: "analytical", value: 4 },
      { label: "D", text: "Think about how things connect", theme: "connectedness", value: 2 }
    ]
  },

  // Deliberative
  {
    text: "Before making important decisions, I:",
    options: [
      { label: "A", text: "Carefully consider all risks and downsides", theme: "deliberative", value: 5 },
      { label: "B", text: "Act quickly and adjust as I go", theme: "activator", value: 3 },
      { label: "C", text: "Trust my instincts and confidence", theme: "self-assurance", value: 4 },
      { label: "D", text: "Seek input from multiple sources", theme: "input", value: 2 }
    ]
  },

  // Developer
  {
    text: "I get energized by:",
    options: [
      { label: "A", text: "Helping others grow and improve", theme: "developer", value: 5 },
      { label: "B", text: "Achieving my own goals", theme: "achiever", value: 3 },
      { label: "C", text: "Learning new things myself", theme: "learner", value: 4 },
      { label: "D", text: "Building strong relationships", theme: "relator", value: 2 }
    ]
  },

  // Discipline
  {
    text: "My ideal work environment is:",
    options: [
      { label: "A", text: "Structured with clear routines and schedules", theme: "discipline", value: 5 },
      { label: "B", text: "Flexible and spontaneous", theme: "adaptability", value: 3 },
      { label: "C", text: "Organized but allows for creativity", theme: "arranger", value: 4 },
      { label: "D", text: "Fast-paced and action-oriented", theme: "activator", value: 2 }
    ]
  },

  // Empathy
  {
    text: "I can easily:",
    options: [
      { label: "A", text: "Sense what others are feeling", theme: "empathy", value: 5 },
      { label: "B", text: "Understand each person's unique perspective", theme: "individualization", value: 3 },
      { label: "C", text: "Keep conversations positive and upbeat", theme: "positivity", value: 4 },
      { label: "D", text: "Connect with new people quickly", theme: "woo", value: 2 }
    ]
  },

  // Focus
  {
    text: "When working toward a goal, I:",
    options: [
      { label: "A", text: "Stay laser-focused and avoid distractions", theme: "focus", value: 5 },
      { label: "B", text: "Explore multiple paths simultaneously", theme: "ideation", value: 3 },
      { label: "C", text: "Adjust my approach as needed", theme: "adaptability", value: 4 },
      { label: "D", text: "Organize resources for maximum efficiency", theme: "arranger", value: 2 }
    ]
  },

  // Futuristic
  {
    text: "I am naturally drawn to:",
    options: [
      { label: "A", text: "Envisioning future possibilities", theme: "futuristic", value: 5 },
      { label: "B", text: "Understanding past patterns", theme: "context", value: 3 },
      { label: "C", text: "Analyzing current situations", theme: "analytical", value: 4 },
      { label: "D", text: "Taking immediate action", theme: "activator", value: 2 }
    ]
  },

  // Harmony
  {
    text: "When there's conflict, I:",
    options: [
      { label: "A", text: "Seek common ground and consensus", theme: "harmony", value: 5 },
      { label: "B", text: "Address it directly and decisively", theme: "command", value: 3 },
      { label: "C", text: "Understand everyone's feelings first", theme: "empathy", value: 4 },
      { label: "D", text: "Find practical solutions", theme: "restorative", value: 2 }
    ]
  },

  // Ideation
  {
    text: "I love to:",
    options: [
      { label: "A", text: "Brainstorm and generate new ideas", theme: "ideation", value: 5 },
      { label: "B", text: "Execute and complete tasks", theme: "achiever", value: 3 },
      { label: "C", text: "Develop strategic plans", theme: "strategic", value: 4 },
      { label: "D", text: "Learn and absorb information", theme: "learner", value: 2 }
    ]
  },

  // Includer
  {
    text: "In social situations, I:",
    options: [
      { label: "A", text: "Make sure no one feels left out", theme: "includer", value: 5 },
      { label: "B", text: "Connect deeply with a few people", theme: "relator", value: 3 },
      { label: "C", text: "Meet as many new people as possible", theme: "woo", value: 4 },
      { label: "D", text: "Adapt to whoever I'm with", theme: "adaptability", value: 2 }
    ]
  },

  // Individualization
  {
    text: "I am skilled at:",
    options: [
      { label: "A", text: "Recognizing what makes each person unique", theme: "individualization", value: 5 },
      { label: "B", text: "Treating everyone equally and fairly", theme: "consistency", value: 3 },
      { label: "C", text: "Understanding people's emotions", theme: "empathy", value: 4 },
      { label: "D", text: "Helping people reach their potential", theme: "developer", value: 2 }
    ]
  },

  // Input
  {
    text: "I enjoy:",
    options: [
      { label: "A", text: "Collecting information and resources", theme: "input", value: 5 },
      { label: "B", text: "Learning new skills and knowledge", theme: "learner", value: 3 },
      { label: "C", text: "Thinking deeply about concepts", theme: "intellection", value: 4 },
      { label: "D", text: "Generating creative ideas", theme: "ideation", value: 2 }
    ]
  },

  // Intellection
  {
    text: "I need time to:",
    options: [
      { label: "A", text: "Think deeply and reflect alone", theme: "intellection", value: 5 },
      { label: "B", text: "Discuss ideas with others", theme: "communication", value: 3 },
      { label: "C", text: "Take action and see results", theme: "activator", value: 4 },
      { label: "D", text: "Connect with people emotionally", theme: "relator", value: 2 }
    ]
  },

  // Learner
  {
    text: "What excites me most is:",
    options: [
      { label: "A", text: "The process of learning something new", theme: "learner", value: 5 },
      { label: "B", text: "Becoming an expert in my field", theme: "focus", value: 3 },
      { label: "C", text: "Achieving mastery and excellence", theme: "maximizer", value: 4 },
      { label: "D", text: "Discovering innovative solutions", theme: "ideation", value: 2 }
    ]
  },

  // Maximizer
  {
    text: "I prefer to:",
    options: [
      { label: "A", text: "Build on strengths to achieve excellence", theme: "maximizer", value: 5 },
      { label: "B", text: "Fix problems and weaknesses", theme: "restorative", value: 3 },
      { label: "C", text: "Develop people's potential", theme: "developer", value: 4 },
      { label: "D", text: "Compete to be the best", theme: "competition", value: 2 }
    ]
  },

  // Positivity
  {
    text: "People describe me as:",
    options: [
      { label: "A", text: "Enthusiastic and upbeat", theme: "positivity", value: 5 },
      { label: "B", text: "Thoughtful and analytical", theme: "analytical", value: 3 },
      { label: "C", text: "Caring and empathetic", theme: "empathy", value: 4 },
      { label: "D", text: "Confident and self-assured", theme: "self-assurance", value: 2 }
    ]
  },

  // Relator
  {
    text: "I value:",
    options: [
      { label: "A", text: "Deep, authentic relationships with close friends", theme: "relator", value: 5 },
      { label: "B", text: "Meeting and connecting with many people", theme: "woo", value: 3 },
      { label: "C", text: "Including everyone in the group", theme: "includer", value: 4 },
      { label: "D", text: "Understanding each person individually", theme: "individualization", value: 2 }
    ]
  },

  // Responsibility
  {
    text: "When I commit to something, I:",
    options: [
      { label: "A", text: "Feel personally obligated to follow through", theme: "responsibility", value: 5 },
      { label: "B", text: "Work hard to achieve the goal", theme: "achiever", value: 3 },
      { label: "C", text: "Stay focused until completion", theme: "focus", value: 4 },
      { label: "D", text: "Ensure it meets high standards", theme: "maximizer", value: 2 }
    ]
  },

  // Restorative
  {
    text: "I am energized by:",
    options: [
      { label: "A", text: "Solving problems and fixing what's broken", theme: "restorative", value: 5 },
      { label: "B", text: "Creating new ideas and possibilities", theme: "ideation", value: 3 },
      { label: "C", text: "Optimizing what already works well", theme: "maximizer", value: 4 },
      { label: "D", text: "Analyzing root causes", theme: "analytical", value: 2 }
    ]
  },

  // Self-Assurance
  {
    text: "I trust:",
    options: [
      { label: "A", text: "My own judgment and instincts", theme: "self-assurance", value: 5 },
      { label: "B", text: "Data and logical analysis", theme: "analytical", value: 3 },
      { label: "C", text: "Input from trusted advisors", theme: "relator", value: 4 },
      { label: "D", text: "Careful deliberation of risks", theme: "deliberative", value: 2 }
    ]
  },

  // Significance
  {
    text: "I want to:",
    options: [
      { label: "A", text: "Make a meaningful impact and be recognized", theme: "significance", value: 5 },
      { label: "B", text: "Win and be the best", theme: "competition", value: 3 },
      { label: "C", text: "Live according to my values", theme: "belief", value: 4 },
      { label: "D", text: "Accomplish many things", theme: "achiever", value: 2 }
    ]
  },

  // Strategic
  {
    text: "When facing complex situations, I:",
    options: [
      { label: "A", text: "See patterns and alternative pathways", theme: "strategic", value: 5 },
      { label: "B", text: "Analyze data systematically", theme: "analytical", value: 3 },
      { label: "C", text: "Envision the ideal future outcome", theme: "futuristic", value: 4 },
      { label: "D", text: "Generate multiple creative solutions", theme: "ideation", value: 2 }
    ]
  },

  // Woo (Winning Others Over)
  {
    text: "I enjoy:",
    options: [
      { label: "A", text: "Meeting new people and winning them over", theme: "woo", value: 5 },
      { label: "B", text: "Deepening existing relationships", theme: "relator", value: 3 },
      { label: "C", text: "Presenting and communicating to groups", theme: "communication", value: 4 },
      { label: "D", text: "Making everyone feel included", theme: "includer", value: 2 }
    ]
  },

  // Additional questions for better assessment accuracy
  {
    text: "My work style is best described as:",
    options: [
      { label: "A", text: "Methodical and organized", theme: "discipline", value: 5 },
      { label: "B", text: "Spontaneous and flexible", theme: "adaptability", value: 3 },
      { label: "C", text: "Driven and productive", theme: "achiever", value: 4 },
      { label: "D", text: "Thoughtful and reflective", theme: "intellection", value: 2 }
    ]
  },

  {
    text: "I am most proud of:",
    options: [
      { label: "A", text: "My integrity and values", theme: "belief", value: 5 },
      { label: "B", text: "My accomplishments and results", theme: "achiever", value: 3 },
      { label: "C", text: "The people I've helped develop", theme: "developer", value: 4 },
      { label: "D", text: "My unique contributions", theme: "significance", value: 2 }
    ]
  },

  {
    text: "When learning something new, I:",
    options: [
      { label: "A", text: "Love the journey of discovery", theme: "learner", value: 5 },
      { label: "B", text: "Focus on practical application", theme: "achiever", value: 3 },
      { label: "C", text: "Collect resources and information", theme: "input", value: 4 },
      { label: "D", text: "Think deeply about implications", theme: "intellection", value: 2 }
    ]
  },

  {
    text: "In team projects, I naturally:",
    options: [
      { label: "A", text: "Take ownership and ensure completion", theme: "responsibility", value: 5 },
      { label: "B", text: "Coordinate and organize resources", theme: "arranger", value: 3 },
      { label: "C", text: "Generate ideas and possibilities", theme: "ideation", value: 4 },
      { label: "D", text: "Build team cohesion", theme: "harmony", value: 2 }
    ]
  },

  {
    text: "I am drawn to:",
    options: [
      { label: "A", text: "Understanding how everything connects", theme: "connectedness", value: 5 },
      { label: "B", text: "Finding the best path forward", theme: "strategic", value: 3 },
      { label: "C", text: "Learning from historical patterns", theme: "context", value: 4 },
      { label: "D", text: "Imagining future possibilities", theme: "futuristic", value: 2 }
    ]
  },

  {
    text: "My communication style is:",
    options: [
      { label: "A", text: "Engaging and story-driven", theme: "communication", value: 5 },
      { label: "B", text: "Direct and commanding", theme: "command", value: 3 },
      { label: "C", text: "Warm and encouraging", theme: "positivity", value: 4 },
      { label: "D", text: "Empathetic and understanding", theme: "empathy", value: 2 }
    ]
  },

  {
    text: "I approach challenges by:",
    options: [
      { label: "A", text: "Identifying and fixing the root problem", theme: "restorative", value: 5 },
      { label: "B", text: "Carefully weighing all options", theme: "deliberative", value: 3 },
      { label: "C", text: "Taking decisive action", theme: "activator", value: 4 },
      { label: "D", text: "Finding the optimal strategy", theme: "strategic", value: 2 }
    ]
  },

  {
    text: "What matters most to me is:",
    options: [
      { label: "A", text: "Fairness and equal treatment", theme: "consistency", value: 5 },
      { label: "B", text: "Recognizing individual differences", theme: "individualization", value: 3 },
      { label: "C", text: "Achieving excellence", theme: "maximizer", value: 4 },
      { label: "D", text: "Winning and being #1", theme: "competition", value: 2 }
    ]
  }
];
