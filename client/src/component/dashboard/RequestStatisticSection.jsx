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

    console.log(props.items);
    return (
        <Wrapper>
            <Title>
                {props.title}
            </Title>
            <RequestStatisticItemList
                items = {props.items}
            />
        </Wrapper>
    );
}

export default RequestStatisticSection;