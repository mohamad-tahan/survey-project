import React from 'react';
import {  Link } from "react-router-dom";
function Navbar(){
  return (
  <div className='nav'>
  
    <li>
      <Link to="/viewsurveys">View Surveys</Link>
    </li>
    <li>
      <Link to="/adminSurvey">Add Survey</Link>
    </li>

  </div>
  );
}

export default Navbar;