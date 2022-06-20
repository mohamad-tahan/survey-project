import React from "react";

const RadioDB = ({ question }) => {
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
        <h3>  {question.question} </h3>
        
        {choice.map((i, index) => {
           return <label><input type="radio" name="radiobuttons" value={choice[index]} />    {choice[index]} <br/> </label> 
          })}

      </div>
    );
  }
};

export default RadioDB;
