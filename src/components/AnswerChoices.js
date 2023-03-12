function AnswerChoices(props) {
  return <div class="“answer-choice">
    {/* <p>{props.answer}</p> */}
    {props.answer.map((answer,index)=> <p onClick ={()=> props.setDisplay(index)} >{answer}</p>)}
  </div>;
}

function placeHolder(answer){
  return <p>{answer}</p>
}
export default AnswerChoices;

