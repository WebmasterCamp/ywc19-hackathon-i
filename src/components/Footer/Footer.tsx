'use client';
import { FC } from 'react';
import { Box, Container, Typography } from '../mui';
import { Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer: FC = () => {
    return (
        <Box className="footer" padding={10}>
                <Grid container display="flex" alignItems="center" justifyContent="center" rowSpacing={4}>
                    <Grid item xs={12} md={3} display="flex" direction="column" >
                        <Box component="img" src="./logo.png" width="200px"/>
                        <Typography variant="subtitle1">ที่ตั้ง</Typography>
                        <Typography variant="subtitle1">
                            sharekan@gmail.com
                        </Typography>
                        <Typography variant="subtitle1">00-000-0000</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} display="flex" direction="column">
                        <Typography variant="h6">Support</Typography>
                        <Typography variant="subtitle1">นโยบาย</Typography>
                        <Typography variant="subtitle1">นโยบาย</Typography>
                        <Typography variant="subtitle1">นโยบาย</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} display="flex" direction="column">
                        <Typography variant="h6">FAQ</Typography>
                        <Typography variant="subtitle1">คำถาม</Typography>
                        <Typography variant="subtitle1">คำถาม</Typography>
                        <Typography variant="subtitle1">คำถาม</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} display="flex" direction="column">
                        <Typography variant="h6">Follow Us</Typography>
                        <FacebookIcon />
                        <YouTubeIcon />
                    </Grid>
                </Grid>
        </Box>
    );
};
