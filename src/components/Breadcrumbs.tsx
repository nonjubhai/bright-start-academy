import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  if (pathnames.length === 0) return null;

  const labels: Record<string, string> = {
    cbse: "CBSE",
    bihar: "Bihar Board",
    "1": "Class 1",
    "2": "Class 2",
    "3": "Class 3",
    "4": "Class 4",
    "5": "Class 5",
    subjects: "Subjects",
    topics: "Important Topics",
    "study-plan": "Study Plan",
    "skill-builder": "Skill Builder",
    "reading-corner": "Reading Corner",
    struggling: "I'm Struggling With",
    "next-class": "Next Class Preview",
    math: "Mathematics",
    english: "English",
    hindi: "Hindi",
    evs: "EVS",
    gk: "General Knowledge",
    lessons: "Lessons",
    practice: "Practice",
    tests: "Mini Tests",
    activities: "Activities",
    progress: "Progress",
  };

  return (
    <nav className="flex items-center gap-1 text-sm text-muted-foreground py-3 px-4 flex-wrap">
      <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
        <Home size={14} />
        <span>Home</span>
      </Link>
      {pathnames.map((segment, index) => {
        const to = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;
        const label = labels[segment] || segment;
        return (
          <span key={to} className="flex items-center gap-1">
            <ChevronRight size={14} />
            {isLast ? (
              <span className="text-foreground font-semibold">{label}</span>
            ) : (
              <Link to={to} className="hover:text-foreground transition-colors">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
