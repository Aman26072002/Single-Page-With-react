import React from 'react'
import { Link } from 'react-router-dom';

export default function LeftNavigation() {
  return (
    
    <>
    <nav >
    <div  >
            <div id="mySidenav" className="sidenav">
            <Link to="/" style={{ margin: '0 10px' }}>Home</Link><br/>
            <Link to="/about" style={{ margin: '0 10px' }}>About</Link><br/>
            <Link to="/TextServicePage" style={{ margin: '0 10px' }}>Services</Link><br/>
            <Link to="/NewClientPage" style={{ margin: '0 10px' }}>Clients</Link><br/>
            <Link to="/ContactPage" style={{ margin: '0 10px' }}>Contact</Link><br/>
            <Link to="/EmployeeList" style={{ margin: '0 10px' }}>EmployeeList</Link><br/>
            <Link to="/ClientListPage" style={{ margin: '0 10px' }}>New-Client-List</Link><br/>
            <Link to="/EmployeeId" style={{ margin: '0 10px' }}>EmployeeId</Link><br/>
          </div>
             
    </div>
    </nav>
    </>
  )
}
