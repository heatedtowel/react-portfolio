import { motion } from 'framer-motion'
import Skills from '../Skills/skills'
import Resume from './assets/Resume.pdf'
import './assets/css/header.css'

export default function Header({ theme, setCurrentTheme }) {

  const nameVariants = {
    animateJ: {
      x: 0,
      transition: {
        x: { duration: 1 },
      }
    },
    animateM: {
      opacity: 1,
      transition: {
        duration: 4
      }
    },
    animateResume: {
      opacity: 1,
      transition: {
        duration: 5
      }
    },
    inViewJ: {
      color: ['rgb(117,7,135)', 'rgb(228,3,3)', 'rgb(255,140,0)', 'rgb(255,237,0)', 'rgb(0,128,38)', 'rgb(0,77,255)'],
      transition: {
        x: { duration: 1 },
        color: { duration: 10, repeat: Infinity }
      }
    },
    inViewM: {
      color: ['rgb(117,7,135)', 'rgb(228,3,3)', 'rgb(255,140,0)', 'rgb(255,237,0)', 'rgb(0,128,38)', 'rgb(0,77,255)'],
      transition: {
        x: { duration: 1 },
        color: { delay: .5, duration: 10, repeat: Infinity }
      }
    }
  }

  return (
    <div className="header--container" >
      <div className="name--container" data-theme={theme}>
        <motion.h1
          initial={{ x: -1000 }}
          variants={nameVariants}
          animate='animateJ'
          whileInView='inViewJ'
        >J
        </motion.h1>
        <motion.h1
          initial={{ x: -30, opacity: 0 }}
          variants={nameVariants}
          animate='animateM'
          whileInView='inViewM'
        >M
        </motion.h1>
        <motion.a
          initial={{ opacity: 0 }}
          variants={nameVariants}
          animate='animateResume'
          href={Resume}
          target="_blank"
          whileHover='hover'
        >Resume
        </motion.a>
      </div>
      <Skills theme={theme} setCurrentTheme={setCurrentTheme} />
    </div >
  );
}