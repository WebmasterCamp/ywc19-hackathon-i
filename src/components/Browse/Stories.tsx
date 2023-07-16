import { Box } from "@mui";
import { FC } from "react";
import { Story } from "./Story";

export const Stories: FC = () => {
    return (
        <>
            <Box
                sx={{
                    width: "95%",
                    display: { sx: "flex", lg: "none" },
                    justifyContent: "space-between",
                    backgroundColor: "pink",
                }}
            >
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
            </Box>
            <Box
                sx={{
                    width: "95%",
                    display: { sx: "none", lg: "flex" },
                    // justifyContent: "",
                    backgroundColor: "pink",
                    gap: 6,
                }}
            >
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
            </Box>
        </>
    );
};
