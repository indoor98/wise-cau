import styled from "styled-components";
const Wrapper = styled.div`
  justify-content: center;
`
const Content = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

export default Content;