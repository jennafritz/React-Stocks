import React from 'react';

const SearchBar = ({sortByName, sortByPrice, selectedSort, filterStocks}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={selectedSort === 'Alphabetically' ? true : false} onChange={() => sortByName()}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={selectedSort === 'Price' ? true : false} onChange={() => sortByPrice()}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => filterStocks(event)}>
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
