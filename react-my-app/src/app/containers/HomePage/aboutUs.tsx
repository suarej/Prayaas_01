import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import JeepImage from '../../../assets/images2/image_1.png';

const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-col
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

const StepsContainer = styled.div`
  ${tw`
        flex
        justify-evenly
        flex-wrap
        // mt-7
        lg:mt-16
    `};
`;

const StepContainer = styled.div`
  ${tw`
        flex
        flex-col
        md:w-80
        items-center
        transition-colors
        hover:text-red-500
    `};
`;

const ImageContainer = styled.div`
    height:16em;
    // margin-left:-30px;

    img {
        width:16em;
        height:16em;
        border-radius: 50%;
    }

    @media (min-width: ${SCREENS.md}) {
        height:18em;
        width:18em;
    }
    @media (min-width: ${SCREENS.lg}) {
        height:20em;
        width:20em;
    }
    @media (min-width: ${SCREENS["2xl"]}) {
        height:25em;
        width: 25em;
        margin-left:0;
    }
`;

const InfoContainer = styled.div`
    ${tw`
        // md:w-1/2
        flex
        flex-col
        // md:ml-6
        2xl:ml-16
    `};
`;

const Title = styled.h1`
    ${tw`
        w-full
        text-center
        text-black
        text-2xl
        mb-2
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
        // mt-4

    `};
`;

export function AboutUs() {
    return (
        <AboutUsContainer>
                <Title> About Us ! </Title>
            <StepsContainer>
                <StepContainer>
                <ImageContainer>
                <img src={JeepImage} alt="bio" />
            </ImageContainer>
            <InfoContainer>
                <InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, a, laudantium ipsam accusamus, 
                    commodi necessitatibus soluta repellat expedita velit molestiae aspernatur culpa quaerat hic 
                </InfoText>
            </InfoContainer>
                </StepContainer>

                <StepContainer>
                <ImageContainer>
                <img src={JeepImage} alt="bio" />
            </ImageContainer>
            <InfoContainer>
                <InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, a, laudantium ipsam accusamus, 
                    commodi necessitatibus soluta repellat expedita velit molestiae aspernatur culpa quaerat hic 
                </InfoText>
            </InfoContainer>
                </StepContainer>

                <StepContainer>
                <ImageContainer>
                <img src={JeepImage} alt="bio" />
            </ImageContainer>
            <InfoContainer>
                <InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, a, laudantium ipsam accusamus, 
                    commodi necessitatibus soluta repellat expedita velit molestiae aspernatur culpa quaerat hic 
                </InfoText>
            </InfoContainer>
                </StepContainer>

                <StepContainer>
                <ImageContainer>
                <img src={JeepImage} alt="bio" />
            </ImageContainer>
            <InfoContainer>
                <InfoText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, a, laudantium ipsam accusamus, 
                    commodi necessitatibus soluta repellat expedita velit molestiae aspernatur culpa quaerat hic 
                </InfoText>
            </InfoContainer>
                </StepContainer>

            

            
            </StepsContainer>

           
        </AboutUsContainer>
    )
}