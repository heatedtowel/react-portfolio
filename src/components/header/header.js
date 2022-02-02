import Navigation from "../navbar/navigation";
import { Navbar, Container } from "react-bootstrap";


export default function Header(props) {

  return (

    <Navbar bg='dark' variant='dark p-4' >
      <Container>
        <Navbar.Brand href="#home">Jesse Monks</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navigation updateTab={props.updateTab} currentTab={props.currentTab} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

