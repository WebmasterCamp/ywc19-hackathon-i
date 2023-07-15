import { SupplyTable, ShopHeader } from '@/components/Home';
import { Button } from '@mui';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
    return (
        <>
            <ShopHeader />
            <SupplyTable />
        </>
    );
};

export default IndexPage;
