import { Col, Container, Row } from "react-bootstrap";
import { Element } from "react-scroll";
import CustomCard from "./CustomCard";
import "./skills.css";

function Skills() {
  return (
    <Element name="skill-section" className="skill-section">
      <Container>
        <Row>
          <Col md={6} className="skill-icon-container">
            <Container>
              <h2 className="subsection-heading">SKILLS</h2>
              <p id="skill-icon-break">My Technological Arsenal</p>
              <Container className="skill-icon-rows">
                <i className="devicon-java-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-python-plain"></i>
                <i className="devicon-kotlin-plain"></i>
                <i className="devicon-azuresqldatabase-plain"></i>
                <i className="devicon-cplusplus-plain"></i>
              </Container>
              <Container className="skill-icon-rows">
                <i className="devicon-npm-original-wordmark"></i>
                <i className="devicon-mongodb-plain"></i>
                <i className="devicon-express-original-wordmark"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-nodejs-plain-wordmark"></i>{" "}
              </Container>
              <Container className="skill-icon-rows">
                <i className="devicon-spring-original"></i>
                <i className="devicon-androidstudio-plain"></i>
                <i className="devicon-flutter-plain"></i>
                <i className="devicon-git-plain"></i>
                <i className="devicon-github-original"></i>
              </Container>
              <Container className="skill-icon-rows">
                <i className="devicon-amazonwebservices-plain-wordmark"></i>
                <i className="devicon-firebase-plain"></i>
                <i className="devicon-googlecloud-plain"></i>
              </Container>
            </Container>
          </Col>
          <Col md={6}>
            <Container>
              <Row className="mb-4">
                <CustomCard
                  cardTitle="Full-Stack Developer"
                  now={95}
                  internship="6 months"
                  projects="15"
                  title="Create a fully functional mordern web applications."
                  progressClassName="full-stack-progess"
                  iconClasses="fa-solid fa-user-secret"
                ></CustomCard>
              </Row>
              <Row className="mb-4">
                <CustomCard
                  cardTitle="Flutter Developer"
                  now={85}
                  internship="5 months"
                  projects="12"
                  title="Develope beautiful cross-platform application with breeze."
                  progressClassName="flutter-progess"
                  iconClasses="fa-brands fa-flutter"
                ></CustomCard>
              </Row>
              <Row>
                <CustomCard
                  cardTitle="Android Developer"
                  now={70}
                  internship="3 months"
                  projects="8"
                  title="Design native android applications."
                  progressClassName="android-progess"
                  iconClasses="fa-brands fa-android"
                ></CustomCard>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Element>
  );
}

export default Skills;
