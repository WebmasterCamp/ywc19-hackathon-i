"use client";

import { Box, Typography } from "@mui";
import { FC } from "react";
import { ItemCard } from "./ItemCard";
import Link from "next/link";
import { Ingredients } from "@/core/contexts/data";

interface CategoryRowProps {
    category: string;
}

export const CategroyRow: FC<CategoryRowProps> = ({ category }) => {
    return (
        <Box sx={{ width: "100%", marginTop: 3 }}>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "red",
                }}
            >
                <Typography variant="h5">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </Typography>
                <Link
                    href={`/browse/${category}`}
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <Typography variant="h5">View all</Typography>
                </Link>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    display: { xs: "flex", md: "none" },
                    columnGap: 2,
                    marginTop: 1,
                    backgroundColor: "pink",
                }}
            >
                {Ingredients.filter((i) => i.category === category)
                    .map((i) => <ItemCard key={i.name} name={i.name} />)
                    .slice(0, 4)}
            </Box>
            <Box
                sx={{
                    width: "100%",
                    display: { xs: "none", md: "flex" },
                    columnGap: 2,
                    marginTop: 1,
                    backgroundColor: "pink",
                }}
            >
                {Ingredients.filter((i) => i.category === category).map((i) => (
                    <ItemCard key={i.name} name={i.name} />
                ))}
            </Box>
        </Box>
    );
};
