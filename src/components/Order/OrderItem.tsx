"use client";

import { useAppContext } from "@/core/contexts";
import { Box, Button, LinearProgress, Typography } from "@mui";
import Image from "next/image";
import { FC } from "react";
import { Ingredients } from "@/core/contexts/data";
import PeopleIcon from "@mui/icons-material/People";
import { ShareDeal } from "./ShareDeal";

interface OrderItemProps {
    ingredientId: number;
}

export const OrderItem: FC<OrderItemProps> = ({ ingredientId }) => {
    const { items } = useAppContext();
    const item = items.filter((i) => i.ingredientId === ingredientId)[0];
    const ingredient = Ingredients.filter((i) => i.id === ingredientId)[0];
    console.log(ingredientId);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
            }}
        >
            <Image
                alt="img"
                // src=""
                src={ingredient.image}
                width={200}
                height={400}
                style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                    // minHeight: "100%",
                    // minWidth: "100%",
                }}
            />
            <Box
                sx={{
                    border: "2px solid gray",
                    padding: 2,
                    borderRadius: "10px",
                    width: { xs: "80%", md: "50%" },
                    height: { xs: 400, md: 400 },
                    boxSizing: "border-box",
                }}
            >
                <Typography variant="h5">{ingredient.name}</Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    eos!
                </Typography>
                <Box>
                    <Typography
                        variant="h6"
                        sx={{
                            display: "inline",
                            marginRight: 2,
                            textDecoration: "line-through",
                        }}
                    >
                        Quantity
                    </Typography>
                    <Typography variant="h5" sx={{ display: "inline" }}>
                        Quantity
                    </Typography>
                </Box>
                <Typography variant="h5">Time left</Typography>
                <Typography variant="h5">0 d. 3 h. 45m. 6s. </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <LinearProgress
                        variant="determinate"
                        value={75}
                        sx={{ width: "75%", height: 20, borderRadius: "20px" }}
                    />
                    <Typography sx={{ marginLeft: 2 }}>45/60</Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 2,
                    }}
                >
                    <Button variant="contained" sx={{ borderRadius: "20px" }}>
                        สั่งเลย
                    </Button>
                    <PeopleIcon sx={{ marginLeft: 4 }} />
                    <Typography sx={{ marginLeft: 2 }}>
                        5 คนกำลังรวมพลังเพื่อดีลนี้
                    </Typography>
                </Box>
                <ShareDeal />
            </Box>
        </Box>
    );
};
