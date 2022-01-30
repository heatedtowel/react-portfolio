import Navbar from "../navbar/nav";

export default function Header(props) {

  return (
    <ul className="nav nav-tabs justify-content-end bg-secondary p-3 justify-content-between">
      <h1>this is a tst</h1>
      <Navbar updateTab={props.updateTab} />
    </ul>
  );
}