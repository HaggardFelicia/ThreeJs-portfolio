import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom' 
import {navLinks} from '../constants'
import { hwdlogo, menu, close} from '../assets'

const Navbar = () => {
  const  [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={'paddingX'}>
      <div className='nav'>
        <Link 
          to='/' className='logo-link' 
          onClick={()=>{
            setActive('');
            window.scrollTo(0,0);
          }}
        >
          <img src={hwdlogo} alt='logo' className='logo'/>
          <p className='logo-text'>
            Felicia <span className='logo-text sm-logo-text'>Haggard</span>
            </p>
        </Link>
        <ul className='link-container'>
          {/* Mapping out nav links from constants */}
          {navLinks.map((link)=>(
            <li
              key={link.id}
              className={`${
                active===link.title
                ? "text-white" : 'text-secondary'
                } li-links`}
                onClick={()=>setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='mobile-nav'>
          <img
            src={toggle ? close : menu} alt='menu'
            onClick={()=> setToggle(!toggle)}
          />
          <div className={`mobile-nav-container gray-blue-gradient ${!toggle ? 'hidden': 'flex'}`}>
            <ul className='mobile-link-container'>
            {/* Mapping out nav links from constants */}
              {navLinks.map((link)=>(
                <li
                  key={link.id}
                  className={`${
                    active===link.title
                    ? "text-white" : 'text-secondary'
                    } mobile-li-links`}
                    onClick={()=>{
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;