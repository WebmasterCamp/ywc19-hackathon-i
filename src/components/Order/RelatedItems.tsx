import { Ingredients } from "@/core/contexts/data";
import { Box, Typography } from "@mui";
import { FC } from "react";
import { RelatedCard } from "./RelatedCard";
import { GoBack } from "../Category/GoBack";

interface RelatedItemsProps {
    ingredientId: number;
}

export const RelatedItems: FC<RelatedItemsProps> = ({ ingredientId }) => {
    const selected = Ingredients.find((i) => i.id === ingredientId);
    const relatedItems = Ingredients.filter(
        (i) => i.category === selected?.category && i.id !== selected?.id
    );
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                paddingX: "5%",
                boxSizing: "border-box",
                flexDirection: "column",
                // gap: 2,
            }}
        >
            <Typography variant="h6" sx={{ marginTop: 2 }}>
                สินค้าเกี่ยวข้อง
            </Typography>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    // gap: 2,
                }}
            >
                {relatedItems.map((i) => (
                    <RelatedCard key={i.id} ingredient={i} />
                ))}
            </Box>
            <GoBack />
        </Box>
    );
};
