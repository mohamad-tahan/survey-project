
import Login from './components/Login';
import Test from './components/Test';
import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AddQuestions from './components/AddQuestions';
import Navbar from './components/Navbar';
import AddSurvey from './components/AddSurvey';





function App() {
  

 
  return (
   
    
      <BrowserRouter>
       <div className="App">

        <Routes>

        <Route path="/login" element={<Login />}></Route>

          <Route path="/addSurvey" element={<AddSurvey /> }></Route>
          <Route path="/addQuestions" element={<AddQuestions /> }></Route>
          <Route path="/test" element={<Test /> }></Route>

        </Routes>

        </div>
      </BrowserRouter>
  );
}

export default App