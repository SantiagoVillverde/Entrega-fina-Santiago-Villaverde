import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ position: "sticky", top: "0", zIndex: "20" }}
    >
      <Container className="justify-content-between">
        <Navbar.Brand className="NavBrand">
          <NavLink
            to={"/"}
            style={{
              alignItems: "center",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-flex",
            }}
          >
            <img
              alt="Logo"
              src="https://firebasestorage.googleapis.com/v0/b/tienda-rocket.appspot.com/o/logo.webp?alt=media&token=29433e47-9ded-44bd-a2e8-cc92c5bda413"
              width="20"
              className="d-inline-block align-top"
            />{" "}
            <h3
              style={{
                marginInlineStart: "0.5em",
                color: "#ac0303",
                fontFamily: "Teko, sans-serif",
                fontSize: "1.2em",
              }}
            >
              Team Rocket
            </h3>
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Tipos de pokemon"
              id="basic-nav-dropdown"
              style={{ fontFamily: "Comfortaa, cursive", fontWeight: "bold" }}
            >
              <NavDropdown.Item>
                <NavLink
                  to={"/category/platoPrincipal"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Fuego
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to={"/category/guarnicion"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Planta
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to={"/category/bebida"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Agua
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to={"/category/bebida"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Normal
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to={"/category/bebida"}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Electrico
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
