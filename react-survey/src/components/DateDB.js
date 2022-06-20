import React from "react";

const DateDB = ({ question }) => {
  //    console.log(question)
  if (question.type === "date") {
    return (
      <div>
       <h3>{question.question}</h3> 
    
        <input type="date" />
      </div>
    );
  }
};

export default DateDB;
