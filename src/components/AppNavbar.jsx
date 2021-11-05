import React from "react";
import "./AppNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart,faSearch);

const AppNavbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-title">
        <p>STORE</p>
      <div className="nav-search">
        <input type="text" className="search-input" placeholder="Search"/>
        <FontAwesomeIcon icon="search" />
      </div>
      </div>
      <div className="nav-shopping-cart">
        <FontAwesomeIcon icon="shopping-cart" />
      </div>
    </div>
  );
};

export default AppNavbar;
