import React from "react";
import styled from "styled-components";

const Solution_style=styled.span`
  width:250px;
  flex-direction:column;
  margin-top: 10px;
  
  font-size:15px;

`

function QuizSolution(props){
    const solutionText=props.solution;
    return(
        <Solution_style>
            해설 : {solutionText}
        </Solution_style>
    );
}

export default QuizSolution;