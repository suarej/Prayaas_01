import React from "react";
import { NavBar } from "../../components/navbar";
import styled from 'styled-components';
import tw from "twin.macro";
import { Footer } from "../../components/footer";
import { TopSection } from "../HomePage/topSection";
import { ReachUs } from "./ReachUs";
import { GoogleMaps } from "./gMap";

const ContactContainer = styled.div`${tw`
w-full
flex
flex-col
items-center
`}
`;

const Title = styled.h1`
    ${tw`
        w-full
        text-center
        text-black
        text-xl
        md:text-2xl
        font-medium
        md:font-black
        md:leading-normal
    `};
`;

const WhatsappContainer = styled.div`
    ${tw`
        flex
        flex-col
        justify-between
        md:w-1/2
        md:flex-row
        
    `}
`;


export function ContactUs() {
    return (
        <ContactContainer>
            <NavBar />
            <Title>
                Contact Us!
            </Title>
            <WhatsappContainer>
                <ReachUs/>
                <GoogleMaps/>
            </WhatsappContainer>

            <Footer />

        </ContactContainer>
    )
}