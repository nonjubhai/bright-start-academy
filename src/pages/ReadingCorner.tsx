import PageWrapper from "@/components/PageWrapper";
import { readingCorner } from "@/data/content";
import { motion } from "framer-motion";

const ReadingCorner = () => {
  return (
    <PageWrapper>
      <h1 className="text-2xl font-extrabold text-foreground mb-6">📖 Reading Corner</h1>
      <div className="max-w-3xl space-y-8">
        {/* Storybooks */}
        <section>
          <h2 className="font-bold text-lg text-foreground mb-3">📚 Recommended Storybooks</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {readingCorner.storybooks.map((book, i) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06 }}
                className="p-4 rounded-2xl bg-card border border-border text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{book.emoji}</div>
                <h3 className="font-bold text-sm text-foreground">{book.title}</h3>
                <p className="text-xs text-muted-foreground">Ages {book.age}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Moral Stories */}
        <section>
          <h2 className="font-bold text-lg text-foreground mb-3">🌟 Moral Stories</h2>
          <div className="space-y-3">
            {readingCorner.moralStories.map((story) => (
              <div key={story.title} className="flex items-center gap-3 p-4 rounded-xl bg-secondary/5 border border-secondary/10">
                <span className="text-2xl">{story.emoji}</span>
                <div>
                  <h3 className="font-bold text-foreground">{story.title}</h3>
                  <p className="text-sm text-muted-foreground italic">Moral: {story.moral}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="font-bold text-lg text-foreground mb-3">🏆 Reading Challenges</h2>
          <div className="grid grid-cols-2 gap-3">
            {readingCorner.challenges.map((ch) => (
              <div key={ch.title} className="p-4 rounded-2xl bg-coral/5 border border-coral/10">
                <span className="text-2xl">{ch.emoji}</span>
                <h3 className="font-bold text-sm text-foreground mt-1">{ch.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-coral/10 text-coral font-medium">
                  {ch.difficulty}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Vocab Games */}
        <section>
          <h2 className="font-bold text-lg text-foreground mb-3">🎮 Vocabulary Games</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {readingCorner.vocabGames.map((game) => (
              <div key={game.title} className="p-4 rounded-2xl bg-lavender/5 border border-lavender/10">
                <span className="text-2xl">{game.emoji}</span>
                <h3 className="font-bold text-foreground mt-1">{game.title}</h3>
                <p className="text-sm text-muted-foreground">{game.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default ReadingCorner;
