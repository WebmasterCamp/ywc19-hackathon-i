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
            <Typography>Category: {params.category}</Typography>
        </>
    );
};

export default CategoryPage;
