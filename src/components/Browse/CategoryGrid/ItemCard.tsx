import { useAppContext } from "@/core/contexts";
import { Box } from "@mui";
import { FC } from "react";

interface ItemCardProps {
    name: string;
}

export const ItemCard: FC<ItemCardProps> = ({ name }) => {
    const { searchText } = useAppContext();

    return (
        <Box
            sx={{
                display: name.includes(searchText.toLowerCase())
                    ? "block"
                    : "none",
                width: { xs: "21%", md: "16%" },
                height: "20vh",
                backgroundColor: "gray",
            }}
        >
            {name}
        </Box>
    );
};
