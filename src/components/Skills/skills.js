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

  const technologies = [<DiHtml5 />, <DiCss3 />, <DiJavascript1 />, <DiMongodb />, <DiMysql />]

  const frameworks = [<DiReact />, <FiFramer />, <DiBootstrap />, <GrGraphQl />, <SiApollographql />]

  return (
    <motion.div
      className='skills'
      data-theme={theme}
      initial='hidden'
      variants={variant.skills}
      animate='card'
    >
      <ul className='icons'>
        {technologies.map((item) => <li>{item}</li>)}
      </ul>
      <ul className='icons'>
        {frameworks.map((item) => <li>{item}</li>)}
      </ul>
    </motion.div>
  )
}

export default technologies