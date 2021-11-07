import {
  faEnvelope,
  faEnvelopeOpen,
} from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  background-color: #1d2124;
  ${tw`
        flex
        flex-col
        min-w-full
        // pt-10
        pb-2
        items-center
        justify-center
    `};
`;

const InnerContainer = styled.div`
  ${tw`
        flex
        flex-wrap
        w-full
        h-full
        // max-w-screen-2xl   
    `};
`;

const AboutContainer = styled.div`
  ${tw`
        flex
        flex-col
        mr-2
        md:mr-auto
        pl-10
        pr-10
        // md:pl-3
        // md:pr-3
    `};
`;

const BottomContainer = styled.div`
  ${tw`
        w-full
        flex
        max-w-screen-2xl
        justify-center
        md:justify-center
        mt-4
        pt-0
        md:mt-0
        md:ml-5
        
    `};
`;

const CopyrighText = styled.small`
  font-size: 12px;
  ${tw`
        text-gray-300
    `};
`;

const AboutText = styled.div`
  ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-2
    `};
`;

const SectionContainer = styled.div`
  ${tw`
        w-full
        md:w-60
        pl-10
        flex
        flex-col
        mr-2
        md:mr-16
        md:pl-3
        md:pr-3
        mt-7
        md:mt-12
    `};
`;

const LinksList = styled.ul`
  ${tw`
        outline-none
        list-none
        flex
        flex-col
    `};
`;

const ListItem = styled.li`
  ${tw`
        mb-3
    `};

  & > a {
    ${tw`
        text-sm
        text-white
        transition-all
        hover:text-gray-500
        `};
  }
`;

const HeaderTitle = styled.div`
  ${tw`
        text-sm
        font-thin
        text-white
        mb-3
    `};
`;

const RedIcon = styled.span`
  ${tw`
        w-9
        h-9
        rounded-full
        bg-red-700
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
    `};
`;

const HorizontalContainer = styled.div`
  ${tw`
        flex
        items-center
    `};
`;

const SmallText = styled.h6`
  ${tw`
        text-sm
        font-thin
        text-white
        w-auto 
    `};
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo color="white" bgColor="dark" />
        </AboutContainer>

        <SectionContainer>
          <HeaderTitle> Telegram / Whatsapp </HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+91 770 919 8275</SmallText>
          </HorizontalContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Mail </HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>admin@prayaas.in</SmallText>
          </HorizontalContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Adress </HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </RedIcon>
            <SmallText>
              Sadashiv Peth, Pune.
            </SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>

      <BottomContainer>
        <CopyrighText>
          &copy; {new Date().getFullYear()} Prayaas. All rights
          reserved.
        </CopyrighText>
      </BottomContainer>
    </FooterContainer>
  );
}
