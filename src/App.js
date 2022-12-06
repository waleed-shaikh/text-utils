// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Alerts from "./components/Alerts";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [ybgmode, setYBgMode] = useState('white'); 
  const [gbgmode, setGBgMode] = useState('white'); 
  const [bbgmode, setBBgMode] = useState('white'); 
  const [alert, setAlert] = useState(null)
  const [btntext, setBtnText] = useState("Enable Dark Mode");
  
  const yellowMode = () =>{
    if(ybgmode==='white'){
      setYBgMode("rgb(78, 78, 0)");
      document.body.style.backgroundColor = "rgb(78, 78, 0)";
      showAlert("Yellow mode has been enable", "success")
    }else{
      setYBgMode("rgb(78, 78, 0)");
      document.body.style.backgroundColor = "rgb(78, 78, 0)";
      showAlert("Yellow mode has been enable", "success")
    }
  }
  const greenMode = () =>{
    if(gbgmode==='white'){
      setGBgMode("rgb(19, 53, 0)");
      document.body.style.backgroundColor = "rgb(19, 53, 0)";
      showAlert("Green mode has been enable", "success")
    }else{
      setGBgMode("rgb(19, 53, 0)");
      document.body.style.backgroundColor = "rgb(19, 53, 0)";
      showAlert("Green mode has been enable", "success")
    }
  }
  const blueMode = () =>{
    if(bbgmode==='white'){
      setBBgMode("rgb(1, 0, 53)");
      document.body.style.backgroundColor = "rgb(1, 0, 53)";
      showAlert("Blue mode has been enable", "success")
    }else{
      setBBgMode("rgb(1, 0, 53)");
      document.body.style.backgroundColor = "rgb(1, 0, 53)";
      showAlert("Blue mode has been enable", "success")
    }
  }

  const showAlert = (message, type) =>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "rgb(0, 65, 88)";
        setBtnText("Enable Light Mode");
        showAlert("Dark mode has been enable", "success");
        document.title = "TextUtils - Dark Mode";
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        setBtnText("Enable Dark Mode");
        showAlert("Light mode has been enable", "success");
        document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar mode={mode} ybgmode={ybgmode} gbgmode={gbgmode} bbgmode={bbgmode} btntext={btntext} yellowMode={yellowMode} greenMode={greenMode} blueMode={blueMode} toggleMode={toggleMode} title1="Text" title2="Utils" aboutText="About" contact="Contact"/>
      <Alerts alert={alert} />
      <div className="container my-3">
      {/* <Routes> */}
            {/* <Route exact path="/about"
            element={
            }> */}
              {/* <About heading="About Us"/> */}
            {/* </Route> */}
            {/* <Route exact path="/"
            element={
            }> */}
              <TextForm showAlert={showAlert} ybgmode={ybgmode} gbgmode={gbgmode} bbgmode={bbgmode} mode={mode}  heading="Enter the text to analyze" />
            {/* </Route> */}
      {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
