import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";

function CustomNavBar() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#">
          Dileep <span id="nav-name-title">Kumar Sharma</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto" navbarScroll>
            <Nav.Link
              as={Link}
              to="about-section"
              spy={true}
              smooth={true}
              duration={100}
              href="#"
              className="custom-nav-link"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="skill-section"
              spy={true}
              smooth={true}
              duration={100}
              href="#"
              className="custom-nav-link"
            >
              Skills
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="experience-section"
              spy={true}
              smooth={true}
              duration={100}
              href="#"
              className="custom-nav-link"
            >
              Experience
            </Nav.Link>
            <Nav.Link href="#action2" className="custom-nav-link">
              Projects
            </Nav.Link>
            <Nav.Link href="#action2" className="custom-nav-link">
              Achivements
            </Nav.Link>
            <Nav.Link href="#" className="custom-nav-link">
              Research
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto" navbarScroll>
            <Nav.Link
              href="https://github.com/Dileep2896"
              target="_blank"
              className="custom-nav-link"
            >
              <i className="nav-link-icons fa-brands fa-github"></i> Github
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/dileep2896/"
              target="_blank"
              className="custom-nav-link"
            >
              <i className="nav-link-icons fa-brands fa-linkedin"></i> Linked
            </Nav.Link>
            <Nav.Link href="#" target="_blank" className="custom-nav-link">
              <i className="nav-link-icons fa-solid fa-envelope"></i> Email
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;
