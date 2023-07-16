import { FC } from 'react';
import { Box, Container, Typography } from '../mui';
import { Grid } from '@mui/material';


const Circle: FC = () => (
    <Box
        width={50}
        height={50}
        sx={{
            borderRadius: '50%',
            background: '#D9D9D9',
        }}
    ></Box>
);

const CategoryIcon: FC = ({ name }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
    >
        <Circle />
        <Typography sx={{ fontSize: 12 }}>{name ?? 'Category'}</Typography>
    </Box>
);

export const AllCategory = () => {
    return (
        <Container
            maxWidth="md"
            sx={{
                mt: 4,
            }}
        >
            <Grid
                container
                rowSpacing={1}
                sx={{
                    justifyContent: 'center',
                }}
                gap={{ sm: 1.5, md: 5, lg: 7 }}
            >
                <CategoryIcon />
                <CategoryIcon />
                <CategoryIcon />
                <CategoryIcon />
                <CategoryIcon />
                <CategoryIcon />
            </Grid>
            <Grid
                container
                rowSpacing={1}
                gap={{ sm: 1.5, md: 5, lg: 7 }}
                sx={{
                    mt: 2,
                    justifyContent: 'center',
                }}
            >
                <CategoryIcon />
                <CategoryIcon />
                <CategoryIcon />
                <CategoryIcon />
                <CategoryIcon />
                <CategoryIcon />
            </Grid>
        </Container>
    );
};
