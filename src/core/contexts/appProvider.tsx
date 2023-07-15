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
                (item) => item.ingredientId === itemId
            );
            if (item) {
                console.log(
                    `order item shopId ${shopId} itemId ${itemId} amount ${amount}`
                );
                const finalAmount = Math.max(0, item.amount - amount);
                console.log(`finalAmount ${finalAmount}`);
                setSupply((prev) => {
                    if (prev) {
                        const newSupply = [...prev];
                        const newShop = { ...shop };
                        const newItem = { ...item };
                        newItem.amount = finalAmount;
                        console.log(newItem);
                        newShop.items = [
                            ...shop.items.filter(
                                (item) => item.ingredientId !== itemId
                            ),
                            newItem,
                        ];
                        console.log(newShop);
                        const finalSupply = [
                            ...newSupply.filter((s) => s.shopId !== shopId),
                            newShop,
                        ];
                        console.log(finalSupply);
                        return finalSupply;
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
