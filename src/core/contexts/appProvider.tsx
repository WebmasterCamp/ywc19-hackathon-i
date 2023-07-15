"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";

import { AppContext } from "./appContext";
import { Item } from "../types";
import { initialItems, Shops } from "./data";

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
    const [items, setItems] = useState<Item[]>([]);
    const [searchText, setSearchText] = useState<string>("");

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
                setItems((prev) => {
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
                });
            }
        }
    };

    return (
        <AppContext.Provider
            value={{
                items,
                setItems,
                orderItems,
                searchText,
                setSearchText,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
