import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import ExperienceDetails from "../experience.json";



export default function Skills(){
    const skillDetails=ExperienceDetails['Skills'];
    const skillTypes = Object.keys(skillDetails);
    const skillTypesCount = skillTypes.length;
    // let skillsList=[];
    let part1=[];
    let part2=[];
    for(let i=0;i<skillTypesCount;i++){
        const key=skillTypes[i];
        if(i%2 === 0){
            part1.push(<li key={key}><b>{key}</b>: {skillDetails[key]}</li>);
        }
        else{
            part2.push(<li key={key}><b>{key}</b>: {skillDetails[key]}</li>);
        }

    }

    return <>
    
       <Row>
        
         
                <Col lg={2} className="d-none d-lg-block"></Col>
                <Col lg={8}>
                <Container  fluid="lg">
                    <Card>
                    <Card.Body>
                        <Card.Title as="h3"> Skills {}</Card.Title>
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
                        {/* <hr></hr> */}
                        </Card.Body>
                        
                    </Card>
                    
                    </Container>
                </Col>
                <Col lg={2} className="d-none d-lg-block"></Col>
            
        
        </Row>
    </>
}