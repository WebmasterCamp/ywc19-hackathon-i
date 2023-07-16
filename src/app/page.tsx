<<<<<<< HEAD
import { NextPage } from 'next';
import { HomePage } from '../components/Home';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/core/contexts/theme';
=======
import { NextPage } from "next";
import { HomePage } from "../components/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/core/contexts/theme";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const iBMPlexSansThai = IBM_Plex_Sans_Thai({
    weight: "400",
    subsets: ["thai"],
});
>>>>>>> 6ddc7c4cae714ea7a7ae70631e737faf0b6b04e3

const IndexPage: NextPage = () => {
    return (
        <>
            <HomePage />
        </>
    );
};

export default IndexPage;
