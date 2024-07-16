import { Col, Container, Row } from "react-bootstrap";
import WordCloudComponent from "./WordCloudComponent";

function Skills() {
  return (
    <Container className="section">
      <Row>
        <Col md={5}>
          <Container>
            <h2 className="subsection-heading">
              <span id="home-title-name">Skills</span> & Tools
            </h2>
            <p className="subsection-description">
              For more <span id="subsection-span-highlight">detailed</span>{" "}
              overview, please check the tools used on the projects.
            </p>
          </Container>
        </Col>
        <Col md={7} className="cloud-word">
          <WordCloudComponent />
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
