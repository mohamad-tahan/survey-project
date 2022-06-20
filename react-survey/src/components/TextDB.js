import React from "react";


const TextDB = ({ question }) => {
//    console.log(question)
if(question.type ==="text"){
  return (
  
  <div>
    <h3>  {question.question} </h3>
    
    <input type="text" />
    
    
   
    </div>
    
  


  )


  }
}

export default TextDB;
