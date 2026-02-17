export type Activity = {
  id: string;
  title: string;
  emoji: string;
  description: string;
  type: "interactive" | "creative" | "game";
  instructions: string[];
};

export const getActivities = (classNum: number, subjectId: string): Activity[] => {
  if (subjectId === "english") {
    return classNum <= 2
      ? [
          { id: "letter-trace", title: "Letter Tracing", emoji: "✍️", description: "Trace letters with your finger or pencil to practice writing!", type: "interactive", instructions: ["Look at the letter carefully", "Trace it slowly with your finger first", "Then write it with a pencil", "Practice each letter 5 times"] },
          { id: "word-match", title: "Match the Picture", emoji: "🖼️", description: "Match words with their correct pictures!", type: "game", instructions: ["Look at each picture carefully", "Read the word options", "Draw a line connecting the word to its picture", "Check your answers!"] },
          { id: "word-builder", title: "Word Building", emoji: "🧩", description: "Arrange letters to form words!", type: "interactive", instructions: ["Look at the jumbled letters", "Think of what word they could make", "Arrange them in the correct order", "Write the word in your notebook"] },
          { id: "rhyme-time", title: "Rhyme Time Game", emoji: "🎵", description: "Find words that rhyme with each other!", type: "game", instructions: ["Read the given word", "Think of words that sound similar at the end", "Write as many rhyming words as you can", "Cat → Hat, Bat, Mat, Sat!"] },
        ]
      : [
          { id: "story-creator", title: "Story Creator", emoji: "📖", description: "Create your own short story with a beginning, middle, and end!", type: "creative", instructions: ["Choose your characters", "Decide where the story happens", "Write what happens (beginning → problem → solution)", "Add a title and draw a picture!"] },
          { id: "grammar-detective", title: "Grammar Detective", emoji: "🔍", description: "Find the nouns, verbs, and adjectives in sentences!", type: "game", instructions: ["Read each sentence carefully", "Circle the nouns in blue", "Underline the verbs in red", "Highlight adjectives in yellow"] },
          { id: "vocabulary-quest", title: "Vocabulary Quest", emoji: "🗺️", description: "Learn new words and use them in sentences!", type: "interactive", instructions: ["Read the new word and its meaning", "Say it out loud 3 times", "Write it in a sentence", "Draw a picture to remember it"] },
          { id: "crossword", title: "Mini Crossword", emoji: "✏️", description: "Solve a crossword puzzle with vocabulary words!", type: "game", instructions: ["Read each clue carefully", "Think of the word that matches", "Write it in the correct boxes", "Use a pencil so you can erase!"] },
        ];
  }

  if (subjectId === "math") {
    return classNum <= 2
      ? [
          { id: "count-objects", title: "Count the Objects", emoji: "🔢", description: "Count objects around you and write the number!", type: "interactive", instructions: ["Look at the group of objects", "Count each one carefully", "Point to each object as you count", "Write the total number"] },
          { id: "number-order", title: "Number Ordering", emoji: "📊", description: "Arrange numbers from smallest to biggest!", type: "game", instructions: ["Look at all the numbers", "Find the smallest one first", "Then find the next bigger one", "Keep going until all are in order!"] },
          { id: "shape-hunt", title: "Shape Hunt", emoji: "🔷", description: "Find shapes around your house!", type: "interactive", instructions: ["Walk around your room", "Find a circle (like a clock)", "Find a square (like a window)", "Find a triangle and a rectangle too!", "Draw what you found!"] },
          { id: "addition-race", title: "Addition Race", emoji: "🏁", description: "Solve addition problems as fast as you can!", type: "game", instructions: ["Set a timer for 2 minutes", "Solve as many addition problems as you can", "Check your answers", "Try to beat your score next time!"] },
        ]
      : [
          { id: "times-table-challenge", title: "Times Table Challenge", emoji: "✖️", description: "Practice multiplication tables with fun challenges!", type: "game", instructions: ["Choose a times table (2-10)", "Write it from memory", "Check your answers", "Time yourself and try to be faster!"] },
          { id: "fraction-pizza", title: "Fraction Pizza", emoji: "🍕", description: "Learn fractions by dividing a pizza!", type: "interactive", instructions: ["Draw a big circle (pizza!)", "Divide it into equal parts", "Color the fraction asked for", "Write the fraction below"] },
          { id: "math-puzzle", title: "Math Puzzles", emoji: "🧩", description: "Solve fun math puzzles and riddles!", type: "game", instructions: ["Read the puzzle carefully", "Think step by step", "Try different approaches", "Don't give up — you can do it!"] },
          { id: "measurement-lab", title: "Measurement Lab", emoji: "📏", description: "Measure things around your house with a ruler!", type: "interactive", instructions: ["Find a ruler or measuring tape", "Measure your notebook, pencil, shoe", "Write down each measurement", "Compare — which is longest?"] },
        ];
  }

  // Generic activities for hindi, evs, gk
  return [
    { id: "flashcard", title: "Flashcard Fun", emoji: "🃏", description: "Make and study flashcards for key facts!", type: "interactive", instructions: ["Write a question on one side", "Write the answer on the other side", "Shuffle the cards", "Test yourself or a friend!"] },
    { id: "drawing", title: "Draw & Learn", emoji: "🎨", description: "Draw pictures related to what you learned!", type: "creative", instructions: ["Pick a topic you studied", "Draw a picture about it", "Label the important parts", "Color it beautifully!"] },
    { id: "quiz-show", title: "Family Quiz Show", emoji: "🎤", description: "Host a quiz for your family!", type: "game", instructions: ["Write 10 questions from your lessons", "Gather your family", "Ask questions one by one", "Give points for correct answers!", "The winner gets a high-five! 🖐️"] },
    { id: "mind-map", title: "Mind Map Maker", emoji: "🗺️", description: "Create a colorful mind map of a topic!", type: "creative", instructions: ["Write the main topic in the center", "Draw branches for subtopics", "Add details to each branch", "Use colors and drawings!", "This helps you remember better!"] },
  ];
};
