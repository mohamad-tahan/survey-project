import React, { useState } from "react";

const DateDB = ({ question }) => {
  const [input, setInput] = useState('');
console.log(input);
console.log(question.id);
  //    console.log(question)
  if (question.type === "date") {
    return (
      <div>
       <h3>{question.question}</h3> 
    
        <input type="date" value={input} onInput={e => setInput(e.target.value)} />
      </div>
    );
  }
};

export default DateDB;
