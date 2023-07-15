<<<<<<< HEAD
import { SupplyTable, ShopHeader } from '@/components/Home';
import { Button } from '@mui';
=======
import { SupplyTable } from '@/components/Home';
import { Form } from '@/components/Home/Form';
import { Box } from '@mui';
>>>>>>> f7d2bef4dec94ece3cd152e9888e6ebbb7f6bbeb
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
    return (
        <>
            <ShopHeader />
            <SupplyTable />
            <Box sx={{ marginTop: 3 }}>
                <Form />
            </Box>
        </>
    );
};

export default IndexPage;
