import React from 'react';
import Cart from '@mui/icons-material/ShoppingCart'

// import logo from './Fond_fingers_logo_white_small.png'
import logo from './../ff-gold.png'
import logo_small from './../ff-gold-small.png'
    import Container from 'react-bootstrap/Container';
    import Nav from 'react-bootstrap/Nav';
    import Navbar from 'react-bootstrap/Navbar';
    import NavDropdown from 'react-bootstrap/NavDropdown';
    // import Button from 'react-bootstrap/Button';
export default function NavBar() {
  if(window.innerWidth < 375){
    console.log(1234)
    document.getElementById('#mx-auto')
  }
  return (


    
   
        <Navbar  fixed = 'top' className='bg-dark-brown' expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="navbar logo" className='' height={'60'} srcSet={`${logo_small} 300w`} />
            </Navbar.Brand>
             <div className="mx-auto" id='mx-auto'></div>
            <Navbar.Toggle className='nav-toggle bg-light-paper'  aria-controls="basic-navbar-nav" />
           
            <Navbar.Collapse className="justify-content-end " id="basic-navbar-nav">
              <Nav className='bg-light-paper-sm'>
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
            <div className="nav-btn p-1 bg-light-paper">
              <Cart className=''/><span className="text-danger">0</span>
            </div>
            
          </Container>
        </Navbar>
      );
    
    
  
}
