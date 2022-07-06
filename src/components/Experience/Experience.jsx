import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Form, Container, Button } from "react-bootstrap";
// import ExperienceDetails from "../../experience.json";
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
// import ReactLoading from "react-loading"
import Spinner from "../Spinner/spinner";

export default function Experience() {

  const [details, setDetails] = useState();
  const [val, setVal] = useState();

  useEffect(() => {
    console.log(val);
    if (val){
      console.log(val);
      setDetails(JSON.parse(localStorage.getItem(val)));
    }
    else {
      axios.get(process.env.PUBLIC_URL+"/experience.json").then((response) => {
        setDetails(response.data);
      })     }

    }, [val]);
console.log(details);

  let itemList = [];
  let otherList = [];
  if (details) {
  details["Work Experience"].forEach((item, index) => {
    itemList.push(
      // <Container  fluid="lg" key={index} className="mb-lg-2">
      <div style={{pageBreakInside: "avoid"}}>

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
        </div>
      // </Container> 
    );
  });

  details["Other Projects"].forEach((item, index) => {
    otherList.push(
      // <Container  fluid="lg"  key={"other"+index} className="mb-2">
      <div style={{pageBreakInside: "avoid"}}>
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
        </div>
        
      // </Container>
    );
  });
  }

  return (
    <>
    {details ? 
    <Container fluid>
      <Row>
        <Col lg={2} className="d-none d-lg-block"></Col>
        <Col lg={8}>
          {/* <Container fluid="lg"> */}
              <Card>
                <Card body>
                  <Card.Title as="h1">{details['Name']}</Card.Title>
                  <Card.Subtitle as="h5" className="mb-2 text-muted">
                    {details["Primary Title"]}
                  </Card.Subtitle>
                  <span className="printSummary">{details['Objective Summary']}</span>
                  <Card.Text as="em" className="reactreadmoreless">
                  <ReactReadMoreReadLess
        charLimit={201}
        readMoreText={"Read more ▼"}
        readLessText={"Read less ▲"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less">
                    {details['Objective Summary']}
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
                    {details["Email"]}
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
                    {details["Telephone"]}{" "}
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
                    href={"https://www.google.com/maps?q="+details["Location"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MyLocationIcon style={{ marginLeft: "16px" }} /> {details["Location"]}
                  </a>
                </Col>
                <Col
                  lg={"auto"}
                  sm={"6"}
                  md={6}
                  className="text-sm-start my-2 px-md-3"
                >
                  <a
                    href={"https://www."+details["LinkedIn"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon style={{ marginLeft: "16px" }} />{" "}
                    {details["LinkedIn"]}{" "}
                  </a>
                </Col>
    
                
              </Row>
              </Card>
          {/* </Container> */}
       <ResumeCardTitle title="Work Experience" id="Experience"> <Card.Text as="ul">
                {itemList}
            </Card.Text> </ResumeCardTitle>

            <ResumeCardTitle title="Other Projects" id="rr"> <Card.Text as="ul">
                {otherList}
            </Card.Text> </ResumeCardTitle>
          
          


      <Skills exp={details}/>
      <Education exp={details}/>
      <Certification exp={details}/>
      <Interests exp={details}/> 
      </Col>
        <Col lg={2} className="d-none d-lg-block">
        <div className="mt-4">
        <center> 
        
  <Form.Select disabled onChange={(valu)=>(setVal(valu.target.value))}>
    <option value="">Default</option>
  <option value={"exp2"}> Exp 2 </option>
  </Form.Select>
  </center>
  <br></br>
  <hr></hr>
  <br></br>
  <Button variant="secondary" onClick={() => window.print()}> PRINT </Button>
          {/* <button onClick={() => window.print()}>PRINT</button> */}
          <br></br>
        <em>Click to open print dialog and select "Save to PDF"</em>




      </div>
        </Col>
      </Row> </Container> : <Spinner color="blue" type="spin"></Spinner> }
    </>
  );
}

