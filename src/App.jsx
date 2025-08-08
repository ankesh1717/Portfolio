import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './component/navbar/Navbar'
import Home from './component/pages/home/Home';
import About from './component/pages/about/About';
import Contact from './component/pages/contact/Contact';
import Projects from './component/pages/project/Project';
import Skills from './component/pages/skill/Skill';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    
     
    </>
  )
}

export default App
