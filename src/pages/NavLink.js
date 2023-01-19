import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'
import logo from '../images/nav-logo-bg.png'
import './NavLink.css'

function NavLink() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='black' variant='dark'>
    <Container>
      
      <Navbar.Brand href='/'><img src={logo} alt='logo' width='130'/></Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link href='/Quencil'>HOME</Nav.Link>
          <Nav.Link href='career'>CAREER CAMP</Nav.Link>
          <NavDropdown title='TECHNICAL COURSES' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='NON TECHNICAL COURSES' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='training'>TRAINING JOURNEY</Nav.Link>
          <Nav.Link href='contact'>CONTACT US</Nav.Link>
        </Nav>
        <Nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavLink;


