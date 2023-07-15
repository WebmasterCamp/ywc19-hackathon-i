import { CategroyGrid } from '@/components/Browse/CategoryGrid';
import { Box, Typography } from '@mui';
import { NextPage } from 'next';

const BrowsePage: NextPage = () => {
    return (
        <>
            <Box
                sx={{
                    marginTop: '5vh',
                    width: '95%',
                    height: '25vh',
                    backgroundColor: 'gray',
                }}
            ></Box>

            <CategroyGrid />
            <Typography>browse</Typography>
        </>
    );
};

export default BrowsePage;
