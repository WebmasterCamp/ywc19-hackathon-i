import { Box } from '@mui';
import { FC } from 'react';

export const Story: FC = () => {
    return (
        <Box
            sx={{
                borderRadius: '100%',
                width: '40px',
                height: '40px',
                backgroundColor: 'gray',
            }}
        ></Box>
    );
};
