'use client';
import { FC } from 'react';
import { Box, Button, Container } from '../mui';
import { LinearProgress, Typography } from '@mui/material';
import Link from 'next/link';

function LinearProgressWithLabel(props: {} & { value: number }) {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1, mb: 2 }}>
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


export const HotDeal: FC = () => {
    return (
        <Container
            maxWidth="md"
            sx={{
                background: '#D9D9D9',
                width: { xs: '90%', md: '50%' },
                height: { xs: 250, md: 300 },
                boxSizeing: 'border-box',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
            }}
        >
            <Box
                component="img"
                src="./beef.png"
                sx={{
                    width: "40%",
                    height: "60%",
                }}
            ></Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography id="hot-deal-text" fontSize={20} fontWeight={600}>
                    Hot Deal!
                </Typography>
                <Typography>อีกกี่ ... คน คุณจะได้ในราคา</Typography>
                <LinearProgressWithLabel value={60} />
                <Box
                    sx={{
                        display: "flex",
                        gap: 1,
                    }}
                >
                    <Button
                        variant="outlined"
                        sx={{
                            fontSize: { sm: 10, lg: 16 },
                            background: "white",
                            borderRadius: 3,
                        }}
                    >
                        ดูรายละเอียด
                    </Button>
                    <Link href={"./browse"}>
                        <Button
                            variant="contained"
                            sx={{
                                fontSize: { sm: 10, lg: 16 },
                                color: "white",
                                borderRadius: 3,
                            }}
                        >
                            สั่งเลย
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};
