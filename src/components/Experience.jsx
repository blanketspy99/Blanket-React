import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import ExperienceDetails from "../experience.json";
import parse from "html-react-parser";
import LinkIcon from "@mui/icons-material/Link";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Skills from "./skills";
import Education from "./Education";
import Certification from "./Certifications";
import ResumeCardTitle from "./ResumeCardTitle";
import ResumeRR from "./ResumeRR";
import Interests from "./Interests";

export default function Experience() {
  // console.log(newActive);
  // const [activeIndex, setActiveIndex] = useState(null);



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
            <ResumeRR title="Achievement/Tasks" id={index}> 
            <Card.Text as="ul">
            {item["TaskAchievements"].map((data, idx) => (
              <li key={idx}>{parse(data)}</li>
            ))}
          </Card.Text>
          </ResumeRR>
      
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
            <ResumeRR title="Roles and Responsibilities" id={"other"+index}>
            <Card.Text as="ul">
                  {parse(item["Roles and Responsibilities"].map((data, idx) => (
                    "<li key="+idx+">"
                    +data+"</li>"
                  )).join(""))}
                  </Card.Text>   
              </ResumeRR>
          </Card.Body>
        </Card>
        {/* <hr></hr> */}
      </Container>
    );
  });


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
          </Col>
        <Col lg={2} className="d-none d-lg-block"></Col>
      </Row>         
       <ResumeCardTitle title="Work Experience" id="Experience"> <Card.Text as="ul">
                {itemList}
            </Card.Text> </ResumeCardTitle>

            <ResumeCardTitle title="Other Projects" id="rr"> <Card.Text as="ul">
                {otherList}
            </Card.Text> </ResumeCardTitle>
          {/* {<Details/>} */}
          


      <Skills/>
      <Education/>
      <Certification/>
      <Interests/>
    </div>
  );
}
