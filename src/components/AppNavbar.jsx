import React from "react";
import "./AppNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faSearch, faBiohazard } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react/cjs/react.development";

library.add(faShoppingCart, faSearch, faBiohazard);

const AppNavbar = ({ searchValue, setSearchValue, cart }) => {
	//const [visible2, setVisible2] = useState("modal-wrapper-hidden");

	const openCart = () => {
		console.log("OPEN CART");
		//setVisible2("modal-wrapper");
	};

	const closeCart = () => {
		//setVisible2("modal-wrapper-hidden");
	};
	console.log(cart);
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
			<div className="nav-shopping-cart" onClick={openCart}>
				<FontAwesomeIcon icon="shopping-cart" />
			</div>
			<span className="modal-wrapper-hidden">
				<div className="modal add-to-cart">
					{cart.map((item) => {
						console.log(item.idItemCart);
						return (
							<div className="article-item" id={item.article.id} key={item.idItemCart}>
								<img src={item.article.picture} alt={item.article.name} />
								<div className="brand-container">
									<p className="brand">{item.article.brand}</p>
								</div>
								<div className="name-container">
									<p className="name">{item.article.name}</p>
								</div>
								<div className="price-container">
									<p>{item.totalPrice}</p>
								</div>
								<div className="size-container">
									<p>{item.size}</p>
								</div>
								<input type="number" value={item.quantity} readOnly />
							</div>
						);
					})}
					<FontAwesomeIcon icon="times" onClick={closeCart} className="close-modal" />
				</div>
			</span>
		</div>
	);
};

export default AppNavbar;