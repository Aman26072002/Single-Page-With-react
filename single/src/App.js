// import React, { useState } from 'react';
import { Routes, Route }   from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NewClientPage from './pages/NewClientPage';
import TextServicePage from './pages/TextServicePage';
import ContactPage from './pages/ContactPage';
import FooterNavigation from './components/Navigation/FooterNavigation';
import TopNavigation from './components/Navigation/TopNavigation';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
 import LeftNavigation from './components/Navigation/LeftNavigation';
import EmployeeList from './pages/EmployeeList';
import EmployeeId from './pages/EmployeeId';
import ClientListPage from './pages/ClintListPage';

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

function App() {
  return (
    <>
      <div className='container' >
      <div className='row fixed-center'>
        
        <div  className='col-1'><img style={{height:"120px"}} src={logo} alt="Logo" /> </div>
        <div  className='col-1'><img style={{height:"120px"}} src={logo} alt="Logo" /> </div>
        <div  className='col-1'><img style={{height:"120px"}} src={logo} alt="Logo" /> </div>

        <div  className='col-1'><img style={{height:"120px"}} src={logo} alt="Logo" /> </div>
        <div  className='col-1'><img style={{height:"120px"}} src={logo} alt="Logo" /> </div>
        <div  className='col-1'><img style={{height:"120px"}} src={logo} alt="Logo" /> </div>
        <div  className='col-1'><img style={{height:"120px"}} src={logo} alt="Logo" /> </div>

        <div  className='col-1'><img style={{height:"120px"}} src={logo} alt="Logo" /> </div>
        <div  className='col-1'><img style={{height:"120px"}} src={logo} alt="Logo" /> </div>
        <div  className='col-1'><img style={{height:"120px"}} src={logo} alt="Logo" /> </div>
        <div  className='col-1'><img style={{height:"120px"}} src={logo} alt="Logo" /> </div>
      </div>

       <div className='TopNavigation row'  style={{  background: '#eee' }}>
         <div  className='col-2'></div>
         <div  className='col-10 '>          
            <TopNavigation/> 
         </div>
        </div>
        <div className='row text-left' >
          <div className='col-2 text-left fixed-left'  style={{  background: '#eee' }}>
          <LeftNavigation/>
          </div>
        <div className='col-10'  style={{ marginTop:'10px'  }} >
          <div className='row' >
                <Routes>
                  
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/NewClientPage" element={<NewClientPage />} /> 
                <Route path="/ClientListPage" element={<ClientListPage />} />
                
                <Route path="/TextServicePage" element={<TextServicePage />} />
                <Route path="/ContactPage" element={<ContactPage />} />
                <Route path="/EmployeeId" element={<EmployeeId />} />
                <Route path="/EmployeeList" element={<EmployeeList />} />
                {/* <TextForm showAlert={showAlert} heading="Try SinglePage - Word Counter, Character counter, Remove Extra spaces" mode={mode}/> */}
              </Routes>    
            </div>
        </div>
          <div className='container'>
            <FooterNavigation/>
          </div>
      </div>
    
   
       </div>
   
      </>
  );
  }


  export default App;