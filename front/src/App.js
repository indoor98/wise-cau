import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from './page/MainPage';

import styled from 'styled-components';
import RankingPage from "./page/RankingPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/rank' element={<RankingPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
