'use client';
import { Typography } from '@mui';
import Grid from '@mui/material/Grid';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Shops } from '../../core/contexts/data';
import { FC } from 'react';

export const ShopHeader: FC = () => {
    return (
        <>
            <Typography variant="h3">{Shops[1].shopName}</Typography>
            <Typography>Category: {Shops[1].cat}</Typography>
            <Grid container rowSpacing={1}>
                <Typography>Rating:</Typography>
                {/* {[...new Array(Shops[1].rating)].map((item, index) => (
                    <StarRateIcon key={index} />
                ))}
                <StarHalfIcon /> */}
            </Grid>
        </>
    );
};
