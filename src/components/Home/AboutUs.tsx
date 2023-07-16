import { FC } from 'react';
import { Box, Container } from '../mui';

export const AboutUs = () => {
    return (
        <Box width="100vw" sx={{
            mt:4
        }}>
            <Box
                component="img"
                alt="background"
                src={'./Group-23.webp'}
                width="100%"
                sx={{
                    imageFit:"cover",
                }}
            ></Box>
        </Box>
    );
};
