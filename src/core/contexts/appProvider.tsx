'use client';

import { FC, PropsWithChildren, useEffect, useState } from 'react';

import { AppContext } from './appContext';
import { Supply } from '../types';
import { initialSupply } from './data';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    const [supply, setSupply] = useState<Supply[] | null>(null);

    useEffect(() => {
        setSupply(() => initialSupply);
    }, []);

    return (
        <AppContext.Provider
            value={{
                supply,
                setSupply,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
