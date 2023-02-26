import QuizOptionButton from "./QuizOptionButton";
import React from "react";

function QuizOptionButtonList(props){
    const {options,onOptionClick} = props;
    const indexArray=['A','B','C','D'];
    return(
        <div>
            {
                options.map((op,index)=>{
                    return <QuizOptionButton onClick={onOptionClick} id={index} index={indexArray[index]} text={op}></QuizOptionButton>
                })
            }
        </div>
    )


}


export default QuizOptionButtonList;