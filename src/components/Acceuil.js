import React from 'react';
import {Nav, Navbar, NavDropdown, Button} from 'react-bootstrap'
import {Events} from './Events'
import { AboutUs } from './AboutUs';
import {Home} from './Home'
//import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

export const Acceuil = () => {
    return (
    
        <div className="acceuil">
          <Navbar bg="light" expand="lg">
  <Navbar.Brand >Logo de l'Agence </Navbar.Brand>
  
  
    <Nav
      className="mr-auto my-2 my-rg-3"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link Link to={Home}>Home</Nav.Link>
      <Nav.Link Link to={Events}></Nav.Link>
      <NavDropdown title="Events" id="navbarScrollingDropdown">
        <NavDropdown.Item Link to={Events}>Évennement à venir</NavDropdown.Item>
        <NavDropdown.Item Link to={Events}>Évennement passés</NavDropdown.Item>
        <NavDropdown.Divider />
    
      </NavDropdown>
      <Nav.Link Link to={AboutUs} >
        <AboutUs/>
      </Nav.Link>
    </Nav>
    
<div className="button">
  <Button variant="primary">Se connecter</Button>
  <Button variant="primary" >S'inscrire</Button>
  </div>
</Navbar>  
</div>

 
    )
}
