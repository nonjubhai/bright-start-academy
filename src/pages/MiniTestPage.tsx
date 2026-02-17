import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import { getMiniTests } from "@/data/questions";
import { useProgress } from "@/hooks/useProgress";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Trophy } from "lucide-react";

const MiniTestPage = () => {
  const { board, classId, subjectId } = useParams();
  const navigate = useNavigate();
  const classNum = parseInt(classId || "1");
  const tests = getMiniTests(classNum, subjectId || "");
  const { saveTestScore } = useProgress(board || "", classId || "", subjectId || "");

  const [selectedTest, setSelectedTest] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Test selection screen
  if (selectedTest === null) {
    return (
      <PageWrapper>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
          <h1 className="text-2xl font-extrabold text-foreground mb-6">🎯 Mini Tests</h1>
          <div className="space-y-4">
            {tests.map((test, i) => (
              <motion.button
                key={test.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedTest(i)}
                className="w-full text-left p-5 rounded-2xl border-2 border-border bg-card hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-foreground">{test.title}</h3>
                    <p className="text-sm text-muted-foreground">{test.questions.length} questions • Mixed format</p>
                  </div>
                  <ArrowRight size={18} className="text-muted-foreground" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </PageWrapper>
    );
  }

  const test = tests[selectedTest];
  const questions = test.questions;
  const currentQ = questions[questionIndex];

  if (completed) {
    const score = Math.round((correctCount / questions.length) * 100);
    saveTestScore(test.id, score);
    return (
      <PageWrapper>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto text-center">
          <div className="text-6xl mb-4">{score >= 80 ? "🏆" : score >= 50 ? "⭐" : "💪"}</div>
          <h1 className="text-2xl font-extrabold text-foreground mb-2">{test.title}</h1>
          <p className="text-5xl font-black text-primary mb-2">{score}%</p>
          <p className="text-muted-foreground mb-1">{correctCount} out of {questions.length} correct</p>
          <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 mb-6">
            <p className="text-foreground font-semibold">
              {score >= 80 ? "🌟 Outstanding! You really know this topic!" :
               score >= 50 ? "👏 Great job! You're improving!" :
               "📚 Let's practice more! You'll get better!"}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button onClick={() => { setCompleted(false); setQuestionIndex(0); setSelectedAnswer(null); setShowExplanation(false); setCorrectCount(0); }} variant="outline" className="rounded-xl">
              <RotateCcw size={16} /> Try Again
            </Button>
            <Button onClick={() => setSelectedTest(null)} variant="outline" className="rounded-xl">
              Choose Another Test
            </Button>
            <Button onClick={() => navigate(`/${board}/${classId}/subjects/${subjectId}/progress`)} className="rounded-xl">
              <Trophy size={16} /> View Progress
            </Button>
          </div>
        </motion.div>
      </PageWrapper>
    );
  }

  const handleSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === currentQ.correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
    }
  };

  return (
    <PageWrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-extrabold text-foreground">{test.title}</h1>
          <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
            {questionIndex + 1} / {questions.length}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-muted rounded-full mb-6 overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="p-5 rounded-2xl bg-card border border-border mb-4">
          <h2 className="font-bold text-lg text-foreground mb-4">{currentQ.question}</h2>
          <div className="space-y-3">
            {currentQ.options.map((option, i) => {
              let cls = "p-3 rounded-xl border-2 cursor-pointer transition-all text-foreground text-left w-full font-medium ";
              if (showExplanation) {
                if (i === currentQ.correctIndex) cls += "border-accent bg-accent/10";
                else if (i === selectedAnswer) cls += "border-destructive bg-destructive/10";
                else cls += "border-border opacity-50";
              } else {
                cls += "border-border hover:border-primary/30 hover:bg-primary/5";
              }
              return (
                <button key={i} onClick={() => handleSelect(i)} className={cls} disabled={showExplanation}>
                  <span className="mr-2 font-bold text-muted-foreground">{String.fromCharCode(65 + i)}.</span>
                  {option}
                  {showExplanation && i === currentQ.correctIndex && <CheckCircle size={16} className="inline ml-2 text-accent" />}
                  {showExplanation && i === selectedAnswer && i !== currentQ.correctIndex && <XCircle size={16} className="inline ml-2 text-destructive" />}
                </button>
              );
            })}
          </div>
          <AnimatePresence>
            {showExplanation && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm text-foreground">
                  {selectedAnswer === currentQ.correctIndex ? "✅ " : "❌ "}
                  {currentQ.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {showExplanation && (
          <Button onClick={handleNext} className="rounded-xl w-full">
            {questionIndex < questions.length - 1 ? "Next Question" : "See Results 🏆"} <ArrowRight size={16} />
          </Button>
        )}
      </motion.div>
    </PageWrapper>
  );
};

export default MiniTestPage;
