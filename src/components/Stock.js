import React from 'react'

const Stock = ({stock, buyStock, parent, sellStock}) => (
  <div>

    <div onClick={
      parent === 'StockContainer' 
      ? event => buyStock(event, stock)
      : event => sellStock(event, stock)
      } className="card">
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            `${stock.ticker}: ${stock.price}`
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
