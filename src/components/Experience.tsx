import React, { FC, useState } from 'react';
import img from '../assets/reading.png'
import { BiRadioCircleMarked } from 'react-icons/bi'
import { IoMdArrowDropright } from 'react-icons/io'
const jobs = [
    {
        company: 'Algo Consulting Group',
        title: 'FullStack developer at algo consulting group',
        stack: [
            'Preparing the models.',
            'Use of technologies such as ReactJS and Express.js for the creation of the user interface and the backend.',
            'Implemented advanced features to ensure a smooth and user-friendly',
        ],
    },
    {
        company: 'Label’Vie Group',
        title: 'Middleware administrator at Label’Vie Group',
        stack: [
            "frontend reactjs nextjs",
            "backend nestjs",
            "databases postgreSql Mongodb"
        ]
    },
    {
        company: 'Label’Vie Group',
        title: 'Fullstack developer Intership at Label’Vie Group',
        stack: [
            'Mobile App Development With React Native',
            ' Web App Development With Angular',
            'MongoDB',
        ],
    },
    {
        company: 'Plateforme nord afrique',
        title: 'Intership at plateforme nord afrique',
        stack: [
            'desktop app development',
            'database management',
            'ui designing',
        ],
    }
]

const Experience: FC = () => {

    const [currentJob, setCurrentJob] = useState(jobs[0])

    return <div className='box' data-aos="zoom-in" id='exp'>

        <section className='exp'>
            <div id='jobs'>
                {
                    jobs.map((j) => {
                        return <button
                            style={{ backgroundColor: currentJob.title === j.title ? '#e4ffb01f' : '' }}
                            onClick={() => setCurrentJob(jobs[jobs.findIndex((t) => t.title === j.title)])}>{j.title === currentJob.title && <IoMdArrowDropright />} {j.company}</button>
                    })
                }
            </div>


            <div>
                <h3>{currentJob.title}</h3>
                <ul>
                    {
                        currentJob.stack.map((s) => {
                            return <li><BiRadioCircleMarked /> {s}</li>
                        })
                    }
                </ul>
            </div>


        </section>

        <img src={img} alt='' />
    </div>;
};

export default Experience;
