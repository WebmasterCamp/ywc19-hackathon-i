"use client";

import { useAppContext } from "@/core/contexts";
import { Box, Button, LinearProgress, TextField, Typography } from "@mui";
import Image from "next/image";
import { FC, useState } from "react";
import { Ingredients } from "@/core/contexts/data";
import PeopleIcon from "@mui/icons-material/People";
import { ShareDeal } from "./ShareDeal";
import Link from "next/link";

interface OrderItemProps {
    ingredientId: number;
}

export const OrderItem: FC<OrderItemProps> = ({ ingredientId }) => {
    const { items, orderItems } = useAppContext();
    const [amount, setAmount] = useState<number>(0);

    const item = items.filter((i) => i.ingredientId === ingredientId)[0];
    const ingredient = Ingredients.filter((i) => i.id === ingredientId)[0];
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
                src={ingredient.image}
                width={400}
                height={400}
                style={{
                    objectFit: "cover",
                    borderRadius: "10px",
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
                        {item && item.price * 1.25}
                    </Typography>
                    <Typography variant="h5" sx={{ display: "inline" }}>
                        {item && item.price} บาท
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
                        value={(300 - (item ? item.amount : 200)) / 3}
                        sx={{ width: "75%", height: 20, borderRadius: "20px" }}
                    />
                    <Typography sx={{ marginLeft: 2 }}>
                        {300 - (item ? item.amount : 200)}/300{" "}
                        {item && item.unit}
                    </Typography>
                </Box>
                <TextField
                    id="outlined-number"
                    label="Amount"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ marginTop: 2 }}
                    onChange={(event) =>
                        setAmount(parseInt(event.target.value))
                    }
                />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 2,
                    }}
                >
                    <Link href="/order">
                        <Button
                            variant="contained"
                            sx={{ borderRadius: "20px", width: "25%" }}
                            onClick={() => {
                                orderItems(1, ingredientId, amount);
                            }}
                        >
                            สั่งเลย
                        </Button>
                    </Link>
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
