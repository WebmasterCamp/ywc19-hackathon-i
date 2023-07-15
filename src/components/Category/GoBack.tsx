import { Box, Typography } from "@mui";
import Link from "next/link";
import { FC } from "react";

export const GoBack: FC = () => {
    return (
        <Box sx={{ marginTop: 2 }}>
            <Link
                href={"/browse"}
                style={{ textDecoration: "none", color: "black" }}
            >
                <Typography>Go back</Typography>
            </Link>
        </Box>
    );
};
