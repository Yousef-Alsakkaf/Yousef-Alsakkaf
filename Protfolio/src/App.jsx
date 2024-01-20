import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Design from './components/Design';
function App() {
  

  return (
    <>
      <div>
        <div>
          <Design></Design>
        </div>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
