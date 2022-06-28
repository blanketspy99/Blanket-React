import React from "react";
import ExperienceDetails from "../../experience.json";
import { Card, Container } from "react-bootstrap";
import { FiExternalLink } from 'react-icons/fi';
import ResumeCardTitle from "./ResumeCardTitle";



export default function Education(){

      let educationList=[];
      ExperienceDetails["Education"].forEach((item, index) => {
          educationList.push(
          <Container  fluid="lg"  key={"education"+index} className="mb-2">
          <Card bg="white">
            <Card.Body>
              <Card.Title as="h4">{item["Degree"]}, {item["Specialization"]}</Card.Title>
              <Card.Subtitle>{item['University']}  &nbsp; <a
                  href={item["Website"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink/>{" "}
                </a></Card.Subtitle>
              <div>
              <Card.Text as="em">{item['Start Month Year']} - {item['End Month Year']}</Card.Text>
              <Card.Text as="p" className="float-end fs-6">{item['Grade']}</Card.Text>
              </div>
              </Card.Body>
              </Card>
              </Container>)
  
      })



    return <>
    <ResumeCardTitle title="Education" id="Education">
        {educationList}
    </ResumeCardTitle>
      
    </>

}