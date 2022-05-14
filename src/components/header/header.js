import Navigation from "../navbar/navigation";
import { Navbar, Container, Nav } from "react-bootstrap";
import { motion } from 'framer-motion'
import './assets/css/header.css'
import Resume from './assets/Resume.pdf'
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
import { hover } from "@testing-library/user-event/dist/hover";

export default function Header({ theme, setCurrentTab, setCurrentTheme }) {

  const icons = [<DiHtml5 />, <DiCss3 />, <DiJavascript1 />, <DiMongodb />, <DiMysql />, <DiReact />, <FiFramer />, <DiBootstrap />, <GrGraphQl />, <SiApollographql />]

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
      <div className="name--container">
        <motion.h1 variants={container} whileHover='hover'>JM</motion.h1>
        <motion.a href={Resume} target="_blank" variants={container} whileHover='hover'>Resume</motion.a>
      </div>
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
              }}>
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
    </div >
    // <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
    //   <Container>
    //     <Navbar.Brand>Jesse Monks</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Navigation setCurrentTab={setCurrentTab} />
    //         <Nav.Link className='navLinks' key='resume' href={Resume} target="_blank">Resume</Nav.Link>
    //       </Nav>
    //       <motion.div
    //         className='icons'
    //         variants={container}
    //         initial="hidden"
    //         animate="show"
    //         data-theme={theme}
    //       >
    //         {icons.technologies.map((icon) => <motion.i variants={container} whileHover={{ scale: '1.1' }}>{icon}</motion.i>)}
    //         {icons.frameworks.map((icon) => <motion.i variants={container} >{icon}</motion.i>)}
    //       </motion.div>
    //       <div className="switch" data-isOn={theme} onClick={() => setCurrentTheme(!theme)}>
    //         <motion.div
    //           className="handle"
    //           data-isOn={theme}
    //           transition={spring}
    //           whileHover={{ scale: 1.1 }}
    //           whileTap={{ scale: 0 }}
    //           layout
    //         />
    //       </div>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar >
  );
}