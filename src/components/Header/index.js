import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./header.scss";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log({ location }, "🚀");
  const navigate = useNavigate();
  return (
    <header>
      <div>
        <img
          src={logo}
          alt="Logo.png"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
      </div>
      <div>
        <ul>
          <li>
            <Link
              className={location.pathname === "/projects" ? "active-link" : ""}
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={location.pathname === "/resume" ? "active-link" : ""}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active-link" : ""}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
