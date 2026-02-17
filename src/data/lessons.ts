export type LessonUnit = {
  id: string;
  title: string;
  emoji: string;
  explanation: string;
  examples: string[];
  importantPoints: string[];
  tryItYourself: string;
};

export type SubjectLessons = {
  subjectId: string;
  units: LessonUnit[];
};

const lessonsData: Record<number, SubjectLessons[]> = {
  1: [
    {
      subjectId: "math",
      units: [
        {
          id: "counting",
          title: "Counting 1–100",
          emoji: "🔢",
          explanation: "Counting means saying numbers in order. Start from 1 and go all the way to 100! Each number is one more than the last. 1, 2, 3… you already know this!",
          examples: ["1, 2, 3, 4, 5 — count your fingers!", "10, 20, 30 — count by tens", "Count the stars: ⭐⭐⭐⭐⭐ = 5 stars"],
          importantPoints: ["Numbers go in order", "After 9 comes 10, after 19 comes 20", "Zero means nothing — 0"],
          tryItYourself: "Count all the chairs in your room. Write the number down!",
        },
        {
          id: "number-names",
          title: "Number Names",
          emoji: "📝",
          explanation: "Every number has a name! 1 is called 'One', 2 is 'Two', and so on. Learning number names helps you read and write numbers in words.",
          examples: ["1 = One, 2 = Two, 3 = Three", "10 = Ten, 11 = Eleven, 12 = Twelve", "20 = Twenty, 50 = Fifty, 100 = Hundred"],
          importantPoints: ["Number names are how we write numbers in words", "Practice writing them neatly", "Some names are tricky like Eleven and Twelve"],
          tryItYourself: "Write the number names from 1 to 10 in your notebook!",
        },
        {
          id: "addition",
          title: "Addition",
          emoji: "➕",
          explanation: "Addition means putting things together. When you add, you get MORE! If you have 2 apples and get 3 more, you now have 5 apples. We write it as 2 + 3 = 5.",
          examples: ["2 + 3 = 5 (two apples plus three apples)", "🍎🍎 + 🍎🍎🍎 = 🍎🍎🍎🍎🍎", "1 + 1 = 2, 4 + 2 = 6"],
          importantPoints: ["The + sign means 'add' or 'put together'", "The = sign means 'equals' or 'is the same as'", "You can add using your fingers!"],
          tryItYourself: "Take 3 pencils and 2 erasers. Count them all together!",
        },
        {
          id: "subtraction",
          title: "Subtraction",
          emoji: "➖",
          explanation: "Subtraction means taking away. When you subtract, you get LESS! If you have 5 candies and eat 2, you have 3 left. We write it as 5 - 2 = 3.",
          examples: ["5 - 2 = 3 (five candies minus two)", "🍬🍬🍬🍬🍬 take away 🍬🍬 = 🍬🍬🍬", "4 - 1 = 3, 7 - 3 = 4"],
          importantPoints: ["The - sign means 'take away' or 'minus'", "You always start with the bigger number", "Subtraction is the opposite of addition"],
          tryItYourself: "You have 6 crayons. Give 2 to your friend. How many do you have now?",
        },
        {
          id: "shapes",
          title: "Shapes",
          emoji: "🔷",
          explanation: "Shapes are all around us! A ball is round like a circle. A book is like a rectangle. Learning shapes helps you understand the world.",
          examples: ["⭕ Circle — like a ball or coin", "⬜ Square — like a window or dice", "🔺 Triangle — like a slice of pizza"],
          importantPoints: ["Circle is round with no corners", "Square has 4 equal sides and 4 corners", "Triangle has 3 sides and 3 corners"],
          tryItYourself: "Look around your room and find one circle, one square, and one triangle!",
        },
      ],
    },
    {
      subjectId: "english",
      units: [
        {
          id: "alphabets",
          title: "Alphabets (A–Z)",
          emoji: "🔤",
          explanation: "The English alphabet has 26 letters — from A to Z. Each letter has a BIG form (capital) and a small form. Letters make words, and words make sentences!",
          examples: ["A B C D E F G — the first 7 letters", "A = capital, a = small letter", "A is for Apple 🍎, B is for Ball ⚽"],
          importantPoints: ["There are 26 letters total", "Capital letters: A B C..., Small letters: a b c...", "Every word starts with a letter"],
          tryItYourself: "Write all 26 letters — first big, then small — in your notebook!",
        },
        {
          id: "vowels-consonants",
          title: "Vowels & Consonants",
          emoji: "🗣️",
          explanation: "The 5 special letters A, E, I, O, U are called vowels. All the other 21 letters are consonants. Every word needs at least one vowel!",
          examples: ["Vowels: A, E, I, O, U", "Consonants: B, C, D, F, G, H...", "CAT → C (consonant) + A (vowel) + T (consonant)"],
          importantPoints: ["Remember: A E I O U are vowels", "Vowels make the sound that holds a word together", "Every syllable has at least one vowel"],
          tryItYourself: "Circle all the vowels in these words: APPLE, ELEPHANT, UMBRELLA",
        },
        {
          id: "two-letter-words",
          title: "Two-Letter Words",
          emoji: "📖",
          explanation: "Two-letter words are the smallest words! They are easy to read and write. Words like 'is', 'an', 'in' are used in almost every sentence.",
          examples: ["is, it, in, on, at, an", "go, do, no, so, to", "he, me, we, be"],
          importantPoints: ["These small words appear in every sentence", "Practice reading them quickly", "Try to spell them without looking"],
          tryItYourself: "Make 5 sentences using the word 'is'. Example: 'He is happy.'",
        },
        {
          id: "three-letter-words",
          title: "Three-Letter Words",
          emoji: "📝",
          explanation: "Three-letter words are a bit bigger. Many of them follow a simple pattern: consonant + vowel + consonant. Like C-A-T = Cat!",
          examples: ["cat, bat, hat, mat, rat", "dog, log, fog, jog", "pen, hen, ten, men"],
          importantPoints: ["Most follow the pattern: consonant-vowel-consonant", "Changing one letter makes a new word: cat → bat", "Sound out each letter slowly"],
          tryItYourself: "Write 5 words that rhyme with 'cat'. Hint: change the first letter!",
        },
        {
          id: "simple-sentences",
          title: "Simple Sentences",
          emoji: "✏️",
          explanation: "A sentence is a group of words that makes sense. Every sentence starts with a capital letter and ends with a full stop. Like: 'I am happy.'",
          examples: ["I am a boy.", "She is my friend.", "The cat is on the mat."],
          importantPoints: ["Start with a capital letter", "End with a full stop (.)", "A sentence must make complete sense"],
          tryItYourself: "Write 3 sentences about your family. Remember capital letters and full stops!",
        },
      ],
    },
    {
      subjectId: "hindi",
      units: [
        {
          id: "varnamala",
          title: "हिंदी वर्णमाला",
          emoji: "🇮🇳",
          explanation: "Hindi has its own alphabet called Varnamala. It has vowels (स्वर) like अ, आ, इ and consonants (व्यंजन) like क, ख, ग. Let's learn them!",
          examples: ["स्वर: अ आ इ ई उ ऊ", "व्यंजन: क ख ग घ ङ", "क से कमल 🌺, ख से खरगोश 🐰"],
          importantPoints: ["There are 13 vowels (स्वर)", "There are 33+ consonants (व्यंजन)", "Each letter has a unique sound"],
          tryItYourself: "Write all the vowels (स्वर) from अ to अः in your notebook!",
        },
        {
          id: "matras",
          title: "मात्राएँ",
          emoji: "✍️",
          explanation: "Matras are special marks added to consonants to change their sound. When we add आ की मात्रा (ा) to क, it becomes का!",
          examples: ["क + ा = का", "क + ि = कि", "क + ु = कु"],
          importantPoints: ["Each vowel has a matra form", "Matras change how consonants sound", "Practice writing matras with each consonant"],
          tryItYourself: "Write क with all different matras: का, कि, की, कु, कू, के, कै, को, कौ",
        },
        {
          id: "simple-words-hindi",
          title: "सरल शब्द",
          emoji: "📝",
          explanation: "Now let's make words! Combine consonants and matras to form simple Hindi words. Start with two-letter words and then try three-letter words.",
          examples: ["दो अक्षर: नल, कल, फल", "तीन अक्षर: कमल, नमक, सड़क", "फल 🍎, कमल 🌺, नल 🚰"],
          importantPoints: ["Sound out each letter slowly", "Practice reading words aloud", "Connect words to pictures for easy memory"],
          tryItYourself: "Write 5 Hindi words you know and draw pictures next to them!",
        },
      ],
    },
    {
      subjectId: "evs",
      units: [
        {
          id: "my-family",
          title: "My Family & Home",
          emoji: "👨‍👩‍👧‍👦",
          explanation: "Your family are the people who love and care for you. They can be your parents, siblings, grandparents, and more. Your home is where you live together!",
          examples: ["Family members: Mother, Father, Sister, Brother", "Grandparents: Grandmother, Grandfather", "Pets are family too! 🐕"],
          importantPoints: ["Families can be big or small", "Every family is special", "We should love and respect our family"],
          tryItYourself: "Draw your family and write everyone's name below their picture!",
        },
        {
          id: "animals",
          title: "Animals Around Us",
          emoji: "🐾",
          explanation: "Animals are living things just like us. Some live in our homes (pets), some on farms, and some in the wild. They all need food, water, and shelter.",
          examples: ["Pets: Dog 🐕, Cat 🐱, Fish 🐟", "Farm animals: Cow 🐄, Hen 🐔, Horse 🐴", "Wild animals: Lion 🦁, Elephant 🐘, Tiger 🐅"],
          importantPoints: ["Animals can be domestic or wild", "Every animal has a baby with a special name", "We should be kind to animals"],
          tryItYourself: "Name 5 animals and write what sound each one makes!",
        },
        {
          id: "plants",
          title: "Plants & Trees",
          emoji: "🌱",
          explanation: "Plants give us food, oxygen, and shade. They have parts like roots, stem, leaves, and flowers. Some plants are small, and some grow into big trees!",
          examples: ["Parts: Root, Stem, Leaf, Flower, Fruit", "Big tree: Banyan, Neem, Mango 🥭", "Small plant: Tulsi, Rose 🌹"],
          importantPoints: ["Plants need sunlight, water, and soil to grow", "Leaves make food for the plant", "Trees give us oxygen to breathe"],
          tryItYourself: "Plant a seed in a small cup with soil. Water it daily and watch it grow! 🌱",
        },
      ],
    },
  ],
  2: [
    {
      subjectId: "math",
      units: [
        { id: "numbers-200", title: "Numbers up to 200", emoji: "🔢", explanation: "Now you know numbers up to 100 — let's go further! Numbers keep going: 101, 102... all the way to 200 and beyond!", examples: ["100 + 1 = 101 (one hundred and one)", "150 = one hundred and fifty", "200 = two hundred"], importantPoints: ["Numbers after 100 follow the same pattern", "Practice counting by 10s: 110, 120, 130...", "Learn to read and write these numbers"], tryItYourself: "Write all numbers from 100 to 120 in your notebook!" },
        { id: "addition-2", title: "Addition with Carry", emoji: "➕", explanation: "Sometimes when we add, the answer in one column is more than 9. Then we 'carry' the extra to the next column. Like 15 + 17 = 32!", examples: ["15 + 17 = 32 (carry the 1)", "28 + 14 = 42", "36 + 27 = 63"], importantPoints: ["Add from right to left", "If sum is 10 or more, carry 1 to the next column", "Always write neatly in columns"], tryItYourself: "Solve: 24 + 38 = ? and 45 + 27 = ?" },
        { id: "subtraction-2", title: "Subtraction with Borrowing", emoji: "➖", explanation: "When the top number is smaller than the bottom in a column, we need to 'borrow' from the next column. Like 42 - 15 = 27!", examples: ["42 - 15 = 27 (borrow from tens)", "50 - 23 = 27", "63 - 28 = 35"], importantPoints: ["Start from the right (ones place)", "If top digit is smaller, borrow from next column", "Check your answer by adding!"], tryItYourself: "Solve: 53 - 27 = ? and 71 - 34 = ?" },
        { id: "multiplication-intro", title: "Introduction to Multiplication", emoji: "✖️", explanation: "Multiplication is a fast way to add the same number many times! 3 × 4 means 3 + 3 + 3 + 3 = 12. It's like making groups!", examples: ["2 × 3 = 6 (two groups of three)", "🍎🍎🍎 + 🍎🍎🍎 = 6 apples", "5 × 2 = 10 (five groups of two)"], importantPoints: ["× means 'times' or 'groups of'", "Start with tables of 2, 5, and 10", "Drawing groups helps you understand"], tryItYourself: "Draw 4 groups of 3 stars and count them all!" },
        { id: "time-calendar", title: "Time & Calendar", emoji: "🕐", explanation: "A clock tells time and a calendar tells the date! There are 12 months, 7 days in a week, and 24 hours in a day.", examples: ["When the short hand is on 3, it's 3 o'clock", "Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun", "Months: Jan, Feb, Mar... Dec"], importantPoints: ["Short hand = hour, long hand = minutes", "7 days make a week", "12 months make a year"], tryItYourself: "Look at a clock right now — what time is it? Write it down!" },
      ],
    },
    {
      subjectId: "english",
      units: [
        { id: "sight-words", title: "Sight Words", emoji: "👀", explanation: "Sight words are common words you should know by heart! Words like 'the', 'and', 'was', 'said' appear everywhere. Memorizing them makes reading super fast!", examples: ["the, and, is, was, are", "said, have, they, come, some", "what, when, where, there"], importantPoints: ["These words appear in almost every sentence", "Some don't follow phonics rules", "Practice reading them quickly"], tryItYourself: "Flash cards! Write 10 sight words on cards and practice reading them fast!" },
        { id: "sentences-2", title: "Writing Sentences", emoji: "✏️", explanation: "Now you can write longer sentences! Use describing words to make them interesting. Instead of 'I see a cat', try 'I see a fluffy white cat.'", examples: ["The big red ball is round.", "My mother makes yummy food.", "The little bird sings a sweet song."], importantPoints: ["Add describing words (adjectives)", "Use capital letters for names", "Use question marks for questions (?)"], tryItYourself: "Write 5 sentences about your school using describing words!" },
        { id: "stories-2", title: "Short Stories", emoji: "📚", explanation: "Stories have a beginning, middle, and end. Reading stories helps you learn new words and use your imagination. Let's practice reading and understanding stories!", examples: ["Beginning: Once upon a time...", "Middle: Then something happened...", "End: And they lived happily ever after!"], importantPoints: ["Every story has characters (people/animals)", "Stories teach us lessons", "Read slowly and imagine the pictures"], tryItYourself: "Read a short story and tell your family what happened in it!" },
        { id: "nouns-verbs", title: "Nouns & Verbs", emoji: "📖", explanation: "Nouns are naming words — they name people, places, animals, or things. Verbs are action words — they tell what someone does. Like: 'The cat (noun) jumps (verb).'", examples: ["Nouns: dog, school, Rahul, book", "Verbs: run, eat, sing, read, play", "The girl (noun) reads (verb) a book (noun)."], importantPoints: ["Noun = name of something", "Verb = action word", "Every sentence needs at least one noun and one verb"], tryItYourself: "Write 5 nouns and 5 verbs. Then make sentences using them!" },
      ],
    },
    {
      subjectId: "hindi",
      units: [
        { id: "words-2", title: "शब्द बनाओ", emoji: "📝", explanation: "अब हम बड़े शब्द बनाएँगे! दो, तीन और चार अक्षर वाले शब्द सीखेंगे। जैसे: कलम, किताब, स्कूल।", examples: ["दो अक्षर: घर, जल, वन", "तीन अक्षर: कमल, सड़क, पानी", "चार अक्षर: किताब, खरगोश"], importantPoints: ["हर शब्द को ज़ोर से पढ़ो", "शब्दों के चित्र बनाओ", "रोज़ 5 नए शब्द सीखो"], tryItYourself: "5 फलों के नाम हिंदी में लिखो! 🍎🍌🍇" },
        { id: "poems-hindi", title: "कविताएँ", emoji: "🎵", explanation: "कविताएँ गाकर पढ़ने में बहुत मज़ा आता है! ये लय में होती हैं और याद रखना आसान होता है।", examples: ["मछली जल की रानी है...", "चंदा मामा दूर के...", "लकड़ी की काठी, काठी पे घोड़ा..."], importantPoints: ["कविताएँ ज़ोर से पढ़ो", "लय (rhythm) का ध्यान रखो", "नई कविताएँ याद करो"], tryItYourself: "अपनी पसंदीदा कविता ज़ोर से सुनाओ!" },
        { id: "sentences-hindi", title: "वाक्य बनाओ", emoji: "✏️", explanation: "शब्दों को मिलाकर वाक्य बनाते हैं। जैसे: 'राम खेलता है।' हर वाक्य का एक मतलब होता है।", examples: ["राम स्कूल जाता है।", "सीता गाना गाती है।", "बिल्ली दूध पीती है।"], importantPoints: ["वाक्य पूरा होना चाहिए", "पूर्ण विराम (।) लगाओ", "वाक्य से पहले बड़ा अक्षर नहीं होता हिंदी में"], tryItYourself: "अपने बारे में 3 वाक्य लिखो!" },
      ],
    },
    {
      subjectId: "evs",
      units: [
        { id: "food-water", title: "Food & Water", emoji: "🍽️", explanation: "We need food and water to live and grow. Healthy food gives us energy to play, study, and stay strong. Clean water keeps us healthy!", examples: ["Fruits and vegetables give vitamins 🍎🥕", "Milk and eggs make bones strong 🥛🥚", "We need 6-8 glasses of water daily 💧"], importantPoints: ["Eat fruits and vegetables daily", "Drink clean water", "Junk food is tasty but not healthy for everyday"], tryItYourself: "Draw your lunch plate and label all the food items!" },
        { id: "weather-seasons", title: "Weather & Seasons", emoji: "🌤️", explanation: "Weather changes every day — sunny, rainy, cloudy, or windy. India has main seasons: Summer, Rainy (Monsoon), and Winter. Each season is special!", examples: ["Summer ☀️ — hot, we eat ice cream", "Rainy 🌧️ — we use umbrellas", "Winter ❄️ — we wear sweaters"], importantPoints: ["3 main seasons in India", "Weather affects what we wear and eat", "Plants and animals also change with seasons"], tryItYourself: "Look outside — what's the weather today? Draw it!" },
        { id: "my-body", title: "My Body", emoji: "🧒", explanation: "Your body is amazing! It has many parts that help you do different things. Eyes to see, ears to hear, hands to hold, and legs to run!", examples: ["Head, eyes, ears, nose, mouth", "Hands, fingers, legs, toes", "Internal: heart ❤️, lungs, stomach"], importantPoints: ["Each body part has a special job", "Keep your body clean", "Exercise makes your body strong"], tryItYourself: "Touch your head, shoulders, knees, and toes — and name each part!" },
      ],
    },
  ],
  3: [
    {
      subjectId: "math",
      units: [
        { id: "multiplication-tables", title: "Multiplication Tables", emoji: "✖️", explanation: "Multiplication tables are like a superpower for math! When you know your tables, you can solve problems super fast. Let's master tables from 2 to 10!", examples: ["2 × 1 = 2, 2 × 2 = 4, 2 × 3 = 6...", "5 × 5 = 25, 5 × 10 = 50", "9 × 9 = 81"], importantPoints: ["Learn tables of 2, 5, 10 first — they're easiest", "Practice a little every day", "Patterns help: 5's table always ends in 0 or 5"], tryItYourself: "Write the tables of 3 and 4 from memory!" },
        { id: "division", title: "Division", emoji: "➗", explanation: "Division means sharing equally. If you have 12 candies and 3 friends, each gets 12 ÷ 3 = 4 candies! Division is the opposite of multiplication.", examples: ["12 ÷ 3 = 4 (12 shared among 3)", "🍬🍬🍬🍬 | 🍬🍬🍬🍬 | 🍬🍬🍬🍬", "20 ÷ 5 = 4, 18 ÷ 2 = 9"], importantPoints: ["÷ means 'divide' or 'share equally'", "Division is the reverse of multiplication", "If 3 × 4 = 12, then 12 ÷ 3 = 4"], tryItYourself: "You have 15 stickers to share among 5 friends. How many does each get?" },
        { id: "fractions", title: "Fractions", emoji: "🍕", explanation: "A fraction is a part of something. When you cut a pizza into 2 equal pieces, each piece is ½ (one-half). Fractions help us talk about parts!", examples: ["½ = one half (1 out of 2 pieces) 🍕", "¼ = one quarter (1 out of 4 pieces)", "¾ = three quarters (3 out of 4 pieces)"], importantPoints: ["Top number = how many parts you have (numerator)", "Bottom number = total equal parts (denominator)", "Parts must be EQUAL"], tryItYourself: "Draw a circle, divide it into 4 equal parts, and color 3 parts. What fraction is colored?" },
        { id: "geometry-3", title: "Geometry & Measurement", emoji: "📐", explanation: "Geometry is about shapes, angles, and measuring. Perimeter is the distance around a shape. Area is how much space a shape covers!", examples: ["Perimeter of a square with side 4 = 4 + 4 + 4 + 4 = 16", "A right angle looks like the corner of a book 📖", "1 meter = 100 centimeters"], importantPoints: ["Perimeter = add all sides", "Angles are measured in degrees", "Use a ruler to measure length"], tryItYourself: "Measure the length and width of your notebook with a ruler!" },
        { id: "word-problems", title: "Word Problems", emoji: "🧩", explanation: "Word problems are math puzzles written in sentences! Read carefully, find the numbers, decide the operation (+, -, ×, ÷), and solve step by step.", examples: ["Asha has 15 mangoes. She gives 7 to Ravi. How many does she have? 15 - 7 = 8", "A box has 4 rows of 5 chocolates. Total = 4 × 5 = 20", "24 students sit in 6 rows. Each row = 24 ÷ 6 = 4"], importantPoints: ["Read the problem twice", "Underline the numbers and keywords", "'total', 'altogether' → add; 'left', 'remaining' → subtract"], tryItYourself: "Write your own word problem for your friend to solve!" },
      ],
    },
    {
      subjectId: "english",
      units: [
        { id: "grammar-3", title: "Grammar Basics", emoji: "📖", explanation: "Grammar is the set of rules for using English correctly. Knowing nouns, verbs, adjectives, and pronouns helps you write and speak better!", examples: ["Noun: The dog runs. (dog = noun)", "Adjective: The big red ball. (big, red = adjectives)", "Pronoun: She likes ice cream. (She = pronoun)"], importantPoints: ["Nouns = naming words", "Verbs = action words", "Adjectives = describing words", "Pronouns = words used instead of nouns (he, she, it)"], tryItYourself: "Find 3 nouns, 3 verbs, and 3 adjectives in your favorite storybook!" },
        { id: "tenses", title: "Tenses", emoji: "⏰", explanation: "Tenses tell us WHEN something happens. Past = already happened. Present = happening now. Future = will happen later.", examples: ["Past: I played cricket yesterday.", "Present: I am playing cricket now.", "Future: I will play cricket tomorrow."], importantPoints: ["Past tense often adds '-ed' (played, jumped)", "Present continuous uses 'is/am/are + -ing'", "Future uses 'will' or 'going to'"], tryItYourself: "Write 3 sentences — one past, one present, one future — about eating food!" },
        { id: "essay-writing", title: "Essay Writing", emoji: "✏️", explanation: "An essay is writing about a topic in a few paragraphs. Start with an introduction, write 2-3 points in the middle, and end with a conclusion.", examples: ["Topic: My School → Intro → About classrooms → About teachers → Conclusion", "Topic: My Favorite Festival → Which one → How we celebrate → Why I love it", "Use connecting words: First, Then, Also, Finally"], importantPoints: ["Introduction = tell what you'll write about", "Body = main points with details", "Conclusion = sum it up"], tryItYourself: "Write a 5-sentence essay on 'My Best Friend'!" },
        { id: "comprehension", title: "Reading Comprehension", emoji: "📚", explanation: "Comprehension means understanding what you read. Read a passage carefully, then answer questions about it. This tests how well you understood the story!", examples: ["Read the passage slowly", "Look for key details: Who? What? Where? When? Why?", "Underline important words"], importantPoints: ["Read the passage at least twice", "Questions are answered FROM the passage", "Don't guess — find the answer in the text"], tryItYourself: "Read a short story and ask your friend 3 questions about it!" },
        { id: "vocabulary", title: "Vocabulary Building", emoji: "🔤", explanation: "Vocabulary means all the words you know. The more words you know, the better you can read, write, and talk! Learn new words every day.", examples: ["Synonym: happy = glad, joyful", "Antonym: hot ↔ cold, big ↔ small", "New word: 'enormous' means very very big!"], importantPoints: ["Learn 3 new words every day", "Write words in a vocabulary notebook", "Use new words in sentences to remember them"], tryItYourself: "Write 5 new words you learned this week with their meanings!" },
      ],
    },
    {
      subjectId: "hindi",
      units: [
        { id: "grammar-hindi-3", title: "व्याकरण – संज्ञा और सर्वनाम", emoji: "📖", explanation: "संज्ञा किसी व्यक्ति, स्थान, या वस्तु का नाम है। सर्वनाम संज्ञा की जगह इस्तेमाल होता है। जैसे: राम → वह।", examples: ["संज्ञा: राम, दिल्ली, किताब", "सर्वनाम: मैं, तुम, वह, हम", "राम स्कूल गया → वह स्कूल गया"], importantPoints: ["संज्ञा = नाम बताने वाले शब्द", "सर्वनाम = संज्ञा की जगह आने वाले शब्द", "वाक्य में संज्ञा को सर्वनाम से बदल सकते हैं"], tryItYourself: "5 संज्ञा और उनके सर्वनाम लिखो!" },
        { id: "essay-hindi", title: "निबंध लेखन", emoji: "✏️", explanation: "निबंध एक विषय पर लिखा जाता है। पहले परिचय, फिर मुख्य बातें, और अंत में निष्कर्ष लिखो।", examples: ["मेरा विद्यालय", "मेरा प्रिय त्योहार", "गाय पर निबंध"], importantPoints: ["शीर्षक लिखो", "सरल भाषा का प्रयोग करो", "कम से कम 5-7 वाक्य लिखो"], tryItYourself: "'मेरा प्रिय खेल' पर 5 वाक्य लिखो!" },
        { id: "stories-hindi", title: "कहानी पढ़ो और समझो", emoji: "📚", explanation: "कहानियाँ पढ़ने से शब्द ज्ञान बढ़ता है और कल्पना शक्ति मजबूत होती है। कहानी का सार समझना ज़रूरी है।", examples: ["प्यासा कौआ — मेहनत से सब कुछ मिलता है", "लालची कुत्ता — लालच बुरी बला", "चींटी और टिड्डा — मेहनत का फल मीठा"], importantPoints: ["कहानी पूरी पढ़ो", "पात्रों के नाम याद रखो", "कहानी की शिक्षा (moral) समझो"], tryItYourself: "एक कहानी पढ़ो और उसकी शिक्षा अपने शब्दों में लिखो!" },
      ],
    },
    {
      subjectId: "evs",
      units: [
        { id: "environment", title: "Our Environment", emoji: "🌿", explanation: "Environment is everything around us — air, water, land, plants, and animals. We must protect our environment to keep our planet healthy!", examples: ["Clean air helps us breathe 🌬️", "Trees give us oxygen 🌳", "Pollution makes our environment dirty 🏭"], importantPoints: ["Reduce, Reuse, Recycle ♻️", "Don't throw garbage on roads", "Plant more trees"], tryItYourself: "Make a poster about saving the environment!" },
        { id: "water-cycle", title: "The Water Cycle", emoji: "💧", explanation: "Water goes around and around in nature! The sun heats water, it becomes vapor (evaporation), forms clouds (condensation), and falls as rain (precipitation)!", examples: ["Evaporation: Water → Water vapor (going up) ☀️", "Condensation: Vapor → Clouds ☁️", "Precipitation: Clouds → Rain 🌧️"], importantPoints: ["The cycle repeats again and again", "All water on Earth is recycled", "Save water — every drop counts!"], tryItYourself: "Draw the water cycle with arrows showing each step!" },
        { id: "food-nutrition", title: "Food & Nutrition", emoji: "🥗", explanation: "Our body needs different types of food to stay healthy. Carbohydrates give energy, proteins build muscles, vitamins keep us from getting sick!", examples: ["Energy food: Rice, bread, potatoes 🍚", "Body-building food: Milk, eggs, fish 🥛", "Protective food: Fruits, vegetables 🍎🥕"], importantPoints: ["Eat a balanced diet with all food groups", "Breakfast is the most important meal", "Wash fruits and vegetables before eating"], tryItYourself: "Make a chart of what you ate today and categorize each food item!" },
        { id: "maps-directions", title: "Maps & Directions", emoji: "🗺️", explanation: "Maps are drawings of places from above. They help us find our way! The four main directions are North, South, East, and West.", examples: ["North ↑, South ↓, East →, West ←", "The sun rises in the East 🌅", "Maps use symbols: 🏠 = house, 🌳 = forest"], importantPoints: ["North is usually at the top of a map", "Maps have symbols with a legend/key", "Compass shows directions"], tryItYourself: "Draw a simple map of your classroom showing where the door, windows, and your seat are!" },
      ],
    },
    {
      subjectId: "gk",
      units: [
        { id: "india-facts", title: "Amazing India", emoji: "🇮🇳", explanation: "India is a wonderful country with diverse cultures, languages, and traditions. Let's learn some amazing facts about our incredible nation!", examples: ["Capital: New Delhi", "National animal: Tiger 🐅", "National bird: Peacock 🦚"], importantPoints: ["India has 28 states and 8 union territories", "Hindi and English are official languages", "India is the 7th largest country in the world"], tryItYourself: "Write 5 national symbols of India with their names!" },
        { id: "famous-people", title: "Famous Personalities", emoji: "🌟", explanation: "India has many great leaders, scientists, and artists who changed the world. Learning about them inspires us to do great things too!", examples: ["Mahatma Gandhi — Father of the Nation 🕊️", "APJ Abdul Kalam — Missile Man of India 🚀", "Mother Teresa — Angel of Mercy 💝"], importantPoints: ["These people worked hard for their dreams", "They helped others and their country", "Reading about great people motivates us"], tryItYourself: "Choose one famous person and write 5 facts about them!" },
        { id: "science-facts", title: "Fun Science Facts", emoji: "🔬", explanation: "Science is everywhere! From the phone you use to the food you eat. Let's learn some cool and surprising science facts!", examples: ["Water boils at 100°C ♨️", "Earth takes 365 days to go around the Sun 🌍", "Our body has 206 bones 🦴"], importantPoints: ["Science explains how things work", "Ask questions about everything!", "Experiments help us learn"], tryItYourself: "Write 3 science facts that surprised you!" },
      ],
    },
  ],
  4: [
    {
      subjectId: "math",
      units: [
        { id: "large-numbers", title: "Large Numbers", emoji: "🔢", explanation: "Now we learn about thousands and ten-thousands! 1,000 is one thousand. Place values help us read big numbers correctly.", examples: ["1,234 = 1 thousand, 2 hundreds, 3 tens, 4 ones", "10,000 = ten thousand", "Place values: Ones, Tens, Hundreds, Thousands, Ten-thousands"], importantPoints: ["Use commas to separate thousands", "Place value tells the value of each digit", "The same digit can have different values based on position"], tryItYourself: "Write the place value of each digit in 5,782!" },
        { id: "multiplication-4", title: "Multi-digit Multiplication", emoji: "✖️", explanation: "Now we multiply bigger numbers! Multiply step by step — ones first, then tens. It's like doing two multiplications and adding them together.", examples: ["23 × 4 = 92", "45 × 12 = 540 (45×2=90, 45×10=450, 90+450=540)", "Practice with 2-digit × 2-digit"], importantPoints: ["Multiply ones digit first, then tens", "Keep digits aligned properly", "Check with estimation: 45×12 ≈ 50×10 = 500"], tryItYourself: "Solve: 36 × 14 = ? Show your steps!" },
        { id: "division-4", title: "Long Division", emoji: "➗", explanation: "Long division helps you divide bigger numbers step by step. Divide, multiply, subtract, bring down — repeat! It's like a mini pattern.", examples: ["84 ÷ 4 = 21", "Steps: Divide → Multiply → Subtract → Bring down", "156 ÷ 12 = 13"], importantPoints: ["Follow the steps in order: D-M-S-B", "The remainder is what's left over", "Check: quotient × divisor + remainder = dividend"], tryItYourself: "Solve 96 ÷ 8 using long division steps!" },
        { id: "fractions-4", title: "Fractions & Decimals", emoji: "🍕", explanation: "Fractions can be compared, added, and even converted to decimals! ½ = 0.5, ¼ = 0.25. Decimals are another way to write fractions.", examples: ["½ = 0.5", "¼ = 0.25", "½ + ¼ = ¾ (find common denominator)"], importantPoints: ["Like fractions have the same denominator", "To add fractions, denominators must match", "Decimal point separates whole and part numbers"], tryItYourself: "Convert these fractions to decimals: ½, ¼, ¾" },
        { id: "patterns-4", title: "Patterns & Algebra Basics", emoji: "🔄", explanation: "Patterns are sequences that follow a rule. Finding the rule helps you predict what comes next! This is the beginning of algebra.", examples: ["2, 4, 6, 8, _? (add 2 each time = 10)", "1, 4, 9, 16, _? (1², 2², 3², 4² = 25)", "A, C, E, G, _? (skip one letter = I)"], importantPoints: ["Look for what changes each step", "The rule stays the same throughout", "Patterns can be in numbers, shapes, or letters"], tryItYourself: "Create your own pattern and ask your friend to find the rule!" },
      ],
    },
    {
      subjectId: "english",
      units: [
        { id: "advanced-grammar", title: "Advanced Grammar", emoji: "📖", explanation: "Let's dive deeper into grammar! Learn about prepositions (in, on, at), conjunctions (and, but, or), and articles (a, an, the).", examples: ["Prepositions: The cat is on the table.", "Conjunctions: I like tea and coffee.", "Articles: A dog, an apple, the moon"], importantPoints: ["Prepositions show position or direction", "Conjunctions join words or sentences", "'A' before consonant sounds, 'An' before vowel sounds"], tryItYourself: "Fill in: The book is ___ the shelf. I want tea ___ coffee." },
        { id: "creative-writing", title: "Creative Writing", emoji: "🎨", explanation: "Creative writing lets you use your imagination! You can write stories, poems, or even diary entries. Use interesting words to make your writing come alive.", examples: ["Instead of 'nice', say 'wonderful' or 'delightful'", "Use similes: 'as fast as a cheetah'", "Describe using 5 senses: sight, sound, smell, taste, touch"], importantPoints: ["Use a variety of words", "Show, don't tell: 'Her eyes sparkled' vs 'She was happy'", "Read more to write better"], tryItYourself: "Write a short story about a magical animal in 10 sentences!" },
        { id: "letter-writing", title: "Letter Writing", emoji: "✉️", explanation: "Letters are a way to communicate in writing. Informal letters are to friends and family. Formal letters are more official. Both have a specific format.", examples: ["Informal: Dear Rahul, How are you?...", "Formal: Dear Sir/Madam, I am writing to...", "Parts: Date, Address, Greeting, Body, Closing"], importantPoints: ["Always write the date", "Use proper greeting (Dear...)", "End with 'Yours sincerely' or 'Yours lovingly'"], tryItYourself: "Write a letter to your best friend about your summer vacation!" },
        { id: "comprehension-4", title: "Advanced Comprehension", emoji: "📚", explanation: "Now we read longer passages and answer trickier questions. Some answers need you to think beyond what's written — use inference!", examples: ["Direct questions: 'What did Ram do?'", "Inference: 'How do you think Ram felt? Why?'", "Vocabulary: 'What does the word ___ mean here?'"], importantPoints: ["Read the passage first, questions second", "Some answers are directly stated", "Some need you to think and infer"], tryItYourself: "Read a newspaper article and write 3 questions about it!" },
      ],
    },
    {
      subjectId: "hindi",
      units: [
        { id: "grammar-hindi-4", title: "विस्तृत व्याकरण", emoji: "📖", explanation: "अब हम क्रिया, विशेषण और अव्यय सीखेंगे। क्रिया = काम बताने वाले शब्द, विशेषण = गुण बताने वाले शब्द।", examples: ["क्रिया: खाना, पीना, सोना, खेलना", "विशेषण: सुंदर, लंबा, मीठा, गर्म", "अव्यय: और, लेकिन, क्योंकि"], importantPoints: ["क्रिया बताती है 'क्या हो रहा है'", "विशेषण संज्ञा की विशेषता बताता है", "अव्यय शब्द नहीं बदलते"], tryItYourself: "5 क्रिया और 5 विशेषण शब्द लिखो!" },
        { id: "essay-hindi-4", title: "विस्तृत निबंध", emoji: "✏️", explanation: "अब हम बड़े निबंध लिखेंगे — 8-10 वाक्य वाले। विषय का परिचय, मुख्य बातें, और निष्कर्ष — सब शामिल करो।", examples: ["मेरा देश भारत", "पर्यावरण प्रदूषण", "विज्ञान के चमत्कार"], importantPoints: ["हर अनुच्छेद में एक मुख्य विचार", "सरल और स्पष्ट भाषा", "शुरुआत और अंत प्रभावशाली हो"], tryItYourself: "'मेरा प्रिय त्योहार' पर 8 वाक्यों का निबंध लिखो!" },
        { id: "letter-hindi", title: "पत्र लेखन", emoji: "✉️", explanation: "हिंदी में भी पत्र लिखना आता होना चाहिए! दोस्त को अनौपचारिक पत्र और प्रधानाचार्य को औपचारिक पत्र — दोनों सीखो।", examples: ["प्रिय मित्र, तुम कैसे हो?...", "आदरणीय प्रधानाचार्य जी...", "भाग: दिनांक, संबोधन, विषय, मुख्य भाग, समापन"], importantPoints: ["दिनांक ज़रूर लिखो", "सही संबोधन का प्रयोग करो", "विषय स्पष्ट लिखो"], tryItYourself: "अपने मित्र को जन्मदिन की बधाई का पत्र लिखो!" },
      ],
    },
    {
      subjectId: "evs",
      units: [
        { id: "solar-system", title: "Solar System", emoji: "🌍", explanation: "Our solar system has the Sun at the center and 8 planets revolving around it. Earth is the 3rd planet — it's our home!", examples: ["Mercury, Venus, Earth, Mars — inner planets", "Jupiter, Saturn — gas giants 🪐", "Uranus, Neptune — ice giants"], importantPoints: ["Sun is a star, not a planet", "Earth is the only planet with life (that we know!)", "Moon is Earth's natural satellite"], tryItYourself: "Draw the solar system with all 8 planets in order!" },
        { id: "states-india", title: "States of India", emoji: "🗺️", explanation: "India has 28 states and 8 union territories. Each state has its own capital, language, and culture. Let's learn about some major ones!", examples: ["Delhi — capital of India", "Maharashtra — capital Mumbai", "Tamil Nadu — capital Chennai"], importantPoints: ["Each state has unique traditions", "Learn your own state's capital and language", "India's diversity is its strength"], tryItYourself: "Write the names and capitals of 10 Indian states!" },
        { id: "health-hygiene", title: "Health & Hygiene", emoji: "🧼", explanation: "Staying clean and healthy helps us avoid getting sick. Wash your hands, brush your teeth, and eat clean food every day!", examples: ["Wash hands before eating 🧼", "Brush teeth twice a day 🪥", "Take a bath daily 🚿"], importantPoints: ["Germs are tiny and invisible", "Clean hands prevent many diseases", "Exercise and good food keep us strong"], tryItYourself: "Make a hygiene routine chart for your day!" },
      ],
    },
    {
      subjectId: "gk",
      units: [
        { id: "inventions", title: "Great Inventions", emoji: "💡", explanation: "Inventions change the world! From the wheel to the internet, curious people have created amazing things that make our lives easier.", examples: ["Wheel — oldest invention 🛞", "Electricity — Thomas Edison 💡", "Telephone — Alexander Graham Bell 📞"], importantPoints: ["Inventions solve problems", "Many inventions were accidental discoveries!", "Technology keeps improving every year"], tryItYourself: "If you could invent something, what would it be? Write about it!" },
        { id: "world-wonders", title: "Wonders of the World", emoji: "🏛️", explanation: "The world has 7 modern wonders — incredible structures built by humans. India's Taj Mahal is one of them!", examples: ["Taj Mahal, India 🕌", "Great Wall of China 🇨🇳", "Machu Picchu, Peru 🏔️"], importantPoints: ["7 wonders were chosen by a global vote", "Each wonder has an amazing history", "The Taj Mahal was built by Shah Jahan"], tryItYourself: "Write the names of all 7 wonders and one fact about each!" },
        { id: "sports-gk", title: "Sports & Games", emoji: "⚽", explanation: "Sports teach teamwork, discipline, and keep us healthy. India is great at cricket, hockey, badminton, and many more sports!", examples: ["Cricket: Sachin Tendulkar 🏏", "Hockey: India's national game 🏑", "Olympics: Neeraj Chopra — Gold medal 🥇"], importantPoints: ["Every sport has rules", "Practice makes perfect", "Sportsmanship means playing fair"], tryItYourself: "Write about your favorite sport and why you love it!" },
      ],
    },
  ],
  5: [
    {
      subjectId: "math",
      units: [
        { id: "decimals-5", title: "Decimals & Percentages", emoji: "📊", explanation: "Decimals and percentages are everywhere — in prices, scores, and measurements! 50% = 0.5 = ½. They're different ways to show the same thing.", examples: ["50% = 50/100 = 0.5", "25% = 25/100 = 0.25 = ¼", "Price: ₹100 with 10% off = ₹90"], importantPoints: ["Percent means 'per hundred'", "To convert % to decimal, divide by 100", "Decimals use the decimal point"], tryItYourself: "If a toy costs ₹200 and has 20% discount, what's the price?" },
        { id: "geometry-5", title: "Advanced Geometry", emoji: "📐", explanation: "Let's learn about area of triangles, circles, and more complex shapes. Area tells us how much space a shape covers!", examples: ["Area of rectangle = length × width", "Area of triangle = ½ × base × height", "Perimeter of circle = 2 × π × radius"], importantPoints: ["Area is measured in square units (cm², m²)", "π (pi) ≈ 3.14", "Different shapes have different formulas"], tryItYourself: "Find the area of a rectangle that is 8 cm long and 5 cm wide!" },
        { id: "data-handling", title: "Data Handling", emoji: "📈", explanation: "Data handling means collecting information and showing it in charts and graphs. Bar graphs and pie charts make data easy to understand!", examples: ["Bar graph shows data as bars 📊", "Pie chart shows parts of a whole 🥧", "Tally marks: |||| = 5"], importantPoints: ["Give your graph a title", "Label the axes", "Choose the right type of graph for your data"], tryItYourself: "Survey 10 friends about their favorite fruit and make a bar graph!" },
        { id: "lcm-hcf", title: "LCM & HCF", emoji: "🔢", explanation: "LCM is the smallest number divisible by two numbers. HCF is the biggest number that divides both. These help with fractions!", examples: ["LCM of 4 and 6 = 12", "HCF of 12 and 18 = 6", "Multiples of 4: 4, 8, 12, 16... Multiples of 6: 6, 12, 18..."], importantPoints: ["LCM = Least Common Multiple", "HCF = Highest Common Factor", "List multiples/factors to find them"], tryItYourself: "Find the LCM and HCF of 8 and 12!" },
        { id: "profit-loss", title: "Profit & Loss Basics", emoji: "💰", explanation: "When you sell something for more than you bought it, that's profit! If you sell for less, that's loss. Business runs on this concept!", examples: ["Buy for ₹50, sell for ₹70 → Profit = ₹20", "Buy for ₹100, sell for ₹80 → Loss = ₹20", "Profit = Selling Price - Cost Price"], importantPoints: ["SP > CP = Profit", "SP < CP = Loss", "SP = CP means no profit, no loss"], tryItYourself: "You bought a book for ₹40 and sold for ₹55. What's your profit?" },
      ],
    },
    {
      subjectId: "english",
      units: [
        { id: "advanced-grammar-5", title: "Advanced Grammar", emoji: "📖", explanation: "Master complex grammar: active/passive voice, direct/indirect speech, and advanced punctuation make your writing powerful!", examples: ["Active: The cat caught the mouse.", "Passive: The mouse was caught by the cat.", "Direct: She said, 'I am happy.'", "Indirect: She said that she was happy."], importantPoints: ["Active voice = subject does the action", "Passive voice = subject receives the action", "Direct speech uses quotation marks"], tryItYourself: "Convert 3 active sentences to passive voice!" },
        { id: "essay-5", title: "Advanced Essay Writing", emoji: "✏️", explanation: "Write structured essays with introduction, body paragraphs, and conclusion. Use linking words to connect ideas smoothly.", examples: ["Linking words: However, Moreover, Furthermore, In conclusion", "Topic sentences start each paragraph", "Support ideas with examples and reasons"], importantPoints: ["Plan before writing", "Each paragraph = one main idea", "Conclusion summarizes your essay"], tryItYourself: "Write a 3-paragraph essay on 'The Importance of Trees'!" },
        { id: "poetry", title: "Poetry Appreciation", emoji: "🎭", explanation: "Poems use beautiful words, rhythm, and rhymes to express feelings. Learning to read and write poems makes language come alive!", examples: ["Rhyme: cat-hat, moon-soon, light-night", "Simile: 'She runs like a deer'", "Metaphor: 'The world is a stage'"], importantPoints: ["Poems have rhythm (a beat)", "Rhyming words sound similar at the end", "Poems can express any emotion"], tryItYourself: "Write a 4-line poem about nature with rhyming words!" },
        { id: "formal-writing", title: "Formal Writing", emoji: "📋", explanation: "Formal writing includes applications, notices, and reports. These are important for school and later life. They follow specific formats.", examples: ["Application: To the Principal, Subject: Leave application...", "Notice: 'Annual Sports Day on 15th March...'", "Report: 'The Science Exhibition was held on...'"], importantPoints: ["Use formal language (no slang)", "Follow the correct format", "Be clear and specific"], tryItYourself: "Write a leave application to your Principal for 2 days!" },
      ],
    },
    {
      subjectId: "hindi",
      units: [
        { id: "grammar-hindi-5", title: "विस्तृत व्याकरण", emoji: "📖", explanation: "काल (tenses), वचन (number), लिंग (gender) — ये हिंदी व्याकरण के महत्वपूर्ण भाग हैं। इन्हें अच्छे से सीखो!", examples: ["काल: वर्तमान, भूत, भविष्य", "वचन: एकवचन (लड़का) → बहुवचन (लड़के)", "लिंग: पुल्लिंग (लड़का), स्त्रीलिंग (लड़की)"], importantPoints: ["काल बताता है काम कब हुआ", "एकवचन = एक, बहुवचन = अनेक", "हर संज्ञा का लिंग होता है"], tryItYourself: "5 शब्दों का वचन बदलो: लड़का, किताब, पंखा, नदी, फूल" },
        { id: "letter-hindi-5", title: "औपचारिक पत्र", emoji: "✉️", explanation: "औपचारिक पत्र अधिकारियों को लिखे जाते हैं — जैसे प्रधानाचार्य, नगर अधिकारी आदि। इनका एक निश्चित प्रारूप होता है।", examples: ["सेवा में, श्रीमान प्रधानाचार्य...", "विषय: अवकाश हेतु प्रार्थना पत्र", "दिनांक, प्रेषक, प्राप्तक, विषय, मुख्य भाग, हस्ताक्षर"], importantPoints: ["औपचारिक भाषा का प्रयोग करो", "विषय स्पष्ट और संक्षिप्त हो", "प्रारूप सही होना चाहिए"], tryItYourself: "प्रधानाचार्य को बीमारी के कारण अवकाश हेतु पत्र लिखो!" },
        { id: "comprehension-hindi", title: "गद्यांश बोध", emoji: "📚", explanation: "एक अनुच्छेद को ध्यान से पढ़ो और उससे संबंधित प्रश्नों के उत्तर दो। यह तुम्हारी समझ की परीक्षा लेता है।", examples: ["अनुच्छेद पढ़ो", "प्रश्नों के उत्तर ढूँढो", "शब्दार्थ लिखो"], importantPoints: ["अनुच्छेद को दो बार पढ़ो", "उत्तर अनुच्छेद में से ही ढूँढो", "अपने शब्दों में लिखो"], tryItYourself: "अपनी हिंदी पाठ्यपुस्तक से एक अनुच्छेद पढ़ो और 3 प्रश्न बनाओ!" },
      ],
    },
    {
      subjectId: "evs",
      units: [
        { id: "natural-resources", title: "Natural Resources", emoji: "🌍", explanation: "Natural resources are materials from nature that we use — water, air, minerals, forests. Some are renewable (can be replaced), some are not!", examples: ["Renewable: Solar energy ☀️, Wind 💨, Water 💧", "Non-renewable: Coal, Petroleum, Natural gas", "Forests give us wood, oxygen, and medicines 🌳"], importantPoints: ["Use resources wisely", "Non-renewable resources will run out someday", "Plant trees and save water"], tryItYourself: "List 5 renewable and 5 non-renewable resources!" },
        { id: "simple-machines", title: "Simple Machines", emoji: "⚙️", explanation: "Simple machines make work easier! A lever helps lift heavy things, a wheel helps move things, and a pulley helps pull things up.", examples: ["Lever: Seesaw, scissors ✂️", "Wheel and axle: Cart, bicycle 🚲", "Pulley: Flag pole, well 🏳️"], importantPoints: ["Machines reduce effort", "They don't reduce work, just make it easier", "Complex machines are made of simple machines"], tryItYourself: "Find 5 simple machines in your home and write their names!" },
        { id: "human-body-5", title: "Human Body Systems", emoji: "🫀", explanation: "Our body has amazing systems that work together! The digestive system breaks down food, the respiratory system helps us breathe, and the circulatory system pumps blood.", examples: ["Digestive: Mouth → Stomach → Intestines", "Respiratory: Nose → Lungs → Oxygen", "Circulatory: Heart pumps blood through blood vessels"], importantPoints: ["Each system has a specific job", "Systems work together to keep us alive", "Taking care of our body keeps all systems healthy"], tryItYourself: "Draw the digestive system and label its parts!" },
      ],
    },
    {
      subjectId: "gk",
      units: [
        { id: "current-affairs", title: "India & World Today", emoji: "🌐", explanation: "Knowing what's happening in India and the world makes you smart and aware. Read newspapers and watch news to stay updated!", examples: ["India's space missions: Chandrayaan, Mangalyaan 🚀", "Important world organizations: UN, WHO", "Recent achievements of Indian athletes 🏅"], importantPoints: ["Stay curious about the world", "Read age-appropriate news", "Discuss current events with family"], tryItYourself: "Find 3 recent news items and write one line about each!" },
        { id: "geography-gk", title: "World Geography", emoji: "🗺️", explanation: "Our world has 7 continents and 5 oceans. Each continent has amazing countries, cultures, and natural wonders!", examples: ["Continents: Asia, Africa, Europe, N.America, S.America, Australia, Antarctica", "Largest ocean: Pacific Ocean 🌊", "Highest mountain: Mount Everest 🏔️"], importantPoints: ["Asia is the largest continent", "India is in Asia", "Each continent has unique features"], tryItYourself: "Name all 7 continents and one famous landmark from each!" },
        { id: "tech-awareness", title: "Technology Basics", emoji: "💻", explanation: "Technology is changing the world! Understanding computers, the internet, and basic coding concepts will help you in the future.", examples: ["Computer parts: Monitor, Keyboard, Mouse, CPU", "Internet connects millions of computers 🌐", "Coding tells computers what to do 💻"], importantPoints: ["Use technology responsibly", "The internet has good and bad content — be careful", "Learning to code is like learning a new language"], tryItYourself: "List 5 ways you use technology every day!" },
      ],
    },
  ],
};

export const getLessons = (classNum: number, subjectId: string): LessonUnit[] => {
  const classData = lessonsData[classNum] || lessonsData[1];
  const subjectData = classData.find((s) => s.subjectId === subjectId);
  return subjectData?.units || [];
};
