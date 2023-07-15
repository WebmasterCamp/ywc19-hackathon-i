'use client';
import { FC } from 'react';
import { Container, Typography } from '../mui';
import { AppBar, Box } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export const Header: FC = () => {
    return (
        <>
            <AppBar
                position="static"
                sx={{
                    background: '#FFFFFF',
                    color: 'black',
                    boxShadow: 'none',
                    padding:'0.5em'
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant="h5">Logo</Typography>
                    <Box sx={{ display: 'flex' , alignItems: 'center', gap: "10px"}}>
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
