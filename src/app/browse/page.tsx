import { Total } from "@/components/Browse";
import { CategoryGrid } from "@/components/Browse/CategoryGrid";
import { HotDeal } from "@/components/Home";
import { NextPage } from "next";

const BrowsePage: NextPage = () => {
    return (
        <>
            <HotDeal />
            <CategoryGrid />
            <Total />
        </>
    );
};

export default BrowsePage;
