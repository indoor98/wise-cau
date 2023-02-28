import styled from "styled-components";
import DefaultWrapper from "../ui/DefaultWrapper";
import RequestStatisticItemList from "./RequestStatisticItemList";

const Wrapper = styled.div`
  width:500px;
  height:550px;
  border-radius:15px;
  background-color:lightgray;
  margin:30px;
`

const Title = styled.div`
  margin-top:10px;
  text-align:center;
  font-size:20px;
  margin-bottom:10px;
`
const RequestStatisticSection = (props) => {
    const items = props.items;
    let sum = 0;
    items.forEach(item => {
        sum += item.count;
    });

    return (
        <Wrapper>
            <Title>
                {props.title} <span style={{fontSize:18,color:"forestgreen"}}>(총 {sum}회)</span>
            </Title>
            <RequestStatisticItemList
                items={props.items}
            />
        </Wrapper>
    );
};

export default RequestStatisticSection;