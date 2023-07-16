import { Box, Button, ToggleButton, Typography } from "@mui";
import { FC } from "react";

export const Total: FC = () => {
    return (
        <Box
            sx={{
                width: "95%",
                backgroundColor: "lightgreen",
                marginTop: 4,
                borderTop: "1px solid black",
            }}
        >
            <Typography variant="h6" sx={{ marginTop: 4 }}>
                Total
            </Typography>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "end" }}>
                {/* <ToggleButton
                    value="web"
                    sx={{
                        height: 4,
                        width: { sx: "120px", lg: "120px" },
                        borderRadius: 0,
                        border: "none",
                        backgroundColor: "gray",
                    }}
                >
                    BUY
                </ToggleButton> */}
                <Button variant="contained">Buy</Button>
            </Box>
        </Box>
    );
};
