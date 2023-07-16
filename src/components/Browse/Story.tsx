import { Box } from "@mui";
import { FC } from "react";

export const Story: FC = () => {
    return (
        <Box
            sx={{
                borderRadius: "100%",
                width: { sx: "40px", lg: "60px" },
                height: { sx: "40px", lg: "60px" },
                backgroundColor: "gray",
            }}
        ></Box>
    );
};
