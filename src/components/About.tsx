import React from 'react';
import img from '../assets/chatting.png'
import {FaReact,FaNodeJs} from 'react-icons/fa'
import {SiTypescript,SiFirebase} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'

const About = () => {
  return <div className='box' data-aos="fade-right" id='about'>
      <img src={img} alt='' />
      <section>
          <code>hello, my name is</code>
          <h1>Yyoussef Maazouz.</h1>
          <h3>Welcome to my portfolio.</h3>
          <p>I'm a software developer currently working
             at Algo Consulting Group , i'm specialized in building web/mobile
             applications with multiple stacks and tools.<br/><br/>
             Here are a few technologies I have been working with recently:<br/><br/>
             <FaReact/> <SiTypescript/> <IoLogoJavascript/> <FaNodeJs/> <SiFirebase/>
          </p>
      </section>
  </div>;
};

export default About;
