import { Box } from '@mui';
import { FC } from 'react';
import { Story } from './Story';

export const Stories: FC = () => {
    return (
        <Box
            className="justify-between"
            sx={{
                width: '95%',
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'pink',
                gap: 2,
            }}
        >
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
        </Box>
    );
};
