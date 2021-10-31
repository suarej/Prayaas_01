import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Car } from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";

const CoursesContainer = styled.div`
  ${tw`
        max-w-screen-lg
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4
        md:pl-0
        md:pr-0
        md:mt-10

    `};
`;

const Title = styled.h2`
  ${tw`
        text-center
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
    `};
`;

const CarsContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        items-center
        mt-7
        md:mt-10

    `};
`;

export function TopCoursesDetail() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const [current, setCurrent] = useState(0);

  const cars = [
    <Car
      name="Daily Writing Initiative"
      thumbnailSrc="https://source.unsplash.com/y02jEX_B0O0/400x300"
      info="This is a free initiative and open to all. Daily morning at 8 am we post a
       Question on our Telegram Group. Aspirants have to write 
       the answers and upload to us."
    />,
    <Car
      name="Essay Writing Module"
      thumbnailSrc="https://source.unsplash.com/dul2ronIcO0/400x300"
      info="ABCD of writing a good essay."
    />,
    <Car
      name="Pareekshan 1.0"
      thumbnailSrc="https://source.unsplash.com/wD1LRb9OeEo/400x300"
      info="Targeting for 2022 Prelim attempt ? Then this specially customized course is for you."
    />,
    <Car
      name="Pareekshan 2.0"
      thumbnailSrc="https://source.unsplash.com/-fRAIQHKcc0/400x300"
      info="Fast track version of 1.0. Those who have already given at-least one attempt at prelims should join this course."
    />,
    <Car
      name="Ethics Module"
      thumbnailSrc="https://source.unsplash.com/veNb0DDegzE/400x300"
      info="Special Module for GS 4 Paper"
    />,
    <Car
      name="MCQ : All Your Round"
      thumbnailSrc="https://source.unsplash.com/CiMITAJtb6I/400x300"
      info="Prelims is a big hurdles for many. Solve Daily 10 MCQs with us."
    />,
  ];

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 1.5);

  return (
    <CoursesContainer>
      <Title> Explore our top courses </Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        ></Carousel>
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </CoursesContainer>
  );
}
