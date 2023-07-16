'use client';

import { Typography } from '@mui/material';

export const Slogan = () => {
    return (
        <>
            <Typography
                align="center"
                variant="h4"
                fontWeight={600}
                sx={{ margin: '0.3em 0' }}
            >
                “ SHAREKAN ”
            </Typography>
            <Typography align="center" variant="h5" fontWeight={600} sx={{ margin: '0.3em 0' }}>
                THIS IS WORTH TO SHARE
            </Typography>
        </>
    );
};
