'use client';

import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { Item } from '../types';

interface IAppContext {
    items: Item[];
    setItems: Dispatch<SetStateAction<Item[]>>;
    orderItems: (shopId: number, ingredientId: number, amount: number) => void;
}

export const AppContext = createContext<IAppContext>({
    items: [],
    setItems: () => {},
    orderItems: () => {},
});

export function useAppContext() {
    return useContext(AppContext);
}
