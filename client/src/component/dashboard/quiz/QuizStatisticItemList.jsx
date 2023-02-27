import styled from "styled-components";
import QuizStatisticItem from "./QuizStatisticItem";

const Wrapper = styled.div`
  background-color: #eee;
  display: flex;
  flex-direction: column;
  width: 1100px;
  height: 600px;
  flex-wrap: wrap;
  overflow: scroll;
`;
const QuizStatisticItemList = (props) => {
    return (
        <Wrapper>
            {props.items.map(item => {
                return(
                <QuizStatisticItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    exposure={item.exposure}
                    correct={item.correct}
                />);
            })}
        </Wrapper>
    );
}

export default QuizStatisticItemList;