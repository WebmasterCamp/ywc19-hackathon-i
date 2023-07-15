'use client';

import { FC, PropsWithChildren, useEffect, useState } from 'react';

import { AppContext } from './appContext';
import { Item } from '../types';
import { initialItems, Shops } from './data';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        setItems(() => initialItems);
    }, []);

    const orderItems = (
        shopId: number,
        ingredientId: number,
        amount: number
    ) => {
        const shop = Shops.find((shop) => shop.id === shopId);
        if (shop) {
            const item = items.find(
                (item) =>
                    item.ingredientId === ingredientId && item.shopId === shopId
            );
            console.log(shopId, ingredientId, amount, item);
            if (item) {
                const finalAmount = Math.max(0, item.amount - amount);
                console.log(`finalAmount: ${finalAmount}`);
                setItems(
                    (prev) => {
                        const finalItems = [
                            ...prev.filter(
                                (item) =>
                                    item.ingredientId !== ingredientId ||
                                    item.shopId !== shopId
                            ),
                            {
                                ...item,
                                amount: finalAmount,
                            },
                        ];
                        console.log(finalItems);
                        return finalItems;
                    }
                    // if (prev) {
                    //     const newSupply = [...prev];
                    //     const newShop = { ...shop };
                    //     const newItem = { ...item };
                    //     newItem.amount = finalAmount;
                    //     console.log(newItem);
                    //     newShop.items = [
                    //         ...shop.items.filter(
                    //             (item) => item.ingredientId !== itemId
                    //         ),
                    //         newItem,
                    //     ];
                    //     console.log(newShop);
                    //     const finalSupply = [
                    //         ...newSupply.filter((s) => s.shopId !== shopId),
                    //         newShop,
                    //     ];
                    //     console.log(finalSupply);
                    //     return finalSupply;
                    // }
                    // return prev;
                );
            }
        }
    };

    return (
        <AppContext.Provider
            value={{
                items,
                setItems,
                orderItems,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
