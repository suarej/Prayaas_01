import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImage from '../../../assets/images2/image_1.png';

const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-2
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white
    `};
`;

const CarContainer = styled.div`
    height:15em;
    // margin-left:-30px;

    img {
        width:auto;
        height:100%;
    }

    @media (min-width: ${SCREENS.md}) {
        height:28em;
    }
    @media (min-width: ${SCREENS.lg}) {
        height:30em;
    }
    @media (min-width: ${SCREENS["2xl"]}) {
        height:35em;
        margin-left:0;
    }
`;

const InfoContainer = styled.div`
    ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `};
`;

const Title = styled.h1`
    ${tw`
        w-full
        text-center
        text-black
        text-2xl
        mb-4
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;

const InfoText = styled.p`
    ${tw`
        // md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4

    `};
`;

export function AboutUs() {
    return (
        <AboutUsContainer>
                <Title> About Us ! </Title>

            <CarContainer>
                <img src={JeepImage} alt="bio" />
            </CarContainer>
            <InfoContainer>
                <InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, a, laudantium ipsam accusamus, 
                    commodi necessitatibus soluta repellat expedita velit molestiae aspernatur culpa quaerat hic 
                    deleniti dolorem ad delectus! Veniam, corporis cumque sit quia libero doloremque aut at similique 
                    reiciendis ullam officiis optio deleniti sunt quibusdam atque error beatae voluptates veritatis.
                </InfoText>

            </InfoContainer>
        </AboutUsContainer>
    )
}