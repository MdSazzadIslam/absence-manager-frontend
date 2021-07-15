import React from "react";
import logo from "../assests/images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className="header_container">
        <ul className="header_nav">
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
