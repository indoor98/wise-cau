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

const PointInformation = styled.div`
  width: 200px;
  font-size: 12px;
  margin-top: 20px;
`;

function RankingPage() {
    const navigate = useNavigate();
    const [showPointInformation, setShowPoirtInformation] = useState(false);
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
        setShowPoirtInformation(prevState => !prevState);
    }

    return (
        <DefaultWrapper>
            <Title>퀴즈 순위</Title>
            {content}
            <PointInformation>
                <div onClick={togglePointInformation}>
                    ※포인트 집계 방식 {showPointInformation  ? '△':'▽'}
                </div>
                {showPointInformation &&
                    <p>
                        포인트 = 단과대 별 만점자 수
                        <br/>&times; (1 / 2023 단과대 별 신입생 수)
                        <br/>&times; 400
                    </p>
                }

            </PointInformation>

            <ButtonGroup>
                <DefaultButton title='처음으로' onClick={homeClickHandler}/>
            </ButtonGroup>

        </DefaultWrapper>
    );
}

export default RankingPage;