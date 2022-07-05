import React from "react";
import "./coin.css";
export default function Coin({ name, price, image, pricechange, marketcap }) {
  return (
    <div className=" container coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="" />
          <h1>{name}</h1>
          <div className="coin-symbol"></div>
        </div>
        <div className="coin-data">
          <div className="coin-price">{price}</div>
          {pricechange < 0 ? (
            <p className="coin-precent red">{pricechange}</p>
          ) : (
            <p className="coin-precent green">{pricechange}</p>
          )}
          <div className="market-cap">{marketcap}</div>
        </div>
      </div>
    </div>
  );
}
