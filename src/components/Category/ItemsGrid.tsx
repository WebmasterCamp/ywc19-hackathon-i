import { Box, Typography } from "@mui";
import { FC } from "react";
import { ItemBuyCard } from "./ItemBuyCard";

interface ItemsGridProps {
    category: string;
}

export const ItemsGrid: FC<ItemsGridProps> = ({ category }) => {
    return (
        <Box
            sx={{
                width: "95%",
                marginTop: 4,
            }}
        >
            <Typography variant="h5" sx={{ marginBottom: 1 }}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
            </Typography>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto auto",
                    columnGap: 1,
                    rowGap: 1,
                    width: "100%",
                }}
            >
                <ItemBuyCard />
                <ItemBuyCard />
                <ItemBuyCard />
                <ItemBuyCard />
                <ItemBuyCard />
            </Box>
        </Box>
    );
};
