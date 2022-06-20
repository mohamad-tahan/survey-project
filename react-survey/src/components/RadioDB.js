import React, { useState } from "react";

const RadioDB = ({ question }) => {
  const [input, setInput] = useState('');

console.log(input);
console.log(question.id);

  //    console.log(question)

  if (question.type === "radio") {
    var choices = question.choices;
    var choi = JSON.parse(choices);

    Object.keys(choi).map(function (_) {
      return choi[_];
    });

    var choice = Object.values(choi);
    console.log(choice);

    //console.log(arrayy)
 
    return (
      <div>
        <label> {question.question} </label>
        <br/>  
        {choice.map((i, index) => {
           
      
           return <label><input type="radio" name={choice[index]} value={choice[index]}  onInput={e => setInput(e.target.value)}/>    {choice[index]} <br/> </label> 
          })}
 <br/>
      </div>
    );
  }
};

export default RadioDB;
