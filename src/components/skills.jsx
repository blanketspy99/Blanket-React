import React, { useState } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import ExperienceDetails from "../experience.json";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Collapse } from "react-collapse";
import SkillDetails from "../pages/SkillDetails";
// import { ButtonBase } from "@mui/material";

export default function Skills() {
  const skillDetails = ExperienceDetails["Skills"];
  const skillTypes = Object.keys(skillDetails);
  const skillTypesCount = skillTypes.length;
  const [toggle, setToggle] = useState({
    state: false,
    style: { transform: "rotate(270deg)" },
  });
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
//   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleClick(event) {
    console.log(event.currentTarget.id);
    function toggle(setFunction) {
      setFunction((prev) => {
        if (prev.state === true) {
          return { state: false, style: { transform: "rotate(270deg)" } };
        } else {
          return { state: !prev.state, style: {} };
        }
      });
    }
    toggle(setToggle);
    // switch (event.currentTarget.id){
    //   case "work":
    //     toggle(setWorkToggle);
    //     break;
    //   case "otherProjects":
    //     toggle(setOtherToggle);
    //     break;
    //   default:
    //     console.log("")
    // }
  }

  return (
    <>
      <Row>
        <Col lg={2} className="d-none d-lg-block"></Col>
        <Col lg={8}>
          <Container fluid="lg">
            <Card>
              <Card.Body>
                <Button
                  id="otherProjects"
                  variant="link"
                  className="py-0 px-0 mt-0 mb-2"
                  onClick={handleClick}
                >
                  <Card.Title as="h3">
                    {" "}
                    Skills {}
                    <ArrowDropDownOutlinedIcon style={toggle.style} />
                  </Card.Title>
                </Button>
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
                <Collapse isOpened={toggle.state}>
                  <Card.Text as="ul">
                    <Row>
                      <Col lg={6} md={6}>
                        <Card.Text as="ul"> {part1}</Card.Text>
                      </Col>
                      <Col lg={6} md={6}>
                        <Card.Text as="ul"> {part2}</Card.Text>
                      </Col>
                    </Row>
                  </Card.Text>
                </Collapse>
                {/* <hr></hr> */}
              </Card.Body>
            </Card>
          </Container>
        </Col>
        <Col lg={2} className="d-none d-lg-block"></Col>
      </Row>
      { show && <SkillDetails onClose={setShow}/>}
    </>
  );
}
