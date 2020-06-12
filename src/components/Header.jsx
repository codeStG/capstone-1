import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <h1
        className="p-3 mb-2 bg-dark text-white"
        style={{ textAlign: "center" }}
      >
        George's Record Store
        <br />
        <Link to="/" className="nav">
          Products
        </Link>
        <Link to="/cart" className="nav">
          Cart
        </Link>
      </h1>
    </div>
  );
};

export default Header;
