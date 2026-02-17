import { useParams } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import { getTopics } from "@/data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const ImportantTopics = () => {
  const { classId } = useParams();
  const classNum = parseInt(classId || "1");
  const topics = getTopics(classNum);

  const subjectNames: Record<string, { name: string; emoji: string }> = {
    math: { name: "Mathematics", emoji: "🔢" },
    english: { name: "English", emoji: "📝" },
    hindi: { name: "Hindi", emoji: "🇮🇳" },
    evs: { name: "EVS", emoji: "🌍" },
  };

  return (
    <PageWrapper>
      <h1 className="text-2xl font-extrabold text-foreground mb-6">🗂 Important Topics</h1>
      <div className="max-w-2xl space-y-6">
        {Object.entries(topics).map(([key, chapters]) => (
          <div key={key}>
            <h2 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
              <span>{subjectNames[key]?.emoji}</span>
              {subjectNames[key]?.name || key}
            </h2>
            <Accordion type="multiple" className="space-y-2">
              {chapters.map((ch, i) => (
                <AccordionItem key={i} value={`${key}-${i}`} className="border rounded-xl px-4 bg-card">
                  <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                    <div className="flex items-center gap-2">
                      {ch.chapter}
                      {ch.important && (
                        <Badge variant="secondary" className="text-xs">Must Know</Badge>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1">
                      {ch.concepts.map((c) => (
                        <li key={c} className="text-muted-foreground flex items-center gap-2">
                          <span className="text-accent">✦</span> {c}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default ImportantTopics;
