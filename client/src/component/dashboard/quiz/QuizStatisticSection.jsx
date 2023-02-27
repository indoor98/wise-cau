import styled from "styled-components";
import QuizStatisticItemList from "./QuizStatisticItemList";

const Wrapper = styled.div`
  background-color:lightblue;
  width: 1100px;
  height:580px;
  border-radius: 15px;
`
const QuizStatisticSection = (props) => {
    return (
        <Wrapper>
            <QuizStatisticItemList
                items={props.items}
            />
        </Wrapper>
    );
}

export default QuizStatisticSection;

