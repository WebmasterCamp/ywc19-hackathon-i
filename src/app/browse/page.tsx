import { Total } from '@/components/Browse';
import { CategoryGrid } from '@/components/Browse/CategoryGrid';
import { HotDeal } from '@/components/Home';
import { NextPage } from 'next';

const BrowsePage: NextPage = () => {
    return (
        <>
            <CategoryGrid />
            <Total />
        </>
    );
};

export default BrowsePage;
