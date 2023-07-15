import { Box, Typography } from "@mui";
import { FC } from "react";
import { ItemCard } from "./ItemCard";
import Link from "next/link";

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
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 1,
                    backgroundColor: "pink",
                }}
            >
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </Box>
        </Box>
    );
};
