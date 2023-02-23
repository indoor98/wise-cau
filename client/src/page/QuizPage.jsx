import React, {useEffect,useState} from "react";
import QuizImg from '../푸앙_독서.png';
import WrongImg from '../푸앙_절규.png';
import CorrectImg from '../푸앙_응원.png';
import DefaultWrapper from "../component/ui/DefaultWrapper";
import QuizQuestion from "../component/quiz/QuizQuestion";
import axios, {VERSION} from "axios";
import QuizOptionButton from "../component/quiz/QuizOptionButton";
import QuizSolution from "../component/quiz/QuizSolution";
import QuizNextButton from "../component/quiz/QuizNextButton";
import QuizPageNum from "../component/quiz/QuizPageNum";
import QuizConverter from "../util/QuizConverter";

function QuizPage() {



    useEffect(() => {
        axios.get('http://localhost:4000/api/quizzes').then(response => {
            console.log(response.data.result);
            setDataState(QuizConverter.convert(response.data.result));
        });
    }, []);
    const [pageState,setPageState] = useState(false);
    const [dataState,setDataState]=useState(null);
    const [answerState,setAnswerState]=useState(0);
    const [pageNumState,setPageNumState]=useState(0);
    const onOptionClick = (event) => {
        if (pageState===true){
            return ``
        }
        setPageState(true);
        console.log(event.currentTarget.id);
        if (event.currentTarget.id===dataState[pageNumState].answer){
            setAnswerState(1);}
        else{
            setAnswerState(2);
        }

    }
    const onNextClick = () => {
        setPageState(false);
        setAnswerState(0);
        setPageNumState(pageNumState+1);
    }



    return (
        <DefaultWrapper>
                    <QuizQuestion num={pageNumState+1} question={dataState===null? 'data is null':dataState[pageNumState].title}/>
                    <img src={pageState? (answerState===1 ? CorrectImg:WrongImg) : QuizImg} style={{width:130,paddingLeft : 180}}/>
                    <div>
                        <QuizOptionButton onClick={onOptionClick} id='0' index='A' text={dataState===null? 'data is null':dataState[pageNumState].option[0]}></QuizOptionButton>
                        <QuizOptionButton onClick={onOptionClick} id='1' index='B' text={dataState===null? 'data is null':dataState[pageNumState].option[1]}></QuizOptionButton>
                        <QuizOptionButton onClick={onOptionClick} id='2' index='C' text={dataState===null? 'data is null':dataState[pageNumState].option[2]}></QuizOptionButton>
                        <QuizOptionButton onClick={onOptionClick} id='3' index='D' text={dataState===null? 'data is null':dataState[pageNumState].option[3]}></QuizOptionButton>
                    </div>
                    <QuizSolution solution={dataState===null? 'data is null':dataState[pageNumState].solution}/>

            <QuizNextButton onClick={onNextClick} title="다음 문제"/>
            <QuizPageNum num={pageNumState+1}/>
        </DefaultWrapper>


    );
}

export default QuizPage;