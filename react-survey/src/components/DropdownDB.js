import React, { useState } from "react";

const DropdownDB = ({ question }) => {
  const [input, setInput] = useState('');
  console.log(input);
  console.log(question.id);
  //    console.log(question)

  if (question.type === "select") {
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
      <h3>  {question.question} </h3>
        <select onInput={e => setInput(e.target.value)}>
          {choice.map((i, index) => {
            return <option value={choice[index]}  >{choice[index]}</option>;
          })}
        </select>
      </div>
    );
  }
};

export default DropdownDB;
