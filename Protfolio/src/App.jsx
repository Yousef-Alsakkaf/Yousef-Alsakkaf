import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Design from './components/Design';
import Projects from './components/Projects'
import Empty from './components/Empty';
import {Routes, Route} from 'react-router-dom'
function App() {
  

  return (
    <>
      <div>
        <div>
          <Design></Design>
        </div>
        <Navbar></Navbar>
        {/* <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/skills' element={<Skills></Skills>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes> */}
        <Home></Home>
        <Projects></Projects>
        <About></About>
        <Empty></Empty>
        <Skills></Skills>
        <Empty></Empty>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
