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
import DefaultWrapper from "../component/ui/DefaultWrapper";

function RankingPage() {
    const navigate = useNavigate();
    const [rankingData,setRankingData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:4000/api/ranking').then(response => {
            setRankingData(response.data.results);
            setIsLoading(false);
        });
    }, []);

    let content = null;
    if(isLoading) {
        content = <Loading />;
    } else {
        content = <RankItemList rankingData={rankingData}/>;
    }

    const homeClickHandler = () => {
        navigate('/');
    };

    return (
            <DefaultWrapper>
                <Title subtitle='(만점자 수)'>퀴즈 순위</Title>
                {content}
                <ButtonGroup>
                    <DefaultButton title='처음으로' onClick={homeClickHandler}></DefaultButton>
                </ButtonGroup>
            </DefaultWrapper>
    );
}

export default RankingPage;