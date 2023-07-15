'use client';

import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { Supply } from '../types';

interface IAppContext {
    supply: Supply;
    setSupply: Dispatch<SetStateAction<Supply>>;
}

export const AppContext = createContext<IAppContext>({
    supply: null,
    setSupply: () => {},
});

export function useAppContext() {
    return useContext(AppContext);
}
