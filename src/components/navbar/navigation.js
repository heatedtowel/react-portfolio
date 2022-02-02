import { Button, Nav } from "react-bootstrap";


export default function Navigation({ currentTab, updateTab }) {

  const navLinks = ["About Me", "Projects", "Contact Me", "Resume"]

  return (
    <>
      {navLinks.map(result => (<Nav.Link className='navLinks' key={result} href={`#${result}`} onClick={() => updateTab(result)}>{result}</Nav.Link>)
      )
      }
    </>
  );
};




