import React from "react";
import styled from 'styled-components';
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { NavBar } from "../../components/navbar";
import { AboutUs } from "./aboutUs";
import { CoursesOffered } from "./courses";
import { TopCars } from "./topCars";
import { TopSection } from "./topSection";

const PageContainer = styled.div`${tw`
w-full
h-full
flex
flex-col
items-center
overflow-x-hidden
`}
`;

export function HomePage () {
    return <PageContainer>
        <NavBar/>
        <TopSection/>
        <Marginer direction="vertical" margin="4em"/>
        <TopCars/>

        {/* <BookCard/> */}
        {/* <Marginer direction="vertical" margin="10em"/> */}
        <CoursesOffered/>
        <Marginer direction="vertical" margin="8em"/>
        <AboutUs/>
        <Marginer direction="vertical" margin="8em"/>
        <Footer/>

    </PageContainer>
}