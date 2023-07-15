"use client";
import { FC } from "react";
import { HomeCarousel } from "./HomeCarousel";
import { Slogan } from "./Slogan";
import { HotDeal } from "./HotDeal";

export const HomePage: FC = () => {
    return (
        <>
            <HomeCarousel />
            <Slogan />
            <HotDeal />
        </>
    );
};
