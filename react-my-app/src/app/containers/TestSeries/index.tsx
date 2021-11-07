import React from "react";
import { NavBar } from "../../components/navbar";
import styled from 'styled-components';
import tw from "twin.macro";
import { Footer } from "../../components/footer";
import { TopSection } from "../HomePage/topSection";

const PageContainer = styled.div`${tw`
w-full
h-full
flex
flex-col
items-center
overflow-x-hidden
`}
`;


export function TestSeries () {
    return <PageContainer>

        <NavBar/>
        hola!
        <Footer/>

    </PageContainer>
}