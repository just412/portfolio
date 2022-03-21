import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {["Home", "About", "Skills", "Work", "Contact"].map((item, index) => (
            <a 
                href={`#${item}`} 
                key={item + index}
                className="app__navigation-dot"
                style={ active === item ? { backgroundColor: "#2b6777"} : {}}
            />
        ))}
    </div>
  )
}

export default NavigationDots