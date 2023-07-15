import { Box } from '@mui';
import { FC } from 'react';
import { ItemBuyCard } from './ItemBuyCard';

export const ItemsGrid: FC = () => {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'auto auto auto auto',
                columnGap: 1,
                rowGap: 1,
                width: '95%',
                marginTop: 4,
            }}
        >
            <ItemBuyCard />
            <ItemBuyCard />
            <ItemBuyCard />
            <ItemBuyCard />
            <ItemBuyCard />
        </Box>
    );
};
