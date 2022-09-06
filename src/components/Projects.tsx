import React, { FC } from 'react';
import img from '../assets/listening.png'
import scr2 from '../assets/scr2.png'
import scr1 from '../assets/scr.png'
import scr3 from '../assets/scr3.png'
import scr4 from '../assets/scr4.png'
import scr5 from '../assets/scr5.png'
import scr6 from '../assets/scr6.png'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface prps {
  scr: string;
  style: string;
  link: string;
  title: string;
  content: string;
  stack: string[];
}

const Projects = () => {
  const p = [
    {
      link: 'https://mylinkedinproject.web.app/',
      content: 'LinkedIn clone',
      scr: scr5,
      stack: ['react', 'nestJS', 'neo4j','firebase','python','pandas','fast api'],
      style: 'content-right',
      title: 'myLinkedIn.',
    },
    {
      link: 'https://appcoach.web.app/',
      content: 'web app with crud opérations',
      scr: scr6,
      stack: ['react', 'nestJS', 'mysql'],
      style: 'content-left',
      title: 'Coach app.',
    },
    {
      link: 'https://directmessage.web.app/',
      content: 'A progressive web application for realtime chatting using firebase realtime database and google authentification.',
      scr: scr1,
      stack: ['react', 'firebase', 'redux'],
      style: 'content-right',
      title: 'realtime chat app.',
    },
    {
      link: 'https://clearview.web.app/',
      content: 'E-commerce app using react and redux.',
      scr: scr2,
      stack: ['react', 'firebase', 'redux'],
      style: 'content-left',
      title: 'e-commerce app.',
    },
    {
      link: 'https://myspotifyrankings.web.app/',
      content: 'Another PWA for visualizing personalized Spotify data. View your top artists and top tracks',
      scr: scr4,
      stack: ['react', 'spotify-api'],
      style: 'content-right',
      title: 'spotify tracks and artists.',
    },
    {
      link: 'https://youssef1129.github.io/todoTypescriptReact/',
      content: 'CRUD todo app using typescript and localstorage.',
      scr: scr3,
      stack: ['react', 'typescript'],
      style: 'content-left',
      title: 'todo app.',
    }
  ]


  return <div id='projects' className='box' data-aos="zoom-in">
    <img src={img} alt='' />
    <div className='projects'>
      {
        p.map((pp) => {
          return <Project {...pp} />
        })
      }
    </div>
  </div>;
};



const Project: FC<prps> = (p: prps) => {
  return <div data-aos="flip-up">
    <img alt='' src={p.scr} />
    <div className={p.style}>
      <h2>{p.title}</h2>
      <p>{p.content}</p>
      <code>{p.stack.map((s) => s + ' ')}</code>
      <a href={p.link} target='_blank' rel='noreferrer'><FaExternalLinkAlt /></a>
    </div>
  </div>
}

export default Projects;
