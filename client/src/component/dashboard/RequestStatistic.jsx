import styled from "styled-components";
import Title from "../ui/Title";
import DashBoardTitle from "./DashBoardTitle";
import DefaultWrapper from "../ui/DefaultWrapper";
import RowWrapper from "./RowWrapper";
import RequestStatisticSection from "./RequestStatisticSection";

const Wrapper = styled.div`
  background-color: white;
  width: 1150px;
  height: 650px;
  margin-top:40px;
  border-radius:15px;
`;

const RequestStatistic = (props) => {
    return (
        <Wrapper>
            <DefaultWrapper>
                <DashBoardTitle
                    title='주소 요청 현황'
                />
                <RowWrapper>
                    <RequestStatisticSection
                        title='주소 요청 현황'
                    />
                    <RequestStatisticSection
                        title='API 요청 현황'
                    />
                </RowWrapper>
            </DefaultWrapper>
        </Wrapper>
    );
}

export default RequestStatistic;