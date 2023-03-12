function NextQuestion(props) {
  return (
    <div>
      <button onClick={props.nextQuestion}>Next Question</button>
      <p>Question {props.curQuestion}</p>
    </div>
  );
}
export default NextQuestion;
