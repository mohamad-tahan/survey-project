import React, { useState } from "react";
import Navbar from "./Navbar";
import SelectType from "./SelectType";
const AddQuestions = () =>{
    const [counterText, setCounterText] = useState(0);
    const [counterSelect, setCounterSelect] = useState(0);
    const handleTextClick = () => {
        setCounterText(counterText + 1);
            console.log(counterText);
          };
          const handleSelectClick = () => {
            setCounterSelect(counterSelect + 1);
            console.log(counterSelect);
          };
    return(
        <div className="questions">
            <center>
            <Navbar />
        <div className="textType">
        <br/>
            <h5>Add Text Question
            <button onClick={handleTextClick}> Add Text</button>
            </h5>
            {Array.from(Array(counterText)).map((c, index) => {
         return( <div> <input key={c} id ={index} type="text" placeholder={"Text field"}  /> <br/> </div > );
      })}
            </div>

            <div className="selectType">
            <br/><br/>
            <h5>Enter SELECT 
            <button onClick={handleSelectClick}> Add Select</button>
           
            </h5>
            <br/> 
            {Array.from(Array(counterSelect)).map((c, index) => {
         return( <div> <SelectType/>  <br/></div > );
      })}
             
            </div>
            </center>
        </div>
            )
}
export default AddQuestions;