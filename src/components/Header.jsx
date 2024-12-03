import { Link } from "react-router-dom";
import "./style.css";
function Header() {
  return (
    <>
      <ul className="header">
        <Link className="navLinks" to={"/"}>
          <li>Home</li>
        </Link>
        <Link className="navLinks" to={"/browseBooks"}>
          <li>Browse Books</li>
        </Link>
        <Link className="navLinks" to={"/addBooks"}>
          <li>Add Books</li>
        </Link>
      </ul>
    </>
  );
}

export default Header;
