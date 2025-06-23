import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function TopNavigation() {
  return (
    <nav className='d-flex flex-wrap gap-2 mb-4' style={{ padding: '10px', margin:'10px' }}>
     
      <button><Link to="/" ><i class="fa fa-home">HOME</i></Link></button>
      <button><Link to="/about" ><i class="fa fa-about ">About</i></Link></button>
      <button><Link to="/ContactPage" ><i class="fa fa-phone">Contact Us</i></Link></button>
      <button><Link to="/EmployeeId" ><i class="fa fa-file">EMPOLYEE -ID</i></Link></button>
      <button><Link to="/EmployeeList" ><i class="fa fa-file"> EMPLOYEE -LIST</i></Link></button>
      
      
    </nav>

  
  );
}

export default TopNavigation;