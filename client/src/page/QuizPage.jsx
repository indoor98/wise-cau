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

let score=0;
function QuizPage() {



    useEffect(() => {
        axios.get('/api/quizzes').then(response => {
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
        const choose=event.currentTarget.id;
        const chooseButton=document.getElementById(choose);
        const answerElement=document.getElementById(dataState[pageNumState].answer);

        if (choose==dataState[pageNumState].answer){
            setAnswerState(1);
            chooseButton.style.backgroundColor='#b0ffa3';
            score+=1;
            console.log(score);

        }
        else{
            setAnswerState(2);
            chooseButton.style.border='3px solid lightcoral';
            answerElement.style.backgroundColor='#9dff9a';


        }

    }
    const onNextClick = () => {
        if(pageState===false){
            return ``
        }
        setPageState(false);
        setAnswerState(0);
        setPageNumState(pageNumState+1);
        let array=['0','1','2','3'];
        array.map(function (i){
            document.getElementById(i).style.backgroundColor='#ffffff';
            document.getElementById(i).style.border='3px solid #143365';
        });

    }


    return (
        <DefaultWrapper>
                    <QuizQuestion num={pageNumState+1} question={dataState===null? 'data is null':dataState[pageNumState].title}/>
                    <img src={pageState? (answerState===1 ? CorrectImg:WrongImg) : QuizImg} style={{width:130,paddingLeft : 180}}/>
                    <div >
                        <QuizOptionButton onClick={onOptionClick} id='0' index='A' text={dataState===null? 'data is null':dataState[pageNumState].option[0]}></QuizOptionButton>
                        <QuizOptionButton onClick={onOptionClick} id='1' index='B' text={dataState===null? 'data is null':dataState[pageNumState].option[1]}></QuizOptionButton>
                        <QuizOptionButton onClick={onOptionClick} id='2' index='C' text={dataState===null? 'data is null':dataState[pageNumState].option[2]}></QuizOptionButton>
                        <QuizOptionButton onClick={onOptionClick} id='3' index='D' text={dataState===null? 'data is null':dataState[pageNumState].option[3]}></QuizOptionButton>
                    </div>
                    {pageState&&<QuizSolution solution={dataState===null? 'data is null':dataState[pageNumState].solution}/>}

            <QuizNextButton onClick={onNextClick} title="다음 문제"/>
            <QuizPageNum num={pageNumState+1}/>
        </DefaultWrapper>


    );
}

export default QuizPage;