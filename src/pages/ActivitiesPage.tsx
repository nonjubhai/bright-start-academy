import { useParams } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import { getActivities } from "@/data/activities";
import { useProgress } from "@/hooks/useProgress";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ActivitiesPage = () => {
  const { board, classId, subjectId } = useParams();
  const classNum = parseInt(classId || "1");
  const activities = getActivities(classNum, subjectId || "");
  const { progress, completeActivity } = useProgress(board || "", classId || "", subjectId || "");

  const typeColors: Record<string, string> = {
    interactive: "bg-primary/10 border-primary/20",
    creative: "bg-secondary/10 border-secondary/20",
    game: "bg-coral/10 border-coral/20",
  };

  const typeLabels: Record<string, string> = {
    interactive: "🔧 Interactive",
    creative: "🎨 Creative",
    game: "🎮 Game",
  };

  return (
    <PageWrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
        <h1 className="text-2xl font-extrabold text-foreground mb-6">🧩 Activities & Games</h1>
        <div className="space-y-4">
          {activities.map((activity, i) => {
            const isDone = progress.activitiesCompleted.includes(activity.id);
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`p-5 rounded-2xl border-2 ${typeColors[activity.type]}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{activity.emoji}</span>
                    <div>
                      <h3 className="font-bold text-foreground">{activity.title}</h3>
                      <span className="text-xs font-semibold text-muted-foreground">{typeLabels[activity.type]}</span>
                    </div>
                  </div>
                  {isDone && <CheckCircle size={20} className="text-accent shrink-0" />}
                </div>
                <p className="text-sm text-foreground mb-3">{activity.description}</p>
                <div className="space-y-1 mb-4">
                  {activity.instructions.map((step, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="font-bold text-primary shrink-0">{j + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
                {!isDone && (
                  <Button
                    onClick={() => completeActivity(activity.id)}
                    variant="outline"
                    className="rounded-xl text-sm"
                    size="sm"
                  >
                    ✅ I Did This Activity!
                  </Button>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </PageWrapper>
  );
};

export default ActivitiesPage;
