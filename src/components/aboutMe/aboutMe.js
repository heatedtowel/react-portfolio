import { motion } from 'framer-motion'
import React from 'react'

const aboutMe = ({ animation, transition }) => {
  return (
    <motion.p
      animate={animation.main}
      transition={transition.main}>
      Full-stack Developer with 4+ years experience in the administration of G-Suite, Atlassian, Slack, and Microsoft applications. I have worked as a Systems Analyst who determined laptop lifecycle and specifications as well as onboarding and offboarding of users and equipment. Experience in front-end web development with proficiencies in HTML, CSS, and JavaScript. Working towards full-stack development, proficient in front-end web development and javascript. Great collaboration and leadership skills, along with advanced problem solving and technical skills. It is my technical expertise in full-stack development,  my passion, and my leadership that make me an advantageous candidate for any team.
    </motion.p>
  )
}

export default aboutMe