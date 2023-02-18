import React from "react";
import QuizImg from '../푸앙_독서.png';

import DefaultWrapper from "../component/ui/DefaultWrapper";
import QuizQuestion from "../component/quiz/QuizQuestion";
import VerticalAlignCenterWrapper from "../component/ui/VerticalAlignCenterWrapper";
import {VERSION} from "axios";



function QuizPage() {
    
    return (
        <DefaultWrapper>
                    <QuizQuestion num='01' question="문제입니다."/>
                    <img src={QuizImg} style={{width:130,paddingLeft : 180}}/>
                    <div style={{paddingTop:20,paddingRight:200}}>
                        <div>답안1</div>
                        <div>답안2</div>
                        <div>답안3</div>
                        <div>답안4</div>
                    </div>
        </DefaultWrapper>

    );
}

export default QuizPage;