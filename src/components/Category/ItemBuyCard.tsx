"use client";

import { useAppContext } from "@/core/contexts";
import { Box, ToggleButton } from "@mui";
import { FC } from "react";

interface ItemBuyCardProps {
    name: string;
}

export const ItemBuyCard: FC<ItemBuyCardProps> = ({ name }) => {
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
        </Box>
    );
};
