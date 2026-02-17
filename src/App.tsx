import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ClassDashboard from "./pages/ClassDashboard";
import SubjectsOverview from "./pages/SubjectsOverview";
import SubjectDetail from "./pages/SubjectDetail";
import ImportantTopics from "./pages/ImportantTopics";
import StudyPlan from "./pages/StudyPlan";
import SkillBuilder from "./pages/SkillBuilder";
import ReadingCorner from "./pages/ReadingCorner";
import Struggling from "./pages/Struggling";
import NextClassPreview from "./pages/NextClassPreview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:board/:classId" element={<ClassDashboard />} />
          <Route path="/:board/:classId/subjects" element={<SubjectsOverview />} />
          <Route path="/:board/:classId/subjects/:subjectId" element={<SubjectDetail />} />
          <Route path="/:board/:classId/topics" element={<ImportantTopics />} />
          <Route path="/:board/:classId/study-plan" element={<StudyPlan />} />
          <Route path="/:board/:classId/skill-builder" element={<SkillBuilder />} />
          <Route path="/:board/:classId/reading-corner" element={<ReadingCorner />} />
          <Route path="/:board/:classId/struggling" element={<Struggling />} />
          <Route path="/:board/:classId/next-class" element={<NextClassPreview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
