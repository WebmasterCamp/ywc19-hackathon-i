import { NextPage } from "next";
import { HomePage } from "../components/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/core/contexts/theme";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const iBMPlexSansThai = IBM_Plex_Sans_Thai({
    weight: "400",
    subsets: ["thai"],
});

const IndexPage: NextPage = () => {
    return (
        <>
            <HomePage />
        </>
    );
};

export default IndexPage;
