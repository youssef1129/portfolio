import React, { FC, useState } from 'react';
import img from '../assets/reading.png'
import { BiRadioCircleMarked } from 'react-icons/bi'
import { IoMdArrowDropright } from 'react-icons/io'

const Experience: FC = () => {

    const [job, setJob] = useState<number>(1)

    return <div className='box' data-aos="zoom-in" id='exp'>

        <section className='exp'>

            <div id='jobs'>
                <button style={{ backgroundColor: job === 1 ? '#e4ffb01f' : '' }} onClick={() => setJob(1)}>{job === 1 && <IoMdArrowDropright />} Label’Vie Group</button>
                <button style={{ backgroundColor: job === 2 ? '#e4ffb01f' : '' }} onClick={() => setJob(2)}>{job === 2 && <IoMdArrowDropright />} Label’Vie Group</button>
                <button style={{ backgroundColor: job === 3 ? '#e4ffb01f' : '' }} onClick={() => setJob(3)}>{job === 3 && <IoMdArrowDropright />} Plateforme nord afrique</button>
            </div>

            {
                job === 1 ?
                    (<div>
                        <h3>Middleware administrator at Label’Vie Group</h3>
                        <ul>
                            <li><BiRadioCircleMarked /> frontend reactjs nextjs</li>
                            <li><BiRadioCircleMarked /> backend nestjs</li>
                            <li><BiRadioCircleMarked /> databases postgreSql Mongodb</li>
                        </ul>
                    </div>)
                    : job === 2 ?
                        (<div>
                            <h3>Fullstack developer Intership at Label’Vie Group</h3>
                            <ul>
                                <li><BiRadioCircleMarked /> Mobile App Development With React Native</li>
                                <li><BiRadioCircleMarked /> Web App Development With Angular</li>
                                <li><BiRadioCircleMarked /> MongoDB</li>
                            </ul>
                        </div>)
                        :
                        (<div>
                            <h3>Intership at plateforme nord afrique</h3>
                            <ul>
                                <li><BiRadioCircleMarked /> desktop app development</li>
                                <li><BiRadioCircleMarked /> database management</li>
                                <li><BiRadioCircleMarked /> ui designing</li>
                                <li><BiRadioCircleMarked /> ui designing</li>
                            </ul>
                        </div>)
            }
        </section>

        <img src={img} alt='' />
    </div>;
};

export default Experience;
