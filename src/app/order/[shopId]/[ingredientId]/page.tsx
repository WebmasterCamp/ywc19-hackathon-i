import { OrderItem } from "@/components/Order";
import { RelatedItems } from "@/components/Order/RelatedItems";
import { Box } from "@mui";
import { NextPage } from "next";

interface CategoryPageProps {
    params: {
        shopId: string;
        ingredientId: string;
    };
}

const OrderPage: NextPage<CategoryPageProps> = ({ params }) => {
    return (
        <>
            <OrderItem ingredientId={parseInt(params.ingredientId)} />
            <RelatedItems ingredientId={parseInt(params.ingredientId)} />
        </>
    );
};

export default OrderPage;
