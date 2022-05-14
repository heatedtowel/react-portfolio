import { Nav } from "react-bootstrap";

export default function Navigation({ setCurrentTab }) {

  const navLinks = ["About Me", "Projects"]

  return (
    <>
      {navLinks.map(tab =>
      (<Nav.Link
        className='navLinks'
        key={tab}
        href={`#${tab}`}
        onClick={() => setCurrentTab(tab)}
      >{tab}
      </Nav.Link>)
      )}
    </>
  );
};




