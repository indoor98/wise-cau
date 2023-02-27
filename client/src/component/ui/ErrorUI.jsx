import QuizOptionButton from "../quiz/QuizOptionButton";
import React from "react";
import Error from "./Error";
import DefaultButton from "./DefaultButton";


function ErrorUI (props){

    const {error,clickHandler}=props;

    return(
        <div style={{textAlign: 'center'}}>
            <Error error={error}/>
            <DefaultButton title='이전으로' onClick={clickHandler}/>
        </div>);
}

export default ErrorUI;