import React from 'react';
import {BsEmojiSmileUpsideDown} from 'react-icons/bs';
import {FaInstagram,FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineGithub} from 'react-icons/ai';


const Contact = () => {
  return <div className='contact' data-aos="zoom-in" id='contacts'>
    <h1>Contact me</h1>
    <p>Don't hesitate to contact me in my mail below :</p>
    <a href="mailto:maazouzyouusef11@gmail.com">mail me here</a>
    <div>
      <a href="https://www.instagram.com/youssefmaazouz_/" target='_blank' rel="noreferrer"><FaInstagram/></a>
      <a href="https://www.linkedin.com/in/youssef-maazouz-7838201bb/" target='_blank' rel="noreferrer"><FaLinkedinIn/></a>
      <a href="https://github.com/youssef1129" target='_blank' rel="noreferrer"><AiOutlineGithub/></a>
    </div>
    <div><span>designed and built by Youssef Maazouz</span><BsEmojiSmileUpsideDown/></div>
  </div>;
};

export default Contact;
