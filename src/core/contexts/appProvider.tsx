'use client';

import { FC, PropsWithChildren, useEffect, useState } from 'react';

import { AppContext } from './appContext';
import { Marker, Shop } from '../types';
import { initialMarkers, initialShops } from './data';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    const [shops, setShops] = useState<Shop[] | null>(null);
    const [markers, setMarkers] = useState<Marker[] | null>(null);

    useEffect(() => {
        setShops(() => initialShops);
        setMarkers(() => initialMarkers);
    }, []);

    return (
        <AppContext.Provider
            value={{
                shops,
                setShops,
                markers,
                setMarkers,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
