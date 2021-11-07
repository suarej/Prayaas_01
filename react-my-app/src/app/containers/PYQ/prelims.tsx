import React from "react";
import styled from 'styled-components';
import tw from "twin.macro";
import { PrelimLinks } from "./prelimslinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";


const SectionContainer = styled.div`${tw`
w-full
flex
flex-col
items-center
`}
`;

const ListContainer = styled.ul`
        ${tw`
            w-full
            flex
            mb-7
            list-none
        `};
`;

const NavItem = styled.li<{ menu?: any }>`
    ${tw`
        text-xs
        text-blue-600
        font-medium
        mr-1
        ml-1
        pt-1
        md: mr-20
        md: ml-2
        md: text-base
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-500
    `};
`;

const Title = styled.h1`
    ${tw`
        w-full
        text-center
        text-black
        text-xl
        mt-6
        mb-8
        md:text-2xl
        font-medium
        md:font-black
        md:leading-normal
    `};
`;

const Heading = styled.h1`
    ${tw`
        w-1/3
        text-center
        text-black
        text-xl
        mb-2
        md:text-xl
        font-medium
        md:font-black
        md:leading-normal
    `};
`;

const StepIcon = styled.span`
  ${tw`
        text-red-500
        text-2xl
    `};
`;

export function PrelimsPYQ() {
    return (
        <SectionContainer>
            <Title> Civil Services (Preliminary) </Title>

            {PrelimLinks.map((el) => {
                return (
                    <ListContainer>
                        <Heading>
                            {el.Year}
                        </Heading>
                        <StepIcon>
                            <FontAwesomeIcon icon={faFilePdf} />
                        </StepIcon>
                        <NavItem>
                            <a href={el.urlPaperI} target="_blank">  {el.headerI} </a>
                        </NavItem>
                        <StepIcon>
                            <FontAwesomeIcon icon={faFilePdf} />
                        </StepIcon>
                        <NavItem>
                            <a href={el.urlPaperII} target="_blank">  {el.headerII} </a>
                        </NavItem>
                    </ListContainer>
                )
            })}
        </SectionContainer>
    )
}