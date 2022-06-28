import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Collapse } from "react-collapse";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

export default function ResumeRR(props){
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


    return <>
        <Card.Subtitle className="mt-2 text-muted">
              {" "}
              <Button
                variant="link"
                className="py-0 px-0 mt-0 mb-lg-2"
                onClick={handleClick}>
                {/* aria-controls={"other" + index}
                aria-expanded="true" */}
                {" "}
                {props.title}
                <ArrowDropDownOutlinedIcon
                  style={toggle.style}
                />
              </Button>{" "}
            </Card.Subtitle>
            <Collapse isOpened={toggle.state}>
                {/* // className={activeIndex === index ? "show" : "hide"}
                // id={"achievement" + index} */}
              {/* <li key={idx}> */}
              {/*  </li> */}
              {/* <ul> */}
              {props.children}
                {/* <Card.Text as="ul">
                
                

                  {parse(item["Roles and Responsibilities"].map((data, idx) => (
                    "<li key="+idx+">"
                    +data+"</li>"
                  )).join(""))}
                  
                </Card.Text> */}
            </Collapse>

    </>

}

  