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
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import Loader from "../component/ui/Loader";
import ErrorUtil from "../util/ErrorUtil";
import Error from "../component/ui/Error";
import DefaultButton from "../component/ui/DefaultButton";
import VerticalAlignCenterWrapper from "../component/ui/VerticalAlignCenterWrapper";
let score=0;
function QuizPage() {
    const navigate = useNavigate();
    const location=useLocation();
    const [pageState,setPageState] = useState(false);
    const [dataState,setDataState]=useState(null);
    const [answerState,setAnswerState]=useState(0);
    const [pageNumState,setPageNumState]=useState(0);
    const [isLoading,setIsLoading]=useState(true);
    const [networkError, setNetworkError] = useState(ErrorUtil.OK);

    useEffect(() => {
        axios.get('/api/quizzes').then(response => {
            console.log(response.data.result);
            setDataState(QuizConverter.convert(response.data.result));
            setIsLoading(false);
        }).catch(error=>{
            setNetworkError(ErrorUtil.NETWORK_ERROR);
        });
    }, []);

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
            chooseButton.style.border='3px solid green';
            score+=1;

        }
        else{
            setAnswerState(2);
            chooseButton.style.border='3px solid lightcoral';
            answerElement.style.backgroundColor='#b0ffa3';
            answerElement.style.border='3px solid green';

        }

    }
    const {state}=location;
    const onNextClick = () => {
        if(pageState===false){
            return ``
        }
        console.log(state)
        setPageState(false);
        setAnswerState(0);
        setPageNumState(pageNumState+1);
        let array=['0','1','2','3'];
        array.map(function (i){
            document.getElementById(i).style.backgroundColor='#ffffff';
            document.getElementById(i).style.border='3px solid grey';
        });



    }


    const onResultClick=()=>{

        const json={result:score,state};
        console.log(json);
        if (score===10){
            axios.post('/api/results',json);
        }

        navigate('/result',json);

    }
    const backClickHandler = () => {
        navigate('/');
    }

    let quizContent= isLoading?

        <Loader/>

        :
        <>
            <QuizQuestion num={pageNumState+1} question={dataState===null? 'data is null':dataState[pageNumState].title}/>
            <img src={pageState? (answerState===1 ? CorrectImg:WrongImg) : QuizImg} style={{width:130,paddingLeft : 180}}/>
            <div >
                <QuizOptionButton onClick={onOptionClick} id='0' index='A' text={dataState===null? 'data is null':dataState[pageNumState].option[0]}></QuizOptionButton>
                <QuizOptionButton onClick={onOptionClick} id='1' index='B' text={dataState===null? 'data is null':dataState[pageNumState].option[1]}></QuizOptionButton>
                <QuizOptionButton onClick={onOptionClick} id='2' index='C' text={dataState===null? 'data is null':dataState[pageNumState].option[2]}></QuizOptionButton>
                <QuizOptionButton onClick={onOptionClick} id='3' index='D' text={dataState===null? 'data is null':dataState[pageNumState].option[3]}></QuizOptionButton>
            </div>
            {pageState&&<QuizSolution solution={dataState===null? 'data is null':dataState[pageNumState].solution}/>}

            {pageNumState!=9 && pageState && <QuizNextButton onClick={onNextClick} title="다음 문제"/>}
            {pageNumState==9 && pageState && <QuizNextButton onClick={onResultClick} title="결과 확인"/>}
            {pageState && <QuizPageNum num={pageNumState+1}/>}
        </>;

    quizContent= state==null? navigate('/select'):quizContent;
    quizContent = networkError.isError?
        <div style={{textAlign: 'center',margin:'180px'}}>
            <Error error={networkError}/>
            <DefaultButton title='이전으로' onClick={backClickHandler}/>
        </div> : quizContent;



    return (
        <DefaultWrapper>
            {quizContent}
        </DefaultWrapper>


    );
}

export default QuizPage;