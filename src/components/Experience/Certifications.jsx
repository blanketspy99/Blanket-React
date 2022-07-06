import React from "react";
import { Card } from "react-bootstrap";
// import ExperienceDetails from "../../experience.json";
import ResumeCardTitle from "./ResumeCardTitle";

export default function Certification(props) {
  return (
    <>
            <div style={{pageBreakInside: "avoid"}}>

      <ResumeCardTitle title="Certifications" id="Certifications">
        {" "}

        <Card.Text as="ul">
          {props.exp["Certifications"].map((key, idx) => (
            <li key={idx}>
              <strong>{key}</strong>
            </li>
          ))}
        </Card.Text>{" "}
      </ResumeCardTitle>
      </div>
    </>
  );
}
