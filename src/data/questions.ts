export type MCQQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type FillBlankQuestion = {
  sentence: string;
  answer: string;
  hint?: string;
};

export type MatchQuestion = {
  left: string[];
  right: string[];
  correctPairs: number[]; // index in right[] that matches left[i]
};

export type ShortAnswerQuestion = {
  question: string;
  sampleAnswer: string;
};

export type PracticeSet = {
  lessonId: string;
  mcqs: MCQQuestion[];
  fillBlanks: FillBlankQuestion[];
  matchPairs: MatchQuestion;
  shortAnswers: ShortAnswerQuestion[];
};

export type MiniTest = {
  id: string;
  title: string;
  afterLessons: string[]; // lesson IDs this test covers
  questions: MCQQuestion[];
};

// Generate practice questions dynamically based on subject and class
const mathPractice = (classNum: number): PracticeSet[] => {
  if (classNum <= 2) {
    return [
      {
        lessonId: classNum === 1 ? "counting" : "numbers-200",
        mcqs: [
          { question: "What number comes after 9?", options: ["8", "10", "11", "7"], correctIndex: 1, explanation: "After 9 comes 10! Good counting!" },
          { question: "How many fingers do you have on both hands?", options: ["5", "8", "10", "12"], correctIndex: 2, explanation: "We have 5 fingers on each hand, so 5 + 5 = 10!" },
          { question: "Which number is bigger: 7 or 3?", options: ["3", "7", "Same", "Can't tell"], correctIndex: 1, explanation: "7 is bigger than 3. Great job!" },
          { question: "What comes between 4 and 6?", options: ["3", "5", "7", "8"], correctIndex: 1, explanation: "5 comes between 4 and 6!" },
          { question: "Count: ⭐⭐⭐⭐⭐⭐ How many stars?", options: ["4", "5", "6", "7"], correctIndex: 2, explanation: "There are 6 stars! Well counted!" },
        ],
        fillBlanks: [
          { sentence: "The number after 15 is ___", answer: "16" },
          { sentence: "5, 10, 15, 20, ___", answer: "25", hint: "Count by 5s" },
          { sentence: "The number before 10 is ___", answer: "9" },
          { sentence: "2, 4, 6, ___, 10", answer: "8", hint: "Count by 2s" },
          { sentence: "10, 20, 30, ___, 50", answer: "40", hint: "Count by 10s" },
        ],
        matchPairs: {
          left: ["1", "5", "10", "0", "3"],
          right: ["Three", "Zero", "Five", "One", "Ten"],
          correctPairs: [3, 2, 4, 1, 0],
        },
        shortAnswers: [
          { question: "Count backwards from 10 to 1.", sampleAnswer: "10, 9, 8, 7, 6, 5, 4, 3, 2, 1" },
          { question: "What is the smallest single-digit number?", sampleAnswer: "1 (or 0 if counting from zero)" },
          { question: "Write three numbers bigger than 50.", sampleAnswer: "51, 60, 75 (any three numbers above 50)" },
          { question: "Is 25 bigger or smaller than 30?", sampleAnswer: "25 is smaller than 30." },
          { question: "How many days are in a week?", sampleAnswer: "There are 7 days in a week." },
        ],
      },
      {
        lessonId: classNum === 1 ? "addition" : "addition-2",
        mcqs: [
          { question: "2 + 3 = ?", options: ["4", "5", "6", "3"], correctIndex: 1, explanation: "2 + 3 = 5. You got it!" },
          { question: "What is 4 + 4?", options: ["6", "7", "8", "9"], correctIndex: 2, explanation: "4 + 4 = 8. Double 4!" },
          { question: "7 + 0 = ?", options: ["0", "7", "70", "1"], correctIndex: 1, explanation: "Any number plus 0 stays the same!" },
          { question: "5 + 3 = ?", options: ["7", "8", "9", "6"], correctIndex: 1, explanation: "5 + 3 = 8!" },
          { question: "1 + 9 = ?", options: ["8", "9", "10", "11"], correctIndex: 2, explanation: "1 + 9 = 10. You made a ten!" },
        ],
        fillBlanks: [
          { sentence: "3 + 4 = ___", answer: "7" },
          { sentence: "___ + 5 = 10", answer: "5" },
          { sentence: "6 + 2 = ___", answer: "8" },
          { sentence: "8 + ___ = 8", answer: "0", hint: "What number doesn't change anything?" },
          { sentence: "4 + 6 = ___", answer: "10" },
        ],
        matchPairs: {
          left: ["2+2", "3+3", "5+5", "1+1", "4+1"],
          right: ["10", "4", "2", "6", "5"],
          correctPairs: [1, 3, 0, 2, 4],
        },
        shortAnswers: [
          { question: "You have 3 apples and get 2 more. How many now?", sampleAnswer: "3 + 2 = 5 apples" },
          { question: "What happens when you add 0 to any number?", sampleAnswer: "The number stays the same." },
          { question: "What is 6 + 4?", sampleAnswer: "6 + 4 = 10" },
          { question: "If you have 5 pencils and buy 3 more, how many?", sampleAnswer: "5 + 3 = 8 pencils" },
          { question: "Is 3 + 4 the same as 4 + 3?", sampleAnswer: "Yes! Both equal 7. Order doesn't matter in addition." },
        ],
      },
    ];
  }
  // Class 3-5: return generic practice
  return [
    {
      lessonId: classNum === 3 ? "multiplication-tables" : classNum === 4 ? "large-numbers" : "decimals-5",
      mcqs: [
        { question: "5 × 6 = ?", options: ["25", "30", "35", "11"], correctIndex: 1, explanation: "5 × 6 = 30! Great multiplication!" },
        { question: "What is 100 ÷ 4?", options: ["20", "25", "50", "30"], correctIndex: 1, explanation: "100 ÷ 4 = 25." },
        { question: "Which is greater: ½ or ¼?", options: ["½", "¼", "Same", "Can't tell"], correctIndex: 0, explanation: "½ is greater because you have more of the whole!" },
        { question: "9 × 7 = ?", options: ["56", "63", "72", "54"], correctIndex: 1, explanation: "9 × 7 = 63!" },
        { question: "What is 50% of 100?", options: ["25", "50", "75", "100"], correctIndex: 1, explanation: "50% means half, so half of 100 = 50!" },
      ],
      fillBlanks: [
        { sentence: "8 × 7 = ___", answer: "56" },
        { sentence: "144 ÷ 12 = ___", answer: "12" },
        { sentence: "¼ of 20 = ___", answer: "5" },
        { sentence: "3 × ___ = 27", answer: "9" },
        { sentence: "100 - 37 = ___", answer: "63" },
      ],
      matchPairs: {
        left: ["½", "¼", "¾", "10%", "100%"],
        right: ["All", "Half", "Three-quarters", "Quarter", "One-tenth"],
        correctPairs: [1, 3, 2, 4, 0],
      },
      shortAnswers: [
        { question: "What is the area of a rectangle 5 cm × 3 cm?", sampleAnswer: "Area = 5 × 3 = 15 cm²" },
        { question: "If a pen costs ₹10, how much do 7 pens cost?", sampleAnswer: "7 × 10 = ₹70" },
        { question: "What is ½ + ¼?", sampleAnswer: "½ + ¼ = 2/4 + 1/4 = ¾" },
        { question: "Write 25% as a fraction.", sampleAnswer: "25% = 25/100 = ¼" },
        { question: "What is the perimeter of a square with side 6 cm?", sampleAnswer: "Perimeter = 4 × 6 = 24 cm" },
      ],
    },
  ];
};

const englishPractice = (classNum: number): PracticeSet[] => {
  if (classNum <= 2) {
    return [
      {
        lessonId: classNum === 1 ? "alphabets" : "sight-words",
        mcqs: [
          { question: "How many letters are in the English alphabet?", options: ["24", "25", "26", "27"], correctIndex: 2, explanation: "There are 26 letters from A to Z!" },
          { question: "Which is a vowel?", options: ["B", "C", "A", "D"], correctIndex: 2, explanation: "A is a vowel! A, E, I, O, U are vowels." },
          { question: "Which word starts with 'B'?", options: ["Apple", "Ball", "Cat", "Dog"], correctIndex: 1, explanation: "Ball starts with B! 🏀" },
          { question: "What is the last letter of the alphabet?", options: ["X", "Y", "Z", "W"], correctIndex: 2, explanation: "Z is the 26th and last letter!" },
          { question: "'Cat' has how many letters?", options: ["2", "3", "4", "5"], correctIndex: 1, explanation: "C-A-T has 3 letters!" },
        ],
        fillBlanks: [
          { sentence: "A, E, I, O, ___ are vowels", answer: "U" },
          { sentence: "C_T (a pet animal)", answer: "A", hint: "It says meow!" },
          { sentence: "The ___ is red. (a fruit)", answer: "apple" },
          { sentence: "B is for ___", answer: "ball", hint: "You play with it" },
          { sentence: "D_G (man's best friend)", answer: "O", hint: "It says woof!" },
        ],
        matchPairs: {
          left: ["A", "B", "C", "D", "E"],
          right: ["Dog", "Apple", "Ball", "Elephant", "Cat"],
          correctPairs: [1, 2, 4, 0, 3],
        },
        shortAnswers: [
          { question: "Write all 5 vowels.", sampleAnswer: "A, E, I, O, U" },
          { question: "Write 3 words that start with 'S'.", sampleAnswer: "Sun, Star, School" },
          { question: "Is 'B' a vowel or consonant?", sampleAnswer: "B is a consonant." },
          { question: "Write a 3-letter word.", sampleAnswer: "Cat, Dog, Pen, Run (any 3-letter word)" },
          { question: "What letter comes after M?", sampleAnswer: "N comes after M." },
        ],
      },
    ];
  }
  return [
    {
      lessonId: classNum === 3 ? "grammar-3" : classNum === 4 ? "advanced-grammar" : "advanced-grammar-5",
      mcqs: [
        { question: "Which is a noun?", options: ["Run", "Beautiful", "Dog", "Quickly"], correctIndex: 2, explanation: "Dog is a noun — a naming word!" },
        { question: "Which is a verb?", options: ["Table", "Sing", "Happy", "Blue"], correctIndex: 1, explanation: "Sing is a verb — an action word!" },
        { question: "'The cat is ___ the table.' Fill in:", options: ["on", "sing", "happy", "run"], correctIndex: 0, explanation: "'On' is a preposition showing position!" },
        { question: "Which sentence is correct?", options: ["she is happy.", "She is happy.", "she Is happy.", "She IS happy"], correctIndex: 1, explanation: "Sentences start with a capital letter!" },
        { question: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes", "Childrens"], correctIndex: 1, explanation: "The plural of child is children — an irregular plural!" },
      ],
      fillBlanks: [
        { sentence: "She ___ to school every day. (go)", answer: "goes" },
        { sentence: "The sun ___ in the east. (rise)", answer: "rises" },
        { sentence: "I have ___ apple. (a/an)", answer: "an", hint: "Before vowel sounds" },
        { sentence: "They ___ playing in the park. (is/are)", answer: "are" },
        { sentence: "The cat sat ___ the mat. (on/in)", answer: "on" },
      ],
      matchPairs: {
        left: ["Noun", "Verb", "Adjective", "Pronoun", "Preposition"],
        right: ["on, in, at", "he, she, it", "big, small", "book, pen", "run, eat"],
        correctPairs: [3, 4, 2, 1, 0],
      },
      shortAnswers: [
        { question: "What is a noun? Give 2 examples.", sampleAnswer: "A noun is a naming word. Examples: school, river." },
        { question: "Use 'beautiful' in a sentence.", sampleAnswer: "The garden is beautiful." },
        { question: "What is the past tense of 'eat'?", sampleAnswer: "The past tense of eat is ate." },
        { question: "Write a sentence with a pronoun.", sampleAnswer: "She is my friend." },
        { question: "What is an adjective?", sampleAnswer: "An adjective is a word that describes a noun. Example: big, red, happy." },
      ],
    },
  ];
};

export const getPractice = (classNum: number, subjectId: string): PracticeSet[] => {
  switch (subjectId) {
    case "math":
      return mathPractice(classNum);
    case "english":
      return englishPractice(classNum);
    default:
      // Generic practice for other subjects
      return [
        {
          lessonId: "general",
          mcqs: [
            { question: "Which is a living thing?", options: ["Rock", "Plant", "Water", "Chair"], correctIndex: 1, explanation: "Plants are living things! They grow and need water." },
            { question: "How many seasons does India have?", options: ["2", "3", "4", "5"], correctIndex: 1, explanation: "India has 3 main seasons: Summer, Rainy, and Winter!" },
            { question: "Which is our national animal?", options: ["Lion", "Elephant", "Tiger", "Peacock"], correctIndex: 2, explanation: "The Tiger is India's national animal! 🐅" },
            { question: "What do plants need to grow?", options: ["Only water", "Sunlight, water & soil", "Only sunlight", "Nothing"], correctIndex: 1, explanation: "Plants need sunlight, water, and soil to grow!" },
            { question: "Which direction does the sun rise from?", options: ["West", "North", "East", "South"], correctIndex: 2, explanation: "The sun rises in the East! 🌅" },
          ],
          fillBlanks: [
            { sentence: "Plants make food using ___", answer: "sunlight" },
            { sentence: "India's national bird is ___", answer: "peacock" },
            { sentence: "Water cycle: Evaporation → ___ → Precipitation", answer: "condensation" },
            { sentence: "The sun rises in the ___", answer: "east" },
            { sentence: "We need ___ to breathe", answer: "oxygen" },
          ],
          matchPairs: {
            left: ["Dog", "Cow", "Fish", "Eagle", "Snake"],
            right: ["Swims", "Flies", "Gives milk", "Crawls", "Is a pet"],
            correctPairs: [4, 2, 0, 1, 3],
          },
          shortAnswers: [
            { question: "Name 3 domestic animals.", sampleAnswer: "Dog, Cat, Cow" },
            { question: "Why should we save water?", sampleAnswer: "Water is limited and essential for all living things." },
            { question: "Name the 3 main seasons of India.", sampleAnswer: "Summer, Rainy (Monsoon), Winter" },
            { question: "What is the national flower of India?", sampleAnswer: "Lotus is the national flower of India." },
            { question: "Name 2 things you can recycle.", sampleAnswer: "Paper and plastic bottles." },
          ],
        },
      ];
  }
};

export const getMiniTests = (classNum: number, subjectId: string): MiniTest[] => {
  const lessons = subjectId === "math"
    ? (classNum === 1 ? ["counting", "number-names", "addition"] : classNum === 2 ? ["numbers-200", "addition-2", "subtraction-2"] : ["multiplication-tables", "division", "fractions"])
    : subjectId === "english"
    ? (classNum === 1 ? ["alphabets", "vowels-consonants", "two-letter-words"] : classNum === 2 ? ["sight-words", "sentences-2", "stories-2"] : ["grammar-3", "tenses", "essay-writing"])
    : ["general-1", "general-2", "general-3"];

  return [
    {
      id: "test-1",
      title: `${subjectId === "math" ? "Math" : subjectId === "english" ? "English" : subjectId.toUpperCase()} Mini Test 1`,
      afterLessons: lessons.slice(0, 2),
      questions: [
        ...(getPractice(classNum, subjectId)[0]?.mcqs?.slice(0, 5) || []),
        { question: "Which one is correct?", options: ["Learning is fun!", "Learning is boring", "I don't like learning", "School is bad"], correctIndex: 0, explanation: "Yes! Learning IS fun! 🎉" },
        { question: "How do you feel about this subject?", options: ["I love it! ❤️", "It's okay 🙂", "Need more practice 💪", "It's hard 😅"], correctIndex: 0, explanation: "That's the spirit! Keep going! 🌟" },
        { question: "What should you do when stuck?", options: ["Give up", "Ask for help", "Skip it forever", "Cry"], correctIndex: 1, explanation: "Asking for help is smart, not weak! 💪" },
        { question: "Practice makes ___?", options: ["Tired", "Perfect", "Bored", "Hungry"], correctIndex: 1, explanation: "Practice makes perfect! Keep practicing! ⭐" },
        { question: "What's the best way to learn?", options: ["Just read once", "Practice regularly", "Never study", "Only before exams"], correctIndex: 1, explanation: "Regular practice is the key to success! 🔑" },
      ],
    },
    {
      id: "test-2",
      title: `${subjectId === "math" ? "Math" : subjectId === "english" ? "English" : subjectId.toUpperCase()} Mini Test 2`,
      afterLessons: lessons,
      questions: [
        ...(getPractice(classNum, subjectId)[0]?.mcqs?.slice(2, 5) || []),
        { question: "How many minutes should you study daily?", options: ["0 minutes", "10-30 minutes", "5 hours", "All day"], correctIndex: 1, explanation: "Short, regular study sessions work best!" },
        { question: "What helps you remember better?", options: ["Watching TV", "Writing notes", "Sleeping in class", "Not paying attention"], correctIndex: 1, explanation: "Writing notes helps your brain remember! 📝" },
        { question: "When is the best time to revise?", options: ["Never", "Before sleeping", "Only during exams", "When forced"], correctIndex: 1, explanation: "Revising before sleep helps memory! 🧠" },
        { question: "Reading every day makes you...", options: ["Tired", "Smarter", "Confused", "Sleepy"], correctIndex: 1, explanation: "Reading is brain exercise! 📚" },
        { question: "Who can help you when you're struggling?", options: ["Nobody", "Teachers & parents", "Strangers online", "I shouldn't ask"], correctIndex: 1, explanation: "Teachers and parents are always there to help! 💛" },
        { question: "What should you do after making a mistake?", options: ["Feel bad forever", "Learn from it", "Never try again", "Hide it"], correctIndex: 1, explanation: "Mistakes help you learn! Everyone makes them. 🌟" },
        { question: "The most important thing in learning is...", options: ["Getting 100%", "Being curious", "Being the fastest", "Memorizing everything"], correctIndex: 1, explanation: "Curiosity is the engine of learning! Stay curious! 🔍" },
      ],
    },
  ];
};
