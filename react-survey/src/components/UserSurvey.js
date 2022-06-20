import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayQuestions from "./DisplayQuestions";
import TextDB from "./TextDB";
import DropdownDB from "./DropdownDB";
import RadioDB from "./RadioDB";
import CheckBoxDB from "./CheckBoxDB";
import DateDB from "./DateDB";
import EmailDB from "./EmailDB";
import NavUser from "./NavUser"
import SubmitSurvey from "./SubmitSurvey";

function UserSurvey() {
  // Initialize State
  const [questions, setQuestions] = useState([]);
  const [type, setType] = useState([]);
  const [choices, setChoices] = useState([]);

  // Initialize all tasks into state from backend at component load
  useEffect(() => {
    const getQuestions = async () => {
      const questionsfromadmin = await fetchQuestions();
      console.log(questionsfromadmin);
      setQuestions(questionsfromadmin.questions);

      console.log(questions);
    };
    getQuestions();
  }, []);

  //Fetch All Tasks from Backend
  const fetchQuestions = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/questions/1");
      const data = await res.json();
      console.log(data);

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(questions);
  if (questions.length === 0) {
    return <div>No Questions</div>;
  }
  return (
    <div className="surv">
      <NavUser />
      <div className="userSurvey">

        <center>
          
        {questions.map((element) => {
          //   console.log(element);
          return <TextDB question={element} />;
        })}
        <br /> 
        {questions.map((element) => {
          //   console.log(element);
          return <DateDB question={element} />;
        })}
        <br /> 
        {questions.map((element) => {
          //   console.log(element);
          return <EmailDB question={element} />;
        })}
        <br /> 
        {questions.map((element) => {
          //    console.log(element);
          return <DropdownDB question={element} />;
        })}
        <br /> 
        {questions.map((element) => {
          //    console.log(element);
          return <RadioDB question={element} />;
        })}
        <br /> 
        {questions.map((element) => {
          //    console.log(element);
          return <CheckBoxDB question={element} />;
        })}
     
        <br /> 
        <SubmitSurvey />

        </center>
      </div>
    </div>
  );
}
export default UserSurvey;
