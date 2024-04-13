import React, { useEffect, useState } from "react";

function SearchBar({nameSort, priceSort, filterStocks}) {
  const [alphabetChecked, setAlphabetChecked] = useState(false)
  const [priceChecked, setPriceChecked] = useState(false)

  useEffect(() => {
    nameSort(alphabetChecked)
    priceSort(priceChecked)
  }, [alphabetChecked, priceChecked])

  function handleAlphabetCheck() {
    setAlphabetChecked(!alphabetChecked)
  }

  function handlePriceCheck() {
    setPriceChecked(!priceChecked)
  }

  function handleFilter(e) {
    filterStocks(e.target.value)
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphabetChecked}
          onChange={handleAlphabetCheck}
          onClick={handleAlphabetCheck}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={priceChecked}
          onChange={handlePriceCheck}
          onClick={handlePriceCheck}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;

// App
  // Header
  // MainContainer
    // SearchBar
    // Portfolio Container
    // StockContainer
      // Stock