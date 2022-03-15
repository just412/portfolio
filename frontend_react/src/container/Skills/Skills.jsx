import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import ReactTooltip from "react-tooltip"

import "./Skills.scss"
import { AppWrap, MotionWrap } from "../../wrapper"
import { urlFor, client } from "../../client"


const Skills = () => {
  const [skills, setSkills] = useState([])
  const [exp, setExp] = useState([])
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const expQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    const query = '*[_type == "abouts"]'

    client.fetch(expQuery).then((data) => {
      setExp(data)
    })

    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })

    client.fetch(query).then((data) => setAbouts(data))
  }, [])

  return (
    <>
      <h2 className='head-text'><span>Technologies</span> I’ve been working with recently</h2>

      <div className='app__skills-container'>
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0,1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name}/>
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className='app__profiles'>
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
        </div>

        {/* <motion.div className="app__skills-exp">
          {exp?.map((exp) => (
            <motion.div
              className='app__skills-exp-item'
              key={exp.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{exp.year}</p>
              </div>

              <motion.div className='app__skills-exp-works'>
                {exp.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0,1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor='#fff'
                      className='skills-tooltip'
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))} 
            
               
        </motion.div> */}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, "app__skills"), 
  "Skills",
  "app__navybg"
)