import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    useHistory,
    Link
  } from "react-router-dom";


const Header = () => {
    
    return(
        <div className="App">
                <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
                <Link to='/'>
                  <ReactBootStrap.Navbar.Brand > Home</ReactBootStrap.Navbar.Brand>
                </Link>
                   
                  
                  
            
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                <ReactBootStrap.Nav className="mr-auto"> 
                <Link to="/addblog">
                    <ReactBootStrap.Nav.Link href="/addblog">AddBlog</ReactBootStrap.Nav.Link>

                </Link>
                
                {/* <Link to="/pc">
                    <ReactBootStrap.Nav.Link href="/pc">Pc</ReactBootStrap.Nav.Link>

                </Link>
                <Link to="/acess">
                    <ReactBootStrap.Nav.Link href="/acess">Accessories</ReactBootStrap.Nav.Link>

                </Link> */}
                
                
                
                
                
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
        </div>
    )
}

export default Header;