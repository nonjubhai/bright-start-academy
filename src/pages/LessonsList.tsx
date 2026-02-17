import { useParams, Link } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import { getLessons } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";
import { motion } from "framer-motion";
import { CheckCircle, Circle, ArrowRight } from "lucide-react";

const LessonsList = () => {
  const { board, classId, subjectId } = useParams();
  const classNum = parseInt(classId || "1");
  const lessons = getLessons(classNum, subjectId || "");
  const { progress } = useProgress(board || "", classId || "", subjectId || "");

  return (
    <PageWrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
        <h1 className="text-2xl font-extrabold text-foreground mb-6">📖 Lessons</h1>
        <div className="space-y-3">
          {lessons.map((lesson, i) => {
            const isCompleted = progress.completedLessons.includes(lesson.id);
            return (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={`/${board}/${classId}/subjects/${subjectId}/lessons/${lesson.id}`}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all hover:shadow-md hover:scale-[1.01] ${
                    isCompleted
                      ? "bg-accent/10 border-accent/30"
                      : "bg-card border-border hover:border-primary/30"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl shrink-0">
                    {lesson.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-muted-foreground">Unit {i + 1}</span>
                      {isCompleted && <CheckCircle size={14} className="text-accent" />}
                    </div>
                    <h3 className="font-bold text-foreground truncate">{lesson.title}</h3>
                  </div>
                  <ArrowRight size={18} className="text-muted-foreground shrink-0" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </PageWrapper>
  );
};

export default LessonsList;
