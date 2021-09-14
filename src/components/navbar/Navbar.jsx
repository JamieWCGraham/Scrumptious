import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown, Container} from 'react-bootstrap';
import "./navbar.css"

export default function NavbarScrumptious() {

    return (
      <>          
       <Navbar bg="#F8F8F8" expand="lg">
                <Nav className="mx-auto text-center mobileNav">
                    <Nav.Link href="breakfast" className="nav-item nav-link px-5"><h2 className="h2Item">BREAKFAST</h2></Nav.Link>
                    <Nav.Link href="lunchndinner" className="nav-item nav-link px-5"><h2 className="h2Item">LUNCH & DINNER</h2></Nav.Link>
                    <Nav.Link href="drinks" className="nav-item nav-link px-5"><h2 className="h2Item">DRINKS</h2></Nav.Link>
                    <Nav.Link href="dessert" className="nav-item nav-link px-5"><h2 className="h2Item">DESSERT</h2></Nav.Link>
                    <Nav.Link href="contact" className="nav-item nav-link px-5"><h2 className="h2Item">CONTACT</h2></Nav.Link>
                </Nav>
       </Navbar>
    </>
    )
}


