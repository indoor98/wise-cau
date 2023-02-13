import PuAng from '../푸앙_사랑.png'
import DefaultButton from "../component/ui/DefaultButton";
import styled from "styled-components";
import Title from "../component/main/Title";
import ButtonGroup from "../component/ui/ButtonGroup";
import VerticalAlignCenterWrapper from "../component/ui/VerticalAlignCenterWrapper";

const Wrapper = styled.div`
    width:100%;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    align-items: center;
`
function MainPage(props) {

    return (
        <VerticalAlignCenterWrapper>
            <Wrapper>
                <Title ></Title>
                <img src={PuAng} style={{ width: 200}}>
                </img>
                <ButtonGroup>
                    <DefaultButton title='정보탐색' />
                    <DefaultButton title='퀴즈풀기' />
                </ButtonGroup>
            </Wrapper>
        </VerticalAlignCenterWrapper>

    );
}

export default MainPage;