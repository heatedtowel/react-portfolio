import { Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import React from 'react'
import './assets/css/skills.css'

const technologies = ({ variant, theme }) => {

  const technologies = ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Mongoose', 'MySQL']

  const frameworks = ['Express', 'React.js', 'Framer Motion', 'React-Bootstrap', 'Apollo', 'GraphQL', 'SCSS']

  return (
    <motion.div
      className='skills'
      data-theme={theme}
      initial={{
        opacity: 0,
        x: '-100vw'
      }}
      variants={variant.skills}
      animate='card'
    >
      <ul>
        {technologies.map((item) => <li>{item}</li>)}
      </ul>
      <ul>
        {frameworks.map((item) => <li>{item}</li>)}
      </ul>
    </motion.div>
  )
}

export default technologies