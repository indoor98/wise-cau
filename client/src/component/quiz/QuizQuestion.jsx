import React from "react";
import styled from "styled-components";


const Question_style=styled.span`
  width:250px;
  flex-direction:column;
  margin-top: 50px;
  
  font-size:15px;

`

function QuizQuestion(props){
    const num=props.num;
    const question=props.question;
    return (

            <Question_style>
                Q{num}. {question}
            </Question_style>


    );
}

export default QuizQuestion;