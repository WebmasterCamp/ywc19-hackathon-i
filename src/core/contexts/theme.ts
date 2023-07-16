"use client";

import { createTheme } from "@mui/material";
import { IBM_Plex_Sans_Thai } from "next/font/google";

const iBMPlexSansThai:{} = IBM_Plex_Sans_Thai({
    weight:['400','500','600'],
    subsets:["thai"]
})

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FF7009',
          },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        fontFamily: iBMPlexSansThai.style.fontFamily
    }
})