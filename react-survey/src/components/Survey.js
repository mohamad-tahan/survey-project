
import React, { useState } from "react";

import AddSurvey from './AddSurvey';
import TextType from './TextType';
import SelectType from './SelectType';
import RadioType from './RadioType';
import Checkbox from './Checkbox';
import DateType from './DateType';
import EmailType from './EmailType';
import Navbar from "./Navbar";

function Survey(){
    return(
    <div>
        <center>
            <Navbar />
            <br/>
        <TextType /> 
        <br/>
        <SelectType />
        <br/>
        <RadioType />
        <br/>
        <Checkbox /> 
        <br/>
    
        </center>


    </div>
    )
}

export default Survey;