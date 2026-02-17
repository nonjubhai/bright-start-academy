import { useParams, Link } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import { getSubjects } from "@/data/content";
import { getLessons } from "@/data/lessons";
import { getPractice, getMiniTests } from "@/data/questions";
import { getActivities } from "@/data/activities";
import { useProgress } from "@/hooks/useProgress";
import { motion } from "framer-motion";
import { BookOpen, PenLine, Target, Puzzle, BarChart3, ArrowRight, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const SubjectDashboard = () => {
  const { board, classId, subjectId } = useParams();
  const classNum = parseInt(classId || "1");
  const subjects = getSubjects(classNum);
  const subject = subjects.find((s) => s.id === subjectId);
  const lessons = getLessons(classNum, subjectId || "");
  const practice = getPractice(classNum, subjectId || "");
  const tests = getMiniTests(classNum, subjectId || "");
  const activities = getActivities(classNum, subjectId || "");
  const { progress } = useProgress(board || "", classId || "", subjectId || "");

  if (!subject) {
    return (
      <PageWrapper>
        <p className="text-center text-muted-foreground">Subject not found.</p>
      </PageWrapper>
    );
  }

  const totalLessons = lessons.length;
  const completedLessons = progress.completedLessons.length;
  const overallProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const sections = [
    {
      id: "lessons",
      title: "Lessons",
      emoji: "📖",
      icon: BookOpen,
      color: "primary",
      description: `${totalLessons} units • ${completedLessons} completed`,
      link: `/${board}/${classId}/subjects/${subjectId}/lessons`,
    },
    {
      id: "practice",
      title: "Practice Questions",
      emoji: "📝",
      icon: PenLine,
      color: "sky",
      description: `${practice.length} practice sets available`,
      link: `/${board}/${classId}/subjects/${subjectId}/practice`,
    },
    {
      id: "tests",
      title: "Mini Tests",
      emoji: "🎯",
      icon: Target,
      color: "coral",
      description: `${tests.length} tests • Check your knowledge!`,
      link: `/${board}/${classId}/subjects/${subjectId}/tests`,
    },
    {
      id: "activities",
      title: "Activities & Games",
      emoji: "🧩",
      icon: Puzzle,
      color: "accent",
      description: `${activities.length} fun activities`,
      link: `/${board}/${classId}/subjects/${subjectId}/activities`,
    },
    {
      id: "progress",
      title: "Progress Tracker",
      emoji: "📊",
      icon: BarChart3,
      color: "secondary",
      description: `${overallProgress}% complete`,
      link: `/${board}/${classId}/subjects/${subjectId}/progress`,
    },
  ];

  const colorClasses: Record<string, string> = {
    primary: "bg-primary/10 border-primary/20 hover:border-primary/40",
    sky: "bg-sky/10 border-sky/20 hover:border-sky/40",
    coral: "bg-coral/10 border-coral/20 hover:border-coral/40",
    accent: "bg-accent/10 border-accent/20 hover:border-accent/40",
    secondary: "bg-secondary/10 border-secondary/20 hover:border-secondary/40",
  };

  return (
    <PageWrapper>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
        {/* Subject Header */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{subject.emoji}</span>
          <div>
            <h1 className="text-2xl font-extrabold text-foreground">{subject.name}</h1>
            <p className="text-muted-foreground text-sm">Class {classNum} • Your learning journey</p>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="mb-6 p-4 rounded-2xl bg-card border border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-foreground">Overall Progress</span>
            <span className="text-sm font-bold text-primary">{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} className="h-3" />
          <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
            <CheckCircle size={12} className="text-accent" />
            Completed {completedLessons} out of {totalLessons} lessons
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={section.link}
                  className={`block p-5 rounded-2xl border-2 transition-all hover:shadow-md hover:scale-[1.02] ${colorClasses[section.color]}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-background/60 flex items-center justify-center text-xl">
                        {section.emoji}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{section.title}</h3>
                        <p className="text-xs text-muted-foreground">{section.description}</p>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-muted-foreground" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </PageWrapper>
  );
};

export default SubjectDashboard;
