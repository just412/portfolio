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
            Hello! I am Justin and I love creating stuffs through programming that helps businesses or even daily tasks simple. My interest, specially in <span>web development</span> or programming in general started way back in 2012 when I wrote a syntax for a school exercise in a piece of paper. Without much expectation, it worked in the compiler just as how I wrote it. 
            <br/>
            <br/>
            <p className='p-text'>Fast forward today, that interest was relived when the pandemic started and I began to solve quick programming problems in the internet in my spare time while working as a <span>Quality Assurance Analyst</span> at home. That's when I realized I want to start a career in web development.</p>
            <br/>
            <p className='p-text'>In my on and off self-study journey in web development for almost two years, I feel inlove designing <span>frontend</span> of a website and also the challenge of creating logic for <span>backend</span> or an API.</p>
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