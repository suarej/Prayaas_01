import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carousel, { Dots, slidesToShowPlugin, autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import { CourseHomepage } from "../../components/courseHomepage";

const TopCarsContainer = styled.div`
  ${tw`
        // max-w-screen-2xl
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
        mt-7
        md:mt-10

    `};
`;

export function CoursesHomepage() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const [current, setCurrent] = useState(1);

  const HomeCourses = [
    <CourseHomepage
      name="Daily Writing Initiative"
      thumbnailSrc="https://source.unsplash.com/y02jEX_B0O0/400x300"
      info=""
    />,
    <CourseHomepage
      name="Essay Writing Module"
      thumbnailSrc="https://source.unsplash.com/dul2ronIcO0/400x300"
      info="ABCD of writing a good essay."
    />,
    <CourseHomepage
      name="Pareekshan 1.0"
      thumbnailSrc="https://source.unsplash.com/wD1LRb9OeEo/400x300"
      info="Targeting for 2022 Prelim attempt ? Then this specially customized course is for you."
    />,
    <CourseHomepage
      name="Pareekshan 2.0"
      thumbnailSrc="https://source.unsplash.com/-fRAIQHKcc0/400x300"
      info="Fast track version of 1.0. Those who have already given at-least one attempt at prelims should join this course."
    />,
    <CourseHomepage
      name="Ethics Module"
      thumbnailSrc="https://source.unsplash.com/veNb0DDegzE/400x300"
      info="Special Module for GS 4 Paper"
    />,
    <CourseHomepage
      name="MCQ : All Your Round"
      thumbnailSrc="https://source.unsplash.com/CiMITAJtb6I/400x300"
      info="Prelims is a big hurdles for many. Solve Daily 10 MCQs with us."
    />,
  ];

  const numberOfDots = isMobile ? HomeCourses.length : Math.ceil(HomeCourses.length / 1.5);

  return (
    <TopCarsContainer>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={HomeCourses}
          plugins={[
            'centered',
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
            // { 
            //   resolve: autoplayPlugin,
            //   options: {
            //     interval: 2000,
            //   }
            // }
          ]}
          // animationSpeed={1000}
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
                    numberOfSlides: 1,
                  },
                },
              ],
            },
          }}
        ></Carousel>
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
}
