import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface DashboardCardProps {
  title: string;
  emoji: string;
  description: string;
  to: string;
  color: string;
  index: number;
}

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 border-primary/20 hover:border-primary/40",
  secondary: "bg-secondary/10 border-secondary/20 hover:border-secondary/40",
  accent: "bg-accent/10 border-accent/20 hover:border-accent/40",
  coral: "bg-coral/10 border-coral/20 hover:border-coral/40",
  lavender: "bg-lavender/10 border-lavender/20 hover:border-lavender/40",
  rose: "bg-rose/10 border-rose/20 hover:border-rose/40",
  sky: "bg-sky/10 border-sky/20 hover:border-sky/40",
  sunshine: "bg-sunshine/10 border-sunshine/20 hover:border-sunshine/40",
  mint: "bg-mint/10 border-mint/20 hover:border-mint/40",
};

const DashboardCard = ({ title, emoji, description, to, color, index }: DashboardCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
    >
      <Link
        to={to}
        className={`block p-6 rounded-2xl border-2 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${colorMap[color] || colorMap.primary}`}
      >
        <div className="text-4xl mb-3">{emoji}</div>
        <h3 className="font-bold text-lg text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </Link>
    </motion.div>
  );
};

export default DashboardCard;
