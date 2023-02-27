import styled from "styled-components";
import Title from "../ui/Title";
import DashBoardTitle from "./DashBoardTitle";
import DefaultWrapper from "../ui/DefaultWrapper";
import RowWrapper from "./RowWrapper";
import RequestStatisticSection from "./RequestStatisticSection";
import {useEffect, useState} from "react";
import axios from "axios";
import ErrorUtil from "../../util/ErrorUtil";
import Loader from "../ui/Loader";
import Error from "../ui/Error";

const Wrapper = styled.div`
  background-color: white;
  width: 1150px;
  height: 650px;
  margin-top:40px;
  border-radius:15px;
`;

const RequestStatistic = (props) => {

    const [isLoading,setIsLoading] = useState(true);
    const [requestStatistic, setRequestStatistic] = useState(null);
    const [error, setError] = useState(ErrorUtil.OK);

    useEffect(() => {
        axios.get('/api/statistic/request').then(response => {
            setRequestStatistic(response.data.result);
            console.log(requestStatistic);
            setIsLoading(false);
        }).catch(databaseError => {
            setError(ErrorUtil.NETWORK_ERROR);
        });
    }, []);

    let content = isLoading ? <Loader/>
        :
        <>
            <RequestStatisticSection
                title='주소 요청 현황'
                items={requestStatistic}
            />
            <RequestStatisticSection
                title='API 요청 현황'
                items={requestStatistic}
            />
        </>;

    content = error.isError ? <Error error={error} /> : content;


    return (
        <Wrapper>
            <DefaultWrapper>
                <DashBoardTitle
                    title='주소 노출 현황'
                />
                <RowWrapper>
                    {content}
                </RowWrapper>
            </DefaultWrapper>
        </Wrapper>
    );
}

export default RequestStatistic;