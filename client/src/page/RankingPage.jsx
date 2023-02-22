import VerticalAlignCenterWrapper from "../component/ui/VerticalAlignCenterWrapper";
import styled from "styled-components";
import ButtonGroup from "../component/ui/ButtonGroup";
import DefaultButton from "../component/ui/DefaultButton";
import {useNavigate} from "react-router-dom";
import Title from "../component/ui/Title";
import RankItemList from "../component/rank/RankItemList";
import axios from "axios";
import {useEffect, useState} from "react";
import Loader from "../component/ui/Loader";
import DefaultWrapper from "../component/ui/DefaultWrapper";
import PointInformation from "../component/rank/PointInformation";
import ErrorUtil from "../util/ErrorUtil";
import Error from "../component/ui/Error";



function RankingPage() {
    const navigate = useNavigate();
    const [showPointInformation, setShowPointInformation] = useState(false);
    const [rankingData, setRankingData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError] = useState(ErrorUtil.OK);

    useEffect(() => {
        axios.get('http://localhost:4000/api/ranking').then(response => {
            setRankingData(response.data.result);
            setIsLoading(false);
        }).catch(databaseError => {
            setError(ErrorUtil.NETWORK_ERROR);
        });
    }, []);

    const homeClickHandler = () => {
        navigate('/');
    };

    const togglePointInformation = () => {
        setShowPointInformation(prevState => !prevState);
    }

    //만약 로딩중이면 Loader를, 로딩이 끝났다면 RankItemList를 렌더링
    let content = isLoading ?
        <Loader/>
        :
        <div>
            <RankItemList rankingData={rankingData}/>
            <PointInformation
                isOpen={showPointInformation}
                toggle={togglePointInformation}
            />
        </div>;

    //로딩 여부와 상관없이, Error 가 발생했으면 에러 컴포넌트를 렌더링
    content = error.isError ? <Error error={error} /> : content;



    return (
        <DefaultWrapper>
            <Title>퀴즈 순위</Title>
            {content}

            <ButtonGroup>
                <DefaultButton title='처음으로' onClick={homeClickHandler}/>
            </ButtonGroup>

        </DefaultWrapper>
    );
}

export default RankingPage;