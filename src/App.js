import React,{ useState } from 'react';
import Navbar from './components/Navbar'
import TextFrom from './components/TextFrom'
import Aleart from './components/Aleart'
import About from './components/About'
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [aleart,setAleart]=useState(null);
  const showAleart=(masseg,type)=>{
    setAleart({
      msg:masseg,
      type:type
    })
    setTimeout(()=>{
      setAleart(null);
    },2000)
  }
  const toggleBtn=()=>{
    console.log("in the toggleBtn");
    if(mode==='light'){
      setMode('dark');
      
      document.body.style.backgroundColor='black';
      showAleart("Enable dark mode","success");
      document.title=document.title+"(dark mode)";
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAleart("Enable light mode","success");
    document.title="textUtils";
  }
}
  return (
    <>
    
    
    
    <Router>
<Navbar title='TextTutils' mode={mode} toggleBtn={toggleBtn} showAleart={showAleart}/>
<Aleart aleart={aleart}/>

<Routes>
          <Route path="/about" element={<About mode={mode}/>}>
            
          </Route>
          
          <Route path="/" element={<div className='container'><TextFrom heading='Enter Text bellow-' mode={mode} showAleart={showAleart}/></div>}>
          
          </Route>
        </Routes>
   
   </Router>
    
    
    
    
    
    
    </>
    
  );
}

export default App;
