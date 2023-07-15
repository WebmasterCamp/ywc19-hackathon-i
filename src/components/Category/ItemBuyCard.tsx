import { Box, ToggleButton } from '@mui';
import { FC } from 'react';

export const ItemBuyCard: FC = () => {
    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '20vh',
                    backgroundColor: 'lightgray',
                }}
            >
                item hguy
            </Box>
            <ToggleButton
                value="web"
                sx={{
                    height: 4,
                    width: '100%',
                    borderRadius: 0,
                    border: 'none',
                    backgroundColor: 'gray',
                }}
            >
                BUY
            </ToggleButton>
        </Box>
    );
};
