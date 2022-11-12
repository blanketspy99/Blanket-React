import React from "react";
import { Card } from "react-bootstrap";
import ResumeCardTitle from "./ResumeCardTitle";

export default function Interests(props){

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
                        {props.exp["Interests"].map((key, idx) => (
                            <span style={styles} key={idx}>
                                {key}
                            </span>
                        ))}
                    </Card.Text>
                </Card.Body>
            </Card>

        </ResumeCardTitle>
        </div>

    </>
}