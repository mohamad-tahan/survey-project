import React, { useState} from "react";
import SelectType from "./SelectType";
function EmailType(){
    const [input, setInput] = useState('');
    console.log(input);

    const AddEmail = async () => {
        const res = await fetch("http://127.0.0.1:8000/api/add_question", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "Authorization": "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTY1NTU4MDc4MiwiZXhwIjoxNjU1NTg0MzgyLCJuYmYiOjE2NTU1ODA3ODIsImp0aSI6ImQ3MTZuNmdvRXZzZXg1azkiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.66P0tR9zj-Q6m_5Fj7mgejxtCwiO_6TCO65_lNSz7XA"
          },
          body: JSON.stringify({
            question:input,
            type: "email",
            survey_id:1,
          }),
        },alert("Question Added"));
    }

    return(
        <div>
            <h5>EmailType Question</h5>
            <input type="email" id="email" value={input} onInput={e => setInput(e.target.value)}/>
            <button className="btnAdmin" onClick={()=>{AddEmail()}}>Add Email</button>
            
            {/* <SelectType/>  */}
        </div>
    )
}
export default EmailType;

