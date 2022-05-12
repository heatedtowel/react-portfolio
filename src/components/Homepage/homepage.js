import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import Motivation from '../Motivation/motivation';
import AboutMe from '../AboutMe/aboutMe';
import Skills from '../Skills/skills';
import './assets/css/homepage.css'

export default function Homepage({ theme }) {

  const tabs = ['About Me', 'Motivation', 'Proficiencies']

  const [tab, setTab] = useState('About Me');

  const homeVariant = {
    aboutMe: {
      card: {
        opacity: 1,
        x: 0,
        borderRadius: '1rem',
        transition: {
          y: { duration: .5 },
          opacity: { duration: .5 },
          borderRadius: { duration: .5 },
          backgroundColor: { duration: .5 }
        }
      }
    },
    motivation: {
      card: {
        opacity: 1,
        x: 0,
        borderRadius: '1rem',
        transition: {
          y: { duration: .5 },
          opacity: { duration: .5 },
          borderRadius: { duration: .5 },
          backgroundColor: { duration: .5 }
        }
      }
    },
    skills: {
      card: {
        opacity: 1,
        x: 0,
        borderRadius: '1rem',
        transition: {
          staggerChildren: 0.2,
          y: { duration: .5 },
          opacity: { duration: .5 },
          borderRadius: { duration: .5 },
          backgroundColor: { duration: .5 }
        }
      }
    },
  }

  return (
    <div className='main--container'>
      <motion.div
        className='btn--container'
        variants={homeVariant.container}
        initial="hidden"
        animate="show"
      >
        {tabs.map((tab) => {
          return (
            <motion.button
              variants={homeVariant.item}
              key={tab}
              className='btn-tabs'
              whileHover='hover'
              whileTap={{ scale: .9 }}
              data-theme={theme}
              onClick={() => setTab(tab)}
            >{tab}
            </motion.button>
          )
        })}
      </motion.div>
      <motion.div>
        <AnimatePresence key={tab} exitBeforeEnter>
          {tab === 'About Me' ? <AboutMe key='About Me' variant={homeVariant} theme={theme} tab={tab} /> : null}
          {tab === 'Motivation' ? <Motivation key='Motivation' variant={homeVariant} theme={theme} /> : null}
          {tab === 'Proficiencies' ? <Skills key='Skills' variant={homeVariant} theme={theme} /> : null}
        </AnimatePresence >
      </motion.div >
    </div>
  )
};