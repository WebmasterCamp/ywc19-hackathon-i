'use client';
import { FC } from 'react';
import { Container, Typography } from '../mui';
import { AppBar, Box } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Link from 'next/link';

export const Header: FC = () => {
    return (
        <>
            <AppBar
                position="static"
                sx={{
                    background: '#FFFFFF',
                    color: '#FF7009',
                    boxShadow: 'none',
                    padding: '0.5em',
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Link href="/">
                        <Box component="img" src="./logo-orange.png" />
                    </Link>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <ShoppingBasketIcon
                            sx={{
                                color: '#D9D9D9',
                            }}
                        />
                        <Box
                            sx={{
                                width: '30px',
                                height: '30px',
                                background: '#D9D9D9',
                                borderRadius: '50%',
                            }}
                        ></Box>
                    </Box>
                </Container>
            </AppBar>
        </>
    );
};
