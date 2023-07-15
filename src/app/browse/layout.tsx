import '$styles/globals.css';
import { Metadata } from 'next';
import { Box, TextField } from '@mui';
import { Stories } from '@/components/Browse';
import { CategroyGrid } from '@/components/Browse/CategoryGrid';

export const metadata: Metadata = {
    title: 'Browse items',
    description: 'dksnd',
};

interface BrowseLayoutProps {
    children: React.ReactNode;
}

export default function BrowseLayout({ children }: BrowseLayoutProps) {
    return (
        <>
            <Box
                sx={{
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 1,
                }}
            >
                <TextField
                    sx={{ width: '95%', marginBottom: 2 }}
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Search"
                />
                <Stories />

                {children}
            </Box>
        </>
    );
}
