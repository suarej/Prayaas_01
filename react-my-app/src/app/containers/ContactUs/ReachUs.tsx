import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../components/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const SectionContainer = styled.div`
    ${tw`
        flex
        flex-col
    `};
`;

const ButtonsContainer = styled.div`
    ${tw`
        flex
        flex-col
        bg-gray-200
        m-3
        p-10
        rounded-md
        pb-4
    `};
`;

const AdressContainer = styled.div`
    ${tw`
        flex
        flex-col
        m-3
        p-10
        bg-gray-200
    `}
`;

const AdressText = styled.p`
    ${tw`
        // md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        // mt-4

    `};
`;

const StepIcon = styled.span`
  ${tw`
        text-red-500
        text-2xl
        text-center
        mb-2
    `};
`;

const Whatsappicon = styled.span`
  ${tw`
        text-green-500
        text-5xl
        text-center
        mb-2
    `};
`;

const ButtonText = styled.p`
    ${tw`
        // md:max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        // mt-4

    `};
`;

export function ReachUs() {
    return (
        <SectionContainer>
            <ButtonsContainer>
                <Whatsappicon>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </Whatsappicon>
                <ButtonText>
                    Reach via whatsapp ?
                </ButtonText>

            </ButtonsContainer>
            <ButtonsContainer>
                <StepIcon>
                    <FontAwesomeIcon icon={faFilePdf} />
                </StepIcon>
                <ButtonText>
                    Reach via ztelegram ?
                </ButtonText>

            </ButtonsContainer>
            <AdressContainer>
                <StepIcon>
                    <FontAwesomeIcon icon={faFilePdf} />
                </StepIcon>
                <AdressText>
                    Lorem asfasfb
                </AdressText>

            </AdressContainer>

        </SectionContainer>
    )
}