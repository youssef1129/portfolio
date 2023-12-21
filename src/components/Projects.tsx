import { FC } from 'react';
import img from '../assets/listening.png'
import scr2 from '../assets/scr2.png'
import scr1 from '../assets/scr.png'
import scr4 from '../assets/scr4.png'
import scr5 from '../assets/scr5.png'
import scr6 from '../assets/scr6.png'
import scr7 from '../assets/rsc.png'
import linkedin2 from '../assets/a1.png'
import linkedin3 from '../assets/a2.png'
import linkedin4 from '../assets/linkMob.png'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/P3.png'
import p4 from '../assets/IPet.png'
import p5 from '../assets/IPet (1).png'

import { FaExternalLinkAlt } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface prps {
  link: string;
  content: string;
  scr: string[];
  stack: string[];
  style: string;
  title: string;
}

const Projects = () => {
  const p = [
    {
      link: 'https://ipetpets.web.app',
      content: 'Pet app using react,typescript and express.',
      scr: [p1, p2, p3, p4, p5],
      stack: ['react', 'typescript', 'express', 'web sockets'],
      style: 'content-left',
      title: 'Pet app.',
    },
    {
      link: 'https://www.npmjs.com/package/schedule-react-component',
      content: 'A react component for easy scheduling ',
      scr: [scr7],
      stack: ['react', 'typescript', 'storybook', 'npm'],
      style: 'content-left',
      title: 'Schedule-react-component',
    },
    {
      link: 'https://mylinkedinproject.web.app/',
      content: 'LinkedIn clone',
      scr: [scr5, linkedin2, linkedin3, linkedin4],
      stack: ['react', 'nestJS', 'neo4j', 'firebase', 'python', 'pandas', 'fast api'],
      style: 'content-right',
      title: 'myLinkedIn.',
    },
    {
      link: 'https://appcoach.web.app/',
      content: 'web app with crud opérations',
      scr: [scr6],
      stack: ['react', 'nestJS', 'mysql'],
      style: 'content-left',
      title: 'Coach app.',
    },
    {
      link: 'https://directmessage.web.app/',
      content: 'A progressive web application for realtime chatting using firebase realtime database and google authentification.',
      scr: [scr1],
      stack: ['react', 'firebase', 'redux'],
      style: 'content-right',
      title: 'realtime chat app.',
    },
    {
      link: 'https://clearview.web.app/',
      content: 'E-commerce app using react and redux.',
      scr: [scr2],
      stack: ['react', 'firebase', 'redux'],
      style: 'content-left',
      title: 'e-commerce app.',
    },
    {
      link: 'https://myspotifyrankings.web.app/',
      content: 'Another PWA for visualizing personalized Spotify data. View your top artists and top tracks',
      scr: [scr4],
      stack: ['react', 'spotify-api'],
      style: 'content-right',
      title: 'spotify tracks and artists.',
    },
  ]

  return <div id='projects' className='box' data-aos="zoom-in">
    <img src={img} alt='' />
    <div className='projects'>
      {
        p.map((pp,i) => {
          return <Project key={i} {...pp} />
        })
      }
    </div>
  </div>;
};



const Project: FC<prps> = (p: prps) => {
  return <div data-aos="fade-up">

    <Carousel interval={5000} autoPlay={true} infiniteLoop={true} showStatus={false} stopOnHover={true} swipeable={true} transitionTime={4000}>
      {
        p.scr.map((src, i) => {
          return <div key={i}>
            <img className='sldImg' alt='' src={src} />
          </div>
        })
      }
      {/* <div>
        <img className='sldImg' alt='' src={p.scr} />
      </div>
      <div>
        <img className='sldImg' alt='' src={p.scr} />
      </div>
      <div>
        <img className='sldImg' alt='' src={p.scr} />
      </div> */}
    </Carousel>
    <div className={p.style}>
      <h2>{p.title}</h2>
      <p>{p.content}</p>
      <code>{p.stack.map((s) => s + ' ')}</code>
      <a href={p.link} target='_blank' rel='noreferrer'><FaExternalLinkAlt /></a>
    </div>
  </div>
}

export default Projects;
