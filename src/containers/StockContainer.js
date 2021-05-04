import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stock => <Stock parent='StockContainer' stock={stock} key={stock.id} buyStock={this.props.buyStock}/>)
          //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
