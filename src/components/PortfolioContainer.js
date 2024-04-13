import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, handlePortfolioClick}) {

  function handleClick(id) {
    handlePortfolioClick(id)
  }

  const portfolioStocks = stocks.map((stock) => 
  (
    <div key={stock.id}>
      <div className="card" onClick={() => handleClick(stock.id)}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  )
)

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks}
    </div>
  );
}

export default PortfolioContainer;

// App
  // Header
  // MainContainer
    // SearchBar
    // Portfolio Container
    // StockContainer
      // Stock