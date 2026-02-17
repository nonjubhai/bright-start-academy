import { useParams, Link } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import { getSubjects } from "@/data/content";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 border-primary/20",
  sky: "bg-sky/10 border-sky/20",
  coral: "bg-coral/10 border-coral/20",
  accent: "bg-accent/10 border-accent/20",
  sunshine: "bg-sunshine/10 border-sunshine/20",
};

const SubjectsOverview = () => {
  const { board, classId } = useParams();
  const classNum = parseInt(classId || "1");
  const subjects = getSubjects(classNum);

  return (
    <PageWrapper>
      <h1 className="text-2xl font-extrabold text-foreground mb-6">📚 Subjects Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
        {subjects.map((subject, i) => (
          <motion.div
            key={subject.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Link
              to={`/${board}/${classId}/subjects/${subject.id}`}
              className={`block p-5 rounded-2xl border-2 transition-all hover:shadow-md hover:scale-[1.02] ${colorMap[subject.color] || colorMap.primary}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl">{subject.emoji}</span>
                  <h3 className="font-bold text-lg text-foreground mt-2">{subject.name}</h3>
                </div>
                <ArrowRight size={20} className="text-muted-foreground" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default SubjectsOverview;
