import React, { useState } from "react";

import SellActionWindow from "./SellActionWindow";

const GeneralContextSell = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  const handleOpenBuyWindow = (uid,price) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(price);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContextSell.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <SellActionWindow uid={selectedStockUID} price={selectedStockPrice}/>}
    </GeneralContextSell.Provider>
  );
};

export default GeneralContextSell;
