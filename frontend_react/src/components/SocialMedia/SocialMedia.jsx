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
                    <BsGithub size={20}/>
                </div>
                <div className="item">
                    <BsLinkedin size={20}/>
                </div>
            </div> 
        :   <div className='app__social'>
                <div> <BsGithub /> </div>
                <div> <BsLinkedin /> </div>
            </div> 
    }
    </>
  )
}

export default SocialMedia