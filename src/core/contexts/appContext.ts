'use client';

import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { Supply } from '../types';

interface IAppContext {
    supply: Supply[] | null;
    setSupply: Dispatch<SetStateAction<Supply[] | null>>;
    orderItems: (shopId: number, itemId: number, amount: number) => void;
}

export const AppContext = createContext<IAppContext>({
    supply: null,
    setSupply: () => {},
    orderItems: () => {},
});

export function useAppContext() {
    return useContext(AppContext);
}
