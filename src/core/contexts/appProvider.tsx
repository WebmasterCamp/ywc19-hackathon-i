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

    const orderItems = (shopId: number, itemId: number, amount: number) => {
        const shop = supply?.find((shop) => shop.shopId === shopId);
        if (shop) {
            const item = shop.items.find(
                (item) => item.ingredient.id === itemId
            );
            if (item) {
                const finalAmount = Math.max(0, item.amount - amount);
                setSupply((prev) => {
                    if (prev) {
                        const newSupply = [...prev];
                        const newShop = { ...shop };
                        const newItem = { ...item };
                        newItem.amount = finalAmount;
                        newShop.items = [
                            ...shop.items.filter(
                                (item) => item.ingredient.id !== itemId
                            ),
                            newItem,
                        ];
                        newSupply[shopId] = newShop;
                        return newSupply;
                    }
                    return prev;
                });
            }
        }
    };

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
