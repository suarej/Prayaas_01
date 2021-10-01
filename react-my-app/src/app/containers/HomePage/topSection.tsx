import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import MclanrenImg from '../../../assets/images2/flag_2.png';
import BlobImg from '../../../assets/images/blob.svg';
import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";


const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `};
`;

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `};
`;

const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20   
    `};
`;

const Slogan = styled.h1`
    ${tw`
        text-2xl
        font-bold
        text-black
        mb-4
        lg: font-black
        md: font-extrabold
        sm: leading-snug
        lg: leading-normal
        xl: leading-relaxed
        
    `};
    @media (min-width: ${SCREENS.sm}) { font-size: 1.5rem; }
    @media (min-width: ${SCREENS.md}) { 	font-size: 3rem; }
    @media (min-width: ${SCREENS.xl}) { 	font-size: 3.75rem; }
`;

const Description = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `};
`;

const BlobContainer = styled.div`
   width: 20em;
   height: 10em;
   position: absolute;
   right: -5em;
   top:-9em;
   z-index: -1;
   transform: rotate(-30deg);

   img{
       width: 100%
       height: auto;
       max-height: max-content;
   }
   @media (min-width: ${SCREENS.sm}){
       width: 40em;
       max-height: 10em;
       right: -9em;
       top: -16em;
       transformation:(-25deg);
   }
   @media (min-width: ${SCREENS.lg}){
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transformation:(-25deg);
}
@media (min-width: ${SCREENS.xl}){
    width: 70em;
    max-height: 30em;
    right: -11em;
    top: -23em;
    transformation:(-20deg);
}
`;

const StandAloneCar = styled.div`
    width: auto;
    height: 10em;
    right: -1.5em;
    top: -4em;
    position: absolute;
   
    img {
        width: auto;
        height: 100%;
        max-width: fit-content;
    }
    @media (min-width: ${SCREENS.sm}){
        height: 16em;
        right: -2em;
        top: -6em;
    }
    @media (min-width: ${SCREENS.lg}){
        height: 27em;
        right: -4em;
        top: -5em;
    }
    @media (min-width: ${SCREENS.xl}){
        height: 30em;
        right: -9em;
        top: -9em;
    }
`;

const ButtonsContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        mt-4
    `}
`;



export function TopSection() {
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>
                Prayaas Institute of Excellence !
                </Slogan>
                <Description>
                Offering Personalized Coaching to IAS aspirants 
                </Description>
                <ButtonsContainer>
                <Button text="Explore" />
                <Button theme="filled" text="Book a session"/>
                </ButtonsContainer>

            </LeftContainer>

            <RightContainer>
                <BlobContainer>
                    <img src={BlobImg} alt="blob"></img>
                </BlobContainer>
                <StandAloneCar>
                    <img src={MclanrenImg} alt="text"/>
                </StandAloneCar>

            </RightContainer>
        </TopSectionContainer>)
}