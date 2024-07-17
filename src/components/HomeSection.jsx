import { Col, Container, Row } from "react-bootstrap";
import { Element } from "react-scroll";

function HomeSection() {
  return (
    <Element name="home-section" className="section">
      <Container>
        <Row>
          <Col md={10} className="pb-8">
            <Container className="home-container">
              <p className="home-title">Hello,</p>
              <p className="home-title">
                I am <span id="text-highlighter">DILEEP KUMAR</span>,
              </p>
              <p className="home-title">Software Development Engineer</p>
              <p className="home-description">
                Currently located in Rochester, New York. I develop cutting-edge
                software solutions with expertise in <br />
                full-stack and mobile application development.
              </p>
              <button className="home-button">LET&apos;S CHAT!</button>
            </Container>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}

export default HomeSection;
