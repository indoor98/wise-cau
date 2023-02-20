import React from "react";
import styled from "styled-components";

const PageNum_style=styled.div`
  width:250px;
  text-align: center;
  flex-direction:column;
  font-size:12px;
  color: grey;
`

function QuizPageNum(props){
    const num=props.num;
    return(
        <PageNum_style>
            {num}/10
        </PageNum_style>
    );
}

export default QuizPageNum;