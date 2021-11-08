import React, { useEffect, useState } from "react";
import "./Main.css";
import articles from "../util/articles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes, faChevronUp, faChevronDown);

const Main = ({ searchValue, cart, setCart }) => {
	console.log("Ovo je moj cart: " + cart);
	const [visible, setVisible] = useState("modal-wrapper-hidden");
	const [search, setSearch] = useState({
		brands: [],
		size: null,
		colours: [],
		priceFrom: "",
		priceTo: "",
	});
	const [searchData, setSearchData] = useState({
		brands: [],
		colours: [],
		sizes: [],
	});

	const [item, setItem] = useState({
		quantity: 0,
		size: null,
		article: null,
	});

	useEffect(() => {
		initData(articles);
	}, []);

	const initData = (articles) => {
		let brands = [];
		let colours = [];
		let sizes = [];

		articles.filter((article) => {
			if (!brands.includes(article.brand)) {
				brands.push(article.brand);
			}
			if (!colours.includes(article.colour)) {
				colours.push(article.colour);
			}

			article.sizes.filter((size) => {
				if (!sizes.includes(size)) {
					sizes.push(size);
				}
			});
		});

		setSearchData({ brands: brands, colours: colours, sizes: sizes });
	};

	// const brands = [];
	// const colours = [];
	// const sizes = [];
	// const sizesNumbers = Array.from({ length: 12 }, (_, i) => i + 37);
	// const uniqueBrands = [...new Map(articles.map((item) => [item["brand"], item])).values()];
	// uniqueBrands.map(({ id, brand }) => brands.push({ id: id, checked: false, value: brand }));
	// const uniqueColours = [...new Map(articles.map((item) => [item["colour"], item])).values()];
	// uniqueColours.map(({ id, colour }) => colours.push({ id: id, checked: false, value: colour }));
	// for (let i = 0; i < 12; i++) {
	// 	sizes.push({ id: i, checked: false, value: sizesNumbers[i] });
	// }

	const openModal = (article) => {
		setItem({ ...item, article: article });
		setVisible("modal-wrapper");
	};

	const closeModal = () => {
		setVisible("modal-wrapper-hidden");
		setItem({
			quantity: 0,
			size: null,
			article: null,
		});
	};

	const handlerSearchBrands = (id) => {
		if (search.brands.includes(id)) {
			setSearch((prevSearch) => {
				return {
					...prevSearch,
					brands: prevSearch.brands.filter((brandId) => brandId !== id),
				};
			});
		} else {
			setSearch((prevSearch) => {
				return {
					...prevSearch,
					brands: [...prevSearch.brands, id],
				};
			});
		}
	};

	const handlerSearchSize = (size) => {
		if (search.size === size) {
			setSearch({ ...search, size: null });
		} else {
			setSearch({ ...search, size: size });
		}
	};

	const handlerSearchColors = (id) => {
		if (search.colours.includes(id)) {
			setSearch({ ...search, colours: search.colours.filter((colorId) => colorId !== id) });
		} else {
			setSearch({ ...search, colours: [...search.colours, id] });
		}
	};

	const addToCart = () => {
		let quantity = item.quantity < 1 ? 1 : item.quantity;
		let price = item.article.price * quantity;

		let cartItem = {
			article: item.article,
			totalPrice: price,
			quantity: quantity,
			size: item.size,
		};

		console.log(cart);
		setCart([...cart, cartItem]);
		closeModal();

		alert(`Uspseno dodat proizvod ${cartItem.article.name} u korpu!`);
	};

	return (
		<div className="wrapper">
			<div className="filter-menu">
				<p className="filter-title">FILTER</p>
				<div className="article-model-container">
					<div className="article-model-container-title">
						<div>MODEL</div>
						<FontAwesomeIcon icon="chevron-up" className="dropdown-menu-button" />
					</div>
					<div className="article-model-container-list">
						{searchData.brands.map((brand, index) => (
							<div key={index} className="checkbox-custom">
								<input type="checkbox" id={`brand${index}`} checked={search.brands.includes(brand)} onChange={() => handlerSearchBrands(brand)} />
								<label htmlFor={`brand${index}`}>{brand}</label>
							</div>
						))}
					</div>
				</div>
				<div className="article-colour-container">
					<div className="article-colour-container-title">
						<div>COLOUR</div>
						<FontAwesomeIcon icon="chevron-up" className="dropdown-menu-button" />
					</div>
					<div className="article-colour-container-list">
						{searchData.colours.map((colour, index) => (
							<div key={index} className="checkbox-custom">
								<input type="checkbox" id={`colour-${index}`} checked={search.colours.includes(colour)} onChange={() => handlerSearchColors(colour)} />
								<label htmlFor={`colour-${index}`}>{colour}</label>
							</div>
						))}
					</div>
				</div>
				<div className="article-size-container">
					<div className="article-size-container-title">
						<div>SIZES</div>
					</div>
					<div className="article-size-container-list">
						{searchData.sizes.map((size, index) => {
							return (
								<div onClick={() => handlerSearchSize(size)} key={index} className="size-box" style={{ backgroundColor: search.size === size ? "#FF0000" : "#FFF" }}>
									<p>{size}</p>
								</div>
							);
						})}
					</div>
				</div>
				<div className="article-price-container">
					<div className="article-price-container-title">
						<div>PRICE</div>
					</div>
					<div className="article-price-container-list">
						<p className="article-price-number-desc">FROM</p>
						<input type="number" />
						<p className="article-price-number-desc">TO</p>
						<input type="number" />
						<button className="article-price-button">APPLY PRICE</button>
					</div>
				</div>
			</div>
			<div className="main">
				{articles.map((article) => {
					if (search.brands.length > 0 && !search.brands.includes(article.brand)) {
						return null;
					}

					if (search.colours.length > 0 && !search.colours.includes(article.colour)) {
						return null;
					}

					if (search.size && !article.sizes.includes(search.size)) {
						return null;
					}

					if (search.priceFrom && search.priceFrom > article.price) {
						return null;
					}

					if (search.priceTo && search.priceTo < article.price) {
						return null;
					}

					if (searchValue && !article.name.toLowerCase().includes(searchValue.toLowerCase())) {
						return null;
					}

					return (
						<div className="article-item" id={article.id} key={article.id} onClick={() => openModal(article)}>
							<img src={article.picture} alt={article.name} />
							<div className="brand-container">
								<p className="brand">{article.brand}</p>
							</div>
							<div className="name-container">
								<p className="name">{article.name}</p>
							</div>
							<div className="price-container">
								{!article.discount ? <p className="price">{article.price} RSD</p> : <p className="price slashed">{article.price} RSD</p>}
								{!article.discount ? <span></span> : <p className="discount">{article.discount} RSD</p>}
							</div>
						</div>
					);
				})}
				<span className={`${visible}`}>
					<div className="modal">
						{item.article && (
							<>
								<div className="modal-image">
									<img src={item.article.picture} alt={item.article.name} />
								</div>
								<div className="modal-info">
									<div>
										<div className="modal-first-row">
											<p className="modal-brand">{item.article.brand}</p>
											<FontAwesomeIcon icon="times" onClick={closeModal} className="close-modal" />
										</div>
										<p className="modal-name">{item.article.name}</p>
										<div className="modal-second-row">
											{item.article.sizes.map((article, i) => {
												return (
													<div key={i} className="size-box-modal" style={{ backgroundColor: article === item.size ? "#FF0000" : "#FFF" }} article-checked={article} onClick={() => setItem({ ...item, size: article })}>
														<p>{article}</p>
													</div>
												);
											})}
										</div>
									</div>
									<div>
										<input type="number" name="" id="" placeholder="Quantity" value={item.quantity} onChange={(e) => setItem({ ...item, quantity: e.target.value })} />
										<button className="modal-order" onClick={addToCart}>
											{!item.article.discount ? <p className="discount">{item.article.price} RSD</p> : <p className="discount">{item.article.discount} RSD</p>}
										</button>
									</div>
								</div>
							</>
						)}
					</div>
				</span>
			</div>
		</div>
	);
};

export default Main;
