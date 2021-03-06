import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    Collapse,
    NavItem,
    NavLink,
    NavbarToggler
  }
    from 'reactstrap'

import { Link } from 'react-router-dom'
  
  const Header = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
      setOpen(!open)
    }
    return (
      <Navbar color="ligth" light expand="md">
        <div className="container">
        <NavbarBrand tag={Link} to="/">Minhas Séries</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink tag={Link} to="/series">Séries</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/generos">Gêneros</NavLink>
            </NavItem>
  
          </Nav>
  
        </Collapse>
        </div>
  
      </Navbar>
  
    )
  
  }

  export default Header;