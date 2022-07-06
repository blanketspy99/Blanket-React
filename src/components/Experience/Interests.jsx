import React from "react";
import { Card } from "react-bootstrap";
import ResumeCardTitle from "./ResumeCardTitle";

export default function Interests(){

    const styles={
        border: "2px solid gray",
        borderRadius: "5px",
        padding: "5px",
        margin: "5px",
        display: "inline-block"
    };

    return <>
            <div style={{pageBreakInside: "avoid"}}>

        <ResumeCardTitle title="Interests" id="Interests">
            <Card>
                <Card.Body>
                    <Card.Text>
                    <span style={styles}>Artificial Intelligence</span>
                    <span style={styles}>Machine learning</span>
                    <span style={styles}>Big Data</span>
                    <span style={styles}>Economics</span>
                    <span style={styles}>Android</span>
                    <span style={styles}>Marketing</span>
                    <span style={styles}>Physics</span>
                    </Card.Text>
                </Card.Body>
            </Card>

        </ResumeCardTitle>
        </div>

    </>
}