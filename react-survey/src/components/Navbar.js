import React from 'react';
import {  Link } from "react-router-dom";
function Navbar(){
  return (
  <div className='nav'>
  
    <li>
      <Link to="/addquestions">Add Questions</Link>
    </li>
    <li>
      <Link to="/addSurvey">Add Survey</Link>
    </li>

  </div>
  );
}

export default Navbar;