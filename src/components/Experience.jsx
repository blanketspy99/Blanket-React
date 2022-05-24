import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import ExperienceDetails from "../experience.json";
import parse from "html-react-parser";
import LinkIcon from "@mui/icons-material/Link";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Collapse } from "react-collapse";
import Skills from "./skills";

export default function Experience() {
  const countWork=ExperienceDetails["Work Experience"].length;
  const [newActive,setActive] = useState([...Array(countWork).fill(true)]);
  // console.log(newActive);
  // const [activeIndex, setActiveIndex] = useState(null);
  const [workActiveIndex, setWorkActiveIndex] = useState(null);
  const [workToggle, setWorkToggle] = useState({state: true, style:{}});
  const [otherToggle, setOtherToggle] = useState({state: true, style:{}});
  function handleAchievement(index){
    // console.log(newActive);
    
    setActive((prev) => {
      let temptoggles=[...prev];
      // console.log(newActive);
      if(prev[index] === false){
        temptoggles[index]=true;
        console.log(temptoggles);
        return temptoggles;
      }
      else{
        temptoggles[index]=false;
        console.log(temptoggles[index]);
        return temptoggles;
      }
     } )  
                };
  function handleClick(event){
                  console.log(event.currentTarget.id);
                  function toggle(setFunction){
                  setFunction((prev) => {
                    if(prev.state === true){
                    return {state: false,style: { transform: "rotate(270deg)" }}
                    
                    }
                    else {
                      return {state: !prev.state, style:{}}
                    }
                  })}
                  switch (event.currentTarget.id){
                    case "work":
                      toggle(setWorkToggle);
                      break;
                    case "otherProjects":
                      toggle(setOtherToggle);
                      break;
                    default:
                      console.log("")
                  }
  }

  let itemList = [];
  ExperienceDetails["Work Experience"].forEach((item, index) => {
    itemList.push(
      <Container  fluid="lg" key={index} className="mb-2">
        <Card bg="white">
          <Card.Body>
            <Card.Title as="h4">{item["Role"]}</Card.Title>
            <Card.Subtitle as="p" className="companyName">
              {item["Company Name"]} - {item["Client Name"]} Client{" "}
              <a href={item["Company Website"]}>
                <LinkIcon />{" "}
              </a>{" "}
            </Card.Subtitle>
            <Row>
              <Col lg={6} md={6} sm={6} className="text-muted">
                {item["Start Month Year"]}-
                {item["End Month Year"] === "None"
                  ? " present"
                  : item["End Month Year"]}
              </Col>
              <Col lg={6} md={6} sm={6} className="text-muted text-end">
                {item["Location"]}
              </Col>
            </Row>
            {/* <Card.Subtitle className="mb-2 text-muted"> Card subtitle </Card.Subtitle> */}
            <Card.Subtitle className="mt-2 text-muted">
              {" "}
              <Button
                variant="link"
                className="py-0 px-0 mt-0 mb-2"
                onClick={()=> {handleAchievement(index)}}
                  
                // aria-controls={"achievement" + index}
                // aria-expanded="true"
              >
                {" "}
                Achievement/Tasks
                <ArrowDropDownOutlinedIcon
                  style={
                    newActive[index]
                      ? { transform: "none" }
                      : { transform: "rotate(270deg)"}
                  }
                />
              </Button>{" "}
            </Card.Subtitle>
            <Collapse isOpened={newActive[index]}>
              <div>
                {/* className={newActive[index] ? "show" : "hide"}
                id={"achievement" + index}
              > */}
                <Card.Text as="ul">
                  {item["TaskAchievements"].map((data, idx) => (
                    <li key={idx}>{parse(data)}</li>
                  ))}
                </Card.Text>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
        {/* <hr></hr> */}
      </Container>
    );
  });

  let otherList = [];
  ExperienceDetails["Other Projects"].forEach((item, index) => {
    otherList.push(
      <Container  fluid="lg"  key={"other"+index} className="mb-2">
        <Card bg="white">
          <Card.Body>
            <Card.Title as="h4">{item["Title"]}</Card.Title>
            <Card.Subtitle as="p" className="companyName">
              {item["Sub Title"]}
              {/* <a href={item["Company Website"]}>
                <LinkIcon />{" "}
              </a>{" "} */}
            </Card.Subtitle>
            <Row>
              <Col lg={6} md={6} sm={6} className="text-muted">
                {item["Start Month Year"]}-
                {item["End Month Year"] === "None"
                  ? " present"
                  : item["End Month Year"]}
              </Col>
              <Col lg={6} md={6} sm={6} className="text-muted text-end">
                {item["Location"]}
              </Col>
            </Row>
            {/* <Card.Subtitle className="mb-2 text-muted"> Card subtitle </Card.Subtitle> */}
            <Card.Subtitle className="mt-2 text-muted">
              {item["Description"]}
            </Card.Subtitle>
            <Card.Subtitle className="mt-2 text-muted">
              {" "}
              <Button
                variant="link"
                className="py-0 px-0 mt-0 mb-2"
                onClick={(event) =>
                  setWorkActiveIndex(workActiveIndex === index ? null : index)
                }>
                {/* aria-controls={"other" + index}
                aria-expanded="true" */}
                {" "}
                Roles and Responsibilities
                <ArrowDropDownOutlinedIcon
                  style={
                    workActiveIndex === index
                      ? { transform: "rotate(270deg)" }
                      : { transform: "none" }
                  }
                />
              </Button>{" "}
            </Card.Subtitle>
            <Collapse isOpened={workActiveIndex !== index}>
              <div>
                {/* // className={activeIndex === index ? "show" : "hide"}
                // id={"achievement" + index} */}
              
                <Card.Text as="ul">
                  {item["Roles and Responsibilities"].map((data, idx) => (
                    <li key={idx}>{parse(data)}</li>
                  ))}
                </Card.Text>
              </div>
            </Collapse>
          </Card.Body>
        </Card>
        {/* <hr></hr> */}
      </Container>
    );
  });


  console.log(itemList);
  return (
    <div>
      <Row>
        <Col lg={2} className="d-none d-lg-block"></Col>
        <Col lg={8}>
          <Container fluid="lg">
              <Card>
                <Card body>
                  <Card.Title as="h1">Shahrukh Shaik</Card.Title>
                  <Card.Subtitle as="h5" className="mb-2 text-muted">
                    Senior Software Engineer
                  </Card.Subtitle>
                  <Card.Text as="em">
                    DevOps/Infrastructure engineer with 4+ years of hands-on
                    experience in architecting/ automating and optimizing
                    critical deployments over large infrastructure in AWS,
                    leveraging configuration management, CI/CD, and DevOps
                    processes. Also, experienced working as Data Analyst /
                    Machine learning Practitioner.
                    {/* <MailIcon/> */}
                  </Card.Text>
                  {/* <a href="#!" className="card-link">Card link</a>
    <a href="#!" className="card-link">Another link</a> */}
                </Card>
              </Card>
          </Container>

          <Container  fluid="lg" className="py-1">
          <Card bg="gray-300">
            <Row className="py-3 mx-sm-5 justify-content-sm-center">
            
              {/* <Col className=""> */}
              {/* <Card bg="light"> */}
              {/* <div className="card py-2 px-2 bg-light"> */}
              {/* <a className="my-1" href="my.com">link </a> */}
              <Col
                lg={"auto"}
                sm={"6"}
                md={6}
                className="text-sm-start my-2 px-md-3"
              >
                {" "}
                <a href="mailto:shahrukh690432@gmail.com">
                  <MailIcon style={{ marginLeft: "16px" }} />{" "}
                  shahrukh690432@gmail.com
                </a>
              </Col>
              <Col
                lg={"auto"}
                sm={"6"}
                md={6}
                className="text-sm-start my-2 px-md-3"
              >
                {" "}
                <a href="tel:+919430162671">
                  <PhoneIphoneIcon style={{ marginLeft: "16px" }} />{" "}
                  +91-9430162671{" "}
                </a>
              </Col>
              <Col
                lg={"auto"}
                sm={"6"}
                md={6}
                className="text-sm-start my-2 px-md-3"
              >
                {" "}
                <a
                  href="https://www.google.com/maps/place/17%C2%B023'06.0%22N+78%C2%B029'12.1%22E"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MyLocationIcon style={{ marginLeft: "16px" }} /> Hyderabad,
                  India{" "}
                </a>
              </Col>
              <Col
                lg={"auto"}
                sm={"6"}
                md={6}
                className="text-sm-start my-2 px-md-3"
              >
                <a
                  href="https://www.linkedin.com/in/shahrukh432"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon style={{ marginLeft: "16px" }} />{" "}
                  linkedin.com/in/shahrukh432{" "}
                </a>
              </Col>
              {/* <div className="col-lg-auto col-sm-auto "><PhoneIphoneIcon/> +91-9430162671</div>
    <div className="col-lg-auto col-sm-auto"><MyLocationIcon/> Hyderabad, India</div>
    <div className="col-lg-auto col-sm-auto"><LinkedInIcon/> linkedin.com/in/shahrukh432</div> */}
              {/* </Card> */}
              {/* </Col> */}
              
            </Row>
            </Card>
          </Container>

          
          <Container  fluid="lg" className="Work">
            <Card bg="white">
              <Card.Body className="Work">
              <Button
                id="work"
                variant="link"
                className="py-0 px-0 mt-0 mb-2"
                onClick={handleClick}
                // aria-controls={"achievement" + index}
                // aria-expanded="true"
              >
                <Card.Title as="h3">Work Experience<ArrowDropDownOutlinedIcon
                  style={workToggle.style}
                /></Card.Title>
                </Button>
              </Card.Body>
              <Collapse isOpened={workToggle.state}>
          {itemList}
          </Collapse>

            </Card>
          </Container>
          {/* {<Details/>} */}
          <Container  fluid="lg" className="otherProjects mt-0">
            <Card bg="white">
              <Card.Body className="otherProjects" >
              <Button
                id="otherProjects"
                variant="link"
                className="py-0 px-0 mt-0 mb-2"
                onClick={handleClick}
                >
                {/* // aria-controls={"achievement" + index}
                // aria-expanded="true"
              // > */}
                <Card.Title as="h3">Other Projects<ArrowDropDownOutlinedIcon  style={otherToggle.style}/></Card.Title>
                </Button>
              </Card.Body>
              <Collapse isOpened={otherToggle.state}>
          {otherList}</Collapse>
            </Card>
          </Container>

        </Col>
        <Col lg={2} className="d-none d-lg-block"></Col>
      </Row>
      <Skills/>
    </div>
  );
}
