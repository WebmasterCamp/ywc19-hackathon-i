'use client';
import { FC } from 'react';
import { Header } from '../Header';
import { HomeCarousel } from './HomeCarousel';
import { Slogan } from './Slogan';
import { HotDeal } from './HotDeal';
import { AllCategory } from '../Category/AllCategory';
import { AboutUs } from './AboutUs';
import Partner from './Partner';

export const HomePage: FC = () => {
    return (
        <>
            {/* <HomeCarousel /> */}
            <Slogan />
            <HotDeal />
            <AllCategory />
            <AboutUs />
            <Partner />
        </>
    );
};
