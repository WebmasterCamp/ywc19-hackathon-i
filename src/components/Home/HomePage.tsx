"use client";
import {FC} from 'react';
import { Header } from '../Header';
import { HomeCarousel } from './HomeCarousel';

export const HomePage: FC = () => {
    return (<>
    <Header />
    <HomeCarousel />
    </>)
}