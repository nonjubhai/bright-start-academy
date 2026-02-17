import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { boards, classes } from "@/data/content";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-coral/5" />
        <div className="container relative py-16 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-4">
              <div className="flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-4 py-2 rounded-full">
                <Sparkles size={18} className="text-secondary" />
                <span className="font-semibold text-sm">For Classes 1 – 5</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
              FuturePath <span className="text-primary">Junior</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto mb-10">
              Build Strong Basics from the Beginning ✨
            </p>
          </motion.div>

          {/* Board Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <h2 className="text-lg font-bold text-foreground mb-4">Choose Your Board</h2>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {boards.map((board) => (
                <button
                  key={board.id}
                  onClick={() => setSelectedBoard(board.id)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-200 font-semibold text-lg ${
                    selectedBoard === board.id
                      ? "border-primary bg-primary/10 text-foreground scale-[1.03]"
                      : "border-border bg-card text-foreground hover:border-primary/30"
                  }`}
                >
                  <div className="text-3xl mb-1">{board.emoji}</div>
                  {board.name}
                </button>
              ))}
            </div>

            {/* Class Selection */}
            {selectedBoard && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-lg font-bold text-foreground mb-4">Select Your Class</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {classes.map((cls) => (
                    <Button
                      key={cls.id}
                      variant="outline"
                      onClick={() => navigate(`/${selectedBoard}/${cls.id}`)}
                      className="h-auto py-4 rounded-2xl border-2 text-base font-semibold hover:border-primary/40 hover:bg-primary/5 hover:scale-[1.03] transition-all"
                    >
                      <span className="text-2xl mr-2">{cls.emoji}</span>
                      {cls.name}
                      <ArrowRight size={16} className="ml-1 text-muted-foreground" />
                    </Button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { emoji: "📚", title: "All Subjects", desc: "Complete syllabus coverage" },
            { emoji: "🎯", title: "Study Plans", desc: "Organized daily routines" },
            { emoji: "🧠", title: "Skill Building", desc: "Beyond textbook learning" },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
              className="text-center p-6 rounded-2xl bg-card border border-border"
            >
              <div className="text-3xl mb-2">{f.emoji}</div>
              <h3 className="font-bold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        Made with 💛 for young learners • FuturePath Junior
      </footer>
    </div>
  );
};

export default Index;
