import Navigation from "../navbar/navigation";
import { Navbar, Container, Nav, Button, ButtonGroup } from "react-bootstrap";
import './assets/css/style.css'
import Resume from './assets/Resume.pdf'
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";


export default function Header({ updateTab, updateTheme }) {

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Jesse Monks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navigation updateTab={updateTab} updateTheme={updateTheme} />
            <Nav.Link className='navLinks' key='resume' href={Resume}>Resume</Nav.Link>
          </Nav>
          <ButtonGroup aria-label="Basic example" className="themeBtn">
            <Button size="sm" onClick={() => updateTheme('App--light')} variant="light"> <FaLightbulb /> </Button>
            <Button size="sm" onClick={() => updateTheme('App--dark')} variant="dark"> <FaRegLightbulb /> </Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}