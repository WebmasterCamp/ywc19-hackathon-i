import { ItemsGrid } from '@/components/Category/ItemsGrid';
import { Items } from '@/core/contexts/data';
import { Typography } from '@mui';
import { NextPage } from 'next';

interface CategoryPageProps {
    params: {
        category: string;
    };
}

const CategoryPage: NextPage<CategoryPageProps> = ({ params }) => {
    return (
        <>
            <ItemsGrid />
            <Typography>Category: {params.category}</Typography>
        </>
    );
};

export default CategoryPage;
