import { NextPage } from 'next';
import { HomePage } from '../components/Home';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/core/contexts/theme';

const IndexPage: NextPage = () => {
    return (
        <>
            <HomePage />
        </>
    );
};

export default IndexPage;
