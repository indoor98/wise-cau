import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  margin-bottom:20px;
`;

const MainTitle = styled.h1`
  color: #143365;
  font-weight:600;
  margin-bottom: 0px;
`;
function Title(props) {

    return (
        <Wrapper>
            <MainTitle>{props.children}</MainTitle>
            <div>{props.subtitle}</div>
        </Wrapper>
    );
}

export default Title;