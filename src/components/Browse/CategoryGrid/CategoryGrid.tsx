import { Box } from "@mui";
import { FC } from "react";
import { CategroyRow } from "./CategoryRow";
import { Category } from "@/core/types";

export const CategroyGrid: FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "95%",
                justifyContent: "space-between",
                marginTop: 4,
            }}
        >
            <CategroyRow category={Category.Meat} />
            <CategroyRow category={Category.Vegatables} />
            <CategroyRow category={Category.Fruits} />
            <CategroyRow category={Category.Grains} />
            <CategroyRow category={Category.Dairy} />
            <CategroyRow category={Category.Spices} />
        </Box>
    );
};
