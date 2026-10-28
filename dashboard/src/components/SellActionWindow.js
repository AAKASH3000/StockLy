import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContextSell from "./GeneralContextSell";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid, price }) => {

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(price);

  const total = stockQuantity * stockPrice;

  const { closeBuyWindow } = useContext(GeneralContextSell);

  const handleSellClick = async () => {
    try {

      await axios.delete(`http://localhost:3002/sellOrder/${uid}`);

      closeBuyWindow();

      // refresh orders
      window.location.reload();

    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="sell-window">

      <div className="regular-order">

        <div className="inputs">

          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
            />
          </fieldset>

        </div>

      </div>

      <div className="buttons">

        <span>Total ₹{total}</span>

        <div>

          <button className="btn btn-red" onClick={handleSellClick}>
            Sell
          </button>

          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default SellActionWindow;