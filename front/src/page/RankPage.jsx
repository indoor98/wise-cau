import VerticalAlignCenterWrapper from "../component/ui/VerticalAlignCenterWrapper";
import styled from "styled-components";
import ButtonGroup from "../component/ui/ButtonGroup";
import DefaultButton from "../component/ui/DefaultButton";
import {useNavigate} from "react-router-dom";
import Title from "../component/ui/Title";
import RankItem from "../component/rank/RankItem";
import RankItemList from "../component/rank/RankItemList";

const Wrapper = styled.div`
    width:100%;
    margin: 0 auto;
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-top: 20px;
`
function RankPage() {
    const navigate = useNavigate();

    const homeClickHandler = () => {
        navigate('/');
    };

    return (
            <Wrapper>
                <Title subtitle='(만점자 수)'>퀴즈 순위</Title>
                <RankItemList />
                <ButtonGroup>
                    <DefaultButton title='처음으로' onClick={homeClickHandler}></DefaultButton>
                    <DefaultButton title='다시풀기'></DefaultButton>
                </ButtonGroup>
            </Wrapper>
    );
}

export default RankPage;