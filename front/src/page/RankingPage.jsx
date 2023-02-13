import VerticalAlignCenterWrapper from "../component/ui/VerticalAlignCenterWrapper";
import styled from "styled-components";
import ButtonGroup from "../component/ui/ButtonGroup";
import DefaultButton from "../component/ui/DefaultButton";
import {useNavigate} from "react-router-dom";
import Title from "../component/ui/Title";
import RankItem from "../component/rank/RankItem";
import RankItemList from "../component/rank/RankItemList";
import axios from "axios";
import {useEffect, useState} from "react";
import Puang from '../푸앙_기본형.png'
import Loading from "../component/ui/Loading";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0;
`
function RankingPage() {
    const navigate = useNavigate();
    const [rankingData,setRankingData] = useState();

    useEffect(() => {
        axios.get('http://localhost:4000/api/ranking').then(response => {
            setRankingData(response.data.results);
        });
    },[])

    const homeClickHandler = () => {
        navigate('/');
    };

    return (
            <Wrapper>
                <Title subtitle='(만점자 수)'>퀴즈 순위</Title>
                {rankingData === undefined ?
                    <Loading />
                :
                    <RankItemList rankingData={rankingData} />
                }
                
                <ButtonGroup>
                    <DefaultButton title='처음으로' onClick={homeClickHandler}></DefaultButton>
                    <DefaultButton title='다시풀기'></DefaultButton>
                </ButtonGroup>
            </Wrapper>
    );
}

export default RankingPage;