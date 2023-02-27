import RequestStatisticItemList from "./RequestStatisticItemList";
import DefaultWrapper from "../ui/DefaultWrapper";
import DashBoardTitle from "./DashBoardTitle";
import RowWrapper from "./RowWrapper";
import RequestStatisticSection from "./RequestStatisticSection";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: white;
  width: 1150px;
  height: 650px;
  margin-top:40px;
  border-radius:15px;
`;
const QuestionStatistic = (props) => {
    return (
        <Wrapper>
            <DefaultWrapper>
                <DashBoardTitle
                    title='문제 통계 현황'
                />
                <RowWrapper>
                    <RequestStatisticSection />
                    <RequestStatisticSection />
                </RowWrapper>
            </DefaultWrapper>
        </Wrapper>
    );
}

export default QuestionStatistic;