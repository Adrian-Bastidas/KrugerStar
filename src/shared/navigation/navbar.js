import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Details2 from '../../components/screens/details2';

function Barra() {
  const [nombre, setNombre]=useState("");
  var resp;
  const handleChange=e=>{
    resp=e.target.value
    console.log(e.target.value)
    setNombre((e.target.value).toLowerCase())
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Adrian Bastidas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100%' }}
            navbarScroll
          >
            <Nav.Link href="/">Pokemones</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Nombre"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
    <      Details2 nombre={nombre}/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Barra