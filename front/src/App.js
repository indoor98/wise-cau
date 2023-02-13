import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from './page/MainPage';

import styled from 'styled-components';
import RankPage from "./page/RankPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/rank' element={<RankPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
