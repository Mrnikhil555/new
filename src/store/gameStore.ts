import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  generateQuizQuestions,
  generateWords,
  generateNumberStages,
  generateMemoryStages,
  generateSimonStages,
  generateAdventureStages
} from '../data/gameData';

interface GameStore {
  currentLevel: number;
  highestLevel: number;
  totalScore: number;
  quizQuestions: ReturnType<typeof generateQuizQuestions>;
  words: ReturnType<typeof generateWords>;
  numberStages: ReturnType<typeof generateNumberStages>;
  memoryStages: ReturnType<typeof generateMemoryStages>;
  simonStages: ReturnType<typeof generateSimonStages>;
  adventureStages: ReturnType<typeof generateAdventureStages>;
  incrementLevel: () => void;
  updateScore: (points: number) => void;
  resetProgress: () => void;
}

export const useGameStore = create<GameStore>()(
  persist(
    (set) => ({
      currentLevel: 1,
      highestLevel: 1,
      totalScore: 0,
      quizQuestions: generateQuizQuestions(),
      words: generateWords(),
      numberStages: generateNumberStages(),
      memoryStages: generateMemoryStages(),
      simonStages: generateSimonStages(),
      adventureStages: generateAdventureStages(),
      incrementLevel: () => set((state) => ({
        currentLevel: state.currentLevel + 1,
        highestLevel: Math.max(state.highestLevel, state.currentLevel + 1)
      })),
      updateScore: (points) => set((state) => ({
        totalScore: state.totalScore + points
      })),
      resetProgress: () => set({
        currentLevel: 1,
        highestLevel: 1,
        totalScore: 0
      })
    }),
    {
      name: 'game-storage'
    }
  )
);