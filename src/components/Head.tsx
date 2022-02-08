import React, { FC, useState } from 'react';
import { FiDownload } from 'react-icons/fi'
import { CgMenuRight } from 'react-icons/cg'
import { MdOutlineCancel } from 'react-icons/md'


const Head: FC = () => {

    const [menu, setMenu] = useState<boolean>(true);
    const [style, setStyle] = useState({ transform: '0' })
    const menuToggle = () => {
        menu ? setStyle((old) => old = { transform: 'translateX(0)' })
            : setStyle((old) => old = { transform: 'translateX(-1000%)' })
        setMenu((old) => old = !old)
    }

    const [y, setY] = useState<number>(0)
    const [display, setDisplay] = useState({ transform: 'translateY(0)' })

        document.onscroll = () => {
            const timer = setTimeout(() => {
                setY(window.scrollY)
                if (window.scrollY > y) {
                    window.innerWidth>780&& setDisplay({ transform: 'translateY(-100%)' })
                }
                else {
                    setDisplay({ transform: 'translateY(0)' })
                }
            }, 500)

            return () => clearTimeout(timer)
        }
        
        window.onresize = ()=>{
            window.innerWidth>780&&setStyle((old) => old = { transform: 'translateX(0)' })
        }
    return <nav className='header'  style={display}>

        <div className='menu' onClick={menuToggle}>
            {menu ? <CgMenuRight data-aos="flip-down" /> : <MdOutlineCancel data-aos="flip-up" />}
        </div>

        <ul style={style}>
            <li><a href='#about'>about</a></li>
            <li><a href='#exp'>experience</a></li>
            <li><a id='down' href='https://youssef1129.github.io/cv/' rel="noreferrer" target='_blank'><FiDownload /> resume</a></li>
            <li><a href='#projects'>projects</a></li>
            <li><a href='#contacts'>contact</a></li>
        </ul>

    </nav>;
};

export default Head;
