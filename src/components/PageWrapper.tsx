import { motion } from "framer-motion";
import Breadcrumbs from "./Breadcrumbs";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="text-secondary" size={24} />
            <span className="font-extrabold text-lg text-foreground">FuturePath Junior</span>
          </Link>
        </div>
        <div className="container">
          <Breadcrumbs />
        </div>
      </header>
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="container py-6 pb-16"
      >
        {children}
      </motion.main>
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        <div className="container">
          Made with 💛 for young learners • FuturePath Junior
        </div>
      </footer>
    </div>
  );
};

export default PageWrapper;
