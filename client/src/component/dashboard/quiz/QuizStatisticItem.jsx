import styled from "styled-components";

const Wrapper = styled.div`
  width:366px;
  height:56px;
  border : 1px solid black;
`

const QuizStatisticItem = (props) => {

    const {id,title,exposure,correct} = props;

    const filteredTitle = title.substring(0,23)+'...';
    return (
        <Wrapper>
            문제 ID: {id}
            <br/>문제: {filteredTitle}
            <br/> 정답/노출 : {correct}/{exposure} <span style={{color:'firebrick'}}>({exposure !== 0 ? correct/exposure*100 : NaN}%)</span>
        </Wrapper>
    );
};

export default QuizStatisticItem;