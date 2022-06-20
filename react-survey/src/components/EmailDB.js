import React from "react";

const EmailDB = ({ question }) => {
  //    console.log(question)
  if (question.type === "email") {
    return (
      <div>
      <h3>  {question.question} </h3>
        
        <input type="email" />
      </div>
    );
  }
};

export default EmailDB;
