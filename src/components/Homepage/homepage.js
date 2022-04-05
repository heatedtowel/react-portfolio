import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Motivation from '../Motivation/motivation';
import AboutMe from '../AboutMe/aboutMe';
import Technologies from '../Technologies/technologies';
import './assets/css/homepage.css'

export default function Homepage() {

  const [tab, setTab] = useState('About Me');

  const variant = {
    card: {
      opacity: 1,
      scale: [0, 1],
      transition: {
        opacity: { duration: 3 },
        scale: { duration: 1.25 },
        y: { duration: 1.5 }
      }
    },
    text: {
      opacity: 1,
      scale: [0, 1],
      x: [-400, 0],
      transition: {
        duration: 2
      }
    }
  }

  // const animation = {
  //   main: {
  //     opacity: 1,
  //     scale: [0, 1]
  //   },
  //   secondary: {
  //     opacity: 1,
  //     scale: [0, 1],
  //     x: [-400, 0]
  //   }
  // }

  // const transition = {
  //   main: {
  //     opacity: { duration: 3 },
  //     scale: { duration: 1.25 },
  //     y: { duration: 1.5 }
  //   },
  //   secondary: {
  //     duration: 2
  //   }
  // }

  return (
    <motion.div
      variants={variant}
      animate="card"
      className="infoCard row  mt-5  col-11 col-lg-6 m-auto rounded">
      <Tabs
        activeKey={tab}
        onSelect={(tab) => setTab(tab)}
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab
          eventKey="About Me"
          title="About Me"
          className='text-light justify-content-center align-items-center p-2'>
          <AboutMe
            variant={variant} />
        </Tab>
        <Tab
          eventKey="Motivation"
          title="Motivation"
          className='text-light justify-content-center align-items-center p-2'>
          <Motivation
            variant={variant} />
        </Tab>
        <Tab
          eventKey="Technologies"
          title="Technologies"
          className='text-light'>
          <Technologies
            variant={variant} />
        </Tab>
      </Tabs>
    </motion.div >
  )
};