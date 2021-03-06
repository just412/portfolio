import React, {useState} from 'react'

import { AppWrap, MotionWrap } from "../../wrapper"
import { urlFor, client } from "../../client"
import { images } from '../../constants'
import "./Footer.scss"

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const { name, email, message } = formData;


  const handleInput = (input) => {
    const { name, value } = input.target;

    setFormData({ ...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true)
    })
  }

  return (
    <>
      <h2 className='head-text'>Get in touch</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email"/>
          <a href='mailto:justin.rodriguez121206@gmail.com' className='p-text'>justinlizarodriguez@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile"/>
          <a href='tel:+639158796526' className='p-text'>+63 (915) 879-6526</a>
        </div>
      </div>
      {!isFormSubmitted ? 
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type="text" placeholder='Name' name="name" value={name} onChange={handleInput}></input>
          </div>
          <div className='app__flex'>
            <input className='p-text' type="email" placeholder='Email' name="email" value={email} onChange={handleInput}></input>
          </div>
          <div className='app__flex'>
            <textarea 
              className='p-text'
              placeholder="Message"
              value={message}
              name="message"
              onChange={handleInput} 
            /> 
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? "Sending.." : "Send Message"}</button>
        </div> 
        : 
        <div className='sent_message'>
          <h3 className='head-text'>Thank You for Getting in Touch!<br/>You'll Hear from Me Soon.</h3>
        </div>
      }
      
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"), 
  "Contact",
  "app__navybg"
)