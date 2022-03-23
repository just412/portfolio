import React, { useState } from 'react'

import "./Navbar.scss"
import PDF from "../../assets/Justin-Rodriguez CV.pdf"

const Navbar = () => {
  const [ toggle, setToggle ] = useState(false)
  const [navbar, setNavbar] = useState(false);
  const [scroll, setScroll] = useState(window.scrollY)

  const navBackground = () => { 
    if (scroll < window.scrollY) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
        setScroll(window.scrollY)
    };

  window.addEventListener('scroll', navBackground);

  return (
     <nav className={!navbar ? 
                        window.scrollY === 0 ? 'app__navbar' : 'app__navbar shadow'
                        : 'app__navbar hide-nav' }>
         <div class="logo-hexagon">
                    <span>J</span>
                </div>
                <ul className='app__navbar-links'>
                    {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
                        <li className='app__flex p-text' key={`link-${item}`}>
                            <div />
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    ))}
                </ul>

                <div className='app__navbar-menu'>

                    <div className="app__burger" onClick={() => setToggle(!toggle)} >
                        <div style={toggle ? {transform: 'rotate(45deg)'} : {transform: 'rotate(0)'}}/>
                        <div style={toggle ? {transform: 'translateX(100%)', opacity: 0} : {transform: 'translateX(0)', opacity: 1}}/>
                        <div style={toggle ? {transform: 'rotate(-45deg)'} : {transform: 'rotate(0)'}}/>
                    </div>
                    
                    <section style={!toggle ? {transform: 'translateX(100%)', opacity: 0} : {transform: 'translateX(0)', opacity: 1}}>
                        <ul>
                            {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}

                            <div>
                                <button type="button" className='p-text' onClick={() => window.open(PDF)}>Download CV</button>
                            </div>
                        </ul>
                    </section>
            </div>       
    </nav>
  )
}

export default Navbar