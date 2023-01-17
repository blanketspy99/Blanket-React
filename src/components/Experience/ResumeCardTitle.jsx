import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
// import ExperienceDetails from "../experience.json";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Collapse } from "react-collapse";


export default function ResumeCardTitle(props){
    const id=props.id;
      const [toggle, setToggle] = useState(
        JSON.parse(sessionStorage.getItem(id)) ??
      {
        state: false,
        style: { transform: "rotate(270deg)" },
      });


    function handleClick(event) {

        function toggle(setFunction) {
          setFunction((prev) => {
            if (prev.state === true) {
              sessionStorage.removeItem(id);
              return { state: false, style: { transform: "rotate(270deg)" } };
            } else {
              sessionStorage.setItem(id, JSON.stringify({ state: !prev.state, style: {} }))
              return { state: !prev.state, style: {} };
            }
          });
        }
        toggle(setToggle);
      }

    return (
    <>
        <Card style={props.style}>
        <Card.Body>
        <Button
                  id={props.id}
                  variant="link"
                  className="py-0 px-0 mt-0"
                  onClick={handleClick}
                >
            <Card.Title as="h3">{props.title}
            <ArrowDropDownOutlinedIcon style={toggle.style} /></Card.Title>
            </Button>
            <Collapse isOpened={toggle.state}>

           {props.children}
            </Collapse>
            </Card.Body>

        </Card>


    </>
    )

}