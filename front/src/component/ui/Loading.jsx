import {keyframes} from '@emotion/react';
import styled from "styled-components";

const spin = keyframes`
    to {
      transform: rotate(360deg);
    }
`;

const Container = styled.div`
  width: 49px;
`;

const LoadingSpinner = styled.div`
  display:block;
  width:35px;
  height:35px;
  border: 7px solid red;
  animation: ${spin} 1s linear infinite;
`;


function Loading() {
    return (
        <Container>
            <LoadingSpinner />
        </Container>
    )
}



export default Loading;



