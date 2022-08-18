import React from 'react';
// import logo from './Fond_fingers_logo_white_small.png'
import logo from './../ff-gold.png'
    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    // import Button from 'react-bootstrap/Button';
export default function NavBar() {
  return (


    
   
        <Navbar  className='bg-dark-brown' expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="navbar logo" height={'60'} srcset="" />
            </Navbar.Brand>
             <div className="mx-auto"></div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
           
            <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
              <Nav >
                <Nav.Link href="#home" >
                  <button className="px-3 nav-btn">Library </button>
                  </Nav.Link>
                <Nav.Link href="#home" >
                  <button className="px-3 nav-btn">Services </button>
                  </Nav.Link>
                <Nav.Link href="#home" >
                  <button className="px-3 nav-btn">About</button>
                  </Nav.Link>
                <Nav.Link href="#home" >
                  <button className="px-3 nav-btn-cta">Join</button>
                  </Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    
    
  
}
