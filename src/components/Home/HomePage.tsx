'use client';
import { FC } from 'react';
import { Header } from '../Header';
import { HomeCarousel } from './HomeCarousel';
import { Slogan } from './Slogan';
import { HotDeal } from './HotDeal';
import { AllCategory } from '../Category/AllCategory';

export const HomePage: FC = () => {
    return (
        <>
            <HomeCarousel />
            <Slogan />
            <HotDeal />
            <AllCategory />
        </>
    );
};
