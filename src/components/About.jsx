import { Col, Container, Image, Row } from "react-bootstrap";
import { Element } from "react-scroll";

function About() {
  return (
    <Element name="about-section" className="section about">
      <Container>
        <Row>
          <Col md={4} className="about-image">
            <Container>
              <Image
                src="./profile.jpg"
                alt="profile"
                id="about-image"
                roundedCircle
              />
            </Container>
          </Col>
          <Col md={8}>
            <Container>
              <h2 className="subsection-heading">ABOUT</h2>
              <p className="subsection-description">
                Hi, I&apos;m{" "}
                <span id="text-highlighter">Dileep Kumar Sharma</span>, a
                dedicated software developement engineer with extensive
                experience in full-stack and mobile app development. I have
                successfully led and contributed to several high-impact
                projects. As the founder of EVon Energy, I spearheaded the
                development of a Flutter-based EV charging app, leveraging AI
                for efficient route planning and integrating with Android Auto
                and Apple CarPlay. Additionally, I have developed a
                sophisticated chat bot using the MERN stack with OpenAI
                integration. My experience spans working with diverse
                technologies, including{" "}
                <span id="text-highlighter">
                  Node.js, React.js, AWS, Firebase, and more.
                </span>{" "}
                I thrive in fast-paced environments, consistently delivering
                innovative solutions that improve efficiency and user
                satisfaction.
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}

export default About;
