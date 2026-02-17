import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import { struggles } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Struggling = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const current = struggles.find((s) => s.id === selected);

  return (
    <PageWrapper>
      <h1 className="text-2xl font-extrabold text-foreground mb-2">🧠 I'm Struggling With...</h1>
      <p className="text-muted-foreground mb-6">It's okay to need help. We're here for you! 💛</p>

      <div className="max-w-2xl">
        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div key="options" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
              {struggles.map((s, i) => (
                <motion.button
                  key={s.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setSelected(s.id)}
                  className="w-full flex items-center gap-4 p-4 rounded-2xl bg-card border-2 border-border text-left hover:border-rose/30 hover:bg-rose/5 transition-all"
                >
                  <span className="text-3xl">{s.emoji}</span>
                  <span className="font-bold text-foreground text-lg">{s.title}</span>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div key="detail" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <Button variant="ghost" onClick={() => setSelected(null)} className="mb-4">
                <ArrowLeft size={16} className="mr-1" /> Back
              </Button>
              <div className="text-4xl mb-3">{current?.emoji}</div>
              <h2 className="text-xl font-extrabold text-foreground mb-3">{current?.title}</h2>
              
              <div className="p-4 rounded-2xl bg-rose/5 border border-rose/10 mb-6">
                <div className="flex items-start gap-2">
                  <Heart size={18} className="text-rose mt-1 shrink-0" />
                  <p className="text-foreground">{current?.message}</p>
                </div>
              </div>

              <h3 className="font-bold text-foreground mb-3">Here's what you can try:</h3>
              <ul className="space-y-3">
                {current?.tips.map((tip, i) => (
                  <motion.li
                    key={tip}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-card border border-border"
                  >
                    <span className="bg-primary/10 text-primary font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-foreground">{tip}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 p-4 rounded-2xl bg-secondary/10 border border-secondary/20 text-center">
                <p className="font-bold text-foreground">Remember: You are amazing! 🌟</p>
                <p className="text-sm text-muted-foreground">Every expert was once a beginner.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
};

export default Struggling;
