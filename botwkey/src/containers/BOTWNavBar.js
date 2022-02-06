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
import header_logoimage from "../images/homepage_title.png";

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
        <Navbar.Brand href="/">BOTW Key</Navbar.Brand> 
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton className="offcanvas-header">
            <Offcanvas.Title id="offcanvasNavbarLabel" onClick={clickHome}>
              <img
                class="header_logoimage"
                src={header_logoimage}
                height="80"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-body">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <ButtonGroup vertical className="offcanvas-categories-creatures">
                <Button onClick={clickCreatures}>CREATURES</Button>
              </ButtonGroup>
              <ButtonGroup vertical className="offcanvas-categories-equipment">
                <Button onClick={clickEquipment}>EQUIPMENT</Button>
              </ButtonGroup>
              <ButtonGroup vertical className="offcanvas-categories-materials">
                <Button onClick={clickMaterials}>MATERIALS</Button>
              </ButtonGroup>
              <ButtonGroup vertical className="offcanvas-categories-monsters">
                <Button onClick={clickMonsters}>MONSTERS</Button>
              </ButtonGroup>
              <ButtonGroup vertical className="offcanvas-categories-treasure">
                <Button onClick={clickTreasure}>TREASURE</Button>
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
