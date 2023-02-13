import React from "react"
import styled from "styled-components"
import TitleItem from "./TitleItem"

const Wrapper = styled.div`
    width:250px;
    margin:30px 0;
    color: #6BBEE2;
    font-size: 40px;
    font-weight: 600;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`

function Title(props) {

    return (
        <Wrapper>
            <TitleItem content='슬기로운'/>
            <TitleItem content='중앙대'/>
            <TitleItem content='생활'/>
        </Wrapper>
    );
}

export default Title;