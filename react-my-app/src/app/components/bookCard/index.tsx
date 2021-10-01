import React, { useState } from "react";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Marginer } from "../marginer";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
min-height: 4.3em;
box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pl-9
        md:pr-9

    `};
`;

const ItemContainer = styled.div`
    ${tw`
        flex
        relative
    `};
`;

const Icon = styled.span`
    ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        md:mr-3
    `};
`;

const SmallIcon = styled.span`
    ${tw`
        text-gray-700
        text-xs
        md:text-sm
        cursor-pointer
        ml-1
    `};
`;

const Name = styled.span`
    ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `};
`;

const LineSeparator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `};
`;

const DateCalendar = styled(Calendar)`
    position: absolute;
    max-width:none;
    top:3.5em;
    left:-2em;
    user-select:none

    @media (min-width: ${SCREENS.md}){

        top:3.5em;

    }
`;

export function BookCard () {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [isStartCalenderOpen, setStartCalenderOpen] = useState(false);

    const [returnDate, setreturnDate] = useState<Date>(new Date());
    const [isReturnCalenderOpen, setReturnCalenderOpen] = useState(false);

    const toggleStartDateCalender = () => {
        setStartCalenderOpen(!isStartCalenderOpen);
        if(isReturnCalenderOpen) setReturnCalenderOpen(false);

    }

    const toggleReturnDateCalender = () => {
        setReturnCalenderOpen(!isReturnCalenderOpen);
        if(isStartCalenderOpen) setStartCalenderOpen(false);
    }

    return (
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Icon>
                <Name onClick={toggleStartDateCalender}> Pick up Date </Name>
                <SmallIcon> <FontAwesomeIcon icon={isStartCalenderOpen ? faCaretUp : faCaretDown}/> </SmallIcon>
             {isStartCalenderOpen && <DateCalendar value={startDate} onChange={setStartDate} /> }   
            </ItemContainer>
            <LineSeparator/>

            <ItemContainer>
                <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}/>

                </Icon>
                <Name onClick={toggleReturnDateCalender}> Return Date </Name>
                <SmallIcon> <FontAwesomeIcon icon={isReturnCalenderOpen ? faCaretUp : faCaretDown}/> </SmallIcon>

                {isReturnCalenderOpen && <DateCalendar value={returnDate} onChange={setreturnDate} /> }
            </ItemContainer>
            <Marginer direction="horizontal" margin="2em"/>
            <Button text="Book Your Ride"/>
        </CardContainer>
    )
}