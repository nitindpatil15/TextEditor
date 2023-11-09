import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  //   backgroundSize: "cover",
  // });
  let myStyle = {
    color: props.mode ==='dark'? "white":"black",
    backgroundcolor: props.mode ==='dark'? "black":"white"
  }
  // const [btntext, setBtntext] = useState("Enable Dark Mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       backgroundSize: "cover",
  //       border: " 1px solid black"
  //     });
  //     setBtntext("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       backgroundSize: "cover",
  //       border: " 1px solid white"
  //     });
  //     setBtntext("Disable Dark Mode");
  //   }
  // };
  
  return (
    <div className="container my-3 ">
      <h1 className="container my-3">About Us</h1>
      <div className="accordion" style={{backgroundColor: props.mode==='dark'? 'white':'black'}} id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            style={myStyle}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle} >
               TextTutorials gives you a way to analyze your text Quickly and efficiently.
              be it word count, character count 
          </div>
        </div>
        <div className="accordion-item"  >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            style={myStyle}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle} >
               TextTutorials is a free character counter tool that provides  instant character count and word count statistics for a given text.  TextTutorials reports the number of words and characters. Thus it is suitable for writing text with word/character limit.</div>
              </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Brower Compatiable</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            style={myStyle}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle} >
              This word counter software works in any web browsers such as chrome, Firefox, Internet Explorer, Safari, opera.
              It suits to count characters in facebook, blog, books, excel document, pdfdocument,essays, ect.
              </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
