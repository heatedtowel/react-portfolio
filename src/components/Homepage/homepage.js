import { useState } from 'react';
import { motion } from 'framer-motion'
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
      hidden: {
        opacity: 0,
        x: '-100vw'
      },
      card: {
        opacity: 1,
        x: 0,
        borderRadius: '1rem',
        backgroundColor: 'rgba(93, 115, 126, .3)',
        transition: {
          staggerChildren: 0.5,
          y: { duration: .5 },
          opacity: { duration: 1 },
          borderRadius: { duration: 1 },
          backgroundColor: { duration: 1 }
        }
      }
    },
    container: {
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5
        }
      }
    },
    item: {
      hidden: { opacity: 0 },
      show: { opacity: 1 }
    }
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: .9 }}
              data-theme={theme}
              onClick={() => setTab(tab)}
            >{tab}
            </motion.button>
          )
        })}
      </motion.div>

      <motion.div>
        {tab === 'About Me' ? <AboutMe key='About Me' variant={homeVariant} theme={theme} tab={tab} /> : null}
        {tab === 'Motivation' ? <Motivation key='Motivation' variant={homeVariant} theme={theme} /> : null}
        {tab === 'Proficiencies' ? <Skills key='Skills' variant={homeVariant} theme={theme} /> : null}
      </motion.div >
    </div>
  )
};