import React from 'react'
import logo from '../assets/mylogo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className="p-4 text-white">
      <div className="flex justify-center mb-4">
        <img src={logo} alt="Logo" className="h-25 w-25" />
      </div>
        <div className="flex justify-center gap-6 mt-2">
            <a href="https://www.linkedin.com/in/rajveer-singh-80757228a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-5 w-5 hover:text-blue-500" />
            </a>
            <a href="https://github.com/rajveerrs7" target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-5 w-5 hover:text-gray-400" />
            </a>
            <a href="https://www.instagram.com/rajveer.singh739/" target="_blank" rel="noopener noreferrer">
                <FaSquareInstagram className="h-5 w-5 hover:text-pink-500" />
            </a>
        </div>
    </nav>
  )
}

export default Navbar