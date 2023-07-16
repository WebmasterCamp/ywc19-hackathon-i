import React from 'react';
import { Box, Container, Typography } from '../mui';
import { Grid } from '@mui/material';

const Partner = () => {
    const style = {
        objectFit: 'cover',
        width: '80%',
    };
    return (
        <Container
            maxWidth="lg"
            sx={{
                paddingTop: 15,
                paddingBottom: 15,
            }}
        >
            <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems="center"
                sx={{
                    borderBottom: '1px solid grey',
                    paddingBottom: 3,
                }}
            >
                <Grid item>
                    <Box component="img" sx={style} src="./s_konkhean.webp" />
                </Grid>

                <Grid item>
                    <Box component="img" sx={style} src="./tarad_thai.webp" />
                </Grid>
                <Grid item>
                    <Box component="img" sx={style} src="./btg.webp" />
                </Grid>
                <Grid item>
                    <Box component="img" sx={style} src="./diocome.webp" />
                </Grid>

                <Grid item>
                    <Box component="img" sx={style} src="./ichitan.webp" />
                </Grid>

                <Grid item>
                    <Box component="img" sx={style} src="./talad_four.webp" />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems="center"
                marginTop={2}
            >
                <Grid item>
                    <Box component="img" sx={style} src="./sdg_logo.webp"/>
                </Grid>
                <Grid item>
                    <Box component="img" sx={style} src="./sdg_8.webp"/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Partner;
