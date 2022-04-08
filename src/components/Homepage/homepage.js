import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import Motivation from '../Motivation/motivation';
import AboutMe from '../AboutMe/aboutMe';
import Technologies from '../Technologies/technologies';
import './assets/css/homepage.css'

export default function Homepage() {

  const tabs = ['About Me', 'Motivation', 'Skills']

  const [tab, setTab] = useState('');

  const homeVariant = {
    aboutMe: {
      card: {
        opacity: 1,
        y: '300px',
        transition: {
          opacity: { duration: 1.0 },
          scale: { duration: 1.25 },
          y: { duration: 1.0 }
        }
      }
    },
    motivation: {
      card: {
        opacity: 1,
        y: '300px',
        transition: {
          opacity: { duration: 1.0 },
          scale: { duration: 1.25 },
          y: { duration: 1.0 }
        }
      }
    },
    skills: {
      card: {
        opacity: 1,
        y: '300px',
        transition: {
          opacity: { duration: 1.0 },
          scale: { duration: 1.25 },
          y: { duration: 1.0 }
        },
      }
    },
  }

  return (
    <AnimatePresence>
      <div >
        <div>
          {tabs.map((tab) => {
            return (
              <motion.button
                onClick={() => setTab(tab)}
              >{tab}</motion.button>
            )
          })}
        </div>
        {tab === 'About Me' ? <AboutMe key='About Me' variant={homeVariant} tab={tab} /> : null}
        {tab === 'Motivation' ? <Motivation key='Motivation' variant={homeVariant} tab={tab} /> : null}
        {tab === 'Skills' ? <Technologies key='Skills' variant={homeVariant} tab={tab} /> : null}
      </div >
    </AnimatePresence >
  )
};