
import Login from './components/Login';
import Test from './components/Test';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddQuestions from './components/AddQuestions';
import Navbar from './components/Navbar';
import AddSurvey from './components/AddSurvey';
import TextType from './components/TextType';
import SelectType from './components/SelectType';
import RadioType from './components/RadioType';
import Checkbox from './components/Checkbox';
import DateType from './components/DateType';
import EmailType from './components/EmailType';
import Survey from './components/Survey';
import UserSurvey from './components/UserSurvey';




function App() {
  

 
  return (
   
    
      <BrowserRouter>
       <div className="App" id = "app">

        <Routes>

        <Route path="/" element={<Login />}></Route>

          <Route path="/addSurvey" element={<AddSurvey /> }></Route>
          <Route path="/addtextType" element={<TextType /> }></Route>
          <Route path="/addSelectType" element={<SelectType /> }></Route>
          <Route path="/addRadioType" element={<RadioType /> }></Route>
          <Route path="/addCheckbox" element={<Checkbox /> }></Route>
          <Route path="/addDate" element={<DateType /> }></Route>
          <Route path="/addEmail" element={<EmailType /> }></Route>
          <Route path="/test" element={<Test /> }></Route>

          
          <Route path="/survey" element={<Survey /> }></Route>
          <Route path="/userSurvey" element={<UserSurvey /> }></Route>
         

        </Routes>

        </div>
      </BrowserRouter>
  );
}

export default App