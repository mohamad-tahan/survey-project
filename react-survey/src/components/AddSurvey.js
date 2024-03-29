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
    <center>
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
  
    
        <button className="btnAdmin" onClick = {() => {AddSurv()}}> Add</button>
        </center>
      </form>
        </div>
       
     
    );

        }
  export default AddSurvey;
  