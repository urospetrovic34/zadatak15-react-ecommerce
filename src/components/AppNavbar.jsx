import React, { useState } from "react";
import "./AppNavbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faSearch,
  faBiohazard,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart, faSearch, faBiohazard, faTimes);

const AppNavbar = ({ searchValue, setSearchValue, cart, setCart }) => {
  const [visible, setVisible] = useState("modal-wrapper-cart-hidden");
  const [totalPrice, setTotalPrice] = useState(0);

  const openCart = () => {
    let priceAux = 0;
    console.log("OPEN CART");
    visible === "modal-wrapper-cart-hidden"
      ? setVisible("modal-wrapper-cart")
      : setVisible("modal-wrapper-cart-hidden");
    cart.map((item) => {
      priceAux += item.totalPrice;
      return null;
    });
    setTotalPrice(priceAux);
  };

  const updateArticle = (e) => {
    return console.log(e); // Nece da promeni vrednost value-a
  };

  const removeArticle = (i) => {
    setCart(cart.filter((item) => item.article.id !== i.article.id));
    setTotalPrice(totalPrice - i.totalPrice);
  };

  const makeOrder = () => {
    setCart([]);
    setVisible("modal-wrapper-cart-hidden");
    setTotalPrice(0);
  };

  return (
    <div className="nav-container">
      <div className="nav-title-small">
        <FontAwesomeIcon icon="biohazard" />
      </div>
      <div className="nav-title">
        <p>SNEAKERS</p>
        <div className="nav-search">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="search-input"
            placeholder="Search"
          />
          <FontAwesomeIcon icon="search" />
        </div>
      </div>
      <div className="nav-search-small">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Search"
        />
        <FontAwesomeIcon icon="search" />
      </div>
      <div className="nav-shopping-cart" onClick={openCart}>
        <FontAwesomeIcon icon="shopping-cart" />
      </div>
      <span className={`${visible}`}>
        <div className="modal-cart add-to-cart">
          {cart.map((item) => {
            return (
              <div
                className="modal-cart-article"
                id={item.article.id}
                key={item.idItemCart}
              >
                <img src={item.article.picture} alt={item.article.name} />
                <div className="cart-brand-name">
                  <div>{item.article.brand}</div>
                  <div className="cart-name">{item.article.name}</div>
                </div>
                <div className="cart-price">{item.totalPrice}</div>
                <div className="cart-input">
                  <input
                    className="cart-input-var"
                    type="number"
                    value={item.quantity}
                    onChange={updateArticle}
                  />
                </div>
                <div>
                  <FontAwesomeIcon
                    icon="times"
                    className="remove-button"
                    onClick={() => removeArticle(item)}
                  />
                </div>
              </div>
            );
          })}
          <div className="cart-total-price">
            <div>TOTAL PRICE</div>
            <div>{totalPrice} RSD</div>
          </div>
          <button className="order-button" onClick={() => makeOrder()}>
            ORDER
          </button>
        </div>
      </span>
    </div>
  );
};

export default AppNavbar;
