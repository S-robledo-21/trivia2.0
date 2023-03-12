import React, { useState } from "react";
//import "./App.css";
import AnswerChoices from "./AnswerChoices";

function Question(props) {
  return (
    <div>
      <p>{props.question}</p>
      {/* <p>{props.answerChoices}</p> */}
      <AnswerChoices answer = {props.answerChoices} setDisplay = {props.setDisplay}/>
      
    </div>
  );
}

export default Question;
