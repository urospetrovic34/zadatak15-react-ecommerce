import React from "react";
import "./Main.css";
import { articles } from "../util/articles.js";

const Main = () => {
  return (
    <div className="wrapper">
      <div className="main">
        {articles.map((data, index) => {
          return (
            <div id={data.id}>
              <img src={data.picture} alt={data.name} />
              <div className="brand-container">
              <p className="brand">{data.brand}</p>
              </div>
              <div className="name-container">
              <p className="name">{data.name}</p>
              </div>
              <div className="price-container">
                {
                    !data.discount ? (
                        <p className="price">{data.price} RSD</p>
                    ) : (
                        <p className="price slashed">{data.price} RSD</p>
                    )
                }
                {
                    !data.discount ? (
                        <span></span>
                    ) : (
                        <p className="discount">{data.discount} RSD</p>
                    )
                }
              </div>
            </div>
          );
        })}
      </div>
      <div className="modal">
          
      </div>
    </div>
  );
};

export default Main;
