import React from "react";

function Stock({name, price, id, ticker, type, handleStockClick}) {

  function handleClick() {
    handleStockClick(id)
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

// App
  // Header
  // MainContainer
    // SearchBar
    // Portfolio Container
    // StockContainer
      // Stock