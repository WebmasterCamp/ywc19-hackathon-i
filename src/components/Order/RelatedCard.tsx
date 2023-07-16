import { Ingredient } from "@/core/types";
import { Box } from "@mui";
import Link from "next/link";
import { FC } from "react";

interface RelatedCardProps {
    ingredient: Ingredient;
}

export const RelatedCard: FC<RelatedCardProps> = ({ ingredient }) => {
    return (
        <Box
            sx={{
                width: { xs: "21%", md: "16%" },
                height: "20vh",
                backgroundColor: "gray",
            }}
        >
            <Link href={`/order/1/${ingredient.id}`}>{ingredient.name}</Link>
        </Box>
    );
};
