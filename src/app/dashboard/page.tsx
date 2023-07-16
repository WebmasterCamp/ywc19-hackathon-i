import { ShopHeader, SupplyTable } from "@/components/Dashboard";
import { Form } from "@/components/Dashboard/Form";
import { OrderTable } from "@/components/Dashboard/OrderTable";
import { Box } from "@mui";
import { NextPage } from "next";

const IndexPage: NextPage = () => {
    return (
        <>
            <ShopHeader />
            <SupplyTable />
            <OrderTable />
            <Box sx={{ marginTop: 3 }}>
                <Form />
            </Box>
        </>
    );
};

export default IndexPage;
