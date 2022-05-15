import Toggle from '../Toggle/toggle'
import { motion } from 'framer-motion'
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiReact,
  DiBootstrap
} from 'react-icons/di'
import { FiFramer } from 'react-icons/fi'
import { GrGraphQl } from 'react-icons/gr'
import { SiApollographql } from 'react-icons/si'

const technologies = ({ theme, setCurrentTheme }) => {

  const icons = [<DiHtml5 />, <DiCss3 />, <DiJavascript1 />, <DiMongodb />, <DiMysql />, <DiReact />, <FiFramer />, <DiBootstrap />, <GrGraphQl />, <SiApollographql />]

  const containerVariants = {
    hidden: { opacity: 0, y: '-200px' },
    show: {
      opacity: 1,
      y: '0',
      transition: {
        y: { duration: .5 },
        opacity: { duration: 2 },
        delayChildren: .3,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className='icons'
      variants={containerVariants}
      initial="hidden"
      animate="show"
      data-theme={theme}
    >
      {icons.map((icon, i) => {
        return (
          <motion.i
            variants={containerVariants}
            whileHover={{
              scale: [1, 1.3],
              color: ['rgb(117,7,135)', 'rgb(228,3,3)', 'rgb(255,140,0)', 'rgb(255,237,0)', 'rgb(0,128,38)', 'rgb(0,77,255)'],
              transition: {
                color: { duration: 1.5, repeat: Infinity },
                scale: { repeat: Infinity }
              }
            }}
            data-theme={theme}>
            {icon}
          </motion.i>)
      })}
      <Toggle theme={theme} setCurrentTheme={setCurrentTheme} />
    </motion.div>
  )
}

export default technologies