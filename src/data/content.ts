export const boards = [
  { id: "cbse", name: "CBSE", emoji: "📘" },
  { id: "bihar", name: "Bihar Board", emoji: "📗" },
];

export const classes = [
  { id: 1, name: "Class 1", emoji: "🌱" },
  { id: 2, name: "Class 2", emoji: "🌿" },
  { id: 3, name: "Class 3", emoji: "🌳" },
  { id: 4, name: "Class 4", emoji: "🌟" },
  { id: 5, name: "Class 5", emoji: "🚀" },
];

export const dashboardSections = [
  { id: "subjects", title: "Subjects Overview", emoji: "📚", color: "primary", description: "Explore what you'll learn" },
  { id: "topics", title: "Important Topics", emoji: "🗂", color: "secondary", description: "Key chapters & concepts" },
  { id: "study-plan", title: "Study Plan", emoji: "🎯", color: "accent", description: "Your daily routine" },
  { id: "skill-builder", title: "Skill Builder", emoji: "🚀", color: "coral", description: "Build super skills" },
  { id: "reading-corner", title: "Reading Corner", emoji: "📖", color: "lavender", description: "Stories & books" },
  { id: "struggling", title: "I'm Struggling With", emoji: "🧠", color: "rose", description: "We're here to help" },
  { id: "next-class", title: "Next Class Preview", emoji: "➡️", color: "sky", description: "See what's coming" },
];

export type SubjectData = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  learn: string[];
  importance: string;
  tips: string[];
  funIdeas: string[];
};

export const getSubjects = (classNum: number): SubjectData[] => {
  const base: SubjectData[] = [
    {
      id: "math",
      name: "Mathematics",
      emoji: "🔢",
      color: "primary",
      learn: classNum <= 2
        ? ["Counting numbers", "Addition and subtraction", "Shapes around us", "Patterns and sequences"]
        : ["Multiplication and division", "Fractions basics", "Geometry", "Measurement and data", "Word problems"],
      importance: "Math helps you think logically and solve everyday problems. From counting your toys to sharing snacks equally!",
      tips: ["Practice a little every day", "Use objects like coins or blocks to count", "Don't rush — take your time"],
      funIdeas: ["Count things around your house", "Play number games with friends", "Draw shapes and color them"],
    },
    {
      id: "english",
      name: "English",
      emoji: "📝",
      color: "sky",
      learn: classNum <= 2
        ? ["Alphabet and phonics", "Simple words and sentences", "Reading short stories", "Writing practice"]
        : ["Grammar basics", "Essay writing", "Comprehension passages", "Vocabulary building", "Creative writing"],
      importance: "English helps you communicate with people everywhere. Reading and writing open doors to amazing stories!",
      tips: ["Read a story every day", "Write new words in a notebook", "Speak in English with family for fun"],
      funIdeas: ["Make your own storybook", "Play word games", "Watch English cartoons and learn new words"],
    },
    {
      id: "hindi",
      name: "Hindi",
      emoji: "🇮🇳",
      color: "coral",
      learn: classNum <= 2
        ? ["Hindi varnamala", "Simple words", "Short poems", "Picture reading"]
        : ["Grammar rules", "Essay writing in Hindi", "Story comprehension", "Letter writing", "Poem recitation"],
      importance: "Hindi is our national language. It connects us to beautiful stories, poems, and our culture!",
      tips: ["Read Hindi comics or stories", "Practice writing every day", "Recite poems aloud"],
      funIdeas: ["Sing Hindi songs", "Watch Hindi cartoons", "Write letters to friends in Hindi"],
    },
    {
      id: "evs",
      name: "Environmental Studies",
      emoji: "🌍",
      color: "accent",
      learn: classNum <= 2
        ? ["My family and home", "Animals and plants", "Food and water", "Weather and seasons"]
        : ["Our environment", "Living and non-living things", "Water cycle", "Maps and directions", "Health and hygiene"],
      importance: "EVS teaches you about the world around you — nature, animals, and how to take care of our planet!",
      tips: ["Observe nature around you", "Ask questions about how things work", "Keep a nature diary"],
      funIdeas: ["Plant a seed and watch it grow", "Go on a nature walk", "Make a weather chart"],
    },
  ];

  if (classNum >= 3) {
    base.push({
      id: "gk",
      name: "General Knowledge",
      emoji: "💡",
      color: "sunshine",
      learn: ["Famous personalities", "Important places", "Science facts", "Current events for kids", "Fun trivia"],
      importance: "GK makes you smart and aware! It helps you understand the world and have great conversations.",
      tips: ["Read a GK book or magazine", "Watch educational videos", "Play quiz games with family"],
      funIdeas: ["Have a family quiz night", "Make a scrapbook of facts", "Create your own quiz for friends"],
    });
  }

  return base;
};

export const getTopics = (classNum: number) => ({
  math: classNum <= 2
    ? [
        { chapter: "Numbers", concepts: ["Counting 1-100", "Before and after", "Bigger and smaller"], important: true },
        { chapter: "Addition", concepts: ["Adding single digits", "Adding with pictures", "Word problems"], important: true },
        { chapter: "Subtraction", concepts: ["Taking away", "Finding difference"], important: true },
        { chapter: "Shapes", concepts: ["Circle, Square, Triangle", "3D shapes basics"], important: false },
      ]
    : [
        { chapter: "Multiplication", concepts: ["Times tables", "Word problems", "Properties"], important: true },
        { chapter: "Division", concepts: ["Sharing equally", "Long division basics"], important: true },
        { chapter: "Fractions", concepts: ["Half, quarter, third", "Comparing fractions"], important: true },
        { chapter: "Geometry", concepts: ["Angles", "Perimeter", "Area basics"], important: true },
        { chapter: "Measurement", concepts: ["Length, weight, capacity", "Time and calendar"], important: false },
      ],
  english: classNum <= 2
    ? [
        { chapter: "Phonics", concepts: ["Letter sounds", "Blends", "Sight words"], important: true },
        { chapter: "Reading", concepts: ["Simple stories", "Picture comprehension"], important: true },
        { chapter: "Writing", concepts: ["Letter formation", "Simple sentences"], important: true },
      ]
    : [
        { chapter: "Grammar", concepts: ["Nouns, verbs, adjectives", "Tenses", "Punctuation"], important: true },
        { chapter: "Comprehension", concepts: ["Reading passages", "Answering questions"], important: true },
        { chapter: "Writing", concepts: ["Essays", "Letters", "Stories"], important: true },
        { chapter: "Vocabulary", concepts: ["Synonyms & antonyms", "Idioms"], important: false },
      ],
  hindi: classNum <= 2
    ? [
        { chapter: "वर्णमाला", concepts: ["स्वर और व्यंजन", "मात्राएँ"], important: true },
        { chapter: "शब्द", concepts: ["Simple words", "Picture reading"], important: true },
      ]
    : [
        { chapter: "व्याकरण", concepts: ["संज्ञा, सर्वनाम", "क्रिया", "विशेषण"], important: true },
        { chapter: "निबंध", concepts: ["Simple essay writing", "My school, My family"], important: true },
        { chapter: "कविता", concepts: ["Poem recitation", "Understanding meaning"], important: false },
      ],
  evs: classNum <= 2
    ? [
        { chapter: "My Family", concepts: ["Family members", "My home"], important: true },
        { chapter: "Animals", concepts: ["Domestic and wild", "Baby animals"], important: true },
        { chapter: "Plants", concepts: ["Parts of plant", "Types of plants"], important: false },
      ]
    : [
        { chapter: "Environment", concepts: ["Pollution", "Conservation", "Recycling"], important: true },
        { chapter: "Water", concepts: ["Water cycle", "Sources of water", "Saving water"], important: true },
        { chapter: "Food", concepts: ["Food groups", "Nutrition", "Healthy habits"], important: true },
        { chapter: "Maps", concepts: ["Directions", "Symbols", "Reading maps"], important: false },
      ],
});

export const getStudyPlan = (classNum: number) => ({
  dailyTime: classNum <= 2 ? "30–45 minutes" : "1–1.5 hours",
  weekly: [
    { day: "Monday", subjects: ["Math", "Hindi"], activity: "Puzzle time" },
    { day: "Tuesday", subjects: ["English", "EVS"], activity: "Drawing" },
    { day: "Wednesday", subjects: ["Math", "English"], activity: "Story reading" },
    { day: "Thursday", subjects: ["Hindi", classNum >= 3 ? "GK" : "EVS"], activity: "Outdoor play" },
    { day: "Friday", subjects: ["English", "Math"], activity: "Fun quiz" },
    { day: "Saturday", subjects: ["Revision"], activity: "Creative time" },
    { day: "Sunday", subjects: ["Rest & Play"], activity: "Family time" },
  ],
  homeworkTips: [
    "Do homework right after a small snack break",
    "Start with the subject you find hardest",
    "Take a 5-minute break every 20 minutes",
    "Ask for help if you're stuck — it's okay!",
  ],
  examTips: [
    "Revise a little every day, not all at once",
    "Make colorful notes with pictures",
    "Sleep well the night before",
    "Read questions carefully and stay calm",
    "It's okay if you don't know everything!",
  ],
});

export const getSkills = (classNum: number) =>
  classNum <= 2
    ? [
        { name: "Reading Habit", emoji: "📚", why: "Reading makes your brain stronger and fills it with amazing ideas!", steps: ["Read 10 minutes daily", "Start with picture books", "Ask someone to read with you"], activities: ["Visit a library", "Read to your stuffed toys", "Point at words while reading"] },
        { name: "Listening Skills", emoji: "👂", why: "Good listening helps you learn faster and understand better!", steps: ["Look at the person talking", "Don't interrupt", "Ask questions after"], activities: ["Listen to a story podcast", "Play 'Simon Says'", "Repeat instructions back"] },
        { name: "Clean Handwriting", emoji: "✍️", why: "Neat handwriting makes your work beautiful and easy to read!", steps: ["Hold pencil correctly", "Write slowly at first", "Practice on lined paper"], activities: ["Copy a short poem", "Write your name in fancy letters", "Practice drawing circles and lines"] },
        { name: "Basic Communication", emoji: "🗣️", why: "Speaking clearly helps others understand you and makes you confident!", steps: ["Speak slowly and clearly", "Use full sentences", "Practice greeting people"], activities: ["Introduce yourself to someone new", "Tell a family member about your day", "Describe your favorite toy"] },
      ]
    : [
        { name: "Storytelling", emoji: "📖", why: "Storytelling builds creativity, confidence, and language skills!", steps: ["Start with stories you know", "Add fun details", "Use different voices"], activities: ["Tell a bedtime story to siblings", "Write and illustrate a mini story", "Record yourself telling a story"] },
        { name: "Public Speaking", emoji: "🎤", why: "Speaking in front of others builds courage and leadership!", steps: ["Practice in front of a mirror", "Start with small groups", "Speak about what you know"], activities: ["Present your favorite book to family", "Recite a poem at school", "Lead morning prayer at school"] },
        { name: "Computer Basics", emoji: "💻", why: "Computers are everywhere! Knowing basics helps you learn and create.", steps: ["Learn to type slowly", "Know the parts of a computer", "Use educational websites"], activities: ["Type your name", "Draw using Paint", "Play educational games online"] },
        { name: "Logical Thinking", emoji: "🧩", why: "Logic helps you solve problems and think step by step!", steps: ["Play puzzles regularly", "Ask 'why' and 'how'", "Look for patterns"], activities: ["Solve a jigsaw puzzle", "Play Sudoku for kids", "Build with blocks following a plan"] },
        { name: "Creative Drawing", emoji: "🎨", why: "Drawing expresses your ideas and makes learning fun!", steps: ["Draw something every day", "Try different colors", "Don't worry about perfection"], activities: ["Draw your dream house", "Illustrate a story", "Create a comic strip"] },
      ];

export const readingCorner = {
  storybooks: [
    { title: "Panchatantra Stories", age: "6–10", emoji: "🦊" },
    { title: "Amar Chitra Katha", age: "7–11", emoji: "📕" },
    { title: "Champak Magazine", age: "6–10", emoji: "🐰" },
    { title: "Tinkle Comics", age: "7–11", emoji: "📗" },
    { title: "Jataka Tales", age: "6–9", emoji: "🐘" },
    { title: "The Jungle Book", age: "8–11", emoji: "🐻" },
  ],
  moralStories: [
    { title: "The Thirsty Crow", moral: "Where there's a will, there's a way", emoji: "🐦" },
    { title: "The Tortoise and the Hare", moral: "Slow and steady wins the race", emoji: "🐢" },
    { title: "The Boy Who Cried Wolf", moral: "Always tell the truth", emoji: "🐺" },
    { title: "The Ant and the Grasshopper", moral: "Hard work pays off", emoji: "🐜" },
  ],
  challenges: [
    { title: "Read 5 books this month", emoji: "📚", difficulty: "Easy" },
    { title: "Read a story in Hindi", emoji: "🇮🇳", difficulty: "Medium" },
    { title: "Write a book review", emoji: "✍️", difficulty: "Challenge" },
    { title: "Read to a younger sibling", emoji: "👶", difficulty: "Fun" },
  ],
  vocabGames: [
    { title: "Word of the Day", description: "Learn one new word every day and use it in a sentence", emoji: "📝" },
    { title: "Rhyme Time", description: "Find words that rhyme with a given word", emoji: "🎵" },
    { title: "Opposite Day", description: "Learn opposites of common words", emoji: "🔄" },
    { title: "Spelling Bee", description: "Practice spelling with family members", emoji: "🐝" },
  ],
};

export const struggles = [
  {
    id: "math-hard",
    title: "Math is hard",
    emoji: "🔢",
    message: "Hey, it's totally okay! Math can feel tricky, but you're not alone. Many kids find math challenging, and that's normal. The secret? Practice a little every day, and you'll get better!",
    tips: [
      "Use objects like candies or blocks to count",
      "Break big problems into smaller steps",
      "Practice just 10 minutes every day",
      "Ask your teacher to explain again — they'll love to help!",
      "Try math games — they make learning fun!",
    ],
  },
  {
    id: "forget",
    title: "I forget things",
    emoji: "🧠",
    message: "Forgetting is normal — even adults forget things! Your brain is still growing, and there are cool tricks to help you remember better.",
    tips: [
      "Revise what you learned before sleeping",
      "Draw pictures or mind maps of what you study",
      "Teach what you learned to someone else",
      "Use colorful sticky notes as reminders",
      "Connect new things to what you already know",
    ],
  },
  {
    id: "english-hard",
    title: "I don't understand English",
    emoji: "📝",
    message: "Learning a new language takes time, and you're doing great just by trying! Every new word you learn is a step forward. Be proud of yourself!",
    tips: [
      "Start with easy picture books in English",
      "Watch your favorite cartoons in English",
      "Learn 3 new words every day",
      "Don't be afraid to make mistakes — that's how you learn!",
      "Sing English songs — music helps you remember words",
    ],
  },
  {
    id: "distracted",
    title: "I get distracted",
    emoji: "🦋",
    message: "It's hard to focus sometimes, especially when there are so many fun things around! But don't worry — you can train your brain to focus better.",
    tips: [
      "Study in a quiet, clean spot",
      "Put away toys and tablets while studying",
      "Use a timer — study for 15 minutes, then take a break",
      "Make a to-do list of what to study",
      "Reward yourself after finishing tasks",
    ],
  },
  {
    id: "exam-nervous",
    title: "I feel nervous in exams",
    emoji: "😰",
    message: "Feeling nervous before exams is completely normal! Even the smartest people feel it. The good news? A little nervousness actually helps you do better!",
    tips: [
      "Prepare a little every day so you feel ready",
      "Take deep breaths before the exam starts",
      "Read each question twice before answering",
      "Start with questions you know well",
      "Remember: one exam doesn't define how smart you are!",
    ],
  },
];

export const getNextClassPreview = (classNum: number) => {
  if (classNum >= 5) {
    return {
      nextClass: 6,
      changes: [
        "You'll have more subjects like Science and Social Studies",
        "Exams will be a bit longer",
        "You'll learn about history and geography separately",
        "More project work and activities",
      ],
      newSubjects: ["Science", "Social Studies", "Computer Science"],
      difficulty: "Subjects go deeper, but you'll be ready!",
      preparation: [
        "Get really good at your Class 5 basics",
        "Start reading more on your own",
        "Practice writing longer answers",
        "Build strong math fundamentals",
      ],
    };
  }
  return {
    nextClass: classNum + 1,
    changes: classNum <= 2
      ? [
          "You'll read longer stories",
          "Math will have bigger numbers",
          "You'll write more sentences",
          "New fun activities to try",
        ]
      : [
          "Chapters will be a bit longer",
          "You'll solve harder word problems",
          "More creative writing assignments",
          "New topics in EVS and GK",
        ],
    newSubjects: classNum === 2 ? ["General Knowledge (from Class 3)"] : [],
    difficulty: classNum <= 2
      ? "Just a little step up — you'll handle it easily!"
      : "A bit more challenging, but nothing you can't do!",
    preparation: [
      "Master your current class topics first",
      "Read for fun every day",
      "Practice writing neatly",
      "Stay curious and keep asking questions",
    ],
  };
};
