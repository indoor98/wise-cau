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



function RankingPage() {
    const navigate = useNavigate();
    const [showPointInformation, setShowPointInformation] = useState(false);
    const [rankingData, setRankingData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:4000/api/ranking').then(response => {
            setRankingData(response.data.result);
            setIsLoading(false);
        });
    }, []);

    const content = isLoading ? <Loader/> : <RankItemList rankingData={rankingData}/>;

    const homeClickHandler = () => {
        navigate('/');
    };

    const togglePointInformation = () => {
        setShowPointInformation(prevState => !prevState);
    }

    return (
        <DefaultWrapper>
            <Title>퀴즈 순위</Title>
            {content}
            <PointInformation
                isOpen={showPointInformation}
                toggle={togglePointInformation}
            />
            <ButtonGroup>
                <DefaultButton title='처음으로' onClick={homeClickHandler}/>
            </ButtonGroup>

        </DefaultWrapper>
    );
}

export default RankingPage;