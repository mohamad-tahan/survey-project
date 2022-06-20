import React, { useState } from "react";

const EmailDB = ({ question }) => {
  const [input, setInput] = useState('');
console.log(input);
console.log(question.id);
  //    console.log(question)
  if (question.type === "email") {
    return (
      <div>
      <h3>  {question.question} </h3>
        
        <input type="email" value={input} onInput={e => setInput(e.target.value)} />
      </div>
    );
  }
};

export default EmailDB;
