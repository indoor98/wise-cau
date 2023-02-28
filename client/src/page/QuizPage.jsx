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
import quizOptionButton from "../component/quiz/QuizOptionButton";
import ErrorUI from "../component/ui/ErrorUI";
import QuizOptionButtonList from "../component/quiz/QuizOptionButtonList";
import BSLog from "../util/BSLog";

const SelectState = {
    UNSELECTED: 0,
    CORRECT: 1,
    WRONG: 2
};
function QuizPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [pageState,setPageState] = useState(false);
    const [quizState,setQuizState]=useState(null);
    const [answerState,setAnswerState]=useState(SelectState.UNSELECTED);
    const [pageNumState,setPageNumState]=useState(0);
    const [isLoading,setIsLoading]=useState(true);
    const [networkError, setNetworkError] = useState(ErrorUtil.OK);
    const [scoreState,setScoreState]=useState(0);
    useEffect(() => {
        axios.get('/api/quizzes').then(response => {
            BSLog.info(response.data.result);
            setQuizState(QuizConverter.convert(response.data.result));
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
        const answerElement=document.getElementById(quizState[pageNumState].answer);

        if (choose==quizState[pageNumState].answer){
            BSLog.info(quizState[pageNumState].id);
            axios.post('/api/statistic/quiz/correct',{quizId:quizState[pageNumState].id});
            setAnswerState(SelectState.CORRECT);
            setScoreState(scoreState+1);
        }
        else{
            setAnswerState(SelectState.WRONG);
            chooseButton.style.border='3px solid lightcoral';
        }
        answerElement.style.backgroundColor='#b0ffa3';
        answerElement.style.border='3px solid green';
    }
    const {state}=location;
    const onNextClick = () => {
        if (pageState === false) {
            return ``
        }
        setPageState(false);
        setAnswerState(SelectState.UNSELECTED);
        setPageNumState(pageNumState + 1);

        let array = ['0', '1', '2', '3'];
        array.map(function (i) {
            document.getElementById(i).style.backgroundColor = '#ffffff';
            document.getElementById(i).style.border = '3px solid grey';
        });
    }


    const onResultClick=()=>{

        const json={collegeId:state.selectedCollegeId};
        if (scoreState===10){
            axios.post('/api/results',json);
        }

        axios.post("/api/statistic/request",{path:'/result'});
        navigate('/result',{state: {result:scoreState}});

    }
    const backClickHandler = () => {
        axios.post("/api/statistic/request",{path:'/'});
        navigate('/');
    }
    const currentQuiz = !isLoading && quizState[pageNumState];
    let quizContent= isLoading?
        <Loader/>
        :
        <>
            <QuizQuestion num={pageNumState+1} question={currentQuiz.title}/>
            <img src={pageState? (answerState===SelectState.CORRECT ? CorrectImg:WrongImg) : QuizImg} style={{width:130,paddingLeft : 180}}/>
            <QuizOptionButtonList options={currentQuiz.option} onOptionClick={onOptionClick}/>
            {pageState &&
                <>
                <QuizSolution solution={currentQuiz.solution}/>
                <QuizNextButton onNextButtonClick={onNextClick} onResultButtonClick={onResultClick} pageNum={pageNumState}/>
                <QuizPageNum num={pageNumState+1}/>
                </>
            }
        </>;

    quizContent = state==null ? navigate('/select'):quizContent;
    quizContent = networkError.isError?
        <ErrorUI error={networkError} clickHandler={backClickHandler}/>
         : quizContent;

    if(!isLoading && pageState === false) {
        BSLog.info(quizState[pageNumState]);
        axios.post('/api/statistic/quiz/exposure',{quizId:quizState[pageNumState].id});
    }


    return (
        <DefaultWrapper>
            {quizContent}
        </DefaultWrapper>


    );
}

export default QuizPage;