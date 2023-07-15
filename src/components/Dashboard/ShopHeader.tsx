"use client";
import { Typography } from "@mui";
import Grid from "@mui/material/Grid";
import { Shops } from "../../core/contexts/data";
import { FC } from "react";

export const ShopHeader: FC = () => {
    return (
        <>
            <Typography variant="h3">{Shops[1].shopName}</Typography>
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
