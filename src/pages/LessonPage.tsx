import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import { getLessons } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";
import { motion } from "framer-motion";
import { CheckCircle, Lightbulb, Star, Zap, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const LessonPage = () => {
  const { board, classId, subjectId, lessonId } = useParams();
  const navigate = useNavigate();
  const classNum = parseInt(classId || "1");
  const lessons = getLessons(classNum, subjectId || "");
  const lessonIndex = lessons.findIndex((l) => l.id === lessonId);
  const lesson = lessons[lessonIndex];
  const { progress, completeLesson } = useProgress(board || "", classId || "", subjectId || "");

  if (!lesson) {
    return (
      <PageWrapper>
        <p className="text-center text-muted-foreground">Lesson not found.</p>
      </PageWrapper>
    );
  }

  const isCompleted = progress.completedLessons.includes(lesson.id);
  const prevLesson = lessonIndex > 0 ? lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < lessons.length - 1 ? lessons[lessonIndex + 1] : null;

  const handleComplete = () => {
    completeLesson(lesson.id);
  };

  return (
    <PageWrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-1 rounded-full">
            Unit {lessonIndex + 1} of {lessons.length}
          </span>
          {isCompleted && (
            <span className="text-xs font-semibold text-accent flex items-center gap-1">
              <CheckCircle size={12} /> Completed
            </span>
          )}
        </div>
        <div className="text-4xl mb-2">{lesson.emoji}</div>
        <h1 className="text-2xl font-extrabold text-foreground mb-4">{lesson.title}</h1>

        {/* Explanation */}
        <section className="mb-6 p-5 rounded-2xl bg-primary/5 border border-primary/10">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={20} className="text-primary" />
            <h2 className="font-bold text-lg text-foreground">Let's Learn!</h2>
          </div>
          <p className="text-foreground leading-relaxed">{lesson.explanation}</p>
        </section>

        {/* Examples */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Star size={20} className="text-secondary" />
            <h2 className="font-bold text-lg text-foreground">Examples</h2>
          </div>
          <div className="space-y-2">
            {lesson.examples.map((ex, i) => (
              <div key={i} className="p-3 rounded-xl bg-card border border-border text-foreground">
                {ex}
              </div>
            ))}
          </div>
        </section>

        {/* Important Points */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Zap size={20} className="text-coral" />
            <h2 className="font-bold text-lg text-foreground">Important Points</h2>
          </div>
          <ul className="space-y-2">
            {lesson.importantPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground">
                <CheckCircle size={16} className="text-accent mt-1 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Try It Yourself */}
        <section className="mb-8 p-5 rounded-2xl bg-secondary/10 border border-secondary/20">
          <h2 className="font-bold text-lg text-foreground mb-2">🎯 Try It Yourself!</h2>
          <p className="text-foreground">{lesson.tryItYourself}</p>
        </section>

        {/* Mark Complete */}
        {!isCompleted && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <Button onClick={handleComplete} className="w-full rounded-2xl h-12 text-base font-bold">
              ✅ I've Learned This! Mark as Complete
            </Button>
          </motion.div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3">
          {prevLesson ? (
            <Button
              variant="outline"
              onClick={() => navigate(`/${board}/${classId}/subjects/${subjectId}/lessons/${prevLesson.id}`)}
              className="rounded-xl"
            >
              <ArrowLeft size={16} /> Previous
            </Button>
          ) : (
            <div />
          )}
          {nextLesson ? (
            <Button
              onClick={() => navigate(`/${board}/${classId}/subjects/${subjectId}/lessons/${nextLesson.id}`)}
              className="rounded-xl"
            >
              Next <ArrowRight size={16} />
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={() => navigate(`/${board}/${classId}/subjects/${subjectId}/practice`)}
              className="rounded-xl"
            >
              Go to Practice 📝
            </Button>
          )}
        </div>
      </motion.div>
    </PageWrapper>
  );
};

export default LessonPage;
