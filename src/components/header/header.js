import { motion } from 'framer-motion'
import Skills from '../Skills/skills'
import './assets/css/header.css'
import Resume from './assets/Resume.pdf'

export default function Header({ theme, setCurrentTheme }) {

  const container = {
    hidden: { opacity: 0, y: '-80px' },
    show: {
      opacity: 1,
      y: '0',
      transition: {
        y: { duration: .5 },
        opacity: { duration: 2 },
        delayChildren: .3,
        staggerChildren: 0.1
      }
    },
    hover: {
      color: ['rgb(117,7,135)', 'rgb(228,3,3)', 'rgb(255,140,0)', 'rgb(255,237,0)', 'rgb(0,128,38)', 'rgb(0,77,255)'],
      transition: {
        color: { duration: 1.5, repeat: Infinity }
      }
    }
  };

  const spring = {
    type: "spring",
    stiffness: 200,
    damping: 15,
  };

  return (
    <div className="header--container">
      <div className="name--container" data-theme={theme}>
        <motion.h1 variants={container} whileHover='hover'>JM</motion.h1>
        <motion.a href={Resume} target="_blank" variants={container} whileHover='hover'>Resume</motion.a>
      </div>
      <Skills container={container} spring={spring} theme={theme} setCurrentTheme={setCurrentTheme} />
    </div >
  );
}