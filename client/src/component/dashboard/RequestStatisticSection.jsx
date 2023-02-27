import styled from "styled-components";
import DefaultWrapper from "../ui/DefaultWrapper";
import RequestStatisticItemList from "./RequestStatisticItemList";

const Wrapper = styled.div`
  width:500px;
  height:550px;
  border-radius:15px;
  background-color:peachpuff;
  margin:30px;
`

const Title = styled.div`
  margin-top:10px;
  text-align:center;
  font-size:20px;
  margin-bottom:10px;
`
const RequestStatisticSection = (props) => {
    return (
        <Wrapper>
            <Title>
                {props.title}
            </Title>
            <RequestStatisticItemList/>
        </Wrapper>
    );
}

export default RequestStatisticSection;