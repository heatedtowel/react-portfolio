import Navigation from "../navbar/navigation";
import { Navbar, Container, Nav } from "react-bootstrap";
import { motion } from 'framer-motion'
import './assets/css/header.css'
import Resume from './assets/Resume.pdf'

export default function Header({ theme, setCurrentTab, setCurrentTheme }) {

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
            <Nav.Link className='navLinks' key='resume' href={Resume}>Resume</Nav.Link>
          </Nav>
          <div className="switch" data-isOn={theme} onClick={() => setCurrentTheme(!theme)}>
            <motion.div
              className="handle"
              data-isOn={theme}
              transition={spring}
              layout
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}