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

  const container = {
    hidden: { opacity: 0, x: '-30px' },
    show: {
      opacity: 1,
      x: ['0px', '10px', '0px'],
      transition: {
        x: { duration: 1 },
        opacity: { duration: 1 },
        delayChildren: .3,
        staggerChildren: 0.1
      }
    }
  }

  const icons = {
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript1 />, <DiMongodb />, <DiMysql />],
    frameworks: [<DiReact />, <FiFramer />, <DiBootstrap />, <GrGraphQl />, <SiApollographql />]
  }

  const spring = {
    type: "spring",
    stiffness: 200,
    damping: 15,
  };

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Jesse Monks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navigation setCurrentTab={setCurrentTab} />
            <Nav.Link className='navLinks' key='resume' href={Resume} target="_blank">Resume</Nav.Link>
          </Nav>
          <motion.div
            className='icons'
            variants={container}
            initial="hidden"
            animate="show"
            data-theme={theme}
          >
            {icons.technologies.map((icon) => <motion.i variants={container} whileHover={{ scale: '1.1' }}>{icon}</motion.i>)}
            {icons.frameworks.map((icon) => <motion.i variants={container} >{icon}</motion.i>)}
          </motion.div>
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
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}