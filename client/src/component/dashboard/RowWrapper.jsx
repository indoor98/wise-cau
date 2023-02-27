import styled from "styled-components";

const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
`
const RowWrapper = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

export default RowWrapper;