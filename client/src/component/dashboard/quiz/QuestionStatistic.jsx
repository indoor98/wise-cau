import RequestStatisticItemList from "../RequestStatisticItemList";
import DefaultWrapper from "../../ui/DefaultWrapper";
import DashBoardTitle from "../DashBoardTitle";
import RowWrapper from "../RowWrapper";
import RequestStatisticSection from "../RequestStatisticSection";
import styled from "styled-components";
import QuizStatisticSection from "./QuizStatisticSection";
import {useEffect, useState} from "react";
import axios from "axios";
import ErrorUtil from "../../../util/ErrorUtil";
import Loader from "../../ui/Loader";
import ErrorUI from "../../ui/ErrorUI";

const Wrapper = styled.div`
  background-color: white;
  width: 1150px;
  height: 650px;
  margin-top:40px;
  border-radius:15px;
`;
const QuestionStatistic = (props) => {

    const [quizzes, setQuizzes] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(ErrorUtil.OK);


    useEffect( () => {
        console.log('here');
        axios.get('/api/statistic/quizzes')
            .then((response) => {
                setQuizzes(response.data.result);
                setIsLoading(false);
            }).catch(err => {
                console.log('error');
                setError(ErrorUtil.NETWORK_ERROR);
        });
    },[]);


    let content = isLoading ? <Loader/>
        :
        <QuizStatisticSection items={quizzes}/>;

    content = error.isError ? <ErrorUI error={error}/> : content;

    return (
        <Wrapper>
            <DefaultWrapper>
                <DashBoardTitle
                    title='문제 통계 현황'
                />
                {content}
            </DefaultWrapper>
        </Wrapper>
    );
}

export default QuestionStatistic;