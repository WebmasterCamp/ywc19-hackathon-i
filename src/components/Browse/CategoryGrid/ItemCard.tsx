import { useAppContext } from "@/core/contexts";
import { Ingredients } from "@/core/contexts/data";
import { Ingredient, Item } from "@/core/types";
import { Box, Typography } from "@mui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ItemCardProps {
    ingre: Ingredient;
}

export const ItemCard: FC<ItemCardProps> = ({ ingre }) => {
    const { searchText } = useAppContext();
    // const ingre = Ingredients.find((i) => i.id === (item && item.ingredientId));
    return (
        <Box
            sx={{
                display:
                    ingre && ingre.name.includes(searchText.toLowerCase())
                        ? "block"
                        : "none",
                width: { xs: "21%", md: "16%" },
                height: "20vh",
                backgroundColor: "gray",
            }}
        >
            <Link href={`/order/1/${ingre && ingre.id}`}>
                <Typography variant="h6">{ingre && ingre.name}</Typography>
                <Image
                    alt="as"
                    src={(ingre && ingre.image) ?? ""}
                    width={200}
                    height={100}
                    style={{
                        objectFit: "cover",
                        borderRadius: "10px",
                    }}
                />
            </Link>
        </Box>
    );
};
