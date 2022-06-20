import React from "react";

const DropdownDB = ({ question }) => {
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
        <select>
          {choice.map((i, index) => {
            return <option>{choice[index]}</option>;
          })}
        </select>
      </div>
    );
  }
};

export default DropdownDB;
