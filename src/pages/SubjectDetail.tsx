import { useParams } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import { getSubjects } from "@/data/content";
import { motion } from "framer-motion";
import { CheckCircle, Lightbulb, Star, Zap } from "lucide-react";

const SubjectDetail = () => {
  const { classId, subjectId } = useParams();
  const classNum = parseInt(classId || "1");
  const subjects = getSubjects(classNum);
  const subject = subjects.find((s) => s.id === subjectId);

  if (!subject) {
    return (
      <PageWrapper>
        <p className="text-center text-muted-foreground">Subject not found.</p>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
        <div className="text-4xl mb-2">{subject.emoji}</div>
        <h1 className="text-2xl font-extrabold text-foreground mb-4">{subject.name}</h1>

        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Star size={20} className="text-secondary" />
            <h2 className="font-bold text-lg text-foreground">What You'll Learn</h2>
          </div>
          <ul className="space-y-2">
            {subject.learn.map((item) => (
              <li key={item} className="flex items-start gap-2 text-foreground">
                <CheckCircle size={16} className="text-accent mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6 p-4 rounded-2xl bg-primary/5 border border-primary/10">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb size={20} className="text-primary" />
            <h2 className="font-bold text-lg text-foreground">Why It Matters</h2>
          </div>
          <p className="text-foreground">{subject.importance}</p>
        </section>

        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Zap size={20} className="text-coral" />
            <h2 className="font-bold text-lg text-foreground">Study Tips</h2>
          </div>
          <ul className="space-y-2">
            {subject.tips.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-foreground">
                <span className="text-secondary">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg text-foreground mb-3">🎮 Fun Learning Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {subject.funIdeas.map((idea) => (
              <div key={idea} className="p-3 rounded-xl bg-secondary/10 border border-secondary/20 text-center text-sm font-medium text-foreground">
                {idea}
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </PageWrapper>
  );
};

export default SubjectDetail;
