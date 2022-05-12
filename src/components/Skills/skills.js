import { motion } from 'framer-motion'
import React from 'react'
import './assets/css/skills.css'
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiReact,
  DiBootstrap
} from 'react-icons/di'
import { FiFramer } from 'react-icons/fi'
import { GrGraphQl } from 'react-icons/gr'
import { SiApollographql } from 'react-icons/si'

const technologies = ({ variant, theme }) => {

  const icons = {
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript1 />, <DiMongodb />, <DiMysql />],
    frameworks: [<DiReact />, <FiFramer />, <DiBootstrap />, <GrGraphQl />, <SiApollographql />]
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: .3,
        staggerChildren: 0.3
      }
    }
  }

  const container2 = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }


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
      <motion.ul
        className='icons'
        variants={container}
        initial="hidden"
        animate="show"
      >
        {icons.technologies.map((icon) => <motion.li variants={item}>{icon}</motion.li>)}
      </motion.ul>
      <motion.ul
        className='icons'
        variants={container2}
        initial="hidden"
        animate="show"
      >
        {icons.frameworks.map((icon) => <motion.li variants={item}>{icon}</motion.li>)}
      </motion.ul>
    </motion.div>
  )
}

export default technologies