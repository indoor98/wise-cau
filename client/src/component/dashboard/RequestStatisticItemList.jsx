import styled from "styled-components";
import RequestStatisticItem from "./RequestStatisticItem";

const Wrapper = styled.div`
  width: 450px;
  height: 485px;
  background-color: white;
  margin-left:25px;
  border-radius:10px;
`
const RequestStatisticItemList = (props) => {

    return (
        <Wrapper>
            {props.items.map(item=> {
              return (
                  <RequestStatisticItem
                    path = {item.pathName}
                    count = {item.count}
                    key = {item.id}
                  />
              )
            })
            }
        </Wrapper>
    );
}

export default RequestStatisticItemList;