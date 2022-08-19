import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import Logo from '../../../src/imgs/GP.png'
import Jumbotron from '../Jumbotron/Jumbotron'
import Footer from '../Footer/Footer'
const Home = () => {
  const linksStyle = {
    paddingRight: '150px',
    fontSize:'22px',
    flex: 'none',
    color:'green'
}
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" style={linksStyle}><img width="50px" height="auto" className="img-responsive" src={Logo}  alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" style={linksStyle}>
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/products" style={linksStyle}>
                Productos
              </Nav.Link>
              <Nav.Link as={Link} to="/login" style={linksStyle}>
                Log In
              </Nav.Link>
              <Nav.Link as={Link} to="/profile" style={linksStyle}>
                <Icon.Person />
              </Nav.Link>
              <Nav.Link as={Link} to="/cart" style={linksStyle}>
                <Icon.Cart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Jumbotron />
      <Outlet></Outlet>
      <Footer />
      
    </>
  );
}

export default Home;