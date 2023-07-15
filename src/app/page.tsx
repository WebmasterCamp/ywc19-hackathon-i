import { SupplyTable, ShopHeader } from '@/components/Home';
import { Button } from '@mui';
import { Form } from '@/components/Home/Form';
import { Box } from '@mui';
import { NextPage } from 'next';
import {HomePage} from '../components/Home'

const IndexPage: NextPage = () => {
    return (
        <>
            {/* <ShopHeader />
            <SupplyTable />
            <Box sx={{ marginTop: 3 }}>
                <Form />
            </Box> */}
            <HomePage />
        </>
    );
};

export default IndexPage;
