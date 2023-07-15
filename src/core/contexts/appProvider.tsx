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

    const orderItems = () => {};

    return (
        <AppContext.Provider
            value={{
                supply,
                setSupply,
                orderItems,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
