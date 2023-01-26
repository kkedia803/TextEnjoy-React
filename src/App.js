import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';


function App() {
  const [pmode, setPmode] = useState('light')
  const [gmode, setGmode] = useState('green')
  const [rmode, setRmode] = useState('red')
  const [ymode, setYmode] = useState('yellow')
  const [alert, setAlert] = useState(null)
  const [bcolor, setBcolor] = useState('secondary')

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  setTimeout(() => {
    setAlert(null);
  }, 4000);

  const togMode = () => {
    if (pmode === 'light') {
      showAlert('Dark Mode Is Enabled', 'success');
      setPmode('dark')
      setBcolor('primary')
      document.body.style.backgroundColor = '#042743'
    }
    else {
      showAlert('Light Mode Is Enabled', 'success');
      setPmode('light')
      setBcolor('secondary')
      document.body.style.backgroundColor = 'white'
    }
  }

  const greMode = () => {
    if (gmode === 'green') {
      showAlert('Green Mode Is Enabled', 'success');
      setGmode('glight')
      setBcolor('success')
      document.body.style.backgroundColor = '#285D34'
    }
    else {
      showAlert('Green Mode Is Disabled', 'success');
      setGmode('green')
      setBcolor('secondary')
      document.body.style.backgroundColor = 'white'
    }
  }

  const redMode = () => {
    if (rmode === 'red') {
      showAlert('Red Mode Is Enabled', 'success');
      setRmode('rlight')
      setBcolor('danger')
      document.body.style.backgroundColor = '#ff726f'
    }
    else {
      showAlert('Red Mode Is Disabled', 'success');
      setRmode('red')
      setBcolor('secondary')
      document.body.style.backgroundColor = 'white'
    }
  }

  const yelMode = () => {
    if (ymode === 'yellow') {
      showAlert('Yellow Mode Is Enabled', 'success');
      setYmode('ylight')
      setBcolor('warning')
      document.body.style.backgroundColor = '#EDD94C'
    }
    else {
      showAlert('Yellow Mode Is Disabled', 'success');
      setYmode('yellow')
      setBcolor('secondary')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Router>
        <Navbar title='TextEnjoy' toggleMode={togMode} greMode={greMode} redMode={redMode} yelMode={yelMode} />
        <Alert alert={alert} />
        <div className='container my-5 mb-2'>
        <Routes>
          <Route exact path="/home" element={<TextForm showAlert={showAlert} heading='Enter Text Here' pmode={pmode} bcolor={bcolor} />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter Text Here' pmode={pmode} bcolor={bcolor} />} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
