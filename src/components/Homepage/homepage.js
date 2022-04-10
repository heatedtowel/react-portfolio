import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import Motivation from '../Motivation/motivation';
import AboutMe from '../AboutMe/aboutMe';
import Technologies from '../Technologies/technologies';
import './assets/css/homepage.css'

export default function Homepage({ theme }) {

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
          y: { duration: .5 }
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
          y: { duration: .5 }
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
          y: { duration: .5 }
        },
      }
    },
  }

  return (
    <AnimatePresence>
      <div className='homepage--container'>
        <div>
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
        </div>
        <div className='tabs'>
          {tab === 'About Me' ? <AboutMe key='About Me' variant={homeVariant} theme={theme} /> : null}
          {tab === 'Motivation' ? <Motivation key='Motivation' variant={homeVariant} theme={theme} /> : null}
          {tab === 'Skills' ? <Technologies key='Skills' variant={homeVariant} theme={theme} /> : null}
        </div >
      </div>
    </AnimatePresence >
  )
};