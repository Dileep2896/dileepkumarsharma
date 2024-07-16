import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CustomNavBar() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container fluid>
        <Navbar.Brand href="#">DILEEP KUMAR SHARMA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" navbarScroll>
            <Nav.Link href="#action1">Experience</Nav.Link>
            <Nav.Link href="#action2">Projects</Nav.Link>
            <Nav.Link href="#">Research</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;
