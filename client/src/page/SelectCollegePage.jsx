import styled from "styled-components";
import Title from "../component/ui/Title";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Loader from "../component/ui/Loader";
import ButtonGroup from "../component/ui/ButtonGroup";
import DefaultButton from "../component/ui/DefaultButton";
import {useNavigate} from "react-router-dom";
import CollegeItem from "../component/select-college/CollegeItem";
import CollegeItemList from "../component/select-college/CollegeItemList";
import VerticalAlignCenterWrapper from "../component/ui/VerticalAlignCenterWrapper";
import DefaultWrapper from "../component/ui/DefaultWrapper";
import ErrorUtil from "../util/ErrorUtil";
import Error from "../component/ui/Error";
import BSLog from "../util/BSLog";
import Content from "../component/ui/Content";
import ErrorUI from "../component/ui/ErrorUI";


const MyCollege = styled.div`

  text-align: center;

  @keyframes vibration {
    from {
      transform: rotate(1deg);
    }
    to {
      transform: rotate(-1deg);
    }
  }

  &.vibration {
    color: red;
    animation: vibration .1s infinite;
  }

`;

function SelectCollegePage() {
    const navigate = useNavigate();
    const [colleges, setColleges] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCollegeId, setSelectedCollegeId] = useState(null);
    const [unselectedQuizStartError, setUnselectedQuizStartError] = useState(false);
    const [networkError, setNetworkError] = useState(ErrorUtil.OK);

    useEffect(() => {
        axios.get('/api/colleges').then(response => {
            //BSLog.log("hi","hi");

            BSLog.info('Original Data ->'+response.data.result);
            BSLog.info('Obj Data -> '+response.data.result.map((college => JSON.stringify(college))));
            setColleges(response.data.result);
            setIsLoading(false);
        }).catch(error => {
            setNetworkError(ErrorUtil.NETWORK_ERROR);
        });
    }, []);

    const onSelectCollegeHandler = (collegeId) => {
        setSelectedCollegeId(collegeId);
        setUnselectedQuizStartError(false);
    }

    const quizStartClickHandler = () => {
        if (selectedCollegeId === null) {
            setUnselectedQuizStartError(true);
            return;
        }
        axios.post("/api/statistic/request",{path:'/quiz'});
        navigate('/quiz', {state: {selectedCollegeId: selectedCollegeId}});
    }

    const backClickHandler = () => {
        axios.post("/api/statistic/request",{path:'/'});
        navigate('/');
    }

    const selectedCollegeName = selectedCollegeId === null ? null : colleges[selectedCollegeId - 1].college_name;

    let content = isLoading ?
        <Loader/>
        :
        <>
            <CollegeItemList
                items={colleges}
                selectedCollegeId={selectedCollegeId}
                onSelectCollegeHandler={onSelectCollegeHandler}
            />
            <MyCollege className={unselectedQuizStartError && 'vibration'}>
                나의 단과대는 :
                <h3 style={{marginBottom: 0, height: 35, marginTop: 10}}>{selectedCollegeName}</h3>
            </MyCollege>
            <ButtonGroup>
                <DefaultButton title='뒤로 가기' onClick={backClickHandler}/>
                <DefaultButton title='퀴즈 시작!' onClick={quizStartClickHandler}/>
            </ButtonGroup>
        </>;

    content = networkError.isError ?
        <ErrorUI error={networkError} clickHandler={backClickHandler}/>
        :
        content;



    return (
        <VerticalAlignCenterWrapper>
            <DefaultWrapper>
                <Title>나의 단과대</Title>
                {content}
            </DefaultWrapper>
        </VerticalAlignCenterWrapper>
    );
}

export default SelectCollegePage;