import React from 'react';
import {  Link } from "react-router-dom";
function Navbar(){
  return (
  <div className='nav'>
  
    <li>
      <Link to="/survey" className='link'>Add Questions</Link>
    </li>
    <li>
      <Link to="/addSurvey" className='link'>Add Survey</Link>
    </li>

  </div>
  );
}

export default Navbar;