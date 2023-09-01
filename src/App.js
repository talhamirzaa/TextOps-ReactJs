import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

let a='our services';
function App() {
  const [mode,setmode]=useState("light")
  const [state1,setstate1]=useState("active")
  const [state2,setstate2]=useState('')


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
  //to change active tab
  const chngstt=()=>
  {
    if(state1==='active')
    {
      setstate1('inactive');
      setstate2('active');
    }
    else if(state2==='active')
    {
      setstate2('inactive');
      setstate1('active');
    }
    
  }

  return (
    <>
    <BrowserRouter>
    <Navbar name="TextOps" reach={a} mode={mode} togglemode={togglemode} chngstt={chngstt} state1={state1} state2={state2} ></Navbar>    
    <Alert alert="Welocme to TextOps"></Alert>
    
    
    <div className="container">
    
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}>
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
