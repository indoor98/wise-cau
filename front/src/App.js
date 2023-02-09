import './App.css';
import MainPage from './page/MainPage';

import styled from 'styled-components';
const Wrapper = styled.div`
  display:flex;
  align-items: center;
  width:100vw;
  height:100vh
`; 

function App() {
  return (
    <Wrapper>
      <MainPage />
    </Wrapper>
  );
}

export default App;
