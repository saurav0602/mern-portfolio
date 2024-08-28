import React from 'react'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          <h1 className='text-2xl text-white-900'>Sk</h1>
            </div>
            <div className='m-6 flex items-center justify-center gap-3 text-2xl '>
            <a href='https://www.linkedin.com/in/saurav-kumar-938b29238/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin />
        </a>
        <a href='https://github.com/saurav0602' target='_blank' rel='noopener noreferrer'>
          <FaGithub />
        </a>
        <a href='https://www.threads.net/@mr._.sharmaa__' target='_blank' rel='noopener noreferrer'>
          <FaSquareXTwitter/>
        </a>
        <a href='https://www.instagram.com/mr._.sharmaa__/' target='_blank' rel='noopener noreferrer'>
          <FaInstagram />
        </a>
            </div>


    </nav>
  )
}

export default Navbar
