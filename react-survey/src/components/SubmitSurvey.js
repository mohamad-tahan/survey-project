import React, { useState } from "react";


const SubmitSurvey = (props) => {

    const AddAnswers = async () => {
        const res = await fetch("http://127.0.0.1:8000/api/add_answer", {
          method: "POST",
          body: JSON.stringify({
            answer:props,
            question_id: 1,
            user_id:1,
          }),
        });
    }


  return (
  
  <div>

<button className="submit" onClick={()=>{AddAnswers()}}>Submit</button>
    
    
   
    </div>
    
  


  )


  
}

export default SubmitSurvey;
