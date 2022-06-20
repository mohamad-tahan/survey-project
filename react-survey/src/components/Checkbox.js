import React, { useEffect, useState } from "react";
function CheckboxType() {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [checkbox, setCheckbox] = useState("");
  console.log(input);
  console.log(select);
  console.log(checkbox);

  const AddChoices = () => {
    var selectChoice = document.getElementById("checkbox");

    var div1 = document.createElement("div");
    div1.setAttribute("id", "div1");
    selectChoice.appendChild(div1);
    for (var i = 0; i < select; i++) {
      var newInput = document.createElement("input");
      newInput.setAttribute("type", "text");

      newInput.setAttribute("class", "inputs");

      newInput.setAttribute("id", i);
      div1.appendChild(newInput);
      div1.appendChild(document.createElement("br"));

      console.log(newInput);
    }
  };

  function getValues() {
    var array = [];
    for (var i = 0; i < select; i++) {
      var choicess = document.getElementsByClassName("inputs");
      array.push(choicess[i].value);
      console.log(array);
      var jsonString = JSON.stringify(Object.assign({}, array));
      console.log(jsonString);
      console.log(typeof jsonString);
    }
    return jsonString;
  }

  const AddQuestion = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/add_question", {
        
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization:
          "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTY1NTU4MDc4MiwiZXhwIjoxNjU1NTg0MzgyLCJuYmYiOjE2NTU1ODA3ODIsImp0aSI6ImQ3MTZuNmdvRXZzZXg1azkiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.66P0tR9zj-Q6m_5Fj7mgejxtCwiO_6TCO65_lNSz7XA",
      } ,
      body: JSON.stringify({
        question: input,
        type: "checkbox",
        survey_id: 1,
        choices: getValues(),
      } ,alert("Question Added")
      ),
      
    }
    ) 
    
  };

  return (
    <div id="selectDiv">
      <div id="checkbox">
        <h5>CheckBoxType Question</h5>

        <label>Enter Question</label>
        <input
          type="text"
          id="text"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <br />

        <label>Enter choices</label>
        <input
          type="text"
          id="text"
          value={select}
          onInput={(e) => setSelect(e.target.value)}
        />
        <button className="btnAdmin"
          id="addChoices"
          onClick={() => {
            AddChoices();
          }}
        >
          Add Choices
        </button>
        <br />
      </div>
      <div>
        <button className="btnAdmin"
          onClick={() => {
            AddQuestion();
          }}
        >
          Add Checkbox question
        </button>
      </div>
    </div>
  );
}

export default CheckboxType;
