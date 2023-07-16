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
                }}
            >
                {/* <Story image="apple.jpg" />
                <Story />
                <Story />
                <Story />
                <Story />
                <Story /> */}
            </Box>
            <Box
                sx={{
                    width: "95%",
                    display: { sx: "none", lg: "flex" },
                    // justifyContent: "",
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
