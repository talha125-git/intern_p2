import { useState } from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Componants/Header_1.jsx'
import Header_2 from './Componants/Header_2.jsx'
import './App.css'

function App() {
 

  return (
     <Router>
      {/* <Header /> */}
      <Header_2 />
      
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      
    </Router>
  );
  
}

export default App
