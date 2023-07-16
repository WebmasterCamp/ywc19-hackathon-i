"use client";

import { useAppContext } from "@/core/contexts";
import { Box, ToggleButton } from "@mui";
import Link from "next/link";
import { FC } from "react";

interface ItemBuyCardProps {
    name: string;
    ingredientId: number;
}

export const ItemBuyCard: FC<ItemBuyCardProps> = ({ name, ingredientId }) => {
    const { searchText } = useAppContext();

    return (
        <Box
            sx={{
                display: name.includes(searchText.toLowerCase())
                    ? "block"
                    : "none",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "20vh",
                    backgroundColor: "lightgray",
                }}
            >
                {name}
            </Box>
            <Link href={`/order/1/${ingredientId}`}>
                <ToggleButton
                    value="web"
                    sx={{
                        height: 4,
                        width: "100%",
                        borderRadius: 0,
                        border: "none",
                        backgroundColor: "gray",
                    }}
                >
                    BUY
                </ToggleButton>
            </Link>
        </Box>
    );
};
