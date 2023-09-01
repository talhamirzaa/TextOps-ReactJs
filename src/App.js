import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import Service from './components/Service';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

let a='our services';
function App() {
  const [mode,setmode]=useState("light")
  const togglemode =()=>
  {
    if(mode==='light')
    {
    setmode('dark');
    document.body.style.backgroundColor='#2C3E50';
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar name="TextOps" reach={a} mode={mode} togglemode={togglemode}></Navbar>    
    <Alert alert="Welocme to TextOps"></Alert>
    
    
    <div className="container">
    
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route path="/service" element={<Service mode={mode}/>}>
            </Route>
            <Route path="/" element={<TextForm head="Enter the Text Below" mode={mode}/>}>
            </Route>
          </Routes>
    
    </div>
    </BrowserRouter>


    </>
  

  );
}

export default App;
