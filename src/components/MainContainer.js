import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])
  const [nameSort, setNameSort] = useState(false)
  const [priceSort, setPriceSort] = useState(false)
  const [filteredStocks, setFilteredStocks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(data => {
      setStocks(data)
      setFilteredStocks(data)
    })
  }, [])

  function handleStockClick(id) {
    // const updatedStocks = stocks.filter((stock) => stock.id !== id)
    // setStocks(updatedStocks)

    const movedStocks = stocks.find((stock) => stock.id === id)
    setPortfolioStocks([...portfolioStocks, movedStocks])
  }

  function handlePortfolioClick(id) {
    const updatedStocks = portfolioStocks.filter(stock => stock.id !== id);
    setPortfolioStocks(updatedStocks);
  }

  function nameChecked(value) {
    setNameSort(value)
  }

  function priceChecked(value) {
    setPriceSort(value)
  }

  function filterStocks(filter) {
    if (filter === "All") {
      setFilteredStocks(stocks);
    } else {
      const filteredStocks = stocks.filter((stock) => stock.type === filter);
      setFilteredStocks(filteredStocks);
    }
  }

  return (
    <div>
      <SearchBar nameSort={nameChecked} priceSort={priceChecked} filterStocks={filterStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} handleStockClick={handleStockClick} nameSort={nameSort} priceSort={priceSort}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolioStocks} handlePortfolioClick={handlePortfolioClick}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

// App
  // Header
  // MainContainer
    // SearchBar
    // Portfolio Container
    // StockContainer
      // Stock