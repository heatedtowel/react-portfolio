import React from 'react'
import { motion } from 'framer-motion'
import './assets/css/motivation.css'

const motivation = ({ variant, theme }) => {
  return (
    <motion.p
      className='motivation'
      data-theme={theme}
      initial={{ opacity: 0 }}
      variants={variant.motivation}
      animate='card'
    >
      The motivation behind transitioning to want to become a developer is my drive for continuous personal development along with a love for problem solving.I have immense problem solving skills from being an automotive technician for 5 + years and with a love for technology made the switch to IT.Bridging the gap between IT and web development came from a passion for creating things and wanting to expand my knowledge in my field along with bringing in new opportunities for growth.
    </motion.p >
  )
}

export default motivation