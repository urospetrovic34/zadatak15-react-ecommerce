import React, { useEffect, useState } from "react";
import "./Main.css";
import { articles } from "../util/articles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

const Main = () => {
  const [object, setObject] = useState({
    id: "",
    brand: "",
    name: "",
    sizes: "",
    price: "",
    discount: "",
    colour: "",
    picture: "",
  });
  const [visible, setVisible] = useState("modal-wrapper-hidden");

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
      sizes: "",
      price: "",
      discount: "",
      colour: "",
      picture: "",
    }));
  };

  return (
    <div className="wrapper">
      <div className="main">
        {articles.map((data, index) => {
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
            <div>
              <img src={object.picture} alt={object.name} />
            </div>
            <div>
              <p className="modal-brand">{object.brand}</p>
              <p className="modal-name">{object.name}</p>
              <FontAwesomeIcon icon="times" onClick={closeModal} className="close-modal"/>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Main;
