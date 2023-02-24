import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from './page/MainPage';

import styled from 'styled-components';
import RankingPage from "./page/RankingPage";
import SelectCollegePage from "./page/SelectCollegePage";
import QuizPage from "./page/QuizPage";
import NotFoundPage from "./page/NotFoundPage";
import ResultPage from "./page/ResultPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/ranking' element={<RankingPage/>}/>
                <Route path='/select' element={<SelectCollegePage/>}/>
                <Route path='/quiz' element={<QuizPage />}/>
                <Route path='/result' element={<ResultPage />}/>
                <Route path='/*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
