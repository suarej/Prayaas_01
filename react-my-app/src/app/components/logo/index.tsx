import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

// import CarLogoImg from '../../../assets/images/car-logo.png';
import CarLogoImg from '../../../assets/images2/Prayaas_Seal.svg';

import CarLogoDarkImg from '../../../assets/images2/Prayaas_Seal.svg';

import NameLogo from '../../../assets/images2/Prayaas_Logo-01.svg';



interface ILogoProps {
    color?: "white" | "dark";
    bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
${tw`
flex
items-center
`};
`;

const LogoText = styled.div`
${tw`
text-xl
md:text-2xl
font-bold
text-black
m-1
`};
${({color}: any) => color === "white" ? tw`text-white` : tw`text-black`}

` as any;

const Image = styled.div`
    ${tw`
        h-36
        ml--20
        pt-5
        md:h-28
        md:pl-12
        md:pt-4
        md:ml--28
        md:h-32
    `};
    img{
        width: auto;
        height: 100%
    }
`;

const LogoImage = styled.div`
${tw`
h-36
pl-0
ml--20
md:h-28
md:pl-8
pt-4
md:h-44
md:ml--32
`};

img{
width: auto;
height: 100%;
};

`;


export function Logo(props: ILogoProps) {
    const {color, bgColor} = props;

    return <LogoContainer>
        <Image>
            <img src={bgColor === "dark" ? CarLogoDarkImg : CarLogoImg} alt="car-logo"></img>
        </Image>
        <LogoImage>
            <img src={NameLogo}/>
        </LogoImage>
    </LogoContainer>
}