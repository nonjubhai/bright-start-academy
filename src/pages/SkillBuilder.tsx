import { useParams } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import { getSkills } from "@/data/content";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SkillBuilder = () => {
  const { classId } = useParams();
  const classNum = parseInt(classId || "1");
  const skills = getSkills(classNum);

  return (
    <PageWrapper>
      <h1 className="text-2xl font-extrabold text-foreground mb-2">🚀 Skill Builder</h1>
      <p className="text-muted-foreground mb-6">Skills that go beyond textbooks!</p>
      <div className="max-w-2xl">
        <Accordion type="multiple" className="space-y-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <AccordionItem value={skill.name} className="border-2 rounded-2xl px-4 bg-card">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.emoji}</span>
                    <span className="font-bold text-foreground text-left">{skill.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pb-4">
                  <div className="p-3 rounded-xl bg-primary/5">
                    <p className="font-semibold text-foreground mb-1">Why it matters:</p>
                    <p className="text-muted-foreground text-sm">{skill.why}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Action Steps:</p>
                    <ul className="space-y-1">
                      {skill.steps.map((s) => (
                        <li key={s} className="text-sm text-foreground flex items-center gap-2">
                          <span className="text-accent">→</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Activities to Try:</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.activities.map((a) => (
                        <span key={a} className="px-3 py-1 bg-secondary/10 rounded-full text-xs font-medium text-foreground">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </PageWrapper>
  );
};

export default SkillBuilder;
