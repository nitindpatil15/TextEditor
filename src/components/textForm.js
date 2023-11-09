import React, { useState } from "react";
import './index.css';

export default function TextForm(props) {
  
  const handleupclick = () => {
    console.log("You Clicked On Uppercase");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase","success")
  };
  const handleLOcase = () => {
    let lower = text.toLowerCase();
    setText(lower);
    console.log("You Clicked On lowerCase");
    props.showAlert("Converted to LowerCase","success")
  };
  const handlecopy = () => {
    console.log("I am Copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied","success")
  };
  const handleremove = () => {
    console.log("you Removed the text");
    setText("");
    props.showAlert("Removed Text","success")
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces from Sentence","success")
  };
  const handleonchange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Your text");



  return (
    <>
      <div className="container" style={{color: props.mode === "light" ? "black" : "grey",}} >
        <h1 className="container align-center" >{props.heading}</h1>
        <div className="mb-3 container">
          <textarea htmlFor="myBox" value={text} className="form-control" onChange={handleonchange} style={{backgroundColor: props.mode==='dark'? 'grey':'white'}} id="myBox" rows="11">{props.heading}</textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleupclick}>Convert To UpperCase </button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLOcase}> Convert to Lowercase </button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleremove}> remove </button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handlecopy}> Copy Text </button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpace} > Remove Extra spaces </button> 
        </div>
      <div className="con"><div className="contain" style={{ color: props.mode === "dark" ? "white" : "grey" }}>
        <h1 className="text-danger">Your Text Summary</h1>
        <p>
        {text.trim() ?  text.trim().split(/\s+/).length : 0} <b>words</b> And {text.length}{" "}
          <b>characters</b>
        </p>
        <p>
          {0.008 * text.split(" ").length} <b>Minutes read</b>
        </p>
        </div>
        <div className="contain" style={{ color: props.mode === "dark" ? "white" : "grey" }}>
        <h2 className="text-danger">Preview</h2>
        <p>{text.length>0?text:"Nothing to preview "}</p>
      </div>
      </div>
    </>
  );
}
