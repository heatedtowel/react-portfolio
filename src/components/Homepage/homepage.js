import { useState } from 'react';
import { Tabs, Tab, Row, Col, ListGroup } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Motivation from '../Motivation/motivation';
import AboutMe from '../AboutMe/aboutMe';
import Technologies from '../Technologies/technologies';
import './assets/css/homepage.css'

export default function Homepage() {

  const tabs = ['About Me', 'Motivation', 'Skills']

  const [tab, setTab] = useState('');

  const variant = {
    aboutMe: {
      card: {
        opacity: tab === 'About Me' ? 1 : 0,
        // scale: [0, 1],
        y: tab === 'About Me' ? '300px' : 0,
        transition: {
          opacity: { duration: 1.0 },
          scale: { duration: 1.25 },
          y: { duration: 1.0 }
        }
      }
    },
    motivation: {
      card: {
        opacity: tab === 'Motivation' ? 1 : 0,
        // scale: [0, 1],
        y: tab === 'Motivation' ? '200px' : 0,
        transition: {
          opacity: { duration: 1.0 },
          scale: { duration: 1.25 },
          y: { duration: 1.0 }
        }
      }
    },
    skills: {
      card: {
        opacity: tab === 'Skills' ? 1 : 0,
        // scale: [0, 1],
        y: tab === 'Skills' ? '50px' : 0,
        transition: {
          opacity: { duration: 1.0 },
          scale: { duration: 1.25 },
          y: { duration: 1.0 }
        }
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

  return (
    <div>
      {tabs.map((tab) => {
        return (
          <button onClick={() => setTab(tab)}>{tab}</button>
        )
      })}
      <AboutMe variant={variant} />
      <Motivation variant={variant} />
      <Technologies variant={variant} />
    </div >
  )
};