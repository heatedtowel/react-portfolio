import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import Motivation from '../Motivation/motivation';
import AboutMe from '../AboutMe/aboutMe';
import Skills from '../Skills/skills';
import './assets/css/homepage.css'

export default function Homepage({ theme }) {

  const tabs = ['About Me', 'Motivation', 'Proficiencies']

  const [tab, setTab] = useState('');

  const homeVariant = {
    aboutMe: {
      card: {
        opacity: 1,
        x: 0,
        borderRadius: '1rem',
        backgroundColor: 'rgba(93, 115, 126, .3)',
        transition: {
          y: { duration: .5 },
          opacity: { duration: 1 },
          borderRadius: { duration: 1 },
          backgroundColor: { duration: 1 }
        }
      }
    },
    motivation: {
      card: {
        opacity: 1,
        x: 0,
        borderRadius: '1rem',
        backgroundColor: 'rgba(93, 115, 126, .3)',
        transition: {
          y: { duration: .5 },
          opacity: { duration: 1 },
          borderRadius: { duration: 1 },
          backgroundColor: { duration: 1 }
        }
      }
    },
    skills: {
      card: {
        opacity: 1,
        x: 0,
        borderRadius: '1rem',
        backgroundColor: 'rgba(93, 115, 126, .3)',
        transition: {
          y: { duration: .5 },
          opacity: { duration: 1 },
          borderRadius: { duration: 1 },
          backgroundColor: { duration: 1 }
        }
      }
    },
  }

  return (
    <div className='btn--container'>
      {tabs.map((tab) => {
        return (
          <motion.button
            className='btn-tabs'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: .9 }}
            data-theme={theme}
            onClick={() => setTab(tab)}
          >{tab}
          </motion.button>
        )
      })}

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