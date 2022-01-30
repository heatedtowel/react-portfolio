export default function Navbar(props) {

  const navLinks = ["About Me", "Projects", "Contact Me", "Resume"]

  return (
    <>
      {navLinks.map(result => (
        <li className="nav-item" key={result} onClick={() => props.updateTab(result)}>
          <a className="nav-link text-light" href={`#${result}`}>{result}</a>
        </li>
      ))}
    </>
  );
};