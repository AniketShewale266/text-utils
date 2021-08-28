import './App.css';
import React,{useState} from 'react'
// import About from './components/About';
// import Services from './components/Services';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  // const [switchText, setSwitchText] = useState("Enable light Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      // setSwitchText("Enable dark Mode")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      // setSwitchText("Enable light Mode")
    }
  }

 
  return (
    <>
      {/* <Router> */}
      <Navbar navbarTitle="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
             <TextForm heading = "Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
          {/* </Route> */}
          {/* <Route exact path="/services">
            <Services />
          </Route> */}
      {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
