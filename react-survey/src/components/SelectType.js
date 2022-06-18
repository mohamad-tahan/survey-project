import React, { Component, useState } from "react";

class SelectType extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      questionsList: [
        {
          questions: "-- Select --",
        },
      ],
    };
  }
  txtQuestion = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  addnewQuestion = () => {
    this.setState((x) => ({
      inputValue: "",
      questionsList: [...x.questionsList, { questions: x.inputValue }],
    }));
  };

  render() {
    let quesRecords = this.state.questionsList.map((x) => {
      return <option>{x.questions}</option>;
    });

    return (
      <div className="questions">
        
        <input  type="text" placeholder="Type your question here"  /> 
        <br/>
       
         
          <input
            type="text"
            value={this.state.inputValue}
            placeholder="select an option"
            onChange={this.txtQuestion}
          />
          <button onClick={this.addnewQuestion}> Add Record</button>
          <br />
          <select>{quesRecords}</select>
      
      </div>
    );
  }
}
export default SelectType;
