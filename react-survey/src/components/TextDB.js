import React, { useState } from "react";


const TextDB = ({ question }) => {
//    console.log(question)
const [input, setInput] = useState('');
console.log(input);
console.log(question.id);

if(question.type ==="text"){
  return (
  
  <div>
    <h3>  {question.question} </h3>
    
    <input type="text" value={input} onInput={e => setInput(e.target.value)} />
    
    
   
    </div>
    
  


  )


  }
}

export default TextDB;
