import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import { getPractice } from "@/data/questions";
import { useProgress } from "@/hooks/useProgress";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowRight, RotateCcw } from "lucide-react";

const PracticePage = () => {
  const { board, classId, subjectId } = useParams();
  const navigate = useNavigate();
  const classNum = parseInt(classId || "1");
  const practiceSets = getPractice(classNum, subjectId || "");
  const { savePracticeScore } = useProgress(board || "", classId || "", subjectId || "");

  const [currentSet] = useState(0);
  const [section, setSection] = useState<"mcq" | "fill" | "match" | "short">("mcq");
  const [mcqIndex, setMcqIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [fillAnswers, setFillAnswers] = useState<string[]>([]);
  const [fillChecked, setFillChecked] = useState(false);
  const [completed, setCompleted] = useState(false);

  const practice = practiceSets[currentSet];
  if (!practice) {
    return (
      <PageWrapper>
        <p className="text-center text-muted-foreground">No practice questions available yet.</p>
        <Button variant="outline" onClick={() => navigate(-1)} className="mt-4 mx-auto block rounded-xl">
          Go Back
        </Button>
      </PageWrapper>
    );
  }

  const mcqs = practice.mcqs;
  const currentMcq = mcqs[mcqIndex];

  const handleMcqSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    setTotalAnswered((t) => t + 1);
    if (index === currentMcq.correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  };

  const handleNextMcq = () => {
    if (mcqIndex < mcqs.length - 1) {
      setMcqIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setSection("fill");
    }
  };

  const handleCheckFill = () => {
    setFillChecked(true);
    const correct = practice.fillBlanks.filter(
      (q, i) => (fillAnswers[i] || "").toLowerCase().trim() === q.answer.toLowerCase().trim()
    ).length;
    setCorrectCount((c) => c + correct);
    setTotalAnswered((t) => t + practice.fillBlanks.length);
  };

  const handleFinishPractice = () => {
    const totalQuestions = mcqs.length + practice.fillBlanks.length;
    const score = Math.round((correctCount / totalQuestions) * 100);
    savePracticeScore(practice.lessonId, score);
    setCompleted(true);
  };

  if (completed) {
    const totalQuestions = mcqs.length + practice.fillBlanks.length;
    const score = Math.round((correctCount / totalQuestions) * 100);
    return (
      <PageWrapper>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto text-center">
          <div className="text-6xl mb-4">{score >= 70 ? "🎉" : score >= 40 ? "💪" : "📚"}</div>
          <h1 className="text-2xl font-extrabold text-foreground mb-2">Practice Complete!</h1>
          <p className="text-4xl font-black text-primary mb-2">{score}%</p>
          <p className="text-muted-foreground mb-1">{correctCount} out of {totalQuestions} correct</p>
          <p className="text-foreground font-semibold mb-6">
            {score >= 70 ? "Amazing work! You're doing great! 🌟" : score >= 40 ? "Good effort! Keep practicing! 💪" : "Don't worry! Practice makes perfect! 📖"}
          </p>
          <div className="flex flex-col gap-3">
            <Button onClick={() => { setCompleted(false); setSection("mcq"); setMcqIndex(0); setSelectedAnswer(null); setShowExplanation(false); setCorrectCount(0); setTotalAnswered(0); setFillAnswers([]); setFillChecked(false); }} variant="outline" className="rounded-xl">
              <RotateCcw size={16} /> Try Again
            </Button>
            <Button onClick={() => navigate(`/${board}/${classId}/subjects/${subjectId}/tests`)} className="rounded-xl">
              Take a Mini Test 🎯
            </Button>
          </div>
        </motion.div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
        <h1 className="text-2xl font-extrabold text-foreground mb-6">📝 Practice Questions</h1>

        {section === "mcq" && currentMcq && (
          <div>
            <p className="text-xs text-muted-foreground mb-2">Question {mcqIndex + 1} of {mcqs.length} (Multiple Choice)</p>
            <div className="p-5 rounded-2xl bg-card border border-border mb-4">
              <h2 className="font-bold text-lg text-foreground mb-4">{currentMcq.question}</h2>
              <div className="space-y-3">
                {currentMcq.options.map((option, i) => {
                  let cls = "p-3 rounded-xl border-2 cursor-pointer transition-all text-foreground text-left w-full font-medium ";
                  if (showExplanation) {
                    if (i === currentMcq.correctIndex) cls += "border-accent bg-accent/10";
                    else if (i === selectedAnswer) cls += "border-destructive bg-destructive/10";
                    else cls += "border-border opacity-50";
                  } else {
                    cls += selectedAnswer === i ? "border-primary bg-primary/10" : "border-border hover:border-primary/30 hover:bg-primary/5";
                  }
                  return (
                    <button key={i} onClick={() => handleMcqSelect(i)} className={cls} disabled={showExplanation}>
                      <span className="mr-2 font-bold text-muted-foreground">{String.fromCharCode(65 + i)}.</span>
                      {option}
                      {showExplanation && i === currentMcq.correctIndex && <CheckCircle size={16} className="inline ml-2 text-accent" />}
                      {showExplanation && i === selectedAnswer && i !== currentMcq.correctIndex && <XCircle size={16} className="inline ml-2 text-destructive" />}
                    </button>
                  );
                })}
              </div>
              <AnimatePresence>
                {showExplanation && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-sm text-foreground">
                      {selectedAnswer === currentMcq.correctIndex ? "✅ " : "❌ "}
                      {currentMcq.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {showExplanation && (
              <Button onClick={handleNextMcq} className="rounded-xl">
                {mcqIndex < mcqs.length - 1 ? "Next Question" : "Fill in the Blanks"} <ArrowRight size={16} />
              </Button>
            )}
          </div>
        )}

        {section === "fill" && (
          <div>
            <p className="text-xs text-muted-foreground mb-2">Fill in the Blanks</p>
            <div className="space-y-4">
              {practice.fillBlanks.map((q, i) => {
                const isCorrect = fillChecked && (fillAnswers[i] || "").toLowerCase().trim() === q.answer.toLowerCase().trim();
                const isWrong = fillChecked && !isCorrect;
                return (
                  <div key={i} className={`p-4 rounded-2xl border-2 ${fillChecked ? (isCorrect ? "border-accent bg-accent/5" : "border-destructive bg-destructive/5") : "border-border bg-card"}`}>
                    <p className="text-foreground font-medium mb-2">{q.sentence}</p>
                    {q.hint && !fillChecked && <p className="text-xs text-muted-foreground mb-2">💡 Hint: {q.hint}</p>}
                    <input
                      type="text"
                      value={fillAnswers[i] || ""}
                      onChange={(e) => {
                        const newAnswers = [...fillAnswers];
                        newAnswers[i] = e.target.value;
                        setFillAnswers(newAnswers);
                      }}
                      disabled={fillChecked}
                      className="w-full p-2 rounded-xl border border-border bg-background text-foreground text-center font-bold disabled:opacity-70"
                      placeholder="Type your answer..."
                    />
                    {fillChecked && isWrong && (
                      <p className="text-xs text-destructive mt-1">Answer: <strong>{q.answer}</strong></p>
                    )}
                    {fillChecked && isCorrect && (
                      <p className="text-xs text-accent mt-1 flex items-center gap-1"><CheckCircle size={12} /> Correct!</p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-4">
              {!fillChecked ? (
                <Button onClick={handleCheckFill} className="rounded-xl w-full">Check Answers ✅</Button>
              ) : (
                <Button onClick={handleFinishPractice} className="rounded-xl w-full">See Results 📊</Button>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </PageWrapper>
  );
};

export default PracticePage;
