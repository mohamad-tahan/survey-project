import React, { useState } from "react";
import Navbar from "./Navbar";
const AddSurvey = () =>{
    const [name, setName] = useState('');
    console.log(name);
const AddSurv = async() => {
    // e.preventDefault();
    const res = await fetch("http://127.0.0.1:8000/api/add_survey", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({name:name,}),
  });
};
 
    return (
        
        <div>
 <form className="add-form" >
         <Navbar />
        <div className="form-control">
          <label>Survey Name</label>
          <input
            type="text"
            placeholder={"Name"}
            value = {name}
            onChange={(e) => {setName(e.target.value);
            }}
          />
        </div>
  
    
        <button onClick = {() => {AddSurv()}}> Add</button>
      </form>
        </div>
       
     
    );

        }
  export default AddSurvey;
  