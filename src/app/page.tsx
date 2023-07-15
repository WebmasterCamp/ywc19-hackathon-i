import { SupplyTable } from '@/components/Home';
import { Form } from '@/components/Home/Form';
import { Box } from '@mui';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
    return (
        <>
            <SupplyTable />
            <Box sx={{ marginTop: 3 }}>
                <Form />
            </Box>
        </>
    );
};

export default IndexPage;
