"use client";

import { createTheme } from "@mui/material";
<<<<<<< HEAD
import { IBM_Plex_Sans_Thai } from "next/font/google";
=======
import { IBM_Plex_Sans_Thai, Roboto } from "next/font/google";
>>>>>>> 6ddc7c4cae714ea7a7ae70631e737faf0b6b04e3

const iBMPlexSansThai = IBM_Plex_Sans_Thai({
    weight: ["400", "500", "600"],
    subsets: ["thai"],
});

<<<<<<< HEAD
=======
const roboto = Roboto({
    weight: "400",
    preload: false,
});

>>>>>>> 6ddc7c4cae714ea7a7ae70631e737faf0b6b04e3
export const theme = createTheme({
    palette: {
        primary: {
            main: "#FF7009",
        },
        secondary: {
            main: "#f50057",
        },
    },
    typography: {
        fontFamily: iBMPlexSansThai.style.fontFamily,
    },
});
