'use client';
import { FC } from 'react';
import { Header } from '../Header';
import { HomeCarousel } from './HomeCarousel';
import { Slogan } from './Slogan';
import { HotDeal } from './HotDeal';

export const HomePage: FC = () => {
    return (
        <>
            <Header />
            <HomeCarousel />
            <Slogan />
            <HotDeal />
        </>
    );
};
