import { Element } from "react-scroll";
import "./experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { timelineElements } from "../../constants/timelineElements";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "react-bootstrap";

function ExperienceSection() {
  return (
    <Element name="experience-section" className="exp-section">
      <h2
        style={{ paddingBottom: "20px" }}
        className="subsection-heading exp-heading"
      >
        INTERNSHIP EXPERIENCE
      </h2>
      <VerticalTimeline>
        {timelineElements.map((elements) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              key={elements.id}
              contentStyle={{
                background: "#2C2E31",
                color: "#fff",
                textAlign: "justify",
              }}
              iconStyle={{ background: "#00c7a0", color: "#fff" }}
              date={elements.date}
              dateClassName="timelineDate"
            >
              <h3 className="vertical-timeline-element-title">
                {elements.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {elements.location}
              </h5>
              <Container
                style={{
                  marginTop: "10px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "5px",
                  paddingLeft: "0px",
                }}
              >
                {elements.skills.map((skill, i) => {
                  return (
                    <span key={i} id="exp-skill">
                      {skill}
                    </span>
                  );
                })}
              </Container>
              <p id="description">{elements.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Element>
  );
}

export default ExperienceSection;
