"use client";

import { Dispatch, SetStateAction, createContext, useContext } from "react";

export type Card = {
  question: string;
  answer: number;
  choices: string[];
  type: "new" | "wrong";
};

export type Cards = Card[] | null;

interface IAppContext {
  cards: Cards;
  setCards: Dispatch<SetStateAction<Cards>>;
  currentCardIndex: number | null;
  setCurrentCardIndex: Dispatch<SetStateAction<number | null>>;
  resetCards: () => void;
}

export const AppContext = createContext<IAppContext>({
  cards: null,
  setCards: () => {},
  currentCardIndex: null,
  setCurrentCardIndex: () => {},
  resetCards: () => {},
});

export function useAppContext() {
  return useContext(AppContext);
}
