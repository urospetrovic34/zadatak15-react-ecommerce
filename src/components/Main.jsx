import React, { useState } from "react";
import "./Main.css";
import { articles } from "../util/articles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

library.add(faTimes, faChevronUp, faChevronDown);

const Main = () => {
  const [object, setObject] = useState({
    id: "",
    brand: "",
    name: "",
    sizes: [],
    price: "",
    discount: "",
    colour: "",
    picture: "",
  });
  const [visible, setVisible] = useState("modal-wrapper-hidden");
  const [ammount, setAmmount] = useState(1);
  const brands = [];
  const colours = [];
  const sizes = [];
  const sizesNumbers = Array.from({ length: 12 }, (_, i) => i + 37);
  const uniqueBrands = [
    ...new Map(articles.map((item) => [item["brand"], item])).values(),
  ];
  uniqueBrands.map(({ id, brand }) =>
    brands.push({ id: id, checked: false, value: brand })
  );
  const uniqueColours = [
    ...new Map(articles.map((item) => [item["colour"], item])).values(),
  ];
  uniqueColours.map(({ id, colour }) =>
    colours.push({ id: id, checked: false, value: colour })
  );
  for (let i = 0; i < 12; i++) {
    sizes.push({ id: i, checked: false, value: sizesNumbers[i] });
  }

  const openModal = (passedId) => {
    articles.forEach((article) =>
      article.id === passedId
        ? setObject((state) => ({
            ...state,
            id: article.id,
            brand: article.brand,
            name: article.name,
            sizes: article.sizes,
            price: article.price,
            discount: article.discount,
            colour: article.colour,
            picture: article.picture,
          }))
        : null
    );
    setVisible("modal-wrapper");
  };

  const closeModal = () => {
    setVisible("modal-wrapper-hidden");
    setObject((state) => ({
      ...state,
      id: "",
      brand: "",
      name: "",
      sizes: [],
      price: "",
      discount: "",
      colour: "",
      picture: "",
    }));
    setAmmount(1)
  };

  const addAmmount = () => {
    let currentAmmount = ammount;
    setAmmount((currentAmmount += 1));
  };

  const subtractAmmount = () => {
    if (ammount > 1) {
      let currentAmmount = ammount;
      setAmmount((currentAmmount -= 1));
    }
  };

  return (
    <div className="wrapper">
      <div className="filter-menu">
        <p className="filter-title">FILTER</p>
        <div className="article-model-container">
          <div className="article-model-container-title">
            <div>MODEL</div>
            <FontAwesomeIcon
              icon="chevron-up"
              className="dropdown-menu-button"
            />
          </div>
          <div className="article-model-container-list">
            {brands.map((data) => {
              return (
                <div key={data.id} className="checkbox-custom">
                  <input
                    type="checkbox"
                    id={data.id}
                    name={data.value}
                    checked={data.checked}
                  />
                  <label htmlFor={data.value}>{data.value}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="article-colour-container">
          <div className="article-colour-container-title">
            <div>COLOUR</div>
            <FontAwesomeIcon
              icon="chevron-up"
              className="dropdown-menu-button"
            />
          </div>
          <div className="article-colour-container-list">
            {colours.map((data) => {
              return (
                <div key={data.id} className="checkbox-custom">
                  <input
                    type="checkbox"
                    id={data.id}
                    name={data.value}
                    checked={data.checked}
                  />
                  <label htmlFor={data.value}>{data.value}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="article-size-container">
          <div className="article-size-container-title">
            <div>SIZES</div>
          </div>
          <div className="article-size-container-list">
            {sizes.map((data) => {
              return (
                <div
                  key={data.id}
                  className="size-box"
                  data-checked={data.checked}
                >
                  <p>{data.value}</p>
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
        {articles.map((data) => {
          return (
            <div
              className="article-item"
              id={data.id}
              key={data.id}
              onClick={() => openModal(data.id)}
            >
              <img src={data.picture} alt={data.name} />
              <div className="brand-container">
                <p className="brand">{data.brand}</p>
              </div>
              <div className="name-container">
                <p className="name">{data.name}</p>
              </div>
              <div className="price-container">
                {!data.discount ? (
                  <p className="price">{data.price} RSD</p>
                ) : (
                  <p className="price slashed">{data.price} RSD</p>
                )}
                {!data.discount ? (
                  <span></span>
                ) : (
                  <p className="discount">{data.discount} RSD</p>
                )}
              </div>
            </div>
          );
        })}
        <span className={`${visible}`}>
          <div className="modal">
            <div className="modal-image">
              <img src={object.picture} alt={object.name} />
            </div>
            <div className="modal-info">
              <div>
                <div className="modal-first-row">
                  <p className="modal-brand">{object.brand}</p>
                  <FontAwesomeIcon
                    icon="times"
                    onClick={closeModal}
                    className="close-modal"
                  />
                </div>
                <p className="modal-name">{object.name}</p>
                <div className="modal-second-row">
                  {object.sizes.map((data) => {
                    return (
                      <div
                        key={data}
                        className="size-box-modal"
                        data-checked={data}
                      >
                        <p>{data}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="modal-ammount">
                  <div
                    id="subtract"
                    className="ammount-button"
                    onClick={subtractAmmount}
                  >
                    -
                  </div>
                  <div>
                    <input
                      type="text"
                      className="ammount-input"
                      value={ammount}
                    />
                  </div>
                  <div id="add" className="ammount-button" onClick={addAmmount}>
                    +
                  </div>
                </div>
              </div>
              <div>
                <button className="modal-order">
                  {!object.discount ? (
                    <p className="discount">{object.price} RSD</p>
                  ) : (
                    <p className="discount">{object.discount} RSD</p>
                  )}
                </button>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Main;
