import { useState, useEffect, useCallback } from "react";

export type ProgressData = {
  completedLessons: string[];
  practiceScores: Record<string, number>; // lessonId -> best score percentage
  testScores: Record<string, number>; // testId -> score percentage
  activitiesCompleted: string[];
};

const getStorageKey = (board: string, classId: string, subjectId: string) =>
  `fp-progress-${board}-${classId}-${subjectId}`;

const defaultProgress: ProgressData = {
  completedLessons: [],
  practiceScores: {},
  testScores: {},
  activitiesCompleted: [],
};

export const useProgress = (board: string, classId: string, subjectId: string) => {
  const key = getStorageKey(board, classId, subjectId);

  const [progress, setProgress] = useState<ProgressData>(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(progress));
  }, [key, progress]);

  const completeLesson = useCallback((lessonId: string) => {
    setProgress((p) => ({
      ...p,
      completedLessons: p.completedLessons.includes(lessonId)
        ? p.completedLessons
        : [...p.completedLessons, lessonId],
    }));
  }, []);

  const savePracticeScore = useCallback((lessonId: string, score: number) => {
    setProgress((p) => ({
      ...p,
      practiceScores: {
        ...p.practiceScores,
        [lessonId]: Math.max(p.practiceScores[lessonId] || 0, score),
      },
    }));
  }, []);

  const saveTestScore = useCallback((testId: string, score: number) => {
    setProgress((p) => ({
      ...p,
      testScores: {
        ...p.testScores,
        [testId]: Math.max(p.testScores[testId] || 0, score),
      },
    }));
  }, []);

  const completeActivity = useCallback((activityId: string) => {
    setProgress((p) => ({
      ...p,
      activitiesCompleted: p.activitiesCompleted.includes(activityId)
        ? p.activitiesCompleted
        : [...p.activitiesCompleted, activityId],
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
  }, []);

  return { progress, completeLesson, savePracticeScore, saveTestScore, completeActivity, resetProgress };
};
