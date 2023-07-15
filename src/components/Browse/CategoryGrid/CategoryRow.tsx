import { Box, Typography } from '@mui';
import { FC } from 'react';
import { ItemCard } from './ItemCard';

export const CategroyRow: FC = () => {
    return (
        <Box sx={{ width: '100%', marginTop: 3 }}>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: 'red',
                }}
            >
                <Typography variant="h5">Category</Typography>
                <Typography variant="h5">View all</Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 1,
                    backgroundColor: 'pink',
                }}
            >
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </Box>
        </Box>
    );
};
