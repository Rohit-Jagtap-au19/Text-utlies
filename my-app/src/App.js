import './App.css';
// import Contact from './components/Contact'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import ContactForm from './components/ContactForm';
import Mailer from './components/mailer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Enabled Dark Mode", "success ")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = '#F5F5F5';
      showAlert("Enabled Light Mode ", "success ")
      // document.title = 'TextUtlies - Light Mode'
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text-Utils" AboutTitle="About" contactus="Contact Me" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/contact">
              {/* <Contact mode={mode} /> */}
              <Mailer />

            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtiles - Word counter, charector counter, Remove Extra Spaces" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <ContactForm/> */}
    </>
  );
}
export default App;
