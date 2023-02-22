import React, {useEffect} from "react";
import QuizImg from '../푸앙_독서.png';

import DefaultWrapper from "../component/ui/DefaultWrapper";
import QuizQuestion from "../component/quiz/QuizQuestion";
import VerticalAlignCenterWrapper from "../component/ui/VerticalAlignCenterWrapper";
import axios, {VERSION} from "axios";
import QuizOptionButton from "../component/quiz/QuizOptionButton";
import QuizSolution from "../component/quiz/QuizSolution";
import DefaultButton from "../component/ui/DefaultButton";
import QuizNextButton from "../component/quiz/QuizNextButton";
import QuizPageNum from "../component/quiz/QuizPageNum";
import {useLocation} from "react-router-dom";
import QuizConverter from "../util/QuizConverter";

function QuizPage() {

    useEffect(() => {
        axios.get('http://localhost:4000/api/quizzes').then(response => {
            console.log(QuizConverter.convert(response.data.result));
        });
    }, []);

    return (
        <DefaultWrapper>
                    <QuizQuestion num='01' question="(서울) 다음 중 중앙도서관 3층 아고라존에 대한 설명으로 옳지 않은 것을 고르시오."/>
                    <img src={QuizImg} style={{width:130,paddingLeft : 180}}/>
                    <div>
                        <QuizOptionButton index='A' text="강의평가를 하지 않아도 성적 이의 신청 기간이 지나면 성적을 확인 할 수 있다."></QuizOptionButton>
                        <QuizOptionButton index='B' text="성적을 확인 할 수 있다."></QuizOptionButton>
                        <QuizOptionButton index='C' text="강의평가를 하지 않아도 성적 이의 신청 기간이 지나면 성적"></QuizOptionButton>
                        <QuizOptionButton index='D' text="강의평가를 하지 않아도 성적 이의 신청 기간이 지나면 성적을 확인 할 수 있다."></QuizOptionButton>
                    </div>
                    <QuizSolution solution="중앙 자랑이 아닌 중앙 사랑 장학금이다. 친가족이 2명 이상 본 대학교에 재학 또는 휴학하고 있는 경우 재학중인 1인에게 장학금을 지원하고 있다. 8분위 이내의 학생은 근로를 통해 장학금을 받을 수 있다."/>

            <QuizNextButton title="다음 문제"/>
            <QuizPageNum num='1'/>
        </DefaultWrapper>

    );
}

export default QuizPage;