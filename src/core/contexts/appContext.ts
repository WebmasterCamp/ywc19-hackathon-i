'use client';

import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { Supply } from '../types';

interface IAppContext {
    supply: Supply[] | null;
    setSupply: Dispatch<SetStateAction<Supply[] | null>>;
}

export const AppContext = createContext<IAppContext>({
    supply: null,
    setSupply: () => {},
});

export function useAppContext() {
    return useContext(AppContext);
}
