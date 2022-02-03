import Navigation from "../navbar/navigation";
import { Navbar, Container, Nav } from "react-bootstrap";
import './assets/css/style.css'
import Resume from '../navbar/assets/resume.pdf'


export default function Header(props) {

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Jesse Monks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Navigation updateTab={props.updateTab} currentTab={props.currentTab} />
            <Nav.Link className='navLinks' key='resume' href={Resume}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

