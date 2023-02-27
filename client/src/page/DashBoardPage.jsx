import VerticalAlignCenterWrapper from "../component/ui/VerticalAlignCenterWrapper";
import DefaultWrapper from "../component/ui/DefaultWrapper";
import {useState} from "react";
import DashBoard from "../component/dashboard/DashBoard";
import axios from "axios";
import Navigation from "../component/dashboard/navigate/Navigation";

const DashBoardPage = () => {

    const root = document.getElementById('root');
    root.style.backgroundColor = 'lightgray';


    return (
            <VerticalAlignCenterWrapper>
                <DefaultWrapper>
                    <DashBoard></DashBoard>
                </DefaultWrapper>
            </VerticalAlignCenterWrapper>
    );
}

export default DashBoardPage;