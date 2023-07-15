'use client';

import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { Marker, Shop } from '../types';

interface IAppContext {
    shops: Shop[] | null;
    setShops: Dispatch<SetStateAction<Shop[] | null>>;
    markers: Marker[] | null;
    setMarkers: Dispatch<SetStateAction<Marker[] | null>>;
}

export const AppContext = createContext<IAppContext>({
    shops: null,
    setShops: () => {},
    markers: null,
    setMarkers: () => {},
});

export function useAppContext() {
    return useContext(AppContext);
}
