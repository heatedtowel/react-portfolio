import { Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import React from 'react'

const technologies = ({ variant }) => {

  const technologies = ['HTML', 'CSS', 'SCSS', 'JavaScript', 'MongoDB', 'Mongoose', 'MySQL']

  const frameworks = ['Express', 'React.js', 'Framer Motion', 'React-Bootstrap', 'Apollo', 'GraphQL',]

  return (
    <Row>
      <Col>
        <ul>
          {technologies.map((item) => {
            return (
              <motion.li
                key={item}
                initial={{ opacity: 0 }}
                variants={variant.skills}
                animate='card'
                style={{ color: 'white' }}
              >
                {item}
              </motion.li>
            )
          })}
        </ul>
      </Col>
      <Col>
        <ul>
          {frameworks.map((item) => {
            return (
              <motion.li
                key={item}
                initial={{ opacity: 0 }}
                variants={variant.skills}
                animate='card'
                style={{ color: 'white' }}
              >
                {item}
              </motion.li>
            )
          })}
        </ul>
      </Col>
    </Row>
  )
}

export default technologies