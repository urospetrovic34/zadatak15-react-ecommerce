import React from "react";
import "./AppNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faSearch, faBiohazard } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faSearch, faBiohazard);

const AppNavbar = ({ searchValue, setSearchValue }) => {
	return (
		<div className="nav-container">
			<div className="nav-title-small">
				<FontAwesomeIcon icon="biohazard" />
			</div>
			<div className="nav-title">
				<p>SNEAKERS</p>
				<div className="nav-search">
					<input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="search-input" placeholder="Search" />
					<FontAwesomeIcon icon="search" />
				</div>
			</div>
			<div className="nav-search-small">
				<input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="search-input" placeholder="Search" />
				<FontAwesomeIcon icon="search" />
			</div>
			<div className="nav-shopping-cart">
				<FontAwesomeIcon icon="shopping-cart" />
			</div>
		</div>
	);
};

export default AppNavbar;
