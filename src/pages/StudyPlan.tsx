import { useParams } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import { getStudyPlan } from "@/data/content";
import { motion } from "framer-motion";
import { Clock, BookOpen, Brain, Smile } from "lucide-react";

const StudyPlan = () => {
  const { classId } = useParams();
  const classNum = parseInt(classId || "1");
  const plan = getStudyPlan(classNum);

  return (
    <PageWrapper>
      <h1 className="text-2xl font-extrabold text-foreground mb-6">🎯 Study Plan</h1>
      <div className="max-w-2xl space-y-8">
        {/* Daily Time */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-5 rounded-2xl bg-primary/5 border border-primary/10 flex items-center gap-4">
          <Clock size={32} className="text-primary shrink-0" />
          <div>
            <h2 className="font-bold text-foreground">Recommended Daily Study Time</h2>
            <p className="text-2xl font-extrabold text-primary">{plan.dailyTime}</p>
            <p className="text-sm text-muted-foreground">Keep it fun and pressure-free!</p>
          </div>
        </motion.div>

        {/* Weekly Schedule */}
        <section>
          <h2 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
            <BookOpen size={20} className="text-secondary" /> Weekly Routine
          </h2>
          <div className="space-y-2">
            {plan.weekly.map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border"
              >
                <span className="font-bold text-foreground w-24 shrink-0">{day.day}</span>
                <span className="text-foreground flex-1">{day.subjects.join(", ")}</span>
                <span className="text-sm text-muted-foreground hidden sm:block">🎨 {day.activity}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Homework Tips */}
        <section>
          <h2 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
            <Brain size={20} className="text-coral" /> Homework Strategy
          </h2>
          <ul className="space-y-2">
            {plan.homeworkTips.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-foreground">
                <span className="text-secondary">✓</span> {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* Exam Tips */}
        <section>
          <h2 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
            <Smile size={20} className="text-accent" /> Exam Preparation Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {plan.examTips.map((tip, i) => (
              <div key={tip} className="p-3 rounded-xl bg-accent/5 border border-accent/10 text-sm text-foreground">
                <span className="font-bold text-accent mr-1">{i + 1}.</span> {tip}
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default StudyPlan;
