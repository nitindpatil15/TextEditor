// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter as Router,  Route, Routes,} from "react-router-dom";

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
      showAlert("Dark mode has been enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
    }
  };

  return (
    <>
        
        <Router>
          <Routes>
        
          </Routes>
        </Router>
        <Router>
        <Navbar heading="TextTutorials" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextEditor - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>}/>
            <Route path="/about" element={<About mode={mode}/>} />
           </Routes>
        </Router>
    </>
  );
}

export default App;
