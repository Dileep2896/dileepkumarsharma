import { Button, Col, Container, Row } from "react-bootstrap";

function HomeSection() {
  return (
    <section className="section">
      <Container>
        <Row>
          <Col md={8} className="pb-8">
            <Container>
              <p className="home-title">Hello,</p>
              <p className="home-title">
                I am <span id="home-title-name">DILEEP KUMAR</span>,
              </p>
              <p className="home-title">Software Development Engineer</p>
              <p className="home-description">
                Currently located in Rochester, New York. I develop cutting-edge
                software solutions with expertise in full-stack and mobile app
                development.
              </p>
              <Button variant="outline-primary">Let&apos;s get in touch</Button>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeSection;
