import styled from "styled-components";
import DefaultWrapper from "../ui/DefaultWrapper";
import Navigation from "./Navigation";
import {useState} from "react";
import RequestStatistic from "./RequestStatistic";
import QuestionStatistic from "./quiz/QuestionStatistic";
import AccessTimeStatistic from "./AccessTimeStatistic";

const Wrapper = styled.div`
  width:1200px;
  height:800px;
  background-color:lightgrey;
  border-radius:15px;
`
const DashBoard = () => {

    const [currentNavigation,setCurrentNavigation] = useState(0);


    return (
        <Wrapper>
            <DefaultWrapper>
                <Navigation
                    setCurrentNavigation = {setCurrentNavigation}
                />
                {currentNavigation == 0 && <AccessTimeStatistic />}
                {currentNavigation == 1 && <RequestStatistic/>}
                {currentNavigation == 2 && <QuestionStatistic />}

            </DefaultWrapper>
        </Wrapper>
    );
}

export default DashBoard;