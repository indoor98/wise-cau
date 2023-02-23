import React from "react"
import styled from "styled-components"
import MainTitleItem from "./MainTitleItem"

const Wrapper = styled.div`
    width:250px;
    margin:30px 0;
    color: #6BBEE2;
    font-size: 40px;
    font-weight: 600;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`

function MainTitle(props) {
    return (
        <Wrapper>
            <MainTitleItem content='슬기로운'/>
            <MainTitleItem content='중앙대'/>
            <MainTitleItem content='생활'/>
        </Wrapper>
    );
}

export default MainTitle;