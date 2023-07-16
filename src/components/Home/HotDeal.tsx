"use client";
import { FC } from "react";
import { Box, Button, Container } from "../mui";

export const HotDeal: FC = () => {
    return (
        <Container
            maxWidth="md"
            sx={{
                background: "#D9D9D9",
                width: { xs: "90%" },
                height: { xs: "200px", md: "300px" },
                boxSizeing: "border-box",
                display: "flex",
                alignItems: "center",
                gap: "1.75em",
            }}
        >
            <Box
                sx={{
                    width: "40%",
                    height: "60%",
                    background: "#949494",
                }}
            ></Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <h3 id="hot-deal-text">Hot Deal!</h3>
                <p>อีกกี่ ... คน คุณจะได้ในราคา</p>
                <Button variant="contained">สั่งเลย</Button>
            </Box>
        </Container>
    );
};
