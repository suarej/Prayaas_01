import { faListAlt } from "@fortawesome/free-regular-svg-icons";
import { faBinoculars, faChalkboardTeacher, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        items-center
        pt-3
        pb-3
        lg:pt-6
        lg:pb-6
    `};
`;

const Title = styled.h2`
  ${tw`
        text-3xl
        lg:text-5xl
        text-black
        font-extrabold
    `};
`;

const StepsContainer = styled.div`
  ${tw`
        flex
        justify-evenly
        flex-wrap
        mt-7
        lg:mt-16
    `};
`;

const StepContainer = styled.div`
  ${tw`
        flex
        flex-col
        md:w-96
        items-center
        transition-colors
        hover:text-red-500
        m-3
    `};
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
        flex
        rounded-lg
        justify-center
        p-6
    `};
`;

const StepTitle = styled.h4`
  ${tw`
        text-black
        font-semibold
        mt-4
    `};
`;

const StepDescription = styled.p`
  ${tw`
        w-10/12
        text-xs
        md:text-sm
        text-center
        text-gray-600
    `};
`;

const StepIcon = styled.span`
  ${tw`
        text-red-500
        text-3xl
    `};
`;

export function CoursesOffered() {
  return (
    <Container>
      <Title> What We Offer ? </Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            </StepIcon>
          </Step>
          <StepTitle>Personalized Training</StepTitle>
          <StepDescription>
            We believe, every individual is special and different. We, at
            Prayaas, ensure that every one gets a personalized learning
            experience, through regular follow-ups, and personalized targets.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faBinoculars} />
            </StepIcon>
          </Step>
          <StepTitle>Highly Qualified Educators</StepTitle>
          <StepDescription>
            Been there, done that. We have given multiple attempts to this
            prestigious exam with a limited success up to Interview stage. We
            know what it takes to clear prelims and mains stage.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faListAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Wide Variety of Courses</StepTitle>
          <StepDescription>
            We have multiple courses for Answer writing, Essay and Ethics
            module. Apart from this, we have courses designed for Prelims.
            Special batches for Marathi medium students.
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
