import { useParams } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import DashboardCard from "@/components/DashboardCard";
import { dashboardSections } from "@/data/content";

const ClassDashboard = () => {
  const { board, classId } = useParams();
  const classNum = parseInt(classId || "1");
  const boardName = board === "cbse" ? "CBSE" : "Bihar Board";

  return (
    <PageWrapper>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-foreground mb-2">
          Class {classNum} Dashboard
        </h1>
        <p className="text-muted-foreground">
          {boardName} • Let's start learning! 🎉
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {dashboardSections.map((section, i) => (
          <DashboardCard
            key={section.id}
            title={section.title}
            emoji={section.emoji}
            description={section.description}
            to={`/${board}/${classId}/${section.id}`}
            color={section.color}
            index={i}
          />
        ))}
      </div>
    </PageWrapper>
  );
};

export default ClassDashboard;
