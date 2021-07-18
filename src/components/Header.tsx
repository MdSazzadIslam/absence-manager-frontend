import React from "react";
import logo from "../assests/images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="header_container">
        <ul className="header_nav">
          <li>
            <a
              href="https://github.com/MdSazzadIslam/absence-manager-frontend"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
