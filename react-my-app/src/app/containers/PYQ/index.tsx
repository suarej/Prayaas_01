import React from "react";
import { NavBar } from "../../components/navbar";
import styled from 'styled-components';
import tw from "twin.macro";
import { Footer } from "../../components/footer";
import { PrelimsPYQ } from "./prelims";
import { Marginer } from "../../components/marginer";
import { MainsUPSC } from "./mains";

const PageContainer = styled.div`${tw`
w-full
h-full
flex
flex-col
items-center
overflow-x-hidden
`}
`;

export function PreviousQuestions () {
    return <PageContainer>
        <NavBar/>
        <PrelimsPYQ/>
        <Marginer direction="vertical" margin="3em"/>
        <MainsUPSC/>
        <Footer/>
    </PageContainer>
}