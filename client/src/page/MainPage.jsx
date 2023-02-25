import PuAng from '../푸앙_사랑.png'
import DefaultButton from "../component/ui/DefaultButton";
import styled from "styled-components";
import MainTitle from "../component/main/MainTitle";
import ButtonGroup from "../component/ui/ButtonGroup";
import VerticalAlignCenterWrapper from "../component/ui/VerticalAlignCenterWrapper";
import {useNavigate} from "react-router-dom";
import DefaultWrapper from "../component/ui/DefaultWrapper";
import BSLog from "../util/BSLog";

function MainPage(props) {
    const navigate = useNavigate();

    BSLog.info("메인화면입니다.");

    const rankClickHandler = () => {
        navigate('/ranking');
    };

    const quizStartClickHandler = () => {
        navigate('/select');
    }

    return (
        <VerticalAlignCenterWrapper>
            <DefaultWrapper>
                <MainTitle />
                <img src={PuAng} style={{ width: 200}} />
                <ButtonGroup>
                    <DefaultButton onClick={rankClickHandler} title='랭킹 보기' />
                    <DefaultButton onClick={quizStartClickHandler} title='퀴즈 풀기' />
                </ButtonGroup>
            </DefaultWrapper>
        </VerticalAlignCenterWrapper>
    );
}

export default MainPage;