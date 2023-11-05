// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "black";
      showAlert("Dark mode has been enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "white";
      showAlert("Light mode has been enable", "success");
    }
  };

  return (
    <>
        <Navbar heading="TextTutorials" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
        {/* <About/> */}
        </div>
    </>
  );
}

export default App;
