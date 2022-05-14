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

const technologies = ({ container, theme, setCurrentTheme, spring }) => {

  const icons = [<DiHtml5 />, <DiCss3 />, <DiJavascript1 />, <DiMongodb />, <DiMysql />, <DiReact />, <FiFramer />, <DiBootstrap />, <GrGraphQl />, <SiApollographql />]

  return (
    <motion.div
      className='icons'
      variants={container}
      initial="hidden"
      animate="show"
      data-theme={theme}
    >
      {icons.map((icon, i) => {
        return (
          <motion.i
            variants={container}
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
      <div className="switch" data-isOn={theme} onClick={() => setCurrentTheme(!theme)}>
        <motion.div
          className="handle"
          data-isOn={theme}
          transition={spring}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: .6 }}
          layout
        />
      </div>
    </motion.div>
  )
}

export default technologies