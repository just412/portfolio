import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

import { images } from "../../constants"
import "./About.scss"
import { urlFor, client } from "../../client"
import { AppWrap, MotionWrap } from "../../wrapper"

const About = () => {
  const [abouts, setAbouts] = useState([])
  const [avatar, setAvatar] = useState(true)

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query).then((data) => setAbouts(data))
  },[])
  
  return (
    <>
      <motion.div
        whileInView={{ opacity: 1 }}
        className="app__about-container"
      >
        <div className='app__about-text'>
          <h1 className='head-text'>About Me</h1>
        </div>
        <div className='app__about-content'>
          <p className='p-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/>
            <br/>
            <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </p>
          <div className='app__about-avatar'>
            <div className='app__about-img'>
              <motion.img
                whileTap={{ opacity:0 ,rotateY: -180 }}
                whileHover={{ scale: 1.1 }}
                src={avatar ? images.avatar : images.profile} 
                onClick={() => setAvatar(!avatar)}
              />
            </div>
          </div>
        </div>
      </motion.div>
      {/* <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title}/>
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p> 
          </motion.div>
        ))}
      </div> */}
    </>
  )
}

export default AppWrap(
  MotionWrap(About, "app__about"), 
  "About",
  "app__navybg"
)