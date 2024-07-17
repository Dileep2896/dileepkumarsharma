import { Card, ProgressBar } from "react-bootstrap";

function CustomCard(props) {
  const {
    cardTitle,
    now,
    title,
    internship,
    projects,
    progressClassName,
    iconClasses,
  } = props;

  return (
    <Card>
      <Card.Body className={progressClassName}>
        <Card.Title>
          <i style={{ paddingRight: "10px" }} className={iconClasses}></i>
          {cardTitle}
        </Card.Title>
        <Card.Text>{title}</Card.Text>
        <div className="my-3">
          <span style={{ fontSize: "12px" }}>Skill Rate</span>{" "}
          <ProgressBar
            className={progressClassName}
            now={now}
            variant="success"
          />
        </div>
        <p style={{ fontSize: "12px" }}>Internship Experience: {internship}</p>
        <p style={{ fontSize: "12px" }}>Projects: {projects}</p>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
