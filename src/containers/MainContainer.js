import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      stocks: [],
      portfolio: [],
      selectedSort: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(stocksArray => this.setState({stocks: stocksArray}))
  }

  buyStock = (event, portfolioStock) => {
    let alreadyBought = this.state.portfolio.includes(portfolioStock)
    if(alreadyBought === false){
      this.setState({portfolio: [...this.state.portfolio, portfolioStock]})
    }
  }

  sellStock = (event, soldStock) => {
    let newPortfolio = this.state.portfolio.filter(stock => stock.id !== soldStock.id)
    this.setState({portfolio: newPortfolio})
  }

  sortByName = () => {
    let nameSorted = [...this.state.stocks].sort((stockA, stockB) => {
      if(stockA.name < stockB.name) {
        return -1
      } else if (stockA.name > stockB.name){
        return 1
      } else {
        return 0
      }
    })
    this.setState({
      stocks: nameSorted,
      selectedSort: 'Alphabetically'
    })
  }

  sortByPrice = () => {
    let priceSorted = [...this.state.stocks].sort((stockA, stockB) => {
      if(stockA.price < stockB.price) {
        return -1
      } else if (stockA.price > stockB.price) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({
      stocks: priceSorted,
      selectedSort: 'Price'
    })
  }

  filterStocks = (event) => {
    let type = event.target.value
    fetch('http://localhost:3000/stocks')
      .then(res => res.json())
      .then(stocksArray => {
        this.setState({stocks: stocksArray})
        if(type !== "All") {
          let filteredStocks = [...this.state.stocks].filter(stock => stock.type === type)
          this.setState({stocks: filteredStocks})
        }
      }
    )
  }

  render() {
    return (
      <div>
        <SearchBar sortByName={this.sortByName} sortByPrice={this.sortByPrice} selectedSort={this.state.selectedSort} filterStocks={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
