import React from "react";
import {
  Nav,
  Container,
  Offcanvas,
  Form,
  FormControl,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import "./BOTWNavBar.css";

function BOTWNavBar() {
  let navigate = useNavigate();
  function clickHome() {
    navigate("/");
  }

  function clickCarousel() {
    navigate("/carousel");
  }

  function clickMonsters() {
    navigate("/monsters");
  }

  function clickCreatures() {
    navigate("/creatures");
  }

  function clickEquipment() {
    navigate("/equipment");
  }

  function clickMaterials() {
    navigate("/materials");
  }

  function clickTreasure() {
    navigate("/treasure");
  }
  return (
    <Navbar className="botw-navbar" sticky="top" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">BOTW Key</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton className="offcanvas-header">
            <Offcanvas.Title id="offcanvasNavbarLabel" onClick={clickHome}>
              Insert Logo
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-body">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <ButtonGroup vertical className="offcanvas-categories">
                <Button onClick={clickCreatures}>Creatures</Button>
                <Button onClick={clickEquipment}>Equipment</Button>
                <Button onClick={clickMaterials}>Materials</Button>
                <Button onClick={clickMonsters}>Monsters</Button>
                <Button onClick={clickTreasure}>Treasure</Button>
                <Button onClick={clickHome}>Hyrule Map</Button>
              </ButtonGroup>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

/* <div className="nav-tabs">
          <TabButton
            border="none"
            color="pink"
            height="200px"
            onClick={() => alert("You clicked on the pink circle!")}
            radius="50%"
            width="200px"
            children="I'm a pink circle!"
            backgroundImg="../sampleLogo.jpg"
          />
        </div> */

export default BOTWNavBar;
