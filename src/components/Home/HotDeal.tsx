<<<<<<< HEAD
'use client';
import { FC } from 'react';
import { Box, Button, Container } from '../mui';
import { LinearProgress, Typography } from '@mui/material';

function LinearProgressWithLabel(props: {} & { value: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1, mb: 2 }}>
                <LinearProgress
                    variant="determinate"
                    {...props}
                    sx={{
                        height: 10,
                    }}
                />
            </Box>
        </Box>
    );
}

=======
"use client";
import { FC } from "react";
import { Box, Button, Container } from "../mui";
>>>>>>> a9677f3995be44d3d3897c32a9f8578432a8eb2d

export const HotDeal: FC = () => {
    return (
        <Container
            maxWidth="md"
            sx={{
<<<<<<< HEAD
                background: '#D9D9D9',
                width: { xs: '90%', md: '50%' },
                height: { xs: 250, md: 300 },
                boxSizeing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
=======
                background: "#D9D9D9",
                width: { xs: "90%" },
                height: { xs: "200px", md: "300px" },
                boxSizeing: "border-box",
                display: "flex",
                alignItems: "center",
                gap: "1.75em",
>>>>>>> a9677f3995be44d3d3897c32a9f8578432a8eb2d
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
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography id="hot-deal-text" fontSize={20} fontWeight={600}>Hot Deal!</Typography>
                <Typography>อีกกี่ ... คน คุณจะได้ในราคา</Typography>
                <LinearProgressWithLabel value={60} />
                <Box
                    sx={{
                        display: 'flex',
                        gap: 1,
                    }}
                >
                    <Button variant="outlined" fontSize={{sm: 10,lg: 16}} sx={{
                        background:"white",
                        borderRadius:3,
                    }}>ดูรายละเอียด</Button>
                    <Button variant="contained" fontSize={{sm: 10,lg: 16}} sx={{
                        color:"white",
                        borderRadius:3,
                    }}>สั่งเลย</Button>
                </Box>
            </Box>
        </Container>
    );
};
