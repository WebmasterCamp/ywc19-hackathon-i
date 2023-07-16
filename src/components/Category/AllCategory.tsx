import { FC } from 'react';
import { Box, Container } from '../mui';
import { Grid } from '@mui/material';
import { spacing } from '@mui/system';

const Circle: FC = () => (
    <Box
        sx={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#D9D9D9',
        }}
    ></Box>
);

export const AllCategory = () => {
    return (
        <Container
            maxWidth="md"
            sx={{
                mt: 4,
            }}
        >
            <Grid container rowSpacing={1} gap={4}>
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </Grid>
            <Grid
                container
                rowSpacing={1}
                gap={4}
                sx={{
                    mt: 2,
                }}
            >
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </Grid>
        </Container>
    );
};
