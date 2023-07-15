import { Box } from '@mui';
import { FC } from 'react';
import { CategroyRow } from './CategoryRow';

export const CategroyGrid: FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '95%',
                justifyContent: 'space-between',
                marginTop: 4,
            }}
        >
            <CategroyRow />
            <CategroyRow />
            <CategroyRow />
            <CategroyRow />
        </Box>
    );
};
