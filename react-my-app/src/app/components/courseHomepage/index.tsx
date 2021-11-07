import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Button } from "../button";
import { SCREENS } from "../responsive";

interface ICarProps extends ICar {}

const CarContainer = styled.div`
  width: 90%;
  // min-height: 33.2em;
  // max-height: 33.2em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
        h-96
        md:h-[600px]
        flex
        flex-col
        items-center
        p-3
        pb-4
        bg-red-200
        rounded-md
        m-1
        sm:m-3
        md:m-6
    `};
`;

const CarThumbnail = styled.div`
  widht: 100%;
  height: auto;

  img {
    width: 100%;
    height: 22.7em;
  }

  @media (min-width: ${SCREENS.md}) {
    img {
      width: 100%;
      height: 31.7em;
    }
    height:36em;
    // width:18em;
}
@media (min-width: ${SCREENS.lg}) {
  img {
    width: 100%;
    height: 35.7em;
  }
    height:36em;
    // width:20em;
}
@media (min-width: ${SCREENS["2xl"]}) {
    height:25em;
    width: 25em;
    margin-left:0;
}

`;


const PricesContainer = styled.div`
  ${tw`
        w-full
        flex
        justify-start
        mt-3
    `};
`;

const SmallText = styled.p`
  color: inherit;
  font-size: 11px;
  ${tw`
        inline-flex
        font-thin
    `};
`;

export function CourseHomepage(props: ICarProps) {
  const { thumbnailSrc, name, info } = props;

  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailSrc} />
      </CarThumbnail>
      {/* <CarName>{name}</CarName>
      <PricesContainer>
        <SmallText>
          {info}
        </SmallText>
      </PricesContainer> */}
   
    </CarContainer>
  );
}
