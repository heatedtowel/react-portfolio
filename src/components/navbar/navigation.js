import { Nav } from "react-bootstrap";


export default function Navigation({ currentTab, updateTab }) {

  const navLinks = ["About Me", "Projects"]

  return (
    <>
      {navLinks.map(tab => (<Nav.Link className='navLinks' key={tab} href={`#${tab}`} onClick={() => updateTab(tab)}>{tab}</Nav.Link>)
      )
      }
    </>
  );
};




