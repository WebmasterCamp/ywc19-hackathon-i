import { Box } from "@mui";
import Image from "next/image";
import { FC } from "react";

export const Story: FC<{ image: string }> = ({ image }) => {
    return (
        <Box
            sx={{
                borderRadius: "100%",
                width: { sx: "40px", lg: "60px" },
                height: { sx: "40px", lg: "60px" },
                backgroundColor: "gray",
            }}
        >
            <Image
                alt="as"
                src={image ?? ""}
                width={200}
                height={100}
                style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                }}
            />
        </Box>
    );
};
