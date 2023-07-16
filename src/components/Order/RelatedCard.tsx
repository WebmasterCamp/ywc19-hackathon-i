import { Ingredient } from "@/core/types";
import { Box, Typography } from "@mui";
import Image from "next/image";
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
            <Link href={`/order/1/${ingredient.id}`}>
                <Typography variant="h6">{ingredient.name}</Typography>
                <Image
                    alt="as"
                    src={ingredient.image ?? ""}
                    width={200}
                    height={100}
                    style={{
                        objectFit: "cover",
                        borderRadius: "10px",
                    }}
                />
            </Link>
            {/* <Link href={`/order/1/${ingredient.id}`}>{ingredient.name}</Link> */}
        </Box>
    );
};
