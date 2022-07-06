import React, { useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
// import ExperienceDetails from "../../experience.json";
import SkillDetails from "./SkillDetails";
import ResumeCardTitle from "./ResumeCardTitle";


export default function Skills(props) {
  const skillDetails = props.exp["Skills"];
  const skillTypes = Object.keys(skillDetails);
  const skillTypesCount = skillTypes.length;
  const [show, setShow] = useState(false);
  // let skillsList=[];
  let part1 = [];
  let part2 = [];
  for (let i = 0; i < skillTypesCount; i++) {
    const key = skillTypes[i];
    if (i % 2 === 0) {
      part1.push(
        <li key={key}>
          <b>{key}</b>: {skillDetails[key]}
        </li>
      );
    } else {
      part2.push(
        <li key={key}>
          <b>{key}</b>: {skillDetails[key]}
        </li>
      );
    }
  }
  const handleShow = () => setShow(true);

  return (
    <>
            <div style={{pageBreakInside: "avoid"}}>

    <ResumeCardTitle title="Skills" id="skills">
    <Card.Text as="ul">
                    <Row>
                      <Col lg={6} md={6}>
                        <Card.Text as="ul"> {part1}</Card.Text>
                      </Col>
                      <Col lg={6} md={6}>
                        <Card.Text as="ul"> {part2}</Card.Text>
                      </Col>
                    </Row>
                    <Button
                  variant="link"
                  className="py-0 px-0 mt-3 float-end"
                  onClick={handleShow}
                >
                  <Card.Title as="i">
                    {" "}
                    more... {}
                  </Card.Title>
                </Button>
                  </Card.Text>
    </ResumeCardTitle>
    </div>

      { show && <SkillDetails onClose={setShow}/>}
    </>
  );
}
