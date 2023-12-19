import React, { useState } from 'react'
import logo from '../../netflixlogo.png'
import {Link} from 'react-router-dom'
import { ImSearch } from "react-icons/im";
import { TfiAlignJustify } from "react-icons/tfi";

const Header = () => {
  const [isOpen,setIsOpen]=useState(false);

  const toggleNavbar=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <nav className={isOpen?'header1':'header2'}>
        <img src={logo} alt='logo'/>
        <div className='mainnav'>
            <Link to='../Home'>Home</Link>
            <Link to='./tvshows'>TV Shows</Link>
            <Link to='./movies'>Movies</Link>
            <Link to='./recentlyadded'>Recently Added</Link>
            <Link to='./mylist'>My List</Link>
        </div>
        <ImSearch className='search'/>
        
        <div className={isOpen?'open':'navlink'} >
        <TfiAlignJustify onClick={toggleNavbar}/>
          <ul>
            <li><Link to='../Home'>Home</Link></li>
            <li><Link to='./tvshows'>TV Shows</Link></li>
            <li><Link to='./movies'>Movies</Link></li>
            <li><Link to='./recentlyadded'>Recently Added</Link></li>
            <li><Link to='./mylist'>My List</Link></li>
          </ul>
        </div>
    </nav>
  )
}

export default Header