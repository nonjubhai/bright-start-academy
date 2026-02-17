import { useParams } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import { getLessons } from "@/data/lessons";
import { getMiniTests } from "@/data/questions";
import { getActivities } from "@/data/activities";
import { useProgress } from "@/hooks/useProgress";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Trophy, BookOpen, PenLine, Target, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgressPage = () => {
  const { board, classId, subjectId } = useParams();
  const classNum = parseInt(classId || "1");
  const lessons = getLessons(classNum, subjectId || "");
  const tests = getMiniTests(classNum, subjectId || "");
  const activities = getActivities(classNum, subjectId || "");
  const { progress, resetProgress } = useProgress(board || "", classId || "", subjectId || "");

  const completedLessons = progress.completedLessons.length;
  const totalLessons = lessons.length;
  const lessonPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const practiceScores = Object.values(progress.practiceScores);
  const avgPractice = practiceScores.length > 0 ? Math.round(practiceScores.reduce((a, b) => a + b, 0) / practiceScores.length) : 0;

  const testScores = Object.values(progress.testScores);
  const avgTest = testScores.length > 0 ? Math.round(testScores.reduce((a, b) => a + b, 0) / testScores.length) : 0;

  const completedActivities = progress.activitiesCompleted.length;
  const totalActivities = activities.length;
  const activityPct = totalActivities > 0 ? Math.round((completedActivities / totalActivities) * 100) : 0;

  const overallPct = Math.round((lessonPct + avgPractice + avgTest + activityPct) / 4);

  const stats = [
    { label: "Lessons", value: `${completedLessons}/${totalLessons}`, pct: lessonPct, icon: BookOpen, color: "primary" },
    { label: "Practice Score", value: practiceScores.length > 0 ? `${avgPractice}%` : "Not started", pct: avgPractice, icon: PenLine, color: "sky" },
    { label: "Test Score", value: testScores.length > 0 ? `${avgTest}%` : "Not started", pct: avgTest, icon: Target, color: "coral" },
    { label: "Activities", value: `${completedActivities}/${totalActivities}`, pct: activityPct, icon: Puzzle, color: "accent" },
  ];

  const colorMap: Record<string, string> = {
    primary: "text-primary",
    sky: "text-sky-500",
    coral: "text-coral",
    accent: "text-accent",
  };

  return (
    <PageWrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
        <h1 className="text-2xl font-extrabold text-foreground mb-6">📊 Progress Tracker</h1>

        {/* Overall */}
        <div className="p-6 rounded-2xl bg-card border border-border mb-6 text-center">
          <Trophy size={32} className="text-secondary mx-auto mb-2" />
          <p className="text-sm font-semibold text-muted-foreground mb-1">Overall Progress</p>
          <p className="text-5xl font-black text-primary mb-3">{overallPct}%</p>
          <Progress value={overallPct} className="h-4 mb-2" />
          <p className="text-sm text-foreground">
            {overallPct >= 80 ? "🌟 Amazing! You're a star learner!" :
             overallPct >= 50 ? "👏 Great going! Keep it up!" :
             overallPct > 0 ? "💪 You've started! Keep learning!" :
             "📚 Start your learning journey!"}
          </p>
        </div>

        {/* Individual Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="p-4 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={18} className={colorMap[stat.color] || "text-primary"} />
                  <span className="font-bold text-sm text-foreground">{stat.label}</span>
                </div>
                <p className="text-2xl font-black text-foreground mb-2">{stat.value}</p>
                <Progress value={stat.pct} className="h-2" />
              </motion.div>
            );
          })}
        </div>

        {/* Lesson Checklist */}
        <div className="p-5 rounded-2xl bg-card border border-border mb-6">
          <h2 className="font-bold text-foreground mb-3">📖 Lesson Checklist</h2>
          <div className="space-y-2">
            {lessons.map((lesson, i) => {
              const done = progress.completedLessons.includes(lesson.id);
              return (
                <div key={lesson.id} className="flex items-center gap-3 text-sm">
                  {done ? (
                    <CheckCircle size={16} className="text-accent shrink-0" />
                  ) : (
                    <Circle size={16} className="text-muted-foreground shrink-0" />
                  )}
                  <span className={done ? "text-foreground" : "text-muted-foreground"}>
                    Unit {i + 1}: {lesson.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <Button onClick={resetProgress} variant="outline" className="rounded-xl text-sm text-muted-foreground">
          🔄 Reset All Progress
        </Button>
      </motion.div>
    </PageWrapper>
  );
};

export default ProgressPage;
