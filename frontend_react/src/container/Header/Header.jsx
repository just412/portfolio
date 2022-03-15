import React from 'react'
import { motion } from "framer-motion"
import { AppWrap } from "../../wrapper"

import "./Header.scss"
import { images } from "../../constants"

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1]}}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div>
              <p className='p-text'>Hello, my name is</p>
              <h1 className='head-text'>Justin Rodriguez.</h1>
              <h1 className='head-text'>An Aspiring Web Developer</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>

          <div>
            <button type="button" className='p-text'>Download CV</button>
          </div>
          
        </div>
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'Home')