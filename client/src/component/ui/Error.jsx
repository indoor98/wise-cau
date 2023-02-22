import Puang from "../../푸앙_밤샘.png";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align:center;
`
const Error = (props) => {
    const error = props.error;

    return (
        <Wrapper>
            <img style={{width:150,height:160}} src={Puang} alt="에러 이미지"/>
            <p>{error.message}</p>
        </Wrapper>
    );
}

export default Error;