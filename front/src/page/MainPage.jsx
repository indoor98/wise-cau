import PuAng from '../푸앙_사랑.png'
import DefaultButton from "../component/ui/DefaultButton";
import styled from "styled-components";
import MainTitle from "../component/main/MainTitle";
import ButtonGroup from "../component/ui/ButtonGroup";
import VerticalAlignCenterWrapper from "../component/ui/VerticalAlignCenterWrapper";
import {useNavigate} from "react-router-dom";

const Wrapper = styled.div`
    width:100%;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    align-items: center;
`
function MainPage(props) {
    const navigate = useNavigate();

    const rankClickHandler = () => {
        navigate('/rank');
    };

    return (
        <VerticalAlignCenterWrapper>
            <Wrapper>
                <MainTitle ></MainTitle>
                <img src={PuAng} style={{ width: 200}}>
                </img>
                <ButtonGroup>
                    <DefaultButton onClick={rankClickHandler} title='순위' />
                    <DefaultButton title='퀴즈풀기' />
                </ButtonGroup>
            </Wrapper>
        </VerticalAlignCenterWrapper>

    );
}

export default MainPage;