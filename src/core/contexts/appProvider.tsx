"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";

import { AppContext, Cards } from "./appContext";
import { initialCards } from "./initialCards";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cards, setCards] = useState<Cards>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState<number | null>(null);

  useEffect(() => {
    setCards(() => initialCards);
  }, []);

  // useEffect(() => {
  //   if (cards && currentCardIndex) setCurrentCardIndex((currentCardIndex + 1) % cards?.length);
  // }, [cards]);

  const resetCards = () => {
    setCards(() => initialCards);
    setCurrentCardIndex(() => 0);
  };

  return (
    <AppContext.Provider
      value={{
        cards,
        setCards,
        currentCardIndex,
        setCurrentCardIndex,
        resetCards,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
