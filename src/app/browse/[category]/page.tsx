import { Total } from "@/components/Browse";
import { GoBack } from "@/components/Category/GoBack";
import { ItemsGrid } from "@/components/Category/ItemsGrid";
import { Typography } from "@mui";
import { NextPage } from "next";

interface CategoryPageProps {
    params: {
        category: string;
    };
}

const CategoryPage: NextPage<CategoryPageProps> = ({ params }) => {
    return (
        <>
            <ItemsGrid category={params.category} />
            <GoBack />
            <Total />
        </>
    );
};

export default CategoryPage;
