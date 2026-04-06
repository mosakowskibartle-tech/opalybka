import { create } from 'zustand';

interface AppState {
  isMenuOpen: boolean;
  isPopupOpen: boolean;
  isQuizComplete: boolean;
  quizStep: number;
  quizAnswers: Record<string, string>;
  toggleMenu: () => void;
  setPopupOpen: (open: boolean) => void;
  setQuizStep: (step: number) => void;
  setQuizAnswer: (key: string, value: string) => void;
  resetQuiz: () => void;
  setQuizComplete: (complete: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  isMenuOpen: false,
  isPopupOpen: false,
  isQuizComplete: false,
  quizStep: 0,
  quizAnswers: {},
  toggleMenu: () => set((s) => ({ isMenuOpen: !s.isMenuOpen })),
  setPopupOpen: (open) => set({ isPopupOpen: open }),
  setQuizStep: (step) => set({ quizStep: step }),
  setQuizAnswer: (key, value) => set((s) => ({ quizAnswers: { ...s.quizAnswers, [key]: value } })),
  resetQuiz: () => set({ quizStep: 0, quizAnswers: {}, isQuizComplete: false }),
  setQuizComplete: (complete) => set({ isQuizComplete: complete }),
}));
