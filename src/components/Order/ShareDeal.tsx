import { Box, Typography } from "@mui";
import { FC } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { line, link } from "../../../public/images";
import Image from "next/image";

export const ShareDeal: FC = () => {
    return (
        <>
            <Typography variant="h6" sx={{ marginTop: 2 }}>
                แชร์ดีลนี้เพื่อราคาที่ดีที่สุด
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    // gap: 2,
                }}
            >
                <FacebookIcon sx={{ marginRight: 1, color: "#1877F2" }} />
                <TwitterIcon sx={{ color: "#08a0e9" }} />
                <Image alt="line" src={line} height={22} />
                <Image alt="link" src={link} height={20} />
            </Box>
        </>
    );
};
