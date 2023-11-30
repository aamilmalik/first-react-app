import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import './App.css';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import DropDown1 from './Routes/DropDown1';
import DropDown2 from './Routes/DropDown2';
import PageNotFound from './Routes/PageNotFound';
import Employee from './Routes/Employee';
import EmployeeDetails from './Routes/EmployeeDetails';

function App() {

  return (
    <div className="App">
            <BrowserRouter>
            <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/home' className='p-2'>
           Home
            </Link>
            <Link to='/contact' className='p-2'>
             Contact
           </Link>
           <Link to='/employee' className='p-2'>
             Employees
           </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Routes> 

         <Route path='/employeeDetails/:id' element={<EmployeeDetails></EmployeeDetails>} />

           <Route path="/" element={<Home></Home>} >
           </Route>
           <Route path="/home" element={<Home></Home>}>
           </Route>
           <Route path='/contact' element={<Contact />}
           />
           <Route path='/dropdown1' element={<DropDown1 />}></Route>

           <Route path='/employee' element={<Employee />}>

           </Route>

            <Route path='/dropdown2' element={<DropDown2 ></DropDown2>} />
  <Route path='*' element={<PageNotFound></PageNotFound>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
