import React, { FC, useEffect } from 'react';
import './styles/App.css';
import './styles/other.css';
import Head from './components/Head';
import 'aos/dist/aos.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
const Aos = require('aos');

const App: FC = () => {

  useEffect(() => {
    Aos.init()
  }, [])


  return (
    <div className="main">
      <Head />
      <About />
      <div className='box2'>
        <h1>experience</h1>
        <span></span>
      </div>
      <Experience />
      <div className='box2'>
        <span></span>
        <h1>projects</h1>
      </div>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
