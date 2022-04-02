import { Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import React from 'react'

const technologies = (animation, transition) => {

  const technologies = ['HTML', 'CSS', 'SCSS', 'JavaScript', 'MongoDB', 'Mongoose', 'MySQL']

  const frameworks = ['Express', 'React.js', 'Framer Motion', 'React-Bootstrap', 'Apollo', 'GraphQL',]

  return (
    <Row>
      <Col>
        <ul>
          {technologies.map((tech) => {
            return (
              <motion.li
                animate={animation.main}
                transition={transition.main} >
                {tech}
              </motion.li>
            )
          })}
        </ul>
      </Col>
      <Col>
        <ul>
          {frameworks.map((tech) => {
            return (
              <motion.li
                animate={animation.main}
                transition={transition.main} >
                {tech}
              </motion.li>
            )
          })}
        </ul>
      </Col>
    </Row>
  )
}

export default technologies