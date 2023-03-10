import VerticalAlignCenterWrapper from "../component/ui/VerticalAlignCenterWrapper";
import DefaultWrapper from "../component/ui/DefaultWrapper";
import Title from "../component/ui/Title";
import NotPerfectScorePuangImg from '../푸앙_밤샘.png';
import PerfectScorePuangImg from '../푸앙_의복학위복.png';
import ButtonGroup from "../component/ui/ButtonGroup";
import DefaultButton from "../component/ui/DefaultButton";
import {useLocation, useNavigate} from "react-router-dom";
import BSLog from "../util/BSLog";
import axios from "axios";

const ResultImg = (props) => {

    const imgByScore = props.isPerfect ? PerfectScorePuangImg : NotPerfectScorePuangImg;
    const height = props.isPerfect ? 300 : 300;

    return (
        <img src={imgByScore} alt="" style={{width: 250, height: height}}/>
    );
}

const ResultParagraph = (props) => {
    const content = props.isPerfect ?
        '축하푸앙'
        :
        "       아쉽푸앙ㅜㅜ\n다음엔 만점 받자푸앙";

    return (
        <p style={{fontSize:25, whiteSpace: "pre-wrap", marginBottom:0}}>{content}</p>
    );
}
const ResultPage = () => {

    const navigate = useNavigate();
    const location=useLocation();
    const state=location.state;
    let score;
    BSLog.info(state);
    if(state === null) {
        score = 0;
    } else {
        score = state.result;
    }

    const isPerfect = score === 10;

    const rankingClickHandler = () => {
        axios.post("/api/statistic/request",{path:'/ranking'});
        navigate("/ranking");
    }

    const homeClickHandler = () => {
        axios.post("/api/statistic/request",{path:'/'});
        navigate("/");
    }

    return (
        <VerticalAlignCenterWrapper>
            <DefaultWrapper>
                <Title>당신의 점수 : {score}점</Title>
                <ResultImg isPerfect={isPerfect}/>
                <ResultParagraph isPerfect={isPerfect}/>
                <ButtonGroup>
                    <DefaultButton title='랭킹 보기' onClick={rankingClickHandler}></DefaultButton>
                    <DefaultButton title='처음으로' onClick={homeClickHandler}></DefaultButton>
                </ButtonGroup>
            </DefaultWrapper>
        </VerticalAlignCenterWrapper>
    );
}

export default ResultPage;