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

  const determineColor = () => {
    let colors = ['blue', 'purple', 'green']

    console.log(colors[Math.floor(Math.random() * colors.length)])
  }

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
      scale: 1.2,
      transition: {
        duration: 0.3,
        yoyo: Infinity
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
      <h1>JM</h1>
      <motion.div
        className='icons'
        variants={container}
        initial="hidden"
        animate="show"
        data-theme={theme}
      >
        {icons.map((icon) => {
          return (
            <motion.i
              variants={container}
              whileHover={{
                scale: 1.3,
                color: { determineColor },
                transition: {
                  scale: { repeat: 0.3, yoyo: Infinity }
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
            whileTap={{ scale: 0 }}
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