import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState('light');

  const darkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enabled', 'dark');
    }
  };

  return (
    <HashRouter>
      <Navbar title='TextModifier' mode={mode} toggleMode={darkMode} />
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} />} />
        <Route path="/about" element={<About mode={mode}/>} />
      </Routes>
      <Alert alert={alert} />
    </HashRouter>
  );
}

export default App;
