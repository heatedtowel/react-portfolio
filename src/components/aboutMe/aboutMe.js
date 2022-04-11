import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import './assets/css/aboutMe.css'

const aboutMe = ({ variant, theme, tab }) => {


  return (
    <AnimatePresence>
      <motion.p
        className='aboutMe'
        key='About Me'
        data-theme={theme}
        initial={{
          opacity: 0,
          x: '-100vw'
        }}
        variants={variant.aboutMe}
        animate='card'
        exit={{ y: -50 }}
      >
        Full-stack Developer with 4+ years experience in the administration of G-Suite, Atlassian, Slack, and Microsoft applications. I have worked as a Systems Analyst who determined laptop lifecycle and specifications as well as onboarding and offboarding of users and equipment. Experience in front-end web development with proficiencies in HTML, CSS, and JavaScript. Working towards full-stack development, proficient in front-end web development and javascript.
      </motion.p>
    </AnimatePresence>
  )
}

export default aboutMe