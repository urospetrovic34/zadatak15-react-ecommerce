import React, { useEffect, useState } from "react";
import "./App.css";
import AppNavbar from "./components/AppNavbar.jsx";
import Main from "./components/Main.jsx";
import AppFooter from "./components/AppFooter.jsx";

const App = () => {
	const [searchValue, setSearchValue] = useState("");

	const itemsInCart = JSON.parse(localStorage.getItem("cart")) || [];
	const [cart, setCart] = useState(itemsInCart);
	const openCart = useState();
	const closeCart = useState();

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	useEffect(() => {
		setCart(JSON.parse(localStorage.getItem("cart")));
		// console.log(JSON.parse(localStorage.getItem("cart")));
	}, []);

	return (
		<div>
			<AppNavbar searchValue={searchValue} setSearchValue={setSearchValue} openCart={openCart} closeCart={closeCart} cart={cart} />
			<Main searchValue={searchValue} setCart={setCart} cart={cart} />
			<AppFooter />
		</div>
	);
};

export default App;
