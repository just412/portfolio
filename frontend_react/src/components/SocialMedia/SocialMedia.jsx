import React, { useEffect, useState } from 'react'
import { BsInstagram, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs"

import "./SocialMedia.scss"

const SocialMedia = () => {
  const [screen, setScreen] = useState()
  let resizeWindow = () => {
    setScreen(window.innerWidth)
  }

  useEffect(() => {
    resizeWindow()
    window.addEventListener('resize', resizeWindow);

    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
  }, [])

  return (
    <>
    {screen >= 900  
        ?   <div className='app__socials'>
                <p className="label p-text">SOCIALS</p>
                <div className="spacer"></div>
                <div className="item">
                    <a  href="https://github.com/just412" target='_blank'><BsGithub size={20}/></a>
                </div>
                <div className="item">
                    <a href="https://www.linkedin.com/in/justin-liza-rodriguez/" target='_blank'><BsLinkedin size={20}/></a>
                </div>
            </div> 
        :   <div className='app__social'>
                <div> <a  href="https://github.com/just412" target='_blank'><BsGithub size={20}/></a> </div>
                <div> <a href="https://www.linkedin.com/in/justin-liza-rodriguez/" target='_blank'><BsLinkedin size={20}/></a> </div>
            </div> 
    }
    </>
  )
}

export default SocialMedia