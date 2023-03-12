import React, { useState } from "react";
import "./App.css";
import Question from "../src/components/Question";
import NextQuestion from "../src/components/NextQuestion";
import data from "./sample_data.json";

function App() {
  let [currentQuestionNumber, setNumber] = useState(0);
  let [answerDisplayed, setDisplay] = useState(null);
  let [correctIndex, setIndex] = useState(0);
  function getCorrectAnswer(questionNum) {
    setIndex = data[questionNum].question.correct_choice_index;
    //setNumber = questionNum;
    return correctIndex;
  }
  function questionAnswered() {
    if (answerDisplayed == null) {
      return "Click an answer above.";
    } else if (answerDisplayed === getCorrectAnswer(currentQuestionNumber)) {
      return "Correct :)";
    } else {
      return "Incorrect >:(";
    }
  }
  function goToNextQuestion() {
    setNumber(currentQuestionNumber + 1);
    setDisplay(null);
  }
  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question
        question={data[currentQuestionNumber].question.text}
        answerChoices={data[currentQuestionNumber].question.choices}
        setDisplay={setDisplay}
      />
      <NextQuestion nextQuestion={goToNextQuestion} curQuestion ={currentQuestionNumber}/>
      <p>{questionAnswered()}</p>
      </div>
  );
}

export default App;
