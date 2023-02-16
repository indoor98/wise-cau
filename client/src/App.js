import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from './page/MainPage';

import styled from 'styled-components';
import RankingPage from "./page/RankingPage";
import SelectCollegePage from "./page/SelectCollegePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/ranking' element={<RankingPage/>}/>
                <Route path='/select' element={<SelectCollegePage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
