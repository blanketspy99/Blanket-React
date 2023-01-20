import React, {useState, useEffect } from "react";
// import { Card, Row, Col, Form, Container, Button } from "react-bootstrap";
import "./Docs.css"
import Iframe from 'react-iframe'
// import IframeResizer from 'iframe-resizer-react'
import axios from "axios";
import Spinner from "../Spinner/spinner";
import { useSearchParams } from "react-router-dom";



export default function Docs() {
    const [searchParams] = useSearchParams();

    const current_doc=searchParams.get('page');
    console.log(current_doc);
    const [pages, setPages] = useState();
    // eslint-disable-next-line
  const [val, setVal] = useState();

  useEffect(() => {
    if (val){
      setPages(JSON.parse(localStorage.getItem(val)));
    }
    else {
      axios.get(process.env.PUBLIC_URL+"/docs.json").then((response) => {
        setPages(response.data);
        // document.title = details["Name"];
      })     };

    }, [val]);

//   const { from } = location.state;
//   console.log(from);

    return (
<>{ pages ?
<div className="docs">
     <Iframe url={pages[current_doc]}
id="myFrame"
width="100%"
height="100%"
// frameBorder="0"
scrolling="yes"
        />
</div>
: <Spinner color="blue" type="spin"></Spinner>}
</>
)
}

// {/* <Iframe url={process.env.PUBLIC_URL+"/Documentations/mycommon/"} */}