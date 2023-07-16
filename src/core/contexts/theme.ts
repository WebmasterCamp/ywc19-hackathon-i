"use client";

import { createTheme } from "@mui/material";
import { IBM_Plex_Sans_Thai, Roboto } from 'next/font/google';

const iBMPlexSansThai:{} = IBM_Plex_Sans_Thai({
    weight:['400','500','600'],
    subsets:["thai"]
})

const roboto = Roboto({
    weight:'400',
    preload: false,
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