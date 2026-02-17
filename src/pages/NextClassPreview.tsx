import { useParams } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import { getNextClassPreview } from "@/data/content";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Star, TrendingUp } from "lucide-react";

const NextClassPreview = () => {
  const { classId } = useParams();
  const classNum = parseInt(classId || "1");
  const preview = getNextClassPreview(classNum);

  return (
    <PageWrapper>
      <h1 className="text-2xl font-extrabold text-foreground mb-2">➡️ Next Class Preview</h1>
      <p className="text-muted-foreground mb-6">A sneak peek at Class {preview.nextClass}!</p>

      <div className="max-w-2xl space-y-6">
        {/* Changes */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-5 rounded-2xl bg-sky/5 border border-sky/10">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={20} className="text-sky" />
            <h2 className="font-bold text-lg text-foreground">What Changes in Class {preview.nextClass}</h2>
          </div>
          <ul className="space-y-2">
            {preview.changes.map((c) => (
              <li key={c} className="flex items-start gap-2 text-foreground">
                <ArrowUpRight size={16} className="text-sky mt-1 shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* New Subjects */}
        {preview.newSubjects.length > 0 && (
          <section>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={20} className="text-secondary" />
              <h2 className="font-bold text-lg text-foreground">New Subjects</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {preview.newSubjects.map((s) => (
                <span key={s} className="px-4 py-2 rounded-full bg-secondary/10 font-semibold text-foreground">
                  {s}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Difficulty */}
        <section className="p-4 rounded-2xl bg-accent/5 border border-accent/10">
          <h2 className="font-bold text-foreground mb-1">Difficulty Level</h2>
          <p className="text-muted-foreground">{preview.difficulty}</p>
        </section>

        {/* Preparation */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Star size={20} className="text-sunshine" />
            <h2 className="font-bold text-lg text-foreground">How to Prepare Now</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {preview.preparation.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-3 rounded-xl bg-card border border-border text-sm text-foreground"
              >
                <span className="font-bold text-sunshine mr-1">{i + 1}.</span> {p}
              </motion.div>
            ))}
          </div>
        </section>

        <div className="text-center p-4 rounded-2xl bg-primary/5 border border-primary/10">
          <p className="font-bold text-foreground">You're going to do great! 🚀</p>
          <p className="text-sm text-muted-foreground">Keep learning, keep growing!</p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default NextClassPreview;
