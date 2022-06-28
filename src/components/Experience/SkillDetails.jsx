import React, { useState } from "react";
import { Modal, Button, Row, Col, Tab, Tabs, Fade } from "react-bootstrap";

// import { createTheme } from '@mui/material';
import CircleIcon from "@mui/icons-material/Circle";

import $ from "jquery";

export default function SkillDetails(props) {
  // const theme = createTheme({
  //     palette: {
  //       background: {
  //         paper: '#fff',
  //         main: '#3f50b5',
  //       },
  //       text: {
  //         primary: '#173A5E',
  //         secondary: '#46505A',
  //         main: '#3f50b5'
  //       },
  //       action: {
  //         active: '#001E3C',
  //         main: '#3f50b5'
  //       },
  //       success: {
  //         dark: '#009688',
  //         main: '#3f50b5'
  //       },
  //     },
  //   });

  const [show, setShow] = useState(true);
  const [key, setKey] = useState("home");
  // const handleClose = () => setShow(false);
  function handleClose() {
    props.onClose && props.onClose(false);
    setShow(false);
  }
  // function handleClose(){
  //   props.stateFunction((prev)=> {
  //     console.log("This is parent"+prev);
  //     return !prev;
  //   });
  //   setShow((prev)=>{
  //     console.log(prev);
  //     return !prev;
  //   })

  // }

  function Sonnet(props) {
    const rating1 = props.rating[0];
    const rating2 = props.rating[1];
    // const leftRating=7-rating;
    let arr1 = Array(7)
      .fill(0)
      .map((k, i) =>
        i < rating1 ? (
          <CircleIcon key={i} />
        ) : (
          <CircleIcon key={i} style={{ color: "gray" }} />
        )
      );
    let arr2 = Array(7)
      .fill(0)
      .map((k, i) =>
        i < rating2 ? (
          <CircleIcon key={i} />
        ) : (
          <CircleIcon key={i} style={{ color: "gray" }} />
        )
      );

    let lg = props.lg === (null || undefined) ? 6 : props.lg;
    // console.log(props.keys[1]);
    var maxHeight = 0;
    $(".tab-content .tab-pane").each(function () {
      $(this).addClass("active");
      var height = $(this).height();
      maxHeight = height > maxHeight ? height : maxHeight;
      $(this).removeClass("active");
    });
    $(".tab-content .tab-pane:first").addClass("active");
    $(".tab-content").height(maxHeight);

    return (
      <>
        {/* {props.msg} This is a test message.s */}
        <Row>
          <Col lg={lg} sm={12} className="mt-2">
            <Row>
              <Col lg={2} className="d-none d-lg-block"></Col>
              <Col lg={5} sm={6}>
                {props.keys[0]}
              </Col>
              <Col lg={5} sm={6}>
                {arr1}
              </Col>
              {/* <ThemeProvider theme={theme}><CircleIcon style={{color: "gray"}}/><i className="bi bi-circle-half fa-2x" style={{fontSize:"24px"}}></i><BsCircleHalf/><CircleIcon style={{color: "linear-gradient(to right, #FFAE74 50%, transparent 50.01%)"}}/><CircleIcon/><CircleIcon/><CircleIcon/></ThemeProvider> */}
            </Row>
          </Col>
          <Col lg={lg} sm={12} className="mt-2">
            <Row>
              <Col lg={5} sm={6}>
                {props.keys[1]}
              </Col>
              {props.keys[1] !== undefined && (
                <Col lg={5} sm={6}>
                  {arr2}
                </Col>
              )}
              {/* <Col lg={5}><div><ProgressBar now={now} visuallyHidden/></div></Col> */}
              <Col lg={2} className="d-none d-lg-block"></Col>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
  return (
    <>
      {/* <LinearProgress variant="determinate" value={60} /> */}

      {/* <div><ProgressBar now={now} label={`${now}%`} />60;</div> */}
      <Modal show={show} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>Skill Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            id="skills-tab"
            activeKey={key}
            transition={Fade}
            onSelect={(k) => setKey(k)}
            className="mb-3 nav-justified"
          >
            <Tab eventKey="home" title="Languages & Scripting">
              {/* style={{"backgroundColor": "var(--bs-gray-500)", "height": "50px"}} */}
              <Sonnet
                key={1}
                keys={["Java Script", "Core Java"]}
                rating={[5, 2]}
              />
              <Sonnet
                key={2}
                keys={["Python", "Shell Sripting"]}
                rating={[6, 6]}
              />
              <Sonnet
                key={3}
                keys={["HTML", "CSS (Bootstrap)"]}
                rating={[5, 5]}
              />
              <Sonnet key={4} keys={["SQL", "Motoko"]} rating={[4, 3]} />
              <Sonnet key={5} keys={["Node JS", "JSON/YAML"]} rating={[3, 6]} />
            </Tab>
            <Tab eventKey="profile" title="Tools & Technologies">
              <Sonnet
                key={6}
                keys={["Azure DevOps", "Jenkins"]}
                rating={[6, 6]}
              />
              <Sonnet key={7} keys={["Docker", "Kubernetes"]} rating={[4, 3]} />
              <Sonnet key={8} keys={["Git", "AWS CodeBuild"]} rating={[6, 5]} />
              <Sonnet key={9} keys={["Sonar & JFrog"]} rating={[4]} />
              <Sonnet
                key={10}
                keys={[
                  "Informatica PowerCenter & Data Quality Admin",
                  "Dell Boomi",
                ]}
                rating={[6, 5]}
              />
              <Sonnet key={11} keys={["DataIku", "Ansible"]} rating={[6, 5]} />
              <Sonnet
                key={12}
                keys={["AWS Cloud", "Azure Cloud"]}
                rating={[5, 3]}
              />
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
