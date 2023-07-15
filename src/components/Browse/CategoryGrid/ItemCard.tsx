import { Box } from "@mui";
import { FC } from "react";

interface ItemCardProps {
    name: string;
}

export const ItemCard: FC<ItemCardProps> = ({ name }) => {
    return (
        <Box
            sx={{
                width: { xs: "21%", md: "16%" },
                height: "20vh",
                backgroundColor: "gray",
            }}
        >
            {name}
        </Box>
    );
};
