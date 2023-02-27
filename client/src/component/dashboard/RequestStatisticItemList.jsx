import styled from "styled-components";
import RequestStatisticItem from "./RequestStatisticItem";

const Wrapper = styled.div`
  width: 450px;
  height: 475px;
  background-color: white;
  margin-left:25px;
`
const RequestStatisticItemList = (props) => {

    return (
        <Wrapper>
            <RequestStatisticItem/>
            <RequestStatisticItem/>
            <RequestStatisticItem/>
            <RequestStatisticItem/>
        </Wrapper>
    );
}

export default RequestStatisticItemList;