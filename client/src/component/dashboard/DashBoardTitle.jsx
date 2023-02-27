import styled from "styled-components";

const Wrapper = styled.div`
  font-size:25px;
  color:black;
  margin-top:15px;
`
const DashBoardTitle = (props) => {

    return (
        <Wrapper>
            {props.title}
        </Wrapper>
    );
}

export default DashBoardTitle;