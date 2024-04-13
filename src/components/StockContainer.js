import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleStockClick, nameSort, priceSort}) {

  const sortedAlphabetStocks = [...stocks].sort((a, b) => a.name.localeCompare(b.name))
  const sortedPriceStocks = [...stocks].sort((a, b) => a.price - b.price)

  const stocksToRender = nameSort ? sortedAlphabetStocks : priceSort ? sortedPriceStocks : stocks

  const stocksMap = stocksToRender.map((stock) => (
    <Stock key={stock.id} id={stock.id} name={stock.name} price={stock.price} ticker={stock.ticker} type={stock.type} handleStockClick={handleStockClick}/>
  ))

  return (
    <div>
      <h2>Stocks</h2>
      {stocksMap}
    </div>
  );
}

export default StockContainer;

// App
  // Header
  // MainContainer
    // SearchBar
    // Portfolio Container
    // StockContainer
      // Stock