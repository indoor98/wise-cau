import styled from "styled-components";

const Wrapper = styled.div`
    margin: 25px 0;
    display:flex;
    flex-direction: row;
`;
function ButtonGroup(props) {
    const {children} = props;

    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default ButtonGroup;
