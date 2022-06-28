import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ExperienceDetails from "../../experience.json";
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
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./Experience.css";

export default function Experience() {
  // console.log(newActive);
  // const [activeIndex, setActiveIndex] = useState(null);



  let itemList = [];
  ExperienceDetails["Work Experience"].forEach((item, index) => {
    itemList.push(
      // <Container  fluid="lg" key={index} className="mb-lg-2">
        <Card key={index} bg="white">
          <Card.Body>
            <Card.Title as="h4">{item["Role"]}</Card.Title>
            <Card.Subtitle as="p" className="companyName">
              {item["Company Name"]} - {item["Client Name"]} Client{" "}
              <a href={item["Company Website"]}>
                <LinkIcon />{" "}
              </a>{" "}
            </Card.Subtitle>
            <Row>
            <Col className="text-muted col-6">
                {item["Start Month Year"]}-
                {item["End Month Year"] === "None"
                  ? " present"
                  : item["End Month Year"]}
              </Col>
              <Col className="text-muted text-end col-6">
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
        
      // </Container> 
    );
  });

  let otherList = [];
  ExperienceDetails["Other Projects"].forEach((item, index) => {
    otherList.push(
      // <Container  fluid="lg"  key={"other"+index} className="mb-2">
        <Card  key={"other"+index} bg="white">
          <Card.Body>
            <Card.Title as="h4">{item["Title"]}</Card.Title>
            <Card.Subtitle as="p" className="companyName">
              {item["Sub Title"]}
              {/* <a href={item["Company Website"]}>
                <LinkIcon />{" "}
              </a>{" "} */}
            </Card.Subtitle>
            <Row>
              <Col className="text-muted col-6">
                {item["Start Month Year"]}-
                {item["End Month Year"] === "None"
                  ? " present"
                  : item["End Month Year"]}
              </Col>
              <Col className="text-muted text-end col-6">
                {item["Location"]}
              </Col>
            </Row>
            {/* <Card.Subtitle className="mb-2 text-muted"> Card subtitle </Card.Subtitle> */}
            <Card.Subtitle className="mt-lg-2 text-muted">
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
        
      // </Container>
    );
  });


  return (
    <>
    
      <Row>
        <Col lg={2} className="d-none d-lg-block"></Col>
        <Col lg={8}>
          {/* <Container fluid="lg"> */}
              <Card>
                <Card body>
                  <Card.Title as="h1">{ExperienceDetails['Name']}</Card.Title>
                  <Card.Subtitle as="h5" className="mb-2 text-muted">
                    {ExperienceDetails["Primary Title"]}
                  </Card.Subtitle>
                  <Card.Text as="em">
                  <ReactReadMoreReadLess
        charLimit={200}
        readMoreText={"Read more ▼"}
        readLessText={"Read less ▲"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less">
                    {ExperienceDetails['Objective Summary']}
                    </ReactReadMoreReadLess>
                    
                  </Card.Text>
   
                </Card>
              </Card>
          {/* </Container>  */}

          {/* <Container  fluid="lg" className="py-1"> */}
            <Card bg="gray-300" className="py-1">
              <Row className="py-3 mx-sm-5 justify-content-sm-center">
              
                <Col
                  lg={"auto"}
                  sm={"6"}
                  md={6}
                  className="text-sm-start my-2 px-md-3"
                >
                  {" "}
                  <a href="mailto:shahrukh690432@gmail.com">
                    <MailIcon style={{ marginLeft: "16px" }} />{" "}
                    {ExperienceDetails["Email"]}
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
                    {ExperienceDetails["Telephone"]}{" "}
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
                    href={"https://www.google.com/maps?q="+ExperienceDetails["Location"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MyLocationIcon style={{ marginLeft: "16px" }} /> {ExperienceDetails["Location"]}
                  </a>
                </Col>
                <Col
                  lg={"auto"}
                  sm={"6"}
                  md={6}
                  className="text-sm-start my-2 px-md-3"
                >
                  <a
                    href={"https://www."+ExperienceDetails["LinkedIn"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon style={{ marginLeft: "16px" }} />{" "}
                    {ExperienceDetails["LinkedIn"]}{" "}
                  </a>
                </Col>
    
                
              </Row>
              </Card>
          {/* </Container> */}
          </Col>
        <Col lg={2} className="d-none d-lg-block"></Col>
      </Row>  
          
       <ResumeCardTitle title="Work Experience" id="Experience"> <Card.Text as="ul">
                {itemList}
            </Card.Text> </ResumeCardTitle>

            <ResumeCardTitle title="Other Projects" id="rr"> <Card.Text as="ul">
                {otherList}
            </Card.Text> </ResumeCardTitle>
          
          


      <Skills/>
      <Education/>
      <Certification/>
      <Interests/> 
    </>
  );
}
